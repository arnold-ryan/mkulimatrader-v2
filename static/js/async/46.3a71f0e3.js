"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["46"], {
        45675: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tS
            });
            var l = n("85893"),
                i = n("67294"),
                a = n("67026"),
                o = n("92198"),
                s = n("89250"),
                r = n("66175"),
                c = n("58454"),
                d = n("48059"),
                u = n("2502"),
                h = n("89471");
            let m = function() {
                let e = (0, s.TH)(),
                    t = (0, s.s0)();
                return {
                    deleteQueryString: function(n) {
                        let l = new URLSearchParams(e.search);
                        l.delete(n), t({
                            search: l.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            n = {};
                        return t.forEach((e, t) => {
                            n[t] = e
                        }), n
                    }(),
                    setQueryString: function(n) {
                        ! function(n) {
                            let l = new URLSearchParams(e.search);
                            Object.entries(n).forEach(e => {
                                let [t, n] = e;
                                void 0 === n ? l.delete(t) : l.set(t, n)
                            }), t({
                                search: l.toString()
                            }, {
                                replace: !0
                            })
                        }(n)
                    }
                }
            };

            function g(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: l
                } = m(), {
                    isDesktop: a
                } = (0, u.F)(), [o, s] = (0, h.Sx)(), r = () => {
                    if (!n.modal && s.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");
                    else {
                        let e = n.modal;
                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];
                            s.setAll([]), t.forEach(e => {
                                s.set(e, !a)
                            }), s.set(n, !0)
                        }
                    }
                };
                return (0, i.useEffect)(() => {
                    r()
                }, []), (0, i.useEffect)(() => {
                    !(null == n ? void 0 : n.modal) && s.reset()
                }, [null == n ? void 0 : n.modal]), (0, h.OR)("popstate", () => {
                    r()
                }), {
                    hideModal: e => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(",");
                            if (null == e ? void 0 : e.shouldHideAllModals) o.forEach((e, n) => {
                                s.set(n, !1), t("modal")
                            });
                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (n.length > 1) {
                                    let e = n.shift();
                                    n.forEach(e => {
                                        s.set(e, !1)
                                    }), n = [e ? ? ""], l({
                                        modal: e
                                    })
                                } else 1 === n.length ? l({
                                    modal: n[0]
                                }) : t("modal")
                            } else {
                                let e = n.pop(),
                                    i = n.slice(-1)[0];
                                i ? (s.set(e, !1), s.set(i, !0)) : s.set(e, !1), 0 === n.length ? t("modal") : l({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => o.get(e) || !1,
                    showModal: (e, t) => {
                        let i = n.modal;
                        if (i) {
                            let n = i.split(","),
                                o = n.slice(-1)[0];
                            if (o === e) return;
                            (null == t ? void 0 : t.shouldStackModals) === !1 ? s.set(o, !1) : s.set(o, (null == t ? void 0 : t.shouldStackModals) || !a), s.set(e, !0), n.push(e), l({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else s.set(e, !0), l({
                            modal: e
                        })
                    }
                }
            }
            var x = n("24335"),
                p = n("38215");
            let _ = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial"],
                    n = t[Number(e)],
                    l = window.location.href.split("#")[0];
                return `${l}#${n}`
            };
            var b = n("32305"),
                v = n("96223"),
                j = n("3693"),
                f = n("98146"),
                w = n("64410"),
                y = n("918"),
                C = n("50051"),
                N = n("16496"),
                I = n("59001"),
                k = n("57218"),
                Z = n("12811"),
                z = n("28505"),
                L = n("73971"),
                S = n("99243"),
                T = n("63066"),
                F = n("96396"),
                A = n("14249"),
                M = n("45322"),
                E = n("34273"),
                D = n("473");
            let R = [{
                code: "EN",
                displayName: "English",
                icon: (0, l.jsx)(b.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(b.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(b.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, l.jsx)(v.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(v.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(v.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, l.jsx)(j.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(j.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(j.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, l.jsx)(f.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(f.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(f.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, l.jsx)(w.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(w.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(w.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, l.jsx)(y.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(y.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(y.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, l.jsx)(C.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(C.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(C.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, l.jsx)(N.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(N.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(N.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, l.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, l.jsx)(k.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(k.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(k.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, l.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, l.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, l.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, l.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, l.jsx)(T.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(T.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(T.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, l.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, l.jsx)(A.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(A.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(A.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, l.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, l.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, l.jsx)(D.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(D.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(D.Z, {
                    height: 14.67,
                    width: 22
                })
            }];
            var O = n("44412"),
                P = n("85919");
            let V = () => (0, p.oR)() ? (0, l.jsx)("div", {
                className: "toolbar__section",
                "data-testid": "dt_run_strategy",
                children: (0, l.jsx)(P.Z, {
                    className: "toolbar__animation"
                })
            }) : null;
            var U = n("96877"),
                B = n("83257"),
                H = n("53261"),
                $ = n("21456"),
                G = n("64915");
            let q = (0, U.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, B.Z)(), {
                    localize: n
                } = (0, d.T_)();
                return (0, l.jsx)(G.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, l.jsx)($.Z, {
                        iconSize: "xs"
                    }) : (0, l.jsx)(H.Z, {
                        iconSize: "xs"
                    })
                })
            });
            var W = n("79655"),
                X = n("45452"),
                J = n("12838");
            let K = () => {
                    let e = J.fV.getValue(J.sE.configServerURL);
                    return e ? (0, l.jsxs)(X.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, l.jsx)(W.rU, {
                            className: "app-footer__endpoint-text",
                            to: r.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                Y = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                Q = () => {
                    let [e, t] = (0, i.useState)(!1), {
                        exit: n,
                        request: l,
                        screenChange: a,
                        screenElement: o
                    } = Y, s = (0, i.useCallback)(() => t(o.some(e => document[e])), [o]);
                    return (0, i.useEffect)(() => (a.forEach(e => {
                        document.addEventListener(e, s, !1)
                    }), () => {
                        a.forEach(e => {
                            document.removeEventListener(e, s, !1)
                        })
                    }), [s, a]), {
                        toggleFullScreenMode: i => {
                            null == i || i.stopPropagation();
                            let a = n.find(e => document[e]),
                                o = l.find(e => document.documentElement[e]);
                            e && a ? document[a]() : o ? document.documentElement[o]() : t(!1)
                        }
                    }
                };
            var ee = n("69914");
            let et = () => {
                    let {
                        toggleFullScreenMode: e
                    } = Q(), {
                        localize: t
                    } = (0, d.T_)();
                    return (0, l.jsx)(G.u, {
                        as: "button",
                        className: "app-footer__icon",
                        onClick: e,
                        tooltipContent: t("Full screen"),
                        children: (0, l.jsx)(ee.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                en = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: a
                    } = (0, d.T_)(), o = (0, i.useMemo)(() => {
                        var e;
                        return null === (e = R.find(e => {
                            let {
                                code: t
                            } = e;
                            return t == n
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [n]);
                    return (0, l.jsxs)(G.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: a("Language"),
                        children: [o, (0, l.jsx)(X.Z, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                el = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                ei = () => {
                    let [e, t] = (0, i.useState)(el()), n = () => t(!0), l = () => t(!1);
                    return (0, i.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", l), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", l)
                    }), []), e
                },
                ea = () => {
                    let [e, t] = (0, i.useState)("online"), n = ei();
                    return (0, i.useEffect)(() => {
                        n ? t("online") : t("offline")
                    }, [n]), e
                },
                eo = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, d.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                es = () => {
                    let e = ea(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, i.useMemo)(() => eo()[e], [e]);
                    return (0, l.jsx)(G.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, d.NC)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, l.jsx)("div", {
                            className: (0, a.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };
            var er = n("13005");
            let ec = (0, U.Pi)(() => {
                let {
                    save_modal: e
                } = (0, p.oR)() ? ? {}, {
                    localize: t
                } = (0, d.T_)();
                if (!e) return null;
                let {
                    toggleSaveModal: n
                } = e;
                return (0, l.jsx)(G.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: t("Save"),
                    onClick: n,
                    "data-testid": "dt_footer_save_button",
                    children: (0, l.jsx)(er.Z, {
                        width: 16,
                        height: 16
                    })
                })
            });
            var ed = n("30381"),
                eu = n.n(ed),
                eh = n("27179"),
                em = n("83606");
            let eg = (0, U.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        common: t
                    } = (0, p.oR)() ? ? {
                        common: {
                            server_time: eu()()
                        }
                    };
                    return (0, l.jsx)(G.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_server_time",
                        tooltipContent: t.server_time.format(eh.kT),
                        children: (0, l.jsx)(em.x, {
                            size: e ? "xs" : "sm",
                            children: t.server_time.format(eh.Yp)
                        })
                    })
                }),
                ex = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, d.T_)(), {
                        hideModal: i,
                        isModalOpenFor: a,
                        showModal: o
                    } = g(), {
                        isDesktop: s
                    } = (0, u.F)(), {
                        client: r,
                        dashboard: c
                    } = (0, p.oR)(), h = (null == c ? void 0 : c.active_tab) === x.ve.DTRADER;
                    return (0, l.jsxs)("footer", {
                        className: "app-footer",
                        children: [!h && (null == r ? void 0 : r.is_logged_in) && (0, l.jsx)("div", {
                            className: "app-footer__center",
                            children: (0, l.jsx)(V, {})
                        }), (0, l.jsx)(et, {}), (0, l.jsx)(en, {
                            openLanguageSettingModal: () => o("DesktopLanguagesModal")
                        }), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(q, {}), s && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "app-footer__vertical-line"
                            }), (0, l.jsx)(ec, {})]
                        }), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(eg, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(es, {}), (0, l.jsx)(K, {}), a("DesktopLanguagesModal") && (0, l.jsx)(O.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: R,
                            onClose: i,
                            onLanguageSwitch: e => {
                                n(e), i(), window.location.replace(_()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };
            var ep = n("10236"),
                e_ = n("8015");
            let eb = {
                    aud: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                ev = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, a = n ? eb.virtual : eb[null == t ? void 0 : t.toLowerCase()] || eb.unknown;
                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(a, {
                            iconSize: "sm"
                        })
                    })
                };
            var ej = n("79649");
            let ef = e => {
                    let t = Number(e ? ? 0);
                    return Number.isFinite(t) ? t : 0
                },
                ew = e => {
                    var t;
                    let {
                        allBalanceData: n
                    } = e, {
                        accountList: a,
                        activeLoginid: o
                    } = (0, ej.T)(), s = (0, i.useMemo)(() => null == a ? void 0 : a.find(e => e.loginid === o), [o, a]), c = null == n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : t[(null == s ? void 0 : s.loginid) ? ? ""], u = ef(null == s ? void 0 : s.balance), h = (null == c ? void 0 : c.currency) || (null == s ? void 0 : s.currency) || "USD", m = (null == c ? void 0 : c.balance) ? ? u;
                    return {
                        data: (0, i.useMemo)(() => {
                            var e;
                            return s ? { ...s,
                                balance: (0, r.oC5)(m.toFixed((0, r.i4S)(h))),
                                currencyLabel: (null == s ? void 0 : s.is_virtual) ? (0, d.NC)("Demo") : null == s ? void 0 : s.currency,
                                icon: (0, l.jsx)(ev, {
                                    currency: null == s ? void 0 : null === (e = s.currency) || void 0 === e ? void 0 : e.toLowerCase(),
                                    isVirtual: !!(null == s ? void 0 : s.is_virtual)
                                }),
                                isVirtual: !!(null == s ? void 0 : s.is_virtual),
                                isActive: (null == s ? void 0 : s.loginid) === o
                            } : void 0
                        }, [m, s, o, h, n])
                    }
                };
            var ey = n("77898"),
                eC = n("16857"),
                eN = n("32767"),
                eI = n("99466"),
                ek = n("42913"),
                eZ = n("28607"),
                ez = n("54458"),
                eL = n("62269");
            let eS = {
                    default: {
                        name: "DBtraders",
                        logo: "mkulima-trader.jpeg",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029Vb5DE9TA2pLKG4O2k644/216",
                            tiktok: "https://www.tiktok.com/@flossin._",
                            telegram: "https://t.me/automatedDBtraders",
                            instagram: "https://www.instagram.com/flossin.__/",
                            youtube: "https://www.youtube.com/@Dbtraders.c"
                        }
                    }
                },
                eT = () => {
                    let [e, t] = (0, i.useState)(!1), {
                        logo: n,
                        name: a,
                        social: o
                    } = eS[window.location.hostname] || eS.default;
                    return (0, l.jsxs)("div", {
                        className: "d-apollo-logo",
                        children: [(0, l.jsxs)("div", {
                            className: "logo-holder",
                            children: [n && (0, l.jsx)("img", {
                                src: n,
                                alt: "custom Logo",
                                className: "d-apollo-logo__image"
                            }), (0, l.jsxs)(X.Z, {
                                color: "less-prominent",
                                lineHeight: "m",
                                size: "m",
                                weight: "bold",
                                align: "center",
                                className: "dc-contract-card-message db-traders-text",
                                children: [(0, l.jsx)("span", {
                                    className: "db-part",
                                    children: "DB"
                                }), (0, l.jsx)("span", {
                                    className: "traders-part",
                                    children: "Traders"
                                })]
                            })]
                        }), (0, l.jsx)("button", {
                            className: "d-apollo-logo__icon",
                            onClick: () => t(!0),
                            children: (0, l.jsx)(eN.DsV, {})
                        }), e && (0, l.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => t(!1),
                            children: (0, l.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, l.jsxs)("div", {
                                    className: "modal-header",
                                    children: [(0, l.jsx)("h3", {
                                        children: "Follow Us"
                                    }), (0, l.jsx)("button", {
                                        className: "close-button",
                                        onClick: () => t(!1),
                                        children: "\xd7"
                                    })]
                                }), (0, l.jsx)("p", {
                                    className: "modal-subtext",
                                    children: "Connect with us on social media"
                                }), (0, l.jsxs)("div", {
                                    className: "social-grid",
                                    children: [o.whatsapp && (0, l.jsxs)("a", {
                                        href: o.whatsapp,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn whatsapp",
                                        children: [(0, l.jsx)(eI.Z, {}), " WhatsApp"]
                                    }), [2, 3, 4, 5, 6].some(e => o[`whatsapp${e}`]) && (0, l.jsx)("div", {
                                        className: "whatsapp-groups-dropdown",
                                        children: (0, l.jsxs)("details", {
                                            children: [(0, l.jsxs)("summary", {
                                                children: [(0, l.jsx)(eI.Z, {}), " WhatsApp Groups"]
                                            }), (0, l.jsx)("div", {
                                                className: "dropdown-content",
                                                children: [2, 3, 4, 5, 6].map(e => {
                                                    let t = o[`whatsapp${e}`];
                                                    return t ? (0, l.jsxs)("a", {
                                                        href: t,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: ["Group ", e]
                                                    }, `whatsapp${e}`) : null
                                                })
                                            })]
                                        })
                                    }), o.telegram && (0, l.jsxs)("a", {
                                        href: o.telegram,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn telegram",
                                        children: [(0, l.jsx)(ek.Z, {}), " Telegram"]
                                    }), o.tiktok && (0, l.jsxs)("a", {
                                        href: o.tiktok,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn tiktok",
                                        children: [(0, l.jsx)(eZ.Z, {}), " TikTok"]
                                    }), o.youtube && (0, l.jsxs)("a", {
                                        href: o.youtube,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn youtube",
                                        children: [(0, l.jsx)(ez.Z, {}), " YouTube"]
                                    }), o.instagram && (0, l.jsxs)("a", {
                                        href: o.instagram,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn instagram",
                                        children: [(0, l.jsx)(eL.Z, {}), " Instagram"]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                eF = () => {
                    let {
                        isDesktop: e
                    } = (0, u.F)();
                    return e ? (0, l.jsx)(eT, {}) : null
                };
            var eA = n("24561");
            let eM = e => {
                    let {
                        isMobile: t
                    } = e;
                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, l.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eE = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;
                    return (0, l.jsx)(eA.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, l.jsx)(eM, {
                            isMobile: t
                        })
                    })
                };
            var eD = n("30394"),
                eR = n("88199"),
                eO = n("20917"),
                eP = n("23485"),
                eV = n("5568"),
                eU = n("30645"),
                eB = n("42457"),
                eH = n("33281"),
                e$ = n("62304"),
                eG = n("45433"),
                eq = n("63387"),
                eW = n.n(eq);
            let eX = e => {
                let {
                    width: t,
                    height: n
                } = e;
                return (0, l.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };
            var eJ = n("44884"),
                eK = n("37410"),
                eY = n("37528");
            let eQ = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, l.jsx)(eK.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                e0 = e => Number(e.replace(/,/g, "")),
                e1 = () => (0, l.jsx)(eY.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                e6 = e => {
                    let {
                        oAuthLogout: t,
                        loginid: n,
                        is_logging_out: i
                    } = e, a = (null == n ? void 0 : n.includes("CR")) || (null == n ? void 0 : n.includes("MF"));
                    return (0, l.jsxs)("div", {
                        className: "",
                        children: [(0, l.jsx)(e$.T.TradersHubLink, {
                            href: r.xOw.traders_hub,
                            children: (0, d.NC)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, l.jsx)(e1, {}), (0, l.jsxs)("div", {
                            className: eW()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !a
                            }),
                            children: [a && (0, l.jsx)(e_.Z, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => location.replace("https://app.deriv.com"),
                                children: (0, l.jsx)(d.Xx, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, l.jsx)(e$.T.Footer, {
                                children: i ? (0, l.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, l.jsx)(eX, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, l.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: t,
                                    children: [(0, l.jsx)(X.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, d.NC)("Logout")
                                    }), (0, l.jsx)(eJ.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                e2 = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: i,
                        isVirtual: o,
                        activeLoginId: s,
                        oAuthLogout: r,
                        is_logging_out: u
                    } = e, {
                        client: h
                    } = (0, p.oR)(), m = async e => {
                        var t, n, l, i, a;
                        let o = c.OAuthTokenExchangeService.getAccessToken();
                        if (o) {
                            try {
                                let t = await (0, eG.hl)(o, e),
                                    s = Number(null == t ? void 0 : t.balance);
                                if (t && Number.isFinite(s)) {
                                    let o = (null === (n = h.all_accounts_balance) || void 0 === n ? void 0 : n.accounts) ? ? {},
                                        r = o[e];
                                    h.setAllAccountsBalance({
                                        balance: (null === (l = h.all_accounts_balance) || void 0 === l ? void 0 : l.balance) ? ? s,
                                        currency: (null === (i = h.all_accounts_balance) || void 0 === i ? void 0 : i.currency) ? ? t.currency ? ? "",
                                        loginid: (null === (a = h.all_accounts_balance) || void 0 === a ? void 0 : a.loginid) ? ? e,
                                        accounts: { ...o,
                                            [e]: {
                                                balance: s,
                                                converted_amount: s,
                                                currency: t.currency ? ? (null == r ? void 0 : r.currency) ? ? "",
                                                demo_account: (null == r ? void 0 : r.demo_account) ? ? 1,
                                                status: (null == r ? void 0 : r.status) ? ? 1,
                                                type: (null == r ? void 0 : r.type) ? ? "deriv"
                                            }
                                        }
                                    }), e === h.loginid && (h.setBalance(String(s)), t.currency && h.setCurrency(t.currency))
                                }
                            } catch (e) {
                                console.warn("Failed to reset demo balance via REST API:", e)
                            }
                            return
                        }
                        null === eR.api_base || void 0 === eR.api_base || null === (t = eR.api_base.api) || void 0 === t || t.send({
                            topup_virtual: 1
                        })
                    };
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(e$.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, d.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, l.jsx)("span", {
                                className: (0, a.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(e$.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && i(e.loginid)
                                    },
                                    onResetBalance: o && s === e.loginid && 1e4 !== e0(e.balance) ? () => {
                                        m(e.loginid)
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, l.jsx)(e1, {}), (0, l.jsx)(e6, {
                            loginid: s,
                            oAuthLogout: r,
                            is_logging_out: u
                        })]
                    })
                },
                e9 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedMFAccountList: i,
                        switchAccount: o,
                        is_low_risk_country: s
                    } = e, r = (null == i ? void 0 : i.length) !== 0 && s ? (0, d.NC)("Eu Deriv accounts") : (0, d.NC)("Deriv accounts");
                    return (0, l.jsx)(e$.T.AccountsPanel, {
                        isOpen: !0,
                        title: r,
                        className: "account-switcher-panel",
                        children: i.map(e => (e.currencyLabel = (0, d.NC)("Multipliers"), (0, l.jsx)("span", {
                            className: (0, a.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, l.jsx)(e$.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && o(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
                };
            var e3 = n("11527");
            let e4 = e => {
                    var t, n;
                    let {
                        isVirtual: i,
                        tabs_labels: a,
                        is_low_risk_country: o
                    } = e;
                    return o ? (0, l.jsx)(e$.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, d.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, l.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, l.jsx)(e$.T.AccountsItem, {
                                account: eQ,
                                onSelectAccount: () => {}
                            }), (0, l.jsx)(e1, {}), (0, l.jsx)(e3.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => location.replace(r.xOw.traders_hub),
                                children: (0, l.jsx)(d.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, i ? null == a ? void 0 : null === (n = a.real) || void 0 === n ? void 0 : n.toLowerCase() : null == a ? void 0 : null === (t = a.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                e7 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: i,
                        modifiedMFAccountList: o,
                        is_low_risk_country: s,
                        switchAccount: r
                    } = e;
                    if (!s && i && (null == i ? void 0 : i.length) === 0) return null;
                    let c = (null == o ? void 0 : o.length) === 0 ? (0, d.NC)("Deriv accounts") : (0, d.NC)("Non-Eu Deriv account");
                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(e$.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: i.map(e => (0, l.jsx)("span", {
                                className: (0, a.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(e$.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && r(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                e8 = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: i,
                        isVirtual: a,
                        tabs_labels: o,
                        is_low_risk_country: s,
                        oAuthLogout: r,
                        loginid: c,
                        is_logging_out: d
                    } = e, u = t && (null == t ? void 0 : t.length) > 0, h = n && (null == n ? void 0 : n.length) > 0;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [u ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(e7, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: a,
                                tabs_labels: o,
                                is_low_risk_country: s
                            }), (0, l.jsx)(e1, {})]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(e4, {
                                is_low_risk_country: s,
                                isVirtual: a,
                                tabs_labels: o
                            }), (0, l.jsx)(e1, {})]
                        }), h && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(e9, {
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: a,
                                tabs_labels: o,
                                is_low_risk_country: s
                            }), (0, l.jsx)(e1, {})]
                        }), (0, l.jsx)(e6, {
                            oAuthLogout: r,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };
            var e5 = n("17481");
            let te = (0, i.lazy)(() => n.e("932").then(n.bind(n, 67568))),
                tt = {
                    demo: (0, d.NC)("Demo"),
                    real: (0, d.NC)("Real")
                },
                tn = e => {
                    let t = Number(e ? ? 0);
                    return Number.isFinite(t) ? t : 0
                },
                tl = e => {
                    var t;
                    let n = `${e.landing_company_name??e.broker??""}`.toLowerCase();
                    return (null === (t = e.loginid) || void 0 === t ? void 0 : t.startsWith("MF")) || /^(maltainvest|malta|iom)$/.test(n)
                },
                ti = e => {
                    var t;
                    let {
                        isVirtual: n,
                        modifiedCRAccountList: a,
                        modifiedMFAccountList: o,
                        modifiedVRTCRAccountList: s,
                        switchAccount: r,
                        activeLoginId: c,
                        client: d
                    } = e, u = (0, eP.a)(), h = (0, e5.Gz)().includes((null === (t = d.account_settings) || void 0 === t ? void 0 : t.country_code) ? ? ""), m = !!n;
                    return ((0, i.useEffect)(() => {
                        var e, t;
                        let l = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];
                        !n && l && (l.style.maxHeight = "70vh", null === (t = (0, eB._)(".deriv-accordion__content", l)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [n]), m) ? (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(e2, {
                            modifiedVRTCRAccountList: s,
                            switchAccount: r,
                            activeLoginId: c,
                            isVirtual: m,
                            tabs_labels: tt,
                            oAuthLogout: u,
                            is_logging_out: d.is_logging_out
                        })
                    }) : (0, l.jsx)(e8, {
                        modifiedCRAccountList: a,
                        modifiedMFAccountList: o,
                        switchAccount: r,
                        isVirtual: m,
                        tabs_labels: tt,
                        is_low_risk_country: h,
                        oAuthLogout: u,
                        loginid: c,
                        is_logging_out: d.is_logging_out
                    })
                },
                ta = (0, U.Pi)(e => {
                    var t, n;
                    let {
                        activeAccount: a
                    } = e, {
                        isDesktop: o
                    } = (0, u.F)(), {
                        accountList: s
                    } = (0, ej.T)(), {
                        ui: c,
                        run_panel: d,
                        client: h
                    } = (0, p.oR)(), {
                        accounts: m
                    } = h, {
                        toggleAccountsDialog: g,
                        is_accounts_switcher_on: x,
                        account_switcher_disabled_message: _
                    } = c, {
                        is_stop_button_visible: b
                    } = d, v = Object.keys(m).some(e => "wallet" === m[e].account_category), {
                        convertAmount: j
                    } = (0, eO.u)(), f = a ? { ...a,
                        balance: (() => {
                            var e, t, n, l, i, o;
                            let s = (null === (n = h.all_accounts_balance) || void 0 === n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : null === (e = t[a.loginid]) || void 0 === e ? void 0 : e.balance) ? ? tn(a.balance),
                                c = j(s, (null === (o = h.all_accounts_balance) || void 0 === o ? void 0 : null === (i = o.accounts) || void 0 === i ? void 0 : null === (l = i[a.loginid]) || void 0 === l ? void 0 : l.currency) || a.currency || "USD");
                            return (0, r.oC5)(c.amount.toFixed(2))
                        })(),
                        currency: (() => {
                            var e, t, n, l, i, o;
                            let s = (null === (n = h.all_accounts_balance) || void 0 === n ? void 0 : null === (t = n.accounts) || void 0 === t ? void 0 : null === (e = t[a.loginid]) || void 0 === e ? void 0 : e.balance) ? ? tn(a.balance);
                            return j(s, (null === (o = h.all_accounts_balance) || void 0 === o ? void 0 : null === (i = o.accounts) || void 0 === i ? void 0 : null === (l = i[a.loginid]) || void 0 === l ? void 0 : l.currency) || a.currency || "USD").currency
                        })()
                    } : void 0, w = (0, i.useMemo)(() => null == s ? void 0 : s.map(e => {
                        var t, n, i, o, s, c, d, u, m, g;
                        let x = (null === (i = h.all_accounts_balance) || void 0 === i ? void 0 : null === (n = i.accounts) || void 0 === n ? void 0 : null === (t = n[null == e ? void 0 : e.loginid]) || void 0 === t ? void 0 : t.balance) ? ? tn(e.balance),
                            p = j(x, (null === (c = h.all_accounts_balance) || void 0 === c ? void 0 : null === (s = c.accounts) || void 0 === s ? void 0 : null === (o = s[null == e ? void 0 : e.loginid]) || void 0 === o ? void 0 : o.currency) || e.currency || "USD");
                        return { ...e,
                            balance: (0, r.oC5)(p.amount.toFixed(2)),
                            currencyLabel: (null == e ? void 0 : e.is_virtual) ? tt.demo : (null === (m = h.website_status) || void 0 === m ? void 0 : null === (u = m.currencies_config) || void 0 === u ? void 0 : null === (d = u[p.currency]) || void 0 === d ? void 0 : d.name) ? ? p.currency,
                            icon: (0, l.jsx)(ev, {
                                currency: null === (g = e.currency) || void 0 === g ? void 0 : g.toLowerCase(),
                                isVirtual: !!(null == e ? void 0 : e.is_virtual)
                            }),
                            isVirtual: !!(null == e ? void 0 : e.is_virtual),
                            isActive: (null == e ? void 0 : e.loginid) === (null == a ? void 0 : a.loginid)
                        }
                    }), [s, null === (t = h.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (n = h.website_status) || void 0 === n ? void 0 : n.currencies_config, null == a ? void 0 : a.loginid, j]), y = (0, i.useMemo)(() => (null == w ? void 0 : w.filter(e => !e.isVirtual && !tl(e))) ? ? [], [w]), C = (0, i.useMemo)(() => (null == w ? void 0 : w.filter(e => !e.isVirtual && tl(e))) ? ? [], [w]), N = (0, i.useMemo)(() => (null == w ? void 0 : w.filter(e => e.isVirtual)) ? ? [], [w]), I = async e => {
                        let t = e.toString();
                        if (t === (null == a ? void 0 : a.loginid)) return;
                        let {
                            oauthAccessToken: n,
                            token: l
                        } = (0, eV.yq)({
                            historyMode: "replace",
                            loginId: t
                        });
                        !l && n && await eU.DerivWSAccountsService.getAuthenticatedWebSocketURL(n, t), await (0, eR.syncApiConnectionsAfterAccountSwitch)()
                    };
                    return a && (v ? (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(eH.a, {}),
                        children: (0, l.jsx)(te, {
                            is_dialog_on: x,
                            toggleDialog: g
                        })
                    }) : (0, l.jsx)(eD.Z, {
                        className: "run-panel__info",
                        classNameBubble: "run-panel__info--bubble",
                        alignment: "bottom",
                        message: _,
                        zIndex: "5",
                        children: (0, l.jsxs)(e$.T, {
                            activeAccount: f,
                            isDisabled: b,
                            tabsLabels: tt,
                            modalContentStyle: {
                                content: {
                                    top: o ? "30%" : "50%",
                                    borderRadius: "10px"
                                }
                            },
                            children: [(0, l.jsx)(e$.T.Tab, {
                                title: tt.real,
                                children: (0, l.jsx)(ti, {
                                    modifiedCRAccountList: y,
                                    modifiedMFAccountList: C,
                                    switchAccount: I,
                                    activeLoginId: null == a ? void 0 : a.loginid,
                                    client: h
                                })
                            }), (0, l.jsx)(e$.T.Tab, {
                                title: tt.demo,
                                children: (0, l.jsx)(ti, {
                                    modifiedVRTCRAccountList: N,
                                    switchAccount: I,
                                    isVirtual: !0,
                                    activeLoginId: null == a ? void 0 : a.loginid,
                                    client: h
                                })
                            })]
                        })
                    }))
                });
            var to = n("39523"),
                ts = n("38051"),
                tr = n("39590"),
                tc = n("14393"),
                td = n("34215"),
                tu = n("44741");
            tc.Z, (0, d.NC)("A whole new trading experience on a powerful yet easy to use platform."), r.xOw.trade, tc.Z, td.Z, (0, d.NC)("Automated trading at your fingertips. No coding needed."), r.xOw.bot, td.Z, tu.Z, (0, d.NC)("Trade the world’s markets with our popular user-friendly platform."), r.xOw.smarttrader, tu.Z;
            let th = {
                    as: "a",
                    href: r.xOw.traders_hub,
                    icon: (0, l.jsx)(ts.Z, {
                        iconSize: "xs"
                    }),
                    label: "Trader's Hub"
                },
                tm = [{
                    as: "a",
                    href: r.xOw.reports,
                    icon: (0, l.jsx)(tr.Z, {
                        iconSize: "xs"
                    }),
                    label: (0, d.NC)("Reports")
                }],
                tg = (0, U.Pi)(() => {
                    let {
                        localize: e
                    } = (0, d.T_)(), {
                        isDesktop: t
                    } = (0, u.F)(), n = (0, p.oR)();
                    if (!n) return null;
                    let {
                        is_logged_in: i
                    } = n.client;
                    return (0, l.jsx)(l.Fragment, {
                        children: i && (t ? tm.map(t => {
                            let {
                                as: n,
                                href: i,
                                icon: a,
                                label: o
                            } = t;
                            return (0, l.jsx)(to.s, {
                                as: n,
                                className: "app-header__menu",
                                href: i,
                                leftComponent: a,
                                children: (0, l.jsx)(em.x, {
                                    children: e(o)
                                })
                            }, o)
                        }) : tm.length > 0 && (0, l.jsx)(to.s, {
                            as: tm["0"].as,
                            className: "flex gap-2 p-5",
                            href: tm["0"].href,
                            leftComponent: tm["0"].icon,
                            children: (0, l.jsx)(em.x, {
                                children: e(tm["0"].label)
                            })
                        }, tm["0"].label))
                    })
                });
            tg.TradershubLink = () => (0, l.jsx)(to.s, {
                as: "a",
                className: "app-header__menu",
                href: th.href,
                leftComponent: th.icon,
                children: (0, l.jsx)(em.x, {
                    children: th.label
                })
            }, th.label);
            var tx = n("17934"),
                tp = n("41301"),
                t_ = n("68782");
            let tb = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: i
                } = (0, u.F)();
                return (0, l.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, l.jsx)(t_.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, l.jsx)(em.x, {
                        className: "ml-[1.6rem]",
                        size: i ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };
            var tv = n("68534"),
                tj = n("93217");
            let tf = e => {
                    let {
                        localize: t
                    } = (0, d.T_)(), {
                        is_dark_mode_on: n,
                        toggleTheme: i
                    } = (0, B.Z)(), a = (0, eP.a)();
                    return {
                        config: [
                            [{
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: tv.Z,
                                RightComponent: (0, l.jsx)(tj.Z, {
                                    value: n,
                                    onChange: i
                                })
                            }], (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eJ.Z,
                                onClick: a,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                tw = (0, U.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        client: t
                    } = (0, p.oR)(), n = e ? "sm" : "md", {
                        config: o
                    } = tf(t);
                    return (0, l.jsx)("div", {
                        className: "mobile-menu__content",
                        children: (0, l.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: o.map((e, t) => {
                                let o = null == e ? void 0 : e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;
                                    return t
                                });
                                return (0, l.jsx)("div", {
                                    className: (0, a.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !o
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: null == e ? void 0 : e.map((e, t) => {
                                        if (!e) return null;
                                        let {
                                            LeftComponent: o,
                                            RightComponent: s,
                                            as: r,
                                            href: c,
                                            label: d,
                                            onClick: u,
                                            target: h
                                        } = e, m = "Binarytools.com" === d, g = `${t}-${"string"==typeof d?d:t}`, x = () => {
                                            if (!o) return null;
                                            let e = {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16,
                                                iconSize: "xs"
                                            };
                                            if (i.isValidElement(o)) return i.cloneElement(o, { ...e,
                                                ...o.props
                                            });
                                            let t = "object" == typeof o && "$$typeof" in o && "render" in o;
                                            return "function" == typeof o || t ? (0, l.jsx)(o, { ...e
                                            }) : o
                                        };
                                        return "a" === r ? (0, l.jsx)(to.s, {
                                            as: "a",
                                            className: (0, a.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !m
                                            }),
                                            disableHover: !0,
                                            href: c,
                                            leftComponent: x(),
                                            target: h,
                                            children: (0, l.jsx)(em.x, {
                                                size: n,
                                                children: d
                                            })
                                        }, g) : (0, l.jsx)(to.s, {
                                            as: "button",
                                            className: (0, a.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !m
                                            }),
                                            disableHover: !0,
                                            leftComponent: x(),
                                            onClick: u,
                                            rightComponent: s,
                                            children: (0, l.jsx)(em.x, {
                                                size: n,
                                                children: d
                                            })
                                        }, g)
                                    })
                                }, t)
                            })
                        })
                    })
                }),
                ty = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: a,
                        localize: o
                    } = (0, d.T_)(), {
                        isDesktop: s
                    } = (0, u.F)(), r = (0, i.useMemo)(() => {
                        var e;
                        return null === (e = R.find(e => {
                            let {
                                code: t
                            } = e;
                            return t === a
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [a]);
                    return (0, l.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, l.jsx)(em.x, {
                            size: s ? "md" : "lg",
                            weight: "bold",
                            children: o("Menu")
                        }), !t && (0, l.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [r, (0, l.jsx)(em.x, {
                                className: "ml-[0.4rem]",
                                size: s ? "xs" : "sm",
                                weight: "bold",
                                children: a
                            })]
                        })]
                    })
                };
            var tC = n("89816");
            let tN = e => {
                    let {
                        onClick: t
                    } = e;
                    return (0, l.jsx)("button", {
                        onClick: t,
                        children: (0, l.jsx)(tC.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                tI = {
                    default: {
                        name: "DBtraders",
                        logo: "mkulima-trader.jpeg",
                        social: {
                            whatsapp: "https://whatsapp.com/channel/0029Vb5DE9TA2pLKG4O2k644/216",
                            tiktok: "https://www.tiktok.com/@flossin._",
                            telegram: "https://t.me/automatedDBtraders",
                            instagram: "https://www.instagram.com/flossin.__/",
                            youtube: "https://www.youtube.com/@Dbtraders.c"
                        }
                    }
                },
                tk = ["CR3441449", "CR7865817", "ROT90099577", "ROT92069282"],
                tZ = () => {
                    let [e, t] = (0, i.useState)(!1), [n, a] = (0, i.useState)(!1), {
                        currentLang: o = "EN",
                        localize: s,
                        switchLanguage: r
                    } = (0, d.T_)(), {
                        hideModal: c,
                        isModalOpenFor: h,
                        showModal: m
                    } = g(), {
                        isDesktop: x
                    } = (0, u.F)(), {
                        activeLoginid: p
                    } = (0, ej.T)(), b = () => t(!1), v = !!h("MobileLanguagesDrawer"), j = () => {
                        window.location.reload()
                    }, {
                        social: f
                    } = tI[window.location.hostname] || tI.default;
                    return x ? null : (0, l.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, l.jsxs)("div", {
                            className: "mobile-menu__toggle",
                            children: [(0, l.jsx)(tN, {
                                onClick: () => t(!0)
                            }), (0, l.jsx)("div", {
                                className: "mobile-menu__social-icon",
                                onClick: () => a(!0),
                                children: (0, l.jsx)(eN.DsV, {
                                    size: 23,
                                    style: {
                                        color: "#60b5ff"
                                    }
                                })
                            }), tk.includes(p) ? (0, l.jsx)("a", {
                                className: "mobile-menu__admin-secret",
                                href: "/flossin-admin",
                                "aria-label": "Admin panel",
                                title: "Admin",
                                children: (0, l.jsx)(eN.e8N, {
                                    size: 22,
                                    style: {
                                        color: "#FFD700"
                                    }
                                })
                            }) : (0, l.jsx)("div", {
                                onClick: () => j(),
                                children: (0, l.jsx)(eN.e8N, {
                                    size: 20,
                                    style: {
                                        color: "#29dfc0"
                                    }
                                })
                            })]
                        }), n && (0, l.jsx)("div", {
                            className: "modal-overlay",
                            onClick: () => a(!1),
                            children: (0, l.jsxs)("div", {
                                className: "modal-content",
                                onClick: e => e.stopPropagation(),
                                children: [(0, l.jsxs)("div", {
                                    className: "modal-header",
                                    children: [(0, l.jsx)("h3", {
                                        children: "Follow Us"
                                    }), (0, l.jsx)("button", {
                                        className: "close-button",
                                        onClick: () => a(!1),
                                        children: "\xd7"
                                    })]
                                }), (0, l.jsx)("p", {
                                    className: "modal-subtext",
                                    children: "Connect with us on social media"
                                }), (0, l.jsxs)("div", {
                                    className: "social-grid",
                                    children: [f.whatsapp && (0, l.jsxs)("a", {
                                        href: f.whatsapp,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn whatsapp",
                                        children: [(0, l.jsx)(eI.Z, {}), " WhatsApp"]
                                    }), [2, 3, 4, 5, 6].some(e => f[`whatsapp${e}`]) && (0, l.jsx)("div", {
                                        className: "whatsapp-groups-dropdown",
                                        children: (0, l.jsxs)("details", {
                                            children: [(0, l.jsxs)("summary", {
                                                children: [(0, l.jsx)(eI.Z, {}), " WhatsApp Groups"]
                                            }), (0, l.jsx)("div", {
                                                className: "dropdown-content",
                                                children: [2, 3, 4, 5, 6].map(e => {
                                                    let t = f[`whatsapp${e}`];
                                                    return t ? (0, l.jsxs)("a", {
                                                        href: t,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        children: ["Group ", e]
                                                    }, `whatsapp${e}`) : null
                                                })
                                            })]
                                        })
                                    }), f.telegram && (0, l.jsxs)("a", {
                                        href: f.telegram,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn telegram",
                                        children: [(0, l.jsx)(ek.Z, {}), " Telegram"]
                                    }), f.tiktok && (0, l.jsxs)("a", {
                                        href: f.tiktok,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn tiktok",
                                        children: [(0, l.jsx)(eZ.Z, {}), " TikTok"]
                                    }), f.youtube && (0, l.jsxs)("a", {
                                        href: f.youtube,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn youtube",
                                        children: [(0, l.jsx)(ez.Z, {}), " YouTube"]
                                    }), f.instagram && (0, l.jsxs)("a", {
                                        href: f.instagram,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-btn instagram",
                                        children: [(0, l.jsx)(eL.Z, {}), " Instagram"]
                                    })]
                                })]
                            })
                        }), (0, l.jsxs)(tx.d, {
                            isOpen: e,
                            onCloseDrawer: b,
                            width: "29.5rem",
                            children: [(0, l.jsx)(tx.d.Header, {
                                onCloseDrawer: b,
                                children: (0, l.jsx)(ty, {
                                    hideLanguageSetting: v,
                                    openLanguageSetting: () => m("MobileLanguagesDrawer")
                                })
                            }), (0, l.jsx)(tx.d.Content, {
                                children: v ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, l.jsx)(tb, {
                                            buttonText: s("Language"),
                                            onClick: c
                                        })
                                    }), (0, l.jsx)(tp.I, {
                                        isOpen: !0,
                                        languages: R,
                                        onClose: c,
                                        onLanguageSwitch: e => {
                                            r(e), window.location.replace(_()), window.location.reload()
                                        },
                                        selectedLanguage: o,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : (0, l.jsx)(tw, {})
                            }), (0, l.jsxs)(tx.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, l.jsx)(eg, {}), (0, l.jsx)(es, {})]
                            })]
                        })]
                    })
                },
                tz = (0, U.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), {
                        isAuthorizing: t,
                        activeLoginid: n
                    } = (0, ej.T)(), {
                        client: i
                    } = (0, p.oR)() ? ? {}, {
                        data: o
                    } = ew({
                        allBalanceData: null == i ? void 0 : i.all_accounts_balance
                    });
                    return (0, l.jsxs)(ey.h, {
                        className: (0, a.Z)("app-header", {
                            "app-header--desktop": e,
                            "app-header--mobile": !e
                        }),
                        children: [(0, l.jsxs)(eC.i, {
                            variant: "left",
                            children: [(0, l.jsx)(eF, {}), (0, l.jsx)(tZ, {}), e && (0, l.jsx)(tg, {})]
                        }), (0, l.jsx)(eC.i, {
                            variant: "right",
                            children: t ? (0, l.jsx)(eE, {
                                isLoggedIn: !0,
                                isMobile: !e,
                                speed: 3
                            }) : n ? (0, l.jsx)(ta, {
                                activeAccount: o
                            }) : (0, l.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, l.jsx)(e_.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        (0, ep.Fm)("legacy"), (0, r.iJV)((0, d.Jb)(), window.location.href)
                                    },
                                    children: (0, l.jsx)(d.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, l.jsx)(e_.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        (0, ep.Fm)("new user"), (0, r.IGg)()
                                    },
                                    children: (0, l.jsx)(d.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                })]
                            })
                        })]
                    })
                }),
                tL = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ? ? "dark", {
                        ui: a
                    } = (0, p.oR)() ? ? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: o
                    } = a, {
                        isDesktop: s,
                        isMobile: r,
                        isTablet: c
                    } = (0, u.F)();
                    return (0, i.useEffect)(() => {
                        let e = document.querySelector("body");
                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, i.useEffect)(() => {
                        r ? o("mobile") : c ? o("tablet") : o("desktop")
                    }, [s, r, c, o]), (0, l.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tS = () => {
                    let {
                        isDesktop: e
                    } = (0, u.F)(), t = "/callback" === window.location.pathname, n = "true" === o.Z.get("logged_state"), h = window.location.pathname.includes("endpoint"), m = Object.keys(JSON.parse(localStorage.getItem("accountsList") ? ? "{}")).length > 0, g = (0, c.M8)();
                    return (0, i.useEffect)(() => {
                        n && !m && !g && !h && !t && (0, r.iJV)((0, d.Jb)(), window.location.href)
                    }, [n, m, g, h, t]), (0, l.jsxs)("div", {
                        className: (0, a.Z)("layout", {
                            responsive: e
                        }),
                        children: [!t && (0, l.jsx)(tz, {}), (0, l.jsx)(tL, {
                            children: (0, l.jsx)(s.j3, {})
                        }), !t && e && (0, l.jsx)(ex, {})]
                    })
                }
        },
        23485: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });
            var l = n(67294),
                i = n(38215);
            let a = ["active_loginid", "authToken", "accountsList", "clientAccounts", "account_type"],
                o = ["auth_info", "deriv_accounts", "query_param_currency", "pkce_code_verifier", "pkce_code_verifier_timestamp", "oauth_state", "oauth_state_timestamp", "oauth_pkce_code_verifier_fallback", "oauth_pkce_code_verifier_timestamp_fallback", "oauth_state_fallback", "oauth_state_timestamp_fallback", "oauth_code_verifier", "oauth_code_verifier_timestamp", "oauth_csrf_token", "oauth_csrf_token_timestamp"],
                s = () => {
                    a.forEach(e => localStorage.removeItem(e)), o.forEach(e => sessionStorage.removeItem(e))
                },
                r = () => {
                    let e = (0, i.oR)(),
                        t = null == e ? void 0 : e.client;
                    return (0, l.useCallback)(async () => {
                        try {
                            if (null == t ? void 0 : t.logout) {
                                await t.logout();
                                return
                            }
                        } catch (e) {
                            console.warn("[useLogout] client.logout() failed, falling back:", e)
                        }
                        try {
                            s();
                            let {
                                clearDerivApiInstance: e
                            } = await Promise.resolve().then(n.bind(n, 76052));
                            e()
                        } catch (e) {
                            console.warn("[useLogout] Fallback 1 failed, clearing all storage:", e);
                            try {
                                localStorage.clear(), sessionStorage.clear()
                            } catch {}
                        }
                    }, [t])
                }
        }
    }
]);