/**
 * Mkulima Trader — Hero Landing Section
 * Injects a full-screen hero overlay before the trading app renders,
 * giving first-time visitors context, trust signals, and clear CTAs.
 * Auto-dismisses after login/signup. Returning users see it briefly.
 */
(function () {
  "use strict";

  // Skip hero if user already logged in (has a session token)
  if (sessionStorage.getItem("deriv_access_token") ||
      localStorage.getItem("mkulima_hero_dismissed") === "1") {
    return;
  }

  var COLORS = {
    darkGreen:  "#333D29",
    olive:      "#414833",
    midOlive:   "#656D4A",
    sage:       "#A4AC86",
    lightSage:  "#C2C5AA",
    warmBrown:  "#936639",
    tan:        "#A68A64",
    sand:       "#B6AD90",
    darkBrown:  "#582F0E",
  };

  function css(el, styles) {
    Object.assign(el.style, styles);
  }

  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) Object.assign(node, props);
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c) node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  function dismiss() {
    localStorage.setItem("mkulima_hero_dismissed", "1");
    var hero = document.getElementById("mkulima-hero");
    if (!hero) return;
    hero.style.transition = "opacity 0.5s ease";
    hero.style.opacity = "0";
    setTimeout(function () { if (hero.parentNode) hero.parentNode.removeChild(hero); }, 520);
  }

  function buildHero() {
    // ── Wrapper ──────────────────────────────────────────
    var hero = document.createElement("div");
    hero.id = "mkulima-hero";
    css(hero, {
      position:        "fixed",
      inset:           "0",
      zIndex:          "999990",
      background:      "linear-gradient(160deg, " + COLORS.darkGreen + " 0%, " + COLORS.olive + " 55%, " + COLORS.darkBrown + " 100%)",
      display:         "flex",
      flexDirection:   "column",
      alignItems:      "center",
      justifyContent:  "center",
      overflowY:       "auto",
      fontFamily:      "'IBM Plex Sans', 'Inter', Arial, sans-serif",
      color:           COLORS.lightSage,
      padding:         "24px 16px",
      boxSizing:       "border-box",
    });

    // ── Card ─────────────────────────────────────────────
    var card = document.createElement("div");
    css(card, {
      maxWidth:        "760px",
      width:           "100%",
      margin:          "0 auto",
    });

    // ── Logo / Brand mark ─────────────────────────────────
    var brand = document.createElement("div");
    css(brand, { textAlign: "center", marginBottom: "32px" });

    var badge = document.createElement("div");
    css(badge, {
      display:         "inline-block",
      background:      "rgba(255,255,255,0.07)",
      border:          "1px solid " + COLORS.sage,
      borderRadius:    "100px",
      padding:         "6px 20px",
      fontSize:        "13px",
      letterSpacing:   "2px",
      textTransform:   "uppercase",
      color:           COLORS.sage,
      marginBottom:    "18px",
    });
    badge.textContent = "🌿 Powered by Deriv";
    brand.appendChild(badge);

    var logoText = document.createElement("h1");
    css(logoText, {
      margin:          "0 0 8px",
      fontSize:        "clamp(36px, 7vw, 72px)",
      fontWeight:      "800",
      letterSpacing:   "-1px",
      lineHeight:      "1",
      color:           "#ffffff",
    });
    // "Mkulima" in sand, "Trader" in warm brown
    var span1 = document.createElement("span");
    span1.textContent = "Mkulima";
    css(span1, { color: COLORS.sand });
    var span2 = document.createElement("span");
    span2.textContent = " Trader";
    css(span2, { color: COLORS.warmBrown });
    logoText.appendChild(span1);
    logoText.appendChild(span2);
    brand.appendChild(logoText);

    var tagline = document.createElement("p");
    tagline.textContent = "Plant the Trade. Harvest the Profit.";
    css(tagline, {
      margin:          "10px 0 0",
      fontSize:        "clamp(16px, 3vw, 22px)",
      fontWeight:      "400",
      color:           COLORS.lightSage,
      letterSpacing:   "0.3px",
    });
    brand.appendChild(tagline);
    card.appendChild(brand);

    // ── Sub-headline ──────────────────────────────────────
    var sub = document.createElement("p");
    sub.textContent = "A growing community of disciplined traders building consistent income through Deriv's global markets — synthetic indices, forex, commodities, and beyond.";
    css(sub, {
      textAlign:       "center",
      fontSize:        "clamp(14px, 2.5vw, 17px)",
      color:           COLORS.lightSage,
      lineHeight:      "1.7",
      margin:          "0 auto 36px",
      maxWidth:        "620px",
      opacity:         "0.85",
    });
    card.appendChild(sub);

    // ── Feature grid ──────────────────────────────────────
    var features = [
      { icon: "📈", title: "100+ Live Markets",    desc: "Synthetics, Forex, Commodities & Stocks — available 24/7, no market closures." },
      { icon: "🧭", title: "Proven Playbooks",     desc: "Battle-tested strategies developed within our community, not recycled from YouTube." },
      { icon: "🤝", title: "Real Mentorship",      desc: "Trade alongside experienced members who share real positions and real results." },
      { icon: "🤖", title: "Smart Bot Trading",    desc: "Automate your strategy with our no-code bot builder and let your logic run 24/7." },
      { icon: "🔒", title: "Regulated Platform",   desc: "Your funds stay with Deriv — a globally licensed broker with 25+ years of history." },
      { icon: "💸", title: "Earn While You Refer", desc: "Invite others and earn partner commissions on every trade they place." },
    ];

    var grid = document.createElement("div");
    css(grid, {
      display:               "grid",
      gridTemplateColumns:   "repeat(auto-fit, minmax(200px, 1fr))",
      gap:                   "14px",
      marginBottom:          "36px",
    });

    features.forEach(function (f) {
      var item = document.createElement("div");
      css(item, {
        background:    "rgba(255,255,255,0.05)",
        border:        "1px solid rgba(164,172,134,0.2)",
        borderRadius:  "12px",
        padding:       "18px 16px",
        transition:    "background 0.2s",
      });
      item.onmouseenter = function () { item.style.background = "rgba(255,255,255,0.09)"; };
      item.onmouseleave = function () { item.style.background = "rgba(255,255,255,0.05)"; };

      var iconEl = document.createElement("div");
      iconEl.textContent = f.icon;
      css(iconEl, { fontSize: "24px", marginBottom: "8px" });
      item.appendChild(iconEl);

      var titleEl = document.createElement("div");
      titleEl.textContent = f.title;
      css(titleEl, { fontSize: "14px", fontWeight: "700", color: COLORS.sand, marginBottom: "6px" });
      item.appendChild(titleEl);

      var descEl = document.createElement("div");
      descEl.textContent = f.desc;
      css(descEl, { fontSize: "13px", color: COLORS.lightSage, lineHeight: "1.6", opacity: "0.8" });
      item.appendChild(descEl);

      grid.appendChild(item);
    });
    card.appendChild(grid);

    // ── CTA buttons ───────────────────────────────────────
    var ctaRow = document.createElement("div");
    css(ctaRow, {
      display:         "flex",
      gap:             "14px",
      justifyContent:  "center",
      flexWrap:        "wrap",
      marginBottom:    "28px",
    });

    var btnPrimary = document.createElement("button");
    btnPrimary.textContent = "Start Trading Free →";
    css(btnPrimary, {
      background:      COLORS.warmBrown,
      color:           "#ffffff",
      border:          "none",
      borderRadius:    "8px",
      padding:         "15px 32px",
      fontSize:        "16px",
      fontWeight:      "700",
      cursor:          "pointer",
      letterSpacing:   "0.3px",
      transition:      "background 0.2s, transform 0.1s",
    });
    btnPrimary.onmouseenter = function () { btnPrimary.style.background = COLORS.darkBrown; };
    btnPrimary.onmouseleave = function () { btnPrimary.style.background = COLORS.warmBrown; };
    btnPrimary.onclick = function () {
      dismiss();
      if (typeof window.mkulimaSignup === "function") window.mkulimaSignup();
    };
    ctaRow.appendChild(btnPrimary);

    var btnSecondary = document.createElement("button");
    btnSecondary.textContent = "Sign In to My Account";
    css(btnSecondary, {
      background:      "transparent",
      color:           COLORS.sand,
      border:          "2px solid " + COLORS.tan,
      borderRadius:    "8px",
      padding:         "13px 28px",
      fontSize:        "15px",
      fontWeight:      "600",
      cursor:          "pointer",
      transition:      "border-color 0.2s, color 0.2s",
    });
    btnSecondary.onmouseenter = function () {
      btnSecondary.style.borderColor = COLORS.sand;
      btnSecondary.style.color = "#fff";
    };
    btnSecondary.onmouseleave = function () {
      btnSecondary.style.borderColor = COLORS.tan;
      btnSecondary.style.color = COLORS.sand;
    };
    btnSecondary.onclick = function () {
      dismiss();
      if (typeof window.mkulimaLogin === "function") window.mkulimaLogin();
    };
    ctaRow.appendChild(btnSecondary);
    card.appendChild(ctaRow);

    // ── Skip link ─────────────────────────────────────────
    var skip = document.createElement("p");
    css(skip, { textAlign: "center", marginBottom: "28px" });
    var skipLink = document.createElement("a");
    skipLink.textContent = "Already have a Deriv account? Explore the platform first";
    css(skipLink, {
      color:          COLORS.sage,
      fontSize:       "13px",
      cursor:         "pointer",
      textDecoration: "underline",
      opacity:        "0.7",
    });
    skipLink.onclick = function (e) { e.preventDefault(); dismiss(); };
    skip.appendChild(skipLink);
    card.appendChild(skip);

    // ── Disclaimer ────────────────────────────────────────
    var disclaimer = document.createElement("div");
    css(disclaimer, {
      background:    "rgba(88,47,14,0.25)",
      border:        "1px solid rgba(147,102,57,0.35)",
      borderRadius:  "10px",
      padding:       "16px 20px",
      fontSize:      "11.5px",
      lineHeight:    "1.7",
      color:         COLORS.lightSage,
      opacity:       "0.75",
      textAlign:     "left",
    });

    var discTitle = document.createElement("strong");
    discTitle.textContent = "⚠ Risk Disclosure";
    css(discTitle, { color: COLORS.tan, display: "block", marginBottom: "6px", fontSize: "12px" });
    disclaimer.appendChild(discTitle);

    var discText = document.createElement("span");
    discText.textContent = "Trading financial instruments including synthetic indices and forex involves a high level of risk and may not be suitable for all investors. The value of your investments can go down as well as up, and you may lose more than your initial deposit. Past performance is not indicative of future results. Mkulima Trader provides educational content, community access, and platform tools — it does not provide personalised financial or investment advice. You should seek independent professional advice before making any trading decisions. Ensure you fully understand the risks involved and only trade with capital you can afford to lose. Mkulima Trader operates as an affiliate partner of Deriv.";
    disclaimer.appendChild(discText);
    card.appendChild(disclaimer);

    hero.appendChild(card);
    document.body.appendChild(hero);
  }

  // Wait for DOM before injecting
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildHero);
  } else {
    buildHero();
  }
})();
