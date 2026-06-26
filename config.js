/**
 * ============================================================
 *  Mkulima Trader — Backend Configuration
 * ============================================================
 *
 * Fill in YOUR values below, then save.
 * This file is loaded before the app — changes take effect
 * on the next page refresh.
 *
 * SETUP CHECKLIST
 * ───────────────
 * 1. Deriv App (REST + WebSocket)
 *    → Register at: https://developers.deriv.com/
 *    → Register an OAuth2 app; note your App ID and Client ID.
 *    → Add your deployed URL (e.g. https://mkulima-trader.vercel.app/callback)
 *      as a redirect URI in the Deriv app settings.
 *
 * 2. Appwrite (user data storage)
 *    → Sign up free at: https://cloud.appwrite.io
 *    → Create a project → note the Project ID.
 *    → Inside the project, create TWO databases:
 *        Database A  →  note its ID  →  APPWRITE_DB_TOKENS
 *        Database B  →  note its ID  →  APPWRITE_DB_BALANCES
 *    → In Database A, create two collections:
 *        • all_tokens         (attributes: userId [string], tokens [string])
 *        • ct_program_tokens  (attributes: userId [string], token [string])
 *    → In Database B, create one collection:
 *        • balance_overrides  (attributes: accountId [string], balance [float])
 *    → Under Appwrite → Settings → Platforms, add a "Web" platform with
 *      your deployment hostname (e.g. mkulima-trader.vercel.app).
 *
 * 3. Exchange Rate API (optional — free, no key required)
 *    → Powered by https://www.exchangerate-api.com/ (free tier, USD base).
 *    → No configuration needed unless you want a paid plan with a custom key.
 *
 * ============================================================
 */

window.MKULIMA_CONFIG = {

  // ── Deriv API ──────────────────────────────────────────────
  // Your Deriv app's numeric App ID (e.g. "67294")
  // Register at: https://developers.deriv.com/
  DERIV_APP_ID: "YOUR_DERIV_APP_ID",

  // OAuth 2.0 Client ID from your Deriv app registration
  DERIV_OAUTH_CLIENT_ID: "YOUR_DERIV_OAUTH_CLIENT_ID",

  // The URL Deriv redirects to after login/signup.
  // Must match EXACTLY what you registered in the Deriv app settings.
  // Example: "https://mkulima-trader.vercel.app/callback"
  DERIV_REDIRECT_URI: window.location.origin + "/callback",

  // ── Appwrite ───────────────────────────────────────────────
  // Your Appwrite Project ID (20-char hex string)
  APPWRITE_PROJECT_ID: "YOUR_APPWRITE_PROJECT_ID",

  // Database that stores all_tokens and ct_program_tokens collections
  APPWRITE_DB_TOKENS: "YOUR_APPWRITE_DB_TOKENS_ID",

  // Database that stores balance_overrides collection
  APPWRITE_DB_BALANCES: "YOUR_APPWRITE_DB_BALANCES_ID",

};

// ── Auto-configure Deriv App ID into localStorage ───────────
// The app reads its App ID from localStorage['configAppId'].
// This seeds it on first load if the user hasn't set one via the UI.
(function () {
  var cfg = window.MKULIMA_CONFIG;
  if (cfg.DERIV_APP_ID && cfg.DERIV_APP_ID !== "YOUR_DERIV_APP_ID") {
    if (!localStorage.getItem("configAppId")) {
      localStorage.setItem("configAppId", cfg.DERIV_APP_ID);
    }
    // Also seed the WebSocket server URL if not already set
    if (!localStorage.getItem("configServerURL")) {
      localStorage.setItem("configServerURL", "ws.derivws.com");
    }
  }
})();

// ── OAuth callback handler ──────────────────────────────────
// Handles the OAuth authorization code returned by Deriv after login.
// Exchanges the code for an access token via Deriv's token endpoint.
(function () {
  var params = new URLSearchParams(window.location.search);
  var code  = params.get("code");
  var state = params.get("state");

  if (!code) return; // Not a callback page — nothing to do.

  var storedState    = sessionStorage.getItem("oauth_state");
  var codeVerifier   = sessionStorage.getItem("pkce_code_verifier");
  var cfg            = window.MKULIMA_CONFIG;

  // CSRF check
  if (state !== storedState) {
    console.error("[Mkulima] OAuth state mismatch — possible CSRF. Aborting.");
    return;
  }

  // Exchange authorization code for access token
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
    .then(function (res) { return res.json(); })
    .then(function (data) {
      if (data.access_token) {
        // Store access token for the React app to pick up
        sessionStorage.setItem("deriv_access_token", data.access_token);
        sessionStorage.removeItem("pkce_code_verifier");
        sessionStorage.removeItem("oauth_state");

        // Redirect to the app root, stripping the callback params
        window.location.replace(window.location.origin + "/");
      } else {
        console.error("[Mkulima] Token exchange failed:", data);
      }
    })
    .catch(function (err) {
      console.error("[Mkulima] OAuth token exchange error:", err);
    });
})();

// ── Login helper (PKCE + OAuth 2.0) ────────────────────────
// Call window.mkulimaLogin() to start the Deriv OAuth login flow.
// Call window.mkulimaSignup() to open the registration form.
window.mkulimaLogin = function () {
  var cfg = window.MKULIMA_CONFIG;
  _derivOAuthRedirect(false, cfg);
};

window.mkulimaSignup = function (affiliateToken, utmCampaign, utmSource) {
  var cfg = window.MKULIMA_CONFIG;
  _derivOAuthRedirect(true, cfg, affiliateToken, utmCampaign, utmSource);
};

function _derivOAuthRedirect(isSignup, cfg, affiliateToken, utmCampaign, utmSource) {
  // 1. Generate PKCE
  var array       = crypto.getRandomValues(new Uint8Array(64));
  var CHARS       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
  var codeVerifier = Array.from(array).map(function (v) { return CHARS[v % 66]; }).join("");

  var state = Array.from(crypto.getRandomValues(new Uint8Array(16)))
    .map(function (b) { return b.toString(16).padStart(2, "0"); })
    .join("");

  crypto.subtle.digest("SHA-256", new TextEncoder().encode(codeVerifier))
    .then(function (hash) {
      var codeChallenge = btoa(String.fromCharCode.apply(null, new Uint8Array(hash)))
        .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

      // 2. Store verifier + state
      sessionStorage.setItem("pkce_code_verifier", codeVerifier);
      sessionStorage.setItem("oauth_state", state);

      // 3. Build authorization URL
      var params = new URLSearchParams({
        response_type:         "code",
        client_id:             cfg.DERIV_OAUTH_CLIENT_ID,
        redirect_uri:          cfg.DERIV_REDIRECT_URI,
        scope:                 "trade account_manage",
        state:                 state,
        code_challenge:        codeChallenge,
        code_challenge_method: "S256",
      });

      if (isSignup) {
        params.set("prompt", "registration");
        if (affiliateToken) params.set("t", affiliateToken);
        if (utmCampaign)    params.set("utm_campaign", utmCampaign);
        if (utmSource)      params.set("utm_source", utmSource);
        params.set("utm_medium", "affiliate");
      }

      // 4. Redirect
      window.location.href = "https://auth.deriv.com/oauth2/auth?" + params.toString();
    });
}
