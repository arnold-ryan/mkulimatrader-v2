/**
 * Appwrite LocalStorage Shim
 * --------------------------
 * Intercepts all fetch() calls to cloud.appwrite.io and handles them
 * using the browser's localStorage instead.
 *
 * This means the app needs NO Appwrite account, no backend, no setup.
 * All user token storage and balance overrides are saved locally in
 * the browser — exactly like cookies, but for this app.
 *
 * Loaded before the React app so the shim is in place before any
 * Appwrite SDK calls are made.
 */
(function () {
  "use strict";

  var APPWRITE_HOST = "cloud.appwrite.io";
  var STORE_PREFIX  = "mkulima_aw_";

  // ── Storage helpers ──────────────────────────────────────────────
  function storeGet(key) {
    try { return JSON.parse(localStorage.getItem(STORE_PREFIX + key)); }
    catch (e) { return null; }
  }
  function storePut(key, value) {
    localStorage.setItem(STORE_PREFIX + key, JSON.stringify(value));
  }
  function storeDel(key) {
    localStorage.removeItem(STORE_PREFIX + key);
  }

  // Build a stable document-level key: db/collection/docId
  function docKey(db, col, id) { return db + "/" + col + "/" + (id || ""); }

  // List all documents in a collection
  function listDocs(db, col) {
    var prefix = STORE_PREFIX + db + "/" + col + "/";
    var docs = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.startsWith(prefix)) {
        try { docs.push(JSON.parse(localStorage.getItem(k))); } catch (e) {}
      }
    }
    return docs;
  }

  // ── Response factory ─────────────────────────────────────────────
  function okResponse(body) {
    return new Response(JSON.stringify(body), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }
  function notFound(msg) {
    return new Response(
      JSON.stringify({ message: msg || "Document not found", code: 404 }),
      { status: 404, headers: { "Content-Type": "application/json" } }
    );
  }
  function created(body) {
    return new Response(JSON.stringify(body), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  }

  // ── URL parser ───────────────────────────────────────────────────
  // Parses: /v1/databases/{db}/collections/{col}/documents[/{id}]
  var DOC_RE = /\/v1\/databases\/([^/]+)\/collections\/([^/]+)\/documents(?:\/([^/?]+))?/;

  function parseDocUrl(path) {
    var m = path.match(DOC_RE);
    if (!m) return null;
    return { db: m[1], col: m[2], id: m[3] || null };
  }

  // ── Core handler ─────────────────────────────────────────────────
  function handleAppwrite(url, opts) {
    var parsed   = new URL(url);
    var path     = parsed.pathname;
    var method   = (opts && opts.method || "GET").toUpperCase();
    var docInfo  = parseDocUrl(path);

    // --- Document CRUD ---
    if (docInfo) {
      var db  = docInfo.db;
      var col = docInfo.col;
      var id  = docInfo.id;

      if (method === "GET" && !id) {
        // List documents
        var all = listDocs(db, col);
        return Promise.resolve(okResponse({ total: all.length, documents: all }));
      }

      if (method === "GET" && id) {
        // Get document
        var doc = storeGet(docKey(db, col, id));
        if (!doc) return Promise.resolve(notFound());
        return Promise.resolve(okResponse(doc));
      }

      if (method === "POST") {
        // Create document
        var body = {};
        try { body = JSON.parse(opts && opts.body || "{}"); } catch (e) {}
        var newId = body.documentId || body.$id || ("doc_" + Date.now() + "_" + Math.random().toString(36).slice(2));
        var newDoc = Object.assign({}, body.data || body, {
          $id: newId, $collectionId: col, $databaseId: db,
          $createdAt: new Date().toISOString(), $updatedAt: new Date().toISOString(),
          $permissions: body.$permissions || [],
        });
        storePut(docKey(db, col, newId), newDoc);
        return Promise.resolve(created(newDoc));
      }

      if (method === "PATCH" || method === "PUT") {
        // Update document
        var existing = storeGet(docKey(db, col, id)) || {};
        var upBody = {};
        try { upBody = JSON.parse(opts && opts.body || "{}"); } catch (e) {}
        var updated = Object.assign({}, existing, upBody.data || upBody, {
          $id: id, $collectionId: col, $databaseId: db,
          $updatedAt: new Date().toISOString(),
        });
        storePut(docKey(db, col, id), updated);
        return Promise.resolve(okResponse(updated));
      }

      if (method === "DELETE") {
        storeDel(docKey(db, col, id));
        return Promise.resolve(new Response("", { status: 204 }));
      }
    }

    // --- Session / Account endpoints (auth) ---
    // The Appwrite SDK checks the session; return a 401 so the app
    // knows there's no active Appwrite session (it falls back gracefully).
    if (path.includes("/v1/account") || path.includes("/v1/sessions")) {
      return Promise.resolve(
        new Response(JSON.stringify({ message: "No session", code: 401 }), {
          status: 401, headers: { "Content-Type": "application/json" },
        })
      );
    }

    // --- Fallback: pass unknown Appwrite calls through ---
    return window.__originalFetch__(url, opts);
  }

  // ── Patch window.fetch ───────────────────────────────────────────
  window.__originalFetch__ = window.fetch.bind(window);

  window.fetch = function (resource, opts) {
    var url = typeof resource === "string" ? resource : (resource && resource.url);
    if (url && url.includes(APPWRITE_HOST)) {
      return handleAppwrite(url, opts);
    }
    return window.__originalFetch__(resource, opts);
  };

  console.log("[Mkulima] Appwrite shim active — using localStorage for storage.");
})();
