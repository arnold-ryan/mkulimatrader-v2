/**
 * Mkulima Trader — Backend Configuration
 * =======================================
 * All credentials are wired in below.
 * Appwrite is replaced by localStorage (no account needed).
 * Deriv OAuth uses your registered client_id.
 * Affiliate attribution is injected automatically on every signup.
 */

window.MKULIMA_CONFIG = {
  // ── Deriv OAuth2 (new portal) ──────────────────────────────
  DERIV_OAUTH_CLIENT_ID: "33EZP5u4TKiJSDXvv9yJh",

  // Redirect URI — must match exactly what you added in your
  // Deriv app settings at developers.deriv.com
  // (add  <your-vercel-url>/callback  as an allowed redirect URI)
  DERIV_REDIRECT_URI: window.location.origin + "/callback",

  // ── Deriv WebSocket (market data + trading) ────────────────
  DERIV_WS_APP_ID: "1089",

  // ── Appwrite ───────────────────────────────────────────────
  // Replaced by the localStorage shim (appwrite-shim.js).
  APPWRITE_PROJECT_ID:  "local",
  APPWRITE_DB_TOKENS:   "local",
  APPWRITE_DB_BALANCES: "local",

  // ── Affiliate / Partner attribution ────────────────────────
  // Source: https://deriv.partners/rx?sidc=...&utm_source=CU83616
  // Per Deriv OAuth2 docs: sidi / t / affiliate_token / ca are equivalent
  // aliases — sidi maps to the sidc value in your partner referral link.
  // All four UTM params are injected on every signup redirect automatically.
  AFFILIATE_SIDI:         "6D203A32-6635-4783-BB11-1296C141843C",
  AFFILIATE_UTM_CAMPAIGN: "dynamicworks",
  AFFILIATE_UTM_MEDIUM:   "affiliate",
  AFFILIATE_UTM_SOURCE:   "CU83616",
};

// ── Seed localStorage for the compiled React app ────────────
// The app reads configAppId and configServerURL from localStorage
// to initialise its WebSocket connection.
(function () {
  if (!localStorage.getItem("configAppId")) {
    localStorage.setItem("configAppId", window.MKULIMA_CONFIG.DERIV_WS_APP_ID);
  }
  if (!localStorage.getItem("configServerURL")) {
    localStorage.setItem("configServerURL", "ws.derivws.com");
  }
})();

// ── OAuth 2.0 callback handler (PKCE) ──────────────────────
// Runs on the /callback route after Deriv redirects back.
(function () {
  var params = new URLSearchParams(window.location.search);
  var code   = params.get("code");
  var state  = params.get("state");
  if (!code) return;

  var storedState  = sessionStorage.getItem("oauth_state");
  var codeVerifier = sessionStorage.getItem("pkce_code_verifier");
  var cfg          = window.MKULIMA_CONFIG;

  if (state !== storedState) {
    console.error("[Mkulima] OAuth state mismatch — possible CSRF.");
    return;
  }

  fetch("https://auth.deriv.com/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type:    "authorization_code",
      client_id:     cfg.DERIV_OAUTH_CLIENT_ID,
      code:          code,
      code_verifier: codeVerifier,
      redirect_uri:  cfg.DERIV_REDIRECT_URI,
    }),
  })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (data.access_token) {
        sessionStorage.setItem("deriv_access_token", data.access_token);
        sessionStorage.removeItem("pkce_code_verifier");
        sessionStorage.removeItem("oauth_state");
        window.location.replace(window.location.origin + "/");
      } else {
        console.error("[Mkulima] Token exchange failed:", data);
      }
    })
    .catch(function (e) { console.error("[Mkulima] OAuth error:", e); });
})();

// ── Login / Signup helpers ──────────────────────────────────
window.mkulimaLogin = function () {
  _pkceRedirect(false);
};
// mkulimaSignup: affiliate params are always injected automatically.
// Pass overrideSidi to use a custom tracking token instead.
window.mkulimaSignup = function (overrideSidi) {
  _pkceRedirect(true, overrideSidi);
};

