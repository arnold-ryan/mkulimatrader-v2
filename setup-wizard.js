/**
 * Mkulima Trader — First-Time Setup Wizard
 * ─────────────────────────────────────────
 * Shows a one-time setup overlay when no Deriv App ID is configured.
 * The user pastes ONE token from their Deriv account; this script
 * calls the Deriv WebSocket API, registers the app automatically,
 * saves the App ID, and removes the overlay forever.
 */
(function () {
  "use strict";

  var STORAGE_KEY_APP_ID      = "configAppId";
  var STORAGE_KEY_SERVER      = "configServerURL";
  var STORAGE_KEY_SETUP_DONE  = "mkulima_setup_complete";
  var DERIV_WS                = "wss://ws.derivws.com/websockets/v3?app_id=1";
  var DERIV_TOKEN_URL         = "https://app.deriv.com/account/api-token";

  // Skip if already set up
  if (localStorage.getItem(STORAGE_KEY_SETUP_DONE) === "1" &&
      localStorage.getItem(STORAGE_KEY_APP_ID)) {
    return;
  }

  // Wait for DOM
  document.addEventListener("DOMContentLoaded", showWizard);

  function showWizard() {
    var overlay = document.createElement("div");
    overlay.id  = "mkulima-setup";
    overlay.innerHTML = [
      '<style>',
      '#mkulima-setup{position:fixed;inset:0;background:rgba(20,33,61,0.97);z-index:999999;',
      '  display:flex;align-items:center;justify-content:center;font-family:sans-serif;}',
      '#mkulima-box{background:#fff;border-radius:16px;padding:40px;max-width:520px;width:90%;',
      '  box-shadow:0 24px 60px rgba(0,0,0,0.4);}',
      '#mkulima-box h2{margin:0 0 8px;color:#14213D;font-size:22px;}',
      '#mkulima-box p{margin:0 0 20px;color:#555;font-size:14px;line-height:1.6;}',
      '#mkulima-box ol{margin:0 0 24px;padding-left:20px;color:#333;font-size:14px;line-height:2;}',
      '#mkulima-box ol a{color:#FCA311;font-weight:600;}',
      '#mkulima-token{width:100%;box-sizing:border-box;padding:12px 14px;border:2px solid #E5E5E5;',
      '  border-radius:8px;font-size:14px;outline:none;margin-bottom:12px;}',
      '#mkulima-token:focus{border-color:#FCA311;}',
      '#mkulima-btn{width:100%;padding:14px;background:#FCA311;color:#000;border:none;',
      '  border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;}',
      '#mkulima-btn:hover{background:#e8920a;}',
      '#mkulima-btn:disabled{background:#E5E5E5;color:#999;cursor:not-allowed;}',
      '#mkulima-status{margin-top:12px;font-size:13px;min-height:20px;text-align:center;}',
      '.mkulima-ok{color:#2e7d32;} .mkulima-err{color:#c62828;}',
      '</style>',
      '<div id="mkulima-box">',
      '  <h2>&#127807; Welcome to Mkulima Trader</h2>',
      '  <p>One quick step to connect your Deriv account. This only happens once.</p>',
      '  <ol>',
      '    <li>Open <a href="' + DERIV_TOKEN_URL + '" target="_blank">app.deriv.com → Account → API Token</a></li>',
      '    <li>Click <strong>Create new token</strong></li>',
      '    <li>Give it any name, tick <strong>Admin</strong>, click <strong>Create</strong></li>',
      '    <li>Copy the token and paste it below</li>',
      '  </ol>',
      '  <input id="mkulima-token" type="password" placeholder="Paste your Deriv API token here…" autocomplete="off" />',
      '  <button id="mkulima-btn">Connect &amp; Register App →</button>',
      '  <div id="mkulima-status"></div>',
      '</div>',
    ].join("");

    document.body.appendChild(overlay);

    document.getElementById("mkulima-btn").addEventListener("click", function () {
      var token = document.getElementById("mkulima-token").value.trim();
      if (!token) { setStatus("Please paste your API token.", "err"); return; }
      runSetup(token);
    });

    document.getElementById("mkulima-token").addEventListener("keydown", function (e) {
      if (e.key === "Enter") document.getElementById("mkulima-btn").click();
    });
  }

  function setStatus(msg, type) {
    var el = document.getElementById("mkulima-status");
    if (el) { el.innerHTML = msg; el.className = type === "err" ? "mkulima-err" : "mkulima-ok"; }
  }

  function setLoading(on) {
    var btn = document.getElementById("mkulima-btn");
    var inp = document.getElementById("mkulima-token");
    if (btn) { btn.disabled = on; btn.textContent = on ? "Working…" : "Connect & Register App →"; }
    if (inp) { inp.disabled = on; }
  }

  function runSetup(token) {
    setLoading(true);
    setStatus("Connecting to Deriv…", "ok");

    var ws = new WebSocket(DERIV_WS);
    var reqId = 1;
    var authorized = false;

    ws.onopen = function () {
      setStatus("Authorising your token…", "ok");
      ws.send(JSON.stringify({ authorize: token, req_id: reqId++ }));
    };

    ws.onmessage = function (evt) {
      var msg;
      try { msg = JSON.parse(evt.data); } catch (e) { return; }

      if (msg.error) {
        setLoading(false);
        setStatus("&#10060; " + (msg.error.message || "Token error. Please check and try again."), "err");
        ws.close();
        return;
      }

      // Step 1: Authorised — now register the app
      if (msg.msg_type === "authorize" && !authorized) {
        authorized = true;
        var redirectUrl = window.location.origin + "/";
        setStatus("Registering Mkulima Trader app…", "ok");
        ws.send(JSON.stringify({
          app_register: 1,
          name: "Mkulima Trader",
          scopes: ["read", "trade", "payments", "admin"],
          redirect_uri: redirectUrl,
          homepage: redirectUrl,
          github: "",
          req_id: reqId++,
        }));
        return;
      }

      // Step 2: App registered — save App ID and finish
      if (msg.msg_type === "app_register") {
        var appId = msg.app_register && msg.app_register.app_id;
        if (!appId) {
          setLoading(false);
          setStatus("&#10060; App registration failed. Try again.", "err");
          ws.close();
          return;
        }

        // Save everything
        localStorage.setItem(STORAGE_KEY_APP_ID, String(appId));
        localStorage.setItem(STORAGE_KEY_SERVER, "ws.derivws.com");
        localStorage.setItem(STORAGE_KEY_SETUP_DONE, "1");
        localStorage.setItem("mkulima_admin_token", token); // store token for future use

        ws.close();
        setStatus("&#9989; App ID " + appId + " registered!", "ok");

        setTimeout(function () {
          var box = document.getElementById("mkulima-box");
          if (box) {
            box.innerHTML = [
              "<h2 style='color:#2e7d32'>&#9989; All set!</h2>",
              "<p>Your Deriv App ID <strong>" + appId + "</strong> has been registered.<br>",
              "Mkulima Trader is now connected and ready to use.</p>",
              "<button id='mkulima-launch' style='width:100%;padding:14px;background:#FCA311;",
              "color:#000;border:none;border-radius:8px;font-size:15px;font-weight:700;cursor:pointer;'>",
              "Launch Mkulima Trader &#8594;</button>",
            ].join("");

            document.getElementById("mkulima-launch").addEventListener("click", function () {
              document.getElementById("mkulima-setup").remove();
              // Reload to let React pick up the new App ID
              window.location.reload();
            });
          }
        }, 1000);
        return;
      }
    };

    ws.onerror = function () {
      setLoading(false);
      setStatus("&#10060; Connection error. Check your internet and try again.", "err");
    };
  }
})();