function _pkceRedirect(isSignup, overrideSidi) {
  var cfg   = window.MKULIMA_CONFIG;
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  var arr   = crypto.getRandomValues(new Uint8Array(64));
  var verifier = Array.from(arr).map(function (v) { return chars[v % 66]; }).join("");
  var state = Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");

  crypto.subtle.digest("SHA-256", new TextEncoder().encode(verifier)).then(function (hash) {
    var challenge = btoa(String.fromCharCode.apply(null, new Uint8Array(hash)))
      .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

    sessionStorage.setItem("pkce_code_verifier", verifier);
    sessionStorage.setItem("oauth_state", state);

    var p = new URLSearchParams({
      response_type:         "code",
      client_id:             cfg.DERIV_OAUTH_CLIENT_ID,
      redirect_uri:          cfg.DERIV_REDIRECT_URI,
      scope:                 "trade account_manage",
      state:                 state,
      code_challenge:        challenge,
      code_challenge_method: "S256",
    });

    if (isSignup) {
      // Per Deriv OAuth2 docs: prompt=registration shows the signup form.
      p.set("prompt", "registration");
      // Affiliate attribution — sidi is the OAuth alias for the sidc value
      // in your deriv.partners referral link. All four UTM params are included
      // per the Deriv signup tracking spec.
      var sidi = overrideSidi || cfg.AFFILIATE_SIDI;
      if (sidi) p.set("sidi", sidi);
      if (cfg.AFFILIATE_UTM_CAMPAIGN) p.set("utm_campaign", cfg.AFFILIATE_UTM_CAMPAIGN);
      if (cfg.AFFILIATE_UTM_MEDIUM)   p.set("utm_medium",   cfg.AFFILIATE_UTM_MEDIUM);
      if (cfg.AFFILIATE_UTM_SOURCE)   p.set("utm_source",   cfg.AFFILIATE_UTM_SOURCE);
    }

    window.location.href = "https://auth.deriv.com/oauth2/auth?" + p.toString();
  });
}

// ── Affiliate signup interceptor ────────────────────────────
// Catches any Deriv auth signup redirects triggered by the React app's
// own buttons and injects affiliate attribution if it's missing.
// Covers: location.assign(), location.replace(), window.open(),
// and <a> tag clicks that point to auth.deriv.com with prompt=registration.
(function () {
  var DERIV_AUTH = "auth.deriv.com/oauth2/auth";

  function injectAffiliateParams(url) {
    if (!url || !url.includes(DERIV_AUTH)) return url;
    // Only modify signup (registration) redirects
    if (!url.includes("prompt=registration")) return url;

    var cfg = window.MKULIMA_CONFIG;
    try {
      var u = new URL(url);
      var p = u.searchParams;
      // Inject sidi if none of the four aliases are already present
      if (!p.has("sidi") && !p.has("t") && !p.has("affiliate_token") && !p.has("ca")) {
        if (cfg.AFFILIATE_SIDI) p.set("sidi", cfg.AFFILIATE_SIDI);
      }
      if (!p.has("utm_campaign") && cfg.AFFILIATE_UTM_CAMPAIGN) p.set("utm_campaign", cfg.AFFILIATE_UTM_CAMPAIGN);
      if (!p.has("utm_medium")   && cfg.AFFILIATE_UTM_MEDIUM)   p.set("utm_medium",   cfg.AFFILIATE_UTM_MEDIUM);
      if (!p.has("utm_source")   && cfg.AFFILIATE_UTM_SOURCE)   p.set("utm_source",   cfg.AFFILIATE_UTM_SOURCE);
      return u.toString();
    } catch (e) {
      return url;
    }
  }

  // Override location.assign
  var _assign = location.assign.bind(location);
  location.assign = function (url) { return _assign(injectAffiliateParams(url)); };

  // Override location.replace
  var _replace = location.replace.bind(location);
  location.replace = function (url) { return _replace(injectAffiliateParams(url)); };

  // Override window.open
  var _open = window.open.bind(window);
  window.open = function (url, target, features) {
    return _open(injectAffiliateParams(url || ""), target, features);
  };

  // Intercept <a> tag clicks
  document.addEventListener("click", function (e) {
    var link = e.target && e.target.closest && e.target.closest("a");
    if (!link) return;
    var href = link.getAttribute("href") || "";
    if (!href.includes(DERIV_AUTH)) return;
    var injected = injectAffiliateParams(href);
    if (injected !== href) {
      e.preventDefault();
      window.location.href = injected;
    }
  }, true);

  console.log("[Mkulima] Affiliate interceptor active — sidi=" + window.MKULIMA_CONFIG.AFFILIATE_SIDI);
})();
