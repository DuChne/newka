!function(C) {
    function I(T) {
        if (E[T])
            return E[T].exports;
        var D = E[T] = {
            exports: {},
            id: T,
            loaded: !1
        };
        return C[T].call(D.exports, D, D.exports, I),
        D.loaded = !0,
        D.exports
    }
    var T = window.webpackJsonp;
    window.webpackJsonp = function(_, O) {
        for (var e, S, t = 0, R = []; t < _.length; t++)
            S = _[t],
            D[S] && R.push.apply(R, D[S]),
            D[S] = 0;
        for (e in O)
            Object.prototype.hasOwnProperty.call(O, e) && (C[e] = O[e]);
        for (T && T(_, O); R.length; )
            R.shift().call(null, I);
        if (O[0])
            return E[0] = 0,
            I(0)
    }
    ;
    var E = {}
      , D = {
        1: 0
    };
    return I.e = function(C, T) {
        if (0 === D[C])
            return T.call(null, I);
        if (void 0 !== D[C])
            D[C].push(T);
        else {
            D[C] = [T];
            var E = document.getElementsByTagName("head")[0]
              , _ = document.createElement("script");
            _.type = "text/javascript",
            _.charset = "utf-8",
            _.async = !0,
            _.src = I.p + "" + ({
                0: "commonImport",
                2: "king-qqVIP/qqVIP-fill",
                3: "king-scratch-card/scratch-card",
                4: "king-scratch-card/scratch-fill",
                5: "tencent-extension/blank",
                6: "tencent-extension/extension",
                7: "tencent-extension/fill",
                8: "tencent-extension/king-tab",
                9: "tencent-int/error",
                10: "tencent-int/lightning-extend-fill",
                11: "tencent-int/lightning-fill",
                12: "tencent-int/lightning-info",
                13: "tencent-int/lightning-order-info",
                14: "tencent-int/lightning-step2",
                15: "tencent-int/order-success",
                16: "tencent-int/waiting",
                17: "tencent/618-kingglory",
                18: "tencent/618-kingglory-fill",
                19: "tencent/alliances",
                20: "tencent/application",
                21: "tencent/awake",
                22: "tencent/baidu-ad-fill",
                23: "tencent/baidu-ad-put",
                24: "tencent/change-credentials",
                25: "tencent/change-info-success",
                26: "tencent/chaos-world-king",
                27: "tencent/contra",
                28: "tencent/cool-running",
                29: "tencent/crossfire",
                30: "tencent/crossfire-fill",
                31: "tencent/crossfire-success",
                32: "tencent/doudizhu",
                33: "tencent/douyu",
                34: "tencent/extempore-fill",
                35: "tencent/extempore-success",
                36: "tencent/fate-fighter-king",
                37: "tencent/fc",
                38: "tencent/fc-fill",
                39: "tencent/fill",
                40: "tencent/flow-range",
                41: "tencent/game-fill",
                42: "tencent/glory-mission",
                43: "tencent/half-error1",
                44: "tencent/half-fill",
                45: "tencent/half-register",
                46: "tencent/half-success-kh",
                47: "tencent/half-waiting",
                48: "tencent/happy-landlords",
                49: "tencent/head-card",
                50: "tencent/head-card-new",
                51: "tencent/heroes-invincible",
                52: "tencent/hokage",
                53: "tencent/huomao-tab",
                54: "tencent/international-fill",
                55: "tencent/king-activity-fill",
                56: "tencent/king-apply-tab",
                57: "tencent/king-game-tab",
                58: "tencent/king-globe-tab",
                59: "tencent/king-half-tab",
                60: "tencent/king-half-tab-227",
                61: "tencent/king-map-tab",
                62: "tencent/king-music-tab",
                63: "tencent/king-new",
                64: "tencent/king-new-tab",
                65: "tencent/king-now-tab",
                66: "tencent/king-omg-tab",
                67: "tencent/king-parent-tab",
                68: "tencent/king-qq-fill",
                69: "tencent/king-qq-tab",
                70: "tencent/king-regression",
                71: "tencent/king-regression-fail",
                72: "tencent/king-regression-fill",
                73: "tencent/king-regression-success",
                74: "tencent/king-staff-tab",
                75: "tencent/king-stimulate-fill",
                76: "tencent/king-stimulate-tab",
                77: "tencent/king-tab",
                78: "tencent/king-tibet-qh",
                79: "tencent/king-tibet-tab",
                80: "tencent/king-tongxue-tab",
                81: "tencent/king-university-tab",
                82: "tencent/king-video-tab",
                83: "tencent/kingglory",
                84: "tencent/kingglory-fill",
                85: "tencent/kingglory-new",
                86: "tencent/kingglory-new-fill",
                87: "tencent/kingglory-new-success",
                88: "tencent/kingglory-success",
                89: "tencent/kingglory-summer",
                90: "tencent/kinggloryhelper",
                91: "tencent/kuaishou",
                92: "tencent/landscape-fill",
                93: "tencent/light-contact",
                94: "tencent/light-contact-fill",
                95: "tencent/light-contact-sz",
                96: "tencent/lightning-fill",
                97: "tencent/lightning-info",
                98: "tencent/lightning-step2",
                99: "tencent/lightning-step4",
                100: "tencent/lightning-stepover2",
                101: "tencent/mall-mobile-fill",
                102: "tencent/mall-pc-fill",
                103: "tencent/mgc",
                104: "tencent/mobile-fill",
                105: "tencent/mogu-live",
                106: "tencent/music-tab",
                107: "tencent/new-fill",
                108: "tencent/new-fill-qh",
                109: "tencent/new-success",
                110: "tencent/new-success2",
                111: "tencent/onlineGo",
                112: "tencent/onlineGo-fill",
                113: "tencent/order-success",
                114: "tencent/panda",
                115: "tencent/passport",
                116: "tencent/passport-fill",
                117: "tencent/penguin-games",
                118: "tencent/people-k-song",
                119: "tencent/poker",
                120: "tencent/qq-adv",
                121: "tencent/qq-dance",
                122: "tencent/qq-dance-fill",
                123: "tencent/qq-supervip-fill",
                124: "tencent/rider-fill",
                125: "tencent/rider-meituan",
                126: "tencent/rider-new-success",
                127: "tencent/rider-tariff-details",
                128: "tencent/royalty-plan-fill",
                129: "tencent/running",
                130: "tencent/schoolyard",
                131: "tencent/schoolyard-fill",
                132: "tencent/select-hall",
                133: "tencent/tComNestCode",
                134: "tencent/tComNestCode-fill",
                135: "tencent/tariff-details",
                136: "tencent/tariff-details-qq",
                137: "tencent/tencent-delay-fill",
                138: "tencent/tencent-pc-bj-fill",
                139: "tencent/tencent-pc-fill",
                140: "tencent/tibet-qh-fill",
                141: "tencent/tsa",
                142: "tencent/tsa-fill",
                143: "tencent/unicom-card",
                144: "tencent/unicom-fill",
                145: "tencent/video-tab",
                146: "tencent/video-vip",
                147: "tencent/videovip2",
                148: "tencent/weizhongbank",
                149: "tencent/wholearmystrikes",
                150: "tencent/wholearmystrikesfill",
                151: "tencent/zhihu-pc",
                152: "tencent/zhihu-pc-fill"
            }[C] || C) + "." + {
                0: "18a778c7d2def31e6fd9",
                2: "ed728043fde751e573d4",
                3: "f9291eb46afe4ce25e56",
                4: "f4bed5aeea42692f98b5",
                5: "63dcf0ca414717809e33",
                6: "f688ea9ea781f9322be3",
                7: "185de354979453f55c0b",
                8: "6f921c05534b5bf00a21",
                9: "aca859367cd3cf9f09e7",
                10: "1af99a86a205a17698ec",
                11: "de33e06d7f943444a6e0",
                12: "0834fbbefe720c5e47a5",
                13: "e7c8db5007fab9347e23",
                14: "aa073fc32b375fb46e2b",
                15: "163dfcc675ef4ad5f4a7",
                16: "7b11ccc6c4fe3ef53b20",
                17: "c62932548e0e4d2f1c47",
                18: "d48cbf41d67bc3e3d0bc",
                19: "11b13d832d45c2568990",
                20: "e557f09822eee55505f4",
                21: "b0fcb2ea4eb93369c375",
                22: "ced4ca5bd6cd135f9e0a",
                23: "f0f9711fad9e25073644",
                24: "3f7f6f6dc1de93f3e55d",
                25: "0edd1aa3905f46576944",
                26: "a098f71a6b7ebd731296",
                27: "1f827693020d135727d0",
                28: "580d9fc3e05d83216779",
                29: "35d012a1028c3b195cf2",
                30: "b99446e1f1466ee99af7",
                31: "815ad601944d7e5c6615",
                32: "219763732cf279e05470",
                33: "cd846a1fe7092ea64804",
                34: "db7d0aa2ebcb84bbf516",
                35: "bd503549a3ca2c4c41d2",
                36: "a7ac46d76b71f910a87a",
                37: "c43d638b7df410f10b21",
                38: "ca82a3a5e921d0da2a9c",
                39: "b91463eb5397688553d7",
                40: "8bf6b2424f16a25123f3",
                41: "1a30e59903b98777d1f0",
                42: "0b6fe73410666fd5b65b",
                43: "05b9656c9fee8b3c331d",
                44: "c29fed271d1a5f82fe4f",
                45: "3cb9c664bdd596f9d813",
                46: "4eb121a084e1a541d2c7",
                47: "dd55a5f929aa6eee4777",
                48: "5c20d9105e949015c03f",
                49: "bb2b6054151071b5854d",
                50: "1dc63d413b0d83716950",
                51: "a255ce3e153bd3c56879",
                52: "a1f45f2a40a5faccd3ad",
                53: "3240b247cc4eef3b8e8a",
                54: "6e426bbb4e2dab80cb35",
                55: "f4ddf8a3bafe5477bb5c",
                56: "8e1399baafe6993daf0a",
                57: "771691c917ee793d6080",
                58: "f3b076c5a67a7f8eaf36",
                59: "deef0f8dbac5fa01bd34",
                60: "59feb33c292a120dc586",
                61: "3925f2bf63eb22ddcde7",
                62: "fa02968438d5746e0459",
                63: "7a29efad169a8553ee4d",
                64: "d0a6aaa66bca0427eed0",
                65: "9f5cc4a8a3ccb60261ae",
                66: "7514bbb888181047b876",
                67: "762a4066f3701d202ee3",
                68: "c0fbb60cc7c53fd04db4",
                69: "e4963775793d04c61ff8",
                70: "a3e6fedc739b6eca7457",
                71: "289931b4118c21d47bb2",
                72: "1455736eff67854eb9fb",
                73: "80f6752b97cbf0cb9b28",
                74: "0c9f30c76d9d77a1ea82",
                75: "a1cc32e5be71ec7c465e",
                76: "2f7847e5cc7b5fce03d7",
                77: "94f80329d989f36efe62",
                78: "cd6a463a4bf22b8ec19a",
                79: "513ddec6b21cafc340a6",
                80: "c9c90258e418b2615d61",
                81: "314ee36867d8531c0f5f",
                82: "aa1fcea578c6e56eb39d",
                83: "b968cd5ced9e7179dc12",
                84: "04d777114feae0d2aba5",
                85: "eee66e417dd91ffe632a",
                86: "50c61fa5f12530f874f0",
                87: "ebda0de4932afc8bbd8c",
                88: "deafcd1206533868a34c",
                89: "3b1d8d35255d19c62170",
                90: "f4fb1bddfbd62cdc9658",
                91: "fdec205e2f80544c9295",
                92: "39acc6d1238db3cdf3f5",
                93: "03785dba165ffca5dc59",
                94: "9e585d879164ed8eff8f",
                95: "ab1f34c027f4625bc97f",
                96: "9d89999bd8d9f319d616",
                97: "23361c60785409c0b9ae",
                98: "ee75e1c1e93baa1f1754",
                99: "fb7676e7a6249dded13d",
                100: "d24f18b6ea63d9ea2cc2",
                101: "a6f73098724887ffdf05",
                102: "f1c136038db490cfebc9",
                103: "3ea6889b505d129d0f8f",
                104: "f8268c816b31f3325ed0",
                105: "8160557257c95fa95b19",
                106: "b90739ae24227ff1e21c",
                107: "ae0d68b34e014faa6f65",
                108: "b021f78ce4d27fb8ce60",
                109: "0793817c68663b12b96c",
                110: "20a1822289d0fda61a9f",
                111: "f0acf8b6b4511e9dbb8a",
                112: "e3b4f0ce948cffcba35a",
                113: "9174d58e8e337c30cde3",
                114: "fdee608687cae20d0511",
                115: "d57ed66ce9afda9042f0",
                116: "4f14b67d604c79b60ade",
                117: "2c319428cb2dc024317d",
                118: "56166f2b4343d0c8dc84",
                119: "d8756ed7ed4a76160758",
                120: "97b9637732ad5e167192",
                121: "a03b8acff0a3a1a1f4a7",
                122: "89a09bdf952e2ab7a4dd",
                123: "ab100a35e4a709d0d7b8",
                124: "1481e3c39e80f9001cb2",
                125: "99d374de2f81859c46b2",
                126: "b2992a2abc36e6242301",
                127: "9b6dce2718f356558762",
                128: "26524fde8c335b7ca51a",
                129: "88c02935996900f0f52e",
                130: "671b0c1d8fe5f445c9f2",
                131: "299947a7cc654a65b2cf",
                132: "0fe2f4498d3bc3342ce3",
                133: "9eb2bc2c3884ee6b89e9",
                134: "3dacbdf2602842a72eea",
                135: "e9403cb53f10dde8cfe1",
                136: "537ec8bdcefe854d212c",
                137: "f83ca042df9f6db2b4ba",
                138: "1a61cbd53416a429c19f",
                139: "25b9fc73be3adf04fcd1",
                140: "8e726c735e0f8c0d65f1",
                141: "1fc8a9f2ad4b96fc0626",
                142: "207dd1dceb8442205dd8",
                143: "9fd2f23201869063f630",
                144: "c9901ea14e039899ed0f",
                145: "88f19efbe2dd623e5df7",
                146: "1706e10bdc5f89992714",
                147: "68da137a297a3f0b7958",
                148: "4842b6856110dc59a383",
                149: "844cfc278f3b33c4229c",
                150: "63b2ca0c0e854b3791e0",
                151: "276d5fbd68b2c24c9d53",
                152: "5340989c621f270e783a"
            }[C] + ".js",
            E.appendChild(_)
        }
    }
    ,
    I.m = C,
    I.c = E,
    I.p = "https://res.mall.10010.cn/mall/wow/",
    I(0)
}([function(C, I, T) {
    T(1),
    C.exports = T(2)
}
, function(C, I, T) {
    var E, D;
    /*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
    !function(I, T) {
        "use strict";
        "object" == typeof C && "object" == typeof C.exports ? C.exports = I.document ? T(I, !0) : function(C) {
            if (!C.document)
                throw new Error("jQuery requires a window with a document");
            return T(C)
        }
        : T(I)
    }("undefined" != typeof window ? window : this, function(T, _) {
        "use strict";
        function O(C, I, T) {
            I = I || RC;
            var E, D = I.createElement("script");
            if (D.text = C,
            T)
                for (E in fC)
                    T[E] && (D[E] = T[E]);
            I.head.appendChild(D).parentNode.removeChild(D)
        }
        function e(C) {
            return null == C ? C + "" : "object" == typeof C || "function" == typeof C ? iC[AC.call(C)] || "object" : typeof C
        }
        function S(C) {
            var I = !!C && "length"in C && C.length
              , T = e(C);
            return !uC(C) && !lC(C) && ("array" === T || 0 === I || "number" == typeof I && I > 0 && I - 1 in C)
        }
        function t(C, I) {
            return C.nodeName && C.nodeName.toLowerCase() === I.toLowerCase()
        }
        function R(C, I, T) {
            return uC(I) ? pC.grep(C, function(C, E) {
                return !!I.call(C, E, C) !== T
            }) : I.nodeType ? pC.grep(C, function(C) {
                return C === I !== T
            }) : "string" != typeof I ? pC.grep(C, function(C) {
                return oC.call(I, C) > -1 !== T
            }) : pC.filter(I, C, T)
        }
        function n(C, I) {
            for (; (C = C[I]) && 1 !== C.nodeType; )
                ;
            return C
        }
        function Y(C) {
            var I = {};
            return pC.each(C.match(jC) || [], function(C, T) {
                I[T] = !0
            }),
            I
        }
        function N(C) {
            return C
        }
        function r(C) {
            throw C
        }
        function o(C, I, T, E) {
            var D;
            try {
                C && uC(D = C.promise) ? D.call(C).done(I).fail(T) : C && uC(D = C.then) ? D.call(C, I, T) : I.apply(void 0, [C].slice(E))
            } catch (C) {
                T.apply(void 0, [C])
            }
        }
        function i() {
            RC.removeEventListener("DOMContentLoaded", i),
            T.removeEventListener("load", i),
            pC.ready()
        }
        function A(C, I) {
            return I.toUpperCase()
        }
        function M(C) {
            return C.replace(BC, "ms-").replace(FC, A)
        }
        function a() {
            this.expando = pC.expando + a.uid++
        }
        function c(C) {
            return "true" === C || "false" !== C && ("null" === C ? null : C === +C + "" ? +C : zC.test(C) ? JSON.parse(C) : C)
        }
        function s(C, I, T) {
            var E;
            if (void 0 === T && 1 === C.nodeType)
                if (E = "data-" + I.replace(XC, "-$&").toLowerCase(),
                T = C.getAttribute(E),
                "string" == typeof T) {
                    try {
                        T = c(T)
                    } catch (C) {}
                    $C.set(C, I, T)
                } else
                    T = void 0;
            return T
        }
        function u(C, I, T, E) {
            var D, _, O = 20, e = E ? function() {
                return E.cur()
            }
            : function() {
                return pC.css(C, I, "")
            }
            , S = e(), t = T && T[3] || (pC.cssNumber[I] ? "" : "px"), R = (pC.cssNumber[I] || "px" !== t && +S) && JC.exec(pC.css(C, I));
            if (R && R[3] !== t) {
                for (S /= 2,
                t = t || R[3],
                R = +S || 1; O--; )
                    pC.style(C, I, R + t),
                    (1 - _) * (1 - (_ = e() / S || .5)) <= 0 && (O = 0),
                    R /= _;
                R *= 2,
                pC.style(C, I, R + t),
                T = T || []
            }
            return T && (R = +R || +S || 0,
            D = T[1] ? R + (T[1] + 1) * T[2] : +T[2],
            E && (E.unit = t,
            E.start = R,
            E.end = D)),
            D
        }
        function l(C) {
            var I, T = C.ownerDocument, E = C.nodeName, D = CI[E];
            return D ? D : (I = T.body.appendChild(T.createElement(E)),
            D = pC.css(I, "display"),
            I.parentNode.removeChild(I),
            "none" === D && (D = "block"),
            CI[E] = D,
            D)
        }
        function f(C, I) {
            for (var T, E, D = [], _ = 0, O = C.length; _ < O; _++)
                E = C[_],
                E.style && (T = E.style.display,
                I ? ("none" === T && (D[_] = WC.get(E, "display") || null,
                D[_] || (E.style.display = "")),
                "" === E.style.display && ZC(E) && (D[_] = l(E))) : "none" !== T && (D[_] = "none",
                WC.set(E, "display", T)));
            for (_ = 0; _ < O; _++)
                null != D[_] && (C[_].style.display = D[_]);
            return C
        }
        function d(C, I) {
            var T;
            return T = "undefined" != typeof C.getElementsByTagName ? C.getElementsByTagName(I || "*") : "undefined" != typeof C.querySelectorAll ? C.querySelectorAll(I || "*") : [],
            void 0 === I || I && t(C, I) ? pC.merge([C], T) : T
        }
        function p(C, I) {
            for (var T = 0, E = C.length; T < E; T++)
                WC.set(C[T], "globalEval", !I || WC.get(I[T], "globalEval"))
        }
        function h(C, I, T, E, D) {
            for (var _, O, S, t, R, n, Y = I.createDocumentFragment(), N = [], r = 0, o = C.length; r < o; r++)
                if (_ = C[r],
                _ || 0 === _)
                    if ("object" === e(_))
                        pC.merge(N, _.nodeType ? [_] : _);
                    else if (_I.test(_)) {
                        for (O = O || Y.appendChild(I.createElement("div")),
                        S = (TI.exec(_) || ["", ""])[1].toLowerCase(),
                        t = DI[S] || DI._default,
                        O.innerHTML = t[1] + pC.htmlPrefilter(_) + t[2],
                        n = t[0]; n--; )
                            O = O.lastChild;
                        pC.merge(N, O.childNodes),
                        O = Y.firstChild,
                        O.textContent = ""
                    } else
                        N.push(I.createTextNode(_));
            for (Y.textContent = "",
            r = 0; _ = N[r++]; )
                if (E && pC.inArray(_, E) > -1)
                    D && D.push(_);
                else if (R = pC.contains(_.ownerDocument, _),
                O = d(Y.appendChild(_), "script"),
                R && p(O),
                T)
                    for (n = 0; _ = O[n++]; )
                        EI.test(_.type || "") && T.push(_);
            return Y
        }
        function P() {
            return !0
        }
        function m() {
            return !1
        }
        function g() {
            try {
                return RC.activeElement
            } catch (C) {}
        }
        function v(C, I, T, E, D, _) {
            var O, e;
            if ("object" == typeof I) {
                "string" != typeof T && (E = E || T,
                T = void 0);
                for (e in I)
                    v(C, e, T, E, I[e], _);
                return C
            }
            if (null == E && null == D ? (D = T,
            E = T = void 0) : null == D && ("string" == typeof T ? (D = E,
            E = void 0) : (D = E,
            E = T,
            T = void 0)),
            D === !1)
                D = m;
            else if (!D)
                return C;
            return 1 === _ && (O = D,
            D = function(C) {
                return pC().off(C),
                O.apply(this, arguments)
            }
            ,
            D.guid = O.guid || (O.guid = pC.guid++)),
            C.each(function() {
                pC.event.add(this, I, D, E, T)
            })
        }
        function V(C, I) {
            return t(C, "table") && t(11 !== I.nodeType ? I : I.firstChild, "tr") ? pC(C).children("tbody")[0] || C : C
        }
        function y(C) {
            return C.type = (null !== C.getAttribute("type")) + "/" + C.type,
            C
        }
        function b(C) {
            return "true/" === (C.type || "").slice(0, 5) ? C.type = C.type.slice(5) : C.removeAttribute("type"),
            C
        }
        function x(C, I) {
            var T, E, D, _, O, e, S, t;
            if (1 === I.nodeType) {
                if (WC.hasData(C) && (_ = WC.access(C),
                O = WC.set(I, _),
                t = _.events)) {
                    delete O.handle,
                    O.events = {};
                    for (D in t)
                        for (T = 0,
                        E = t[D].length; T < E; T++)
                            pC.event.add(I, D, t[D][T])
                }
                $C.hasData(C) && (e = $C.access(C),
                S = pC.extend({}, e),
                $C.set(I, S))
            }
        }
        function w(C, I) {
            var T = I.nodeName.toLowerCase();
            "input" === T && II.test(C.type) ? I.checked = C.checked : "input" !== T && "textarea" !== T || (I.defaultValue = C.defaultValue)
        }
        function k(C, I, T, E) {
            I = NC.apply([], I);
            var D, _, e, S, t, R, n = 0, Y = C.length, N = Y - 1, r = I[0], o = uC(r);
            if (o || Y > 1 && "string" == typeof r && !sC.checkClone && YI.test(r))
                return C.each(function(D) {
                    var _ = C.eq(D);
                    o && (I[0] = r.call(this, D, _.html())),
                    k(_, I, T, E)
                });
            if (Y && (D = h(I, C[0].ownerDocument, !1, C, E),
            _ = D.firstChild,
            1 === D.childNodes.length && (D = _),
            _ || E)) {
                for (e = pC.map(d(D, "script"), y),
                S = e.length; n < Y; n++)
                    t = D,
                    n !== N && (t = pC.clone(t, !0, !0),
                    S && pC.merge(e, d(t, "script"))),
                    T.call(C[n], t, n);
                if (S)
                    for (R = e[e.length - 1].ownerDocument,
                    pC.map(e, b),
                    n = 0; n < S; n++)
                        t = e[n],
                        EI.test(t.type || "") && !WC.access(t, "globalEval") && pC.contains(R, t) && (t.src && "module" !== (t.type || "").toLowerCase() ? pC._evalUrl && pC._evalUrl(t.src) : O(t.textContent.replace(NI, ""), R, t))
            }
            return C
        }
        function j(C, I, T) {
            for (var E, D = I ? pC.filter(I, C) : C, _ = 0; null != (E = D[_]); _++)
                T || 1 !== E.nodeType || pC.cleanData(d(E)),
                E.parentNode && (T && pC.contains(E.ownerDocument, E) && p(d(E, "script")),
                E.parentNode.removeChild(E));
            return C
        }
        function L(C, I, T) {
            var E, D, _, O, e = C.style;
            return T = T || oI(C),
            T && (O = T.getPropertyValue(I) || T[I],
            "" !== O || pC.contains(C.ownerDocument, C) || (O = pC.style(C, I)),
            !sC.pixelBoxStyles() && rI.test(O) && iI.test(I) && (E = e.width,
            D = e.minWidth,
            _ = e.maxWidth,
            e.minWidth = e.maxWidth = e.width = O,
            O = T.width,
            e.width = E,
            e.minWidth = D,
            e.maxWidth = _)),
            void 0 !== O ? O + "" : O
        }
        function q(C, I) {
            return {
                get: function() {
                    return C() ? void delete this.get : (this.get = I).apply(this, arguments)
                }
            }
        }
        function H(C) {
            if (C in uI)
                return C;
            for (var I = C[0].toUpperCase() + C.slice(1), T = sI.length; T--; )
                if (C = sI[T] + I,
                C in uI)
                    return C
        }
        function B(C) {
            var I = pC.cssProps[C];
            return I || (I = pC.cssProps[C] = H(C) || C),
            I
        }
        function F(C, I, T) {
            var E = JC.exec(I);
            return E ? Math.max(0, E[2] - (T || 0)) + (E[3] || "px") : I
        }
        function U(C, I, T, E, D, _) {
            var O = "width" === I ? 1 : 0
              , e = 0
              , S = 0;
            if (T === (E ? "border" : "content"))
                return 0;
            for (; O < 4; O += 2)
                "margin" === T && (S += pC.css(C, T + QC[O], !0, D)),
                E ? ("content" === T && (S -= pC.css(C, "padding" + QC[O], !0, D)),
                "margin" !== T && (S -= pC.css(C, "border" + QC[O] + "Width", !0, D))) : (S += pC.css(C, "padding" + QC[O], !0, D),
                "padding" !== T ? S += pC.css(C, "border" + QC[O] + "Width", !0, D) : e += pC.css(C, "border" + QC[O] + "Width", !0, D));
            return !E && _ >= 0 && (S += Math.max(0, Math.ceil(C["offset" + I[0].toUpperCase() + I.slice(1)] - _ - S - e - .5))),
            S
        }
        function W(C, I, T) {
            var E = oI(C)
              , D = L(C, I, E)
              , _ = "border-box" === pC.css(C, "boxSizing", !1, E)
              , O = _;
            if (rI.test(D)) {
                if (!T)
                    return D;
                D = "auto"
            }
            return O = O && (sC.boxSizingReliable() || D === C.style[I]),
            ("auto" === D || !parseFloat(D) && "inline" === pC.css(C, "display", !1, E)) && (D = C["offset" + I[0].toUpperCase() + I.slice(1)],
            O = !0),
            D = parseFloat(D) || 0,
            D + U(C, I, T || (_ ? "border" : "content"), O, E, D) + "px"
        }
        function $(C, I, T, E, D) {
            return new $.prototype.init(C,I,T,E,D)
        }
        function z() {
            fI && (RC.hidden === !1 && T.requestAnimationFrame ? T.requestAnimationFrame(z) : T.setTimeout(z, pC.fx.interval),
            pC.fx.tick())
        }
        function X() {
            return T.setTimeout(function() {
                lI = void 0
            }),
            lI = Date.now()
        }
        function G(C, I) {
            var T, E = 0, D = {
                height: C
            };
            for (I = I ? 1 : 0; E < 4; E += 2 - I)
                T = QC[E],
                D["margin" + T] = D["padding" + T] = C;
            return I && (D.opacity = D.width = C),
            D
        }
        function J(C, I, T) {
            for (var E, D = (K.tweeners[I] || []).concat(K.tweeners["*"]), _ = 0, O = D.length; _ < O; _++)
                if (E = D[_].call(T, I, C))
                    return E
        }
        function Q(C, I, T) {
            var E, D, _, O, e, S, t, R, n = "width"in I || "height"in I, Y = this, N = {}, r = C.style, o = C.nodeType && ZC(C), i = WC.get(C, "fxshow");
            T.queue || (O = pC._queueHooks(C, "fx"),
            null == O.unqueued && (O.unqueued = 0,
            e = O.empty.fire,
            O.empty.fire = function() {
                O.unqueued || e()
            }
            ),
            O.unqueued++,
            Y.always(function() {
                Y.always(function() {
                    O.unqueued--,
                    pC.queue(C, "fx").length || O.empty.fire()
                })
            }));
            for (E in I)
                if (D = I[E],
                dI.test(D)) {
                    if (delete I[E],
                    _ = _ || "toggle" === D,
                    D === (o ? "hide" : "show")) {
                        if ("show" !== D || !i || void 0 === i[E])
                            continue;
                        o = !0
                    }
                    N[E] = i && i[E] || pC.style(C, E)
                }
            if (S = !pC.isEmptyObject(I),
            S || !pC.isEmptyObject(N)) {
                n && 1 === C.nodeType && (T.overflow = [r.overflow, r.overflowX, r.overflowY],
                t = i && i.display,
                null == t && (t = WC.get(C, "display")),
                R = pC.css(C, "display"),
                "none" === R && (t ? R = t : (f([C], !0),
                t = C.style.display || t,
                R = pC.css(C, "display"),
                f([C]))),
                ("inline" === R || "inline-block" === R && null != t) && "none" === pC.css(C, "float") && (S || (Y.done(function() {
                    r.display = t
                }),
                null == t && (R = r.display,
                t = "none" === R ? "" : R)),
                r.display = "inline-block")),
                T.overflow && (r.overflow = "hidden",
                Y.always(function() {
                    r.overflow = T.overflow[0],
                    r.overflowX = T.overflow[1],
                    r.overflowY = T.overflow[2]
                })),
                S = !1;
                for (E in N)
                    S || (i ? "hidden"in i && (o = i.hidden) : i = WC.access(C, "fxshow", {
                        display: t
                    }),
                    _ && (i.hidden = !o),
                    o && f([C], !0),
                    Y.done(function() {
                        o || f([C]),
                        WC.remove(C, "fxshow");
                        for (E in N)
                            pC.style(C, E, N[E])
                    })),
                    S = J(o ? i[E] : 0, E, Y),
                    E in i || (i[E] = S.start,
                    o && (S.end = S.start,
                    S.start = 0))
            }
        }
        function Z(C, I) {
            var T, E, D, _, O;
            for (T in C)
                if (E = M(T),
                D = I[E],
                _ = C[T],
                Array.isArray(_) && (D = _[1],
                _ = C[T] = _[0]),
                T !== E && (C[E] = _,
                delete C[T]),
                O = pC.cssHooks[E],
                O && "expand"in O) {
                    _ = O.expand(_),
                    delete C[E];
                    for (T in _)
                        T in C || (C[T] = _[T],
                        I[T] = D)
                } else
                    I[E] = D
        }
        function K(C, I, T) {
            var E, D, _ = 0, O = K.prefilters.length, e = pC.Deferred().always(function() {
                delete S.elem
            }), S = function() {
                if (D)
                    return !1;
                for (var I = lI || X(), T = Math.max(0, t.startTime + t.duration - I), E = T / t.duration || 0, _ = 1 - E, O = 0, S = t.tweens.length; O < S; O++)
                    t.tweens[O].run(_);
                return e.notifyWith(C, [t, _, T]),
                _ < 1 && S ? T : (S || e.notifyWith(C, [t, 1, 0]),
                e.resolveWith(C, [t]),
                !1)
            }, t = e.promise({
                elem: C,
                props: pC.extend({}, I),
                opts: pC.extend(!0, {
                    specialEasing: {},
                    easing: pC.easing._default
                }, T),
                originalProperties: I,
                originalOptions: T,
                startTime: lI || X(),
                duration: T.duration,
                tweens: [],
                createTween: function(I, T) {
                    var E = pC.Tween(C, t.opts, I, T, t.opts.specialEasing[I] || t.opts.easing);
                    return t.tweens.push(E),
                    E
                },
                stop: function(I) {
                    var T = 0
                      , E = I ? t.tweens.length : 0;
                    if (D)
                        return this;
                    for (D = !0; T < E; T++)
                        t.tweens[T].run(1);
                    return I ? (e.notifyWith(C, [t, 1, 0]),
                    e.resolveWith(C, [t, I])) : e.rejectWith(C, [t, I]),
                    this
                }
            }), R = t.props;
            for (Z(R, t.opts.specialEasing); _ < O; _++)
                if (E = K.prefilters[_].call(t, C, R, t.opts))
                    return uC(E.stop) && (pC._queueHooks(t.elem, t.opts.queue).stop = E.stop.bind(E)),
                    E;
            return pC.map(R, J, t),
            uC(t.opts.start) && t.opts.start.call(C, t),
            t.progress(t.opts.progress).done(t.opts.done, t.opts.complete).fail(t.opts.fail).always(t.opts.always),
            pC.fx.timer(pC.extend(S, {
                elem: C,
                anim: t,
                queue: t.opts.queue
            })),
            t
        }
        function CC(C) {
            var I = C.match(jC) || [];
            return I.join(" ")
        }
        function IC(C) {
            return C.getAttribute && C.getAttribute("class") || ""
        }
        function TC(C) {
            return Array.isArray(C) ? C : "string" == typeof C ? C.match(jC) || [] : []
        }
        function EC(C, I, T, E) {
            var D;
            if (Array.isArray(I))
                pC.each(I, function(I, D) {
                    T || kI.test(C) ? E(C, D) : EC(C + "[" + ("object" == typeof D && null != D ? I : "") + "]", D, T, E)
                });
            else if (T || "object" !== e(I))
                E(C, I);
            else
                for (D in I)
                    EC(C + "[" + D + "]", I[D], T, E)
        }
        function DC(C) {
            return function(I, T) {
                "string" != typeof I && (T = I,
                I = "*");
                var E, D = 0, _ = I.toLowerCase().match(jC) || [];
                if (uC(T))
                    for (; E = _[D++]; )
                        "+" === E[0] ? (E = E.slice(1) || "*",
                        (C[E] = C[E] || []).unshift(T)) : (C[E] = C[E] || []).push(T)
            }
        }
        function _C(C, I, T, E) {
            function D(e) {
                var S;
                return _[e] = !0,
                pC.each(C[e] || [], function(C, e) {
                    var t = e(I, T, E);
                    return "string" != typeof t || O || _[t] ? O ? !(S = t) : void 0 : (I.dataTypes.unshift(t),
                    D(t),
                    !1)
                }),
                S
            }
            var _ = {}
              , O = C === GI;
            return D(I.dataTypes[0]) || !_["*"] && D("*")
        }
        function OC(C, I) {
            var T, E, D = pC.ajaxSettings.flatOptions || {};
            for (T in I)
                void 0 !== I[T] && ((D[T] ? C : E || (E = {}))[T] = I[T]);
            return E && pC.extend(!0, C, E),
            C
        }
        function eC(C, I, T) {
            for (var E, D, _, O, e = C.contents, S = C.dataTypes; "*" === S[0]; )
                S.shift(),
                void 0 === E && (E = C.mimeType || I.getResponseHeader("Content-Type"));
            if (E)
                for (D in e)
                    if (e[D] && e[D].test(E)) {
                        S.unshift(D);
                        break
                    }
            if (S[0]in T)
                _ = S[0];
            else {
                for (D in T) {
                    if (!S[0] || C.converters[D + " " + S[0]]) {
                        _ = D;
                        break
                    }
                    O || (O = D)
                }
                _ = _ || O
            }
            if (_)
                return _ !== S[0] && S.unshift(_),
                T[_]
        }
        function SC(C, I, T, E) {
            var D, _, O, e, S, t = {}, R = C.dataTypes.slice();
            if (R[1])
                for (O in C.converters)
                    t[O.toLowerCase()] = C.converters[O];
            for (_ = R.shift(); _; )
                if (C.responseFields[_] && (T[C.responseFields[_]] = I),
                !S && E && C.dataFilter && (I = C.dataFilter(I, C.dataType)),
                S = _,
                _ = R.shift())
                    if ("*" === _)
                        _ = S;
                    else if ("*" !== S && S !== _) {
                        if (O = t[S + " " + _] || t["* " + _],
                        !O)
                            for (D in t)
                                if (e = D.split(" "),
                                e[1] === _ && (O = t[S + " " + e[0]] || t["* " + e[0]])) {
                                    O === !0 ? O = t[D] : t[D] !== !0 && (_ = e[0],
                                    R.unshift(e[1]));
                                    break
                                }
                        if (O !== !0)
                            if (O && C.throws)
                                I = O(I);
                            else
                                try {
                                    I = O(I)
                                } catch (C) {
                                    return {
                                        state: "parsererror",
                                        error: O ? C : "No conversion from " + S + " to " + _
                                    }
                                }
                    }
            return {
                state: "success",
                data: I
            }
        }
        var tC = []
          , RC = T.document
          , nC = Object.getPrototypeOf
          , YC = tC.slice
          , NC = tC.concat
          , rC = tC.push
          , oC = tC.indexOf
          , iC = {}
          , AC = iC.toString
          , MC = iC.hasOwnProperty
          , aC = MC.toString
          , cC = aC.call(Object)
          , sC = {}
          , uC = function(C) {
            return "function" == typeof C && "number" != typeof C.nodeType
        }
          , lC = function(C) {
            return null != C && C === C.window
        }
          , fC = {
            type: !0,
            src: !0,
            noModule: !0
        }
          , dC = "3.3.1"
          , pC = function(C, I) {
            return new pC.fn.init(C,I)
        }
          , hC = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        pC.fn = pC.prototype = {
            jquery: dC,
            constructor: pC,
            length: 0,
            toArray: function() {
                return YC.call(this)
            },
            get: function(C) {
                return null == C ? YC.call(this) : C < 0 ? this[C + this.length] : this[C]
            },
            pushStack: function(C) {
                var I = pC.merge(this.constructor(), C);
                return I.prevObject = this,
                I
            },
            each: function(C) {
                return pC.each(this, C)
            },
            map: function(C) {
                return this.pushStack(pC.map(this, function(I, T) {
                    return C.call(I, T, I)
                }))
            },
            slice: function() {
                return this.pushStack(YC.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(C) {
                var I = this.length
                  , T = +C + (C < 0 ? I : 0);
                return this.pushStack(T >= 0 && T < I ? [this[T]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: rC,
            sort: tC.sort,
            splice: tC.splice
        },
        pC.extend = pC.fn.extend = function() {
            var C, I, T, E, D, _, O = arguments[0] || {}, e = 1, S = arguments.length, t = !1;
            for ("boolean" == typeof O && (t = O,
            O = arguments[e] || {},
            e++),
            "object" == typeof O || uC(O) || (O = {}),
            e === S && (O = this,
            e--); e < S; e++)
                if (null != (C = arguments[e]))
                    for (I in C)
                        T = O[I],
                        E = C[I],
                        O !== E && (t && E && (pC.isPlainObject(E) || (D = Array.isArray(E))) ? (D ? (D = !1,
                        _ = T && Array.isArray(T) ? T : []) : _ = T && pC.isPlainObject(T) ? T : {},
                        O[I] = pC.extend(t, _, E)) : void 0 !== E && (O[I] = E));
            return O
        }
        ,
        pC.extend({
            expando: "jQuery" + (dC + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(C) {
                throw new Error(C)
            },
            noop: function() {},
            isPlainObject: function(C) {
                var I, T;
                return !(!C || "[object Object]" !== AC.call(C)) && (!(I = nC(C)) || (T = MC.call(I, "constructor") && I.constructor,
                "function" == typeof T && aC.call(T) === cC))
            },
            isEmptyObject: function(C) {
                var I;
                for (I in C)
                    return !1;
                return !0
            },
            globalEval: function(C) {
                O(C)
            },
            each: function(C, I) {
                var T, E = 0;
                if (S(C))
                    for (T = C.length; E < T && I.call(C[E], E, C[E]) !== !1; E++)
                        ;
                else
                    for (E in C)
                        if (I.call(C[E], E, C[E]) === !1)
                            break;
                return C
            },
            trim: function(C) {
                return null == C ? "" : (C + "").replace(hC, "")
            },
            makeArray: function(C, I) {
                var T = I || [];
                return null != C && (S(Object(C)) ? pC.merge(T, "string" == typeof C ? [C] : C) : rC.call(T, C)),
                T
            },
            inArray: function(C, I, T) {
                return null == I ? -1 : oC.call(I, C, T)
            },
            merge: function(C, I) {
                for (var T = +I.length, E = 0, D = C.length; E < T; E++)
                    C[D++] = I[E];
                return C.length = D,
                C
            },
            grep: function(C, I, T) {
                for (var E, D = [], _ = 0, O = C.length, e = !T; _ < O; _++)
                    E = !I(C[_], _),
                    E !== e && D.push(C[_]);
                return D
            },
            map: function(C, I, T) {
                var E, D, _ = 0, O = [];
                if (S(C))
                    for (E = C.length; _ < E; _++)
                        D = I(C[_], _, T),
                        null != D && O.push(D);
                else
                    for (_ in C)
                        D = I(C[_], _, T),
                        null != D && O.push(D);
                return NC.apply([], O)
            },
            guid: 1,
            support: sC
        }),
        "function" == typeof Symbol && (pC.fn[Symbol.iterator] = tC[Symbol.iterator]),
        pC.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(C, I) {
            iC["[object " + I + "]"] = I.toLowerCase()
        });
        var PC = /*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
        function(C) {
            function I(C, I, T, E) {
                var D, _, O, e, S, t, R, Y = I && I.ownerDocument, r = I ? I.nodeType : 9;
                if (T = T || [],
                "string" != typeof C || !C || 1 !== r && 9 !== r && 11 !== r)
                    return T;
                if (!E && ((I ? I.ownerDocument || I : H) !== y && V(I),
                I = I || y,
                x)) {
                    if (11 !== r && (S = AC.exec(C)))
                        if (D = S[1]) {
                            if (9 === r) {
                                if (!(O = I.getElementById(D)))
                                    return T;
                                if (O.id === D)
                                    return T.push(O),
                                    T
                            } else if (Y && (O = Y.getElementById(D)) && L(I, O) && O.id === D)
                                return T.push(O),
                                T
                        } else {
                            if (S[2])
                                return Z.apply(T, I.getElementsByTagName(C)),
                                T;
                            if ((D = S[3]) && u.getElementsByClassName && I.getElementsByClassName)
                                return Z.apply(T, I.getElementsByClassName(D)),
                                T
                        }
                    if (u.qsa && !$[C + " "] && (!w || !w.test(C))) {
                        if (1 !== r)
                            Y = I,
                            R = C;
                        else if ("object" !== I.nodeName.toLowerCase()) {
                            for ((e = I.getAttribute("id")) ? e = e.replace(sC, uC) : I.setAttribute("id", e = q),
                            t = p(C),
                            _ = t.length; _--; )
                                t[_] = "#" + e + " " + N(t[_]);
                            R = t.join(","),
                            Y = MC.test(C) && n(I.parentNode) || I
                        }
                        if (R)
                            try {
                                return Z.apply(T, Y.querySelectorAll(R)),
                                T
                            } catch (C) {} finally {
                                e === q && I.removeAttribute("id")
                            }
                    }
                }
                return P(C.replace(eC, "$1"), I, T, E)
            }
            function T() {
                function C(T, E) {
                    return I.push(T + " ") > l.cacheLength && delete C[I.shift()],
                    C[T + " "] = E
                }
                var I = [];
                return C
            }
            function E(C) {
                return C[q] = !0,
                C
            }
            function D(C) {
                var I = y.createElement("fieldset");
                try {
                    return !!C(I)
                } catch (C) {
                    return !1
                } finally {
                    I.parentNode && I.parentNode.removeChild(I),
                    I = null
                }
            }
            function _(C, I) {
                for (var T = C.split("|"), E = T.length; E--; )
                    l.attrHandle[T[E]] = I
            }
            function O(C, I) {
                var T = I && C
                  , E = T && 1 === C.nodeType && 1 === I.nodeType && C.sourceIndex - I.sourceIndex;
                if (E)
                    return E;
                if (T)
                    for (; T = T.nextSibling; )
                        if (T === I)
                            return -1;
                return C ? 1 : -1
            }
            function e(C) {
                return function(I) {
                    var T = I.nodeName.toLowerCase();
                    return "input" === T && I.type === C
                }
            }
            function S(C) {
                return function(I) {
                    var T = I.nodeName.toLowerCase();
                    return ("input" === T || "button" === T) && I.type === C
                }
            }
            function t(C) {
                return function(I) {
                    return "form"in I ? I.parentNode && I.disabled === !1 ? "label"in I ? "label"in I.parentNode ? I.parentNode.disabled === C : I.disabled === C : I.isDisabled === C || I.isDisabled !== !C && fC(I) === C : I.disabled === C : "label"in I && I.disabled === C
                }
            }
            function R(C) {
                return E(function(I) {
                    return I = +I,
                    E(function(T, E) {
                        for (var D, _ = C([], T.length, I), O = _.length; O--; )
                            T[D = _[O]] && (T[D] = !(E[D] = T[D]))
                    })
                })
            }
            function n(C) {
                return C && "undefined" != typeof C.getElementsByTagName && C
            }
            function Y() {}
            function N(C) {
                for (var I = 0, T = C.length, E = ""; I < T; I++)
                    E += C[I].value;
                return E
            }
            function r(C, I, T) {
                var E = I.dir
                  , D = I.next
                  , _ = D || E
                  , O = T && "parentNode" === _
                  , e = F++;
                return I.first ? function(I, T, D) {
                    for (; I = I[E]; )
                        if (1 === I.nodeType || O)
                            return C(I, T, D);
                    return !1
                }
                : function(I, T, S) {
                    var t, R, n, Y = [B, e];
                    if (S) {
                        for (; I = I[E]; )
                            if ((1 === I.nodeType || O) && C(I, T, S))
                                return !0
                    } else
                        for (; I = I[E]; )
                            if (1 === I.nodeType || O)
                                if (n = I[q] || (I[q] = {}),
                                R = n[I.uniqueID] || (n[I.uniqueID] = {}),
                                D && D === I.nodeName.toLowerCase())
                                    I = I[E] || I;
                                else {
                                    if ((t = R[_]) && t[0] === B && t[1] === e)
                                        return Y[2] = t[2];
                                    if (R[_] = Y,
                                    Y[2] = C(I, T, S))
                                        return !0
                                }
                    return !1
                }
            }
            function o(C) {
                return C.length > 1 ? function(I, T, E) {
                    for (var D = C.length; D--; )
                        if (!C[D](I, T, E))
                            return !1;
                    return !0
                }
                : C[0]
            }
            function i(C, T, E) {
                for (var D = 0, _ = T.length; D < _; D++)
                    I(C, T[D], E);
                return E
            }
            function A(C, I, T, E, D) {
                for (var _, O = [], e = 0, S = C.length, t = null != I; e < S; e++)
                    (_ = C[e]) && (T && !T(_, E, D) || (O.push(_),
                    t && I.push(e)));
                return O
            }
            function M(C, I, T, D, _, O) {
                return D && !D[q] && (D = M(D)),
                _ && !_[q] && (_ = M(_, O)),
                E(function(E, O, e, S) {
                    var t, R, n, Y = [], N = [], r = O.length, o = E || i(I || "*", e.nodeType ? [e] : e, []), M = !C || !E && I ? o : A(o, Y, C, e, S), a = T ? _ || (E ? C : r || D) ? [] : O : M;
                    if (T && T(M, a, e, S),
                    D)
                        for (t = A(a, N),
                        D(t, [], e, S),
                        R = t.length; R--; )
                            (n = t[R]) && (a[N[R]] = !(M[N[R]] = n));
                    if (E) {
                        if (_ || C) {
                            if (_) {
                                for (t = [],
                                R = a.length; R--; )
                                    (n = a[R]) && t.push(M[R] = n);
                                _(null, a = [], t, S)
                            }
                            for (R = a.length; R--; )
                                (n = a[R]) && (t = _ ? CC(E, n) : Y[R]) > -1 && (E[t] = !(O[t] = n))
                        }
                    } else
                        a = A(a === O ? a.splice(r, a.length) : a),
                        _ ? _(null, O, a, S) : Z.apply(O, a)
                })
            }
            function a(C) {
                for (var I, T, E, D = C.length, _ = l.relative[C[0].type], O = _ || l.relative[" "], e = _ ? 1 : 0, S = r(function(C) {
                    return C === I
                }, O, !0), t = r(function(C) {
                    return CC(I, C) > -1
                }, O, !0), R = [function(C, T, E) {
                    var D = !_ && (E || T !== m) || ((I = T).nodeType ? S(C, T, E) : t(C, T, E));
                    return I = null,
                    D
                }
                ]; e < D; e++)
                    if (T = l.relative[C[e].type])
                        R = [r(o(R), T)];
                    else {
                        if (T = l.filter[C[e].type].apply(null, C[e].matches),
                        T[q]) {
                            for (E = ++e; E < D && !l.relative[C[E].type]; E++)
                                ;
                            return M(e > 1 && o(R), e > 1 && N(C.slice(0, e - 1).concat({
                                value: " " === C[e - 2].type ? "*" : ""
                            })).replace(eC, "$1"), T, e < E && a(C.slice(e, E)), E < D && a(C = C.slice(E)), E < D && N(C))
                        }
                        R.push(T)
                    }
                return o(R)
            }
            function c(C, T) {
                var D = T.length > 0
                  , _ = C.length > 0
                  , O = function(E, O, e, S, t) {
                    var R, n, Y, N = 0, r = "0", o = E && [], i = [], M = m, a = E || _ && l.find.TAG("*", t), c = B += null == M ? 1 : Math.random() || .1, s = a.length;
                    for (t && (m = O === y || O || t); r !== s && null != (R = a[r]); r++) {
                        if (_ && R) {
                            for (n = 0,
                            O || R.ownerDocument === y || (V(R),
                            e = !x); Y = C[n++]; )
                                if (Y(R, O || y, e)) {
                                    S.push(R);
                                    break
                                }
                            t && (B = c)
                        }
                        D && ((R = !Y && R) && N--,
                        E && o.push(R))
                    }
                    if (N += r,
                    D && r !== N) {
                        for (n = 0; Y = T[n++]; )
                            Y(o, i, O, e);
                        if (E) {
                            if (N > 0)
                                for (; r--; )
                                    o[r] || i[r] || (i[r] = J.call(S));
                            i = A(i)
                        }
                        Z.apply(S, i),
                        t && !E && i.length > 0 && N + T.length > 1 && I.uniqueSort(S)
                    }
                    return t && (B = c,
                    m = M),
                    o
                };
                return D ? E(O) : O
            }
            var s, u, l, f, d, p, h, P, m, g, v, V, y, b, x, w, k, j, L, q = "sizzle" + 1 * new Date, H = C.document, B = 0, F = 0, U = T(), W = T(), $ = T(), z = function(C, I) {
                return C === I && (v = !0),
                0
            }, X = {}.hasOwnProperty, G = [], J = G.pop, Q = G.push, Z = G.push, K = G.slice, CC = function(C, I) {
                for (var T = 0, E = C.length; T < E; T++)
                    if (C[T] === I)
                        return T;
                return -1
            }, IC = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", TC = "[\\x20\\t\\r\\n\\f]", EC = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", DC = "\\[" + TC + "*(" + EC + ")(?:" + TC + "*([*^$|!~]?=)" + TC + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + EC + "))|)" + TC + "*\\]", _C = ":(" + EC + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + DC + ")*)|.*)\\)|)", OC = new RegExp(TC + "+","g"), eC = new RegExp("^" + TC + "+|((?:^|[^\\\\])(?:\\\\.)*)" + TC + "+$","g"), SC = new RegExp("^" + TC + "*," + TC + "*"), tC = new RegExp("^" + TC + "*([>+~]|" + TC + ")" + TC + "*"), RC = new RegExp("=" + TC + "*([^\\]'\"]*?)" + TC + "*\\]","g"), nC = new RegExp(_C), YC = new RegExp("^" + EC + "$"), NC = {
                ID: new RegExp("^#(" + EC + ")"),
                CLASS: new RegExp("^\\.(" + EC + ")"),
                TAG: new RegExp("^(" + EC + "|[*])"),
                ATTR: new RegExp("^" + DC),
                PSEUDO: new RegExp("^" + _C),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + TC + "*(even|odd|(([+-]|)(\\d*)n|)" + TC + "*(?:([+-]|)" + TC + "*(\\d+)|))" + TC + "*\\)|)","i"),
                bool: new RegExp("^(?:" + IC + ")$","i"),
                needsContext: new RegExp("^" + TC + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + TC + "*((?:-\\d)?\\d*)" + TC + "*\\)|)(?=[^-]|$)","i")
            }, rC = /^(?:input|select|textarea|button)$/i, oC = /^h\d$/i, iC = /^[^{]+\{\s*\[native \w/, AC = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, MC = /[+~]/, aC = new RegExp("\\\\([\\da-f]{1,6}" + TC + "?|(" + TC + ")|.)","ig"), cC = function(C, I, T) {
                var E = "0x" + I - 65536;
                return E !== E || T ? I : E < 0 ? String.fromCharCode(E + 65536) : String.fromCharCode(E >> 10 | 55296, 1023 & E | 56320)
            }, sC = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, uC = function(C, I) {
                return I ? "\0" === C ? "锟�" : C.slice(0, -1) + "\\" + C.charCodeAt(C.length - 1).toString(16) + " " : "\\" + C
            }, lC = function() {
                V()
            }, fC = r(function(C) {
                return C.disabled === !0 && ("form"in C || "label"in C)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                Z.apply(G = K.call(H.childNodes), H.childNodes),
                G[H.childNodes.length].nodeType
            } catch (C) {
                Z = {
                    apply: G.length ? function(C, I) {
                        Q.apply(C, K.call(I))
                    }
                    : function(C, I) {
                        for (var T = C.length, E = 0; C[T++] = I[E++]; )
                            ;
                        C.length = T - 1
                    }
                }
            }
            u = I.support = {},
            d = I.isXML = function(C) {
                var I = C && (C.ownerDocument || C).documentElement;
                return !!I && "HTML" !== I.nodeName
            }
            ,
            V = I.setDocument = function(C) {
                var I, T, E = C ? C.ownerDocument || C : H;
                return E !== y && 9 === E.nodeType && E.documentElement ? (y = E,
                b = y.documentElement,
                x = !d(y),
                H !== y && (T = y.defaultView) && T.top !== T && (T.addEventListener ? T.addEventListener("unload", lC, !1) : T.attachEvent && T.attachEvent("onunload", lC)),
                u.attributes = D(function(C) {
                    return C.className = "i",
                    !C.getAttribute("className")
                }),
                u.getElementsByTagName = D(function(C) {
                    return C.appendChild(y.createComment("")),
                    !C.getElementsByTagName("*").length
                }),
                u.getElementsByClassName = iC.test(y.getElementsByClassName),
                u.getById = D(function(C) {
                    return b.appendChild(C).id = q,
                    !y.getElementsByName || !y.getElementsByName(q).length
                }),
                u.getById ? (l.filter.ID = function(C) {
                    var I = C.replace(aC, cC);
                    return function(C) {
                        return C.getAttribute("id") === I
                    }
                }
                ,
                l.find.ID = function(C, I) {
                    if ("undefined" != typeof I.getElementById && x) {
                        var T = I.getElementById(C);
                        return T ? [T] : []
                    }
                }
                ) : (l.filter.ID = function(C) {
                    var I = C.replace(aC, cC);
                    return function(C) {
                        var T = "undefined" != typeof C.getAttributeNode && C.getAttributeNode("id");
                        return T && T.value === I
                    }
                }
                ,
                l.find.ID = function(C, I) {
                    if ("undefined" != typeof I.getElementById && x) {
                        var T, E, D, _ = I.getElementById(C);
                        if (_) {
                            if (T = _.getAttributeNode("id"),
                            T && T.value === C)
                                return [_];
                            for (D = I.getElementsByName(C),
                            E = 0; _ = D[E++]; )
                                if (T = _.getAttributeNode("id"),
                                T && T.value === C)
                                    return [_]
                        }
                        return []
                    }
                }
                ),
                l.find.TAG = u.getElementsByTagName ? function(C, I) {
                    return "undefined" != typeof I.getElementsByTagName ? I.getElementsByTagName(C) : u.qsa ? I.querySelectorAll(C) : void 0
                }
                : function(C, I) {
                    var T, E = [], D = 0, _ = I.getElementsByTagName(C);
                    if ("*" === C) {
                        for (; T = _[D++]; )
                            1 === T.nodeType && E.push(T);
                        return E
                    }
                    return _
                }
                ,
                l.find.CLASS = u.getElementsByClassName && function(C, I) {
                    if ("undefined" != typeof I.getElementsByClassName && x)
                        return I.getElementsByClassName(C)
                }
                ,
                k = [],
                w = [],
                (u.qsa = iC.test(y.querySelectorAll)) && (D(function(C) {
                    b.appendChild(C).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    C.querySelectorAll("[msallowcapture^='']").length && w.push("[*^$]=" + TC + "*(?:''|\"\")"),
                    C.querySelectorAll("[selected]").length || w.push("\\[" + TC + "*(?:value|" + IC + ")"),
                    C.querySelectorAll("[id~=" + q + "-]").length || w.push("~="),
                    C.querySelectorAll(":checked").length || w.push(":checked"),
                    C.querySelectorAll("a#" + q + "+*").length || w.push(".#.+[+~]")
                }),
                D(function(C) {
                    C.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var I = y.createElement("input");
                    I.setAttribute("type", "hidden"),
                    C.appendChild(I).setAttribute("name", "D"),
                    C.querySelectorAll("[name=d]").length && w.push("name" + TC + "*[*^$|!~]?="),
                    2 !== C.querySelectorAll(":enabled").length && w.push(":enabled", ":disabled"),
                    b.appendChild(C).disabled = !0,
                    2 !== C.querySelectorAll(":disabled").length && w.push(":enabled", ":disabled"),
                    C.querySelectorAll("*,:x"),
                    w.push(",.*:")
                })),
                (u.matchesSelector = iC.test(j = b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.oMatchesSelector || b.msMatchesSelector)) && D(function(C) {
                    u.disconnectedMatch = j.call(C, "*"),
                    j.call(C, "[s!='']:x"),
                    k.push("!=", _C)
                }),
                w = w.length && new RegExp(w.join("|")),
                k = k.length && new RegExp(k.join("|")),
                I = iC.test(b.compareDocumentPosition),
                L = I || iC.test(b.contains) ? function(C, I) {
                    var T = 9 === C.nodeType ? C.documentElement : C
                      , E = I && I.parentNode;
                    return C === E || !(!E || 1 !== E.nodeType || !(T.contains ? T.contains(E) : C.compareDocumentPosition && 16 & C.compareDocumentPosition(E)))
                }
                : function(C, I) {
                    if (I)
                        for (; I = I.parentNode; )
                            if (I === C)
                                return !0;
                    return !1
                }
                ,
                z = I ? function(C, I) {
                    if (C === I)
                        return v = !0,
                        0;
                    var T = !C.compareDocumentPosition - !I.compareDocumentPosition;
                    return T ? T : (T = (C.ownerDocument || C) === (I.ownerDocument || I) ? C.compareDocumentPosition(I) : 1,
                    1 & T || !u.sortDetached && I.compareDocumentPosition(C) === T ? C === y || C.ownerDocument === H && L(H, C) ? -1 : I === y || I.ownerDocument === H && L(H, I) ? 1 : g ? CC(g, C) - CC(g, I) : 0 : 4 & T ? -1 : 1)
                }
                : function(C, I) {
                    if (C === I)
                        return v = !0,
                        0;
                    var T, E = 0, D = C.parentNode, _ = I.parentNode, e = [C], S = [I];
                    if (!D || !_)
                        return C === y ? -1 : I === y ? 1 : D ? -1 : _ ? 1 : g ? CC(g, C) - CC(g, I) : 0;
                    if (D === _)
                        return O(C, I);
                    for (T = C; T = T.parentNode; )
                        e.unshift(T);
                    for (T = I; T = T.parentNode; )
                        S.unshift(T);
                    for (; e[E] === S[E]; )
                        E++;
                    return E ? O(e[E], S[E]) : e[E] === H ? -1 : S[E] === H ? 1 : 0
                }
                ,
                y) : y
            }
            ,
            I.matches = function(C, T) {
                return I(C, null, null, T)
            }
            ,
            I.matchesSelector = function(C, T) {
                if ((C.ownerDocument || C) !== y && V(C),
                T = T.replace(RC, "='$1']"),
                u.matchesSelector && x && !$[T + " "] && (!k || !k.test(T)) && (!w || !w.test(T)))
                    try {
                        var E = j.call(C, T);
                        if (E || u.disconnectedMatch || C.document && 11 !== C.document.nodeType)
                            return E
                    } catch (C) {}
                return I(T, y, null, [C]).length > 0
            }
            ,
            I.contains = function(C, I) {
                return (C.ownerDocument || C) !== y && V(C),
                L(C, I)
            }
            ,
            I.attr = function(C, I) {
                (C.ownerDocument || C) !== y && V(C);
                var T = l.attrHandle[I.toLowerCase()]
                  , E = T && X.call(l.attrHandle, I.toLowerCase()) ? T(C, I, !x) : void 0;
                return void 0 !== E ? E : u.attributes || !x ? C.getAttribute(I) : (E = C.getAttributeNode(I)) && E.specified ? E.value : null
            }
            ,
            I.escape = function(C) {
                return (C + "").replace(sC, uC)
            }
            ,
            I.error = function(C) {
                throw new Error("Syntax error, unrecognized expression: " + C)
            }
            ,
            I.uniqueSort = function(C) {
                var I, T = [], E = 0, D = 0;
                if (v = !u.detectDuplicates,
                g = !u.sortStable && C.slice(0),
                C.sort(z),
                v) {
                    for (; I = C[D++]; )
                        I === C[D] && (E = T.push(D));
                    for (; E--; )
                        C.splice(T[E], 1)
                }
                return g = null,
                C
            }
            ,
            f = I.getText = function(C) {
                var I, T = "", E = 0, D = C.nodeType;
                if (D) {
                    if (1 === D || 9 === D || 11 === D) {
                        if ("string" == typeof C.textContent)
                            return C.textContent;
                        for (C = C.firstChild; C; C = C.nextSibling)
                            T += f(C)
                    } else if (3 === D || 4 === D)
                        return C.nodeValue
                } else
                    for (; I = C[E++]; )
                        T += f(I);
                return T
            }
            ,
            l = I.selectors = {
                cacheLength: 50,
                createPseudo: E,
                match: NC,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(C) {
                        return C[1] = C[1].replace(aC, cC),
                        C[3] = (C[3] || C[4] || C[5] || "").replace(aC, cC),
                        "~=" === C[2] && (C[3] = " " + C[3] + " "),
                        C.slice(0, 4)
                    },
                    CHILD: function(C) {
                        return C[1] = C[1].toLowerCase(),
                        "nth" === C[1].slice(0, 3) ? (C[3] || I.error(C[0]),
                        C[4] = +(C[4] ? C[5] + (C[6] || 1) : 2 * ("even" === C[3] || "odd" === C[3])),
                        C[5] = +(C[7] + C[8] || "odd" === C[3])) : C[3] && I.error(C[0]),
                        C
                    },
                    PSEUDO: function(C) {
                        var I, T = !C[6] && C[2];
                        return NC.CHILD.test(C[0]) ? null : (C[3] ? C[2] = C[4] || C[5] || "" : T && nC.test(T) && (I = p(T, !0)) && (I = T.indexOf(")", T.length - I) - T.length) && (C[0] = C[0].slice(0, I),
                        C[2] = T.slice(0, I)),
                        C.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(C) {
                        var I = C.replace(aC, cC).toLowerCase();
                        return "*" === C ? function() {
                            return !0
                        }
                        : function(C) {
                            return C.nodeName && C.nodeName.toLowerCase() === I
                        }
                    },
                    CLASS: function(C) {
                        var I = U[C + " "];
                        return I || (I = new RegExp("(^|" + TC + ")" + C + "(" + TC + "|$)")) && U(C, function(C) {
                            return I.test("string" == typeof C.className && C.className || "undefined" != typeof C.getAttribute && C.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(C, T, E) {
                        return function(D) {
                            var _ = I.attr(D, C);
                            return null == _ ? "!=" === T : !T || (_ += "",
                            "=" === T ? _ === E : "!=" === T ? _ !== E : "^=" === T ? E && 0 === _.indexOf(E) : "*=" === T ? E && _.indexOf(E) > -1 : "$=" === T ? E && _.slice(-E.length) === E : "~=" === T ? (" " + _.replace(OC, " ") + " ").indexOf(E) > -1 : "|=" === T && (_ === E || _.slice(0, E.length + 1) === E + "-"))
                        }
                    },
                    CHILD: function(C, I, T, E, D) {
                        var _ = "nth" !== C.slice(0, 3)
                          , O = "last" !== C.slice(-4)
                          , e = "of-type" === I;
                        return 1 === E && 0 === D ? function(C) {
                            return !!C.parentNode
                        }
                        : function(I, T, S) {
                            var t, R, n, Y, N, r, o = _ !== O ? "nextSibling" : "previousSibling", i = I.parentNode, A = e && I.nodeName.toLowerCase(), M = !S && !e, a = !1;
                            if (i) {
                                if (_) {
                                    for (; o; ) {
                                        for (Y = I; Y = Y[o]; )
                                            if (e ? Y.nodeName.toLowerCase() === A : 1 === Y.nodeType)
                                                return !1;
                                        r = o = "only" === C && !r && "nextSibling"
                                    }
                                    return !0
                                }
                                if (r = [O ? i.firstChild : i.lastChild],
                                O && M) {
                                    for (Y = i,
                                    n = Y[q] || (Y[q] = {}),
                                    R = n[Y.uniqueID] || (n[Y.uniqueID] = {}),
                                    t = R[C] || [],
                                    N = t[0] === B && t[1],
                                    a = N && t[2],
                                    Y = N && i.childNodes[N]; Y = ++N && Y && Y[o] || (a = N = 0) || r.pop(); )
                                        if (1 === Y.nodeType && ++a && Y === I) {
                                            R[C] = [B, N, a];
                                            break
                                        }
                                } else if (M && (Y = I,
                                n = Y[q] || (Y[q] = {}),
                                R = n[Y.uniqueID] || (n[Y.uniqueID] = {}),
                                t = R[C] || [],
                                N = t[0] === B && t[1],
                                a = N),
                                a === !1)
                                    for (; (Y = ++N && Y && Y[o] || (a = N = 0) || r.pop()) && ((e ? Y.nodeName.toLowerCase() !== A : 1 !== Y.nodeType) || !++a || (M && (n = Y[q] || (Y[q] = {}),
                                    R = n[Y.uniqueID] || (n[Y.uniqueID] = {}),
                                    R[C] = [B, a]),
                                    Y !== I)); )
                                        ;
                                return a -= D,
                                a === E || a % E === 0 && a / E >= 0
                            }
                        }
                    },
                    PSEUDO: function(C, T) {
                        var D, _ = l.pseudos[C] || l.setFilters[C.toLowerCase()] || I.error("unsupported pseudo: " + C);
                        return _[q] ? _(T) : _.length > 1 ? (D = [C, C, "", T],
                        l.setFilters.hasOwnProperty(C.toLowerCase()) ? E(function(C, I) {
                            for (var E, D = _(C, T), O = D.length; O--; )
                                E = CC(C, D[O]),
                                C[E] = !(I[E] = D[O])
                        }) : function(C) {
                            return _(C, 0, D)
                        }
                        ) : _
                    }
                },
                pseudos: {
                    not: E(function(C) {
                        var I = []
                          , T = []
                          , D = h(C.replace(eC, "$1"));
                        return D[q] ? E(function(C, I, T, E) {
                            for (var _, O = D(C, null, E, []), e = C.length; e--; )
                                (_ = O[e]) && (C[e] = !(I[e] = _))
                        }) : function(C, E, _) {
                            return I[0] = C,
                            D(I, null, _, T),
                            I[0] = null,
                            !T.pop()
                        }
                    }),
                    has: E(function(C) {
                        return function(T) {
                            return I(C, T).length > 0
                        }
                    }),
                    contains: E(function(C) {
                        return C = C.replace(aC, cC),
                        function(I) {
                            return (I.textContent || I.innerText || f(I)).indexOf(C) > -1
                        }
                    }),
                    lang: E(function(C) {
                        return YC.test(C || "") || I.error("unsupported lang: " + C),
                        C = C.replace(aC, cC).toLowerCase(),
                        function(I) {
                            var T;
                            do
                                if (T = x ? I.lang : I.getAttribute("xml:lang") || I.getAttribute("lang"))
                                    return T = T.toLowerCase(),
                                    T === C || 0 === T.indexOf(C + "-");
                            while ((I = I.parentNode) && 1 === I.nodeType);return !1
                        }
                    }),
                    target: function(I) {
                        var T = C.location && C.location.hash;
                        return T && T.slice(1) === I.id
                    },
                    root: function(C) {
                        return C === b
                    },
                    focus: function(C) {
                        return C === y.activeElement && (!y.hasFocus || y.hasFocus()) && !!(C.type || C.href || ~C.tabIndex)
                    },
                    enabled: t(!1),
                    disabled: t(!0),
                    checked: function(C) {
                        var I = C.nodeName.toLowerCase();
                        return "input" === I && !!C.checked || "option" === I && !!C.selected
                    },
                    selected: function(C) {
                        return C.parentNode && C.parentNode.selectedIndex,
                        C.selected === !0
                    },
                    empty: function(C) {
                        for (C = C.firstChild; C; C = C.nextSibling)
                            if (C.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(C) {
                        return !l.pseudos.empty(C)
                    },
                    header: function(C) {
                        return oC.test(C.nodeName)
                    },
                    input: function(C) {
                        return rC.test(C.nodeName)
                    },
                    button: function(C) {
                        var I = C.nodeName.toLowerCase();
                        return "input" === I && "button" === C.type || "button" === I
                    },
                    text: function(C) {
                        var I;
                        return "input" === C.nodeName.toLowerCase() && "text" === C.type && (null == (I = C.getAttribute("type")) || "text" === I.toLowerCase())
                    },
                    first: R(function() {
                        return [0]
                    }),
                    last: R(function(C, I) {
                        return [I - 1]
                    }),
                    eq: R(function(C, I, T) {
                        return [T < 0 ? T + I : T]
                    }),
                    even: R(function(C, I) {
                        for (var T = 0; T < I; T += 2)
                            C.push(T);
                        return C
                    }),
                    odd: R(function(C, I) {
                        for (var T = 1; T < I; T += 2)
                            C.push(T);
                        return C
                    }),
                    lt: R(function(C, I, T) {
                        for (var E = T < 0 ? T + I : T; --E >= 0; )
                            C.push(E);
                        return C
                    }),
                    gt: R(function(C, I, T) {
                        for (var E = T < 0 ? T + I : T; ++E < I; )
                            C.push(E);
                        return C
                    })
                }
            },
            l.pseudos.nth = l.pseudos.eq;
            for (s in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                l.pseudos[s] = e(s);
            for (s in {
                submit: !0,
                reset: !0
            })
                l.pseudos[s] = S(s);
            return Y.prototype = l.filters = l.pseudos,
            l.setFilters = new Y,
            p = I.tokenize = function(C, T) {
                var E, D, _, O, e, S, t, R = W[C + " "];
                if (R)
                    return T ? 0 : R.slice(0);
                for (e = C,
                S = [],
                t = l.preFilter; e; ) {
                    E && !(D = SC.exec(e)) || (D && (e = e.slice(D[0].length) || e),
                    S.push(_ = [])),
                    E = !1,
                    (D = tC.exec(e)) && (E = D.shift(),
                    _.push({
                        value: E,
                        type: D[0].replace(eC, " ")
                    }),
                    e = e.slice(E.length));
                    for (O in l.filter)
                        !(D = NC[O].exec(e)) || t[O] && !(D = t[O](D)) || (E = D.shift(),
                        _.push({
                            value: E,
                            type: O,
                            matches: D
                        }),
                        e = e.slice(E.length));
                    if (!E)
                        break
                }
                return T ? e.length : e ? I.error(C) : W(C, S).slice(0)
            }
            ,
            h = I.compile = function(C, I) {
                var T, E = [], D = [], _ = $[C + " "];
                if (!_) {
                    for (I || (I = p(C)),
                    T = I.length; T--; )
                        _ = a(I[T]),
                        _[q] ? E.push(_) : D.push(_);
                    _ = $(C, c(D, E)),
                    _.selector = C
                }
                return _
            }
            ,
            P = I.select = function(C, I, T, E) {
                var D, _, O, e, S, t = "function" == typeof C && C, R = !E && p(C = t.selector || C);
                if (T = T || [],
                1 === R.length) {
                    if (_ = R[0] = R[0].slice(0),
                    _.length > 2 && "ID" === (O = _[0]).type && 9 === I.nodeType && x && l.relative[_[1].type]) {
                        if (I = (l.find.ID(O.matches[0].replace(aC, cC), I) || [])[0],
                        !I)
                            return T;
                        t && (I = I.parentNode),
                        C = C.slice(_.shift().value.length)
                    }
                    for (D = NC.needsContext.test(C) ? 0 : _.length; D-- && (O = _[D],
                    !l.relative[e = O.type]); )
                        if ((S = l.find[e]) && (E = S(O.matches[0].replace(aC, cC), MC.test(_[0].type) && n(I.parentNode) || I))) {
                            if (_.splice(D, 1),
                            C = E.length && N(_),
                            !C)
                                return Z.apply(T, E),
                                T;
                            break
                        }
                }
                return (t || h(C, R))(E, I, !x, T, !I || MC.test(C) && n(I.parentNode) || I),
                T
            }
            ,
            u.sortStable = q.split("").sort(z).join("") === q,
            u.detectDuplicates = !!v,
            V(),
            u.sortDetached = D(function(C) {
                return 1 & C.compareDocumentPosition(y.createElement("fieldset"))
            }),
            D(function(C) {
                return C.innerHTML = "<a href='#'></a>",
                "#" === C.firstChild.getAttribute("href")
            }) || _("type|href|height|width", function(C, I, T) {
                if (!T)
                    return C.getAttribute(I, "type" === I.toLowerCase() ? 1 : 2)
            }),
            u.attributes && D(function(C) {
                return C.innerHTML = "<input/>",
                C.firstChild.setAttribute("value", ""),
                "" === C.firstChild.getAttribute("value")
            }) || _("value", function(C, I, T) {
                if (!T && "input" === C.nodeName.toLowerCase())
                    return C.defaultValue
            }),
            D(function(C) {
                return null == C.getAttribute("disabled")
            }) || _(IC, function(C, I, T) {
                var E;
                if (!T)
                    return C[I] === !0 ? I.toLowerCase() : (E = C.getAttributeNode(I)) && E.specified ? E.value : null
            }),
            I
        }(T);
        pC.find = PC,
        pC.expr = PC.selectors,
        pC.expr[":"] = pC.expr.pseudos,
        pC.uniqueSort = pC.unique = PC.uniqueSort,
        pC.text = PC.getText,
        pC.isXMLDoc = PC.isXML,
        pC.contains = PC.contains,
        pC.escapeSelector = PC.escape;
        var mC = function(C, I, T) {
            for (var E = [], D = void 0 !== T; (C = C[I]) && 9 !== C.nodeType; )
                if (1 === C.nodeType) {
                    if (D && pC(C).is(T))
                        break;
                    E.push(C)
                }
            return E
        }
          , gC = function(C, I) {
            for (var T = []; C; C = C.nextSibling)
                1 === C.nodeType && C !== I && T.push(C);
            return T
        }
          , vC = pC.expr.match.needsContext
          , VC = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        pC.filter = function(C, I, T) {
            var E = I[0];
            return T && (C = ":not(" + C + ")"),
            1 === I.length && 1 === E.nodeType ? pC.find.matchesSelector(E, C) ? [E] : [] : pC.find.matches(C, pC.grep(I, function(C) {
                return 1 === C.nodeType
            }))
        }
        ,
        pC.fn.extend({
            find: function(C) {
                var I, T, E = this.length, D = this;
                if ("string" != typeof C)
                    return this.pushStack(pC(C).filter(function() {
                        for (I = 0; I < E; I++)
                            if (pC.contains(D[I], this))
                                return !0
                    }));
                for (T = this.pushStack([]),
                I = 0; I < E; I++)
                    pC.find(C, D[I], T);
                return E > 1 ? pC.uniqueSort(T) : T
            },
            filter: function(C) {
                return this.pushStack(R(this, C || [], !1))
            },
            not: function(C) {
                return this.pushStack(R(this, C || [], !0))
            },
            is: function(C) {
                return !!R(this, "string" == typeof C && vC.test(C) ? pC(C) : C || [], !1).length
            }
        });
        var yC, bC = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, xC = pC.fn.init = function(C, I, T) {
            var E, D;
            if (!C)
                return this;
            if (T = T || yC,
            "string" == typeof C) {
                if (E = "<" === C[0] && ">" === C[C.length - 1] && C.length >= 3 ? [null, C, null] : bC.exec(C),
                !E || !E[1] && I)
                    return !I || I.jquery ? (I || T).find(C) : this.constructor(I).find(C);
                if (E[1]) {
                    if (I = I instanceof pC ? I[0] : I,
                    pC.merge(this, pC.parseHTML(E[1], I && I.nodeType ? I.ownerDocument || I : RC, !0)),
                    VC.test(E[1]) && pC.isPlainObject(I))
                        for (E in I)
                            uC(this[E]) ? this[E](I[E]) : this.attr(E, I[E]);
                    return this
                }
                return D = RC.getElementById(E[2]),
                D && (this[0] = D,
                this.length = 1),
                this
            }
            return C.nodeType ? (this[0] = C,
            this.length = 1,
            this) : uC(C) ? void 0 !== T.ready ? T.ready(C) : C(pC) : pC.makeArray(C, this)
        }
        ;
        xC.prototype = pC.fn,
        yC = pC(RC);
        var wC = /^(?:parents|prev(?:Until|All))/
          , kC = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        pC.fn.extend({
            has: function(C) {
                var I = pC(C, this)
                  , T = I.length;
                return this.filter(function() {
                    for (var C = 0; C < T; C++)
                        if (pC.contains(this, I[C]))
                            return !0
                })
            },
            closest: function(C, I) {
                var T, E = 0, D = this.length, _ = [], O = "string" != typeof C && pC(C);
                if (!vC.test(C))
                    for (; E < D; E++)
                        for (T = this[E]; T && T !== I; T = T.parentNode)
                            if (T.nodeType < 11 && (O ? O.index(T) > -1 : 1 === T.nodeType && pC.find.matchesSelector(T, C))) {
                                _.push(T);
                                break
                            }
                return this.pushStack(_.length > 1 ? pC.uniqueSort(_) : _)
            },
            index: function(C) {
                return C ? "string" == typeof C ? oC.call(pC(C), this[0]) : oC.call(this, C.jquery ? C[0] : C) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(C, I) {
                return this.pushStack(pC.uniqueSort(pC.merge(this.get(), pC(C, I))))
            },
            addBack: function(C) {
                return this.add(null == C ? this.prevObject : this.prevObject.filter(C))
            }
        }),
        pC.each({
            parent: function(C) {
                var I = C.parentNode;
                return I && 11 !== I.nodeType ? I : null
            },
            parents: function(C) {
                return mC(C, "parentNode")
            },
            parentsUntil: function(C, I, T) {
                return mC(C, "parentNode", T)
            },
            next: function(C) {
                return n(C, "nextSibling")
            },
            prev: function(C) {
                return n(C, "previousSibling")
            },
            nextAll: function(C) {
                return mC(C, "nextSibling")
            },
            prevAll: function(C) {
                return mC(C, "previousSibling")
            },
            nextUntil: function(C, I, T) {
                return mC(C, "nextSibling", T)
            },
            prevUntil: function(C, I, T) {
                return mC(C, "previousSibling", T)
            },
            siblings: function(C) {
                return gC((C.parentNode || {}).firstChild, C)
            },
            children: function(C) {
                return gC(C.firstChild)
            },
            contents: function(C) {
                return t(C, "iframe") ? C.contentDocument : (t(C, "template") && (C = C.content || C),
                pC.merge([], C.childNodes))
            }
        }, function(C, I) {
            pC.fn[C] = function(T, E) {
                var D = pC.map(this, I, T);
                return "Until" !== C.slice(-5) && (E = T),
                E && "string" == typeof E && (D = pC.filter(E, D)),
                this.length > 1 && (kC[C] || pC.uniqueSort(D),
                wC.test(C) && D.reverse()),
                this.pushStack(D)
            }
        });
        var jC = /[^\x20\t\r\n\f]+/g;
        pC.Callbacks = function(C) {
            C = "string" == typeof C ? Y(C) : pC.extend({}, C);
            var I, T, E, D, _ = [], O = [], S = -1, t = function() {
                for (D = D || C.once,
                E = I = !0; O.length; S = -1)
                    for (T = O.shift(); ++S < _.length; )
                        _[S].apply(T[0], T[1]) === !1 && C.stopOnFalse && (S = _.length,
                        T = !1);
                C.memory || (T = !1),
                I = !1,
                D && (_ = T ? [] : "")
            }, R = {
                add: function() {
                    return _ && (T && !I && (S = _.length - 1,
                    O.push(T)),
                    function I(T) {
                        pC.each(T, function(T, E) {
                            uC(E) ? C.unique && R.has(E) || _.push(E) : E && E.length && "string" !== e(E) && I(E)
                        })
                    }(arguments),
                    T && !I && t()),
                    this
                },
                remove: function() {
                    return pC.each(arguments, function(C, I) {
                        for (var T; (T = pC.inArray(I, _, T)) > -1; )
                            _.splice(T, 1),
                            T <= S && S--
                    }),
                    this
                },
                has: function(C) {
                    return C ? pC.inArray(C, _) > -1 : _.length > 0
                },
                empty: function() {
                    return _ && (_ = []),
                    this
                },
                disable: function() {
                    return D = O = [],
                    _ = T = "",
                    this
                },
                disabled: function() {
                    return !_
                },
                lock: function() {
                    return D = O = [],
                    T || I || (_ = T = ""),
                    this
                },
                locked: function() {
                    return !!D
                },
                fireWith: function(C, T) {
                    return D || (T = T || [],
                    T = [C, T.slice ? T.slice() : T],
                    O.push(T),
                    I || t()),
                    this
                },
                fire: function() {
                    return R.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!E
                }
            };
            return R
        }
        ,
        pC.extend({
            Deferred: function(C) {
                var I = [["notify", "progress", pC.Callbacks("memory"), pC.Callbacks("memory"), 2], ["resolve", "done", pC.Callbacks("once memory"), pC.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", pC.Callbacks("once memory"), pC.Callbacks("once memory"), 1, "rejected"]]
                  , E = "pending"
                  , D = {
                    state: function() {
                        return E
                    },
                    always: function() {
                        return _.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(C) {
                        return D.then(null, C)
                    },
                    pipe: function() {
                        var C = arguments;
                        return pC.Deferred(function(T) {
                            pC.each(I, function(I, E) {
                                var D = uC(C[E[4]]) && C[E[4]];
                                _[E[1]](function() {
                                    var C = D && D.apply(this, arguments);
                                    C && uC(C.promise) ? C.promise().progress(T.notify).done(T.resolve).fail(T.reject) : T[E[0] + "With"](this, D ? [C] : arguments)
                                })
                            }),
                            C = null
                        }).promise()
                    },
                    then: function(C, E, D) {
                        function _(C, I, E, D) {
                            return function() {
                                var e = this
                                  , S = arguments
                                  , t = function() {
                                    var T, t;
                                    if (!(C < O)) {
                                        if (T = E.apply(e, S),
                                        T === I.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        t = T && ("object" == typeof T || "function" == typeof T) && T.then,
                                        uC(t) ? D ? t.call(T, _(O, I, N, D), _(O, I, r, D)) : (O++,
                                        t.call(T, _(O, I, N, D), _(O, I, r, D), _(O, I, N, I.notifyWith))) : (E !== N && (e = void 0,
                                        S = [T]),
                                        (D || I.resolveWith)(e, S))
                                    }
                                }
                                  , R = D ? t : function() {
                                    try {
                                        t()
                                    } catch (T) {
                                        pC.Deferred.exceptionHook && pC.Deferred.exceptionHook(T, R.stackTrace),
                                        C + 1 >= O && (E !== r && (e = void 0,
                                        S = [T]),
                                        I.rejectWith(e, S))
                                    }
                                }
                                ;
                                C ? R() : (pC.Deferred.getStackHook && (R.stackTrace = pC.Deferred.getStackHook()),
                                T.setTimeout(R))
                            }
                        }
                        var O = 0;
                        return pC.Deferred(function(T) {
                            I[0][3].add(_(0, T, uC(D) ? D : N, T.notifyWith)),
                            I[1][3].add(_(0, T, uC(C) ? C : N)),
                            I[2][3].add(_(0, T, uC(E) ? E : r))
                        }).promise()
                    },
                    promise: function(C) {
                        return null != C ? pC.extend(C, D) : D
                    }
                }
                  , _ = {};
                return pC.each(I, function(C, T) {
                    var O = T[2]
                      , e = T[5];
                    D[T[1]] = O.add,
                    e && O.add(function() {
                        E = e
                    }, I[3 - C][2].disable, I[3 - C][3].disable, I[0][2].lock, I[0][3].lock),
                    O.add(T[3].fire),
                    _[T[0]] = function() {
                        return _[T[0] + "With"](this === _ ? void 0 : this, arguments),
                        this
                    }
                    ,
                    _[T[0] + "With"] = O.fireWith
                }),
                D.promise(_),
                C && C.call(_, _),
                _
            },
            when: function(C) {
                var I = arguments.length
                  , T = I
                  , E = Array(T)
                  , D = YC.call(arguments)
                  , _ = pC.Deferred()
                  , O = function(C) {
                    return function(T) {
                        E[C] = this,
                        D[C] = arguments.length > 1 ? YC.call(arguments) : T,
                        --I || _.resolveWith(E, D)
                    }
                };
                if (I <= 1 && (o(C, _.done(O(T)).resolve, _.reject, !I),
                "pending" === _.state() || uC(D[T] && D[T].then)))
                    return _.then();
                for (; T--; )
                    o(D[T], O(T), _.reject);
                return _.promise()
            }
        });
        var LC = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        pC.Deferred.exceptionHook = function(C, I) {
            T.console && T.console.warn && C && LC.test(C.name) && T.console.warn("jQuery.Deferred exception: " + C.message, C.stack, I)
        }
        ,
        pC.readyException = function(C) {
            T.setTimeout(function() {
                throw C
            })
        }
        ;
        var qC = pC.Deferred();
        pC.fn.ready = function(C) {
            return qC.then(C).catch(function(C) {
                pC.readyException(C)
            }),
            this
        }
        ,
        pC.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(C) {
                (C === !0 ? --pC.readyWait : pC.isReady) || (pC.isReady = !0,
                C !== !0 && --pC.readyWait > 0 || qC.resolveWith(RC, [pC]))
            }
        }),
        pC.ready.then = qC.then,
        "complete" === RC.readyState || "loading" !== RC.readyState && !RC.documentElement.doScroll ? T.setTimeout(pC.ready) : (RC.addEventListener("DOMContentLoaded", i),
        T.addEventListener("load", i));
        var HC = function(C, I, T, E, D, _, O) {
            var S = 0
              , t = C.length
              , R = null == T;
            if ("object" === e(T)) {
                D = !0;
                for (S in T)
                    HC(C, I, S, T[S], !0, _, O)
            } else if (void 0 !== E && (D = !0,
            uC(E) || (O = !0),
            R && (O ? (I.call(C, E),
            I = null) : (R = I,
            I = function(C, I, T) {
                return R.call(pC(C), T)
            }
            )),
            I))
                for (; S < t; S++)
                    I(C[S], T, O ? E : E.call(C[S], S, I(C[S], T)));
            return D ? C : R ? I.call(C) : t ? I(C[0], T) : _
        }
          , BC = /^-ms-/
          , FC = /-([a-z])/g
          , UC = function(C) {
            return 1 === C.nodeType || 9 === C.nodeType || !+C.nodeType
        };
        a.uid = 1,
        a.prototype = {
            cache: function(C) {
                var I = C[this.expando];
                return I || (I = {},
                UC(C) && (C.nodeType ? C[this.expando] = I : Object.defineProperty(C, this.expando, {
                    value: I,
                    configurable: !0
                }))),
                I
            },
            set: function(C, I, T) {
                var E, D = this.cache(C);
                if ("string" == typeof I)
                    D[M(I)] = T;
                else
                    for (E in I)
                        D[M(E)] = I[E];
                return D
            },
            get: function(C, I) {
                return void 0 === I ? this.cache(C) : C[this.expando] && C[this.expando][M(I)]
            },
            access: function(C, I, T) {
                return void 0 === I || I && "string" == typeof I && void 0 === T ? this.get(C, I) : (this.set(C, I, T),
                void 0 !== T ? T : I)
            },
            remove: function(C, I) {
                var T, E = C[this.expando];
                if (void 0 !== E) {
                    if (void 0 !== I) {
                        Array.isArray(I) ? I = I.map(M) : (I = M(I),
                        I = I in E ? [I] : I.match(jC) || []),
                        T = I.length;
                        for (; T--; )
                            delete E[I[T]]
                    }
                    (void 0 === I || pC.isEmptyObject(E)) && (C.nodeType ? C[this.expando] = void 0 : delete C[this.expando])
                }
            },
            hasData: function(C) {
                var I = C[this.expando];
                return void 0 !== I && !pC.isEmptyObject(I)
            }
        };
        var WC = new a
          , $C = new a
          , zC = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , XC = /[A-Z]/g;
        pC.extend({
            hasData: function(C) {
                return $C.hasData(C) || WC.hasData(C)
            },
            data: function(C, I, T) {
                return $C.access(C, I, T)
            },
            removeData: function(C, I) {
                $C.remove(C, I)
            },
            _data: function(C, I, T) {
                return WC.access(C, I, T)
            },
            _removeData: function(C, I) {
                WC.remove(C, I)
            }
        }),
        pC.fn.extend({
            data: function(C, I) {
                var T, E, D, _ = this[0], O = _ && _.attributes;
                if (void 0 === C) {
                    if (this.length && (D = $C.get(_),
                    1 === _.nodeType && !WC.get(_, "hasDataAttrs"))) {
                        for (T = O.length; T--; )
                            O[T] && (E = O[T].name,
                            0 === E.indexOf("data-") && (E = M(E.slice(5)),
                            s(_, E, D[E])));
                        WC.set(_, "hasDataAttrs", !0)
                    }
                    return D
                }
                return "object" == typeof C ? this.each(function() {
                    $C.set(this, C)
                }) : HC(this, function(I) {
                    var T;
                    if (_ && void 0 === I) {
                        if (T = $C.get(_, C),
                        void 0 !== T)
                            return T;
                        if (T = s(_, C),
                        void 0 !== T)
                            return T
                    } else
                        this.each(function() {
                            $C.set(this, C, I)
                        })
                }, null, I, arguments.length > 1, null, !0)
            },
            removeData: function(C) {
                return this.each(function() {
                    $C.remove(this, C)
                })
            }
        }),
        pC.extend({
            queue: function(C, I, T) {
                var E;
                if (C)
                    return I = (I || "fx") + "queue",
                    E = WC.get(C, I),
                    T && (!E || Array.isArray(T) ? E = WC.access(C, I, pC.makeArray(T)) : E.push(T)),
                    E || []
            },
            dequeue: function(C, I) {
                I = I || "fx";
                var T = pC.queue(C, I)
                  , E = T.length
                  , D = T.shift()
                  , _ = pC._queueHooks(C, I)
                  , O = function() {
                    pC.dequeue(C, I)
                };
                "inprogress" === D && (D = T.shift(),
                E--),
                D && ("fx" === I && T.unshift("inprogress"),
                delete _.stop,
                D.call(C, O, _)),
                !E && _ && _.empty.fire()
            },
            _queueHooks: function(C, I) {
                var T = I + "queueHooks";
                return WC.get(C, T) || WC.access(C, T, {
                    empty: pC.Callbacks("once memory").add(function() {
                        WC.remove(C, [I + "queue", T])
                    })
                })
            }
        }),
        pC.fn.extend({
            queue: function(C, I) {
                var T = 2;
                return "string" != typeof C && (I = C,
                C = "fx",
                T--),
                arguments.length < T ? pC.queue(this[0], C) : void 0 === I ? this : this.each(function() {
                    var T = pC.queue(this, C, I);
                    pC._queueHooks(this, C),
                    "fx" === C && "inprogress" !== T[0] && pC.dequeue(this, C)
                })
            },
            dequeue: function(C) {
                return this.each(function() {
                    pC.dequeue(this, C)
                })
            },
            clearQueue: function(C) {
                return this.queue(C || "fx", [])
            },
            promise: function(C, I) {
                var T, E = 1, D = pC.Deferred(), _ = this, O = this.length, e = function() {
                    --E || D.resolveWith(_, [_])
                };
                for ("string" != typeof C && (I = C,
                C = void 0),
                C = C || "fx"; O--; )
                    T = WC.get(_[O], C + "queueHooks"),
                    T && T.empty && (E++,
                    T.empty.add(e));
                return e(),
                D.promise(I)
            }
        });
        var GC = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , JC = new RegExp("^(?:([+-])=|)(" + GC + ")([a-z%]*)$","i")
          , QC = ["Top", "Right", "Bottom", "Left"]
          , ZC = function(C, I) {
            return C = I || C,
            "none" === C.style.display || "" === C.style.display && pC.contains(C.ownerDocument, C) && "none" === pC.css(C, "display")
        }
          , KC = function(C, I, T, E) {
            var D, _, O = {};
            for (_ in I)
                O[_] = C.style[_],
                C.style[_] = I[_];
            D = T.apply(C, E || []);
            for (_ in I)
                C.style[_] = O[_];
            return D
        }
          , CI = {};
        pC.fn.extend({
            show: function() {
                return f(this, !0)
            },
            hide: function() {
                return f(this)
            },
            toggle: function(C) {
                return "boolean" == typeof C ? C ? this.show() : this.hide() : this.each(function() {
                    ZC(this) ? pC(this).show() : pC(this).hide()
                })
            }
        });
        var II = /^(?:checkbox|radio)$/i
          , TI = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , EI = /^$|^module$|\/(?:java|ecma)script/i
          , DI = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        DI.optgroup = DI.option,
        DI.tbody = DI.tfoot = DI.colgroup = DI.caption = DI.thead,
        DI.th = DI.td;
        var _I = /<|&#?\w+;/;
        !function() {
            var C = RC.createDocumentFragment()
              , I = C.appendChild(RC.createElement("div"))
              , T = RC.createElement("input");
            T.setAttribute("type", "radio"),
            T.setAttribute("checked", "checked"),
            T.setAttribute("name", "t"),
            I.appendChild(T),
            sC.checkClone = I.cloneNode(!0).cloneNode(!0).lastChild.checked,
            I.innerHTML = "<textarea>x</textarea>",
            sC.noCloneChecked = !!I.cloneNode(!0).lastChild.defaultValue
        }();
        var OI = RC.documentElement
          , eI = /^key/
          , SI = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , tI = /^([^.]*)(?:\.(.+)|)/;
        pC.event = {
            global: {},
            add: function(C, I, T, E, D) {
                var _, O, e, S, t, R, n, Y, N, r, o, i = WC.get(C);
                if (i)
                    for (T.handler && (_ = T,
                    T = _.handler,
                    D = _.selector),
                    D && pC.find.matchesSelector(OI, D),
                    T.guid || (T.guid = pC.guid++),
                    (S = i.events) || (S = i.events = {}),
                    (O = i.handle) || (O = i.handle = function(I) {
                        return "undefined" != typeof pC && pC.event.triggered !== I.type ? pC.event.dispatch.apply(C, arguments) : void 0
                    }
                    ),
                    I = (I || "").match(jC) || [""],
                    t = I.length; t--; )
                        e = tI.exec(I[t]) || [],
                        N = o = e[1],
                        r = (e[2] || "").split(".").sort(),
                        N && (n = pC.event.special[N] || {},
                        N = (D ? n.delegateType : n.bindType) || N,
                        n = pC.event.special[N] || {},
                        R = pC.extend({
                            type: N,
                            origType: o,
                            data: E,
                            handler: T,
                            guid: T.guid,
                            selector: D,
                            needsContext: D && pC.expr.match.needsContext.test(D),
                            namespace: r.join(".")
                        }, _),
                        (Y = S[N]) || (Y = S[N] = [],
                        Y.delegateCount = 0,
                        n.setup && n.setup.call(C, E, r, O) !== !1 || C.addEventListener && C.addEventListener(N, O)),
                        n.add && (n.add.call(C, R),
                        R.handler.guid || (R.handler.guid = T.guid)),
                        D ? Y.splice(Y.delegateCount++, 0, R) : Y.push(R),
                        pC.event.global[N] = !0)
            },
            remove: function(C, I, T, E, D) {
                var _, O, e, S, t, R, n, Y, N, r, o, i = WC.hasData(C) && WC.get(C);
                if (i && (S = i.events)) {
                    for (I = (I || "").match(jC) || [""],
                    t = I.length; t--; )
                        if (e = tI.exec(I[t]) || [],
                        N = o = e[1],
                        r = (e[2] || "").split(".").sort(),
                        N) {
                            for (n = pC.event.special[N] || {},
                            N = (E ? n.delegateType : n.bindType) || N,
                            Y = S[N] || [],
                            e = e[2] && new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            O = _ = Y.length; _--; )
                                R = Y[_],
                                !D && o !== R.origType || T && T.guid !== R.guid || e && !e.test(R.namespace) || E && E !== R.selector && ("**" !== E || !R.selector) || (Y.splice(_, 1),
                                R.selector && Y.delegateCount--,
                                n.remove && n.remove.call(C, R));
                            O && !Y.length && (n.teardown && n.teardown.call(C, r, i.handle) !== !1 || pC.removeEvent(C, N, i.handle),
                            delete S[N])
                        } else
                            for (N in S)
                                pC.event.remove(C, N + I[t], T, E, !0);
                    pC.isEmptyObject(S) && WC.remove(C, "handle events")
                }
            },
            dispatch: function(C) {
                var I, T, E, D, _, O, e = pC.event.fix(C), S = new Array(arguments.length), t = (WC.get(this, "events") || {})[e.type] || [], R = pC.event.special[e.type] || {};
                for (S[0] = e,
                I = 1; I < arguments.length; I++)
                    S[I] = arguments[I];
                if (e.delegateTarget = this,
                !R.preDispatch || R.preDispatch.call(this, e) !== !1) {
                    for (O = pC.event.handlers.call(this, e, t),
                    I = 0; (D = O[I++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = D.elem,
                        T = 0; (_ = D.handlers[T++]) && !e.isImmediatePropagationStopped(); )
                            e.rnamespace && !e.rnamespace.test(_.namespace) || (e.handleObj = _,
                            e.data = _.data,
                            E = ((pC.event.special[_.origType] || {}).handle || _.handler).apply(D.elem, S),
                            void 0 !== E && (e.result = E) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                    return R.postDispatch && R.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(C, I) {
                var T, E, D, _, O, e = [], S = I.delegateCount, t = C.target;
                if (S && t.nodeType && !("click" === C.type && C.button >= 1))
                    for (; t !== this; t = t.parentNode || this)
                        if (1 === t.nodeType && ("click" !== C.type || t.disabled !== !0)) {
                            for (_ = [],
                            O = {},
                            T = 0; T < S; T++)
                                E = I[T],
                                D = E.selector + " ",
                                void 0 === O[D] && (O[D] = E.needsContext ? pC(D, this).index(t) > -1 : pC.find(D, this, null, [t]).length),
                                O[D] && _.push(E);
                            _.length && e.push({
                                elem: t,
                                handlers: _
                            })
                        }
                return t = this,
                S < I.length && e.push({
                    elem: t,
                    handlers: I.slice(S)
                }),
                e
            },
            addProp: function(C, I) {
                Object.defineProperty(pC.Event.prototype, C, {
                    enumerable: !0,
                    configurable: !0,
                    get: uC(I) ? function() {
                        if (this.originalEvent)
                            return I(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[C]
                    }
                    ,
                    set: function(I) {
                        Object.defineProperty(this, C, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: I
                        })
                    }
                })
            },
            fix: function(C) {
                return C[pC.expando] ? C : new pC.Event(C)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== g() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === g() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && t(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(C) {
                        return t(C.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(C) {
                        void 0 !== C.result && C.originalEvent && (C.originalEvent.returnValue = C.result)
                    }
                }
            }
        },
        pC.removeEvent = function(C, I, T) {
            C.removeEventListener && C.removeEventListener(I, T)
        }
        ,
        pC.Event = function(C, I) {
            return this instanceof pC.Event ? (C && C.type ? (this.originalEvent = C,
            this.type = C.type,
            this.isDefaultPrevented = C.defaultPrevented || void 0 === C.defaultPrevented && C.returnValue === !1 ? P : m,
            this.target = C.target && 3 === C.target.nodeType ? C.target.parentNode : C.target,
            this.currentTarget = C.currentTarget,
            this.relatedTarget = C.relatedTarget) : this.type = C,
            I && pC.extend(this, I),
            this.timeStamp = C && C.timeStamp || Date.now(),
            void (this[pC.expando] = !0)) : new pC.Event(C,I)
        }
        ,
        pC.Event.prototype = {
            constructor: pC.Event,
            isDefaultPrevented: m,
            isPropagationStopped: m,
            isImmediatePropagationStopped: m,
            isSimulated: !1,
            preventDefault: function() {
                var C = this.originalEvent;
                this.isDefaultPrevented = P,
                C && !this.isSimulated && C.preventDefault()
            },
            stopPropagation: function() {
                var C = this.originalEvent;
                this.isPropagationStopped = P,
                C && !this.isSimulated && C.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var C = this.originalEvent;
                this.isImmediatePropagationStopped = P,
                C && !this.isSimulated && C.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        pC.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(C) {
                var I = C.button;
                return null == C.which && eI.test(C.type) ? null != C.charCode ? C.charCode : C.keyCode : !C.which && void 0 !== I && SI.test(C.type) ? 1 & I ? 1 : 2 & I ? 3 : 4 & I ? 2 : 0 : C.which
            }
        }, pC.event.addProp),
        pC.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(C, I) {
            pC.event.special[C] = {
                delegateType: I,
                bindType: I,
                handle: function(C) {
                    var T, E = this, D = C.relatedTarget, _ = C.handleObj;
                    return D && (D === E || pC.contains(E, D)) || (C.type = _.origType,
                    T = _.handler.apply(this, arguments),
                    C.type = I),
                    T
                }
            }
        }),
        pC.fn.extend({
            on: function(C, I, T, E) {
                return v(this, C, I, T, E)
            },
            one: function(C, I, T, E) {
                return v(this, C, I, T, E, 1)
            },
            off: function(C, I, T) {
                var E, D;
                if (C && C.preventDefault && C.handleObj)
                    return E = C.handleObj,
                    pC(C.delegateTarget).off(E.namespace ? E.origType + "." + E.namespace : E.origType, E.selector, E.handler),
                    this;
                if ("object" == typeof C) {
                    for (D in C)
                        this.off(D, I, C[D]);
                    return this
                }
                return I !== !1 && "function" != typeof I || (T = I,
                I = void 0),
                T === !1 && (T = m),
                this.each(function() {
                    pC.event.remove(this, C, T, I)
                })
            }
        });
        var RI = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , nI = /<script|<style|<link/i
          , YI = /checked\s*(?:[^=]|=\s*.checked.)/i
          , NI = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        pC.extend({
            htmlPrefilter: function(C) {
                return C.replace(RI, "<$1></$2>")
            },
            clone: function(C, I, T) {
                var E, D, _, O, e = C.cloneNode(!0), S = pC.contains(C.ownerDocument, C);
                if (!(sC.noCloneChecked || 1 !== C.nodeType && 11 !== C.nodeType || pC.isXMLDoc(C)))
                    for (O = d(e),
                    _ = d(C),
                    E = 0,
                    D = _.length; E < D; E++)
                        w(_[E], O[E]);
                if (I)
                    if (T)
                        for (_ = _ || d(C),
                        O = O || d(e),
                        E = 0,
                        D = _.length; E < D; E++)
                            x(_[E], O[E]);
                    else
                        x(C, e);
                return O = d(e, "script"),
                O.length > 0 && p(O, !S && d(C, "script")),
                e
            },
            cleanData: function(C) {
                for (var I, T, E, D = pC.event.special, _ = 0; void 0 !== (T = C[_]); _++)
                    if (UC(T)) {
                        if (I = T[WC.expando]) {
                            if (I.events)
                                for (E in I.events)
                                    D[E] ? pC.event.remove(T, E) : pC.removeEvent(T, E, I.handle);
                            T[WC.expando] = void 0
                        }
                        T[$C.expando] && (T[$C.expando] = void 0)
                    }
            }
        }),
        pC.fn.extend({
            detach: function(C) {
                return j(this, C, !0)
            },
            remove: function(C) {
                return j(this, C)
            },
            text: function(C) {
                return HC(this, function(C) {
                    return void 0 === C ? pC.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = C)
                    })
                }, null, C, arguments.length)
            },
            append: function() {
                return k(this, arguments, function(C) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var I = V(this, C);
                        I.appendChild(C)
                    }
                })
            },
            prepend: function() {
                return k(this, arguments, function(C) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var I = V(this, C);
                        I.insertBefore(C, I.firstChild)
                    }
                })
            },
            before: function() {
                return k(this, arguments, function(C) {
                    this.parentNode && this.parentNode.insertBefore(C, this)
                })
            },
            after: function() {
                return k(this, arguments, function(C) {
                    this.parentNode && this.parentNode.insertBefore(C, this.nextSibling)
                })
            },
            empty: function() {
                for (var C, I = 0; null != (C = this[I]); I++)
                    1 === C.nodeType && (pC.cleanData(d(C, !1)),
                    C.textContent = "");
                return this
            },
            clone: function(C, I) {
                return C = null != C && C,
                I = null == I ? C : I,
                this.map(function() {
                    return pC.clone(this, C, I)
                })
            },
            html: function(C) {
                return HC(this, function(C) {
                    var I = this[0] || {}
                      , T = 0
                      , E = this.length;
                    if (void 0 === C && 1 === I.nodeType)
                        return I.innerHTML;
                    if ("string" == typeof C && !nI.test(C) && !DI[(TI.exec(C) || ["", ""])[1].toLowerCase()]) {
                        C = pC.htmlPrefilter(C);
                        try {
                            for (; T < E; T++)
                                I = this[T] || {},
                                1 === I.nodeType && (pC.cleanData(d(I, !1)),
                                I.innerHTML = C);
                            I = 0
                        } catch (C) {}
                    }
                    I && this.empty().append(C)
                }, null, C, arguments.length)
            },
            replaceWith: function() {
                var C = [];
                return k(this, arguments, function(I) {
                    var T = this.parentNode;
                    pC.inArray(this, C) < 0 && (pC.cleanData(d(this)),
                    T && T.replaceChild(I, this))
                }, C)
            }
        }),
        pC.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(C, I) {
            pC.fn[C] = function(C) {
                for (var T, E = [], D = pC(C), _ = D.length - 1, O = 0; O <= _; O++)
                    T = O === _ ? this : this.clone(!0),
                    pC(D[O])[I](T),
                    rC.apply(E, T.get());
                return this.pushStack(E)
            }
        });
        var rI = new RegExp("^(" + GC + ")(?!px)[a-z%]+$","i")
          , oI = function(C) {
            var I = C.ownerDocument.defaultView;
            return I && I.opener || (I = T),
            I.getComputedStyle(C)
        }
          , iI = new RegExp(QC.join("|"),"i");
        !function() {
            function C() {
                if (t) {
                    S.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    OI.appendChild(S).appendChild(t);
                    var C = T.getComputedStyle(t);
                    E = "1%" !== C.top,
                    e = 12 === I(C.marginLeft),
                    t.style.right = "60%",
                    O = 36 === I(C.right),
                    D = 36 === I(C.width),
                    t.style.position = "absolute",
                    _ = 36 === t.offsetWidth || "absolute",
                    OI.removeChild(S),
                    t = null
                }
            }
            function I(C) {
                return Math.round(parseFloat(C))
            }
            var E, D, _, O, e, S = RC.createElement("div"), t = RC.createElement("div");
            t.style && (t.style.backgroundClip = "content-box",
            t.cloneNode(!0).style.backgroundClip = "",
            sC.clearCloneStyle = "content-box" === t.style.backgroundClip,
            pC.extend(sC, {
                boxSizingReliable: function() {
                    return C(),
                    D
                },
                pixelBoxStyles: function() {
                    return C(),
                    O
                },
                pixelPosition: function() {
                    return C(),
                    E
                },
                reliableMarginLeft: function() {
                    return C(),
                    e
                },
                scrollboxSize: function() {
                    return C(),
                    _
                }
            }))
        }();
        var AI = /^(none|table(?!-c[ea]).+)/
          , MI = /^--/
          , aI = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , cI = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , sI = ["Webkit", "Moz", "ms"]
          , uI = RC.createElement("div").style;
        pC.extend({
            cssHooks: {
                opacity: {
                    get: function(C, I) {
                        if (I) {
                            var T = L(C, "opacity");
                            return "" === T ? "1" : T
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(C, I, T, E) {
                if (C && 3 !== C.nodeType && 8 !== C.nodeType && C.style) {
                    var D, _, O, e = M(I), S = MI.test(I), t = C.style;
                    return S || (I = B(e)),
                    O = pC.cssHooks[I] || pC.cssHooks[e],
                    void 0 === T ? O && "get"in O && void 0 !== (D = O.get(C, !1, E)) ? D : t[I] : (_ = typeof T,
                    "string" === _ && (D = JC.exec(T)) && D[1] && (T = u(C, I, D),
                    _ = "number"),
                    null != T && T === T && ("number" === _ && (T += D && D[3] || (pC.cssNumber[e] ? "" : "px")),
                    sC.clearCloneStyle || "" !== T || 0 !== I.indexOf("background") || (t[I] = "inherit"),
                    O && "set"in O && void 0 === (T = O.set(C, T, E)) || (S ? t.setProperty(I, T) : t[I] = T)),
                    void 0)
                }
            },
            css: function(C, I, T, E) {
                var D, _, O, e = M(I), S = MI.test(I);
                return S || (I = B(e)),
                O = pC.cssHooks[I] || pC.cssHooks[e],
                O && "get"in O && (D = O.get(C, !0, T)),
                void 0 === D && (D = L(C, I, E)),
                "normal" === D && I in cI && (D = cI[I]),
                "" === T || T ? (_ = parseFloat(D),
                T === !0 || isFinite(_) ? _ || 0 : D) : D
            }
        }),
        pC.each(["height", "width"], function(C, I) {
            pC.cssHooks[I] = {
                get: function(C, T, E) {
                    if (T)
                        return !AI.test(pC.css(C, "display")) || C.getClientRects().length && C.getBoundingClientRect().width ? W(C, I, E) : KC(C, aI, function() {
                            return W(C, I, E)
                        })
                },
                set: function(C, T, E) {
                    var D, _ = oI(C), O = "border-box" === pC.css(C, "boxSizing", !1, _), e = E && U(C, I, E, O, _);
                    return O && sC.scrollboxSize() === _.position && (e -= Math.ceil(C["offset" + I[0].toUpperCase() + I.slice(1)] - parseFloat(_[I]) - U(C, I, "border", !1, _) - .5)),
                    e && (D = JC.exec(T)) && "px" !== (D[3] || "px") && (C.style[I] = T,
                    T = pC.css(C, I)),
                    F(C, T, e)
                }
            }
        }),
        pC.cssHooks.marginLeft = q(sC.reliableMarginLeft, function(C, I) {
            if (I)
                return (parseFloat(L(C, "marginLeft")) || C.getBoundingClientRect().left - KC(C, {
                    marginLeft: 0
                }, function() {
                    return C.getBoundingClientRect().left
                })) + "px"
        }),
        pC.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(C, I) {
            pC.cssHooks[C + I] = {
                expand: function(T) {
                    for (var E = 0, D = {}, _ = "string" == typeof T ? T.split(" ") : [T]; E < 4; E++)
                        D[C + QC[E] + I] = _[E] || _[E - 2] || _[0];
                    return D
                }
            },
            "margin" !== C && (pC.cssHooks[C + I].set = F)
        }),
        pC.fn.extend({
            css: function(C, I) {
                return HC(this, function(C, I, T) {
                    var E, D, _ = {}, O = 0;
                    if (Array.isArray(I)) {
                        for (E = oI(C),
                        D = I.length; O < D; O++)
                            _[I[O]] = pC.css(C, I[O], !1, E);
                        return _
                    }
                    return void 0 !== T ? pC.style(C, I, T) : pC.css(C, I)
                }, C, I, arguments.length > 1)
            }
        }),
        pC.Tween = $,
        $.prototype = {
            constructor: $,
            init: function(C, I, T, E, D, _) {
                this.elem = C,
                this.prop = T,
                this.easing = D || pC.easing._default,
                this.options = I,
                this.start = this.now = this.cur(),
                this.end = E,
                this.unit = _ || (pC.cssNumber[T] ? "" : "px")
            },
            cur: function() {
                var C = $.propHooks[this.prop];
                return C && C.get ? C.get(this) : $.propHooks._default.get(this)
            },
            run: function(C) {
                var I, T = $.propHooks[this.prop];
                return this.options.duration ? this.pos = I = pC.easing[this.easing](C, this.options.duration * C, 0, 1, this.options.duration) : this.pos = I = C,
                this.now = (this.end - this.start) * I + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                T && T.set ? T.set(this) : $.propHooks._default.set(this),
                this
            }
        },
        $.prototype.init.prototype = $.prototype,
        $.propHooks = {
            _default: {
                get: function(C) {
                    var I;
                    return 1 !== C.elem.nodeType || null != C.elem[C.prop] && null == C.elem.style[C.prop] ? C.elem[C.prop] : (I = pC.css(C.elem, C.prop, ""),
                    I && "auto" !== I ? I : 0)
                },
                set: function(C) {
                    pC.fx.step[C.prop] ? pC.fx.step[C.prop](C) : 1 !== C.elem.nodeType || null == C.elem.style[pC.cssProps[C.prop]] && !pC.cssHooks[C.prop] ? C.elem[C.prop] = C.now : pC.style(C.elem, C.prop, C.now + C.unit)
                }
            }
        },
        $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(C) {
                C.elem.nodeType && C.elem.parentNode && (C.elem[C.prop] = C.now)
            }
        },
        pC.easing = {
            linear: function(C) {
                return C
            },
            swing: function(C) {
                return .5 - Math.cos(C * Math.PI) / 2
            },
            _default: "swing"
        },
        pC.fx = $.prototype.init,
        pC.fx.step = {};
        var lI, fI, dI = /^(?:toggle|show|hide)$/, pI = /queueHooks$/;
        pC.Animation = pC.extend(K, {
            tweeners: {
                "*": [function(C, I) {
                    var T = this.createTween(C, I);
                    return u(T.elem, C, JC.exec(I), T),
                    T
                }
                ]
            },
            tweener: function(C, I) {
                uC(C) ? (I = C,
                C = ["*"]) : C = C.match(jC);
                for (var T, E = 0, D = C.length; E < D; E++)
                    T = C[E],
                    K.tweeners[T] = K.tweeners[T] || [],
                    K.tweeners[T].unshift(I)
            },
            prefilters: [Q],
            prefilter: function(C, I) {
                I ? K.prefilters.unshift(C) : K.prefilters.push(C)
            }
        }),
        pC.speed = function(C, I, T) {
            var E = C && "object" == typeof C ? pC.extend({}, C) : {
                complete: T || !T && I || uC(C) && C,
                duration: C,
                easing: T && I || I && !uC(I) && I
            };
            return pC.fx.off ? E.duration = 0 : "number" != typeof E.duration && (E.duration in pC.fx.speeds ? E.duration = pC.fx.speeds[E.duration] : E.duration = pC.fx.speeds._default),
            null != E.queue && E.queue !== !0 || (E.queue = "fx"),
            E.old = E.complete,
            E.complete = function() {
                uC(E.old) && E.old.call(this),
                E.queue && pC.dequeue(this, E.queue)
            }
            ,
            E
        }
        ,
        pC.fn.extend({
            fadeTo: function(C, I, T, E) {
                return this.filter(ZC).css("opacity", 0).show().end().animate({
                    opacity: I
                }, C, T, E)
            },
            animate: function(C, I, T, E) {
                var D = pC.isEmptyObject(C)
                  , _ = pC.speed(I, T, E)
                  , O = function() {
                    var I = K(this, pC.extend({}, C), _);
                    (D || WC.get(this, "finish")) && I.stop(!0)
                };
                return O.finish = O,
                D || _.queue === !1 ? this.each(O) : this.queue(_.queue, O)
            },
            stop: function(C, I, T) {
                var E = function(C) {
                    var I = C.stop;
                    delete C.stop,
                    I(T)
                };
                return "string" != typeof C && (T = I,
                I = C,
                C = void 0),
                I && C !== !1 && this.queue(C || "fx", []),
                this.each(function() {
                    var I = !0
                      , D = null != C && C + "queueHooks"
                      , _ = pC.timers
                      , O = WC.get(this);
                    if (D)
                        O[D] && O[D].stop && E(O[D]);
                    else
                        for (D in O)
                            O[D] && O[D].stop && pI.test(D) && E(O[D]);
                    for (D = _.length; D--; )
                        _[D].elem !== this || null != C && _[D].queue !== C || (_[D].anim.stop(T),
                        I = !1,
                        _.splice(D, 1));
                    !I && T || pC.dequeue(this, C)
                })
            },
            finish: function(C) {
                return C !== !1 && (C = C || "fx"),
                this.each(function() {
                    var I, T = WC.get(this), E = T[C + "queue"], D = T[C + "queueHooks"], _ = pC.timers, O = E ? E.length : 0;
                    for (T.finish = !0,
                    pC.queue(this, C, []),
                    D && D.stop && D.stop.call(this, !0),
                    I = _.length; I--; )
                        _[I].elem === this && _[I].queue === C && (_[I].anim.stop(!0),
                        _.splice(I, 1));
                    for (I = 0; I < O; I++)
                        E[I] && E[I].finish && E[I].finish.call(this);
                    delete T.finish
                })
            }
        }),
        pC.each(["toggle", "show", "hide"], function(C, I) {
            var T = pC.fn[I];
            pC.fn[I] = function(C, E, D) {
                return null == C || "boolean" == typeof C ? T.apply(this, arguments) : this.animate(G(I, !0), C, E, D)
            }
        }),
        pC.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(C, I) {
            pC.fn[C] = function(C, T, E) {
                return this.animate(I, C, T, E)
            }
        }),
        pC.timers = [],
        pC.fx.tick = function() {
            var C, I = 0, T = pC.timers;
            for (lI = Date.now(); I < T.length; I++)
                C = T[I],
                C() || T[I] !== C || T.splice(I--, 1);
            T.length || pC.fx.stop(),
            lI = void 0
        }
        ,
        pC.fx.timer = function(C) {
            pC.timers.push(C),
            pC.fx.start()
        }
        ,
        pC.fx.interval = 13,
        pC.fx.start = function() {
            fI || (fI = !0,
            z())
        }
        ,
        pC.fx.stop = function() {
            fI = null
        }
        ,
        pC.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        pC.fn.delay = function(C, I) {
            return C = pC.fx ? pC.fx.speeds[C] || C : C,
            I = I || "fx",
            this.queue(I, function(I, E) {
                var D = T.setTimeout(I, C);
                E.stop = function() {
                    T.clearTimeout(D)
                }
            })
        }
        ,
        function() {
            var C = RC.createElement("input")
              , I = RC.createElement("select")
              , T = I.appendChild(RC.createElement("option"));
            C.type = "checkbox",
            sC.checkOn = "" !== C.value,
            sC.optSelected = T.selected,
            C = RC.createElement("input"),
            C.value = "t",
            C.type = "radio",
            sC.radioValue = "t" === C.value
        }();
        var hI, PI = pC.expr.attrHandle;
        pC.fn.extend({
            attr: function(C, I) {
                return HC(this, pC.attr, C, I, arguments.length > 1)
            },
            removeAttr: function(C) {
                return this.each(function() {
                    pC.removeAttr(this, C)
                })
            }
        }),
        pC.extend({
            attr: function(C, I, T) {
                var E, D, _ = C.nodeType;
                if (3 !== _ && 8 !== _ && 2 !== _)
                    return "undefined" == typeof C.getAttribute ? pC.prop(C, I, T) : (1 === _ && pC.isXMLDoc(C) || (D = pC.attrHooks[I.toLowerCase()] || (pC.expr.match.bool.test(I) ? hI : void 0)),
                    void 0 !== T ? null === T ? void pC.removeAttr(C, I) : D && "set"in D && void 0 !== (E = D.set(C, T, I)) ? E : (C.setAttribute(I, T + ""),
                    T) : D && "get"in D && null !== (E = D.get(C, I)) ? E : (E = pC.find.attr(C, I),
                    null == E ? void 0 : E))
            },
            attrHooks: {
                type: {
                    set: function(C, I) {
                        if (!sC.radioValue && "radio" === I && t(C, "input")) {
                            var T = C.value;
                            return C.setAttribute("type", I),
                            T && (C.value = T),
                            I
                        }
                    }
                }
            },
            removeAttr: function(C, I) {
                var T, E = 0, D = I && I.match(jC);
                if (D && 1 === C.nodeType)
                    for (; T = D[E++]; )
                        C.removeAttribute(T)
            }
        }),
        hI = {
            set: function(C, I, T) {
                return I === !1 ? pC.removeAttr(C, T) : C.setAttribute(T, T),
                T
            }
        },
        pC.each(pC.expr.match.bool.source.match(/\w+/g), function(C, I) {
            var T = PI[I] || pC.find.attr;
            PI[I] = function(C, I, E) {
                var D, _, O = I.toLowerCase();
                return E || (_ = PI[O],
                PI[O] = D,
                D = null != T(C, I, E) ? O : null,
                PI[O] = _),
                D
            }
        });
        var mI = /^(?:input|select|textarea|button)$/i
          , gI = /^(?:a|area)$/i;
        pC.fn.extend({
            prop: function(C, I) {
                return HC(this, pC.prop, C, I, arguments.length > 1)
            },
            removeProp: function(C) {
                return this.each(function() {
                    delete this[pC.propFix[C] || C]
                })
            }
        }),
        pC.extend({
            prop: function(C, I, T) {
                var E, D, _ = C.nodeType;
                if (3 !== _ && 8 !== _ && 2 !== _)
                    return 1 === _ && pC.isXMLDoc(C) || (I = pC.propFix[I] || I,
                    D = pC.propHooks[I]),
                    void 0 !== T ? D && "set"in D && void 0 !== (E = D.set(C, T, I)) ? E : C[I] = T : D && "get"in D && null !== (E = D.get(C, I)) ? E : C[I]
            },
            propHooks: {
                tabIndex: {
                    get: function(C) {
                        var I = pC.find.attr(C, "tabindex");
                        return I ? parseInt(I, 10) : mI.test(C.nodeName) || gI.test(C.nodeName) && C.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        sC.optSelected || (pC.propHooks.selected = {
            get: function(C) {
                var I = C.parentNode;
                return I && I.parentNode && I.parentNode.selectedIndex,
                null
            },
            set: function(C) {
                var I = C.parentNode;
                I && (I.selectedIndex,
                I.parentNode && I.parentNode.selectedIndex)
            }
        }),
        pC.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            pC.propFix[this.toLowerCase()] = this
        }),
        pC.fn.extend({
            addClass: function(C) {
                var I, T, E, D, _, O, e, S = 0;
                if (uC(C))
                    return this.each(function(I) {
                        pC(this).addClass(C.call(this, I, IC(this)))
                    });
                if (I = TC(C),
                I.length)
                    for (; T = this[S++]; )
                        if (D = IC(T),
                        E = 1 === T.nodeType && " " + CC(D) + " ") {
                            for (O = 0; _ = I[O++]; )
                                E.indexOf(" " + _ + " ") < 0 && (E += _ + " ");
                            e = CC(E),
                            D !== e && T.setAttribute("class", e)
                        }
                return this
            },
            removeClass: function(C) {
                var I, T, E, D, _, O, e, S = 0;
                if (uC(C))
                    return this.each(function(I) {
                        pC(this).removeClass(C.call(this, I, IC(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if (I = TC(C),
                I.length)
                    for (; T = this[S++]; )
                        if (D = IC(T),
                        E = 1 === T.nodeType && " " + CC(D) + " ") {
                            for (O = 0; _ = I[O++]; )
                                for (; E.indexOf(" " + _ + " ") > -1; )
                                    E = E.replace(" " + _ + " ", " ");
                            e = CC(E),
                            D !== e && T.setAttribute("class", e)
                        }
                return this
            },
            toggleClass: function(C, I) {
                var T = typeof C
                  , E = "string" === T || Array.isArray(C);
                return "boolean" == typeof I && E ? I ? this.addClass(C) : this.removeClass(C) : uC(C) ? this.each(function(T) {
                    pC(this).toggleClass(C.call(this, T, IC(this), I), I)
                }) : this.each(function() {
                    var I, D, _, O;
                    if (E)
                        for (D = 0,
                        _ = pC(this),
                        O = TC(C); I = O[D++]; )
                            _.hasClass(I) ? _.removeClass(I) : _.addClass(I);
                    else
                        void 0 !== C && "boolean" !== T || (I = IC(this),
                        I && WC.set(this, "__className__", I),
                        this.setAttribute && this.setAttribute("class", I || C === !1 ? "" : WC.get(this, "__className__") || ""))
                })
            },
            hasClass: function(C) {
                var I, T, E = 0;
                for (I = " " + C + " "; T = this[E++]; )
                    if (1 === T.nodeType && (" " + CC(IC(T)) + " ").indexOf(I) > -1)
                        return !0;
                return !1
            }
        });
        var vI = /\r/g;
        pC.fn.extend({
            val: function(C) {
                var I, T, E, D = this[0];
                {
                    if (arguments.length)
                        return E = uC(C),
                        this.each(function(T) {
                            var D;
                            1 === this.nodeType && (D = E ? C.call(this, T, pC(this).val()) : C,
                            null == D ? D = "" : "number" == typeof D ? D += "" : Array.isArray(D) && (D = pC.map(D, function(C) {
                                return null == C ? "" : C + ""
                            })),
                            I = pC.valHooks[this.type] || pC.valHooks[this.nodeName.toLowerCase()],
                            I && "set"in I && void 0 !== I.set(this, D, "value") || (this.value = D))
                        });
                    if (D)
                        return I = pC.valHooks[D.type] || pC.valHooks[D.nodeName.toLowerCase()],
                        I && "get"in I && void 0 !== (T = I.get(D, "value")) ? T : (T = D.value,
                        "string" == typeof T ? T.replace(vI, "") : null == T ? "" : T)
                }
            }
        }),
        pC.extend({
            valHooks: {
                option: {
                    get: function(C) {
                        var I = pC.find.attr(C, "value");
                        return null != I ? I : CC(pC.text(C))
                    }
                },
                select: {
                    get: function(C) {
                        var I, T, E, D = C.options, _ = C.selectedIndex, O = "select-one" === C.type, e = O ? null : [], S = O ? _ + 1 : D.length;
                        for (E = _ < 0 ? S : O ? _ : 0; E < S; E++)
                            if (T = D[E],
                            (T.selected || E === _) && !T.disabled && (!T.parentNode.disabled || !t(T.parentNode, "optgroup"))) {
                                if (I = pC(T).val(),
                                O)
                                    return I;
                                e.push(I)
                            }
                        return e
                    },
                    set: function(C, I) {
                        for (var T, E, D = C.options, _ = pC.makeArray(I), O = D.length; O--; )
                            E = D[O],
                            (E.selected = pC.inArray(pC.valHooks.option.get(E), _) > -1) && (T = !0);
                        return T || (C.selectedIndex = -1),
                        _
                    }
                }
            }
        }),
        pC.each(["radio", "checkbox"], function() {
            pC.valHooks[this] = {
                set: function(C, I) {
                    if (Array.isArray(I))
                        return C.checked = pC.inArray(pC(C).val(), I) > -1
                }
            },
            sC.checkOn || (pC.valHooks[this].get = function(C) {
                return null === C.getAttribute("value") ? "on" : C.value
            }
            )
        }),
        sC.focusin = "onfocusin"in T;
        var VI = /^(?:focusinfocus|focusoutblur)$/
          , yI = function(C) {
            C.stopPropagation()
        };
        pC.extend(pC.event, {
            trigger: function(C, I, E, D) {
                var _, O, e, S, t, R, n, Y, N = [E || RC], r = MC.call(C, "type") ? C.type : C, o = MC.call(C, "namespace") ? C.namespace.split(".") : [];
                if (O = Y = e = E = E || RC,
                3 !== E.nodeType && 8 !== E.nodeType && !VI.test(r + pC.event.triggered) && (r.indexOf(".") > -1 && (o = r.split("."),
                r = o.shift(),
                o.sort()),
                t = r.indexOf(":") < 0 && "on" + r,
                C = C[pC.expando] ? C : new pC.Event(r,"object" == typeof C && C),
                C.isTrigger = D ? 2 : 3,
                C.namespace = o.join("."),
                C.rnamespace = C.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                C.result = void 0,
                C.target || (C.target = E),
                I = null == I ? [C] : pC.makeArray(I, [C]),
                n = pC.event.special[r] || {},
                D || !n.trigger || n.trigger.apply(E, I) !== !1)) {
                    if (!D && !n.noBubble && !lC(E)) {
                        for (S = n.delegateType || r,
                        VI.test(S + r) || (O = O.parentNode); O; O = O.parentNode)
                            N.push(O),
                            e = O;
                        e === (E.ownerDocument || RC) && N.push(e.defaultView || e.parentWindow || T)
                    }
                    for (_ = 0; (O = N[_++]) && !C.isPropagationStopped(); )
                        Y = O,
                        C.type = _ > 1 ? S : n.bindType || r,
                        R = (WC.get(O, "events") || {})[C.type] && WC.get(O, "handle"),
                        R && R.apply(O, I),
                        R = t && O[t],
                        R && R.apply && UC(O) && (C.result = R.apply(O, I),
                        C.result === !1 && C.preventDefault());
                    return C.type = r,
                    D || C.isDefaultPrevented() || n._default && n._default.apply(N.pop(), I) !== !1 || !UC(E) || t && uC(E[r]) && !lC(E) && (e = E[t],
                    e && (E[t] = null),
                    pC.event.triggered = r,
                    C.isPropagationStopped() && Y.addEventListener(r, yI),
                    E[r](),
                    C.isPropagationStopped() && Y.removeEventListener(r, yI),
                    pC.event.triggered = void 0,
                    e && (E[t] = e)),
                    C.result
                }
            },
            simulate: function(C, I, T) {
                var E = pC.extend(new pC.Event, T, {
                    type: C,
                    isSimulated: !0
                });
                pC.event.trigger(E, null, I)
            }
        }),
        pC.fn.extend({
            trigger: function(C, I) {
                return this.each(function() {
                    pC.event.trigger(C, I, this)
                })
            },
            triggerHandler: function(C, I) {
                var T = this[0];
                if (T)
                    return pC.event.trigger(C, I, T, !0)
            }
        }),
        sC.focusin || pC.each({
            focus: "focusin",
            blur: "focusout"
        }, function(C, I) {
            var T = function(C) {
                pC.event.simulate(I, C.target, pC.event.fix(C))
            };
            pC.event.special[I] = {
                setup: function() {
                    var E = this.ownerDocument || this
                      , D = WC.access(E, I);
                    D || E.addEventListener(C, T, !0),
                    WC.access(E, I, (D || 0) + 1)
                },
                teardown: function() {
                    var E = this.ownerDocument || this
                      , D = WC.access(E, I) - 1;
                    D ? WC.access(E, I, D) : (E.removeEventListener(C, T, !0),
                    WC.remove(E, I))
                }
            }
        });
        var bI = T.location
          , xI = Date.now()
          , wI = /\?/;
        pC.parseXML = function(C) {
            var I;
            if (!C || "string" != typeof C)
                return null;
            try {
                I = (new T.DOMParser).parseFromString(C, "text/xml")
            } catch (C) {
                I = void 0
            }
            return I && !I.getElementsByTagName("parsererror").length || pC.error("Invalid XML: " + C),
            I
        }
        ;
        var kI = /\[\]$/
          , jI = /\r?\n/g
          , LI = /^(?:submit|button|image|reset|file)$/i
          , qI = /^(?:input|select|textarea|keygen)/i;
        pC.param = function(C, I) {
            var T, E = [], D = function(C, I) {
                var T = uC(I) ? I() : I;
                E[E.length] = encodeURIComponent(C) + "=" + encodeURIComponent(null == T ? "" : T)
            };
            if (Array.isArray(C) || C.jquery && !pC.isPlainObject(C))
                pC.each(C, function() {
                    D(this.name, this.value)
                });
            else
                for (T in C)
                    EC(T, C[T], I, D);
            return E.join("&")
        }
        ,
        pC.fn.extend({
            serialize: function() {
                return pC.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var C = pC.prop(this, "elements");
                    return C ? pC.makeArray(C) : this
                }).filter(function() {
                    var C = this.type;
                    return this.name && !pC(this).is(":disabled") && qI.test(this.nodeName) && !LI.test(C) && (this.checked || !II.test(C))
                }).map(function(C, I) {
                    var T = pC(this).val();
                    return null == T ? null : Array.isArray(T) ? pC.map(T, function(C) {
                        return {
                            name: I.name,
                            value: C.replace(jI, "\r\n")
                        }
                    }) : {
                        name: I.name,
                        value: T.replace(jI, "\r\n")
                    }
                }).get()
            }
        });
        var HI = /%20/g
          , BI = /#.*$/
          , FI = /([?&])_=[^&]*/
          , UI = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , WI = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , $I = /^(?:GET|HEAD)$/
          , zI = /^\/\//
          , XI = {}
          , GI = {}
          , JI = "*/".concat("*")
          , QI = RC.createElement("a");
        QI.href = bI.href,
        pC.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bI.href,
                type: "GET",
                isLocal: WI.test(bI.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": JI,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": pC.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(C, I) {
                return I ? OC(OC(C, pC.ajaxSettings), I) : OC(pC.ajaxSettings, C)
            },
            ajaxPrefilter: DC(XI),
            ajaxTransport: DC(GI),
            ajax: function(C, I) {
                function E(C, I, E, e) {
                    var t, Y, N, c, s, u = I;
                    R || (R = !0,
                    S && T.clearTimeout(S),
                    D = void 0,
                    O = e || "",
                    l.readyState = C > 0 ? 4 : 0,
                    t = C >= 200 && C < 300 || 304 === C,
                    E && (c = eC(r, l, E)),
                    c = SC(r, c, l, t),
                    t ? (r.ifModified && (s = l.getResponseHeader("Last-Modified"),
                    s && (pC.lastModified[_] = s),
                    s = l.getResponseHeader("etag"),
                    s && (pC.etag[_] = s)),
                    204 === C || "HEAD" === r.type ? u = "nocontent" : 304 === C ? u = "notmodified" : (u = c.state,
                    Y = c.data,
                    N = c.error,
                    t = !N)) : (N = u,
                    !C && u || (u = "error",
                    C < 0 && (C = 0))),
                    l.status = C,
                    l.statusText = (I || u) + "",
                    t ? A.resolveWith(o, [Y, u, l]) : A.rejectWith(o, [l, u, N]),
                    l.statusCode(a),
                    a = void 0,
                    n && i.trigger(t ? "ajaxSuccess" : "ajaxError", [l, r, t ? Y : N]),
                    M.fireWith(o, [l, u]),
                    n && (i.trigger("ajaxComplete", [l, r]),
                    --pC.active || pC.event.trigger("ajaxStop")))
                }
                "object" == typeof C && (I = C,
                C = void 0),
                I = I || {};
                var D, _, O, e, S, t, R, n, Y, N, r = pC.ajaxSetup({}, I), o = r.context || r, i = r.context && (o.nodeType || o.jquery) ? pC(o) : pC.event, A = pC.Deferred(), M = pC.Callbacks("once memory"), a = r.statusCode || {}, c = {}, s = {}, u = "canceled", l = {
                    readyState: 0,
                    getResponseHeader: function(C) {
                        var I;
                        if (R) {
                            if (!e)
                                for (e = {}; I = UI.exec(O); )
                                    e[I[1].toLowerCase()] = I[2];
                            I = e[C.toLowerCase()]
                        }
                        return null == I ? null : I
                    },
                    getAllResponseHeaders: function() {
                        return R ? O : null
                    },
                    setRequestHeader: function(C, I) {
                        return null == R && (C = s[C.toLowerCase()] = s[C.toLowerCase()] || C,
                        c[C] = I),
                        this
                    },
                    overrideMimeType: function(C) {
                        return null == R && (r.mimeType = C),
                        this
                    },
                    statusCode: function(C) {
                        var I;
                        if (C)
                            if (R)
                                l.always(C[l.status]);
                            else
                                for (I in C)
                                    a[I] = [a[I], C[I]];
                        return this
                    },
                    abort: function(C) {
                        var I = C || u;
                        return D && D.abort(I),
                        E(0, I),
                        this
                    }
                };
                if (A.promise(l),
                r.url = ((C || r.url || bI.href) + "").replace(zI, bI.protocol + "//"),
                r.type = I.method || I.type || r.method || r.type,
                r.dataTypes = (r.dataType || "*").toLowerCase().match(jC) || [""],
                null == r.crossDomain) {
                    t = RC.createElement("a");
                    try {
                        t.href = r.url,
                        t.href = t.href,
                        r.crossDomain = QI.protocol + "//" + QI.host != t.protocol + "//" + t.host
                    } catch (C) {
                        r.crossDomain = !0
                    }
                }
                if (r.data && r.processData && "string" != typeof r.data && (r.data = pC.param(r.data, r.traditional)),
                _C(XI, r, I, l),
                R)
                    return l;
                n = pC.event && r.global,
                n && 0 === pC.active++ && pC.event.trigger("ajaxStart"),
                r.type = r.type.toUpperCase(),
                r.hasContent = !$I.test(r.type),
                _ = r.url.replace(BI, ""),
                r.hasContent ? r.data && r.processData && 0 === (r.contentType || "").indexOf("application/x-www-form-urlencoded") && (r.data = r.data.replace(HI, "+")) : (N = r.url.slice(_.length),
                r.data && (r.processData || "string" == typeof r.data) && (_ += (wI.test(_) ? "&" : "?") + r.data,
                delete r.data),
                r.cache === !1 && (_ = _.replace(FI, "$1"),
                N = (wI.test(_) ? "&" : "?") + "_=" + xI++ + N),
                r.url = _ + N),
                r.ifModified && (pC.lastModified[_] && l.setRequestHeader("If-Modified-Since", pC.lastModified[_]),
                pC.etag[_] && l.setRequestHeader("If-None-Match", pC.etag[_])),
                (r.data && r.hasContent && r.contentType !== !1 || I.contentType) && l.setRequestHeader("Content-Type", r.contentType),
                l.setRequestHeader("Accept", r.dataTypes[0] && r.accepts[r.dataTypes[0]] ? r.accepts[r.dataTypes[0]] + ("*" !== r.dataTypes[0] ? ", " + JI + "; q=0.01" : "") : r.accepts["*"]);
                for (Y in r.headers)
                    l.setRequestHeader(Y, r.headers[Y]);
                if (r.beforeSend && (r.beforeSend.call(o, l, r) === !1 || R))
                    return l.abort();
                if (u = "abort",
                M.add(r.complete),
                l.done(r.success),
                l.fail(r.error),
                D = _C(GI, r, I, l)) {
                    if (l.readyState = 1,
                    n && i.trigger("ajaxSend", [l, r]),
                    R)
                        return l;
                    r.async && r.timeout > 0 && (S = T.setTimeout(function() {
                        l.abort("timeout")
                    }, r.timeout));
                    try {
                        R = !1,
                        D.send(c, E)
                    } catch (C) {
                        if (R)
                            throw C;
                        E(-1, C)
                    }
                } else
                    E(-1, "No Transport");
                return l
            },
            getJSON: function(C, I, T) {
                return pC.get(C, I, T, "json")
            },
            getScript: function(C, I) {
                return pC.get(C, void 0, I, "script")
            }
        }),
        pC.each(["get", "post"], function(C, I) {
            pC[I] = function(C, T, E, D) {
                return uC(T) && (D = D || E,
                E = T,
                T = void 0),
                pC.ajax(pC.extend({
                    url: C,
                    type: I,
                    dataType: D,
                    data: T,
                    success: E
                }, pC.isPlainObject(C) && C))
            }
        }),
        pC._evalUrl = function(C) {
            return pC.ajax({
                url: C,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        pC.fn.extend({
            wrapAll: function(C) {
                var I;
                return this[0] && (uC(C) && (C = C.call(this[0])),
                I = pC(C, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && I.insertBefore(this[0]),
                I.map(function() {
                    for (var C = this; C.firstElementChild; )
                        C = C.firstElementChild;
                    return C
                }).append(this)),
                this
            },
            wrapInner: function(C) {
                return uC(C) ? this.each(function(I) {
                    pC(this).wrapInner(C.call(this, I))
                }) : this.each(function() {
                    var I = pC(this)
                      , T = I.contents();
                    T.length ? T.wrapAll(C) : I.append(C)
                })
            },
            wrap: function(C) {
                var I = uC(C);
                return this.each(function(T) {
                    pC(this).wrapAll(I ? C.call(this, T) : C)
                })
            },
            unwrap: function(C) {
                return this.parent(C).not("body").each(function() {
                    pC(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        pC.expr.pseudos.hidden = function(C) {
            return !pC.expr.pseudos.visible(C)
        }
        ,
        pC.expr.pseudos.visible = function(C) {
            return !!(C.offsetWidth || C.offsetHeight || C.getClientRects().length)
        }
        ,
        pC.ajaxSettings.xhr = function() {
            try {
                return new T.XMLHttpRequest
            } catch (C) {}
        }
        ;
        var ZI = {
            0: 200,
            1223: 204
        }
          , KI = pC.ajaxSettings.xhr();
        sC.cors = !!KI && "withCredentials"in KI,
        sC.ajax = KI = !!KI,
        pC.ajaxTransport(function(C) {
            var I, E;
            if (sC.cors || KI && !C.crossDomain)
                return {
                    send: function(D, _) {
                        var O, e = C.xhr();
                        if (e.open(C.type, C.url, C.async, C.username, C.password),
                        C.xhrFields)
                            for (O in C.xhrFields)
                                e[O] = C.xhrFields[O];
                        C.mimeType && e.overrideMimeType && e.overrideMimeType(C.mimeType),
                        C.crossDomain || D["X-Requested-With"] || (D["X-Requested-With"] = "XMLHttpRequest");
                        for (O in D)
                            e.setRequestHeader(O, D[O]);
                        I = function(C) {
                            return function() {
                                I && (I = E = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null,
                                "abort" === C ? e.abort() : "error" === C ? "number" != typeof e.status ? _(0, "error") : _(e.status, e.statusText) : _(ZI[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                                    binary: e.response
                                } : {
                                    text: e.responseText
                                }, e.getAllResponseHeaders()))
                            }
                        }
                        ,
                        e.onload = I(),
                        E = e.onerror = e.ontimeout = I("error"),
                        void 0 !== e.onabort ? e.onabort = E : e.onreadystatechange = function() {
                            4 === e.readyState && T.setTimeout(function() {
                                I && E()
                            })
                        }
                        ,
                        I = I("abort");
                        try {
                            e.send(C.hasContent && C.data || null)
                        } catch (C) {
                            if (I)
                                throw C
                        }
                    },
                    abort: function() {
                        I && I()
                    }
                }
        }),
        pC.ajaxPrefilter(function(C) {
            C.crossDomain && (C.contents.script = !1)
        }),
        pC.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(C) {
                    return pC.globalEval(C),
                    C
                }
            }
        }),
        pC.ajaxPrefilter("script", function(C) {
            void 0 === C.cache && (C.cache = !1),
            C.crossDomain && (C.type = "GET")
        }),
        pC.ajaxTransport("script", function(C) {
            if (C.crossDomain) {
                var I, T;
                return {
                    send: function(E, D) {
                        I = pC("<script>").prop({
                            charset: C.scriptCharset,
                            src: C.url
                        }).on("load error", T = function(C) {
                            I.remove(),
                            T = null,
                            C && D("error" === C.type ? 404 : 200, C.type)
                        }
                        ),
                        RC.head.appendChild(I[0])
                    },
                    abort: function() {
                        T && T()
                    }
                }
            }
        });
        var CT = []
          , IT = /(=)\?(?=&|$)|\?\?/;
        pC.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var C = CT.pop() || pC.expando + "_" + xI++;
                return this[C] = !0,
                C
            }
        }),
        pC.ajaxPrefilter("json jsonp", function(C, I, E) {
            var D, _, O, e = C.jsonp !== !1 && (IT.test(C.url) ? "url" : "string" == typeof C.data && 0 === (C.contentType || "").indexOf("application/x-www-form-urlencoded") && IT.test(C.data) && "data");
            if (e || "jsonp" === C.dataTypes[0])
                return D = C.jsonpCallback = uC(C.jsonpCallback) ? C.jsonpCallback() : C.jsonpCallback,
                e ? C[e] = C[e].replace(IT, "$1" + D) : C.jsonp !== !1 && (C.url += (wI.test(C.url) ? "&" : "?") + C.jsonp + "=" + D),
                C.converters["script json"] = function() {
                    return O || pC.error(D + " was not called"),
                    O[0]
                }
                ,
                C.dataTypes[0] = "json",
                _ = T[D],
                T[D] = function() {
                    O = arguments
                }
                ,
                E.always(function() {
                    void 0 === _ ? pC(T).removeProp(D) : T[D] = _,
                    C[D] && (C.jsonpCallback = I.jsonpCallback,
                    CT.push(D)),
                    O && uC(_) && _(O[0]),
                    O = _ = void 0
                }),
                "script"
        }),
        sC.createHTMLDocument = function() {
            var C = RC.implementation.createHTMLDocument("").body;
            return C.innerHTML = "<form></form><form></form>",
            2 === C.childNodes.length
        }(),
        pC.parseHTML = function(C, I, T) {
            if ("string" != typeof C)
                return [];
            "boolean" == typeof I && (T = I,
            I = !1);
            var E, D, _;
            return I || (sC.createHTMLDocument ? (I = RC.implementation.createHTMLDocument(""),
            E = I.createElement("base"),
            E.href = RC.location.href,
            I.head.appendChild(E)) : I = RC),
            D = VC.exec(C),
            _ = !T && [],
            D ? [I.createElement(D[1])] : (D = h([C], I, _),
            _ && _.length && pC(_).remove(),
            pC.merge([], D.childNodes))
        }
        ,
        pC.fn.load = function(C, I, T) {
            var E, D, _, O = this, e = C.indexOf(" ");
            return e > -1 && (E = CC(C.slice(e)),
            C = C.slice(0, e)),
            uC(I) ? (T = I,
            I = void 0) : I && "object" == typeof I && (D = "POST"),
            O.length > 0 && pC.ajax({
                url: C,
                type: D || "GET",
                dataType: "html",
                data: I
            }).done(function(C) {
                _ = arguments,
                O.html(E ? pC("<div>").append(pC.parseHTML(C)).find(E) : C)
            }).always(T && function(C, I) {
                O.each(function() {
                    T.apply(this, _ || [C.responseText, I, C])
                })
            }
            ),
            this
        }
        ,
        pC.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(C, I) {
            pC.fn[I] = function(C) {
                return this.on(I, C)
            }
        }),
        pC.expr.pseudos.animated = function(C) {
            return pC.grep(pC.timers, function(I) {
                return C === I.elem
            }).length
        }
        ,
        pC.offset = {
            setOffset: function(C, I, T) {
                var E, D, _, O, e, S, t, R = pC.css(C, "position"), n = pC(C), Y = {};
                "static" === R && (C.style.position = "relative"),
                e = n.offset(),
                _ = pC.css(C, "top"),
                S = pC.css(C, "left"),
                t = ("absolute" === R || "fixed" === R) && (_ + S).indexOf("auto") > -1,
                t ? (E = n.position(),
                O = E.top,
                D = E.left) : (O = parseFloat(_) || 0,
                D = parseFloat(S) || 0),
                uC(I) && (I = I.call(C, T, pC.extend({}, e))),
                null != I.top && (Y.top = I.top - e.top + O),
                null != I.left && (Y.left = I.left - e.left + D),
                "using"in I ? I.using.call(C, Y) : n.css(Y)
            }
        },
        pC.fn.extend({
            offset: function(C) {
                if (arguments.length)
                    return void 0 === C ? this : this.each(function(I) {
                        pC.offset.setOffset(this, C, I)
                    });
                var I, T, E = this[0];
                if (E)
                    return E.getClientRects().length ? (I = E.getBoundingClientRect(),
                    T = E.ownerDocument.defaultView,
                    {
                        top: I.top + T.pageYOffset,
                        left: I.left + T.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    }
            },
            position: function() {
                if (this[0]) {
                    var C, I, T, E = this[0], D = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === pC.css(E, "position"))
                        I = E.getBoundingClientRect();
                    else {
                        for (I = this.offset(),
                        T = E.ownerDocument,
                        C = E.offsetParent || T.documentElement; C && (C === T.body || C === T.documentElement) && "static" === pC.css(C, "position"); )
                            C = C.parentNode;
                        C && C !== E && 1 === C.nodeType && (D = pC(C).offset(),
                        D.top += pC.css(C, "borderTopWidth", !0),
                        D.left += pC.css(C, "borderLeftWidth", !0))
                    }
                    return {
                        top: I.top - D.top - pC.css(E, "marginTop", !0),
                        left: I.left - D.left - pC.css(E, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var C = this.offsetParent; C && "static" === pC.css(C, "position"); )
                        C = C.offsetParent;
                    return C || OI
                })
            }
        }),
        pC.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(C, I) {
            var T = "pageYOffset" === I;
            pC.fn[C] = function(E) {
                return HC(this, function(C, E, D) {
                    var _;
                    return lC(C) ? _ = C : 9 === C.nodeType && (_ = C.defaultView),
                    void 0 === D ? _ ? _[I] : C[E] : void (_ ? _.scrollTo(T ? _.pageXOffset : D, T ? D : _.pageYOffset) : C[E] = D)
                }, C, E, arguments.length)
            }
        }),
        pC.each(["top", "left"], function(C, I) {
            pC.cssHooks[I] = q(sC.pixelPosition, function(C, T) {
                if (T)
                    return T = L(C, I),
                    rI.test(T) ? pC(C).position()[I] + "px" : T
            })
        }),
        pC.each({
            Height: "height",
            Width: "width"
        }, function(C, I) {
            pC.each({
                padding: "inner" + C,
                content: I,
                "": "outer" + C
            }, function(T, E) {
                pC.fn[E] = function(D, _) {
                    var O = arguments.length && (T || "boolean" != typeof D)
                      , e = T || (D === !0 || _ === !0 ? "margin" : "border");
                    return HC(this, function(I, T, D) {
                        var _;
                        return lC(I) ? 0 === E.indexOf("outer") ? I["inner" + C] : I.document.documentElement["client" + C] : 9 === I.nodeType ? (_ = I.documentElement,
                        Math.max(I.body["scroll" + C], _["scroll" + C], I.body["offset" + C], _["offset" + C], _["client" + C])) : void 0 === D ? pC.css(I, T, e) : pC.style(I, T, D, e)
                    }, I, O ? D : void 0, O)
                }
            })
        }),
        pC.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(C, I) {
            pC.fn[I] = function(C, T) {
                return arguments.length > 0 ? this.on(I, null, C, T) : this.trigger(I)
            }
        }),
        pC.fn.extend({
            hover: function(C, I) {
                return this.mouseenter(C).mouseleave(I || C)
            }
        }),
        pC.fn.extend({
            bind: function(C, I, T) {
                return this.on(C, null, I, T)
            },
            unbind: function(C, I) {
                return this.off(C, null, I)
            },
            delegate: function(C, I, T, E) {
                return this.on(I, C, T, E)
            },
            undelegate: function(C, I, T) {
                return 1 === arguments.length ? this.off(C, "**") : this.off(I, C || "**", T)
            }
        }),
        pC.proxy = function(C, I) {
            var T, E, D;
            if ("string" == typeof I && (T = C[I],
            I = C,
            C = T),
            uC(C))
                return E = YC.call(arguments, 2),
                D = function() {
                    return C.apply(I || this, E.concat(YC.call(arguments)))
                }
                ,
                D.guid = C.guid = C.guid || pC.guid++,
                D
        }
        ,
        pC.holdReady = function(C) {
            C ? pC.readyWait++ : pC.ready(!0)
        }
        ,
        pC.isArray = Array.isArray,
        pC.parseJSON = JSON.parse,
        pC.nodeName = t,
        pC.isFunction = uC,
        pC.isWindow = lC,
        pC.camelCase = M,
        pC.type = e,
        pC.now = Date.now,
        pC.isNumeric = function(C) {
            var I = pC.type(C);
            return ("number" === I || "string" === I) && !isNaN(C - parseFloat(C))
        }
        ,
        E = [],
        D = function() {
            return pC
        }
        .apply(I, E),
        !(void 0 !== D && (C.exports = D));
        var TT = T.jQuery
          , ET = T.$;
        return pC.noConflict = function(C) {
            return T.$ === pC && (T.$ = ET),
            C && T.jQuery === pC && (T.jQuery = TT),
            pC
        }
        ,
        _ || (T.jQuery = T.$ = pC),
        pC
    })
}
, function(C, I, T) {
    var E, D, _;
    /*!
	 * jQuery Cookie Plugin v1.4.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2013 Klaus Hartl
	 * Released under the MIT license
	 */
    !function(O) {
        D = [T(1)],
        E = O,
        _ = "function" == typeof E ? E.apply(I, D) : E,
        !(void 0 !== _ && (C.exports = _))
    }(function(C) {
        function I(C) {
            return e.raw ? C : encodeURIComponent(C)
        }
        function T(C) {
            return e.raw ? C : decodeURIComponent(C)
        }
        function E(C) {
            return I(e.json ? JSON.stringify(C) : String(C))
        }
        function D(C) {
            0 === C.indexOf('"') && (C = C.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return C = decodeURIComponent(C.replace(O, " ")),
                e.json ? JSON.parse(C) : C
            } catch (C) {}
        }
        function _(I, T) {
            var E = e.raw ? I : D(I);
            return C.isFunction(T) ? T(E) : E
        }
        var O = /\+/g
          , e = C.cookie = function(D, O, S) {
            if (void 0 !== O && !C.isFunction(O)) {
                if (S = C.extend({}, e.defaults, S),
                "number" == typeof S.expires) {
                    var t = S.expires
                      , R = S.expires = new Date;
                    R.setTime(+R + 864e5 * t)
                }
                return document.cookie = [I(D), "=", E(O), S.expires ? "; expires=" + S.expires.toUTCString() : "", S.path ? "; path=" + S.path : "", S.domain ? "; domain=" + S.domain : "", S.secure ? "; secure" : ""].join("")
            }
            for (var n = D ? void 0 : {}, Y = document.cookie ? document.cookie.split("; ") : [], N = 0, r = Y.length; N < r; N++) {
                var o = Y[N].split("=")
                  , i = T(o.shift())
                  , A = o.join("=");
                if (D && D === i) {
                    n = _(A, O);
                    break
                }
                D || void 0 === (A = _(A)) || (n[i] = A)
            }
            return n
        }
        ;
        e.defaults = {},
        C.removeCookie = function(I, T) {
            return void 0 !== C.cookie(I) && (C.cookie(I, "", C.extend({}, T, {
                expires: -1
            })),
            !C.cookie(I))
        }
    })
}
, function(C, I, T) {
    C.exports = {
        default: T(4),
        __esModule: !0
    }
}
, function(C, I, T) {
    var E = T(5)
      , D = E.JSON || (E.JSON = {
        stringify: JSON.stringify
    });
    C.exports = function(C) {
        return D.stringify.apply(D, arguments)
    }
}
, function(C, I) {
    var T = C.exports = {
        version: "2.5.3"
    };
    "number" == typeof __e && (__e = T)
}
, function(C, I, T) {
    var E;
    !function() {
        "use strict";
        /**
		 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
		 *
		 * @codingstandard ftlabs-jsv2
		 * @copyright The Financial Times Limited [All Rights Reserved]
		 * @license MIT License (see LICENSE.txt)
		 */
        function D(C, I) {
            function T(C, I) {
                return function() {
                    return C.apply(I, arguments)
                }
            }
            var E;
            if (I = I || {},
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            this.targetElement = null,
            this.touchStartX = 0,
            this.touchStartY = 0,
            this.lastTouchIdentifier = 0,
            this.touchBoundary = I.touchBoundary || 10,
            this.layer = C,
            this.tapDelay = I.tapDelay || 200,
            this.tapTimeout = I.tapTimeout || 700,
            !D.notNeeded(C)) {
                for (var _ = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], e = this, S = 0, t = _.length; S < t; S++)
                    e[_[S]] = T(e[_[S]], e);
                O && (C.addEventListener("mouseover", this.onMouse, !0),
                C.addEventListener("mousedown", this.onMouse, !0),
                C.addEventListener("mouseup", this.onMouse, !0)),
                C.addEventListener("click", this.onClick, !0),
                C.addEventListener("touchstart", this.onTouchStart, !1),
                C.addEventListener("touchmove", this.onTouchMove, !1),
                C.addEventListener("touchend", this.onTouchEnd, !1),
                C.addEventListener("touchcancel", this.onTouchCancel, !1),
                Event.prototype.stopImmediatePropagation || (C.removeEventListener = function(I, T, E) {
                    var D = Node.prototype.removeEventListener;
                    "click" === I ? D.call(C, I, T.hijacked || T, E) : D.call(C, I, T, E)
                }
                ,
                C.addEventListener = function(I, T, E) {
                    var D = Node.prototype.addEventListener;
                    "click" === I ? D.call(C, I, T.hijacked || (T.hijacked = function(C) {
                        C.propagationStopped || T(C)
                    }
                    ), E) : D.call(C, I, T, E)
                }
                ),
                "function" == typeof C.onclick && (E = C.onclick,
                C.addEventListener("click", function(C) {
                    E(C)
                }, !1),
                C.onclick = null)
            }
        }
        var _ = navigator.userAgent.indexOf("Windows Phone") >= 0
          , O = navigator.userAgent.indexOf("Android") > 0 && !_
          , e = /iP(ad|hone|od)/.test(navigator.userAgent) && !_
          , S = e && /OS 4_\d(_\d)?/.test(navigator.userAgent)
          , t = e && /OS [6-7]_\d/.test(navigator.userAgent)
          , R = navigator.userAgent.indexOf("BB10") > 0;
        D.prototype.needsClick = function(C) {
            switch (C.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (C.disabled)
                    return !0;
                break;
            case "input":
                if (e && "file" === C.type || C.disabled)
                    return !0;
                break;
            case "label":
            case "iframe":
            case "video":
                return !0
            }
            return /\bneedsclick\b/.test(C.className)
        }
        ,
        D.prototype.needsFocus = function(C) {
            switch (C.nodeName.toLowerCase()) {
            case "textarea":
                return !0;
            case "select":
                return !O;
            case "input":
                switch (C.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                    return !1
                }
                return !C.disabled && !C.readOnly;
            default:
                return /\bneedsfocus\b/.test(C.className)
            }
        }
        ,
        D.prototype.sendClick = function(C, I) {
            var T, E;
            document.activeElement && document.activeElement !== C && document.activeElement.blur(),
            E = I.changedTouches[0],
            T = document.createEvent("MouseEvents"),
            T.initMouseEvent(this.determineEventType(C), !0, !0, window, 1, E.screenX, E.screenY, E.clientX, E.clientY, !1, !1, !1, !1, 0, null),
            T.forwardedTouchEvent = !0,
            C.dispatchEvent(T)
        }
        ,
        D.prototype.determineEventType = function(C) {
            return O && "select" === C.tagName.toLowerCase() ? "mousedown" : "click"
        }
        ,
        D.prototype.focus = function(C) {
            var I;
            e && C.setSelectionRange && 0 !== C.type.indexOf("date") && "time" !== C.type && "month" !== C.type ? (I = C.value.length,
            C.setSelectionRange(I, I)) : C.focus()
        }
        ,
        D.prototype.updateScrollParent = function(C) {
            var I, T;
            if (I = C.fastClickScrollParent,
            !I || !I.contains(C)) {
                T = C;
                do {
                    if (T.scrollHeight > T.offsetHeight) {
                        I = T,
                        C.fastClickScrollParent = T;
                        break
                    }
                    T = T.parentElement
                } while (T)
            }
            I && (I.fastClickLastScrollTop = I.scrollTop)
        }
        ,
        D.prototype.getTargetElementFromEventTarget = function(C) {
            return C.nodeType === Node.TEXT_NODE ? C.parentNode : C
        }
        ,
        D.prototype.onTouchStart = function(C) {
            var I, T, E;
            if (C.targetTouches.length > 1)
                return !0;
            if (I = this.getTargetElementFromEventTarget(C.target),
            T = C.targetTouches[0],
            e) {
                if (E = window.getSelection(),
                E.rangeCount && !E.isCollapsed)
                    return !0;
                if (!S) {
                    if (T.identifier && T.identifier === this.lastTouchIdentifier)
                        return C.preventDefault(),
                        !1;
                    this.lastTouchIdentifier = T.identifier,
                    this.updateScrollParent(I)
                }
            }
            return this.trackingClick = !0,
            this.trackingClickStart = C.timeStamp,
            this.targetElement = I,
            this.touchStartX = T.pageX,
            this.touchStartY = T.pageY,
            C.timeStamp - this.lastClickTime < this.tapDelay && C.preventDefault(),
            !0
        }
        ,
        D.prototype.touchHasMoved = function(C) {
            var I = C.changedTouches[0]
              , T = this.touchBoundary;
            return Math.abs(I.pageX - this.touchStartX) > T || Math.abs(I.pageY - this.touchStartY) > T
        }
        ,
        D.prototype.onTouchMove = function(C) {
            return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(C.target) || this.touchHasMoved(C)) && (this.trackingClick = !1,
            this.targetElement = null),
            !0)
        }
        ,
        D.prototype.findControl = function(C) {
            return void 0 !== C.control ? C.control : C.htmlFor ? document.getElementById(C.htmlFor) : C.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
        }
        ,
        D.prototype.onTouchEnd = function(C) {
            var I, T, E, D, _, R = this.targetElement;
            if (!this.trackingClick)
                return !0;
            if (C.timeStamp - this.lastClickTime < this.tapDelay)
                return this.cancelNextClick = !0,
                !0;
            if (C.timeStamp - this.trackingClickStart > this.tapTimeout)
                return !0;
            if (this.cancelNextClick = !1,
            this.lastClickTime = C.timeStamp,
            T = this.trackingClickStart,
            this.trackingClick = !1,
            this.trackingClickStart = 0,
            t && (_ = C.changedTouches[0],
            R = document.elementFromPoint(_.pageX - window.pageXOffset, _.pageY - window.pageYOffset) || R,
            R.fastClickScrollParent = this.targetElement.fastClickScrollParent),
            E = R.tagName.toLowerCase(),
            "label" === E) {
                if (I = this.findControl(R)) {
                    if (this.focus(R),
                    O)
                        return !1;
                    R = I
                }
            } else if (this.needsFocus(R))
                return C.timeStamp - T > 100 || e && window.top !== window && "input" === E ? (this.targetElement = null,
                !1) : (this.focus(R),
                this.sendClick(R, C),
                e && "select" === E || (this.targetElement = null,
                C.preventDefault()),
                !1);
            return !(!e || S || (D = R.fastClickScrollParent,
            !D || D.fastClickLastScrollTop === D.scrollTop)) || (this.needsClick(R) || (C.preventDefault(),
            this.sendClick(R, C)),
            !1)
        }
        ,
        D.prototype.onTouchCancel = function() {
            this.trackingClick = !1,
            this.targetElement = null
        }
        ,
        D.prototype.onMouse = function(C) {
            return !this.targetElement || (!!C.forwardedTouchEvent || (!C.cancelable || (!(!this.needsClick(this.targetElement) || this.cancelNextClick) || (C.stopImmediatePropagation ? C.stopImmediatePropagation() : C.propagationStopped = !0,
            C.stopPropagation(),
            C.preventDefault(),
            !1))))
        }
        ,
        D.prototype.onClick = function(C) {
            var I;
            return this.trackingClick ? (this.targetElement = null,
            this.trackingClick = !1,
            !0) : "submit" === C.target.type && 0 === C.detail || (I = this.onMouse(C),
            I || (this.targetElement = null),
            I)
        }
        ,
        D.prototype.destroy = function() {
            var C = this.layer;
            O && (C.removeEventListener("mouseover", this.onMouse, !0),
            C.removeEventListener("mousedown", this.onMouse, !0),
            C.removeEventListener("mouseup", this.onMouse, !0)),
            C.removeEventListener("click", this.onClick, !0),
            C.removeEventListener("touchstart", this.onTouchStart, !1),
            C.removeEventListener("touchmove", this.onTouchMove, !1),
            C.removeEventListener("touchend", this.onTouchEnd, !1),
            C.removeEventListener("touchcancel", this.onTouchCancel, !1)
        }
        ,
        D.notNeeded = function(C) {
            var I, T, E, D;
            if ("undefined" == typeof window.ontouchstart)
                return !0;
            if (T = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1]) {
                if (!O)
                    return !0;
                if (I = document.querySelector("meta[name=viewport]")) {
                    if (I.content.indexOf("user-scalable=no") !== -1)
                        return !0;
                    if (T > 31 && document.documentElement.scrollWidth <= window.outerWidth)
                        return !0
                }
            }
            if (R && (E = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),
            E[1] >= 10 && E[2] >= 3 && (I = document.querySelector("meta[name=viewport]")))) {
                if (I.content.indexOf("user-scalable=no") !== -1)
                    return !0;
                if (document.documentElement.scrollWidth <= window.outerWidth)
                    return !0
            }
            return "none" === C.style.msTouchAction || "manipulation" === C.style.touchAction || (D = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1],
            !!(D >= 27 && (I = document.querySelector("meta[name=viewport]"),
            I && (I.content.indexOf("user-scalable=no") !== -1 || document.documentElement.scrollWidth <= window.outerWidth))) || ("none" === C.style.touchAction || "manipulation" === C.style.touchAction))
        }
        ,
        D.attach = function(C, I) {
            return new D(C,I)
        }
        ,
        E = function() {
            return D
        }
        .call(I, T, I, C),
        !(void 0 !== E && (C.exports = E))
    }()
}
, , function(C, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    });
    I.shuffle = function(C) {
        for (var I = C.length; I; ) {
            var T = Math.floor(Math.random() * I--)
              , E = [C[I], C[T]];
            C[T] = E[0],
            C[I] = E[1]
        }
    }
}
, function(C, I, T) {
    (function(C) {
        "use strict";
        function E(C) {
            return C && C.__esModule ? C : {
                default: C
            }
        }
        Object.defineProperty(I, "__esModule", {
            value: !0
        }),
        I.initGetSuccUrl = I.newSuccCommonHandel2 = I.newSuccCommonHandel = I.succCommonHandel2 = I.succCommonHandel = I.succUrl = I.hasIDVerify2 = I.hasIDVerify = I.setShare = I.setTitle = I.wordChange = I.showProtocal = I.buttonUrlParam = I.getUrlParam = I.resize = void 0;
        var D = T(10)
          , _ = E(D)
          , O = T(63)
          , e = E(O)
          , S = (I.resize = function() {
            var I = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 320
              , T = C(window).width()
              , E = T / I;
            E = E > 2 ? 2 : E,
            C("html").css("font-size", 16 * E + "px")
        }
        ,
        I.getUrlParam = function() {
            for (var C = {}, I = location.search.substring(1), T = I.split("&"), E = 0; E < T.length; E += 1) {
                var D = T[E].indexOf("=");
                if (D !== -1) {
                    var _ = T[E].substring(0, D);
                    C[_] = T[E].substring(D + 1)
                }
            }
            return C
        }
        )
          , t = I.buttonUrlParam = function(I) {
            var T = "";
            return C.each(I, function(C, I) {
                void 0 !== I && "undefined" !== I && "" !== I && (T += "&" + C + "=" + I)
            }),
            T
        }
          , R = (I.showProtocal = function(I, T, E) {
            var D = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : event;
            D.stopPropagation(),
            E() && C.ajax({
                type: "post",
                url: T,
                dataType: "json",
                data: I,
                beforeSend: function() {
                    C(".mask").show()
                },
                success: function(I) {
                    var T = [];
                    C.each(I, function(C, I) {
                        T.push("" + I.content)
                    }),
                    C("#protocol-desc .protocol-title").empty().text("涓浗鑱旈€氬鎴峰叆缃戝崗璁�"),
                    C("#protocol-desc .protocol-desc").empty().html(T.join("<br>")),
                    C("#protocol-desc").show(),
                    C("html, body").addClass("no-scroll")
                },
                ajaxError: function() {
                    C(".mask").hide()
                }
            })
        }
        ,
        I.wordChange = function(C) {
            var I = [].concat((0,
            _.default)(C))
              , T = "";
            return I.forEach(function(C) {
                var I = /^[鈻€⑩棌路.銆俙,锛岋紵?]+$/
                  , E = I.test(C);
                E && (C = "路"),
                T += C
            }),
            T
        }
        ,
        I.setTitle = function(C) {
            if ("undefined" != typeof C && null !== C && "" !== C && (document.title = C,
            navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))) {
                var I = document.createElement("iframe");
                I.style.display = "none",
                I.style.width = "0",
                I.style.height = "0",
                I.src = "https://m.10010.com/favicon.ico?v=" + Math.random(),
                I.onload = function() {
                    setTimeout(function() {
                        document.body.removeChild(I)
                    }, 0)
                }
                ,
                document.body.appendChild(I)
            }
        }
        ,
        I.setShare = function(I, T, E, D) {
            var _ = document.getElementsByTagName("head")[0]
              , O = document.createElement("script");
            O.type = "text/javascript",
            O.src = "https://res.wx.qq.com/open/js/jweixin-1.0.0.js",
            _.appendChild(O),
            O.onload = function() {
                var _ = I
                  , O = T
                  , e = E
                  , S = D;
                C.ajax({
                    type: "get",
                    url: "/KCard/wxCommon/loadJsapiConfigInfo",
                    data: {
                        jsapiUrl: e
                    },
                    dataType: "json",
                    success: function(C) {
                        wx.config({
                            debug: !1,
                            appId: C.appId,
                            timestamp: C.timestamp,
                            nonceStr: C.nonceStr,
                            signature: C.signature,
                            jsApiList: ["checkJsApi", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                        }),
                        wx.ready(function() {
                            wx.checkJsApi({
                                jsApiList: ["getNetworkType", "previewImage"],
                                success: function(C) {}
                            }),
                            wx.onMenuShareAppMessage({
                                title: _,
                                desc: O,
                                link: e,
                                imgUrl: S,
                                fail: function(C) {}
                            }),
                            wx.onMenuShareTimeline({
                                title: _,
                                desc: O,
                                link: e,
                                imgUrl: S,
                                fail: function(C) {}
                            }),
                            wx.onMenuShareQQ({
                                title: _,
                                desc: O,
                                link: e,
                                imgUrl: S,
                                fail: function(C) {}
                            })
                        }),
                        wx.error(function(C) {})
                    },
                    error: function(C) {}
                })
            }
        }
        ,
        function(C) {
            var I = "";
            I = C.substr(6, 4) + "/" + C.substr(10, 2) + "/" + C.substr(12, 2);
            var T = new Date(I)
              , E = new Date
              , D = E.getFullYear() - T.getFullYear();
            return (E.getMonth() < T.getMonth() || E.getMonth() == T.getMonth() && E.getDate() < T.getDate()) && D--,
            D
        }
        )
          , n = function(C, I) {
            return C === I
        }
          , Y = (I.hasIDVerify = function(C) {
            var I = e.default.PROVINCE_LIST.filter(function(I) {
                return I.PROVINCE_CODE === C.post.webProvince
            })[0]
              , T = I.ESS_PROVINCE_CODE
              , E = e.default.PROVINCE_MAP[C.post.webProvince].filter(function(I) {
                return I.CITY_CODE === C.post.webCity
            })[0]
              , D = E.ESS_CITY_CODE;
            if (R(C.certInfo.certId) >= 16) {
                if ("50" === C.numRes.essProvince && C.numRes.essProvince !== T)
                    return !0;
                if (!n(C.numRes.essCity, D))
                    return "50" !== C.numRes.essProvince
            }
            return !1
        }
        ,
        I.hasIDVerify2 = function(C) {
            return R(C.certInfo.certId) >= 16
        }
        )
          , N = I.succUrl = "";
        I.succCommonHandel = function(C, I) {
            var T = location.host.indexOf("m.10010") > -1 || location.host.indexOf("card.10010") > -1 ? 1 : 0
              , E = S()
              , D = "orderId=" + I.orderIdEn + "&intentTag=" + I.intentTag + t(E)
              , _ = 0 === N.indexOf("SF") ? 1 : 0;
            if (Y(C)) {
                var O = "orderId=" + I.orderIdEn + "&number=" + C.numRes.number + "&intentTag=" + I.intentTag + "&type=page";
                O += "&pname=" + (arguments.length <= 2 ? void 0 : arguments[2]) + "&s=" + N + t(E),
                location.href = T ? "https://m.10010.com/queen/new-starcard-temp/upload-picture.html?" + O : "https://demo.mall.10010.com:8108/queen/new-starcard-temp/upload-picture.html?" + O
            } else
                _ ? location.href = T ? "https://m.10010.com/scaffold-show/success/" + N + "?" + D : "https://demo.mall.10010.com:8108/scaffold-show/success/" + N + "?" + D : location.href = T ? "https://m.10010.com/queen/" + N + ".html?" + D : "https://demo.mall.10010.com:8108/queen/" + N + ".html?" + D
        }
        ,
        I.succCommonHandel2 = function(C, I) {
            var T = location.host.indexOf("m.10010") > -1 || location.host.indexOf("card.10010") > -1 ? 1 : 0
              , E = S()
              , D = "orderId=" + I.orderIdEn + "&intentTag=" + I.intentTag + t(E)
              , _ = 0 === N.indexOf("SF") ? 1 : 0;
            if (Y(C)) {
                var O = "orderId=" + I.orderIdEn + "&number=" + C.numRes.number + "&intentTag=" + I.intentTag + "&type=page";
                O += "&pname=" + (arguments.length <= 2 ? void 0 : arguments[2]) + "&s=" + N + t(E),
                window.location.replace(T ? "https://m.10010.com/queen/new-starcard-temp/upload-picture.html?" + O : "https://demo.mall.10010.com:8108/queen/new-starcard-temp/upload-picture.html?" + O)
            } else
                _ ? window.location.replace(T ? "https://m.10010.com/scaffold-show/success/" + N + "?" + D : "https://demo.mall.10010.com:8108/scaffold-show/success/" + N + "?" + D) : window.location.replace(T ? "https://m.10010.com/queen/" + N + ".html?" + D : "https://demo.mall.10010.com:8108/queen/" + N + ".html?" + D)
        }
        ,
        I.newSuccCommonHandel = function(I, T) {
            var E = location.host.indexOf("m.10010") > -1 || location.host.indexOf("card.10010") > -1 ? 1 : 0
              , D = S();
            "orderId=" + T.orderIdEn + "&intentTag=" + T.intentTag + t(D);
            if (Y(I)) {
                var _ = "orderId=" + T.orderIdEn + "&number=" + I.numRes.number + "&intentTag=" + T.intentTag + "&type=page";
                _ += "&pname=" + (arguments.length <= 2 ? void 0 : arguments[2]) + "&s=" + N + t(D),
                location.href = E ? "https://m.10010.com/queen/new-starcard-temp/upload-picture.html?" + _ : "https://demo.mall.10010.com:8108/queen/new-starcard-temp/upload-picture.html?" + _
            } else
                "1" === T.supportChangeCert ? C("#change-zj-8, .mask").show() : "2" === T.supportChangeCert && ("1" === T.supportSelfFetch ? C("#select-hall, .mask").show() : C("#change-zj-16, .mask").show())
        }
        ,
        I.newSuccCommonHandel2 = function(I, T, E) {
            var D = location.host.indexOf("m.10010") > -1 || location.host.indexOf("card.10010") > -1 ? 1 : 0
              , _ = S();
            "orderId=" + E.orderIdEn + "&intentTag=" + E.intentTag + t(_);
            if (Y(I)) {
                var O = "orderId=" + E.orderIdEn + "&number=" + T.numRes.number + "&intentTag=" + E.intentTag + "&type=page";
                O += "&pname=" + (arguments.length <= 3 ? void 0 : arguments[3]) + "&s=" + N + t(_),
                location.href = D ? "https://m.10010.com/queen/new-starcard-temp/upload-picture.html?" + O : "https://demo.mall.10010.com:8108/queen/new-starcard-temp/upload-picture.html?" + O
            } else
                "1" === E.supportChangeCert ? C("#change-zj-8, .mask").show() : "2" === E.supportChangeCert && ("1" === E.supportSelfFetch ? C("#select-hall, .mask").show() : C("#change-zj-16, .mask").show())
        }
        ,
        I.initGetSuccUrl = function(T) {
            var E = location.host.indexOf("m.10010") > -1 || location.host.indexOf("card.10010") > -1 ? 1 : 0
              , D = "";
            D = E ? "/decoration-data/scaffold/getSuccessUrl" : "/scaffold-app/scaffold/getSuccessUrl",
            setTimeout(function() {
                C.ajax({
                    type: "get",
                    url: D + "?fillName=" + T,
                    success: function(C) {
                        "0000" === C.resultCode && (I.succUrl = N = C.data[0].pageUrl)
                    },
                    error: function(C) {
                        console.log(C)
                    }
                })
            }, 1e3)
        }
    }
    ).call(I, T(1))
}
, function(C, I, T) {
    "use strict";
    function E(C) {
        return C && C.__esModule ? C : {
            default: C
        }
    }
    I.__esModule = !0;
    var D = T(11)
      , _ = E(D);
    I.default = function(C) {
        if (Array.isArray(C)) {
            for (var I = 0, T = Array(C.length); I < C.length; I++)
                T[I] = C[I];
            return T
        }
        return (0,
        _.default)(C)
    }
}
, function(C, I, T) {
    C.exports = {
        default: T(12),
        __esModule: !0
    }
}
, function(C, I, T) {
    T(13),
    T(56),
    C.exports = T(5).Array.from
}
, function(C, I, T) {
    "use strict";
    var E = T(14)(!0);
    T(17)(String, "String", function(C) {
        this._t = String(C),
        this._i = 0
    }, function() {
        var C, I = this._t, T = this._i;
        return T >= I.length ? {
            value: void 0,
            done: !0
        } : (C = E(I, T),
        this._i += C.length,
        {
            value: C,
            done: !1
        })
    })
}
, function(C, I, T) {
    var E = T(15)
      , D = T(16);
    C.exports = function(C) {
        return function(I, T) {
            var _, O, e = String(D(I)), S = E(T), t = e.length;
            return S < 0 || S >= t ? C ? "" : void 0 : (_ = e.charCodeAt(S),
            _ < 55296 || _ > 56319 || S + 1 === t || (O = e.charCodeAt(S + 1)) < 56320 || O > 57343 ? C ? e.charAt(S) : _ : C ? e.slice(S, S + 2) : (_ - 55296 << 10) + (O - 56320) + 65536)
        }
    }
}
, function(C, I) {
    var T = Math.ceil
      , E = Math.floor;
    C.exports = function(C) {
        return isNaN(C = +C) ? 0 : (C > 0 ? E : T)(C)
    }
}
, function(C, I) {
    C.exports = function(C) {
        if (void 0 == C)
            throw TypeError("Can't call method on  " + C);
        return C
    }
}
, function(C, I, T) {
    "use strict";
    var E = T(18)
      , D = T(19)
      , _ = T(33)
      , O = T(23)
      , e = T(34)
      , S = T(35)
      , t = T(36)
      , R = T(52)
      , n = T(54)
      , Y = T(53)("iterator")
      , N = !([].keys && "next"in [].keys())
      , r = "@@iterator"
      , o = "keys"
      , i = "values"
      , A = function() {
        return this
    };
    C.exports = function(C, I, T, M, a, c, s) {
        t(T, I, M);
        var u, l, f, d = function(C) {
            if (!N && C in m)
                return m[C];
            switch (C) {
            case o:
                return function() {
                    return new T(this,C)
                }
                ;
            case i:
                return function() {
                    return new T(this,C)
                }
            }
            return function() {
                return new T(this,C)
            }
        }, p = I + " Iterator", h = a == i, P = !1, m = C.prototype, g = m[Y] || m[r] || a && m[a], v = !N && g || d(a), V = a ? h ? d("entries") : v : void 0, y = "Array" == I ? m.entries || g : g;
        if (y && (f = n(y.call(new C)),
        f !== Object.prototype && f.next && (R(f, p, !0),
        E || e(f, Y) || O(f, Y, A))),
        h && g && g.name !== i && (P = !0,
        v = function() {
            return g.call(this)
        }
        ),
        E && !s || !N && !P && m[Y] || O(m, Y, v),
        S[I] = v,
        S[p] = A,
        a)
            if (u = {
                values: h ? v : d(i),
                keys: c ? v : d(o),
                entries: V
            },
            s)
                for (l in u)
                    l in m || _(m, l, u[l]);
            else
                D(D.P + D.F * (N || P), I, u);
        return u
    }
}
, function(C, I) {
    C.exports = !0
}
, function(C, I, T) {
    var E = T(20)
      , D = T(5)
      , _ = T(21)
      , O = T(23)
      , e = "prototype"
      , S = function(C, I, T) {
        var t, R, n, Y = C & S.F, N = C & S.G, r = C & S.S, o = C & S.P, i = C & S.B, A = C & S.W, M = N ? D : D[I] || (D[I] = {}), a = M[e], c = N ? E : r ? E[I] : (E[I] || {})[e];
        N && (T = I);
        for (t in T)
            R = !Y && c && void 0 !== c[t],
            R && t in M || (n = R ? c[t] : T[t],
            M[t] = N && "function" != typeof c[t] ? T[t] : i && R ? _(n, E) : A && c[t] == n ? function(C) {
                var I = function(I, T, E) {
                    if (this instanceof C) {
                        switch (arguments.length) {
                        case 0:
                            return new C;
                        case 1:
                            return new C(I);
                        case 2:
                            return new C(I,T)
                        }
                        return new C(I,T,E)
                    }
                    return C.apply(this, arguments)
                };
                return I[e] = C[e],
                I
            }(n) : o && "function" == typeof n ? _(Function.call, n) : n,
            o && ((M.virtual || (M.virtual = {}))[t] = n,
            C & S.R && a && !a[t] && O(a, t, n)))
    };
    S.F = 1,
    S.G = 2,
    S.S = 4,
    S.P = 8,
    S.B = 16,
    S.W = 32,
    S.U = 64,
    S.R = 128,
    C.exports = S
}
, function(C, I) {
    var T = C.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = T)
}
, function(C, I, T) {
    var E = T(22);
    C.exports = function(C, I, T) {
        if (E(C),
        void 0 === I)
            return C;
        switch (T) {
        case 1:
            return function(T) {
                return C.call(I, T)
            }
            ;
        case 2:
            return function(T, E) {
                return C.call(I, T, E)
            }
            ;
        case 3:
            return function(T, E, D) {
                return C.call(I, T, E, D)
            }
        }
        return function() {
            return C.apply(I, arguments)
        }
    }
}
, function(C, I) {
    C.exports = function(C) {
        if ("function" != typeof C)
            throw TypeError(C + " is not a function!");
        return C
    }
}
, function(C, I, T) {
    var E = T(24)
      , D = T(32);
    C.exports = T(28) ? function(C, I, T) {
        return E.f(C, I, D(1, T))
    }
    : function(C, I, T) {
        return C[I] = T,
        C
    }
}
, function(C, I, T) {
    var E = T(25)
      , D = T(27)
      , _ = T(31)
      , O = Object.defineProperty;
    I.f = T(28) ? Object.defineProperty : function(C, I, T) {
        if (E(C),
        I = _(I, !0),
        E(T),
        D)
            try {
                return O(C, I, T)
            } catch (C) {}
        if ("get"in T || "set"in T)
            throw TypeError("Accessors not supported!");
        return "value"in T && (C[I] = T.value),
        C
    }
}
, function(C, I, T) {
    var E = T(26);
    C.exports = function(C) {
        if (!E(C))
            throw TypeError(C + " is not an object!");
        return C
    }
}
, function(C, I) {
    C.exports = function(C) {
        return "object" == typeof C ? null !== C : "function" == typeof C
    }
}
, function(C, I, T) {
    C.exports = !T(28) && !T(29)(function() {
        return 7 != Object.defineProperty(T(30)("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(C, I, T) {
    C.exports = !T(29)(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}
, function(C, I) {
    C.exports = function(C) {
        try {
            return !!C()
        } catch (C) {
            return !0
        }
    }
}
, function(C, I, T) {
    var E = T(26)
      , D = T(20).document
      , _ = E(D) && E(D.createElement);
    C.exports = function(C) {
        return _ ? D.createElement(C) : {}
    }
}
, function(C, I, T) {
    var E = T(26);
    C.exports = function(C, I) {
        if (!E(C))
            return C;
        var T, D;
        if (I && "function" == typeof (T = C.toString) && !E(D = T.call(C)))
            return D;
        if ("function" == typeof (T = C.valueOf) && !E(D = T.call(C)))
            return D;
        if (!I && "function" == typeof (T = C.toString) && !E(D = T.call(C)))
            return D;
        throw TypeError("Can't convert object to primitive value")
    }
}
, function(C, I) {
    C.exports = function(C, I) {
        return {
            enumerable: !(1 & C),
            configurable: !(2 & C),
            writable: !(4 & C),
            value: I
        }
    }
}
, function(C, I, T) {
    C.exports = T(23)
}
, function(C, I) {
    var T = {}.hasOwnProperty;
    C.exports = function(C, I) {
        return T.call(C, I)
    }
}
, function(C, I) {
    C.exports = {}
}
, function(C, I, T) {
    "use strict";
    var E = T(37)
      , D = T(32)
      , _ = T(52)
      , O = {};
    T(23)(O, T(53)("iterator"), function() {
        return this
    }),
    C.exports = function(C, I, T) {
        C.prototype = E(O, {
            next: D(1, T)
        }),
        _(C, I + " Iterator")
    }
}
, function(C, I, T) {
    var E = T(25)
      , D = T(38)
      , _ = T(50)
      , O = T(47)("IE_PROTO")
      , e = function() {}
      , S = "prototype"
      , t = function() {
        var C, I = T(30)("iframe"), E = _.length, D = "<", O = ">";
        for (I.style.display = "none",
        T(51).appendChild(I),
        I.src = "javascript:",
        C = I.contentWindow.document,
        C.open(),
        C.write(D + "script" + O + "document.F=Object" + D + "/script" + O),
        C.close(),
        t = C.F; E--; )
            delete t[S][_[E]];
        return t()
    };
    C.exports = Object.create || function(C, I) {
        var T;
        return null !== C ? (e[S] = E(C),
        T = new e,
        e[S] = null,
        T[O] = C) : T = t(),
        void 0 === I ? T : D(T, I)
    }
}
, function(C, I, T) {
    var E = T(24)
      , D = T(25)
      , _ = T(39);
    C.exports = T(28) ? Object.defineProperties : function(C, I) {
        D(C);
        for (var T, O = _(I), e = O.length, S = 0; e > S; )
            E.f(C, T = O[S++], I[T]);
        return C
    }
}
, function(C, I, T) {
    var E = T(40)
      , D = T(50);
    C.exports = Object.keys || function(C) {
        return E(C, D)
    }
}
, function(C, I, T) {
    var E = T(34)
      , D = T(41)
      , _ = T(44)(!1)
      , O = T(47)("IE_PROTO");
    C.exports = function(C, I) {
        var T, e = D(C), S = 0, t = [];
        for (T in e)
            T != O && E(e, T) && t.push(T);
        for (; I.length > S; )
            E(e, T = I[S++]) && (~_(t, T) || t.push(T));
        return t
    }
}
, function(C, I, T) {
    var E = T(42)
      , D = T(16);
    C.exports = function(C) {
        return E(D(C))
    }
}
, function(C, I, T) {
    var E = T(43);
    C.exports = Object("z").propertyIsEnumerable(0) ? Object : function(C) {
        return "String" == E(C) ? C.split("") : Object(C)
    }
}
, function(C, I) {
    var T = {}.toString;
    C.exports = function(C) {
        return T.call(C).slice(8, -1)
    }
}
, function(C, I, T) {
    var E = T(41)
      , D = T(45)
      , _ = T(46);
    C.exports = function(C) {
        return function(I, T, O) {
            var e, S = E(I), t = D(S.length), R = _(O, t);
            if (C && T != T) {
                for (; t > R; )
                    if (e = S[R++],
                    e != e)
                        return !0
            } else
                for (; t > R; R++)
                    if ((C || R in S) && S[R] === T)
                        return C || R || 0;
            return !C && -1
        }
    }
}
, function(C, I, T) {
    var E = T(15)
      , D = Math.min;
    C.exports = function(C) {
        return C > 0 ? D(E(C), 9007199254740991) : 0
    }
}
, function(C, I, T) {
    var E = T(15)
      , D = Math.max
      , _ = Math.min;
    C.exports = function(C, I) {
        return C = E(C),
        C < 0 ? D(C + I, 0) : _(C, I)
    }
}
, function(C, I, T) {
    var E = T(48)("keys")
      , D = T(49);
    C.exports = function(C) {
        return E[C] || (E[C] = D(C))
    }
}
, function(C, I, T) {
    var E = T(20)
      , D = "__core-js_shared__"
      , _ = E[D] || (E[D] = {});
    C.exports = function(C) {
        return _[C] || (_[C] = {})
    }
}
, function(C, I) {
    var T = 0
      , E = Math.random();
    C.exports = function(C) {
        return "Symbol(".concat(void 0 === C ? "" : C, ")_", (++T + E).toString(36))
    }
}
, function(C, I) {
    C.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}
, function(C, I, T) {
    var E = T(20).document;
    C.exports = E && E.documentElement
}
, function(C, I, T) {
    var E = T(24).f
      , D = T(34)
      , _ = T(53)("toStringTag");
    C.exports = function(C, I, T) {
        C && !D(C = T ? C : C.prototype, _) && E(C, _, {
            configurable: !0,
            value: I
        })
    }
}
, function(C, I, T) {
    var E = T(48)("wks")
      , D = T(49)
      , _ = T(20).Symbol
      , O = "function" == typeof _
      , e = C.exports = function(C) {
        return E[C] || (E[C] = O && _[C] || (O ? _ : D)("Symbol." + C))
    }
    ;
    e.store = E
}
, function(C, I, T) {
    var E = T(34)
      , D = T(55)
      , _ = T(47)("IE_PROTO")
      , O = Object.prototype;
    C.exports = Object.getPrototypeOf || function(C) {
        return C = D(C),
        E(C, _) ? C[_] : "function" == typeof C.constructor && C instanceof C.constructor ? C.constructor.prototype : C instanceof Object ? O : null
    }
}
, function(C, I, T) {
    var E = T(16);
    C.exports = function(C) {
        return Object(E(C))
    }
}
, function(C, I, T) {
    "use strict";
    var E = T(21)
      , D = T(19)
      , _ = T(55)
      , O = T(57)
      , e = T(58)
      , S = T(45)
      , t = T(59)
      , R = T(60);
    D(D.S + D.F * !T(62)(function(C) {
        Array.from(C)
    }), "Array", {
        from: function(C) {
            var I, T, D, n, Y = _(C), N = "function" == typeof this ? this : Array, r = arguments.length, o = r > 1 ? arguments[1] : void 0, i = void 0 !== o, A = 0, M = R(Y);
            if (i && (o = E(o, r > 2 ? arguments[2] : void 0, 2)),
            void 0 == M || N == Array && e(M))
                for (I = S(Y.length),
                T = new N(I); I > A; A++)
                    t(T, A, i ? o(Y[A], A) : Y[A]);
            else
                for (n = M.call(Y),
                T = new N; !(D = n.next()).done; A++)
                    t(T, A, i ? O(n, o, [D.value, A], !0) : D.value);
            return T.length = A,
            T
        }
    })
}
, function(C, I, T) {
    var E = T(25);
    C.exports = function(C, I, T, D) {
        try {
            return D ? I(E(T)[0], T[1]) : I(T)
        } catch (I) {
            var _ = C.return;
            throw void 0 !== _ && E(_.call(C)),
            I
        }
    }
}
, function(C, I, T) {
    var E = T(35)
      , D = T(53)("iterator")
      , _ = Array.prototype;
    C.exports = function(C) {
        return void 0 !== C && (E.Array === C || _[D] === C)
    }
}
, function(C, I, T) {
    "use strict";
    var E = T(24)
      , D = T(32);
    C.exports = function(C, I, T) {
        I in C ? E.f(C, I, D(0, T)) : C[I] = T
    }
}
, function(C, I, T) {
    var E = T(61)
      , D = T(53)("iterator")
      , _ = T(35);
    C.exports = T(5).getIteratorMethod = function(C) {
        if (void 0 != C)
            return C[D] || C["@@iterator"] || _[E(C)]
    }
}
, function(C, I, T) {
    var E = T(43)
      , D = T(53)("toStringTag")
      , _ = "Arguments" == E(function() {
        return arguments
    }())
      , O = function(C, I) {
        try {
            return C[I]
        } catch (C) {}
    };
    C.exports = function(C) {
        var I, T, e;
        return void 0 === C ? "Undefined" : null === C ? "Null" : "string" == typeof (T = O(I = Object(C), D)) ? T : _ ? E(I) : "Object" == (e = E(I)) && "function" == typeof I.callee ? "Arguments" : e
    }
}
, function(C, I, T) {
    var E = T(53)("iterator")
      , D = !1;
    try {
        var _ = [7][E]();
        _.return = function() {
            D = !0
        }
        ,
        Array.from(_, function() {
            throw 2
        })
    } catch (C) {}
    C.exports = function(C, I) {
        if (!I && !D)
            return !1;
        var T = !1;
        try {
            var _ = [7]
              , O = _[E]();
            O.next = function() {
                return {
                    done: T = !0
                }
            }
            ,
            _[E] = function() {
                return O
            }
            ,
            C(_)
        } catch (C) {}
        return T
    }
}
, function(C, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    }),
    I.default = {
        PROVINCE_LIST: [{
            ESS_PROVINCE_CODE: "11",
            PROVINCE_CODE: "110000",
            PROVINCE_NAME: "鍖椾含"
        }, {
            ESS_PROVINCE_CODE: "13",
            PROVINCE_CODE: "120000",
            PROVINCE_NAME: "澶╂触"
        }, {
            ESS_PROVINCE_CODE: "18",
            PROVINCE_CODE: "130000",
            PROVINCE_NAME: "娌冲寳"
        }, {
            ESS_PROVINCE_CODE: "19",
            PROVINCE_CODE: "140000",
            PROVINCE_NAME: "灞辫タ"
        }, {
            ESS_PROVINCE_CODE: "10",
            PROVINCE_CODE: "150000",
            PROVINCE_NAME: "鍐呰挋鍙�"
        }, {
            ESS_PROVINCE_CODE: "91",
            PROVINCE_CODE: "210000",
            PROVINCE_NAME: "杈藉畞"
        }, {
            ESS_PROVINCE_CODE: "90",
            PROVINCE_CODE: "220000",
            PROVINCE_NAME: "鍚夋灄"
        }, {
            ESS_PROVINCE_CODE: "97",
            PROVINCE_CODE: "230000",
            PROVINCE_NAME: "榛戦緳姹�"
        }, {
            ESS_PROVINCE_CODE: "31",
            PROVINCE_CODE: "310000",
            PROVINCE_NAME: "涓婃捣"
        }, {
            ESS_PROVINCE_CODE: "34",
            PROVINCE_CODE: "320000",
            PROVINCE_NAME: "姹熻嫃"
        }, {
            ESS_PROVINCE_CODE: "36",
            PROVINCE_CODE: "330000",
            PROVINCE_NAME: "娴欐睙"
        }, {
            ESS_PROVINCE_CODE: "30",
            PROVINCE_CODE: "340000",
            PROVINCE_NAME: "瀹夊窘"
        }, {
            ESS_PROVINCE_CODE: "38",
            PROVINCE_CODE: "350000",
            PROVINCE_NAME: "绂忓缓"
        }, {
            ESS_PROVINCE_CODE: "75",
            PROVINCE_CODE: "360000",
            PROVINCE_NAME: "姹熻タ"
        }, {
            ESS_PROVINCE_CODE: "17",
            PROVINCE_CODE: "370000",
            PROVINCE_NAME: "灞变笢"
        }, {
            ESS_PROVINCE_CODE: "76",
            PROVINCE_CODE: "410000",
            PROVINCE_NAME: "娌冲崡"
        }, {
            ESS_PROVINCE_CODE: "71",
            PROVINCE_CODE: "420000",
            PROVINCE_NAME: "婀栧寳"
        }, {
            ESS_PROVINCE_CODE: "74",
            PROVINCE_CODE: "430000",
            PROVINCE_NAME: "婀栧崡"
        }, {
            ESS_PROVINCE_CODE: "51",
            PROVINCE_CODE: "440000",
            PROVINCE_NAME: "骞夸笢"
        }, {
            ESS_PROVINCE_CODE: "59",
            PROVINCE_CODE: "450000",
            PROVINCE_NAME: "骞胯タ"
        }, {
            ESS_PROVINCE_CODE: "50",
            PROVINCE_CODE: "460000",
            PROVINCE_NAME: "娴峰崡"
        }, {
            ESS_PROVINCE_CODE: "83",
            PROVINCE_CODE: "500000",
            PROVINCE_NAME: "閲嶅簡"
        }, {
            ESS_PROVINCE_CODE: "81",
            PROVINCE_CODE: "510000",
            PROVINCE_NAME: "鍥涘窛"
        }, {
            ESS_PROVINCE_CODE: "85",
            PROVINCE_CODE: "520000",
            PROVINCE_NAME: "璐靛窞"
        }, {
            ESS_PROVINCE_CODE: "86",
            PROVINCE_CODE: "530000",
            PROVINCE_NAME: "浜戝崡"
        }, {
            ESS_PROVINCE_CODE: "79",
            PROVINCE_CODE: "540000",
            PROVINCE_NAME: "瑗胯棌"
        }, {
            ESS_PROVINCE_CODE: "84",
            PROVINCE_CODE: "610000",
            PROVINCE_NAME: "闄曡タ"
        }, {
            ESS_PROVINCE_CODE: "87",
            PROVINCE_CODE: "620000",
            PROVINCE_NAME: "鐢樿們"
        }, {
            ESS_PROVINCE_CODE: "70",
            PROVINCE_CODE: "630000",
            PROVINCE_NAME: "闈掓捣"
        }, {
            ESS_PROVINCE_CODE: "88",
            PROVINCE_CODE: "640000",
            PROVINCE_NAME: "瀹佸"
        }, {
            ESS_PROVINCE_CODE: "89",
            PROVINCE_CODE: "650000",
            PROVINCE_NAME: "鏂扮枂"
        }],
        PROVINCE_MAP: {
            110000: [{
                CITY_CODE: "110100",
                CITY_NAME: "鍖椾含甯�",
                ESS_CITY_CODE: "110",
                PROVINCE_CODE: "110000"
            }],
            120000: [{
                CITY_CODE: "120100",
                CITY_NAME: "澶╂触甯�",
                ESS_CITY_CODE: "130",
                PROVINCE_CODE: "120000"
            }],
            130000: [{
                CITY_CODE: "130100",
                CITY_NAME: "鐭冲搴勫競",
                ESS_CITY_CODE: "188",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130200",
                CITY_NAME: "鍞愬北甯�",
                ESS_CITY_CODE: "181",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130300",
                CITY_NAME: "绉︾殗宀涘競",
                ESS_CITY_CODE: "182",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130400",
                CITY_NAME: "閭兏甯�",
                ESS_CITY_CODE: "186",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130500",
                CITY_NAME: "閭㈠彴甯�",
                ESS_CITY_CODE: "185",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130600",
                CITY_NAME: "淇濆畾甯�",
                ESS_CITY_CODE: "187",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130700",
                CITY_NAME: "寮犲鍙ｅ競",
                ESS_CITY_CODE: "184",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130800",
                CITY_NAME: "鎵垮痉甯�",
                ESS_CITY_CODE: "189",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130900",
                CITY_NAME: "娌у窞甯�",
                ESS_CITY_CODE: "180",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "131000",
                CITY_NAME: "寤婂潑甯�",
                ESS_CITY_CODE: "183",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "131100",
                CITY_NAME: "琛℃按甯�",
                ESS_CITY_CODE: "720",
                PROVINCE_CODE: "130000"
            }],
            140000: [{
                CITY_CODE: "140100",
                CITY_NAME: "澶師甯�",
                ESS_CITY_CODE: "190",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140200",
                CITY_NAME: "澶у悓甯�",
                ESS_CITY_CODE: "193",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140300",
                CITY_NAME: "闃虫硥甯�",
                ESS_CITY_CODE: "192",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140400",
                CITY_NAME: "闀挎不甯�",
                ESS_CITY_CODE: "195",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140500",
                CITY_NAME: "鏅嬪煄甯�",
                ESS_CITY_CODE: "194",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140600",
                CITY_NAME: "鏈斿窞甯�",
                ESS_CITY_CODE: "199",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140700",
                CITY_NAME: "鏅嬩腑甯�",
                ESS_CITY_CODE: "191",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140800",
                CITY_NAME: "杩愬煄甯�",
                ESS_CITY_CODE: "196",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140900",
                CITY_NAME: "蹇诲窞甯�",
                ESS_CITY_CODE: "198",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "141000",
                CITY_NAME: "涓存本甯�",
                ESS_CITY_CODE: "197",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "141100",
                CITY_NAME: "鍚曟甯�",
                ESS_CITY_CODE: "200",
                PROVINCE_CODE: "140000"
            }],
            150000: [{
                CITY_CODE: "150100",
                CITY_NAME: "鍛煎拰娴╃壒甯�",
                ESS_CITY_CODE: "101",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150200",
                CITY_NAME: "鍖呭ご甯�",
                ESS_CITY_CODE: "102",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150300",
                CITY_NAME: "涔屾捣甯�",
                ESS_CITY_CODE: "106",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150400",
                CITY_NAME: "璧ゅ嘲甯�",
                ESS_CITY_CODE: "107",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150500",
                CITY_NAME: "閫氳窘甯�",
                ESS_CITY_CODE: "109",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150600",
                CITY_NAME: "閯傚皵澶氭柉甯�",
                ESS_CITY_CODE: "104",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150700",
                CITY_NAME: "鍛间鸡璐濆皵甯�",
                ESS_CITY_CODE: "108",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150800",
                CITY_NAME: "宸村溅娣栧皵甯�",
                ESS_CITY_CODE: "105",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150900",
                CITY_NAME: "涔屽叞瀵熷竷甯�",
                ESS_CITY_CODE: "103",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "152200",
                CITY_NAME: "鍏村畨鐩�",
                ESS_CITY_CODE: "113",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "152500",
                CITY_NAME: "閿℃灄閮嫆鐩�",
                ESS_CITY_CODE: "111",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "152900",
                CITY_NAME: "闃挎媺鍠勭洘",
                ESS_CITY_CODE: "114",
                PROVINCE_CODE: "150000"
            }],
            210000: [{
                CITY_CODE: "210100",
                CITY_NAME: "娌堥槼甯�",
                ESS_CITY_CODE: "910",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210200",
                CITY_NAME: "澶ц繛甯�",
                ESS_CITY_CODE: "940",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210300",
                CITY_NAME: "闉嶅北甯�",
                ESS_CITY_CODE: "912",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210400",
                CITY_NAME: "鎶氶『甯�",
                ESS_CITY_CODE: "913",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210500",
                CITY_NAME: "鏈邯甯�",
                ESS_CITY_CODE: "914",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210600",
                CITY_NAME: "涓逛笢甯�",
                ESS_CITY_CODE: "915",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210700",
                CITY_NAME: "閿﹀窞甯�",
                ESS_CITY_CODE: "916",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210800",
                CITY_NAME: "钀ュ彛甯�",
                ESS_CITY_CODE: "917",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210900",
                CITY_NAME: "闃滄柊甯�",
                ESS_CITY_CODE: "918",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211000",
                CITY_NAME: "杈介槼甯�",
                ESS_CITY_CODE: "919",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211100",
                CITY_NAME: "鐩橀敠甯�",
                ESS_CITY_CODE: "921",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211200",
                CITY_NAME: "閾佸箔甯�",
                ESS_CITY_CODE: "911",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211300",
                CITY_NAME: "鏈濋槼甯�",
                ESS_CITY_CODE: "920",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211400",
                CITY_NAME: "钁姦宀涘競",
                ESS_CITY_CODE: "922",
                PROVINCE_CODE: "210000"
            }],
            220000: [{
                CITY_CODE: "220100",
                CITY_NAME: "闀挎槬甯�",
                ESS_CITY_CODE: "901",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220200",
                CITY_NAME: "鍚夋灄甯�",
                ESS_CITY_CODE: "902",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220300",
                CITY_NAME: "鍥涘钩甯�",
                ESS_CITY_CODE: "903",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220400",
                CITY_NAME: "杈芥簮甯�",
                ESS_CITY_CODE: "906",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220500",
                CITY_NAME: "閫氬寲甯�",
                ESS_CITY_CODE: "905",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220600",
                CITY_NAME: "鐧藉北甯�",
                ESS_CITY_CODE: "908",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220700",
                CITY_NAME: "鏉惧師甯�",
                ESS_CITY_CODE: "904",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220800",
                CITY_NAME: "鐧藉煄甯�",
                ESS_CITY_CODE: "907",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "222400",
                CITY_NAME: "寤惰竟鏈濋矞鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "909",
                PROVINCE_CODE: "220000"
            }],
            230000: [{
                CITY_CODE: "230100",
                CITY_NAME: "鍝堝皵婊ㄥ競",
                ESS_CITY_CODE: "971",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230200",
                CITY_NAME: "榻愰綈鍝堝皵甯�",
                ESS_CITY_CODE: "973",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230300",
                CITY_NAME: "楦¤タ甯�",
                ESS_CITY_CODE: "991",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230400",
                CITY_NAME: "楣ゅ矖甯�",
                ESS_CITY_CODE: "993",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230500",
                CITY_NAME: "鍙岄腑灞卞競",
                ESS_CITY_CODE: "994",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230600",
                CITY_NAME: "澶у簡甯�",
                ESS_CITY_CODE: "981",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230700",
                CITY_NAME: "浼婃槬甯�",
                ESS_CITY_CODE: "996",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230800",
                CITY_NAME: "浣虫湪鏂競",
                ESS_CITY_CODE: "976",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230900",
                CITY_NAME: "涓冨彴娌冲競",
                ESS_CITY_CODE: "992",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "231000",
                CITY_NAME: "鐗′腹姹熷競",
                ESS_CITY_CODE: "988",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "231100",
                CITY_NAME: "榛戞渤甯�",
                ESS_CITY_CODE: "990",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "231200",
                CITY_NAME: "缁ュ寲甯�",
                ESS_CITY_CODE: "989",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "232700",
                CITY_NAME: "澶у叴瀹夊箔鍦板尯",
                ESS_CITY_CODE: "995",
                PROVINCE_CODE: "230000"
            }],
            310000: [{
                CITY_CODE: "310100",
                CITY_NAME: "涓婃捣甯�",
                ESS_CITY_CODE: "310",
                PROVINCE_CODE: "310000"
            }],
            320000: [{
                CITY_CODE: "320100",
                CITY_NAME: "鍗椾含甯�",
                ESS_CITY_CODE: "340",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320200",
                CITY_NAME: "鏃犻敗甯�",
                ESS_CITY_CODE: "330",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320300",
                CITY_NAME: "寰愬窞甯�",
                ESS_CITY_CODE: "350",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320400",
                CITY_NAME: "甯稿窞甯�",
                ESS_CITY_CODE: "440",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320500",
                CITY_NAME: "鑻忓窞甯�",
                ESS_CITY_CODE: "450",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320600",
                CITY_NAME: "鍗楅€氬競",
                ESS_CITY_CODE: "358",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320700",
                CITY_NAME: "杩炰簯娓競",
                ESS_CITY_CODE: "346",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320800",
                CITY_NAME: "娣畨甯�",
                ESS_CITY_CODE: "354",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320900",
                CITY_NAME: "鐩愬煄甯�",
                ESS_CITY_CODE: "348",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321000",
                CITY_NAME: "鎵窞甯�",
                ESS_CITY_CODE: "430",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321100",
                CITY_NAME: "闀囨睙甯�",
                ESS_CITY_CODE: "343",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321200",
                CITY_NAME: "娉板窞甯�",
                ESS_CITY_CODE: "445",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321300",
                CITY_NAME: "瀹胯縼甯�",
                ESS_CITY_CODE: "349",
                PROVINCE_CODE: "320000"
            }],
            330000: [{
                CITY_CODE: "330100",
                CITY_NAME: "鏉窞甯�",
                ESS_CITY_CODE: "360",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330200",
                CITY_NAME: "瀹佹尝甯�",
                ESS_CITY_CODE: "370",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330300",
                CITY_NAME: "娓╁窞甯�",
                ESS_CITY_CODE: "470",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330400",
                CITY_NAME: "鍢夊叴甯�",
                ESS_CITY_CODE: "363",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330500",
                CITY_NAME: "婀栧窞甯�",
                ESS_CITY_CODE: "362",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330600",
                CITY_NAME: "缁嶅叴甯�",
                ESS_CITY_CODE: "365",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330700",
                CITY_NAME: "閲戝崕甯�",
                ESS_CITY_CODE: "367",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330800",
                CITY_NAME: "琛㈠窞甯�",
                ESS_CITY_CODE: "468",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330900",
                CITY_NAME: "鑸熷北甯�",
                ESS_CITY_CODE: "364",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "331000",
                CITY_NAME: "鍙板窞甯�",
                ESS_CITY_CODE: "476",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "331100",
                CITY_NAME: "涓芥按甯�",
                ESS_CITY_CODE: "469",
                PROVINCE_CODE: "330000"
            }],
            340000: [{
                CITY_CODE: "340100",
                CITY_NAME: "鍚堣偉甯�",
                ESS_CITY_CODE: "305",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340200",
                CITY_NAME: "鑺滄箹甯�",
                ESS_CITY_CODE: "303",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340300",
                CITY_NAME: "铓屽煚甯�",
                ESS_CITY_CODE: "301",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340400",
                CITY_NAME: "娣崡甯�",
                ESS_CITY_CODE: "307",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340500",
                CITY_NAME: "椹瀺灞卞競",
                ESS_CITY_CODE: "300",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340600",
                CITY_NAME: "娣寳甯�",
                ESS_CITY_CODE: "314",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340700",
                CITY_NAME: "閾滈櫟甯�",
                ESS_CITY_CODE: "308",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340800",
                CITY_NAME: "瀹夊簡甯�",
                ESS_CITY_CODE: "302",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341000",
                CITY_NAME: "榛勫北甯�",
                ESS_CITY_CODE: "316",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341100",
                CITY_NAME: "婊佸窞甯�",
                ESS_CITY_CODE: "312",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341200",
                CITY_NAME: "闃滈槼甯�",
                ESS_CITY_CODE: "306",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341300",
                CITY_NAME: "瀹垮窞甯�",
                ESS_CITY_CODE: "313",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341500",
                CITY_NAME: "鍏畨甯�",
                ESS_CITY_CODE: "304",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341600",
                CITY_NAME: "浜冲窞甯�",
                ESS_CITY_CODE: "318",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341700",
                CITY_NAME: "姹犲窞甯�",
                ESS_CITY_CODE: "317",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341800",
                CITY_NAME: "瀹ｅ煄甯�",
                ESS_CITY_CODE: "311",
                PROVINCE_CODE: "340000"
            }],
            350000: [{
                CITY_CODE: "350100",
                CITY_NAME: "绂忓窞甯�",
                ESS_CITY_CODE: "380",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350200",
                CITY_NAME: "鍘﹂棬甯�",
                ESS_CITY_CODE: "390",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350300",
                CITY_NAME: "鑾嗙敯甯�",
                ESS_CITY_CODE: "385",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350400",
                CITY_NAME: "涓夋槑甯�",
                ESS_CITY_CODE: "389",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350500",
                CITY_NAME: "娉夊窞甯�",
                ESS_CITY_CODE: "480",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350600",
                CITY_NAME: "婕冲窞甯�",
                ESS_CITY_CODE: "395",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350700",
                CITY_NAME: "鍗楀钩甯�",
                ESS_CITY_CODE: "387",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350800",
                CITY_NAME: "榫欏博甯�",
                ESS_CITY_CODE: "384",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350900",
                CITY_NAME: "瀹佸痉甯�",
                ESS_CITY_CODE: "386",
                PROVINCE_CODE: "350000"
            }],
            360000: [{
                CITY_CODE: "360100",
                CITY_NAME: "鍗楁槍甯�",
                ESS_CITY_CODE: "750",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360200",
                CITY_NAME: "鏅痉闀囧競",
                ESS_CITY_CODE: "740",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360300",
                CITY_NAME: "钀嶄埂甯�",
                ESS_CITY_CODE: "758",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360400",
                CITY_NAME: "涔濇睙甯�",
                ESS_CITY_CODE: "755",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360500",
                CITY_NAME: "鏂颁綑甯�",
                ESS_CITY_CODE: "753",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360600",
                CITY_NAME: "楣版江甯�",
                ESS_CITY_CODE: "754",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360700",
                CITY_NAME: "璧ｅ窞甯�",
                ESS_CITY_CODE: "752",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360800",
                CITY_NAME: "鍚夊畨甯�",
                ESS_CITY_CODE: "751",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360900",
                CITY_NAME: "瀹滄槬甯�",
                ESS_CITY_CODE: "756",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "361000",
                CITY_NAME: "鎶氬窞甯�",
                ESS_CITY_CODE: "759",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "361100",
                CITY_NAME: "涓婇ザ甯�",
                ESS_CITY_CODE: "757",
                PROVINCE_CODE: "360000"
            }],
            370000: [{
                CITY_CODE: "370100",
                CITY_NAME: "娴庡崡甯�",
                ESS_CITY_CODE: "170",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370200",
                CITY_NAME: "闈掑矝甯�",
                ESS_CITY_CODE: "166",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370300",
                CITY_NAME: "娣勫崥甯�",
                ESS_CITY_CODE: "150",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370400",
                CITY_NAME: "鏋ｅ簞甯�",
                ESS_CITY_CODE: "157",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370500",
                CITY_NAME: "涓滆惀甯�",
                ESS_CITY_CODE: "156",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370600",
                CITY_NAME: "鐑熷彴甯�",
                ESS_CITY_CODE: "161",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370700",
                CITY_NAME: "娼嶅潑甯�",
                ESS_CITY_CODE: "155",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370800",
                CITY_NAME: "娴庡畞甯�",
                ESS_CITY_CODE: "158",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370900",
                CITY_NAME: "娉板畨甯�",
                ESS_CITY_CODE: "172",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371000",
                CITY_NAME: "濞佹捣甯�",
                ESS_CITY_CODE: "152",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371100",
                CITY_NAME: "鏃ョ収甯�",
                ESS_CITY_CODE: "154",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371200",
                CITY_NAME: "鑾辫姕甯�",
                ESS_CITY_CODE: "160",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371300",
                CITY_NAME: "涓存矀甯�",
                ESS_CITY_CODE: "153",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371400",
                CITY_NAME: "寰峰窞甯�",
                ESS_CITY_CODE: "173",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371500",
                CITY_NAME: "鑱婂煄甯�",
                ESS_CITY_CODE: "174",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371600",
                CITY_NAME: "婊ㄥ窞甯�",
                ESS_CITY_CODE: "151",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371700",
                CITY_NAME: "鑿忔辰甯�",
                ESS_CITY_CODE: "159",
                PROVINCE_CODE: "370000"
            }],
            410000: [{
                CITY_CODE: "410100",
                CITY_NAME: "閮戝窞甯�",
                ESS_CITY_CODE: "760",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410200",
                CITY_NAME: "寮€灏佸競",
                ESS_CITY_CODE: "762",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410300",
                CITY_NAME: "娲涢槼甯�",
                ESS_CITY_CODE: "761",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410400",
                CITY_NAME: "骞抽《灞卞競",
                ESS_CITY_CODE: "769",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410500",
                CITY_NAME: "瀹夐槼甯�",
                ESS_CITY_CODE: "767",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410600",
                CITY_NAME: "楣ゅ甯�",
                ESS_CITY_CODE: "774",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410700",
                CITY_NAME: "鏂颁埂甯�",
                ESS_CITY_CODE: "764",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410800",
                CITY_NAME: "鐒︿綔甯�",
                ESS_CITY_CODE: "763",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410900",
                CITY_NAME: "婵槼甯�",
                ESS_CITY_CODE: "773",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411000",
                CITY_NAME: "璁告槍甯�",
                ESS_CITY_CODE: "765",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411100",
                CITY_NAME: "婕渤甯�",
                ESS_CITY_CODE: "766",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411200",
                CITY_NAME: "涓夐棬宄″競",
                ESS_CITY_CODE: "772",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411300",
                CITY_NAME: "鍗楅槼甯�",
                ESS_CITY_CODE: "777",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411400",
                CITY_NAME: "鍟嗕笜甯�",
                ESS_CITY_CODE: "768",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411500",
                CITY_NAME: "淇￠槼甯�",
                ESS_CITY_CODE: "776",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411600",
                CITY_NAME: "鍛ㄥ彛甯�",
                ESS_CITY_CODE: "770",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411700",
                CITY_NAME: "椹婚┈搴楀競",
                ESS_CITY_CODE: "771",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "419001",
                CITY_NAME: "娴庢簮甯�",
                ESS_CITY_CODE: "775",
                PROVINCE_CODE: "410000"
            }],
            420000: [{
                CITY_CODE: "420100",
                CITY_NAME: "姝︽眽甯�",
                ESS_CITY_CODE: "710",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420200",
                CITY_NAME: "榛勭煶甯�",
                ESS_CITY_CODE: "715",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420300",
                CITY_NAME: "鍗佸牥甯�",
                ESS_CITY_CODE: "721",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420500",
                CITY_NAME: "瀹滄槍甯�",
                ESS_CITY_CODE: "711",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420600",
                CITY_NAME: "瑗勯槼甯�",
                ESS_CITY_CODE: "716",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420700",
                CITY_NAME: "閯傚窞甯�",
                ESS_CITY_CODE: "718",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420800",
                CITY_NAME: "鑽嗛棬甯�",
                ESS_CITY_CODE: "724",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420900",
                CITY_NAME: "瀛濇劅甯�",
                ESS_CITY_CODE: "717",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421000",
                CITY_NAME: "鑽嗗窞甯�",
                ESS_CITY_CODE: "712",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421100",
                CITY_NAME: "榛勫唸甯�",
                ESS_CITY_CODE: "714",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421200",
                CITY_NAME: "鍜稿畞甯�",
                ESS_CITY_CODE: "719",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421300",
                CITY_NAME: "闅忓窞甯�",
                ESS_CITY_CODE: "723",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "422800",
                CITY_NAME: "鎭╂柦鍦熷鏃忚嫍鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "727",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "429004",
                CITY_NAME: "浠欐甯�",
                ESS_CITY_CODE: "713",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "429005",
                CITY_NAME: "娼滄睙甯�",
                ESS_CITY_CODE: "713",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "429006",
                CITY_NAME: "澶╅棬甯�",
                ESS_CITY_CODE: "713",
                PROVINCE_CODE: "420000"
            }],
            430000: [{
                CITY_CODE: "430100",
                CITY_NAME: "闀挎矙甯�",
                ESS_CITY_CODE: "741",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430200",
                CITY_NAME: "鏍床甯�",
                ESS_CITY_CODE: "742",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430300",
                CITY_NAME: "婀樻江甯�",
                ESS_CITY_CODE: "743",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430400",
                CITY_NAME: "琛￠槼甯�",
                ESS_CITY_CODE: "744",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430500",
                CITY_NAME: "閭甸槼甯�",
                ESS_CITY_CODE: "792",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430600",
                CITY_NAME: "宀抽槼甯�",
                ESS_CITY_CODE: "745",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430700",
                CITY_NAME: "甯稿痉甯�",
                ESS_CITY_CODE: "749",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430800",
                CITY_NAME: "寮犲鐣屽競",
                ESS_CITY_CODE: "794",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430900",
                CITY_NAME: "鐩婇槼甯�",
                ESS_CITY_CODE: "747",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431000",
                CITY_NAME: "閮村窞甯�",
                ESS_CITY_CODE: "748",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431100",
                CITY_NAME: "姘稿窞甯�",
                ESS_CITY_CODE: "796",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431200",
                CITY_NAME: "鎬€鍖栧競",
                ESS_CITY_CODE: "795",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431300",
                CITY_NAME: "濞勫簳甯�",
                ESS_CITY_CODE: "791",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "433100",
                CITY_NAME: "婀樿タ鍦熷鏃忚嫍鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "793",
                PROVINCE_CODE: "430000"
            }],
            440000: [{
                CITY_CODE: "440100",
                CITY_NAME: "骞垮窞甯�",
                ESS_CITY_CODE: "510",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440300",
                CITY_NAME: "娣卞湷甯�",
                ESS_CITY_CODE: "540",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441900",
                CITY_NAME: "涓滆帪甯�",
                ESS_CITY_CODE: "580",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440600",
                CITY_NAME: "浣涘北甯�",
                ESS_CITY_CODE: "530",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441300",
                CITY_NAME: "鎯犲窞甯�",
                ESS_CITY_CODE: "570",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440400",
                CITY_NAME: "鐝犳捣甯�",
                ESS_CITY_CODE: "620",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "442000",
                CITY_NAME: "涓北甯�",
                ESS_CITY_CODE: "556",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440700",
                CITY_NAME: "姹熼棬甯�",
                ESS_CITY_CODE: "550",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440500",
                CITY_NAME: "姹曞ご甯�",
                ESS_CITY_CODE: "560",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440800",
                CITY_NAME: "婀涙睙甯�",
                ESS_CITY_CODE: "520",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "445200",
                CITY_NAME: "鎻槼甯�",
                ESS_CITY_CODE: "526",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441200",
                CITY_NAME: "鑲囧簡甯�",
                ESS_CITY_CODE: "536",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441800",
                CITY_NAME: "娓呰繙甯�",
                ESS_CITY_CODE: "535",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440200",
                CITY_NAME: "闊跺叧甯�",
                ESS_CITY_CODE: "558",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "445100",
                CITY_NAME: "娼窞甯�",
                ESS_CITY_CODE: "531",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440900",
                CITY_NAME: "鑼傚悕甯�",
                ESS_CITY_CODE: "568",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441600",
                CITY_NAME: "娌虫簮甯�",
                ESS_CITY_CODE: "670",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441500",
                CITY_NAME: "姹曞熬甯�",
                ESS_CITY_CODE: "525",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441700",
                CITY_NAME: "闃虫睙甯�",
                ESS_CITY_CODE: "565",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441400",
                CITY_NAME: "姊呭窞甯�",
                ESS_CITY_CODE: "528",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "445300",
                CITY_NAME: "浜戞诞甯�",
                ESS_CITY_CODE: "538",
                PROVINCE_CODE: "440000"
            }],
            450000: [{
                CITY_CODE: "450100",
                CITY_NAME: "鍗楀畞甯�",
                ESS_CITY_CODE: "591",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450200",
                CITY_NAME: "鏌冲窞甯�",
                ESS_CITY_CODE: "593",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450300",
                CITY_NAME: "妗傛灄甯�",
                ESS_CITY_CODE: "592",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450400",
                CITY_NAME: "姊у窞甯�",
                ESS_CITY_CODE: "594",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450500",
                CITY_NAME: "鍖楁捣甯�",
                ESS_CITY_CODE: "599",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450600",
                CITY_NAME: "闃插煄娓競",
                ESS_CITY_CODE: "590",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450700",
                CITY_NAME: "閽﹀窞甯�",
                ESS_CITY_CODE: "597",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450800",
                CITY_NAME: "璐垫腐甯�",
                ESS_CITY_CODE: "589",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450900",
                CITY_NAME: "鐜夋灄甯�",
                ESS_CITY_CODE: "595",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451000",
                CITY_NAME: "鐧捐壊甯�",
                ESS_CITY_CODE: "596",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451100",
                CITY_NAME: "璐哄窞甯�",
                ESS_CITY_CODE: "588",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451200",
                CITY_NAME: "娌虫睜甯�",
                ESS_CITY_CODE: "598",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451300",
                CITY_NAME: "鏉ュ甯�",
                ESS_CITY_CODE: "601",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451400",
                CITY_NAME: "宕囧乏甯�",
                ESS_CITY_CODE: "600",
                PROVINCE_CODE: "450000"
            }],
            460000: [{
                CITY_CODE: "460100",
                CITY_NAME: "娴峰彛甯�",
                ESS_CITY_CODE: "501",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460200",
                CITY_NAME: "涓変簹甯�",
                ESS_CITY_CODE: "502",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460300",
                CITY_NAME: "鐞兼捣甯�",
                ESS_CITY_CODE: "A04",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460400",
                CITY_NAME: "鍎嬪窞甯�",
                ESS_CITY_CODE: "503",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460500",
                CITY_NAME: "涓滄柟甯�",
                ESS_CITY_CODE: "A16",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460600",
                CITY_NAME: "涓囧畞甯�",
                ESS_CITY_CODE: "A07",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460700",
                CITY_NAME: "浜旀寚灞卞競",
                ESS_CITY_CODE: "A13",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460800",
                CITY_NAME: "鏂囨槍甯�",
                ESS_CITY_CODE: "A06",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460900",
                CITY_NAME: "鏄屾睙鍘�",
                ESS_CITY_CODE: "A15",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461000",
                CITY_NAME: "涓撮珮鍘�",
                ESS_CITY_CODE: "A18",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461100",
                CITY_NAME: "瀹氬畨鍘�",
                ESS_CITY_CODE: "A01",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461200",
                CITY_NAME: "鐞间腑鍘�",
                ESS_CITY_CODE: "A08",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461300",
                CITY_NAME: "闄垫按鍘�",
                ESS_CITY_CODE: "A11",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461400",
                CITY_NAME: "涔愪笢鍘�",
                ESS_CITY_CODE: "A10",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461500",
                CITY_NAME: "鐧芥矙鍘�",
                ESS_CITY_CODE: "A14",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461600",
                CITY_NAME: "灞槍鍘�",
                ESS_CITY_CODE: "A05",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461700",
                CITY_NAME: "婢勮繄鍘�",
                ESS_CITY_CODE: "A02",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461800",
                CITY_NAME: "淇濅涵鍘�",
                ESS_CITY_CODE: "A09",
                PROVINCE_CODE: "460000"
            }],
            500000: [{
                CITY_CODE: "500100",
                CITY_NAME: "閲嶅簡甯�",
                ESS_CITY_CODE: "831",
                PROVINCE_CODE: "500000"
            }],
            510000: [{
                CITY_CODE: "510100",
                CITY_NAME: "鎴愰兘甯�",
                ESS_CITY_CODE: "810",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511300",
                CITY_NAME: "鍗楀厖甯�",
                ESS_CITY_CODE: "822",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511500",
                CITY_NAME: "瀹滃甯�",
                ESS_CITY_CODE: "817",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510700",
                CITY_NAME: "缁甸槼甯�",
                ESS_CITY_CODE: "824",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511700",
                CITY_NAME: "杈惧窞甯�",
                ESS_CITY_CODE: "820",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511100",
                CITY_NAME: "涔愬北甯�",
                ESS_CITY_CODE: "814",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510500",
                CITY_NAME: "娉稿窞甯�",
                ESS_CITY_CODE: "815",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510600",
                CITY_NAME: "寰烽槼甯�",
                ESS_CITY_CODE: "825",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510300",
                CITY_NAME: "鑷础甯�",
                ESS_CITY_CODE: "818",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511000",
                CITY_NAME: "鍐呮睙甯�",
                ESS_CITY_CODE: "816",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511900",
                CITY_NAME: "宸翠腑甯�",
                ESS_CITY_CODE: "827",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511600",
                CITY_NAME: "骞垮畨甯�",
                ESS_CITY_CODE: "823",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511400",
                CITY_NAME: "鐪夊北甯�",
                ESS_CITY_CODE: "819",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510800",
                CITY_NAME: "骞垮厓甯�",
                ESS_CITY_CODE: "826",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "512000",
                CITY_NAME: "璧勯槼甯�",
                ESS_CITY_CODE: "830",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510900",
                CITY_NAME: "閬傚畞甯�",
                ESS_CITY_CODE: "821",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511800",
                CITY_NAME: "闆呭畨甯�",
                ESS_CITY_CODE: "811",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510400",
                CITY_NAME: "鏀€鏋濊姳甯�",
                ESS_CITY_CODE: "813",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "513400",
                CITY_NAME: "鍑夊北褰濇棌鑷不宸�",
                ESS_CITY_CODE: "812",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "513200",
                CITY_NAME: "闃垮潩钘忔棌缇屾棌鑷不宸�",
                ESS_CITY_CODE: "829",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "513300",
                CITY_NAME: "鐢樺瓬钘忔棌鑷不宸�",
                ESS_CITY_CODE: "828",
                PROVINCE_CODE: "510000"
            }],
            520000: [{
                CITY_CODE: "520100",
                CITY_NAME: "璐甸槼甯�",
                ESS_CITY_CODE: "850",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520200",
                CITY_NAME: "鍏洏姘村競",
                ESS_CITY_CODE: "853",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520300",
                CITY_NAME: "閬典箟甯�",
                ESS_CITY_CODE: "787",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520400",
                CITY_NAME: "瀹夐『甯�",
                ESS_CITY_CODE: "789",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520500",
                CITY_NAME: "姣曡妭甯�",
                ESS_CITY_CODE: "851",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520600",
                CITY_NAME: "閾滀粊甯�",
                ESS_CITY_CODE: "785",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522300",
                CITY_NAME: "榛旇タ鍗�",
                ESS_CITY_CODE: "852",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522600",
                CITY_NAME: "榛斾笢鍗�",
                ESS_CITY_CODE: "786",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522700",
                CITY_NAME: "榛斿崡",
                ESS_CITY_CODE: "788",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522800",
                CITY_NAME: "璐靛畨",
                ESS_CITY_CODE: "854",
                PROVINCE_CODE: "520000"
            }],
            530000: [{
                CITY_CODE: "530100",
                CITY_NAME: "鏄嗘槑甯�",
                ESS_CITY_CODE: "860",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530300",
                CITY_NAME: "鏇查潠甯�",
                ESS_CITY_CODE: "866",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530400",
                CITY_NAME: "鐜夋邯甯�",
                ESS_CITY_CODE: "865",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530500",
                CITY_NAME: "淇濆北甯�",
                ESS_CITY_CODE: "731",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530600",
                CITY_NAME: "鏄€氬競",
                ESS_CITY_CODE: "867",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530700",
                CITY_NAME: "涓芥睙甯�",
                ESS_CITY_CODE: "863",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530800",
                CITY_NAME: "鏅幢甯�",
                ESS_CITY_CODE: "869",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530900",
                CITY_NAME: "涓存钵甯�",
                ESS_CITY_CODE: "733",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532300",
                CITY_NAME: "妤氶泟褰濇棌鑷不宸�",
                ESS_CITY_CODE: "864",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532500",
                CITY_NAME: "绾㈡渤鍝堝凹鏃忓綕鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "861",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532600",
                CITY_NAME: "鏂囧北宸�",
                ESS_CITY_CODE: "732",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532800",
                CITY_NAME: "瑗垮弻鐗堢撼鍌ｆ棌鑷不宸�",
                ESS_CITY_CODE: "736",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532900",
                CITY_NAME: "澶х悊鐧芥棌鑷不宸�",
                ESS_CITY_CODE: "862",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "533100",
                CITY_NAME: "寰峰畯鍌ｆ棌鏅鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "730",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "533300",
                CITY_NAME: "鎬掓睙鍌堝兂鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "734",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "533400",
                CITY_NAME: "杩簡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "735",
                PROVINCE_CODE: "530000"
            }],
            540000: [{
                CITY_CODE: "540100",
                CITY_NAME: "鎷夎惃甯�",
                ESS_CITY_CODE: "790",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542100",
                CITY_NAME: "鏄岄兘鍦板尯",
                ESS_CITY_CODE: "800",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542200",
                CITY_NAME: "灞卞崡鍦板尯",
                ESS_CITY_CODE: "798",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542300",
                CITY_NAME: "鏃ュ杸鍒欏湴鍖�",
                ESS_CITY_CODE: "797",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542400",
                CITY_NAME: "閭ｆ洸鍦板尯",
                ESS_CITY_CODE: "801",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542500",
                CITY_NAME: "闃块噷鍦板尯",
                ESS_CITY_CODE: "802",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542600",
                CITY_NAME: "鏋楄姖鍦板尯",
                ESS_CITY_CODE: "799",
                PROVINCE_CODE: "540000"
            }],
            610000: [{
                CITY_CODE: "610100",
                CITY_NAME: "瑗垮畨甯�",
                ESS_CITY_CODE: "841",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610200",
                CITY_NAME: "閾滃窛甯�",
                ESS_CITY_CODE: "846",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610300",
                CITY_NAME: "瀹濋浮甯�",
                ESS_CITY_CODE: "840",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610400",
                CITY_NAME: "鍜搁槼甯�",
                ESS_CITY_CODE: "844",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610500",
                CITY_NAME: "娓崡甯�",
                ESS_CITY_CODE: "843",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610600",
                CITY_NAME: "寤跺畨甯�",
                ESS_CITY_CODE: "842",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610700",
                CITY_NAME: "姹変腑甯�",
                ESS_CITY_CODE: "849",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610800",
                CITY_NAME: "姒嗘灄甯�",
                ESS_CITY_CODE: "845",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610900",
                CITY_NAME: "瀹夊悍甯�",
                ESS_CITY_CODE: "848",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "611000",
                CITY_NAME: "鍟嗘礇甯�",
                ESS_CITY_CODE: "847",
                PROVINCE_CODE: "610000"
            }],
            620000: [{
                CITY_CODE: "620100",
                CITY_NAME: "鍏板窞甯�",
                ESS_CITY_CODE: "870",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620200",
                CITY_NAME: "鍢夊唱鍏冲競",
                ESS_CITY_CODE: "876",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620300",
                CITY_NAME: "閲戞槍甯�",
                ESS_CITY_CODE: "930",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620400",
                CITY_NAME: "鐧介摱甯�",
                ESS_CITY_CODE: "879",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620500",
                CITY_NAME: "澶╂按甯�",
                ESS_CITY_CODE: "877",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620600",
                CITY_NAME: "姝﹀▉甯�",
                ESS_CITY_CODE: "874",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620700",
                CITY_NAME: "寮犳帠甯�",
                ESS_CITY_CODE: "875",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620800",
                CITY_NAME: "骞冲噳甯�",
                ESS_CITY_CODE: "872",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620900",
                CITY_NAME: "閰掓硥甯�",
                ESS_CITY_CODE: "931",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "621000",
                CITY_NAME: "搴嗛槼甯�",
                ESS_CITY_CODE: "873",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "621100",
                CITY_NAME: "瀹氳タ甯�",
                ESS_CITY_CODE: "871",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "621200",
                CITY_NAME: "闄囧崡甯�",
                ESS_CITY_CODE: "960",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "622900",
                CITY_NAME: "涓村鍥炴棌鑷不宸�",
                ESS_CITY_CODE: "878",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "623000",
                CITY_NAME: "鐢樺崡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "961",
                PROVINCE_CODE: "620000"
            }],
            630000: [{
                CITY_CODE: "630100",
                CITY_NAME: "瑗垮畞甯�",
                ESS_CITY_CODE: "700",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632100",
                CITY_NAME: "娴蜂笢甯�",
                ESS_CITY_CODE: "701",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632200",
                CITY_NAME: "娴峰寳钘忔棌鑷不宸�",
                ESS_CITY_CODE: "706",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632300",
                CITY_NAME: "榛勫崡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "707",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632500",
                CITY_NAME: "娴峰崡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "705",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632600",
                CITY_NAME: "鏋滄礇钘忔棌鑷不宸�",
                ESS_CITY_CODE: "708",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632700",
                CITY_NAME: "鐜夋爲钘忔棌鑷不宸�",
                ESS_CITY_CODE: "709",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632800",
                CITY_NAME: "娴疯タ钂欏彜鏃忚棌鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "704",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632900",
                CITY_NAME: "鏍煎皵鏈ㄥ競",
                ESS_CITY_CODE: "702",
                PROVINCE_CODE: "630000"
            }],
            640000: [{
                CITY_CODE: "640100",
                CITY_NAME: "閾跺窛甯�",
                ESS_CITY_CODE: "880",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640200",
                CITY_NAME: "鐭冲槾灞卞競",
                ESS_CITY_CODE: "884",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640300",
                CITY_NAME: "鍚村繝甯�",
                ESS_CITY_CODE: "883",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640400",
                CITY_NAME: "鍥哄師甯�",
                ESS_CITY_CODE: "885",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640500",
                CITY_NAME: "涓崼甯�",
                ESS_CITY_CODE: "886",
                PROVINCE_CODE: "640000"
            }],
            650000: [{
                CITY_CODE: "650100",
                CITY_NAME: "涔岄瞾鏈ㄩ綈甯�",
                ESS_CITY_CODE: "890",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "650200",
                CITY_NAME: "鍏嬫媺鐜涗緷甯�",
                ESS_CITY_CODE: "899",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652100",
                CITY_NAME: "鍚愰瞾鐣湴鍖�",
                ESS_CITY_CODE: "894",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652200",
                CITY_NAME: "鍝堝瘑鍦板尯",
                ESS_CITY_CODE: "900",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652300",
                CITY_NAME: "鏄屽悏鍥炴棌鑷不宸�",
                ESS_CITY_CODE: "891",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652700",
                CITY_NAME: "鍗氬皵濉旀媺钂欏彜鑷不宸�",
                ESS_CITY_CODE: "951",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652800",
                CITY_NAME: "宸撮煶閮钂欏彜鑷不宸�",
                ESS_CITY_CODE: "895",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652900",
                CITY_NAME: "闃垮厠鑻忓湴鍖�",
                ESS_CITY_CODE: "896",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "653000",
                CITY_NAME: "鍏嬪瓬鍕掕嫃鏌皵鍏嬪瓬鑷不宸�",
                ESS_CITY_CODE: "954",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "653100",
                CITY_NAME: "鍠€浠€鍦板尯",
                ESS_CITY_CODE: "897",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "653200",
                CITY_NAME: "鍜岀敯鍦板尯",
                ESS_CITY_CODE: "955",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654000",
                CITY_NAME: "浼婄妬鍝堣惃鍏嬭嚜娌诲窞",
                ESS_CITY_CODE: "898",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654200",
                CITY_NAME: "濉斿煄鍦板尯",
                ESS_CITY_CODE: "952",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654300",
                CITY_NAME: "闃垮嫆娉板湴鍖�",
                ESS_CITY_CODE: "953",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654400",
                CITY_NAME: "濂庡悲",
                ESS_CITY_CODE: "892",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "659001",
                CITY_NAME: "鐭虫渤瀛愬競",
                ESS_CITY_CODE: "893",
                PROVINCE_CODE: "650000"
            }]
        }
    }
}
, function(C, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    }),
    I.default = [{
        PROVINCE_NAME: "鍖椾含",
        PROVINCE_CODE: "11",
        PRO_ORDER_NUMBER: 1
    }, {
        PROVINCE_NAME: "涓婃捣",
        PROVINCE_CODE: "31",
        PRO_ORDER_NUMBER: 2
    }, {
        PROVINCE_NAME: "骞夸笢",
        PROVINCE_CODE: "51",
        PRO_ORDER_NUMBER: 3
    }, {
        PROVINCE_NAME: "绂忓缓",
        PROVINCE_CODE: "38",
        PRO_ORDER_NUMBER: 4
    }, {
        PROVINCE_NAME: "娴欐睙",
        PROVINCE_CODE: "36",
        PRO_ORDER_NUMBER: 5
    }, {
        PROVINCE_NAME: "澶╂触",
        PROVINCE_CODE: "13",
        PRO_ORDER_NUMBER: 6
    }, {
        PROVINCE_NAME: "杈藉畞",
        PROVINCE_CODE: "91",
        PRO_ORDER_NUMBER: 7
    }, {
        PROVINCE_NAME: "姹熻嫃",
        PROVINCE_CODE: "34",
        PRO_ORDER_NUMBER: 8
    }, {
        PROVINCE_NAME: "灞辫タ",
        PROVINCE_CODE: "19",
        PRO_ORDER_NUMBER: 9
    }, {
        PROVINCE_NAME: "鏂扮枂",
        PROVINCE_CODE: "89",
        PRO_ORDER_NUMBER: 10
    }, {
        PROVINCE_NAME: "闈掓捣",
        PROVINCE_CODE: "70",
        PRO_ORDER_NUMBER: 11
    }, {
        PROVINCE_NAME: "娌冲寳",
        PROVINCE_CODE: "18",
        PRO_ORDER_NUMBER: 12
    }, {
        PROVINCE_NAME: "灞变笢",
        PROVINCE_CODE: "17",
        PRO_ORDER_NUMBER: 13
    }, {
        PROVINCE_NAME: "娴峰崡",
        PROVINCE_CODE: "50",
        PRO_ORDER_NUMBER: 14
    }, {
        PROVINCE_NAME: "闄曡タ",
        PROVINCE_CODE: "84",
        PRO_ORDER_NUMBER: 15
    }, {
        PROVINCE_NAME: "鍐呰挋鍙�",
        PROVINCE_CODE: "10",
        PRO_ORDER_NUMBER: 16
    }, {
        PROVINCE_NAME: "閲嶅簡",
        PROVINCE_CODE: "83",
        PRO_ORDER_NUMBER: 17
    }, {
        PROVINCE_NAME: "婀栧寳",
        PROVINCE_CODE: "71",
        PRO_ORDER_NUMBER: 18
    }, {
        PROVINCE_NAME: "鍚夋灄",
        PROVINCE_CODE: "90",
        PRO_ORDER_NUMBER: 19
    }, {
        PROVINCE_NAME: "瀹佸",
        PROVINCE_CODE: "88",
        PRO_ORDER_NUMBER: 20
    }, {
        PROVINCE_NAME: "榛戦緳姹�",
        PROVINCE_CODE: "97",
        PRO_ORDER_NUMBER: 21
    }, {
        PROVINCE_NAME: "瑗胯棌",
        PROVINCE_CODE: "79",
        PRO_ORDER_NUMBER: 22
    }, {
        PROVINCE_NAME: "骞胯タ",
        PROVINCE_CODE: "59",
        PRO_ORDER_NUMBER: 23
    }, {
        PROVINCE_NAME: "婀栧崡",
        PROVINCE_CODE: "74",
        PRO_ORDER_NUMBER: 24
    }, {
        PROVINCE_NAME: "鍥涘窛",
        PROVINCE_CODE: "81",
        PRO_ORDER_NUMBER: 25
    }, {
        PROVINCE_NAME: "娌冲崡",
        PROVINCE_CODE: "76",
        PRO_ORDER_NUMBER: 26
    }, {
        PROVINCE_NAME: "瀹夊窘",
        PROVINCE_CODE: "30",
        PRO_ORDER_NUMBER: 27
    }, {
        PROVINCE_NAME: "鐢樿們",
        PROVINCE_CODE: "87",
        PRO_ORDER_NUMBER: 28
    }, {
        PROVINCE_NAME: "浜戝崡",
        PROVINCE_CODE: "86",
        PRO_ORDER_NUMBER: 29
    }, {
        PROVINCE_NAME: "璐靛窞",
        PROVINCE_CODE: "85",
        PRO_ORDER_NUMBER: 30
    }, {
        PROVINCE_NAME: "姹熻タ",
        PROVINCE_CODE: "75",
        PRO_ORDER_NUMBER: 31
    }]
}
, function(C, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    }),
    I.default = {
        88: [{
            CITY_CODE: "880",
            CITY_NAME: "閾跺窛"
        }, {
            CITY_CODE: "884",
            CITY_NAME: "鐭冲槾灞�"
        }, {
            CITY_CODE: "883",
            CITY_NAME: "鍚村繝"
        }, {
            CITY_CODE: "885",
            CITY_NAME: "鍥哄師"
        }, {
            CITY_CODE: "886",
            CITY_NAME: "涓崼"
        }],
        89: [{
            CITY_CODE: "890",
            CITY_NAME: "涔岄瞾鏈ㄩ綈"
        }, {
            CITY_CODE: "891",
            CITY_NAME: "鏄屽悏"
        }, {
            CITY_CODE: "893",
            CITY_NAME: "鐭虫渤瀛�"
        }, {
            CITY_CODE: "892",
            CITY_NAME: "濂庡悲"
        }, {
            CITY_CODE: "952",
            CITY_NAME: "濉斿煄"
        }, {
            CITY_CODE: "899",
            CITY_NAME: "鍏嬫媺鐜涗緷"
        }, {
            CITY_CODE: "898",
            CITY_NAME: "浼婄妬"
        }, {
            CITY_CODE: "951",
            CITY_NAME: "鍗氫箰"
        }, {
            CITY_CODE: "953",
            CITY_NAME: "闃垮嫆娉�"
        }, {
            CITY_CODE: "894",
            CITY_NAME: "鍚愰瞾鐣�"
        }, {
            CITY_CODE: "900",
            CITY_NAME: "鍝堝瘑"
        }, {
            CITY_CODE: "895",
            CITY_NAME: "宸撮煶閮"
        }, {
            CITY_CODE: "896",
            CITY_NAME: "闃垮厠鑻�"
        }, {
            CITY_CODE: "897",
            CITY_NAME: "鍠€浠€"
        }, {
            CITY_CODE: "955",
            CITY_NAME: "鍜岀敯"
        }, {
            CITY_CODE: "954",
            CITY_NAME: "鍏嬪瓬鍕掕嫃"
        }],
        90: [{
            CITY_CODE: "901",
            CITY_NAME: "闀挎槬"
        }, {
            CITY_CODE: "902",
            CITY_NAME: "鍚夋灄"
        }, {
            CITY_CODE: "909",
            CITY_NAME: "寤惰竟"
        }, {
            CITY_CODE: "903",
            CITY_NAME: "鍥涘钩"
        }, {
            CITY_CODE: "905",
            CITY_NAME: "閫氬寲"
        }, {
            CITY_CODE: "907",
            CITY_NAME: "鐧藉煄"
        }, {
            CITY_CODE: "906",
            CITY_NAME: "杈芥簮"
        }, {
            CITY_CODE: "904",
            CITY_NAME: "鏉惧師"
        }, {
            CITY_CODE: "908",
            CITY_NAME: "鐧藉北"
        }],
        91: [{
            CITY_CODE: "910",
            CITY_NAME: "娌堥槼"
        }, {
            CITY_CODE: "940",
            CITY_NAME: "澶ц繛"
        }, {
            CITY_CODE: "912",
            CITY_NAME: "闉嶅北"
        }, {
            CITY_CODE: "913",
            CITY_NAME: "鎶氶『"
        }, {
            CITY_CODE: "914",
            CITY_NAME: "鏈邯"
        }, {
            CITY_CODE: "915",
            CITY_NAME: "涓逛笢"
        }, {
            CITY_CODE: "916",
            CITY_NAME: "閿﹀窞"
        }, {
            CITY_CODE: "917",
            CITY_NAME: "钀ュ彛"
        }, {
            CITY_CODE: "918",
            CITY_NAME: "闃滄柊"
        }, {
            CITY_CODE: "919",
            CITY_NAME: "杈介槼"
        }, {
            CITY_CODE: "911",
            CITY_NAME: "閾佸箔"
        }, {
            CITY_CODE: "920",
            CITY_NAME: "鏈濋槼"
        }, {
            CITY_CODE: "921",
            CITY_NAME: "鐩橀敠"
        }, {
            CITY_CODE: "922",
            CITY_NAME: "钁姦宀�"
        }],
        70: [{
            CITY_CODE: "700",
            CITY_NAME: "瑗垮畞"
        }, {
            CITY_CODE: "701",
            CITY_NAME: "娴蜂笢"
        }, {
            CITY_CODE: "702",
            CITY_NAME: "鏍煎皵鏈�"
        }, {
            CITY_CODE: "704",
            CITY_NAME: "娴疯タ"
        }, {
            CITY_CODE: "706",
            CITY_NAME: "娴峰寳"
        }, {
            CITY_CODE: "705",
            CITY_NAME: "娴峰崡"
        }, {
            CITY_CODE: "707",
            CITY_NAME: "榛勫崡"
        }, {
            CITY_CODE: "708",
            CITY_NAME: "鏋滄礇"
        }, {
            CITY_CODE: "709",
            CITY_NAME: "鐜夋爲"
        }],
        71: [{
            CITY_CODE: "710",
            CITY_NAME: "姝︽眽"
        }, {
            CITY_CODE: "711",
            CITY_NAME: "瀹滄槍"
        }, {
            CITY_CODE: "712",
            CITY_NAME: "鑽嗗窞"
        }, {
            CITY_CODE: "714",
            CITY_NAME: "榛勫唸"
        }, {
            CITY_CODE: "715",
            CITY_NAME: "榛勭煶"
        }, {
            CITY_CODE: "716",
            CITY_NAME: "瑗勯槼"
        }, {
            CITY_CODE: "717",
            CITY_NAME: "瀛濇劅"
        }, {
            CITY_CODE: "718",
            CITY_NAME: "閯傚窞"
        }, {
            CITY_CODE: "719",
            CITY_NAME: "鍜稿畞"
        }, {
            CITY_CODE: "721",
            CITY_NAME: "鍗佸牥"
        }, {
            CITY_CODE: "723",
            CITY_NAME: "闅忓窞"
        }, {
            CITY_CODE: "724",
            CITY_NAME: "鑽嗛棬"
        }, {
            CITY_CODE: "713",
            CITY_NAME: "浠欐/娼滄睙/澶╅棬"
        }, {
            CITY_CODE: "727",
            CITY_NAME: "鎭╂柦"
        }],
        50: [{
            CITY_CODE: "501",
            CITY_NAME: "娴峰彛"
        }],
        51: [{
            CITY_CODE: "540",
            CITY_NAME: "娣卞湷"
        }, {
            CITY_CODE: "580",
            CITY_NAME: "涓滆帪"
        }, {
            CITY_CODE: "510",
            CITY_NAME: "骞垮窞"
        }, {
            CITY_CODE: "530",
            CITY_NAME: "浣涘北"
        }, {
            CITY_CODE: "570",
            CITY_NAME: "鎯犲窞"
        }, {
            CITY_CODE: "620",
            CITY_NAME: "鐝犳捣"
        }, {
            CITY_CODE: "556",
            CITY_NAME: "涓北"
        }, {
            CITY_CODE: "550",
            CITY_NAME: "姹熼棬"
        }, {
            CITY_CODE: "560",
            CITY_NAME: "姹曞ご"
        }, {
            CITY_CODE: "520",
            CITY_NAME: "婀涙睙"
        }, {
            CITY_CODE: "526",
            CITY_NAME: "鎻槼"
        }, {
            CITY_CODE: "536",
            CITY_NAME: "鑲囧簡"
        }, {
            CITY_CODE: "535",
            CITY_NAME: "娓呰繙"
        }, {
            CITY_CODE: "558",
            CITY_NAME: "闊跺叧"
        }, {
            CITY_CODE: "531",
            CITY_NAME: "娼窞"
        }, {
            CITY_CODE: "568",
            CITY_NAME: "鑼傚悕"
        }, {
            CITY_CODE: "670",
            CITY_NAME: "娌虫簮"
        }, {
            CITY_CODE: "525",
            CITY_NAME: "姹曞熬"
        }, {
            CITY_CODE: "565",
            CITY_NAME: "闃虫睙"
        }, {
            CITY_CODE: "528",
            CITY_NAME: "姊呭窞"
        }, {
            CITY_CODE: "538",
            CITY_NAME: "浜戞诞"
        }],
        74: [{
            CITY_CODE: "741",
            CITY_NAME: "闀挎矙"
        }, {
            CITY_CODE: "744",
            CITY_NAME: "琛￠槼"
        }, {
            CITY_CODE: "742",
            CITY_NAME: "鏍床"
        }, {
            CITY_CODE: "743",
            CITY_NAME: "婀樻江"
        }, {
            CITY_CODE: "745",
            CITY_NAME: "宀抽槼"
        }, {
            CITY_CODE: "792",
            CITY_NAME: "閭甸槼"
        }, {
            CITY_CODE: "748",
            CITY_NAME: "閮村窞"
        }, {
            CITY_CODE: "749",
            CITY_NAME: "甯稿痉"
        }, {
            CITY_CODE: "747",
            CITY_NAME: "鐩婇槼"
        }, {
            CITY_CODE: "795",
            CITY_NAME: "鎬€鍖�"
        }, {
            CITY_CODE: "796",
            CITY_NAME: "姘稿窞"
        }, {
            CITY_CODE: "791",
            CITY_NAME: "濞勫簳"
        }, {
            CITY_CODE: "793",
            CITY_NAME: "婀樿タ"
        }, {
            CITY_CODE: "794",
            CITY_NAME: "寮犲鐣�"
        }],
        30: [{
            CITY_CODE: "305",
            CITY_NAME: "鍚堣偉"
        }, {
            CITY_CODE: "302",
            CITY_NAME: "瀹夊簡"
        }, {
            CITY_CODE: "301",
            CITY_NAME: "铓屽煚"
        }, {
            CITY_CODE: "318",
            CITY_NAME: "浜冲窞"
        }, {
            CITY_CODE: "317",
            CITY_NAME: "姹犲窞"
        }, {
            CITY_CODE: "312",
            CITY_NAME: "婊佸窞"
        }, {
            CITY_CODE: "306",
            CITY_NAME: "闃滈槼"
        }, {
            CITY_CODE: "314",
            CITY_NAME: "娣寳"
        }, {
            CITY_CODE: "307",
            CITY_NAME: "娣崡"
        }, {
            CITY_CODE: "316",
            CITY_NAME: "榛勫北"
        }, {
            CITY_CODE: "304",
            CITY_NAME: "鍏畨"
        }, {
            CITY_CODE: "300",
            CITY_NAME: "椹瀺灞�"
        }, {
            CITY_CODE: "313",
            CITY_NAME: "瀹垮窞"
        }, {
            CITY_CODE: "308",
            CITY_NAME: "閾滈櫟"
        }, {
            CITY_CODE: "303",
            CITY_NAME: "鑺滄箹"
        }, {
            CITY_CODE: "311",
            CITY_NAME: "瀹ｅ煄"
        }],
        75: [{
            CITY_CODE: "750",
            CITY_NAME: "鍗楁槍"
        }, {
            CITY_CODE: "755",
            CITY_NAME: "涔濇睙"
        }, {
            CITY_CODE: "757",
            CITY_NAME: "涓婇ザ"
        }, {
            CITY_CODE: "759",
            CITY_NAME: "鎶氬窞"
        }, {
            CITY_CODE: "756",
            CITY_NAME: "瀹滄槬"
        }, {
            CITY_CODE: "751",
            CITY_NAME: "鍚夊畨"
        }, {
            CITY_CODE: "752",
            CITY_NAME: "璧ｅ窞"
        }, {
            CITY_CODE: "740",
            CITY_NAME: "鏅痉闀�"
        }, {
            CITY_CODE: "758",
            CITY_NAME: "钀嶄埂"
        }, {
            CITY_CODE: "753",
            CITY_NAME: "鏂颁綑"
        }, {
            CITY_CODE: "754",
            CITY_NAME: "楣版江"
        }],
        97: [{
            CITY_CODE: "971",
            CITY_NAME: "鍝堝皵婊�"
        }, {
            CITY_CODE: "973",
            CITY_NAME: "榻愰綈鍝堝皵"
        }, {
            CITY_CODE: "988",
            CITY_NAME: "鐗′腹姹�"
        }, {
            CITY_CODE: "976",
            CITY_NAME: "浣虫湪鏂�"
        }, {
            CITY_CODE: "989",
            CITY_NAME: "缁ュ寲"
        }, {
            CITY_CODE: "981",
            CITY_NAME: "澶у簡"
        }, {
            CITY_CODE: "991",
            CITY_NAME: "楦¤タ"
        }, {
            CITY_CODE: "990",
            CITY_NAME: "榛戞渤"
        }, {
            CITY_CODE: "996",
            CITY_NAME: "浼婃槬"
        }, {
            CITY_CODE: "994",
            CITY_NAME: "鍙岄腑灞�"
        }, {
            CITY_CODE: "993",
            CITY_NAME: "楣ゅ矖"
        }, {
            CITY_CODE: "992",
            CITY_NAME: "涓冨彴娌�"
        }, {
            CITY_CODE: "995",
            CITY_NAME: "澶у叴瀹夊箔"
        }],
        31: [{
            CITY_CODE: "310",
            CITY_NAME: "涓婃捣"
        }],
        76: [{
            CITY_CODE: "760",
            CITY_NAME: "閮戝窞"
        }, {
            CITY_CODE: "761",
            CITY_NAME: "娲涢槼"
        }, {
            CITY_CODE: "762",
            CITY_NAME: "寮€灏�"
        }, {
            CITY_CODE: "763",
            CITY_NAME: "鐒︿綔"
        }, {
            CITY_CODE: "764",
            CITY_NAME: "鏂颁埂"
        }, {
            CITY_CODE: "765",
            CITY_NAME: "璁告槍"
        }, {
            CITY_CODE: "766",
            CITY_NAME: "婕渤"
        }, {
            CITY_CODE: "767",
            CITY_NAME: "瀹夐槼"
        }, {
            CITY_CODE: "768",
            CITY_NAME: "鍟嗕笜"
        }, {
            CITY_CODE: "769",
            CITY_NAME: "骞抽《灞�"
        }, {
            CITY_CODE: "770",
            CITY_NAME: "鍛ㄥ彛"
        }, {
            CITY_CODE: "771",
            CITY_NAME: "椹婚┈搴�"
        }, {
            CITY_CODE: "772",
            CITY_NAME: "涓夐棬宄�"
        }, {
            CITY_CODE: "773",
            CITY_NAME: "婵槼"
        }, {
            CITY_CODE: "774",
            CITY_NAME: "楣ゅ"
        }, {
            CITY_CODE: "775",
            CITY_NAME: "娴庢簮"
        }, {
            CITY_CODE: "776",
            CITY_NAME: "淇￠槼"
        }, {
            CITY_CODE: "777",
            CITY_NAME: "鍗楅槼"
        }],
        10: [{
            CITY_CODE: "101",
            CITY_NAME: "鍛煎拰娴╃壒"
        }, {
            CITY_CODE: "102",
            CITY_NAME: "鍖呭ご"
        }, {
            CITY_CODE: "106",
            CITY_NAME: "涔屾捣"
        }, {
            CITY_CODE: "107",
            CITY_NAME: "璧ゅ嘲"
        }, {
            CITY_CODE: "108",
            CITY_NAME: "鍛间鸡璐濆皵"
        }, {
            CITY_CODE: "113",
            CITY_NAME: "鍏村畨鐩�"
        }, {
            CITY_CODE: "109",
            CITY_NAME: "閫氳窘"
        }, {
            CITY_CODE: "103",
            CITY_NAME: "涔屽叞瀵熷竷"
        }, {
            CITY_CODE: "105",
            CITY_NAME: "宸村溅娣栧皵"
        }, {
            CITY_CODE: "114",
            CITY_NAME: "闃挎媺鍠勭洘"
        }, {
            CITY_CODE: "104",
            CITY_NAME: "閯傚皵澶氭柉"
        }, {
            CITY_CODE: "111",
            CITY_NAME: "閿℃灄閮嫆鐩�"
        }],
        11: [{
            CITY_CODE: "110",
            CITY_NAME: "鍖椾含"
        }],
        34: [{
            CITY_CODE: "340",
            CITY_NAME: "鍗椾含"
        }, {
            CITY_CODE: "450",
            CITY_NAME: "鑻忓窞"
        }, {
            CITY_CODE: "330",
            CITY_NAME: "鏃犻敗"
        }, {
            CITY_CODE: "440",
            CITY_NAME: "甯稿窞"
        }, {
            CITY_CODE: "430",
            CITY_NAME: "鎵窞"
        }, {
            CITY_CODE: "343",
            CITY_NAME: "闀囨睙"
        }, {
            CITY_CODE: "358",
            CITY_NAME: "鍗楅€�"
        }, {
            CITY_CODE: "350",
            CITY_NAME: "寰愬窞"
        }, {
            CITY_CODE: "445",
            CITY_NAME: "娉板窞"
        }, {
            CITY_CODE: "348",
            CITY_NAME: "鐩愬煄"
        }, {
            CITY_CODE: "354",
            CITY_NAME: "娣畨"
        }, {
            CITY_CODE: "346",
            CITY_NAME: "杩炰簯娓�"
        }, {
            CITY_CODE: "349",
            CITY_NAME: "瀹胯縼"
        }],
        13: [{
            CITY_CODE: "130",
            CITY_NAME: "澶╂触"
        }],
        79: [{
            CITY_CODE: "790",
            CITY_NAME: "鎷夎惃"
        }, {
            CITY_CODE: "797",
            CITY_NAME: "鏃ュ杸鍒�"
        }, {
            CITY_CODE: "798",
            CITY_NAME: "灞卞崡"
        }, {
            CITY_CODE: "799",
            CITY_NAME: "鏋楄姖"
        }, {
            CITY_CODE: "800",
            CITY_NAME: "鏄岄兘"
        }, {
            CITY_CODE: "801",
            CITY_NAME: "閭ｆ洸"
        }, {
            CITY_CODE: "802",
            CITY_NAME: "闃块噷"
        }],
        36: [{
            CITY_CODE: "360",
            CITY_NAME: "鏉窞"
        }, {
            CITY_CODE: "370",
            CITY_NAME: "瀹佹尝"
        }, {
            CITY_CODE: "470",
            CITY_NAME: "娓╁窞"
        }, {
            CITY_CODE: "476",
            CITY_NAME: "鍙板窞"
        }, {
            CITY_CODE: "367",
            CITY_NAME: "閲戝崕"
        }, {
            CITY_CODE: "363",
            CITY_NAME: "鍢夊叴"
        }, {
            CITY_CODE: "365",
            CITY_NAME: "缁嶅叴"
        }, {
            CITY_CODE: "362",
            CITY_NAME: "婀栧窞"
        }, {
            CITY_CODE: "469",
            CITY_NAME: "涓芥按"
        }, {
            CITY_CODE: "468",
            CITY_NAME: "琛㈠窞"
        }, {
            CITY_CODE: "364",
            CITY_NAME: "鑸熷北"
        }],
        59: [{
            CITY_CODE: "591",
            CITY_NAME: "鍗楀畞"
        }, {
            CITY_CODE: "593",
            CITY_NAME: "鏌冲窞"
        }, {
            CITY_CODE: "592",
            CITY_NAME: "妗傛灄"
        }, {
            CITY_CODE: "594",
            CITY_NAME: "姊у窞"
        }, {
            CITY_CODE: "595",
            CITY_NAME: "鐜夋灄"
        }, {
            CITY_CODE: "596",
            CITY_NAME: "鐧捐壊"
        }, {
            CITY_CODE: "597",
            CITY_NAME: "閽﹀窞"
        }, {
            CITY_CODE: "598",
            CITY_NAME: "娌虫睜"
        }, {
            CITY_CODE: "599",
            CITY_NAME: "鍖楁捣"
        }, {
            CITY_CODE: "590",
            CITY_NAME: "闃插煄娓�"
        }, {
            CITY_CODE: "589",
            CITY_NAME: "璐垫腐"
        }, {
            CITY_CODE: "588",
            CITY_NAME: "璐哄窞"
        }, {
            CITY_CODE: "600",
            CITY_NAME: "宕囧乏"
        }, {
            CITY_CODE: "601",
            CITY_NAME: "鏉ュ"
        }],
        38: [{
            CITY_CODE: "380",
            CITY_NAME: "绂忓窞"
        }, {
            CITY_CODE: "390",
            CITY_NAME: "鍘﹂棬"
        }, {
            CITY_CODE: "480",
            CITY_NAME: "娉夊窞"
        }, {
            CITY_CODE: "395",
            CITY_NAME: "婕冲窞"
        }, {
            CITY_CODE: "386",
            CITY_NAME: "瀹佸痉"
        }, {
            CITY_CODE: "385",
            CITY_NAME: "鑾嗙敯"
        }, {
            CITY_CODE: "387",
            CITY_NAME: "鍗楀钩"
        }, {
            CITY_CODE: "389",
            CITY_NAME: "涓夋槑"
        }, {
            CITY_CODE: "384",
            CITY_NAME: "榫欏博"
        }],
        17: [{
            CITY_CODE: "170",
            CITY_NAME: "娴庡崡"
        }, {
            CITY_CODE: "166",
            CITY_NAME: "闈掑矝"
        }, {
            CITY_CODE: "150",
            CITY_NAME: "娣勫崥"
        }, {
            CITY_CODE: "157",
            CITY_NAME: "鏋ｅ簞"
        }, {
            CITY_CODE: "156",
            CITY_NAME: "涓滆惀"
        }, {
            CITY_CODE: "161",
            CITY_NAME: "鐑熷彴"
        }, {
            CITY_CODE: "155",
            CITY_NAME: "娼嶅潑"
        }, {
            CITY_CODE: "158",
            CITY_NAME: "娴庡畞"
        }, {
            CITY_CODE: "172",
            CITY_NAME: "娉板畨"
        }, {
            CITY_CODE: "152",
            CITY_NAME: "濞佹捣"
        }, {
            CITY_CODE: "154",
            CITY_NAME: "鏃ョ収"
        }, {
            CITY_CODE: "160",
            CITY_NAME: "鑾辫姕"
        }, {
            CITY_CODE: "153",
            CITY_NAME: "涓存矀"
        }, {
            CITY_CODE: "173",
            CITY_NAME: "寰峰窞"
        }, {
            CITY_CODE: "174",
            CITY_NAME: "鑱婂煄"
        }, {
            CITY_CODE: "151",
            CITY_NAME: "婊ㄥ窞"
        }, {
            CITY_CODE: "159",
            CITY_NAME: "鑿忔辰"
        }],
        18: [{
            CITY_CODE: "188",
            CITY_NAME: "鐭冲搴�"
        }, {
            CITY_CODE: "181",
            CITY_NAME: "鍞愬北"
        }, {
            CITY_CODE: "182",
            CITY_NAME: "绉︾殗宀�"
        }, {
            CITY_CODE: "186",
            CITY_NAME: "閭兏"
        }, {
            CITY_CODE: "185",
            CITY_NAME: "閭㈠彴"
        }, {
            CITY_CODE: "187",
            CITY_NAME: "淇濆畾"
        }, {
            CITY_CODE: "184",
            CITY_NAME: "寮犲鍙�"
        }, {
            CITY_CODE: "189",
            CITY_NAME: "鎵垮痉"
        }, {
            CITY_CODE: "183",
            CITY_NAME: "寤婂潑"
        }, {
            CITY_CODE: "180",
            CITY_NAME: "娌у窞"
        }, {
            CITY_CODE: "720",
            CITY_NAME: "琛℃按"
        }],
        19: [{
            CITY_CODE: "190",
            CITY_NAME: "澶師"
        }, {
            CITY_CODE: "193",
            CITY_NAME: "澶у悓"
        }, {
            CITY_CODE: "192",
            CITY_NAME: "闃虫硥"
        }, {
            CITY_CODE: "195",
            CITY_NAME: "闀挎不"
        }, {
            CITY_CODE: "194",
            CITY_NAME: "鏅嬪煄"
        }, {
            CITY_CODE: "199",
            CITY_NAME: "鏈斿窞"
        }, {
            CITY_CODE: "198",
            CITY_NAME: "蹇诲窞"
        }, {
            CITY_CODE: "191",
            CITY_NAME: "鏅嬩腑"
        }, {
            CITY_CODE: "200",
            CITY_NAME: "鍚曟"
        }, {
            CITY_CODE: "197",
            CITY_NAME: "涓存本"
        }, {
            CITY_CODE: "196",
            CITY_NAME: "杩愬煄"
        }],
        81: [{
            CITY_CODE: "810",
            CITY_NAME: "鎴愰兘"
        }, {
            CITY_CODE: "822",
            CITY_NAME: "鍗楀厖"
        }, {
            CITY_CODE: "817",
            CITY_NAME: "瀹滃"
        }, {
            CITY_CODE: "824",
            CITY_NAME: "缁甸槼"
        }, {
            CITY_CODE: "820",
            CITY_NAME: "杈惧窞"
        }, {
            CITY_CODE: "814",
            CITY_NAME: "涔愬北"
        }, {
            CITY_CODE: "815",
            CITY_NAME: "娉稿窞"
        }, {
            CITY_CODE: "825",
            CITY_NAME: "寰烽槼"
        }, {
            CITY_CODE: "818",
            CITY_NAME: "鑷础"
        }, {
            CITY_CODE: "816",
            CITY_NAME: "鍐呮睙"
        }, {
            CITY_CODE: "827",
            CITY_NAME: "宸翠腑"
        }, {
            CITY_CODE: "823",
            CITY_NAME: "骞垮畨"
        }, {
            CITY_CODE: "819",
            CITY_NAME: "鐪夊北"
        }, {
            CITY_CODE: "826",
            CITY_NAME: "骞垮厓"
        }, {
            CITY_CODE: "830",
            CITY_NAME: "璧勯槼"
        }, {
            CITY_CODE: "821",
            CITY_NAME: "閬傚畞"
        }, {
            CITY_CODE: "811",
            CITY_NAME: "闆呭畨"
        }, {
            CITY_CODE: "813",
            CITY_NAME: "鏀€鏋濊姳"
        }, {
            CITY_CODE: "812",
            CITY_NAME: "鍑夊北"
        }, {
            CITY_CODE: "829",
            CITY_NAME: "闃垮潩"
        }, {
            CITY_CODE: "828",
            CITY_NAME: "鐢樺瓬"
        }],
        83: [{
            CITY_CODE: "831",
            CITY_NAME: "閲嶅簡"
        }],
        84: [{
            CITY_CODE: "841",
            CITY_NAME: "瑗垮畨"
        }, {
            CITY_CODE: "844",
            CITY_NAME: "鍜搁槼"
        }, {
            CITY_CODE: "843",
            CITY_NAME: "娓崡"
        }, {
            CITY_CODE: "840",
            CITY_NAME: "瀹濋浮"
        }, {
            CITY_CODE: "849",
            CITY_NAME: "姹変腑"
        }, {
            CITY_CODE: "842",
            CITY_NAME: "寤跺畨"
        }, {
            CITY_CODE: "845",
            CITY_NAME: "姒嗘灄"
        }, {
            CITY_CODE: "846",
            CITY_NAME: "閾滃窛"
        }, {
            CITY_CODE: "848",
            CITY_NAME: "瀹夊悍"
        }, {
            CITY_CODE: "847",
            CITY_NAME: "鍟嗘礇"
        }],
        85: [{
            CITY_CODE: "850",
            CITY_NAME: "璐甸槼"
        }, {
            CITY_CODE: "787",
            CITY_NAME: "閬典箟"
        }, {
            CITY_CODE: "789",
            CITY_NAME: "瀹夐『"
        }, {
            CITY_CODE: "788",
            CITY_NAME: "榛斿崡"
        }, {
            CITY_CODE: "786",
            CITY_NAME: "榛斾笢鍗�"
        }, {
            CITY_CODE: "785",
            CITY_NAME: "閾滀粊"
        }, {
            CITY_CODE: "851",
            CITY_NAME: "姣曡妭"
        }, {
            CITY_CODE: "853",
            CITY_NAME: "鍏洏姘�"
        }, {
            CITY_CODE: "852",
            CITY_NAME: "榛旇タ鍗�"
        }],
        86: [{
            CITY_CODE: "860",
            CITY_NAME: "鏄嗘槑"
        }, {
            CITY_CODE: "730",
            CITY_NAME: "寰峰畯"
        }, {
            CITY_CODE: "731",
            CITY_NAME: "淇濆北"
        }, {
            CITY_CODE: "732",
            CITY_NAME: "鏂囧北"
        }, {
            CITY_CODE: "733",
            CITY_NAME: "涓存钵"
        }, {
            CITY_CODE: "734",
            CITY_NAME: "鎬掓睙"
        }, {
            CITY_CODE: "735",
            CITY_NAME: "杩簡"
        }, {
            CITY_CODE: "736",
            CITY_NAME: "瑗垮弻鐗堢撼"
        }, {
            CITY_CODE: "861",
            CITY_NAME: "绾㈡渤"
        }, {
            CITY_CODE: "862",
            CITY_NAME: "澶х悊"
        }, {
            CITY_CODE: "863",
            CITY_NAME: "涓芥睙"
        }, {
            CITY_CODE: "864",
            CITY_NAME: "妤氶泟"
        }, {
            CITY_CODE: "865",
            CITY_NAME: "鐜夋邯"
        }, {
            CITY_CODE: "866",
            CITY_NAME: "鏇查潠"
        }, {
            CITY_CODE: "867",
            CITY_NAME: "鏄€�"
        }, {
            CITY_CODE: "869",
            CITY_NAME: "鏅幢"
        }],
        87: [{
            CITY_CODE: "870",
            CITY_NAME: "鍏板窞"
        }, {
            CITY_CODE: "931",
            CITY_NAME: "閰掓硥"
        }, {
            CITY_CODE: "873",
            CITY_NAME: "搴嗛槼"
        }, {
            CITY_CODE: "877",
            CITY_NAME: "澶╂按"
        }, {
            CITY_CODE: "874",
            CITY_NAME: "姝﹀▉"
        }, {
            CITY_CODE: "878",
            CITY_NAME: "涓村"
        }, {
            CITY_CODE: "879",
            CITY_NAME: "鐧介摱"
        }, {
            CITY_CODE: "871",
            CITY_NAME: "瀹氳タ"
        }, {
            CITY_CODE: "872",
            CITY_NAME: "骞冲噳"
        }, {
            CITY_CODE: "960",
            CITY_NAME: "闄囧崡"
        }, {
            CITY_CODE: "875",
            CITY_NAME: "寮犳帠"
        }, {
            CITY_CODE: "876",
            CITY_NAME: "鍢夊唱鍏�"
        }, {
            CITY_CODE: "930",
            CITY_NAME: "閲戞槍"
        }, {
            CITY_CODE: "961",
            CITY_NAME: "鐢樺崡"
        }]
    }
}
, function(C, I, T) {
    (function(C) {
        "use strict";
        function E(C) {
            return C && C.__esModule ? C : {
                default: C
            }
        }
        function D(C) {
            return "undefined" == typeof C || null === C || "" === C
        }
        Object.defineProperty(I, "__esModule", {
            value: !0
        }),
        I.CustViceCheck = I.WebCustCheck = I.ZMICE = I.CustCheck = I.CheckPin = I.passPortCheck = I.checkNoDate = I.checkPhoneNew = I.checkEnglish = I.checkScript = I.checkMobiles = I.checkCUCC = I.errorTwo2 = I.errorTwo = I.viceError = I.englishError = I.webError = I.error = I.checkZf = I.chineseLen = void 0,
        I.isEmpty = D;
        var _ = T(67)
          , O = E(_)
          , e = I.chineseLen = function(C) {
            for (var I = 0, T = C.length, E = 0; E < T; E += 1)
                /[\u4E00-\u9FA5\u3400-\u4DB5\u9FA6-\u9FBB\uF900-\uFA2D\uFA30-\uFA6A\uFA70-\uFAD9]/.test(C.charAt(E)) && (I += 1);
            return I
        }
          , S = I.checkZf = function(C) {
            var I = !1
              , T = /^[\sA-Za-z0-9\u4e00-\u9fa5()锛堬級,锛宊鈥�-]+$/;
            return I = T.test(C)
        }
          , t = I.error = function(I, T) {
            C("#top-desc").addClass("error").html(T),
            C(".noAdd").addClass("error").text(T),
            C("#" + I).addClass("error"),
            C(window).scrollTop(0)
        }
          , R = I.webError = function(I, T, E) {
            "number" !== I && ("delivery-desc" === I || "apply-name" === I || "apply-id" === I || "apply-phone" === I ? C("#" + I + " .p-content").addClass("error") : C("#" + I).addClass("error")),
            C("#" + T).show().text(E);
            var D = C("#" + I).offset().top;
            C(window).scrollTop(D)
        }
          , n = I.englishError = function(I, T, E) {
            C("#top-desc").addClass("error").html("<span>" + T + "</span><p>" + E + "</p>"),
            C("#" + I).addClass("error"),
            C(window).scrollTop(0)
        }
          , Y = I.viceError = function(I, T) {
            C(".viceErrorDesc").addClass("error").html(T),
            C(".noAdd").addClass("error").html(T),
            C(I).parent().addClass("error")
        }
          , N = I.errorTwo = function(I, T) {
            C(".checkError").show().find("span").text(T),
            C("#" + I + " input").addClass("error"),
            setTimeout(function() {
                C(".checkError").hide()
            }, 2e3)
        }
          , r = I.errorTwo2 = function(I) {
            C(".checkError").show().find("span").text(I),
            setTimeout(function() {
                C(".checkError").hide()
            }, 2e3)
        }
          , o = I.checkCUCC = function(C) {
            return /^((130|131|132|155|156|185|186|145|175|199|176|170|166)+\d{8})$/.test(C)
        }
          , i = I.checkMobiles = function(C) {
            return /^((13|15|18|14|17|16|19)+\d{9})$/.test(C)
        }
          , A = I.checkScript = function(C) {
            for (var I = !1, T = "<|>|script|alert|{|}|#|$|'|\"|:|;|&|*|@|@|%|^|?", E = T.split("|"), D = 0; D < E.length; D += 1)
                if (C.indexOf(E[D]) !== -1) {
                    I = !0;
                    break
                }
            return I
        }
          , M = I.checkEnglish = function(C) {
            var I = !1
              , T = /^[A-Za-z]+$/;
            return T.test(C) && (I = !0),
            I
        }
          , a = I.checkPhoneNew = function(C) {
            var I = !0;
            return C.length < 6 ? I = !1 : (C[1] === C[0] && C[2] === C[1] && (I = !1),
            (C[0] - C[1] === 1 && C[1] - C[2] === 1 || C[2] - C[1] === 1 && C[1] - C[0] === 1) && (I = !1)),
            I
        }
          , c = I.checkNoDate = function(C) {
            var I = !0
              , T = /^\s*|\s*$/g
              , E = C.replace(T, "")
              , D = E.split("-")
              , _ = new Date
              , O = _.getFullYear()
              , e = _.getMonth() + 1
              , S = _.getDate();
            return parseInt(D[0]) === O && (parseInt(D[1]) === e ? parseInt(D[2]) < S && (I = !1) : parseInt(D[1]) <= e && (I = !1)),
            I
        }
        ;
        I.passPortCheck = {
            checkfirstName: function(I) {
                return "" === C.trim(I) ? (n("apply-family", "璇疯緭鍏ユ偍鐨勫", "Please input your last name"),
                !1) : !!M(I) || (n("apply-family", "濮撳悕鍖呭惈闈炴硶瀛楃", "Names can only be entered in English letters"),
                !1)
            },
            checkLastName: function(I) {
                return "" === C.trim(I) ? (n("apply-name", "璇疯緭鍏ユ偍鐨勫悕瀛�", "Please input your first name"),
                !1) : !!M(I) || (n("apply-name", "濮撳悕鍖呭惈闈炴硶瀛楃", "Names can only be entered in English letters"),
                !1)
            },
            checkPassport: function(C) {
                return C.length < 7 ? (n("apply-id", "璇佷欢鍙风爜蹇呴』澶т簬6涓瓧绗�", "The ID number must be more than 6 characters"),
                !1) : !!/^[0-9a-zA-Z]+$/.test(C) || (n("apply-id", "璇疯緭鍏ユ纭殑鎶ょ収鍙风爜", "Please input the correct passport number"),
                !1)
            },
            checkDate: function(I) {
                return "Date of Expiry" === C.trim(I) ? (n("apply-data", "璇烽€夋嫨鎶ょ収鏈夋晥鏃ユ湡", "Please choose the valid date of the passport"),
                !1) : !!c(I) || (n("apply-data", "褰撳墠鎵€閫夋棩鏈熷凡杩囨湡", "The selected date has expired"),
                !1)
            },
            checkPhone: function(I) {
                return "" === C.trim(I) ? (n("apply-phone", "璇峰～鍐欒仈绯荤數璇�", "Please fill in the contact phone"),
                !1) : !!a(I) || (n("apply-phone", "鎮ㄧ殑鎵嬫満鍙风爜鏍煎紡鏈夎锛岃閲嶆柊杈撳叆", "The phone number format is wrong, please retype"),
                !1)
            },
            checkNumber: function(I) {
                return "" !== C.trim(I) || (n("number", "璇烽€夋嫨鍙风爜", "Please select the number"),
                !1)
            },
            checkNumAddress: function(I) {
                return "璇烽€夋嫨鍙风爜褰掑睘鍦�" !== C.trim(I) || (n("location", "璇烽€夋嫨鍙风爜褰掑睘鍦�", "Please choose the number to belong to"),
                !1)
            },
            checkAddress: function(I) {
                return "璇烽€夋嫨鍖�/鍘�" !== C.trim(I) || (n("delivery", "璇烽€夋嫨鎮ㄧ殑閰嶉€佸尯鍘�", "Please choose your distribution district and county"),
                !1)
            },
            checkAddressInfo: function(I) {
                return "" === C.trim(I) ? (n("delivery-desc", "璇峰～鍐欒缁嗗湴鍧€", "Please fill in the detailed address"),
                !1) : e(I) > 50 ? (n("delivery-desc", "璇︾粏鍦板潃杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�50涓眽瀛�", "Please enter a maximum of 50 words"),
                !1) : e(I) < 8 ? (n("delivery-desc", "璇︾粏鍦板潃澶煭锛岃鎮ㄦ渶灏戣緭鍏�8涓眽瀛�", "Please enter 8 words at least"),
                !1) : !!S(I) || (n("delivery-desc", "浠呮敮鎸佽緭鍏ユ眽瀛椼€佹暟瀛椼€佸瓧姣嶃€佲€斻€乢銆侊紙锛夈€佺┖鏍笺€侀€楀彿", "Only support input, numbers, letters, and Chinese characters, _, (), spaces, commas"),
                !1)
            },
            checkYzm: function(I) {
                return "" !== C.trim(I) || (t("apply-yzm", "璇峰～鍐欓獙璇佺爜"),
                !1)
            },
            checkYzmPhone: function(I) {
                return I === C("#mobilePhone").val().trim() || (t("apply-yzm", "楠岃瘉鐮侀敊璇�"),
                C(".rightI").hide(),
                !1)
            }
        },
        I.CheckPin = {
            checkNo: function(C) {
                return !D(C) && !!i(C)
            },
            checkIdCard: function(C) {
                return !D(C) && 6 === C.length
            }
        },
        I.CustCheck = {
            checkReceiverName: function(I) {
                return "" === C.trim(I) ? (t("apply-name", "璇峰～鍐欏鍚�"),
                !1) : C.trim(I).length > 20 ? (t("apply-name", "濮撳悕杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�20涓眽瀛�"),
                !1) : e(C.trim(I)) < 2 ? (t("apply-name", "濮撳悕蹇呴』鑷冲皯鍖呭惈2涓眽瀛�"),
                !1) : !A(I) || (t("apply-name", "濮撳悕鍖呭惈闈炴硶瀛楃"),
                !1)
            },
            checkName: function(I) {
                return "" === C.trim(I) ? (t("apply-name-receiver", "璇峰～鍐欐敹璐т汉濮撳悕"),
                !1) : C.trim(I).length > 20 ? (t("apply-name-receiver", "鏀惰揣浜哄鍚嶈繃闀匡紝璇锋偍鏈€澶氳緭鍏�20涓眽瀛�"),
                !1) : e(C.trim(I)) < 2 ? (t("apply-name-receiver", "濮撳悕蹇呴』鑷冲皯鍖呭惈2涓眽瀛�"),
                !1) : !A(I) || (t("apply-name-receiver", "濮撳悕鍖呭惈闈炴硶瀛楃"),
                !1)
            },
            checkIdCard: function(C) {
                return A(C) ? (t("apply-id", "璇佷欢鍙风爜鍖呭惈闈炴硶瀛楃"),
                !1) : !!(0,
                O.default)(C) || (t("apply-id", "璇疯緭鍏ユ纭殑韬唤璇佸彿"),
                !1)
            },
            checkAge: function(C) {
                var I = C.substr(6, 4) + "/" + C.substr(10, 2) + "/" + C.substr(12, 2)
                  , T = new Date(I)
                  , E = new Date
                  , D = E.getFullYear() - T.getFullYear();
                return E.getMonth() < T.getMonth() || E.getMonth() == T.getMonth() && E.getDate() < T.getDate() ? D-- : D++,
                !(D < 16) || (t("apply-id", "鎶辨瓑锛屾牴鎹浗瀹剁浉鍏宠瀹氭湭婊�16鍛ㄥ瞾鏃犳硶鍔炵悊姝や笟鍔�"),
                !1)
            },
            ageLimit: function(C, I) {
                var T = C.substr(6, 4) + "/" + C.substr(10, 2) + "/" + C.substr(12, 2)
                  , E = new Date(T);
                return !(E.getFullYear() < 1999) || (t("apply-id", "鎮ㄧ殑鍏ョ綉韬唤璇佷欢涓嶆弧瓒冲椁愬姙鐞嗘潯浠讹紝鍙洿鎹㈣韩浠借瘉鍔炵悊鎴�" + I + "<<鍔炵悊鍏朵粬浼樻儬濂楅>></a>"),
                !1)
            },
            checkAgeLimit: function(I, T) {
                var E = !0
                  , D = new Date
                  , _ = D.getMonth() + 1
                  , O = D.getDate()
                  , e = D.getFullYear() - I.substring(6, 10) - 1;
                return (I.substring(10, 12) < _ || I.substring(10, 12) == _ && I.substring(12, 14) <= O) && e++,
                C.ajax({
                    type: "POST",
                    dataType: "json",
                    async: !1,
                    url: "/king/state/queryYear",
                    success: function(C) {
                        if ("0000" !== C.code)
                            return E = !0;
                        for (var I in C.result) {
                            var D = C.result[I];
                            if (T === I && D > e)
                                return t("apply-id", "鎶辨瓑锛屾牴鎹浗瀹剁浉鍏宠瀹氭偍鐨勫勾榫勬棤娉曞姙鐞嗘涓氬姟銆�"),
                                E = !1;
                            if (T != I)
                                E = !1;
                            else if (T === I && D <= e)
                                return E = !0,
                                !0
                        }
                        return !E || void 0
                    },
                    error: function() {
                        return !0
                    }
                }),
                E
            },
            checkPhone: function(I) {
                return "" === C.trim(I) ? (t("apply-phone", "璇峰～鍐欒仈绯荤數璇�"),
                !1) : !!i(I) || (t("apply-phone", "鎮ㄧ殑鎵嬫満鍙风爜鏍煎紡鏈夎锛岃閲嶆柊杈撳叆"),
                !1)
            },
            checkReceiverPhone: function(I) {
                return "" === C.trim(I) ? (t("apply-phone-receiver", "璇峰～鍐欐敹璐т汉鑱旂郴鐢佃瘽"),
                !1) : !!i(I) || (t("apply-phone-receiver", "鎮ㄧ殑鎵嬫満鍙风爜鏍煎紡鏈夎锛岃閲嶆柊杈撳叆"),
                !1)
            },
            checkNumber: function(I) {
                return "" !== C.trim(I) || (t("number", "璇烽€夋嫨鍙风爜"),
                !1)
            },
            checkFirstMonth: function(I) {
                return !D(C.trim(I)) || (t("firstMonth", "璇烽€夋嫨棣栨湀璧勮垂"),
                !1)
            },
            checkProtocol: function(C) {
                return !!C || (t("protocol", "璇风‘璁ゅ凡闃呰骞跺嬀閫夊叆缃戝崗璁�"),
                !1)
            },
            checkActive: function(I) {
                return "" !== C.trim(I) || (t("active", "璇烽€夋嫨浼樻儬娲诲姩"),
                !1)
            },
            checkNumAddress: function(I) {
                return "璇烽€夋嫨鍙风爜褰掑睘鍦�" !== C.trim(I) || (t("location", "璇烽€夋嫨鍙风爜褰掑睘鍦�"),
                !1)
            },
            checkAddress: function(I) {
                return "璇烽€夋嫨鍖�/鍘�" !== C.trim(I) || (t("delivery", "璇烽€夋嫨鎮ㄧ殑閰嶉€佸尯鍘�"),
                !1)
            },
            checkPostAddress: function(I) {
                return "璇烽€夋嫨鐪佷唤/鍦板競/鍖哄幙" !== C.trim(I) || (t("delivery", "璇烽€夋嫨鎮ㄧ殑閰嶉€佺渷甯傚尯鍘�"),
                !1)
            },
            checkAddressInfo: function(I) {
                return "" === C.trim(I) ? (t("delivery-desc", "璇峰～鍐欒缁嗗湴鍧€"),
                !1) : e(I) > 50 ? (t("delivery-desc", "璇︾粏鍦板潃杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�50涓眽瀛�"),
                !1) : e(I) < 4 ? (t("delivery-desc", "璇︾粏鍦板潃澶煭锛岃鎮ㄦ渶灏戣緭鍏�4涓眽瀛�"),
                !1) : !!S(I) || (t("delivery-desc", "浠呮敮鎸佽緭鍏ユ眽瀛椼€佹暟瀛椼€佸瓧姣嶃€佲€斻€乢銆侊紙锛夈€佺┖鏍笺€侀€楀彿"),
                !1)
            },
            checkYzm: function(I) {
                return "" !== C.trim(I) || (t("apply-yzm", "璇峰～鍐欓獙璇佺爜"),
                !1)
            },
            checkYzmPhone: function(I) {
                return I === C("#mobilePhone").val().trim() || (t("apply-yzm", "楠岃瘉鐮侀敊璇�"),
                C(".rightI").hide(),
                !1)
            },
            checkYzmPhoneOld: function(I) {
                return I === C("#oldNum").val().trim() || (N("apply-yzm", "楠岃瘉鐮侀敊璇�"),
                C(".rightI").hide(),
                !1)
            },
            checkYzmOld: function(I) {
                return "" !== C.trim(I) || (N("apply-yzm", "璇峰～鍐欓獙璇佺爜"),
                !1)
            },
            checkTel: function(I) {
                return "" === C.trim(I) ? (N("apply-number", "璇峰～鍐欏姙鐞嗗彿鐮�"),
                !1) : !!o(I) || (N("apply-number", "鍔炵悊鍙风爜闈炶仈閫氬彿鐮�"),
                !1)
            }
        },
        I.ZMICE = {
            checkNumAddress: function(I) {
                return "璇烽€夋嫨鍙风爜褰掑睘鍦�" !== C.trim(I) || (r("璇烽€夋嫨鍙风爜褰掑睘鍦�"),
                !1)
            },
            checkTel: function(I) {
                return "" !== C.trim(I) || (r("璇峰厛閫夋嫨鍙风爜"),
                !1)
            },
            checkAddress: function(I) {
                return "璇烽€夋嫨鍖�/鍘�" !== C.trim(I) || (r("璇烽€夋嫨鎮ㄧ殑閰嶉€佸尯鍘�"),
                !1)
            },
            checkAddressInfo: function(I) {
                return "" === C.trim(I) ? (r("璇峰～鍐欒缁嗗湴鍧€"),
                !1) : e(I) > 50 ? (r("璇︾粏鍦板潃杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�50涓眽瀛�"),
                !1) : e(I) < 4 ? (r("璇︾粏鍦板潃澶煭锛岃鎮ㄦ渶灏戣緭鍏�4涓眽瀛�"),
                !1) : !!S(I) || (r("浠呮敮鎸佽緭鍏ユ眽瀛椼€佹暟瀛椼€佸瓧姣嶃€佲€斻€乢銆侊紙锛夈€佺┖鏍笺€侀€楀彿"),
                !1)
            },
            checkReceiverName: function(I, T) {
                return "" === C.trim(T) ? (C(I).addClass("error").val("璇峰～鍐欏鍚�"),
                !1) : C.trim(T).length > 20 ? (C(I).addClass("error").val("鏈€澶氳緭鍏�20涓眽瀛�"),
                !1) : e(C.trim(T)) < 2 ? (C(I).addClass("error").val("蹇呴』鑷冲皯鍖呭惈2涓眽瀛�"),
                !1) : A(T) ? (C(I).addClass("error").val("濮撳悕鍖呭惈闈炴硶瀛楃"),
                !1) : !C(I).hasClass("error")
            },
            checkIdCard: function(I, T) {
                return A(T) ? (C(I).addClass("error").val("璇佷欢鍙风爜鍖呭惈闈炴硶瀛楃"),
                !1) : (0,
                O.default)(T) ? !C(I).hasClass("error") : (C(I).addClass("error").val("璇疯緭鍏ユ纭殑韬唤璇佸彿"),
                !1)
            },
            checkNum: function(I, T) {
                return "" === C.trim(T) ? (C(I).addClass("error").text("璇烽€夋嫨鍙风爜"),
                !1) : !C(I).hasClass("error")
            }
        },
        I.WebCustCheck = {
            checkReceiverName: function(I) {
                return "" === C.trim(I) ? (R("apply-name", "name-error", "璇峰～鍐欏鍚�"),
                !1) : C.trim(I).length > 20 ? (R("apply-name", "name-error", "濮撳悕杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�20涓眽瀛�"),
                !1) : e(C.trim(I)) < 2 ? (R("apply-name", "name-error", "濮撳悕蹇呴』鑷冲皯鍖呭惈2涓眽瀛�"),
                !1) : !A(I) || (R("apply-name", "name-error", "濮撳悕鍖呭惈闈炴硶瀛楃"),
                !1)
            },
            checkIdCard: function(C) {
                return A(C) ? (R("apply-id", "id-error", "璇佷欢鍙风爜鍖呭惈闈炴硶瀛楃"),
                !1) : !!(0,
                O.default)(C) || (R("apply-id", "id-error", "璇疯緭鍏ユ纭殑韬唤璇佸彿"),
                !1)
            },
            checkAge: function(C) {
                var I = C.substr(6, 4) + "/" + C.substr(10, 2) + "/" + C.substr(12, 2)
                  , T = new Date(I)
                  , E = new Date
                  , D = E.getFullYear() - T.getFullYear();
                return E.getMonth() < T.getMonth() || E.getMonth() == T.getMonth() && E.getDate() < T.getDate() ? D-- : D++,
                !(D < 16) || (R("apply-id", "id-error", "鎶辨瓑锛屾牴鎹浗瀹剁浉鍏宠瀹氭湭婊�16鍛ㄥ瞾鏃犳硶鍔炵悊姝や笟鍔�"),
                !1)
            },
            checkAgeLimit: function(I, T) {
                var E = !0
                  , D = new Date
                  , _ = D.getMonth() + 1
                  , O = D.getDate()
                  , e = D.getFullYear() - I.substring(6, 10) - 1;
                return (I.substring(10, 12) < _ || I.substring(10, 12) == _ && I.substring(12, 14) <= O) && e++,
                C.ajax({
                    type: "POST",
                    dataType: "json",
                    async: !1,
                    url: "/king/state/queryYear",
                    success: function(C) {
                        if ("0000" !== C.code)
                            return E = !0;
                        for (var I in C.result) {
                            var D = C.result[I];
                            if (T === I && D > e)
                                return R("apply-id", "id-error", "鎶辨瓑锛屾牴鎹浗瀹剁浉鍏宠瀹氭偍鐨勫勾榫勬棤娉曞姙鐞嗘涓氬姟銆�"),
                                E = !1;
                            if (T != I)
                                E = !1;
                            else if (T === I && D <= e)
                                return E = !0,
                                !0
                        }
                        return !E || void 0
                    },
                    error: function() {
                        return !0
                    }
                }),
                E
            },
            checkPhone: function(I) {
                return "" === C.trim(I) ? (R("apply-phone", "phone-error", "璇峰～鍐欒仈绯荤數璇�"),
                !1) : !!i(I) || (R("apply-phone", "phone-error", "鎮ㄧ殑鎵嬫満鍙风爜鏍煎紡鏈夎锛岃閲嶆柊杈撳叆"),
                !1)
            },
            checkNumber: function(I) {
                return "" !== C.trim(I) || (R("number", "number-error", "璇烽€夋嫨鍙风爜"),
                !1)
            },
            checkNumProvince: function(I) {
                return "" !== C.trim(I) || (R("select-province", "province-error", "璇烽€夋嫨鍙风爜褰掑睘鐨勭渷"),
                !1)
            },
            checkNumCity: function(I) {
                return "" !== C.trim(I) || (R("select-city", "city-error", "璇烽€夋嫨鍙风爜褰掑睘鐨勫競"),
                !1)
            },
            checkProvinceAddress: function(I) {
                return "" !== C.trim(I) || (R("delivery-province", "delivery-province-error", "璇烽€夋嫨鎮ㄧ殑閰嶉€佺渷浠�"),
                !1)
            },
            checkCityAddress: function(I) {
                return "" !== C.trim(I) || (R("delivery-city", "delivery-city-error", "璇烽€夋嫨鎮ㄧ殑閰嶉€佸湴甯�"),
                !1)
            },
            checkCountyAddress: function(I) {
                return "" !== C.trim(I) || (R("delivery-county", "county-error", "璇烽€夋嫨鎮ㄧ殑閰嶉€佸尯鍘�"),
                !1)
            },
            checkAddressInfo: function(I) {
                return "" === C.trim(I) ? (R("delivery-desc", "address-error-desc", "璇峰～鍐欒缁嗗湴鍧€"),
                !1) : e(I) > 50 ? (R("delivery-desc", "address-error-desc", "璇︾粏鍦板潃杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�50涓眽瀛�"),
                !1) : e(I) < 4 ? (R("delivery-desc", "address-error-desc", "璇︾粏鍦板潃澶煭锛岃鎮ㄦ渶灏戣緭鍏�4涓眽瀛�"),
                !1) : !!S(I) || (R("delivery-desc", "address-error-desc", "浠呮敮鎸佽緭鍏ユ眽瀛椼€佹暟瀛椼€佸瓧姣嶃€佲€斻€乢銆侊紙锛夈€佺┖鏍笺€侀€楀彿"),
                !1)
            }
        },
        I.CustViceCheck = {
            checkReceiverName: function(I, T) {
                return "" === C.trim(T) ? (Y(I, "璇峰～鍐欏鍚�"),
                !1) : C.trim(T).length > 20 ? (Y(I, "濮撳悕杩囬暱锛岃鎮ㄦ渶澶氳緭鍏�20涓眽瀛�"),
                !1) : e(C.trim(T)) < 2 ? (Y(I, "濮撳悕蹇呴』鑷冲皯鍖呭惈2涓眽瀛�"),
                !1) : !A(T) || (Y(I, "濮撳悕鍖呭惈闈炴硶瀛楃"),
                !1)
            },
            checkIdCard: function(C, I) {
                return A(I) ? (Y(C, "璇佷欢鍙风爜鍖呭惈闈炴硶瀛楃"),
                !1) : !!(0,
                O.default)(I) || (Y(C, "璇疯緭鍏ユ纭殑韬唤璇佸彿"),
                !1)
            },
            checkNum: function(I, T) {
                return "" !== C.trim(T) || (Y(I, "璇烽€夋嫨鍙风爜"),
                !1)
            }
        }
    }
    ).call(I, T(1))
}
, function(C, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    }),
    I.default = function(C) {
        var I = {
            11: "鍖椾含",
            12: "澶╂触",
            13: "娌冲寳",
            14: "灞辫タ",
            15: "鍐呰挋鍙�",
            21: "杈藉畞",
            22: "鍚夋灄",
            23: "榛戦緳姹�",
            31: "涓婃捣",
            32: "姹熻嫃",
            33: "娴欐睙",
            34: "瀹夊窘",
            35: "绂忓缓",
            36: "姹熻タ",
            37: "灞变笢",
            41: "娌冲崡",
            42: "婀栧寳",
            43: "婀栧崡",
            44: "骞夸笢",
            45: "骞胯タ",
            46: "娴峰崡",
            50: "閲嶅簡",
            51: "鍥涘窛",
            52: "璐靛窞",
            53: "浜戝崡",
            54: "瑗胯棌",
            61: "闄曡タ",
            62: "鐢樿們",
            63: "闈掓捣",
            64: "瀹佸",
            65: "鏂扮枂",
            71: "鍙版咕",
            81: "棣欐腐",
            82: "婢抽棬",
            91: "鍥藉"
        }
          , T = void 0
          , E = void 0
          , D = void 0
          , _ = void 0
          , O = C.split("");
        if (null === I[parseInt(C.substr(0, 2))])
            return !1;
        switch (C.length) {
        case 18:
            var e = void 0;
            return e = parseInt(C.substr(6, 4)) % 4 === 0 || parseInt(C.substr(6, 4)) % 100 === 0 && parseInt(C.substr(6, 4)) % 4 === 0 ? /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/ : /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/,
            !!e.test(C) && (D = 7 * (parseInt(O[0]) + parseInt(O[10])) + 9 * (parseInt(O[1]) + parseInt(O[11])) + 10 * (parseInt(O[2]) + parseInt(O[12])) + 5 * (parseInt(O[3]) + parseInt(O[13])) + 8 * (parseInt(O[4]) + parseInt(O[14])) + 4 * (parseInt(O[5]) + parseInt(O[15])) + 2 * (parseInt(O[6]) + parseInt(O[16])) + parseInt(O[7]) + 6 * parseInt(O[8]) + 3 * parseInt(O[9]),
            T = D % 11,
            _ = "F",
            E = "10X98765432",
            _ = E.substr(T, 1),
            _ == O[17].toUpperCase());
        default:
            return !1
        }
    }
}
, function(C, I, T) {
    (function(C) {
        "use strict";
        function E(C) {
            if (C && C.__esModule)
                return C;
            var I = {};
            if (null != C)
                for (var T in C)
                    Object.prototype.hasOwnProperty.call(C, T) && (I[T] = C[T]);
            return I.default = C,
            I
        }
        function D(C) {
            return C && C.__esModule ? C : {
                default: C
            }
        }
        function _(I, T) {
            C("#province li, #city li").removeClass("selected"),
            C("#province").find("li[data-code=" + I + "]").addClass("selected");
            var E = [];
            o[I].forEach(function(C) {
                E.push("<li data-code=" + C.CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }),
            C("#city").html(E),
            r.isEmpty(T) || C("#city").find("li[data-code=" + T + "]").addClass("selected")
        }
        function O(T) {
            I.city = o = R.default;
            var E = [];
            Y.default.forEach(function(C) {
                E.push("<li data-code=" + C.PROVINCE_CODE + ">" + C.PROVINCE_NAME + "</li>")
            }),
            C("#province").html(E).find("li[data-code=" + T.numRes.essProvince + "]").addClass("selected"),
            _(T.numRes.essProvince, T.numRes.essCity)
        }
        Object.defineProperty(I, "__esModule", {
            value: !0
        }),
        I.setPost = I.cityChange = I.provinceChangePost = I.provincePostList = I.city = void 0,
        I.provinceChange = _,
        I.setLocation = O;
        var e = T(63)
          , S = D(e)
          , t = T(65)
          , R = D(t)
          , n = T(64)
          , Y = D(n)
          , N = T(66)
          , r = E(N)
          , o = I.city = [];
        I.provincePostList = function(I) {
            var T = [];
            if ("" !== province && Y.default.forEach(function(C) {
                if ("89" !== C.PROVINCE_CODE && "79" !== C.PROVINCE_CODE) {
                    var I = S.default.PROVINCE_LIST.filter(function(I) {
                        return I.ESS_PROVINCE_CODE === C.PROVINCE_CODE
                    })[0];
                    T.push("<li data-ess-code=" + I.PROVINCE_CODE + " data-code=" + C.PROVINCE_CODE + ">" + C.PROVINCE_NAME + "</li>")
                }
            }),
            89 === I) {
                var E = S.default.PROVINCE_LIST.filter(function(C) {
                    return "89" === C.ESS_PROVINCE_CODE
                })[0];
                T.length = 0,
                T.push("<li data-ess-code=" + E.PROVINCE_CODE + " data-code=" + I + ">鏂扮枂</li>")
            } else if (79 === I) {
                var D = S.default.PROVINCE_LIST.filter(function(C) {
                    return "79" === C.ESS_PROVINCE_CODE
                })[0];
                T.length = 0,
                T.push("<li data-ess-code=" + D.PROVINCE_CODE + " data-code=" + I + ">瑗胯棌</li>")
            }
            C("#post-province").html(T).find("li[data-code=" + I + "]").addClass("selected")
        }
        ,
        I.provinceChangePost = function(I, T) {
            C("#post-province").find("li[data-code=" + I + "]").addClass("selected");
            var E = S.default.PROVINCE_LIST.filter(function(C) {
                return C.ESS_PROVINCE_CODE === "" + I
            })[0]
              , D = [];
            S.default.PROVINCE_MAP[E.PROVINCE_CODE].forEach(function(C) {
                D.push("<li data-code=" + C.CITY_CODE + " data-ess-code=" + C.ESS_CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }),
            C("#post-city").empty().html(D),
            r.isEmpty(T) || C("#post-city").find("li[data-code=" + T + "]").addClass("selected")
        }
        ,
        I.cityChange = function(I, T, E) {
            C("#post-city li, #post-district li").removeClass("selected"),
            C("#post-city").find("li[data-code=" + T + "]").addClass("selected");
            var D = [];
            I.forEach(function(C) {
                D.push("<li data-code=" + C.DISTRICT_CODE + ">" + C.DISTRICT_NAME + "</li>")
            }),
            C("#post-district").html(D),
            r.isEmpty(E) || C("#post-district").find("li[data-code=" + E + "]").addClass("selected")
        }
        ,
        I.setPost = function(I, T, E) {
            var D = [];
            D = void 0 === E ? S.default.PROVINCE_LIST.filter(function(C) {
                return C.ESS_PROVINCE_CODE === I.numRes.essProvince
            })[0] : S.default.PROVINCE_LIST.filter(function(C) {
                return C.ESS_PROVINCE_CODE === "" + E
            })[0];
            var _ = [];
            S.default.PROVINCE_MAP[D.PROVINCE_CODE].forEach(function(C) {
                _.push("<li data-province-name=" + D.PROVINCE_NAME + " data-code=" + C.CITY_CODE + " data-ess-code=" + C.ESS_CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }),
            C("#post-city").html(_),
            C("#post-city").find("li").eq(0).addClass("selected");
            var O = S.default.PROVINCE_MAP[D.PROVINCE_CODE].filter(function(C) {
                return C.ESS_CITY_CODE === I.numRes.essCity
            })[0];
            void 0 === O && (O = S.default.PROVINCE_MAP[D.PROVINCE_CODE][0]);
            var e = [];
            T.forEach(function(C) {
                e.push("<li data-code=" + C.DISTRICT_CODE + ">" + C.DISTRICT_NAME + "</li>")
            }),
            C("#post-district").html(e),
            I.post = {},
            I.post.webProvince = D.PROVINCE_CODE,
            I.post.webCity = O.CITY_CODE
        }
    }
    ).call(I, T(1))
}
, , , function(C, I, T) {
    (function(C) {
        "use strict";
        function E(C) {
            if (C && C.__esModule)
                return C;
            var I = {};
            if (null != C)
                for (var T in C)
                    Object.prototype.hasOwnProperty.call(C, T) && (I[T] = C[T]);
            return I.default = C,
            I
        }
        function D(C) {
            return C && C.__esModule ? C : {
                default: C
            }
        }
        function _(I, T, E) {
            C("#province li, #city li").removeClass("selected"),
            C("#province").find("li[data-code=" + I + "]").addClass("selected");
            var D = [];
            R.isEmpty(E) ? Y[I].forEach(function(C) {
                D.push("<li data-code=" + C.CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }) : E[I].forEach(function(C) {
                D.push("<li data-code=" + C.CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }),
            C("#city").html(D),
            R.isEmpty(T) || C("#city").find("li[data-code=" + T + "]").addClass("selected")
        }
        function O(T, E, D) {
            I.city = Y = T.cityData;
            var O = [];
            D ? D.forEach(function(C) {
                T.provinceData.forEach(function(I) {
                    I.PROVINCE_CODE === C && O.push("<li data-code=" + I.PROVINCE_CODE + ">" + I.PROVINCE_NAME + "</li>")
                })
            }) : T.provinceData.forEach(function(C) {
                O.push("<li data-code=" + C.PROVINCE_CODE + ">" + C.PROVINCE_NAME + "</li>")
            }),
            C("#province").html(O).find("li[data-code=" + E.numRes.essProvince + "]").addClass("selected"),
            _(E.numRes.essProvince, E.numRes.essCity)
        }
        Object.defineProperty(I, "__esModule", {
            value: !0
        }),
        I.setPost = I.cityChange = I.provincePostListLocal = I.provinceChangePost = I.provincePostList = I.setProvince = I.city = I.province = void 0,
        I.provinceChange = _,
        I.setLocation = O;
        var e = T(72)
          , S = D(e)
          , t = T(66)
          , R = E(t)
          , n = I.province = ""
          , Y = I.city = [];
        I.setProvince = function(C) {
            I.province = n = C
        }
        ,
        I.provincePostList = function(I) {
            var T = [];
            "" !== n && n.provinceData.forEach(function(C) {
                "89" !== C.PROVINCE_CODE && "79" !== C.PROVINCE_CODE && T.push("<li data-code=" + C.PROVINCE_CODE + ">" + C.PROVINCE_NAME + "</li>")
            }),
            89 === I ? (T.length = 0,
            T.push("<li data-code=" + I + ">鏂扮枂</li>")) : 79 === I && (T.length = 0,
            T.push("<li data-code=" + I + ">瑗胯棌</li>")),
            C("#post-province").html(T).find("li[data-code=" + I + "]").addClass("selected")
        }
        ,
        I.provinceChangePost = function(I, T) {
            C("#post-province").find("li[data-code=" + I + "]").addClass("selected");
            var E = S.default.PROVINCE_LIST.filter(function(C) {
                return C.ESS_PROVINCE_CODE === "" + I
            })[0]
              , D = [];
            S.default.PROVINCE_MAP[E.PROVINCE_CODE].forEach(function(C) {
                D.push("<li data-code=" + C.CITY_CODE + " data-ess-code=" + C.ESS_CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }),
            C("#post-city").empty(),
            C("#post-city").html(D),
            R.isEmpty(T) || C("#post-city").find("li[data-code=" + T + "]").addClass("selected")
        }
        ,
        I.provincePostListLocal = function(I) {
            var T = [];
            S.default.PROVINCE_LIST.forEach(function(C) {
                "89" !== C.ESS_PROVINCE_CODE && "79" !== C.ESS_PROVINCE_CODE && T.push("<li data-code=" + C.ESS_PROVINCE_CODE + ">" + C.PROVINCE_NAME + "</li>")
            }),
            89 === I ? (T.length = 0,
            T.push("<li data-code=" + I + ">鏂扮枂</li>")) : 79 === I && (T.length = 0,
            T.push("<li data-code=" + I + ">瑗胯棌</li>")),
            C("#post-province").html(T).find("li[data-code=" + I + "]").addClass("selected")
        }
        ,
        I.cityChange = function(I, T) {
            C("#post-city li, #post-district li").removeClass("selected"),
            C("#post-city").find("li[data-code=" + I + "]").addClass("selected");
            var E = [];
            S.default.CITY_MAP[I].forEach(function(C) {
                E.push("<li data-code=" + C.DISTRICT_CODE + ">" + C.DISTRICT_NAME + "</li>")
            }),
            C("#post-district").html(E),
            R.isEmpty(T) || C("#post-district").find("li[data-code=" + T + "]").addClass("selected")
        }
        ,
        I.setPost = function(I, T) {
            var E = [];
            E = void 0 === T ? S.default.PROVINCE_LIST.filter(function(C) {
                return C.ESS_PROVINCE_CODE === I.numRes.essProvince
            })[0] : S.default.PROVINCE_LIST.filter(function(C) {
                return C.ESS_PROVINCE_CODE === "" + T
            })[0];
            var D = [];
            S.default.PROVINCE_MAP[E.PROVINCE_CODE].forEach(function(C) {
                D.push("<li data-province-name=" + E.PROVINCE_NAME + " data-code=" + C.CITY_CODE + " data-ess-code=" + C.ESS_CITY_CODE + ">" + C.CITY_NAME + "</li>")
            }),
            C("#post-city").html(D);
            var _ = S.default.PROVINCE_MAP[E.PROVINCE_CODE].filter(function(C) {
                return C.ESS_CITY_CODE === I.numRes.essCity
            })[0];
            void 0 === _ && (_ = S.default.PROVINCE_MAP[E.PROVINCE_CODE][0]);
            var O = [];
            S.default.CITY_MAP[_.CITY_CODE].forEach(function(C) {
                O.push("<li data-code=" + C.DISTRICT_CODE + ">" + C.DISTRICT_NAME + "</li>")
            }),
            C("#post-district").html(O),
            I.post = {},
            I.post.webProvince = E.PROVINCE_CODE,
            I.post.webCity = _.CITY_CODE
        }
    }
    ).call(I, T(1))
}
, function(C, I) {
    "use strict";
    Object.defineProperty(I, "__esModule", {
        value: !0
    }),
    I.default = {
        CITY_MAP: {
            110100: [{
                CITY_CODE: "110100",
                DISTRICT_CODE: "110101",
                DISTRICT_NAME: "涓滃煄鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110102",
                DISTRICT_NAME: "瑗垮煄鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110105",
                DISTRICT_NAME: "鏈濋槼鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110106",
                DISTRICT_NAME: "涓板彴鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110107",
                DISTRICT_NAME: "鐭虫櫙灞卞尯"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110108",
                DISTRICT_NAME: "娴锋穩鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110109",
                DISTRICT_NAME: "闂ㄥご娌熷尯"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110111",
                DISTRICT_NAME: "鎴垮北鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110112",
                DISTRICT_NAME: "閫氬窞鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110113",
                DISTRICT_NAME: "椤轰箟鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110114",
                DISTRICT_NAME: "鏄屽钩鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110115",
                DISTRICT_NAME: "澶у叴鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110116",
                DISTRICT_NAME: "鎬€鏌斿尯"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110117",
                DISTRICT_NAME: "骞宠胺鍖�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110228",
                DISTRICT_NAME: "瀵嗕簯鍘�"
            }, {
                CITY_CODE: "110100",
                DISTRICT_CODE: "110229",
                DISTRICT_NAME: "寤跺簡鍘�"
            }],
            120100: [{
                CITY_CODE: "120100",
                DISTRICT_CODE: "120101",
                DISTRICT_NAME: "鍜屽钩鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120102",
                DISTRICT_NAME: "娌充笢鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120103",
                DISTRICT_NAME: "娌宠タ鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120104",
                DISTRICT_NAME: "鍗楀紑鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120105",
                DISTRICT_NAME: "娌冲寳鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120106",
                DISTRICT_NAME: "绾㈡ˉ鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120107",
                DISTRICT_NAME: "濉樻步鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120108",
                DISTRICT_NAME: "姹夋步鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120109",
                DISTRICT_NAME: "澶ф腐鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120110",
                DISTRICT_NAME: "涓滀附鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120111",
                DISTRICT_NAME: "瑗块潚鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120112",
                DISTRICT_NAME: "娲ュ崡鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120113",
                DISTRICT_NAME: "鍖楄景鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120114",
                DISTRICT_NAME: "姝︽竻鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120115",
                DISTRICT_NAME: "瀹濆澔鍖�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120221",
                DISTRICT_NAME: "瀹佹渤鍘�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120223",
                DISTRICT_NAME: "闈欐捣鍘�"
            }, {
                CITY_CODE: "120100",
                DISTRICT_CODE: "120225",
                DISTRICT_NAME: "钃熷幙"
            }],
            130100: [{
                CITY_CODE: "130100",
                DISTRICT_CODE: "130102",
                DISTRICT_NAME: "闀垮畨鍖�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130104",
                DISTRICT_NAME: "妗ヨタ鍖�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130105",
                DISTRICT_NAME: "鏂板崕鍖�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130107",
                DISTRICT_NAME: "浜曢檳鐭垮尯"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130108",
                DISTRICT_NAME: "瑁曞崕鍖�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130121",
                DISTRICT_NAME: "浜曢檳鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130123",
                DISTRICT_NAME: "姝ｅ畾鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130124",
                DISTRICT_NAME: "鏍惧煄鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130125",
                DISTRICT_NAME: "琛屽攼鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130126",
                DISTRICT_NAME: "鐏靛鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130127",
                DISTRICT_NAME: "楂橀倯鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130128",
                DISTRICT_NAME: "娣辨辰鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130129",
                DISTRICT_NAME: "璧炵殗鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130130",
                DISTRICT_NAME: "鏃犳瀬鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130131",
                DISTRICT_NAME: "骞冲北鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130132",
                DISTRICT_NAME: "鍏冩皬鍘�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130133",
                DISTRICT_NAME: "璧靛幙"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130181",
                DISTRICT_NAME: "杈涢泦甯�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130182",
                DISTRICT_NAME: "钘佸煄甯�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130183",
                DISTRICT_NAME: "鏅嬪窞甯�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130184",
                DISTRICT_NAME: "鏂颁箰甯�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130185",
                DISTRICT_NAME: "楣挎硥甯�"
            }, {
                CITY_CODE: "130100",
                DISTRICT_CODE: "130109",
                DISTRICT_NAME: "寮€鍙戝尯"
            }],
            130200: [{
                CITY_CODE: "130200",
                DISTRICT_CODE: "130202",
                DISTRICT_NAME: "璺崡鍖�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130203",
                DISTRICT_NAME: "璺寳鍖�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130204",
                DISTRICT_NAME: "鍙ゅ喍鍖�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130205",
                DISTRICT_NAME: "寮€骞冲尯"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130207",
                DISTRICT_NAME: "涓板崡鍖�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130208",
                DISTRICT_NAME: "涓版鼎鍖�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130223",
                DISTRICT_NAME: "婊﹀窞甯�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130224",
                DISTRICT_NAME: "婊﹀崡鍘�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130225",
                DISTRICT_NAME: "涔愪涵鍘�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130227",
                DISTRICT_NAME: "杩佽タ鍘�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130229",
                DISTRICT_NAME: "鐜夌敯鍘�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130230",
                DISTRICT_NAME: "鏇瑰鐢�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130281",
                DISTRICT_NAME: "閬靛寲甯�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130283",
                DISTRICT_NAME: "杩佸畨甯�"
            }, {
                CITY_CODE: "130200",
                DISTRICT_CODE: "130284",
                DISTRICT_NAME: "楂樻柊鎶€鏈骇涓氬洯鍖�"
            }],
            130300: [{
                CITY_CODE: "130300",
                DISTRICT_CODE: "130302",
                DISTRICT_NAME: "娴锋腐鍖�"
            }, {
                CITY_CODE: "130300",
                DISTRICT_CODE: "130303",
                DISTRICT_NAME: "灞辨捣鍏冲尯"
            }, {
                CITY_CODE: "130300",
                DISTRICT_CODE: "130304",
                DISTRICT_NAME: "鍖楁埓娌冲尯"
            }, {
                CITY_CODE: "130300",
                DISTRICT_CODE: "130321",
                DISTRICT_NAME: "闈掗緳婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "130300",
                DISTRICT_CODE: "130322",
                DISTRICT_NAME: "鏄岄粠鍘�"
            }, {
                CITY_CODE: "130300",
                DISTRICT_CODE: "130323",
                DISTRICT_NAME: "鎶氬畞鍘�"
            }, {
                CITY_CODE: "130300",
                DISTRICT_CODE: "130324",
                DISTRICT_NAME: "鍗㈤緳鍘�"
            }],
            130400: [{
                CITY_CODE: "130400",
                DISTRICT_CODE: "130402",
                DISTRICT_NAME: "閭北鍖�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130403",
                DISTRICT_NAME: "涓涘彴鍖�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130404",
                DISTRICT_NAME: "澶嶅叴鍖�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130406",
                DISTRICT_NAME: "宄板嘲鐭垮尯"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130421",
                DISTRICT_NAME: "閭兏鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130423",
                DISTRICT_NAME: "涓存汲鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130424",
                DISTRICT_NAME: "鎴愬畨鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130425",
                DISTRICT_NAME: "澶у悕鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130426",
                DISTRICT_NAME: "娑夊幙"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130427",
                DISTRICT_NAME: "纾佸幙"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130428",
                DISTRICT_NAME: "鑲ヤ埂鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130429",
                DISTRICT_NAME: "姘稿勾鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130430",
                DISTRICT_NAME: "閭卞幙"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130431",
                DISTRICT_NAME: "楦℃辰鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130432",
                DISTRICT_NAME: "骞垮钩鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130433",
                DISTRICT_NAME: "棣嗛櫠鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130434",
                DISTRICT_NAME: "榄忓幙"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130435",
                DISTRICT_NAME: "鏇插懆鍘�"
            }, {
                CITY_CODE: "130400",
                DISTRICT_CODE: "130481",
                DISTRICT_NAME: "姝﹀畨甯�"
            }],
            130500: [{
                CITY_CODE: "130500",
                DISTRICT_CODE: "130502",
                DISTRICT_NAME: "妗ヤ笢鍖�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130503",
                DISTRICT_NAME: "妗ヨタ鍖�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130521",
                DISTRICT_NAME: "閭㈠彴鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130522",
                DISTRICT_NAME: "涓村煄鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130523",
                DISTRICT_NAME: "鍐呬笜鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130524",
                DISTRICT_NAME: "鏌忎埂鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130525",
                DISTRICT_NAME: "闅嗗哀鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130526",
                DISTRICT_NAME: "浠诲幙"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130527",
                DISTRICT_NAME: "鍗楀拰鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130528",
                DISTRICT_NAME: "瀹佹檵鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130529",
                DISTRICT_NAME: "宸ㄩ箍鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130530",
                DISTRICT_NAME: "鏂版渤鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130531",
                DISTRICT_NAME: "骞垮畻鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130532",
                DISTRICT_NAME: "骞充埂鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130533",
                DISTRICT_NAME: "濞佸幙"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130534",
                DISTRICT_NAME: "娓呮渤鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130535",
                DISTRICT_NAME: "涓磋タ鍘�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130581",
                DISTRICT_NAME: "鍗楀甯�"
            }, {
                CITY_CODE: "130500",
                DISTRICT_CODE: "130582",
                DISTRICT_NAME: "娌欐渤甯�"
            }],
            130600: [{
                CITY_CODE: "130600",
                DISTRICT_CODE: "130621",
                DISTRICT_NAME: "婊″煄鍖�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130622",
                DISTRICT_NAME: "娓呰嫅鍖�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130623",
                DISTRICT_NAME: "娑炴按鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130624",
                DISTRICT_NAME: "闃滃钩鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130625",
                DISTRICT_NAME: "寰愭按鍖�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130626",
                DISTRICT_NAME: "瀹氬叴鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130627",
                DISTRICT_NAME: "鍞愬幙"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130628",
                DISTRICT_NAME: "楂橀槼鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130629",
                DISTRICT_NAME: "瀹瑰煄鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130630",
                DISTRICT_NAME: "娑炴簮鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130631",
                DISTRICT_NAME: "鏈涢兘鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130632",
                DISTRICT_NAME: "瀹夋柊鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130633",
                DISTRICT_NAME: "鏄撳幙"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130634",
                DISTRICT_NAME: "鏇查槼鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130635",
                DISTRICT_NAME: "锠″幙"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130636",
                DISTRICT_NAME: "椤哄钩鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130637",
                DISTRICT_NAME: "鍗氶噹鍘�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130638",
                DISTRICT_NAME: "闆勫幙"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130681",
                DISTRICT_NAME: "娑垮窞甯�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130682",
                DISTRICT_NAME: "瀹氬窞甯�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130683",
                DISTRICT_NAME: "瀹夊浗甯�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130684",
                DISTRICT_NAME: "楂樼搴楀競"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130602",
                DISTRICT_NAME: "绔炵鍖�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130603",
                DISTRICT_NAME: "鑾叉睜鍖�"
            }, {
                CITY_CODE: "130600",
                DISTRICT_CODE: "130604",
                DISTRICT_NAME: "鐧芥矡鏂板煄"
            }],
            130700: [{
                CITY_CODE: "130700",
                DISTRICT_CODE: "130702",
                DISTRICT_NAME: "妗ヤ笢鍖�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130703",
                DISTRICT_NAME: "妗ヨタ鍖�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130705",
                DISTRICT_NAME: "瀹ｅ寲鍖�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130706",
                DISTRICT_NAME: "涓嬭姳鍥尯"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130722",
                DISTRICT_NAME: "寮犲寳鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130723",
                DISTRICT_NAME: "搴蜂繚鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130724",
                DISTRICT_NAME: "娌芥簮鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130725",
                DISTRICT_NAME: "灏氫箟鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130726",
                DISTRICT_NAME: "钄氬幙"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130727",
                DISTRICT_NAME: "闃冲師鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130728",
                DISTRICT_NAME: "鎬€瀹夊幙"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130729",
                DISTRICT_NAME: "涓囧叏鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130730",
                DISTRICT_NAME: "鎬€鏉ュ幙"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130731",
                DISTRICT_NAME: "娑块箍鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130732",
                DISTRICT_NAME: "璧ゅ煄鍘�"
            }, {
                CITY_CODE: "130700",
                DISTRICT_CODE: "130733",
                DISTRICT_NAME: "宕囩ぜ鍘�"
            }],
            130800: [{
                CITY_CODE: "130800",
                DISTRICT_CODE: "130802",
                DISTRICT_NAME: "鍙屾ˉ鍖�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130803",
                DISTRICT_NAME: "鍙屾沪鍖�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130804",
                DISTRICT_NAME: "楣版墜钀ュ瓙鐭垮尯"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130821",
                DISTRICT_NAME: "鎵垮痉鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130822",
                DISTRICT_NAME: "鍏撮殕鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130823",
                DISTRICT_NAME: "骞虫硥鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130824",
                DISTRICT_NAME: "婊﹀钩鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130825",
                DISTRICT_NAME: "闅嗗寲鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130826",
                DISTRICT_NAME: "涓板畞婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130827",
                DISTRICT_NAME: "瀹藉煄婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "130800",
                DISTRICT_CODE: "130828",
                DISTRICT_NAME: "鍥村満婊℃棌钂欏彜鏃忚嚜娌诲幙"
            }],
            130900: [{
                CITY_CODE: "130900",
                DISTRICT_CODE: "130902",
                DISTRICT_NAME: "鏂板崕鍖�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130903",
                DISTRICT_NAME: "杩愭渤鍖�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130921",
                DISTRICT_NAME: "娌у幙"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130922",
                DISTRICT_NAME: "闈掑幙"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130923",
                DISTRICT_NAME: "涓滃厜鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130924",
                DISTRICT_NAME: "娴峰叴鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130925",
                DISTRICT_NAME: "鐩愬北鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130926",
                DISTRICT_NAME: "鑲冨畞鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130927",
                DISTRICT_NAME: "鍗楃毊鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130928",
                DISTRICT_NAME: "鍚存ˉ鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130929",
                DISTRICT_NAME: "鐚幙"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130930",
                DISTRICT_NAME: "瀛熸潙鍥炴棌鑷不鍘�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130981",
                DISTRICT_NAME: "娉婂ご甯�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130982",
                DISTRICT_NAME: "浠讳笜甯�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130983",
                DISTRICT_NAME: "榛勯獏甯�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130984",
                DISTRICT_NAME: "娌抽棿甯�"
            }, {
                CITY_CODE: "130900",
                DISTRICT_CODE: "130904",
                DISTRICT_NAME: "娓ゆ捣鏂板尯"
            }],
            131000: [{
                CITY_CODE: "131000",
                DISTRICT_CODE: "131002",
                DISTRICT_NAME: "瀹夋鍖�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131003",
                DISTRICT_NAME: "骞块槼鍖�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131022",
                DISTRICT_NAME: "鍥哄畨鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131023",
                DISTRICT_NAME: "姘告竻鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131024",
                DISTRICT_NAME: "棣欐渤鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131025",
                DISTRICT_NAME: "澶у煄鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131026",
                DISTRICT_NAME: "鏂囧畨鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131028",
                DISTRICT_NAME: "澶у巶鍥炴棌鑷不鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131081",
                DISTRICT_NAME: "闇稿窞甯�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131082",
                DISTRICT_NAME: "涓夋渤甯�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131083",
                DISTRICT_NAME: "寮€鍙戝尯"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131084",
                DISTRICT_NAME: "鐕曢儕鍘�"
            }, {
                CITY_CODE: "131000",
                DISTRICT_CODE: "131085",
                DISTRICT_NAME: "鑳滆姵鍘�"
            }],
            131100: [{
                CITY_CODE: "131100",
                DISTRICT_CODE: "131102",
                DISTRICT_NAME: "妗冨煄鍖�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131121",
                DISTRICT_NAME: "鏋ｅ己鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131122",
                DISTRICT_NAME: "姝﹂倯鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131123",
                DISTRICT_NAME: "姝﹀己鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131124",
                DISTRICT_NAME: "楗堕槼鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131125",
                DISTRICT_NAME: "瀹夊钩鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131126",
                DISTRICT_NAME: "鏁呭煄鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131127",
                DISTRICT_NAME: "鏅幙"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131128",
                DISTRICT_NAME: "闃滃煄鍘�"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131181",
                DISTRICT_NAME: "鍐€宸炲競"
            }, {
                CITY_CODE: "131100",
                DISTRICT_CODE: "131182",
                DISTRICT_NAME: "娣卞窞甯�"
            }],
            140100: [{
                CITY_CODE: "140100",
                DISTRICT_CODE: "140105",
                DISTRICT_NAME: "灏忓簵鍖�"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140106",
                DISTRICT_NAME: "杩庢辰鍖�"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140107",
                DISTRICT_NAME: "鏉忚姳宀尯"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140108",
                DISTRICT_NAME: "灏栬崏鍧尯"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140109",
                DISTRICT_NAME: "涓囨煆鏋楀尯"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140110",
                DISTRICT_NAME: "鏅嬫簮鍖�"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140121",
                DISTRICT_NAME: "娓呭緪鍘�"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140122",
                DISTRICT_NAME: "闃虫洸鍘�"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140123",
                DISTRICT_NAME: "濞勭儲鍘�"
            }, {
                CITY_CODE: "140100",
                DISTRICT_CODE: "140181",
                DISTRICT_NAME: "鍙や氦甯�"
            }],
            140200: [{
                CITY_CODE: "140200",
                DISTRICT_CODE: "140202",
                DISTRICT_NAME: "鍩庡尯"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140203",
                DISTRICT_NAME: "鐭垮尯"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140211",
                DISTRICT_NAME: "鍗楅儕鍖�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140212",
                DISTRICT_NAME: "鏂拌崳鍖�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140221",
                DISTRICT_NAME: "闃抽珮鍘�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140222",
                DISTRICT_NAME: "澶╅晣鍘�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140223",
                DISTRICT_NAME: "骞跨伒鍘�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140224",
                DISTRICT_NAME: "鐏典笜鍘�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140225",
                DISTRICT_NAME: "娴戞簮鍘�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140226",
                DISTRICT_NAME: "宸︿簯鍘�"
            }, {
                CITY_CODE: "140200",
                DISTRICT_CODE: "140227",
                DISTRICT_NAME: "澶у悓鍘�"
            }],
            140300: [{
                CITY_CODE: "140300",
                DISTRICT_CODE: "140302",
                DISTRICT_NAME: "鍩庡尯"
            }, {
                CITY_CODE: "140300",
                DISTRICT_CODE: "140303",
                DISTRICT_NAME: "鐭垮尯"
            }, {
                CITY_CODE: "140300",
                DISTRICT_CODE: "140311",
                DISTRICT_NAME: "閮婂尯"
            }, {
                CITY_CODE: "140300",
                DISTRICT_CODE: "140321",
                DISTRICT_NAME: "骞冲畾鍘�"
            }, {
                CITY_CODE: "140300",
                DISTRICT_CODE: "140322",
                DISTRICT_NAME: "鐩傚幙"
            }],
            140400: [{
                CITY_CODE: "140400",
                DISTRICT_CODE: "140402",
                DISTRICT_NAME: "鍩庡尯"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140411",
                DISTRICT_NAME: "閮婂尯"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140421",
                DISTRICT_NAME: "闀挎不鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140423",
                DISTRICT_NAME: "瑗勫灒鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140424",
                DISTRICT_NAME: "灞暀鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140425",
                DISTRICT_NAME: "骞抽『鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140426",
                DISTRICT_NAME: "榛庡煄鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140427",
                DISTRICT_NAME: "澹跺叧鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140428",
                DISTRICT_NAME: "闀垮瓙鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140429",
                DISTRICT_NAME: "姝︿埂鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140430",
                DISTRICT_NAME: "娌佸幙"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140431",
                DISTRICT_NAME: "娌佹簮鍘�"
            }, {
                CITY_CODE: "140400",
                DISTRICT_CODE: "140481",
                DISTRICT_NAME: "娼炲煄甯�"
            }],
            140500: [{
                CITY_CODE: "140500",
                DISTRICT_CODE: "140502",
                DISTRICT_NAME: "鍩庡尯"
            }, {
                CITY_CODE: "140500",
                DISTRICT_CODE: "140521",
                DISTRICT_NAME: "娌佹按鍘�"
            }, {
                CITY_CODE: "140500",
                DISTRICT_CODE: "140522",
                DISTRICT_NAME: "闃冲煄鍘�"
            }, {
                CITY_CODE: "140500",
                DISTRICT_CODE: "140524",
                DISTRICT_NAME: "闄靛窛鍘�"
            }, {
                CITY_CODE: "140500",
                DISTRICT_CODE: "140525",
                DISTRICT_NAME: "娉藉窞鍘�"
            }, {
                CITY_CODE: "140500",
                DISTRICT_CODE: "140581",
                DISTRICT_NAME: "楂樺钩甯�"
            }],
            140600: [{
                CITY_CODE: "140600",
                DISTRICT_CODE: "140602",
                DISTRICT_NAME: "鏈斿煄鍖�"
            }, {
                CITY_CODE: "140600",
                DISTRICT_CODE: "140603",
                DISTRICT_NAME: "骞抽瞾鍖�"
            }, {
                CITY_CODE: "140600",
                DISTRICT_CODE: "140621",
                DISTRICT_NAME: "灞遍槾鍘�"
            }, {
                CITY_CODE: "140600",
                DISTRICT_CODE: "140622",
                DISTRICT_NAME: "搴斿幙"
            }, {
                CITY_CODE: "140600",
                DISTRICT_CODE: "140623",
                DISTRICT_NAME: "鍙崇帀鍘�"
            }, {
                CITY_CODE: "140600",
                DISTRICT_CODE: "140624",
                DISTRICT_NAME: "鎬€浠佸幙"
            }],
            140700: [{
                CITY_CODE: "140700",
                DISTRICT_CODE: "140702",
                DISTRICT_NAME: "姒嗘鍖�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140721",
                DISTRICT_NAME: "姒嗙ぞ鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140722",
                DISTRICT_NAME: "宸︽潈鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140723",
                DISTRICT_NAME: "鍜岄『鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140724",
                DISTRICT_NAME: "鏄旈槼鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140725",
                DISTRICT_NAME: "瀵块槼鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140726",
                DISTRICT_NAME: "澶胺鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140727",
                DISTRICT_NAME: "绁佸幙"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140728",
                DISTRICT_NAME: "骞抽仴鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140729",
                DISTRICT_NAME: "鐏电煶鍘�"
            }, {
                CITY_CODE: "140700",
                DISTRICT_CODE: "140781",
                DISTRICT_NAME: "浠嬩紤甯�"
            }],
            140800: [{
                CITY_CODE: "140800",
                DISTRICT_CODE: "140802",
                DISTRICT_NAME: "鐩愭箹鍖�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140821",
                DISTRICT_NAME: "涓寸寳鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140822",
                DISTRICT_NAME: "涓囪崳鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140823",
                DISTRICT_NAME: "闂诲枩鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140824",
                DISTRICT_NAME: "绋峰北鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140825",
                DISTRICT_NAME: "鏂扮粵鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140826",
                DISTRICT_NAME: "缁涘幙"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140827",
                DISTRICT_NAME: "鍨ｆ洸鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140828",
                DISTRICT_NAME: "澶忓幙"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140829",
                DISTRICT_NAME: "骞抽檰鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140830",
                DISTRICT_NAME: "鑺煄鍘�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140881",
                DISTRICT_NAME: "姘告祹甯�"
            }, {
                CITY_CODE: "140800",
                DISTRICT_CODE: "140882",
                DISTRICT_NAME: "娌虫触甯�"
            }],
            140900: [{
                CITY_CODE: "140900",
                DISTRICT_CODE: "140902",
                DISTRICT_NAME: "蹇诲簻鍖�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140921",
                DISTRICT_NAME: "瀹氳鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140922",
                DISTRICT_NAME: "浜斿彴鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140923",
                DISTRICT_NAME: "浠ｅ幙"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140924",
                DISTRICT_NAME: "绻佸硻鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140925",
                DISTRICT_NAME: "瀹佹鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140926",
                DISTRICT_NAME: "闈欎箰鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140927",
                DISTRICT_NAME: "绁炴睜鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140928",
                DISTRICT_NAME: "浜斿鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140929",
                DISTRICT_NAME: "宀㈠矚鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140930",
                DISTRICT_NAME: "娌虫洸鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140931",
                DISTRICT_NAME: "淇濆痉鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140932",
                DISTRICT_NAME: "鍋忓叧鍘�"
            }, {
                CITY_CODE: "140900",
                DISTRICT_CODE: "140981",
                DISTRICT_NAME: "鍘熷钩甯�"
            }],
            141000: [{
                CITY_CODE: "141000",
                DISTRICT_CODE: "141002",
                DISTRICT_NAME: "灏ч兘鍖�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141021",
                DISTRICT_NAME: "鏇叉矁鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141022",
                DISTRICT_NAME: "缈煎煄鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141023",
                DISTRICT_NAME: "瑗勬本鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141024",
                DISTRICT_NAME: "娲礊鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141025",
                DISTRICT_NAME: "鍙ゅ幙"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141026",
                DISTRICT_NAME: "瀹夋辰鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141027",
                DISTRICT_NAME: "娴北鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141028",
                DISTRICT_NAME: "鍚夊幙"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141029",
                DISTRICT_NAME: "涔″畞鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141030",
                DISTRICT_NAME: "澶у畞鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141031",
                DISTRICT_NAME: "闅板幙"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141032",
                DISTRICT_NAME: "姘稿拰鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141033",
                DISTRICT_NAME: "钂插幙"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141034",
                DISTRICT_NAME: "姹捐タ鍘�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141081",
                DISTRICT_NAME: "渚┈甯�"
            }, {
                CITY_CODE: "141000",
                DISTRICT_CODE: "141082",
                DISTRICT_NAME: "闇嶅窞甯�"
            }],
            141100: [{
                CITY_CODE: "141100",
                DISTRICT_CODE: "141102",
                DISTRICT_NAME: "绂荤煶鍖�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141121",
                DISTRICT_NAME: "鏂囨按鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141122",
                DISTRICT_NAME: "浜ゅ煄鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141123",
                DISTRICT_NAME: "鍏村幙"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141124",
                DISTRICT_NAME: "涓村幙"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141125",
                DISTRICT_NAME: "鏌虫灄鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141126",
                DISTRICT_NAME: "鐭虫ゼ鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141127",
                DISTRICT_NAME: "宀氬幙"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141128",
                DISTRICT_NAME: "鏂瑰北鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141129",
                DISTRICT_NAME: "涓槼鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141130",
                DISTRICT_NAME: "浜ゅ彛鍘�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141181",
                DISTRICT_NAME: "瀛濅箟甯�"
            }, {
                CITY_CODE: "141100",
                DISTRICT_CODE: "141182",
                DISTRICT_NAME: "姹鹃槼甯�"
            }],
            150100: [{
                CITY_CODE: "150100",
                DISTRICT_CODE: "150102",
                DISTRICT_NAME: "鏂板煄鍖�"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150103",
                DISTRICT_NAME: "鍥炴皯鍖�"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150104",
                DISTRICT_NAME: "鐜夋硥鍖�"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150105",
                DISTRICT_NAME: "璧涚綍鍖�"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150121",
                DISTRICT_NAME: "鍦熼粯鐗瑰乏鏃�"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150122",
                DISTRICT_NAME: "鎵樺厠鎵樺幙"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150123",
                DISTRICT_NAME: "鍜屾灄鏍煎皵鍘�"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150124",
                DISTRICT_NAME: "娓呮按娌冲幙"
            }, {
                CITY_CODE: "150100",
                DISTRICT_CODE: "150125",
                DISTRICT_NAME: "姝﹀窛鍘�"
            }],
            150200: [{
                CITY_CODE: "150200",
                DISTRICT_CODE: "150202",
                DISTRICT_NAME: "涓滄渤鍖�"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150203",
                DISTRICT_NAME: "鏄嗛兘浠戝尯"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150204",
                DISTRICT_NAME: "闈掑北鍖�"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150205",
                DISTRICT_NAME: "鐭虫嫄鍖�"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150206",
                DISTRICT_NAME: "鐧戒簯閯傚崥鐭垮尯"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150207",
                DISTRICT_NAME: "涔濆師鍖�"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150221",
                DISTRICT_NAME: "鍦熼粯鐗瑰彸鏃�"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150222",
                DISTRICT_NAME: "鍥洪槼鍘�"
            }, {
                CITY_CODE: "150200",
                DISTRICT_CODE: "150223",
                DISTRICT_NAME: "杈惧皵缃曡寕鏄庡畨鑱斿悎鏃�"
            }],
            150300: [{
                CITY_CODE: "150300",
                DISTRICT_CODE: "150302",
                DISTRICT_NAME: "娴峰媰婀惧尯"
            }, {
                CITY_CODE: "150300",
                DISTRICT_CODE: "150303",
                DISTRICT_NAME: "娴峰崡鍖�"
            }, {
                CITY_CODE: "150300",
                DISTRICT_CODE: "150304",
                DISTRICT_NAME: "涔岃揪鍖�"
            }],
            150400: [{
                CITY_CODE: "150400",
                DISTRICT_CODE: "150402",
                DISTRICT_NAME: "绾㈠北鍖�"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150403",
                DISTRICT_NAME: "鍏冨疂灞卞尯"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150404",
                DISTRICT_NAME: "鏉惧北鍖�"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150421",
                DISTRICT_NAME: "闃块瞾绉戝皵娌佹棗"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150422",
                DISTRICT_NAME: "宸存灄宸︽棗"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150423",
                DISTRICT_NAME: "宸存灄鍙虫棗"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150424",
                DISTRICT_NAME: "鏋楄タ鍘�"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150425",
                DISTRICT_NAME: "鍏嬩粈鍏嬭吘鏃�"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150426",
                DISTRICT_NAME: "缈佺墰鐗规棗"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150428",
                DISTRICT_NAME: "鍠€鍠囨瞾鏃�"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150429",
                DISTRICT_NAME: "瀹佸煄鍘�"
            }, {
                CITY_CODE: "150400",
                DISTRICT_CODE: "150430",
                DISTRICT_NAME: "鏁栨眽鏃�"
            }],
            150500: [{
                CITY_CODE: "150500",
                DISTRICT_CODE: "150502",
                DISTRICT_NAME: "绉戝皵娌佸尯"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150521",
                DISTRICT_NAME: "绉戝皵娌佸乏缈间腑鏃�"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150522",
                DISTRICT_NAME: "绉戝皵娌佸乏缈煎悗鏃�"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150523",
                DISTRICT_NAME: "寮€椴佸幙"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150524",
                DISTRICT_NAME: "搴撲鸡鏃�"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150525",
                DISTRICT_NAME: "濂堟浖鏃�"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150526",
                DISTRICT_NAME: "鎵庨瞾鐗规棗"
            }, {
                CITY_CODE: "150500",
                DISTRICT_CODE: "150581",
                DISTRICT_NAME: "闇嶆灄閮嫆甯�"
            }],
            150600: [{
                CITY_CODE: "150600",
                DISTRICT_CODE: "150602",
                DISTRICT_NAME: "涓滆儨鍖�"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150621",
                DISTRICT_NAME: "杈炬媺鐗规棗"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150622",
                DISTRICT_NAME: "鍑嗘牸灏旀棗"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150623",
                DISTRICT_NAME: "閯傛墭鍏嬪墠鏃�"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150624",
                DISTRICT_NAME: "閯傛墭鍏嬫棗"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150625",
                DISTRICT_NAME: "鏉敠鏃�"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150626",
                DISTRICT_NAME: "涔屽鏃�"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150627",
                DISTRICT_NAME: "浼婇噾闇嶆礇鏃�"
            }, {
                CITY_CODE: "150600",
                DISTRICT_CODE: "150628",
                DISTRICT_NAME: "搴峰反浠€鍖�"
            }],
            150700: [{
                CITY_CODE: "150700",
                DISTRICT_CODE: "150702",
                DISTRICT_NAME: "娴锋媺灏斿尯"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150721",
                DISTRICT_NAME: "闃胯崳鏃�"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150722",
                DISTRICT_NAME: "鑾姏杈剧摝杈炬枴灏旀棌鑷不鏃�"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150723",
                DISTRICT_NAME: "閯備鸡鏄ヨ嚜娌绘棗"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150724",
                DISTRICT_NAME: "閯傛俯鍏嬫棌鑷不鏃�"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150725",
                DISTRICT_NAME: "闄堝反灏旇檸鏃�"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150726",
                DISTRICT_NAME: "鏂板反灏旇檸宸︽棗"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150727",
                DISTRICT_NAME: "鏂板反灏旇檸鍙虫棗"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150781",
                DISTRICT_NAME: "婊℃床閲屽競"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150782",
                DISTRICT_NAME: "鐗欏厠鐭冲競"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150783",
                DISTRICT_NAME: "鎵庡叞灞競"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150784",
                DISTRICT_NAME: "棰濆皵鍙ょ撼甯�"
            }, {
                CITY_CODE: "150700",
                DISTRICT_CODE: "150785",
                DISTRICT_NAME: "鏍规渤甯�"
            }],
            150800: [{
                CITY_CODE: "150800",
                DISTRICT_CODE: "150802",
                DISTRICT_NAME: "涓存渤鍖�"
            }, {
                CITY_CODE: "150800",
                DISTRICT_CODE: "150821",
                DISTRICT_NAME: "浜斿師鍘�"
            }, {
                CITY_CODE: "150800",
                DISTRICT_CODE: "150822",
                DISTRICT_NAME: "纾村彛鍘�"
            }, {
                CITY_CODE: "150800",
                DISTRICT_CODE: "150823",
                DISTRICT_NAME: "涔屾媺鐗瑰墠鏃�"
            }, {
                CITY_CODE: "150800",
                DISTRICT_CODE: "150824",
                DISTRICT_NAME: "涔屾媺鐗逛腑鏃�"
            }, {
                CITY_CODE: "150800",
                DISTRICT_CODE: "150825",
                DISTRICT_NAME: "涔屾媺鐗瑰悗鏃�"
            }, {
                CITY_CODE: "150800",
                DISTRICT_CODE: "150826",
                DISTRICT_NAME: "鏉敠鍚庢棗"
            }],
            150900: [{
                CITY_CODE: "150900",
                DISTRICT_CODE: "150902",
                DISTRICT_NAME: "闆嗗畞鍖�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150921",
                DISTRICT_NAME: "鍗撹祫鍘�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150922",
                DISTRICT_NAME: "鍖栧痉鍘�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150923",
                DISTRICT_NAME: "鍟嗛兘鍘�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150924",
                DISTRICT_NAME: "鍏村拰鍘�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150925",
                DISTRICT_NAME: "鍑夊煄鍘�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150926",
                DISTRICT_NAME: "瀵熷搱灏斿彸缈煎墠鏃�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150927",
                DISTRICT_NAME: "瀵熷搱灏斿彸缈间腑鏃�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150928",
                DISTRICT_NAME: "瀵熷搱灏斿彸缈煎悗鏃�"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150929",
                DISTRICT_NAME: "鍥涘瓙鐜嬫棗"
            }, {
                CITY_CODE: "150900",
                DISTRICT_CODE: "150981",
                DISTRICT_NAME: "涓伴晣甯�"
            }],
            152200: [{
                CITY_CODE: "152200",
                DISTRICT_CODE: "152201",
                DISTRICT_NAME: "涔屽叞娴╃壒甯�"
            }, {
                CITY_CODE: "152200",
                DISTRICT_CODE: "152202",
                DISTRICT_NAME: "闃垮皵灞卞競"
            }, {
                CITY_CODE: "152200",
                DISTRICT_CODE: "152221",
                DISTRICT_NAME: "绉戝皵娌佸彸缈煎墠鏃�"
            }, {
                CITY_CODE: "152200",
                DISTRICT_CODE: "152222",
                DISTRICT_NAME: "绉戝皵娌佸彸缈间腑鏃�"
            }, {
                CITY_CODE: "152200",
                DISTRICT_CODE: "152223",
                DISTRICT_NAME: "鎵庤祲鐗规棗"
            }, {
                CITY_CODE: "152200",
                DISTRICT_CODE: "152224",
                DISTRICT_NAME: "绐佹硥鍘�"
            }],
            152500: [{
                CITY_CODE: "152500",
                DISTRICT_CODE: "152501",
                DISTRICT_NAME: "浜岃繛娴╃壒甯�"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152502",
                DISTRICT_NAME: "閿℃灄娴╃壒甯�"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152522",
                DISTRICT_NAME: "闃垮反鍢庢棗"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152523",
                DISTRICT_NAME: "鑻忓凹鐗瑰乏鏃�"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152524",
                DISTRICT_NAME: "鑻忓凹鐗瑰彸鏃�"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152525",
                DISTRICT_NAME: "涓滀箤鐝犵﹩娌佹棗"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152526",
                DISTRICT_NAME: "瑗夸箤鐝犵﹩娌佹棗"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152527",
                DISTRICT_NAME: "澶粏瀵烘棗"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152528",
                DISTRICT_NAME: "闀堕粍鏃�"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152529",
                DISTRICT_NAME: "姝ｉ暥鐧芥棗"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152530",
                DISTRICT_NAME: "姝ｈ摑鏃�"
            }, {
                CITY_CODE: "152500",
                DISTRICT_CODE: "152531",
                DISTRICT_NAME: "澶氫鸡鍘�"
            }],
            152900: [{
                CITY_CODE: "152900",
                DISTRICT_CODE: "152921",
                DISTRICT_NAME: "闃挎媺鍠勫乏鏃�"
            }, {
                CITY_CODE: "152900",
                DISTRICT_CODE: "152922",
                DISTRICT_NAME: "闃挎媺鍠勫彸鏃�"
            }, {
                CITY_CODE: "152900",
                DISTRICT_CODE: "152923",
                DISTRICT_NAME: "棰濇祹绾虫棗"
            }],
            210100: [{
                CITY_CODE: "210100",
                DISTRICT_CODE: "210102",
                DISTRICT_NAME: "鍜屽钩鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210103",
                DISTRICT_NAME: "娌堟渤鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210104",
                DISTRICT_NAME: "澶т笢鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210105",
                DISTRICT_NAME: "鐨囧鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210106",
                DISTRICT_NAME: "閾佽タ鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210111",
                DISTRICT_NAME: "鑻忓灞尯"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210112",
                DISTRICT_NAME: "娴戝崡鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210113",
                DISTRICT_NAME: "娌堝寳鏂板尯"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210114",
                DISTRICT_NAME: "浜庢椽鍖�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210122",
                DISTRICT_NAME: "杈戒腑鍘�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210123",
                DISTRICT_NAME: "搴峰钩鍘�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210124",
                DISTRICT_NAME: "娉曞簱鍘�"
            }, {
                CITY_CODE: "210100",
                DISTRICT_CODE: "210181",
                DISTRICT_NAME: "鏂版皯甯�"
            }],
            210200: [{
                CITY_CODE: "210200",
                DISTRICT_CODE: "210202",
                DISTRICT_NAME: "涓北鍖�"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210203",
                DISTRICT_NAME: "瑗垮矖鍖�"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210204",
                DISTRICT_NAME: "娌欐渤鍙ｅ尯"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210211",
                DISTRICT_NAME: "鐢樹簳瀛愬尯"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210212",
                DISTRICT_NAME: "鏃呴『鍙ｅ尯"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210213",
                DISTRICT_NAME: "閲戝窞鍖�"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210224",
                DISTRICT_NAME: "闀挎捣鍘�"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210281",
                DISTRICT_NAME: "鐡︽埧搴楀競"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210282",
                DISTRICT_NAME: "鏅叞搴楀競"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210283",
                DISTRICT_NAME: "搴勬渤甯�"
            }, {
                CITY_CODE: "210200",
                DISTRICT_CODE: "210284",
                DISTRICT_NAME: "寮€鍙戝尯"
            }],
            210300: [{
                CITY_CODE: "210300",
                DISTRICT_CODE: "210302",
                DISTRICT_NAME: "閾佷笢鍖�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210303",
                DISTRICT_NAME: "閾佽タ鍖�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210304",
                DISTRICT_NAME: "绔嬪北鍖�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210311",
                DISTRICT_NAME: "鍗冨北鍖�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210321",
                DISTRICT_NAME: "鍙板畨鍘�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210323",
                DISTRICT_NAME: "宀博婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210381",
                DISTRICT_NAME: "娴峰煄甯�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210305",
                DISTRICT_NAME: "娣辨矡瀵�"
            }, {
                CITY_CODE: "210300",
                DISTRICT_CODE: "210306",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            210400: [{
                CITY_CODE: "210400",
                DISTRICT_CODE: "210402",
                DISTRICT_NAME: "鏂版姎鍖�"
            }, {
                CITY_CODE: "210400",
                DISTRICT_CODE: "210403",
                DISTRICT_NAME: "涓滄床鍖�"
            }, {
                CITY_CODE: "210400",
                DISTRICT_CODE: "210404",
                DISTRICT_NAME: "鏈涜姳鍖�"
            }, {
                CITY_CODE: "210400",
                DISTRICT_CODE: "210411",
                DISTRICT_NAME: "椤哄煄鍖�"
            }, {
                CITY_CODE: "210400",
                DISTRICT_CODE: "210421",
                DISTRICT_NAME: "鎶氶『鍘�"
            }, {
                CITY_CODE: "210400",
                DISTRICT_CODE: "210422",
                DISTRICT_NAME: "鏂板婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "210400",
                DISTRICT_CODE: "210423",
                DISTRICT_NAME: "娓呭師婊℃棌鑷不鍘�"
            }],
            210500: [{
                CITY_CODE: "210500",
                DISTRICT_CODE: "210502",
                DISTRICT_NAME: "骞冲北鍖�"
            }, {
                CITY_CODE: "210500",
                DISTRICT_CODE: "210503",
                DISTRICT_NAME: "婧箹鍖�"
            }, {
                CITY_CODE: "210500",
                DISTRICT_CODE: "210504",
                DISTRICT_NAME: "鏄庡北鍖�"
            }, {
                CITY_CODE: "210500",
                DISTRICT_CODE: "210505",
                DISTRICT_NAME: "鍗楄姮鍖�"
            }, {
                CITY_CODE: "210500",
                DISTRICT_CODE: "210521",
                DISTRICT_NAME: "鏈邯婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "210500",
                DISTRICT_CODE: "210522",
                DISTRICT_NAME: "妗撲粊婊℃棌鑷不鍘�"
            }],
            210600: [{
                CITY_CODE: "210600",
                DISTRICT_CODE: "210602",
                DISTRICT_NAME: "鍏冨疂鍖�"
            }, {
                CITY_CODE: "210600",
                DISTRICT_CODE: "210603",
                DISTRICT_NAME: "鎸叴鍖�"
            }, {
                CITY_CODE: "210600",
                DISTRICT_CODE: "210604",
                DISTRICT_NAME: "鎸畨鍖�"
            }, {
                CITY_CODE: "210600",
                DISTRICT_CODE: "210624",
                DISTRICT_NAME: "瀹界敻婊℃棌鑷不鍘�"
            }, {
                CITY_CODE: "210600",
                DISTRICT_CODE: "210681",
                DISTRICT_NAME: "涓滄腐甯�"
            }, {
                CITY_CODE: "210600",
                DISTRICT_CODE: "210682",
                DISTRICT_NAME: "鍑ゅ煄甯�"
            }],
            210700: [{
                CITY_CODE: "210700",
                DISTRICT_CODE: "210702",
                DISTRICT_NAME: "鍙ゅ鍖�"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210703",
                DISTRICT_NAME: "鍑屾渤鍖�"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210711",
                DISTRICT_NAME: "澶拰鍖�"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210726",
                DISTRICT_NAME: "榛戝北鍘�"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210727",
                DISTRICT_NAME: "涔夊幙"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210781",
                DISTRICT_NAME: "鍑屾捣甯�"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210782",
                DISTRICT_NAME: "鍖楅晣甯�"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210704",
                DISTRICT_NAME: "寮€鍙戝尯"
            }, {
                CITY_CODE: "210700",
                DISTRICT_CODE: "210705",
                DISTRICT_NAME: "鏉惧北鏂板尯"
            }],
            210800: [{
                CITY_CODE: "210800",
                DISTRICT_CODE: "210802",
                DISTRICT_NAME: "绔欏墠鍖�"
            }, {
                CITY_CODE: "210800",
                DISTRICT_CODE: "210803",
                DISTRICT_NAME: "瑗垮競鍖�"
            }, {
                CITY_CODE: "210800",
                DISTRICT_CODE: "210804",
                DISTRICT_NAME: "椴呴奔鍦堝尯"
            }, {
                CITY_CODE: "210800",
                DISTRICT_CODE: "210811",
                DISTRICT_NAME: "鑰佽竟鍖�"
            }, {
                CITY_CODE: "210800",
                DISTRICT_CODE: "210881",
                DISTRICT_NAME: "鐩栧窞甯�"
            }, {
                CITY_CODE: "210800",
                DISTRICT_CODE: "210882",
                DISTRICT_NAME: "澶х煶妗ュ競"
            }],
            210900: [{
                CITY_CODE: "210900",
                DISTRICT_CODE: "210902",
                DISTRICT_NAME: "娴峰窞鍖�"
            }, {
                CITY_CODE: "210900",
                DISTRICT_CODE: "210903",
                DISTRICT_NAME: "鏂伴偙鍖�"
            }, {
                CITY_CODE: "210900",
                DISTRICT_CODE: "210904",
                DISTRICT_NAME: "澶钩鍖�"
            }, {
                CITY_CODE: "210900",
                DISTRICT_CODE: "210905",
                DISTRICT_NAME: "娓呮渤闂ㄥ尯"
            }, {
                CITY_CODE: "210900",
                DISTRICT_CODE: "210911",
                DISTRICT_NAME: "缁嗘渤鍖�"
            }, {
                CITY_CODE: "210900",
                DISTRICT_CODE: "210921",
                DISTRICT_NAME: "闃滄柊钂欏彜鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "210900",
                DISTRICT_CODE: "210922",
                DISTRICT_NAME: "褰版鍘�"
            }],
            211000: [{
                CITY_CODE: "211000",
                DISTRICT_CODE: "211002",
                DISTRICT_NAME: "鐧藉鍖�"
            }, {
                CITY_CODE: "211000",
                DISTRICT_CODE: "211003",
                DISTRICT_NAME: "鏂囧湥鍖�"
            }, {
                CITY_CODE: "211000",
                DISTRICT_CODE: "211004",
                DISTRICT_NAME: "瀹忎紵鍖�"
            }, {
                CITY_CODE: "211000",
                DISTRICT_CODE: "211005",
                DISTRICT_NAME: "寮撻暱宀尯"
            }, {
                CITY_CODE: "211000",
                DISTRICT_CODE: "211011",
                DISTRICT_NAME: "澶瓙娌冲尯"
            }, {
                CITY_CODE: "211000",
                DISTRICT_CODE: "211021",
                DISTRICT_NAME: "杈介槼鍘�"
            }, {
                CITY_CODE: "211000",
                DISTRICT_CODE: "211081",
                DISTRICT_NAME: "鐏甯�"
            }],
            211100: [{
                CITY_CODE: "211100",
                DISTRICT_CODE: "211102",
                DISTRICT_NAME: "鍙屽彴瀛愬尯"
            }, {
                CITY_CODE: "211100",
                DISTRICT_CODE: "211103",
                DISTRICT_NAME: "鍏撮殕鍙板尯"
            }, {
                CITY_CODE: "211100",
                DISTRICT_CODE: "211121",
                DISTRICT_NAME: "澶ф醇鍘�"
            }, {
                CITY_CODE: "211100",
                DISTRICT_CODE: "211122",
                DISTRICT_NAME: "鐩樺北鍘�"
            }],
            211200: [{
                CITY_CODE: "211200",
                DISTRICT_CODE: "211202",
                DISTRICT_NAME: "閾跺窞鍖�"
            }, {
                CITY_CODE: "211200",
                DISTRICT_CODE: "211204",
                DISTRICT_NAME: "娓呮渤鍖�"
            }, {
                CITY_CODE: "211200",
                DISTRICT_CODE: "211221",
                DISTRICT_NAME: "閾佸箔鍘�"
            }, {
                CITY_CODE: "211200",
                DISTRICT_CODE: "211223",
                DISTRICT_NAME: "瑗夸赴鍘�"
            }, {
                CITY_CODE: "211200",
                DISTRICT_CODE: "211224",
                DISTRICT_NAME: "鏄屽浘鍘�"
            }, {
                CITY_CODE: "211200",
                DISTRICT_CODE: "211281",
                DISTRICT_NAME: "璋冨叺灞卞競"
            }, {
                CITY_CODE: "211200",
                DISTRICT_CODE: "211282",
                DISTRICT_NAME: "寮€鍘熷競"
            }],
            211300: [{
                CITY_CODE: "211300",
                DISTRICT_CODE: "211302",
                DISTRICT_NAME: "鍙屽鍖�"
            }, {
                CITY_CODE: "211300",
                DISTRICT_CODE: "211303",
                DISTRICT_NAME: "榫欏煄鍖�"
            }, {
                CITY_CODE: "211300",
                DISTRICT_CODE: "211321",
                DISTRICT_NAME: "鏈濋槼鍘�"
            }, {
                CITY_CODE: "211300",
                DISTRICT_CODE: "211322",
                DISTRICT_NAME: "寤哄钩鍘�"
            }, {
                CITY_CODE: "211300",
                DISTRICT_CODE: "211324",
                DISTRICT_NAME: "鍠€鍠囨瞾宸︾考钂欏彜鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "211300",
                DISTRICT_CODE: "211381",
                DISTRICT_NAME: "鍖楃エ甯�"
            }, {
                CITY_CODE: "211300",
                DISTRICT_CODE: "211382",
                DISTRICT_NAME: "鍑屾簮甯�"
            }],
            211400: [{
                CITY_CODE: "211400",
                DISTRICT_CODE: "211402",
                DISTRICT_NAME: "杩炲北鍖�"
            }, {
                CITY_CODE: "211400",
                DISTRICT_CODE: "211403",
                DISTRICT_NAME: "榫欐腐鍖�"
            }, {
                CITY_CODE: "211400",
                DISTRICT_CODE: "211404",
                DISTRICT_NAME: "鍗楃エ鍖�"
            }, {
                CITY_CODE: "211400",
                DISTRICT_CODE: "211421",
                DISTRICT_NAME: "缁ヤ腑鍘�"
            }, {
                CITY_CODE: "211400",
                DISTRICT_CODE: "211422",
                DISTRICT_NAME: "寤烘槍鍘�"
            }, {
                CITY_CODE: "211400",
                DISTRICT_CODE: "211481",
                DISTRICT_NAME: "鍏村煄甯�"
            }],
            220100: [{
                CITY_CODE: "220100",
                DISTRICT_CODE: "220102",
                DISTRICT_NAME: "鍗楀叧鍖�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220103",
                DISTRICT_NAME: "瀹藉煄鍖�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220104",
                DISTRICT_NAME: "鏈濋槼鍖�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220105",
                DISTRICT_NAME: "浜岄亾鍖�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220106",
                DISTRICT_NAME: "缁垮洯鍖�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220112",
                DISTRICT_NAME: "鍙岄槼鍖�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220122",
                DISTRICT_NAME: "鍐滃畨鍘�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220181",
                DISTRICT_NAME: "涔濆彴甯�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220182",
                DISTRICT_NAME: "姒嗘爲甯�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220183",
                DISTRICT_NAME: "寰锋儬甯�"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220184",
                DISTRICT_NAME: "闀挎槬姹借溅浜т笟寮€鍙戝尯"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220185",
                DISTRICT_NAME: "楂樻柊鎶€鏈骇涓氬紑鍙戝尯"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220186",
                DISTRICT_NAME: "缁忔祹鎶€鏈骇涓氬紑鍙戝尯"
            }, {
                CITY_CODE: "220100",
                DISTRICT_CODE: "220187",
                DISTRICT_NAME: "鍑€鏈堥珮鏂版妧鏈骇涓氬紑鍙戝尯"
            }],
            220200: [{
                CITY_CODE: "220200",
                DISTRICT_CODE: "220202",
                DISTRICT_NAME: "鏄岄倯鍖�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220203",
                DISTRICT_NAME: "榫欐江鍖�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220204",
                DISTRICT_NAME: "鑸硅惀鍖�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220211",
                DISTRICT_NAME: "涓版弧鍖�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220221",
                DISTRICT_NAME: "姘稿悏鍘�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220281",
                DISTRICT_NAME: "铔熸渤甯�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220282",
                DISTRICT_NAME: "妗︾敻甯�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220283",
                DISTRICT_NAME: "鑸掑叞甯�"
            }, {
                CITY_CODE: "220200",
                DISTRICT_CODE: "220284",
                DISTRICT_NAME: "纾愮煶甯�"
            }],
            220300: [{
                CITY_CODE: "220300",
                DISTRICT_CODE: "220302",
                DISTRICT_NAME: "閾佽タ鍖�"
            }, {
                CITY_CODE: "220300",
                DISTRICT_CODE: "220303",
                DISTRICT_NAME: "閾佷笢鍖�"
            }, {
                CITY_CODE: "220300",
                DISTRICT_CODE: "220322",
                DISTRICT_NAME: "姊ㄦ爲鍘�"
            }, {
                CITY_CODE: "220300",
                DISTRICT_CODE: "220323",
                DISTRICT_NAME: "浼婇€氭弧鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "220300",
                DISTRICT_CODE: "220381",
                DISTRICT_NAME: "鍏富宀競"
            }, {
                CITY_CODE: "220300",
                DISTRICT_CODE: "220382",
                DISTRICT_NAME: "鍙岃窘甯�"
            }],
            220400: [{
                CITY_CODE: "220400",
                DISTRICT_CODE: "220402",
                DISTRICT_NAME: "榫欏北鍖�"
            }, {
                CITY_CODE: "220400",
                DISTRICT_CODE: "220403",
                DISTRICT_NAME: "瑗垮畨鍖�"
            }, {
                CITY_CODE: "220400",
                DISTRICT_CODE: "220421",
                DISTRICT_NAME: "涓滀赴鍘�"
            }, {
                CITY_CODE: "220400",
                DISTRICT_CODE: "220422",
                DISTRICT_NAME: "涓滆窘鍘�"
            }],
            220500: [{
                CITY_CODE: "220500",
                DISTRICT_CODE: "220502",
                DISTRICT_NAME: "閫氬寲甯傚唴"
            }, {
                CITY_CODE: "220500",
                DISTRICT_CODE: "220503",
                DISTRICT_NAME: "浜岄亾姹熷尯"
            }, {
                CITY_CODE: "220500",
                DISTRICT_CODE: "220521",
                DISTRICT_NAME: "閫氬寲鍘�"
            }, {
                CITY_CODE: "220500",
                DISTRICT_CODE: "220523",
                DISTRICT_NAME: "杈夊崡鍘�"
            }, {
                CITY_CODE: "220500",
                DISTRICT_CODE: "220524",
                DISTRICT_NAME: "鏌虫渤鍘�"
            }, {
                CITY_CODE: "220500",
                DISTRICT_CODE: "220581",
                DISTRICT_NAME: "姊呮渤鍙ｅ競"
            }, {
                CITY_CODE: "220500",
                DISTRICT_CODE: "220582",
                DISTRICT_NAME: "闆嗗畨甯�"
            }],
            220600: [{
                CITY_CODE: "220600",
                DISTRICT_CODE: "220602",
                DISTRICT_NAME: "鍏亾姹熷尯"
            }, {
                CITY_CODE: "220600",
                DISTRICT_CODE: "220605",
                DISTRICT_NAME: "姹熸簮鍖�"
            }, {
                CITY_CODE: "220600",
                DISTRICT_CODE: "220621",
                DISTRICT_NAME: "鎶氭澗鍘�"
            }, {
                CITY_CODE: "220600",
                DISTRICT_CODE: "220622",
                DISTRICT_NAME: "闈栧畤鍘�"
            }, {
                CITY_CODE: "220600",
                DISTRICT_CODE: "220623",
                DISTRICT_NAME: "闀跨櫧鏈濋矞鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "220600",
                DISTRICT_CODE: "220681",
                DISTRICT_NAME: "涓存睙甯�"
            }],
            220700: [{
                CITY_CODE: "220700",
                DISTRICT_CODE: "220702",
                DISTRICT_NAME: "瀹佹睙鍖�"
            }, {
                CITY_CODE: "220700",
                DISTRICT_CODE: "220721",
                DISTRICT_NAME: "鍓嶉儹灏旂綏鏂挋鍙ゆ棌鑷不鍘�"
            }, {
                CITY_CODE: "220700",
                DISTRICT_CODE: "220722",
                DISTRICT_NAME: "闀垮箔鍘�"
            }, {
                CITY_CODE: "220700",
                DISTRICT_CODE: "220723",
                DISTRICT_NAME: "涔惧畨鍘�"
            }, {
                CITY_CODE: "220700",
                DISTRICT_CODE: "220724",
                DISTRICT_NAME: "鎵朵綑鍘�"
            }],
            220800: [{
                CITY_CODE: "220800",
                DISTRICT_CODE: "220802",
                DISTRICT_NAME: "娲寳鍖�"
            }, {
                CITY_CODE: "220800",
                DISTRICT_CODE: "220821",
                DISTRICT_NAME: "闀囪祲鍘�"
            }, {
                CITY_CODE: "220800",
                DISTRICT_CODE: "220822",
                DISTRICT_NAME: "閫氭鍘�"
            }, {
                CITY_CODE: "220800",
                DISTRICT_CODE: "220881",
                DISTRICT_NAME: "娲崡甯�"
            }, {
                CITY_CODE: "220800",
                DISTRICT_CODE: "220882",
                DISTRICT_NAME: "澶у畨甯�"
            }],
            222400: [{
                CITY_CODE: "222400",
                DISTRICT_CODE: "222401",
                DISTRICT_NAME: "寤跺悏甯�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222402",
                DISTRICT_NAME: "鍥句滑甯�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222403",
                DISTRICT_NAME: "鏁﹀寲甯�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222404",
                DISTRICT_NAME: "鐝叉槬甯�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222405",
                DISTRICT_NAME: "榫欎簳甯�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222406",
                DISTRICT_NAME: "鍜岄緳甯�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222424",
                DISTRICT_NAME: "姹竻鍘�"
            }, {
                CITY_CODE: "222400",
                DISTRICT_CODE: "222426",
                DISTRICT_NAME: "瀹夊浘鍘�"
            }],
            230100: [{
                CITY_CODE: "230100",
                DISTRICT_CODE: "230102",
                DISTRICT_NAME: "閬撻噷鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230103",
                DISTRICT_NAME: "鍗楀矖鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230104",
                DISTRICT_NAME: "閬撳鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230108",
                DISTRICT_NAME: "骞虫埧鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230109",
                DISTRICT_NAME: "鏉惧寳鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230110",
                DISTRICT_NAME: "棣欏潑鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230111",
                DISTRICT_NAME: "鍛煎叞鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230112",
                DISTRICT_NAME: "闃垮煄鍖�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230123",
                DISTRICT_NAME: "渚濆叞鍘�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230124",
                DISTRICT_NAME: "鏂规鍘�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230125",
                DISTRICT_NAME: "瀹惧幙"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230126",
                DISTRICT_NAME: "宸村溅鍘�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230127",
                DISTRICT_NAME: "鏈ㄥ叞鍘�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230128",
                DISTRICT_NAME: "閫氭渤鍘�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230129",
                DISTRICT_NAME: "寤跺鍘�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230182",
                DISTRICT_NAME: "鍙屽煄甯�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230183",
                DISTRICT_NAME: "灏氬織甯�"
            }, {
                CITY_CODE: "230100",
                DISTRICT_CODE: "230184",
                DISTRICT_NAME: "浜斿父甯�"
            }],
            230200: [{
                CITY_CODE: "230200",
                DISTRICT_CODE: "230202",
                DISTRICT_NAME: "榫欐矙鍖�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230203",
                DISTRICT_NAME: "寤哄崕鍖�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230204",
                DISTRICT_NAME: "閾侀攱鍖�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230205",
                DISTRICT_NAME: "鏄傛槀婧尯"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230206",
                DISTRICT_NAME: "瀵屾媺灏斿熀鍖�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230207",
                DISTRICT_NAME: "纰惧瓙灞卞尯"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230208",
                DISTRICT_NAME: "姊呴噷鏂揪鏂″皵鏃忓尯"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230221",
                DISTRICT_NAME: "榫欐睙鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230223",
                DISTRICT_NAME: "渚濆畨鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230224",
                DISTRICT_NAME: "娉版潵鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230225",
                DISTRICT_NAME: "鐢樺崡鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230227",
                DISTRICT_NAME: "瀵岃鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230229",
                DISTRICT_NAME: "鍏嬪北鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230230",
                DISTRICT_NAME: "鍏嬩笢鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230231",
                DISTRICT_NAME: "鎷滄硥鍘�"
            }, {
                CITY_CODE: "230200",
                DISTRICT_CODE: "230281",
                DISTRICT_NAME: "璁锋渤甯�"
            }],
            230300: [{
                CITY_CODE: "230300",
                DISTRICT_CODE: "230302",
                DISTRICT_NAME: "楦″啝鍖�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230303",
                DISTRICT_NAME: "鎭掑北鍖�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230304",
                DISTRICT_NAME: "婊撮亾鍖�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230305",
                DISTRICT_NAME: "姊ㄦ爲鍖�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230306",
                DISTRICT_NAME: "鍩庡瓙娌冲尯"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230307",
                DISTRICT_NAME: "楹诲北鍖�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230321",
                DISTRICT_NAME: "楦′笢鍘�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230381",
                DISTRICT_NAME: "铏庢灄甯�"
            }, {
                CITY_CODE: "230300",
                DISTRICT_CODE: "230382",
                DISTRICT_NAME: "瀵嗗北甯�"
            }],
            230400: [{
                CITY_CODE: "230400",
                DISTRICT_CODE: "230402",
                DISTRICT_NAME: "鍚戦槼鍖�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230403",
                DISTRICT_NAME: "宸ュ啘鍖�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230404",
                DISTRICT_NAME: "鍗楀北鍖�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230405",
                DISTRICT_NAME: "鍏村畨鍖�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230406",
                DISTRICT_NAME: "涓滃北鍖�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230407",
                DISTRICT_NAME: "鍏村北鍖�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230421",
                DISTRICT_NAME: "钀濆寳鍘�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230422",
                DISTRICT_NAME: "缁ユ花鍘�"
            }, {
                CITY_CODE: "230400",
                DISTRICT_CODE: "230408",
                DISTRICT_NAME: "瀹濇硥宀�"
            }],
            230500: [{
                CITY_CODE: "230500",
                DISTRICT_CODE: "230502",
                DISTRICT_NAME: "灏栧北鍖�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230503",
                DISTRICT_NAME: "宀笢鍖�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230505",
                DISTRICT_NAME: "鍥涙柟鍙板尯"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230506",
                DISTRICT_NAME: "瀹濆北鍖�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230521",
                DISTRICT_NAME: "闆嗚搐鍘�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230522",
                DISTRICT_NAME: "鍙嬭皧鍘�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230523",
                DISTRICT_NAME: "瀹濇竻鍘�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230524",
                DISTRICT_NAME: "楗舵渤鍘�"
            }, {
                CITY_CODE: "230500",
                DISTRICT_CODE: "230525",
                DISTRICT_NAME: "绾㈠叴闅�"
            }],
            230600: [{
                CITY_CODE: "230600",
                DISTRICT_CODE: "230602",
                DISTRICT_NAME: "钀ㄥ皵鍥惧尯"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230603",
                DISTRICT_NAME: "榫欏嚖鍖�"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230604",
                DISTRICT_NAME: "璁╄儭璺尯"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230605",
                DISTRICT_NAME: "绾㈠矖鍖�"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230606",
                DISTRICT_NAME: "澶у悓鍖�"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230621",
                DISTRICT_NAME: "鑲囧窞鍘�"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230622",
                DISTRICT_NAME: "鑲囨簮鍘�"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230623",
                DISTRICT_NAME: "鏋楃敻鍘�"
            }, {
                CITY_CODE: "230600",
                DISTRICT_CODE: "230624",
                DISTRICT_NAME: "鏉滃皵浼壒钂欏彜鏃忚嚜娌诲幙"
            }],
            230700: [{
                CITY_CODE: "230700",
                DISTRICT_CODE: "230702",
                DISTRICT_NAME: "浼婃槬鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230703",
                DISTRICT_NAME: "鍗楀矓鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230704",
                DISTRICT_NAME: "鍙嬪ソ鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230705",
                DISTRICT_NAME: "瑗挎灄鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230706",
                DISTRICT_NAME: "缈犲肠鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230707",
                DISTRICT_NAME: "鏂伴潚鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230708",
                DISTRICT_NAME: "缇庢邯鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230709",
                DISTRICT_NAME: "閲戝北灞尯"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230710",
                DISTRICT_NAME: "浜旇惀鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230711",
                DISTRICT_NAME: "涔岄┈娌冲尯"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230712",
                DISTRICT_NAME: "姹ゆ椇娌冲尯"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230713",
                DISTRICT_NAME: "甯﹀箔鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230714",
                DISTRICT_NAME: "涔屼紛宀尯"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230715",
                DISTRICT_NAME: "绾㈡槦鍖�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230716",
                DISTRICT_NAME: "涓婄敇宀尯"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230722",
                DISTRICT_NAME: "鍢夎崼鍘�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230781",
                DISTRICT_NAME: "閾佸姏甯�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230717",
                DISTRICT_NAME: "妗冨北闀�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230718",
                DISTRICT_NAME: "娴╄壇娌抽晣"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230719",
                DISTRICT_NAME: "鏈椾埂闀�"
            }, {
                CITY_CODE: "230700",
                DISTRICT_CODE: "230720",
                DISTRICT_NAME: "鍙屼赴闀�"
            }],
            230800: [{
                CITY_CODE: "230800",
                DISTRICT_CODE: "230803",
                DISTRICT_NAME: "鍚戦槼鍖�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230804",
                DISTRICT_NAME: "鍓嶈繘鍖�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230805",
                DISTRICT_NAME: "涓滈鍖�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230811",
                DISTRICT_NAME: "閮婂尯"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230822",
                DISTRICT_NAME: "妗﹀崡鍘�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230826",
                DISTRICT_NAME: "妗﹀窛鍘�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230828",
                DISTRICT_NAME: "姹ゅ師鍘�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230833",
                DISTRICT_NAME: "鎶氳繙鍘�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230881",
                DISTRICT_NAME: "鍚屾睙甯�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230882",
                DISTRICT_NAME: "瀵岄敠甯�"
            }, {
                CITY_CODE: "230800",
                DISTRICT_CODE: "230884",
                DISTRICT_NAME: "寤轰笁姹熷競"
            }],
            230900: [{
                CITY_CODE: "230900",
                DISTRICT_CODE: "230902",
                DISTRICT_NAME: "鏂板叴鍖�"
            }, {
                CITY_CODE: "230900",
                DISTRICT_CODE: "230903",
                DISTRICT_NAME: "妗冨北鍖�"
            }, {
                CITY_CODE: "230900",
                DISTRICT_CODE: "230904",
                DISTRICT_NAME: "鑼勫瓙娌冲尯"
            }, {
                CITY_CODE: "230900",
                DISTRICT_CODE: "230921",
                DISTRICT_NAME: "鍕冨埄鍘�"
            }],
            231000: [{
                CITY_CODE: "231000",
                DISTRICT_CODE: "231002",
                DISTRICT_NAME: "涓滃畨鍖�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231003",
                DISTRICT_NAME: "闃虫槑鍖�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231004",
                DISTRICT_NAME: "鐖辨皯鍖�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231005",
                DISTRICT_NAME: "瑗垮畨鍖�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231024",
                DISTRICT_NAME: "涓滃畞鍘�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231025",
                DISTRICT_NAME: "鏋楀彛鍘�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231081",
                DISTRICT_NAME: "缁ヨ姮娌冲競"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231083",
                DISTRICT_NAME: "娴锋灄甯�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231084",
                DISTRICT_NAME: "瀹佸畨甯�"
            }, {
                CITY_CODE: "231000",
                DISTRICT_CODE: "231085",
                DISTRICT_NAME: "绌嗘１甯�"
            }],
            231100: [{
                CITY_CODE: "231100",
                DISTRICT_CODE: "231102",
                DISTRICT_NAME: "鐖辫緣鍖�"
            }, {
                CITY_CODE: "231100",
                DISTRICT_CODE: "231121",
                DISTRICT_NAME: "瀚╂睙鍘�"
            }, {
                CITY_CODE: "231100",
                DISTRICT_CODE: "231123",
                DISTRICT_NAME: "閫婂厠鍘�"
            }, {
                CITY_CODE: "231100",
                DISTRICT_CODE: "231124",
                DISTRICT_NAME: "瀛欏惔鍘�"
            }, {
                CITY_CODE: "231100",
                DISTRICT_CODE: "231181",
                DISTRICT_NAME: "鍖楀畨甯�"
            }, {
                CITY_CODE: "231100",
                DISTRICT_CODE: "231182",
                DISTRICT_NAME: "浜斿ぇ杩炴睜甯�"
            }, {
                CITY_CODE: "231100",
                DISTRICT_CODE: "231125",
                DISTRICT_NAME: "鍚堜綔鍖�"
            }],
            231200: [{
                CITY_CODE: "231200",
                DISTRICT_CODE: "231202",
                DISTRICT_NAME: "鍖楁灄鍖�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231221",
                DISTRICT_NAME: "鏈涘鍘�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231222",
                DISTRICT_NAME: "鍏拌タ鍘�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231223",
                DISTRICT_NAME: "闈掑唸鍘�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231224",
                DISTRICT_NAME: "搴嗗畨鍘�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231225",
                DISTRICT_NAME: "鏄庢按鍘�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231226",
                DISTRICT_NAME: "缁ユ１鍘�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231281",
                DISTRICT_NAME: "瀹夎揪甯�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231282",
                DISTRICT_NAME: "鑲囦笢甯�"
            }, {
                CITY_CODE: "231200",
                DISTRICT_CODE: "231283",
                DISTRICT_NAME: "娴蜂鸡甯�"
            }],
            232700: [{
                CITY_CODE: "232700",
                DISTRICT_CODE: "232721",
                DISTRICT_NAME: "鍛肩帥鍘�"
            }, {
                CITY_CODE: "232700",
                DISTRICT_CODE: "232722",
                DISTRICT_NAME: "濉旀渤鍘�"
            }, {
                CITY_CODE: "232700",
                DISTRICT_CODE: "232723",
                DISTRICT_NAME: "婕犳渤鍘�"
            }, {
                CITY_CODE: "232700",
                DISTRICT_CODE: "232724",
                DISTRICT_NAME: "鍔犳牸杈惧鍖�"
            }, {
                CITY_CODE: "232700",
                DISTRICT_CODE: "232725",
                DISTRICT_NAME: "鏉惧箔鍖�"
            }, {
                CITY_CODE: "232700",
                DISTRICT_CODE: "232726",
                DISTRICT_NAME: "鏂版灄鍖�"
            }, {
                CITY_CODE: "232700",
                DISTRICT_CODE: "232727",
                DISTRICT_NAME: "鍛间腑鍖�"
            }],
            310100: [{
                CITY_CODE: "310100",
                DISTRICT_CODE: "310101",
                DISTRICT_NAME: "榛勬郸鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310104",
                DISTRICT_NAME: "寰愭眹鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310105",
                DISTRICT_NAME: "闀垮畞鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310106",
                DISTRICT_NAME: "闈欏畨鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310107",
                DISTRICT_NAME: "鏅檧鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310109",
                DISTRICT_NAME: "铏瑰彛鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310110",
                DISTRICT_NAME: "鏉ㄦ郸鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310112",
                DISTRICT_NAME: "闂佃鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310113",
                DISTRICT_NAME: "瀹濆北鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310114",
                DISTRICT_NAME: "鍢夊畾鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310115",
                DISTRICT_NAME: "娴︿笢鏂板尯"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310116",
                DISTRICT_NAME: "閲戝北鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310117",
                DISTRICT_NAME: "鏉炬睙鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310118",
                DISTRICT_NAME: "闈掓郸鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310120",
                DISTRICT_NAME: "濂夎搐鍖�"
            }, {
                CITY_CODE: "310100",
                DISTRICT_CODE: "310230",
                DISTRICT_NAME: "宕囨槑鍖�"
            }],
            320100: [{
                CITY_CODE: "320100",
                DISTRICT_CODE: "320102",
                DISTRICT_NAME: "鐜勬鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320103",
                DISTRICT_NAME: "鐧戒笅鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320104",
                DISTRICT_NAME: "绉︽樊鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320105",
                DISTRICT_NAME: "寤洪偤鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320106",
                DISTRICT_NAME: "榧撴ゼ鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320107",
                DISTRICT_NAME: "涓嬪叧鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320111",
                DISTRICT_NAME: "娴﹀彛鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320113",
                DISTRICT_NAME: "鏍栭湠鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320114",
                DISTRICT_NAME: "闆ㄨ姳鍙板尯"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320115",
                DISTRICT_NAME: "姹熷畞鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320116",
                DISTRICT_NAME: "鍏悎鍖�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320124",
                DISTRICT_NAME: "婧ф按鍘�"
            }, {
                CITY_CODE: "320100",
                DISTRICT_CODE: "320125",
                DISTRICT_NAME: "楂樻烦鍘�"
            }],
            320200: [{
                CITY_CODE: "320200",
                DISTRICT_CODE: "320213",
                DISTRICT_NAME: "姊佹邯鍖�"
            }, {
                CITY_CODE: "320200",
                DISTRICT_CODE: "320214",
                DISTRICT_NAME: "鏂板惔鍖�"
            }, {
                CITY_CODE: "320200",
                DISTRICT_CODE: "320205",
                DISTRICT_NAME: "閿″北鍖�"
            }, {
                CITY_CODE: "320200",
                DISTRICT_CODE: "320206",
                DISTRICT_NAME: "鎯犲北鍖�"
            }, {
                CITY_CODE: "320200",
                DISTRICT_CODE: "320211",
                DISTRICT_NAME: "婊ㄦ箹鍖�"
            }, {
                CITY_CODE: "320200",
                DISTRICT_CODE: "320281",
                DISTRICT_NAME: "姹熼槾甯�"
            }, {
                CITY_CODE: "320200",
                DISTRICT_CODE: "320282",
                DISTRICT_NAME: "瀹滃叴甯�"
            }],
            320300: [{
                CITY_CODE: "320300",
                DISTRICT_CODE: "320302",
                DISTRICT_NAME: "榧撴ゼ鍖�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320303",
                DISTRICT_NAME: "浜戦緳鍖�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320305",
                DISTRICT_NAME: "璐炬豹鍖�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320311",
                DISTRICT_NAME: "娉夊北鍖�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320312",
                DISTRICT_NAME: "閾滃北鍖�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320321",
                DISTRICT_NAME: "涓板幙"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320322",
                DISTRICT_NAME: "娌涘幙"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320324",
                DISTRICT_NAME: "鐫㈠畞鍘�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320381",
                DISTRICT_NAME: "鏂版矀甯�"
            }, {
                CITY_CODE: "320300",
                DISTRICT_CODE: "320382",
                DISTRICT_NAME: "閭冲窞甯�"
            }],
            320400: [{
                CITY_CODE: "320400",
                DISTRICT_CODE: "320402",
                DISTRICT_NAME: "澶╁畞鍖�"
            }, {
                CITY_CODE: "320400",
                DISTRICT_CODE: "320404",
                DISTRICT_NAME: "閽熸ゼ鍖�"
            }, {
                CITY_CODE: "320400",
                DISTRICT_CODE: "320405",
                DISTRICT_NAME: "鎴氬鍫板尯"
            }, {
                CITY_CODE: "320400",
                DISTRICT_CODE: "320411",
                DISTRICT_NAME: "鏂板寳鍖�"
            }, {
                CITY_CODE: "320400",
                DISTRICT_CODE: "320412",
                DISTRICT_NAME: "姝﹁繘鍖�"
            }, {
                CITY_CODE: "320400",
                DISTRICT_CODE: "320481",
                DISTRICT_NAME: "婧ч槼甯�"
            }, {
                CITY_CODE: "320400",
                DISTRICT_CODE: "320482",
                DISTRICT_NAME: "閲戝潧甯�"
            }],
            320500: [{
                CITY_CODE: "320500",
                DISTRICT_CODE: "320502",
                DISTRICT_NAME: "娌ф氮鍖�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320503",
                DISTRICT_NAME: "骞虫睙鍖�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320504",
                DISTRICT_NAME: "閲戦槉鍖�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320505",
                DISTRICT_NAME: "铏庝笜鍖�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320506",
                DISTRICT_NAME: "鍚翠腑鍖�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320507",
                DISTRICT_NAME: "鐩稿煄鍖�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320508",
                DISTRICT_NAME: "宸ヤ笟鍥尯"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320581",
                DISTRICT_NAME: "甯哥啛甯�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320582",
                DISTRICT_NAME: "寮犲娓競"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320583",
                DISTRICT_NAME: "鏄嗗北甯�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320584",
                DISTRICT_NAME: "鍚存睙甯�"
            }, {
                CITY_CODE: "320500",
                DISTRICT_CODE: "320585",
                DISTRICT_NAME: "澶粨甯�"
            }],
            320600: [{
                CITY_CODE: "320600",
                DISTRICT_CODE: "320602",
                DISTRICT_NAME: "宕囧窛鍖�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320611",
                DISTRICT_NAME: "娓椄鍖�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320612",
                DISTRICT_NAME: "閫氬窞鍖�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320621",
                DISTRICT_NAME: "娴峰畨鍘�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320623",
                DISTRICT_NAME: "濡備笢鍘�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320681",
                DISTRICT_NAME: "鍚笢甯�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320682",
                DISTRICT_NAME: "濡傜殝甯�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320684",
                DISTRICT_NAME: "娴烽棬甯�"
            }, {
                CITY_CODE: "320600",
                DISTRICT_CODE: "320683",
                DISTRICT_NAME: "寮€鍙戝尯"
            }],
            320700: [{
                CITY_CODE: "320700",
                DISTRICT_CODE: "320703",
                DISTRICT_NAME: "杩炰簯鍖�"
            }, {
                CITY_CODE: "320700",
                DISTRICT_CODE: "320705",
                DISTRICT_NAME: "鏂版郸鍖�"
            }, {
                CITY_CODE: "320700",
                DISTRICT_CODE: "320706",
                DISTRICT_NAME: "娴峰窞鍖�"
            }, {
                CITY_CODE: "320700",
                DISTRICT_CODE: "320721",
                DISTRICT_NAME: "璧ｆ鍘�"
            }, {
                CITY_CODE: "320700",
                DISTRICT_CODE: "320722",
                DISTRICT_NAME: "涓滄捣鍘�"
            }, {
                CITY_CODE: "320700",
                DISTRICT_CODE: "320723",
                DISTRICT_NAME: "鐏屼簯鍘�"
            }, {
                CITY_CODE: "320700",
                DISTRICT_CODE: "320724",
                DISTRICT_NAME: "鐏屽崡鍘�"
            }],
            320800: [{
                CITY_CODE: "320800",
                DISTRICT_CODE: "320802",
                DISTRICT_NAME: "娓呮渤鍖�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320803",
                DISTRICT_NAME: "妤氬窞鍖�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320804",
                DISTRICT_NAME: "娣槾鍖�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320811",
                DISTRICT_NAME: "娓呮郸鍖�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320826",
                DISTRICT_NAME: "娑熸按鍘�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320829",
                DISTRICT_NAME: "娲辰鍘�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320830",
                DISTRICT_NAME: "鐩辩湙鍘�"
            }, {
                CITY_CODE: "320800",
                DISTRICT_CODE: "320831",
                DISTRICT_NAME: "閲戞箹鍘�"
            }],
            320900: [{
                CITY_CODE: "320900",
                DISTRICT_CODE: "320902",
                DISTRICT_NAME: "浜箹鍖�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320903",
                DISTRICT_NAME: "鐩愰兘鍖�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320921",
                DISTRICT_NAME: "鍝嶆按鍘�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320922",
                DISTRICT_NAME: "婊ㄦ捣鍘�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320923",
                DISTRICT_NAME: "闃滃畞鍘�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320924",
                DISTRICT_NAME: "灏勯槼鍘�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320925",
                DISTRICT_NAME: "寤烘箹鍘�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320981",
                DISTRICT_NAME: "涓滃彴甯�"
            }, {
                CITY_CODE: "320900",
                DISTRICT_CODE: "320982",
                DISTRICT_NAME: "澶т赴甯�"
            }],
            321000: [{
                CITY_CODE: "321000",
                DISTRICT_CODE: "321002",
                DISTRICT_NAME: "骞块櫟鍖�"
            }, {
                CITY_CODE: "321000",
                DISTRICT_CODE: "321003",
                DISTRICT_NAME: "閭楁睙鍖�"
            }, {
                CITY_CODE: "321000",
                DISTRICT_CODE: "321012",
                DISTRICT_NAME: "姹熼兘鍖�"
            }, {
                CITY_CODE: "321000",
                DISTRICT_CODE: "321023",
                DISTRICT_NAME: "瀹濆簲鍘�"
            }, {
                CITY_CODE: "321000",
                DISTRICT_CODE: "321081",
                DISTRICT_NAME: "浠緛甯�"
            }, {
                CITY_CODE: "321000",
                DISTRICT_CODE: "321084",
                DISTRICT_NAME: "楂橀偖甯�"
            }],
            321100: [{
                CITY_CODE: "321100",
                DISTRICT_CODE: "321102",
                DISTRICT_NAME: "浜彛鍖�"
            }, {
                CITY_CODE: "321100",
                DISTRICT_CODE: "321111",
                DISTRICT_NAME: "娑﹀窞鍖�"
            }, {
                CITY_CODE: "321100",
                DISTRICT_CODE: "321112",
                DISTRICT_NAME: "涓瑰緬鍖�"
            }, {
                CITY_CODE: "321100",
                DISTRICT_CODE: "321181",
                DISTRICT_NAME: "涓归槼甯�"
            }, {
                CITY_CODE: "321100",
                DISTRICT_CODE: "321182",
                DISTRICT_NAME: "鎵腑甯�"
            }, {
                CITY_CODE: "321100",
                DISTRICT_CODE: "321183",
                DISTRICT_NAME: "鍙ュ甯�"
            }],
            321200: [{
                CITY_CODE: "321200",
                DISTRICT_CODE: "321202",
                DISTRICT_NAME: "娴烽櫟鍖�"
            }, {
                CITY_CODE: "321200",
                DISTRICT_CODE: "321203",
                DISTRICT_NAME: "楂樻腐鍖�"
            }, {
                CITY_CODE: "321200",
                DISTRICT_CODE: "321281",
                DISTRICT_NAME: "鍏村寲甯�"
            }, {
                CITY_CODE: "321200",
                DISTRICT_CODE: "321282",
                DISTRICT_NAME: "闈栨睙甯�"
            }, {
                CITY_CODE: "321200",
                DISTRICT_CODE: "321283",
                DISTRICT_NAME: "娉板叴甯�"
            }, {
                CITY_CODE: "321200",
                DISTRICT_CODE: "321284",
                DISTRICT_NAME: "濮滃牥甯�"
            }],
            321300: [{
                CITY_CODE: "321300",
                DISTRICT_CODE: "321302",
                DISTRICT_NAME: "瀹垮煄鍖�"
            }, {
                CITY_CODE: "321300",
                DISTRICT_CODE: "321311",
                DISTRICT_NAME: "瀹胯鲍鍖�"
            }, {
                CITY_CODE: "321300",
                DISTRICT_CODE: "321322",
                DISTRICT_NAME: "娌槼鍘�"
            }, {
                CITY_CODE: "321300",
                DISTRICT_CODE: "321323",
                DISTRICT_NAME: "娉楅槼鍘�"
            }, {
                CITY_CODE: "321300",
                DISTRICT_CODE: "321324",
                DISTRICT_NAME: "娉楁椽鍘�"
            }],
            330100: [{
                CITY_CODE: "330100",
                DISTRICT_CODE: "330102",
                DISTRICT_NAME: "涓婂煄鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330103",
                DISTRICT_NAME: "涓嬪煄鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330104",
                DISTRICT_NAME: "姹熷共鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330105",
                DISTRICT_NAME: "鎷卞鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330106",
                DISTRICT_NAME: "瑗挎箹鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330108",
                DISTRICT_NAME: "婊ㄦ睙鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330109",
                DISTRICT_NAME: "钀у北鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330110",
                DISTRICT_NAME: "浣欐澀鍖�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330122",
                DISTRICT_NAME: "妗愬簮鍘�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330127",
                DISTRICT_NAME: "娣冲畨鍘�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330182",
                DISTRICT_NAME: "寤哄痉甯�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330183",
                DISTRICT_NAME: "瀵岄槼甯�"
            }, {
                CITY_CODE: "330100",
                DISTRICT_CODE: "330185",
                DISTRICT_NAME: "涓村畨甯�"
            }],
            330200: [{
                CITY_CODE: "330200",
                DISTRICT_CODE: "330203",
                DISTRICT_NAME: "娴锋洐鍖�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330204",
                DISTRICT_NAME: "姹熶笢鍖�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330205",
                DISTRICT_NAME: "姹熷寳鍖�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330206",
                DISTRICT_NAME: "鍖椾粦鍖�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330211",
                DISTRICT_NAME: "闀囨捣鍖�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330212",
                DISTRICT_NAME: "閯炲窞鍖�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330225",
                DISTRICT_NAME: "璞″北鍘�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330226",
                DISTRICT_NAME: "瀹佹捣鍘�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330281",
                DISTRICT_NAME: "浣欏甯�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330282",
                DISTRICT_NAME: "鎱堟邯甯�"
            }, {
                CITY_CODE: "330200",
                DISTRICT_CODE: "330283",
                DISTRICT_NAME: "濂夊寲甯�"
            }],
            330300: [{
                CITY_CODE: "330300",
                DISTRICT_CODE: "330302",
                DISTRICT_NAME: "楣垮煄鍖�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330303",
                DISTRICT_NAME: "榫欐咕鍖�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330304",
                DISTRICT_NAME: "鐡捣鍖�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330322",
                DISTRICT_NAME: "娲炲ご鍘�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330324",
                DISTRICT_NAME: "姘稿槈鍘�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330326",
                DISTRICT_NAME: "骞抽槼鍘�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330327",
                DISTRICT_NAME: "鑻嶅崡鍘�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330328",
                DISTRICT_NAME: "鏂囨垚鍘�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330329",
                DISTRICT_NAME: "娉伴『鍘�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330381",
                DISTRICT_NAME: "鐟炲畨甯�"
            }, {
                CITY_CODE: "330300",
                DISTRICT_CODE: "330382",
                DISTRICT_NAME: "涔愭竻甯�"
            }],
            330400: [{
                CITY_CODE: "330400",
                DISTRICT_CODE: "330402",
                DISTRICT_NAME: "鍗楁箹鍖�"
            }, {
                CITY_CODE: "330400",
                DISTRICT_CODE: "330411",
                DISTRICT_NAME: "绉€娲插尯"
            }, {
                CITY_CODE: "330400",
                DISTRICT_CODE: "330421",
                DISTRICT_NAME: "鍢夊杽鍘�"
            }, {
                CITY_CODE: "330400",
                DISTRICT_CODE: "330424",
                DISTRICT_NAME: "娴风洂鍘�"
            }, {
                CITY_CODE: "330400",
                DISTRICT_CODE: "330481",
                DISTRICT_NAME: "娴峰畞甯�"
            }, {
                CITY_CODE: "330400",
                DISTRICT_CODE: "330482",
                DISTRICT_NAME: "骞虫箹甯�"
            }, {
                CITY_CODE: "330400",
                DISTRICT_CODE: "330483",
                DISTRICT_NAME: "妗愪埂甯�"
            }],
            330500: [{
                CITY_CODE: "330500",
                DISTRICT_CODE: "330502",
                DISTRICT_NAME: "鍚村叴鍖�"
            }, {
                CITY_CODE: "330500",
                DISTRICT_CODE: "330503",
                DISTRICT_NAME: "鍗楁禂鍖�"
            }, {
                CITY_CODE: "330500",
                DISTRICT_CODE: "330521",
                DISTRICT_NAME: "寰锋竻鍘�"
            }, {
                CITY_CODE: "330500",
                DISTRICT_CODE: "330522",
                DISTRICT_NAME: "闀垮叴鍘�"
            }, {
                CITY_CODE: "330500",
                DISTRICT_CODE: "330523",
                DISTRICT_NAME: "瀹夊悏鍘�"
            }],
            330600: [{
                CITY_CODE: "330600",
                DISTRICT_CODE: "330602",
                DISTRICT_NAME: "瓒婂煄鍖�"
            }, {
                CITY_CODE: "330600",
                DISTRICT_CODE: "330621",
                DISTRICT_NAME: "缁嶅叴鍘�"
            }, {
                CITY_CODE: "330600",
                DISTRICT_CODE: "330624",
                DISTRICT_NAME: "鏂版槍鍘�"
            }, {
                CITY_CODE: "330600",
                DISTRICT_CODE: "330681",
                DISTRICT_NAME: "璇告毃甯�"
            }, {
                CITY_CODE: "330600",
                DISTRICT_CODE: "330682",
                DISTRICT_NAME: "涓婅櫈甯�"
            }, {
                CITY_CODE: "330600",
                DISTRICT_CODE: "330683",
                DISTRICT_NAME: "宓婂窞甯�"
            }],
            330700: [{
                CITY_CODE: "330700",
                DISTRICT_CODE: "330702",
                DISTRICT_NAME: "濠哄煄鍖�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330703",
                DISTRICT_NAME: "閲戜笢鍖�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330723",
                DISTRICT_NAME: "姝︿箟鍘�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330726",
                DISTRICT_NAME: "娴︽睙鍘�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330727",
                DISTRICT_NAME: "纾愬畨鍘�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330781",
                DISTRICT_NAME: "鍏版邯甯�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330782",
                DISTRICT_NAME: "涔変箤甯�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330783",
                DISTRICT_NAME: "涓滈槼甯�"
            }, {
                CITY_CODE: "330700",
                DISTRICT_CODE: "330784",
                DISTRICT_NAME: "姘稿悍甯�"
            }],
            330800: [{
                CITY_CODE: "330800",
                DISTRICT_CODE: "330802",
                DISTRICT_NAME: "鏌煄鍖�"
            }, {
                CITY_CODE: "330800",
                DISTRICT_CODE: "330803",
                DISTRICT_NAME: "琛㈡睙鍖�"
            }, {
                CITY_CODE: "330800",
                DISTRICT_CODE: "330822",
                DISTRICT_NAME: "甯稿北鍘�"
            }, {
                CITY_CODE: "330800",
                DISTRICT_CODE: "330824",
                DISTRICT_NAME: "寮€鍖栧幙"
            }, {
                CITY_CODE: "330800",
                DISTRICT_CODE: "330825",
                DISTRICT_NAME: "榫欐父鍘�"
            }, {
                CITY_CODE: "330800",
                DISTRICT_CODE: "330881",
                DISTRICT_NAME: "姹熷北甯�"
            }],
            330900: [{
                CITY_CODE: "330900",
                DISTRICT_CODE: "330902",
                DISTRICT_NAME: "瀹氭捣鍖�"
            }, {
                CITY_CODE: "330900",
                DISTRICT_CODE: "330903",
                DISTRICT_NAME: "鏅檧鍖�"
            }, {
                CITY_CODE: "330900",
                DISTRICT_CODE: "330921",
                DISTRICT_NAME: "宀卞北鍘�"
            }, {
                CITY_CODE: "330900",
                DISTRICT_CODE: "330922",
                DISTRICT_NAME: "宓婃硹鍘�"
            }],
            331000: [{
                CITY_CODE: "331000",
                DISTRICT_CODE: "331002",
                DISTRICT_NAME: "妞掓睙鍖�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331003",
                DISTRICT_NAME: "榛勫博鍖�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331004",
                DISTRICT_NAME: "璺ˉ鍖�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331021",
                DISTRICT_NAME: "鐜夌幆鍘�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331022",
                DISTRICT_NAME: "涓夐棬鍘�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331023",
                DISTRICT_NAME: "澶╁彴鍘�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331024",
                DISTRICT_NAME: "浠欏眳鍘�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331081",
                DISTRICT_NAME: "娓╁箔甯�"
            }, {
                CITY_CODE: "331000",
                DISTRICT_CODE: "331082",
                DISTRICT_NAME: "涓存捣甯�"
            }],
            331100: [{
                CITY_CODE: "331100",
                DISTRICT_CODE: "331102",
                DISTRICT_NAME: "鑾查兘鍖�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331121",
                DISTRICT_NAME: "闈掔敯鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331122",
                DISTRICT_NAME: "缂欎簯鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331123",
                DISTRICT_NAME: "閬傛槍鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331124",
                DISTRICT_NAME: "鏉鹃槼鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331125",
                DISTRICT_NAME: "浜戝拰鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331126",
                DISTRICT_NAME: "搴嗗厓鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331127",
                DISTRICT_NAME: "鏅畞鐣叉棌鑷不鍘�"
            }, {
                CITY_CODE: "331100",
                DISTRICT_CODE: "331181",
                DISTRICT_NAME: "榫欐硥甯�"
            }],
            340100: [{
                CITY_CODE: "340100",
                DISTRICT_CODE: "340102",
                DISTRICT_NAME: "鐟舵捣鍖�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340103",
                DISTRICT_NAME: "搴愰槼鍖�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340104",
                DISTRICT_NAME: "铚€灞卞尯"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340111",
                DISTRICT_NAME: "鍖呮渤鍖�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340121",
                DISTRICT_NAME: "闀夸赴鍘�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340122",
                DISTRICT_NAME: "鑲ヤ笢鍘�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340123",
                DISTRICT_NAME: "鑲ヨタ鍘�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340124",
                DISTRICT_NAME: "搴愭睙鍘�"
            }, {
                CITY_CODE: "340100",
                DISTRICT_CODE: "340181",
                DISTRICT_NAME: "灞呭发鍖�"
            }],
            340200: [{
                CITY_CODE: "340200",
                DISTRICT_CODE: "340202",
                DISTRICT_NAME: "闀滄箹鍖�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340203",
                DISTRICT_NAME: "寮嬫睙鍖�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340207",
                DISTRICT_NAME: "楦犳睙鍖�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340208",
                DISTRICT_NAME: "涓夊北鍖�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340221",
                DISTRICT_NAME: "鑺滄箹鍘�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340222",
                DISTRICT_NAME: "绻佹槍鍘�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340223",
                DISTRICT_NAME: "鍗楅櫟鍘�"
            }, {
                CITY_CODE: "340200",
                DISTRICT_CODE: "340225",
                DISTRICT_NAME: "鏃犱负鍘�"
            }],
            340300: [{
                CITY_CODE: "340300",
                DISTRICT_CODE: "340302",
                DISTRICT_NAME: "榫欏瓙婀栧尯"
            }, {
                CITY_CODE: "340300",
                DISTRICT_CODE: "340303",
                DISTRICT_NAME: "铓屽北鍖�"
            }, {
                CITY_CODE: "340300",
                DISTRICT_CODE: "340304",
                DISTRICT_NAME: "绂逛細鍖�"
            }, {
                CITY_CODE: "340300",
                DISTRICT_CODE: "340311",
                DISTRICT_NAME: "娣笂鍖�"
            }, {
                CITY_CODE: "340300",
                DISTRICT_CODE: "340321",
                DISTRICT_NAME: "鎬€杩滃幙"
            }, {
                CITY_CODE: "340300",
                DISTRICT_CODE: "340322",
                DISTRICT_NAME: "浜旀渤鍘�"
            }, {
                CITY_CODE: "340300",
                DISTRICT_CODE: "340323",
                DISTRICT_NAME: "鍥洪晣鍘�"
            }],
            340400: [{
                CITY_CODE: "340400",
                DISTRICT_CODE: "340402",
                DISTRICT_NAME: "澶ч€氬尯"
            }, {
                CITY_CODE: "340400",
                DISTRICT_CODE: "340403",
                DISTRICT_NAME: "鐢板搴靛尯"
            }, {
                CITY_CODE: "340400",
                DISTRICT_CODE: "340404",
                DISTRICT_NAME: "璋㈠闆嗗尯"
            }, {
                CITY_CODE: "340400",
                DISTRICT_CODE: "340405",
                DISTRICT_NAME: "鍏叕灞卞尯"
            }, {
                CITY_CODE: "340400",
                DISTRICT_CODE: "340406",
                DISTRICT_NAME: "娼橀泦鍖�"
            }, {
                CITY_CODE: "340400",
                DISTRICT_CODE: "340421",
                DISTRICT_NAME: "鍑ゅ彴鍘�"
            }, {
                CITY_CODE: "340400",
                DISTRICT_CODE: "341521",
                DISTRICT_NAME: "瀵垮幙"
            }],
            340500: [{
                CITY_CODE: "340500",
                DISTRICT_CODE: "340503",
                DISTRICT_NAME: "鑺卞北鍖�"
            }, {
                CITY_CODE: "340500",
                DISTRICT_CODE: "340504",
                DISTRICT_NAME: "闆ㄥ北鍖�"
            }, {
                CITY_CODE: "340500",
                DISTRICT_CODE: "340521",
                DISTRICT_NAME: "褰撴秱鍘�"
            }, {
                CITY_CODE: "340500",
                DISTRICT_CODE: "340522",
                DISTRICT_NAME: "鍚北鍘�"
            }, {
                CITY_CODE: "340500",
                DISTRICT_CODE: "340523",
                DISTRICT_NAME: "鍜屽幙"
            }, {
                CITY_CODE: "340500",
                DISTRICT_CODE: "340524",
                DISTRICT_NAME: "鍗氭湜鍖�"
            }],
            340600: [{
                CITY_CODE: "340600",
                DISTRICT_CODE: "340602",
                DISTRICT_NAME: "鏉滈泦鍖�"
            }, {
                CITY_CODE: "340600",
                DISTRICT_CODE: "340603",
                DISTRICT_NAME: "鐩稿北鍖�"
            }, {
                CITY_CODE: "340600",
                DISTRICT_CODE: "340604",
                DISTRICT_NAME: "鐑堝北鍖�"
            }, {
                CITY_CODE: "340600",
                DISTRICT_CODE: "340621",
                DISTRICT_NAME: "婵夋邯鍘�"
            }],
            340700: [{
                CITY_CODE: "340700",
                DISTRICT_CODE: "340711",
                DISTRICT_NAME: "閮婂尯"
            }, {
                CITY_CODE: "340700",
                DISTRICT_CODE: "340722",
                DISTRICT_NAME: "涔夊畨鍖�"
            }, {
                CITY_CODE: "340700",
                DISTRICT_CODE: "340723",
                DISTRICT_NAME: "閾滃畼鍖�"
            }, {
                CITY_CODE: "340700",
                DISTRICT_CODE: "340823",
                DISTRICT_NAME: "鏋為槼鍘�"
            }],
            340800: [{
                CITY_CODE: "340800",
                DISTRICT_CODE: "340802",
                DISTRICT_NAME: "杩庢睙鍖�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340803",
                DISTRICT_NAME: "澶ц鍖�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340811",
                DISTRICT_NAME: "瀹滅鍖�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340822",
                DISTRICT_NAME: "鎬€瀹佸幙"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340824",
                DISTRICT_NAME: "娼滃北鍘�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340825",
                DISTRICT_NAME: "澶箹鍘�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340826",
                DISTRICT_NAME: "瀹挎澗鍘�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340827",
                DISTRICT_NAME: "鏈涙睙鍘�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340828",
                DISTRICT_NAME: "宀宠タ鍘�"
            }, {
                CITY_CODE: "340800",
                DISTRICT_CODE: "340881",
                DISTRICT_NAME: "妗愬煄甯�"
            }],
            341000: [{
                CITY_CODE: "341000",
                DISTRICT_CODE: "341002",
                DISTRICT_NAME: "灞邯鍖�"
            }, {
                CITY_CODE: "341000",
                DISTRICT_CODE: "341003",
                DISTRICT_NAME: "榛勫北鍖�"
            }, {
                CITY_CODE: "341000",
                DISTRICT_CODE: "341004",
                DISTRICT_NAME: "寰藉窞鍖�"
            }, {
                CITY_CODE: "341000",
                DISTRICT_CODE: "341021",
                DISTRICT_NAME: "姝欏幙"
            }, {
                CITY_CODE: "341000",
                DISTRICT_CODE: "341022",
                DISTRICT_NAME: "浼戝畞鍘�"
            }, {
                CITY_CODE: "341000",
                DISTRICT_CODE: "341023",
                DISTRICT_NAME: "榛熷幙"
            }, {
                CITY_CODE: "341000",
                DISTRICT_CODE: "341024",
                DISTRICT_NAME: "绁侀棬鍘�"
            }],
            341100: [{
                CITY_CODE: "341100",
                DISTRICT_CODE: "341102",
                DISTRICT_NAME: "鐞呯悐鍖�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341103",
                DISTRICT_NAME: "鍗楄隘鍖�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341122",
                DISTRICT_NAME: "鏉ュ畨鍘�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341124",
                DISTRICT_NAME: "鍏ㄦ鍘�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341125",
                DISTRICT_NAME: "瀹氳繙鍘�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341126",
                DISTRICT_NAME: "鍑ら槼鍘�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341181",
                DISTRICT_NAME: "澶╅暱甯�"
            }, {
                CITY_CODE: "341100",
                DISTRICT_CODE: "341182",
                DISTRICT_NAME: "鏄庡厜甯�"
            }],
            341200: [{
                CITY_CODE: "341200",
                DISTRICT_CODE: "341202",
                DISTRICT_NAME: "棰嶅窞鍖�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341203",
                DISTRICT_NAME: "棰嶄笢鍖�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341204",
                DISTRICT_NAME: "棰嶆硥鍖�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341221",
                DISTRICT_NAME: "涓存硥鍘�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341222",
                DISTRICT_NAME: "澶拰鍘�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341225",
                DISTRICT_NAME: "闃滃崡鍘�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341226",
                DISTRICT_NAME: "棰嶄笂鍘�"
            }, {
                CITY_CODE: "341200",
                DISTRICT_CODE: "341282",
                DISTRICT_NAME: "鐣岄甯�"
            }],
            341300: [{
                CITY_CODE: "341300",
                DISTRICT_CODE: "341302",
                DISTRICT_NAME: "鍩囨ˉ鍖�"
            }, {
                CITY_CODE: "341300",
                DISTRICT_CODE: "341321",
                DISTRICT_NAME: "鐮€灞卞幙"
            }, {
                CITY_CODE: "341300",
                DISTRICT_CODE: "341322",
                DISTRICT_NAME: "钀у幙"
            }, {
                CITY_CODE: "341300",
                DISTRICT_CODE: "341323",
                DISTRICT_NAME: "鐏电挧鍘�"
            }, {
                CITY_CODE: "341300",
                DISTRICT_CODE: "341324",
                DISTRICT_NAME: "娉楀幙"
            }],
            341500: [{
                CITY_CODE: "341500",
                DISTRICT_CODE: "341502",
                DISTRICT_NAME: "閲戝畨鍖�"
            }, {
                CITY_CODE: "341500",
                DISTRICT_CODE: "341503",
                DISTRICT_NAME: "瑁曞畨鍖�"
            }, {
                CITY_CODE: "341500",
                DISTRICT_CODE: "341522",
                DISTRICT_NAME: "闇嶉偙鍘�"
            }, {
                CITY_CODE: "341500",
                DISTRICT_CODE: "341523",
                DISTRICT_NAME: "鑸掑煄鍘�"
            }, {
                CITY_CODE: "341500",
                DISTRICT_CODE: "341524",
                DISTRICT_NAME: "閲戝鍘�"
            }, {
                CITY_CODE: "341500",
                DISTRICT_CODE: "341525",
                DISTRICT_NAME: "闇嶅北鍘�"
            }, {
                CITY_CODE: "341500",
                DISTRICT_CODE: "341526",
                DISTRICT_NAME: "鍙堕泦鍖�"
            }],
            341600: [{
                CITY_CODE: "341600",
                DISTRICT_CODE: "341602",
                DISTRICT_NAME: "璋煄鍖�"
            }, {
                CITY_CODE: "341600",
                DISTRICT_CODE: "341621",
                DISTRICT_NAME: "娑￠槼鍘�"
            }, {
                CITY_CODE: "341600",
                DISTRICT_CODE: "341622",
                DISTRICT_NAME: "钂欏煄鍘�"
            }, {
                CITY_CODE: "341600",
                DISTRICT_CODE: "341623",
                DISTRICT_NAME: "鍒╄緵鍘�"
            }],
            341700: [{
                CITY_CODE: "341700",
                DISTRICT_CODE: "341702",
                DISTRICT_NAME: "璐垫睜鍖�"
            }, {
                CITY_CODE: "341700",
                DISTRICT_CODE: "341721",
                DISTRICT_NAME: "涓滆嚦鍘�"
            }, {
                CITY_CODE: "341700",
                DISTRICT_CODE: "341722",
                DISTRICT_NAME: "鐭冲彴鍘�"
            }, {
                CITY_CODE: "341700",
                DISTRICT_CODE: "341723",
                DISTRICT_NAME: "闈掗槼鍘�"
            }],
            341800: [{
                CITY_CODE: "341800",
                DISTRICT_CODE: "341802",
                DISTRICT_NAME: "瀹ｅ窞鍖�"
            }, {
                CITY_CODE: "341800",
                DISTRICT_CODE: "341821",
                DISTRICT_NAME: "閮庢邯鍘�"
            }, {
                CITY_CODE: "341800",
                DISTRICT_CODE: "341822",
                DISTRICT_NAME: "骞垮痉鍘�"
            }, {
                CITY_CODE: "341800",
                DISTRICT_CODE: "341823",
                DISTRICT_NAME: "娉惧幙"
            }, {
                CITY_CODE: "341800",
                DISTRICT_CODE: "341824",
                DISTRICT_NAME: "缁╂邯鍘�"
            }, {
                CITY_CODE: "341800",
                DISTRICT_CODE: "341825",
                DISTRICT_NAME: "鏃屽痉鍘�"
            }, {
                CITY_CODE: "341800",
                DISTRICT_CODE: "341881",
                DISTRICT_NAME: "瀹佸浗甯�"
            }],
            350100: [{
                CITY_CODE: "350100",
                DISTRICT_CODE: "350102",
                DISTRICT_NAME: "榧撴ゼ鍖�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350103",
                DISTRICT_NAME: "鍙版睙鍖�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350104",
                DISTRICT_NAME: "浠撳北鍖�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350105",
                DISTRICT_NAME: "椹熬鍖�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350111",
                DISTRICT_NAME: "鏅嬪畨鍖�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350121",
                DISTRICT_NAME: "闂戒警鍘�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350122",
                DISTRICT_NAME: "杩炴睙鍘�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350123",
                DISTRICT_NAME: "缃楁簮鍘�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350124",
                DISTRICT_NAME: "闂芥竻鍘�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350125",
                DISTRICT_NAME: "姘告嘲鍘�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350128",
                DISTRICT_NAME: "骞虫江鍘�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350181",
                DISTRICT_NAME: "绂忔竻甯�"
            }, {
                CITY_CODE: "350100",
                DISTRICT_CODE: "350182",
                DISTRICT_NAME: "闀夸箰甯�"
            }],
            350200: [{
                CITY_CODE: "350200",
                DISTRICT_CODE: "350203",
                DISTRICT_NAME: "鎬濇槑鍖�"
            }, {
                CITY_CODE: "350200",
                DISTRICT_CODE: "350205",
                DISTRICT_NAME: "娴锋钵鍖�"
            }, {
                CITY_CODE: "350200",
                DISTRICT_CODE: "350206",
                DISTRICT_NAME: "婀栭噷鍖�"
            }, {
                CITY_CODE: "350200",
                DISTRICT_CODE: "350211",
                DISTRICT_NAME: "闆嗙編鍖�"
            }, {
                CITY_CODE: "350200",
                DISTRICT_CODE: "350212",
                DISTRICT_NAME: "鍚屽畨鍖�"
            }, {
                CITY_CODE: "350200",
                DISTRICT_CODE: "350213",
                DISTRICT_NAME: "缈斿畨鍖�"
            }],
            350300: [{
                CITY_CODE: "350300",
                DISTRICT_CODE: "350302",
                DISTRICT_NAME: "鍩庡帰鍖�"
            }, {
                CITY_CODE: "350300",
                DISTRICT_CODE: "350303",
                DISTRICT_NAME: "娑垫睙鍖�"
            }, {
                CITY_CODE: "350300",
                DISTRICT_CODE: "350304",
                DISTRICT_NAME: "鑽斿煄鍖�"
            }, {
                CITY_CODE: "350300",
                DISTRICT_CODE: "350305",
                DISTRICT_NAME: "绉€灞垮尯"
            }, {
                CITY_CODE: "350300",
                DISTRICT_CODE: "350322",
                DISTRICT_NAME: "浠欐父鍘�"
            }],
            350400: [{
                CITY_CODE: "350400",
                DISTRICT_CODE: "350402",
                DISTRICT_NAME: "姊呭垪鍖�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350403",
                DISTRICT_NAME: "涓夊厓鍖�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350421",
                DISTRICT_NAME: "鏄庢邯鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350423",
                DISTRICT_NAME: "娓呮祦鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350424",
                DISTRICT_NAME: "瀹佸寲鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350425",
                DISTRICT_NAME: "澶х敯鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350426",
                DISTRICT_NAME: "灏ゆ邯鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350427",
                DISTRICT_NAME: "娌欏幙"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350428",
                DISTRICT_NAME: "灏嗕箰鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350429",
                DISTRICT_NAME: "娉板畞鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350430",
                DISTRICT_NAME: "寤哄畞鍘�"
            }, {
                CITY_CODE: "350400",
                DISTRICT_CODE: "350481",
                DISTRICT_NAME: "姘稿畨甯�"
            }],
            350500: [{
                CITY_CODE: "350500",
                DISTRICT_CODE: "350502",
                DISTRICT_NAME: "椴ゅ煄鍖�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350503",
                DISTRICT_NAME: "涓版辰鍖�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350504",
                DISTRICT_NAME: "娲涙睙鍖�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350505",
                DISTRICT_NAME: "娉夋腐鍖�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350521",
                DISTRICT_NAME: "鎯犲畨鍘�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350524",
                DISTRICT_NAME: "瀹夋邯鍘�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350525",
                DISTRICT_NAME: "姘告槬鍘�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350526",
                DISTRICT_NAME: "寰峰寲鍘�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350527",
                DISTRICT_NAME: "閲戦棬鍘�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350581",
                DISTRICT_NAME: "鐭崇嫯甯�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350582",
                DISTRICT_NAME: "鏅嬫睙甯�"
            }, {
                CITY_CODE: "350500",
                DISTRICT_CODE: "350583",
                DISTRICT_NAME: "鍗楀畨甯�"
            }],
            350600: [{
                CITY_CODE: "350600",
                DISTRICT_CODE: "350602",
                DISTRICT_NAME: "鑺楀煄鍖�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350603",
                DISTRICT_NAME: "榫欐枃鍖�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350622",
                DISTRICT_NAME: "浜戦渼鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350623",
                DISTRICT_NAME: "婕虫郸鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350624",
                DISTRICT_NAME: "璇忓畨鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350625",
                DISTRICT_NAME: "闀挎嘲鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350626",
                DISTRICT_NAME: "涓滃北鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350627",
                DISTRICT_NAME: "鍗楅潠鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350628",
                DISTRICT_NAME: "骞冲拰鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350629",
                DISTRICT_NAME: "鍗庡畨鍘�"
            }, {
                CITY_CODE: "350600",
                DISTRICT_CODE: "350681",
                DISTRICT_NAME: "榫欐捣甯�"
            }],
            350700: [{
                CITY_CODE: "350700",
                DISTRICT_CODE: "350702",
                DISTRICT_NAME: "寤跺钩鍖�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350721",
                DISTRICT_NAME: "椤烘槍鍘�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350722",
                DISTRICT_NAME: "娴﹀煄鍘�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350723",
                DISTRICT_NAME: "鍏夋辰鍘�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350724",
                DISTRICT_NAME: "鏉炬邯鍘�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350725",
                DISTRICT_NAME: "鏀垮拰鍘�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350781",
                DISTRICT_NAME: "閭垫甯�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350782",
                DISTRICT_NAME: "姝﹀し灞卞競"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350783",
                DISTRICT_NAME: "寤虹摨甯�"
            }, {
                CITY_CODE: "350700",
                DISTRICT_CODE: "350784",
                DISTRICT_NAME: "寤洪槼甯�"
            }],
            350800: [{
                CITY_CODE: "350800",
                DISTRICT_CODE: "350802",
                DISTRICT_NAME: "鏂扮綏鍖�"
            }, {
                CITY_CODE: "350800",
                DISTRICT_CODE: "350821",
                DISTRICT_NAME: "闀挎眬鍘�"
            }, {
                CITY_CODE: "350800",
                DISTRICT_CODE: "350822",
                DISTRICT_NAME: "姘稿畾鍘�"
            }, {
                CITY_CODE: "350800",
                DISTRICT_CODE: "350823",
                DISTRICT_NAME: "涓婃澀鍘�"
            }, {
                CITY_CODE: "350800",
                DISTRICT_CODE: "350824",
                DISTRICT_NAME: "姝﹀钩鍘�"
            }, {
                CITY_CODE: "350800",
                DISTRICT_CODE: "350825",
                DISTRICT_NAME: "杩炲煄鍘�"
            }, {
                CITY_CODE: "350800",
                DISTRICT_CODE: "350881",
                DISTRICT_NAME: "婕冲钩甯�"
            }],
            350900: [{
                CITY_CODE: "350900",
                DISTRICT_CODE: "350902",
                DISTRICT_NAME: "钑夊煄鍖�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350921",
                DISTRICT_NAME: "闇炴郸鍘�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350922",
                DISTRICT_NAME: "鍙ょ敯鍘�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350923",
                DISTRICT_NAME: "灞忓崡鍘�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350924",
                DISTRICT_NAME: "瀵垮畞鍘�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350925",
                DISTRICT_NAME: "鍛ㄥ畞鍘�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350926",
                DISTRICT_NAME: "鏌樿崳鍘�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350981",
                DISTRICT_NAME: "绂忓畨甯�"
            }, {
                CITY_CODE: "350900",
                DISTRICT_CODE: "350982",
                DISTRICT_NAME: "绂忛紟甯�"
            }],
            360100: [{
                CITY_CODE: "360100",
                DISTRICT_CODE: "360102",
                DISTRICT_NAME: "涓滄箹鍖�"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360103",
                DISTRICT_NAME: "瑗挎箹鍖�"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360104",
                DISTRICT_NAME: "闈掍簯璋卞尯"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360105",
                DISTRICT_NAME: "婀鹃噷鍖�"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360111",
                DISTRICT_NAME: "闈掑北婀栧尯"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360121",
                DISTRICT_NAME: "鍗楁槍鍘�"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360122",
                DISTRICT_NAME: "鏂板缓鍘�"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360123",
                DISTRICT_NAME: "瀹変箟鍘�"
            }, {
                CITY_CODE: "360100",
                DISTRICT_CODE: "360124",
                DISTRICT_NAME: "杩涜搐鍘�"
            }],
            360200: [{
                CITY_CODE: "360200",
                DISTRICT_CODE: "360202",
                DISTRICT_NAME: "鏄屾睙鍖�"
            }, {
                CITY_CODE: "360200",
                DISTRICT_CODE: "360203",
                DISTRICT_NAME: "鐝犲北鍖�"
            }, {
                CITY_CODE: "360200",
                DISTRICT_CODE: "360222",
                DISTRICT_NAME: "娴鍘�"
            }, {
                CITY_CODE: "360200",
                DISTRICT_CODE: "360281",
                DISTRICT_NAME: "涔愬钩甯�"
            }],
            360300: [{
                CITY_CODE: "360300",
                DISTRICT_CODE: "360302",
                DISTRICT_NAME: "瀹夋簮鍖�"
            }, {
                CITY_CODE: "360300",
                DISTRICT_CODE: "360313",
                DISTRICT_NAME: "婀樹笢鍖�"
            }, {
                CITY_CODE: "360300",
                DISTRICT_CODE: "360321",
                DISTRICT_NAME: "鑾茶姳鍘�"
            }, {
                CITY_CODE: "360300",
                DISTRICT_CODE: "360322",
                DISTRICT_NAME: "涓婃牀鍘�"
            }, {
                CITY_CODE: "360300",
                DISTRICT_CODE: "360323",
                DISTRICT_NAME: "鑺︽邯鍘�"
            }],
            360400: [{
                CITY_CODE: "360400",
                DISTRICT_CODE: "360402",
                DISTRICT_NAME: "搴愬北鍖�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360403",
                DISTRICT_NAME: "娴旈槼鍖�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360421",
                DISTRICT_NAME: "涔濇睙鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360423",
                DISTRICT_NAME: "姝﹀畞鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360424",
                DISTRICT_NAME: "淇按鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360425",
                DISTRICT_NAME: "姘镐慨鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360426",
                DISTRICT_NAME: "寰峰畨鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360427",
                DISTRICT_NAME: "鏄熷瓙鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360428",
                DISTRICT_NAME: "閮芥槍鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360429",
                DISTRICT_NAME: "婀栧彛鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360430",
                DISTRICT_NAME: "褰辰鍘�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360481",
                DISTRICT_NAME: "鐟炴槍甯�"
            }, {
                CITY_CODE: "360400",
                DISTRICT_CODE: "360482",
                DISTRICT_NAME: "鍏遍潚鍩庡競"
            }],
            360500: [{
                CITY_CODE: "360500",
                DISTRICT_CODE: "360502",
                DISTRICT_NAME: "娓濇按鍖�"
            }, {
                CITY_CODE: "360500",
                DISTRICT_CODE: "360521",
                DISTRICT_NAME: "鍒嗗疁鍘�"
            }],
            360600: [{
                CITY_CODE: "360600",
                DISTRICT_CODE: "360602",
                DISTRICT_NAME: "鏈堟箹鍖�"
            }, {
                CITY_CODE: "360600",
                DISTRICT_CODE: "360622",
                DISTRICT_NAME: "浣欐睙鍘�"
            }, {
                CITY_CODE: "360600",
                DISTRICT_CODE: "360681",
                DISTRICT_NAME: "璐垫邯甯�"
            }],
            360700: [{
                CITY_CODE: "360700",
                DISTRICT_CODE: "360702",
                DISTRICT_NAME: "绔犺础鍖�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360721",
                DISTRICT_NAME: "璧ｅ幙"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360722",
                DISTRICT_NAME: "淇′赴鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360723",
                DISTRICT_NAME: "澶т綑鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360724",
                DISTRICT_NAME: "涓婄姽鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360725",
                DISTRICT_NAME: "宕囦箟鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360726",
                DISTRICT_NAME: "瀹夎繙鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360727",
                DISTRICT_NAME: "榫欏崡鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360728",
                DISTRICT_NAME: "瀹氬崡鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360729",
                DISTRICT_NAME: "鍏ㄥ崡鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360730",
                DISTRICT_NAME: "瀹侀兘鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360731",
                DISTRICT_NAME: "浜庨兘鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360732",
                DISTRICT_NAME: "鍏村浗鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360733",
                DISTRICT_NAME: "浼氭槍鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360734",
                DISTRICT_NAME: "瀵讳箤鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360735",
                DISTRICT_NAME: "鐭冲煄鍘�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360781",
                DISTRICT_NAME: "鐟為噾甯�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360782",
                DISTRICT_NAME: "鍗楀悍甯�"
            }, {
                CITY_CODE: "360700",
                DISTRICT_CODE: "360783",
                DISTRICT_NAME: "榛勯噾寮€鍙戝尯"
            }],
            360800: [{
                CITY_CODE: "360800",
                DISTRICT_CODE: "360802",
                DISTRICT_NAME: "鍚夊窞鍖�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360803",
                DISTRICT_NAME: "闈掑師鍖�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360821",
                DISTRICT_NAME: "鍚夊畨鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360822",
                DISTRICT_NAME: "鍚夋按鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360823",
                DISTRICT_NAME: "宄℃睙鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360824",
                DISTRICT_NAME: "鏂板共鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360825",
                DISTRICT_NAME: "姘镐赴鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360826",
                DISTRICT_NAME: "娉板拰鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360827",
                DISTRICT_NAME: "閬傚窛鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360828",
                DISTRICT_NAME: "涓囧畨鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360829",
                DISTRICT_NAME: "瀹夌鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360830",
                DISTRICT_NAME: "姘告柊鍘�"
            }, {
                CITY_CODE: "360800",
                DISTRICT_CODE: "360881",
                DISTRICT_NAME: "浜曞唸灞卞競"
            }],
            360900: [{
                CITY_CODE: "360900",
                DISTRICT_CODE: "360902",
                DISTRICT_NAME: "琚佸窞鍖�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360921",
                DISTRICT_NAME: "濂夋柊鍘�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360922",
                DISTRICT_NAME: "涓囪浇鍘�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360923",
                DISTRICT_NAME: "涓婇珮鍘�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360924",
                DISTRICT_NAME: "瀹滀赴鍘�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360925",
                DISTRICT_NAME: "闈栧畨鍘�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360926",
                DISTRICT_NAME: "閾滈紦鍘�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360981",
                DISTRICT_NAME: "涓板煄甯�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360982",
                DISTRICT_NAME: "妯熸爲甯�"
            }, {
                CITY_CODE: "360900",
                DISTRICT_CODE: "360983",
                DISTRICT_NAME: "楂樺畨甯�"
            }],
            361000: [{
                CITY_CODE: "361000",
                DISTRICT_CODE: "361002",
                DISTRICT_NAME: "涓村窛鍖�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361021",
                DISTRICT_NAME: "鍗楀煄鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361022",
                DISTRICT_NAME: "榛庡窛鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361023",
                DISTRICT_NAME: "鍗椾赴鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361024",
                DISTRICT_NAME: "宕囦粊鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361025",
                DISTRICT_NAME: "涔愬畨鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361026",
                DISTRICT_NAME: "瀹滈粍鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361027",
                DISTRICT_NAME: "閲戞邯鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361028",
                DISTRICT_NAME: "璧勬邯鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361029",
                DISTRICT_NAME: "涓滀埂鍘�"
            }, {
                CITY_CODE: "361000",
                DISTRICT_CODE: "361030",
                DISTRICT_NAME: "骞挎槍鍘�"
            }],
            361100: [{
                CITY_CODE: "361100",
                DISTRICT_CODE: "361102",
                DISTRICT_NAME: "淇″窞鍖�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361121",
                DISTRICT_NAME: "涓婇ザ鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361122",
                DISTRICT_NAME: "骞夸赴鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361123",
                DISTRICT_NAME: "鐜夊北鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361124",
                DISTRICT_NAME: "閾呭北鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361125",
                DISTRICT_NAME: "妯嘲鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361126",
                DISTRICT_NAME: "寮嬮槼鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361127",
                DISTRICT_NAME: "浣欏共鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361128",
                DISTRICT_NAME: "閯遍槼鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361129",
                DISTRICT_NAME: "涓囧勾鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361130",
                DISTRICT_NAME: "濠烘簮鍘�"
            }, {
                CITY_CODE: "361100",
                DISTRICT_CODE: "361181",
                DISTRICT_NAME: "寰峰叴甯�"
            }],
            370100: [{
                CITY_CODE: "370100",
                DISTRICT_CODE: "370102",
                DISTRICT_NAME: "鍘嗕笅鍖�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370103",
                DISTRICT_NAME: "甯備腑鍖�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370104",
                DISTRICT_NAME: "妲愯崼鍖�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370105",
                DISTRICT_NAME: "澶╂ˉ鍖�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370112",
                DISTRICT_NAME: "鍘嗗煄鍖�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370113",
                DISTRICT_NAME: "闀挎竻鍖�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370124",
                DISTRICT_NAME: "骞抽槾鍘�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370125",
                DISTRICT_NAME: "娴庨槼鍘�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370126",
                DISTRICT_NAME: "鍟嗘渤鍘�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370181",
                DISTRICT_NAME: "绔犱笜甯�"
            }, {
                CITY_CODE: "370100",
                DISTRICT_CODE: "370127",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            370200: [{
                CITY_CODE: "370200",
                DISTRICT_CODE: "370202",
                DISTRICT_NAME: "甯傚崡鍖�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370203",
                DISTRICT_NAME: "甯傚寳鍖�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370211",
                DISTRICT_NAME: "榛勫矝鍖�(鍘熻兌鍗楀競)"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370287",
                DISTRICT_NAME: "寮€鍙戝尯"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370212",
                DISTRICT_NAME: "宕傚北鍖�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370213",
                DISTRICT_NAME: "鏉庢钵鍖�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370214",
                DISTRICT_NAME: "鍩庨槼鍖�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370281",
                DISTRICT_NAME: "鑳跺窞甯�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370282",
                DISTRICT_NAME: "鍗冲ⅷ甯�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370283",
                DISTRICT_NAME: "骞冲害甯�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370285",
                DISTRICT_NAME: "鑾辫タ甯�"
            }, {
                CITY_CODE: "370200",
                DISTRICT_CODE: "370286",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            370300: [{
                CITY_CODE: "370300",
                DISTRICT_CODE: "370302",
                DISTRICT_NAME: "娣勫窛鍖�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370303",
                DISTRICT_NAME: "寮犲簵鍖�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370304",
                DISTRICT_NAME: "鍗氬北鍖�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370305",
                DISTRICT_NAME: "涓存穭鍖�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370306",
                DISTRICT_NAME: "鍛ㄦ潙鍖�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370321",
                DISTRICT_NAME: "妗撳彴鍘�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370322",
                DISTRICT_NAME: "楂橀潚鍘�"
            }, {
                CITY_CODE: "370300",
                DISTRICT_CODE: "370323",
                DISTRICT_NAME: "娌傛簮鍘�"
            }],
            370400: [{
                CITY_CODE: "370400",
                DISTRICT_CODE: "370402",
                DISTRICT_NAME: "甯備腑鍖�"
            }, {
                CITY_CODE: "370400",
                DISTRICT_CODE: "370403",
                DISTRICT_NAME: "钖涘煄鍖�"
            }, {
                CITY_CODE: "370400",
                DISTRICT_CODE: "370404",
                DISTRICT_NAME: "宄勫煄鍖�"
            }, {
                CITY_CODE: "370400",
                DISTRICT_CODE: "370405",
                DISTRICT_NAME: "鍙板効搴勫尯"
            }, {
                CITY_CODE: "370400",
                DISTRICT_CODE: "370406",
                DISTRICT_NAME: "灞变涵鍖�"
            }, {
                CITY_CODE: "370400",
                DISTRICT_CODE: "370481",
                DISTRICT_NAME: "婊曞窞甯�"
            }],
            370500: [{
                CITY_CODE: "370500",
                DISTRICT_CODE: "370502",
                DISTRICT_NAME: "涓滆惀鍖�"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370503",
                DISTRICT_NAME: "娌冲彛鍖�"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370521",
                DISTRICT_NAME: "鍨﹀埄鍖�"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370522",
                DISTRICT_NAME: "鍒╂触鍘�"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370523",
                DISTRICT_NAME: "骞块ザ鍘�"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370530",
                DISTRICT_NAME: "寮€鍙戝尯"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370531",
                DISTRICT_NAME: "鑳滀腑"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370524",
                DISTRICT_NAME: "鑳滃寳"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370525",
                DISTRICT_NAME: "鑳滃崡"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370526",
                DISTRICT_NAME: "鑳滀笢"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370527",
                DISTRICT_NAME: "鑳滃埄娌冲彛"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370528",
                DISTRICT_NAME: "瀛ゅ矝"
            }, {
                CITY_CODE: "370500",
                DISTRICT_CODE: "370529",
                DISTRICT_NAME: "浠欐渤"
            }],
            370600: [{
                CITY_CODE: "370600",
                DISTRICT_CODE: "370602",
                DISTRICT_NAME: "鑺濈綐鍖�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370611",
                DISTRICT_NAME: "绂忓北鍖�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370612",
                DISTRICT_NAME: "鐗熷钩鍖�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370613",
                DISTRICT_NAME: "鑾卞北鍖�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370614",
                DISTRICT_NAME: "寮€鍙戝尯"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370615",
                DISTRICT_NAME: "楂樻柊鍖�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370634",
                DISTRICT_NAME: "闀垮矝鍘�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370681",
                DISTRICT_NAME: "榫欏彛甯�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370682",
                DISTRICT_NAME: "鑾遍槼甯�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370683",
                DISTRICT_NAME: "鑾卞窞甯�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370684",
                DISTRICT_NAME: "钃幈甯�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370685",
                DISTRICT_NAME: "鎷涜繙甯�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370686",
                DISTRICT_NAME: "鏍栭湠甯�"
            }, {
                CITY_CODE: "370600",
                DISTRICT_CODE: "370687",
                DISTRICT_NAME: "娴烽槼甯�"
            }],
            370700: [{
                CITY_CODE: "370700",
                DISTRICT_CODE: "370702",
                DISTRICT_NAME: "娼嶅煄鍖�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370703",
                DISTRICT_NAME: "瀵掍涵鍖�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370704",
                DISTRICT_NAME: "鍧婂瓙鍖�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370705",
                DISTRICT_NAME: "濂庢枃鍖�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370724",
                DISTRICT_NAME: "涓存湊鍘�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370725",
                DISTRICT_NAME: "鏄屼箰鍘�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370781",
                DISTRICT_NAME: "闈掑窞甯�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370782",
                DISTRICT_NAME: "璇稿煄甯�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370783",
                DISTRICT_NAME: "瀵垮厜甯�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370784",
                DISTRICT_NAME: "瀹変笜甯�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370785",
                DISTRICT_NAME: "楂樺瘑甯�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370786",
                DISTRICT_NAME: "鏄岄倯甯�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370787",
                DISTRICT_NAME: "楂樻柊鍖�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370788",
                DISTRICT_NAME: "宄″北鍖�"
            }, {
                CITY_CODE: "370700",
                DISTRICT_CODE: "370789",
                DISTRICT_NAME: "婊ㄦ捣鍖�"
            }],
            370800: [{
                CITY_CODE: "370800",
                DISTRICT_CODE: "370802",
                DISTRICT_NAME: "甯備腑鍖�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370811",
                DISTRICT_NAME: "浠诲煄鍖�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370826",
                DISTRICT_NAME: "寰北鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370827",
                DISTRICT_NAME: "楸煎彴鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370828",
                DISTRICT_NAME: "閲戜埂鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370829",
                DISTRICT_NAME: "鍢夌ゥ鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370830",
                DISTRICT_NAME: "姹朵笂鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370831",
                DISTRICT_NAME: "娉楁按鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370832",
                DISTRICT_NAME: "姊佸北鍘�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370881",
                DISTRICT_NAME: "鏇查槣甯�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370882",
                DISTRICT_NAME: "鍏栧窞甯�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370883",
                DISTRICT_NAME: "閭瑰煄甯�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370884",
                DISTRICT_NAME: "楂樻柊鍖�"
            }, {
                CITY_CODE: "370800",
                DISTRICT_CODE: "370885",
                DISTRICT_NAME: "鍖楁箹鍖�"
            }],
            370900: [{
                CITY_CODE: "370900",
                DISTRICT_CODE: "370902",
                DISTRICT_NAME: "娉板北鍖�"
            }, {
                CITY_CODE: "370900",
                DISTRICT_CODE: "370911",
                DISTRICT_NAME: "宀卞渤鍖�"
            }, {
                CITY_CODE: "370900",
                DISTRICT_CODE: "370921",
                DISTRICT_NAME: "瀹侀槼鍘�"
            }, {
                CITY_CODE: "370900",
                DISTRICT_CODE: "370923",
                DISTRICT_NAME: "涓滃钩鍘�"
            }, {
                CITY_CODE: "370900",
                DISTRICT_CODE: "370982",
                DISTRICT_NAME: "鏂版嘲甯�"
            }, {
                CITY_CODE: "370900",
                DISTRICT_CODE: "370983",
                DISTRICT_NAME: "鑲ュ煄甯�"
            }, {
                CITY_CODE: "370900",
                DISTRICT_CODE: "370984",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            371000: [{
                CITY_CODE: "371000",
                DISTRICT_CODE: "371002",
                DISTRICT_NAME: "鐜繝鍖�"
            }, {
                CITY_CODE: "371000",
                DISTRICT_CODE: "371081",
                DISTRICT_NAME: "鏂囩櫥鍖�"
            }, {
                CITY_CODE: "371000",
                DISTRICT_CODE: "371082",
                DISTRICT_NAME: "鑽ｆ垚甯�"
            }, {
                CITY_CODE: "371000",
                DISTRICT_CODE: "371083",
                DISTRICT_NAME: "涔冲北甯�"
            }, {
                CITY_CODE: "371000",
                DISTRICT_CODE: "371084",
                DISTRICT_NAME: "缁忓尯"
            }, {
                CITY_CODE: "371000",
                DISTRICT_CODE: "371085",
                DISTRICT_NAME: "楂樺尯"
            }, {
                CITY_CODE: "371000",
                DISTRICT_CODE: "371086",
                DISTRICT_NAME: "涓存腐鍖�"
            }],
            371100: [{
                CITY_CODE: "371100",
                DISTRICT_CODE: "371102",
                DISTRICT_NAME: "涓滄腐鍖�"
            }, {
                CITY_CODE: "371100",
                DISTRICT_CODE: "371103",
                DISTRICT_NAME: "宀氬北鍖�"
            }, {
                CITY_CODE: "371100",
                DISTRICT_CODE: "371121",
                DISTRICT_NAME: "浜旇幉鍘�"
            }, {
                CITY_CODE: "371100",
                DISTRICT_CODE: "371122",
                DISTRICT_NAME: "鑾掑幙"
            }],
            371200: [{
                CITY_CODE: "371200",
                DISTRICT_CODE: "371202",
                DISTRICT_NAME: "鑾卞煄鍖�"
            }, {
                CITY_CODE: "371200",
                DISTRICT_CODE: "371203",
                DISTRICT_NAME: "閽㈠煄鍖�"
            }],
            371300: [{
                CITY_CODE: "371300",
                DISTRICT_CODE: "371302",
                DISTRICT_NAME: "鍏板北鍖�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371311",
                DISTRICT_NAME: "缃楀簞鍖�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371312",
                DISTRICT_NAME: "娌充笢鍖�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371313",
                DISTRICT_NAME: "寮€鍙戝尯"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371321",
                DISTRICT_NAME: "娌傚崡鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371322",
                DISTRICT_NAME: "閮煄鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371323",
                DISTRICT_NAME: "娌傛按鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371324",
                DISTRICT_NAME: "鍏伴櫟鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371325",
                DISTRICT_NAME: "璐瑰幙"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371326",
                DISTRICT_NAME: "骞抽倯鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371327",
                DISTRICT_NAME: "鑾掑崡鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371328",
                DISTRICT_NAME: "钂欓槾鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371329",
                DISTRICT_NAME: "涓存箔鍘�"
            }, {
                CITY_CODE: "371300",
                DISTRICT_CODE: "371330",
                DISTRICT_NAME: "甯傚尯"
            }],
            371400: [{
                CITY_CODE: "371400",
                DISTRICT_CODE: "371402",
                DISTRICT_NAME: "寰峰煄鍖�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371421",
                DISTRICT_NAME: "闄靛煄鍖�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371422",
                DISTRICT_NAME: "瀹佹触鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371423",
                DISTRICT_NAME: "搴嗕簯鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371424",
                DISTRICT_NAME: "涓撮倯鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371425",
                DISTRICT_NAME: "榻愭渤鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371426",
                DISTRICT_NAME: "骞冲師鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371427",
                DISTRICT_NAME: "澶忔触鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371428",
                DISTRICT_NAME: "姝﹀煄鍘�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371481",
                DISTRICT_NAME: "涔愰櫟甯�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371482",
                DISTRICT_NAME: "绂瑰煄甯�"
            }, {
                CITY_CODE: "371400",
                DISTRICT_CODE: "371483",
                DISTRICT_NAME: "缁忔祹寮€鍙戝尯"
            }],
            371500: [{
                CITY_CODE: "371500",
                DISTRICT_CODE: "371502",
                DISTRICT_NAME: "涓滄槍搴滃尯"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371521",
                DISTRICT_NAME: "闃宠胺鍘�"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371522",
                DISTRICT_NAME: "鑾樺幙"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371523",
                DISTRICT_NAME: "鑼屽钩鍘�"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371524",
                DISTRICT_NAME: "涓滈樋鍘�"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371525",
                DISTRICT_NAME: "鍐犲幙"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371526",
                DISTRICT_NAME: "楂樺攼鍘�"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371581",
                DISTRICT_NAME: "涓存竻甯�"
            }, {
                CITY_CODE: "371500",
                DISTRICT_CODE: "371527",
                DISTRICT_NAME: "甯傚煄鍖�"
            }],
            371600: [{
                CITY_CODE: "371600",
                DISTRICT_CODE: "371602",
                DISTRICT_NAME: "婊ㄥ煄鍖�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371621",
                DISTRICT_NAME: "鎯犳皯鍘�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371622",
                DISTRICT_NAME: "闃充俊鍘�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371623",
                DISTRICT_NAME: "鏃犳＃鍘�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371624",
                DISTRICT_NAME: "娌惧寲鍖�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371625",
                DISTRICT_NAME: "鍗氬叴鍘�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371626",
                DISTRICT_NAME: "閭瑰钩鍘�"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371627",
                DISTRICT_NAME: "婊ㄥ寳"
            }, {
                CITY_CODE: "371600",
                DISTRICT_CODE: "371628",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            371700: [{
                CITY_CODE: "371700",
                DISTRICT_CODE: "371702",
                DISTRICT_NAME: "鐗′腹鍖�"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371721",
                DISTRICT_NAME: "鏇瑰幙"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371722",
                DISTRICT_NAME: "鍗曞幙"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371723",
                DISTRICT_NAME: "鎴愭鍘�"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371724",
                DISTRICT_NAME: "宸ㄩ噹鍘�"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371725",
                DISTRICT_NAME: "閮撳煄鍘�"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371726",
                DISTRICT_NAME: "閯勫煄鍘�"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371727",
                DISTRICT_NAME: "瀹氶櫠鍖�"
            }, {
                CITY_CODE: "371700",
                DISTRICT_CODE: "371728",
                DISTRICT_NAME: "涓滄槑鍘�"
            }],
            410100: [{
                CITY_CODE: "410100",
                DISTRICT_CODE: "410102",
                DISTRICT_NAME: "涓師鍖�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410103",
                DISTRICT_NAME: "浜屼竷鍖�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410104",
                DISTRICT_NAME: "绠″煄鍥炴棌鍖�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410105",
                DISTRICT_NAME: "閲戞按鍖�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410106",
                DISTRICT_NAME: "涓婅鍖�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410108",
                DISTRICT_NAME: "鎯犳祹鍖�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410122",
                DISTRICT_NAME: "涓墴鍘�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410181",
                DISTRICT_NAME: "宸╀箟甯�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410182",
                DISTRICT_NAME: "鑽ラ槼甯�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410183",
                DISTRICT_NAME: "鏂板瘑甯�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410184",
                DISTRICT_NAME: "鏂伴儜甯�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410185",
                DISTRICT_NAME: "鐧诲皝甯�"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410186",
                DISTRICT_NAME: "楂樻柊鎶€鏈骇涓氬紑鍙戝尯"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410187",
                DISTRICT_NAME: "缁忔祹鎶€鏈紑鍙戝尯"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410188",
                DISTRICT_NAME: "閮戜笢鏂板尯"
            }, {
                CITY_CODE: "410100",
                DISTRICT_CODE: "410189",
                DISTRICT_NAME: "鑸┖娓尯"
            }],
            410200: [{
                CITY_CODE: "410200",
                DISTRICT_CODE: "410202",
                DISTRICT_NAME: "榫欎涵鍖�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410203",
                DISTRICT_NAME: "椤烘渤鍥炴棌鍖�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410204",
                DISTRICT_NAME: "榧撴ゼ鍖�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410205",
                DISTRICT_NAME: "绂圭帇鍙板尯"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410211",
                DISTRICT_NAME: "閲戞槑鍖�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410221",
                DISTRICT_NAME: "鏉炲幙"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410222",
                DISTRICT_NAME: "閫氳鍘�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410223",
                DISTRICT_NAME: "灏夋皬鍘�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410224",
                DISTRICT_NAME: "绁ョ鍖�"
            }, {
                CITY_CODE: "410200",
                DISTRICT_CODE: "410225",
                DISTRICT_NAME: "鍏拌€冨幙"
            }],
            410300: [{
                CITY_CODE: "410300",
                DISTRICT_CODE: "410302",
                DISTRICT_NAME: "鑰佸煄鍖�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410303",
                DISTRICT_NAME: "瑗垮伐鍖�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410304",
                DISTRICT_NAME: "鐎嶆渤鍥炴棌鍖�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410305",
                DISTRICT_NAME: "娑цタ鍖�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410306",
                DISTRICT_NAME: "鍚夊埄鍖�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410311",
                DISTRICT_NAME: "娲涢緳鍖�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410322",
                DISTRICT_NAME: "瀛熸触鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410323",
                DISTRICT_NAME: "鏂板畨鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410324",
                DISTRICT_NAME: "鏍惧窛鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410325",
                DISTRICT_NAME: "宓╁幙"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410326",
                DISTRICT_NAME: "姹濋槼鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410327",
                DISTRICT_NAME: "瀹滈槼鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410328",
                DISTRICT_NAME: "娲涘畞鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410329",
                DISTRICT_NAME: "浼婂窛鍘�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410381",
                DISTRICT_NAME: "鍋冨笀甯�"
            }, {
                CITY_CODE: "410300",
                DISTRICT_CODE: "410382",
                DISTRICT_NAME: "浼婃花鍖�"
            }],
            410400: [{
                CITY_CODE: "410400",
                DISTRICT_CODE: "410402",
                DISTRICT_NAME: "鏂板崕鍖�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410403",
                DISTRICT_NAME: "鍗笢鍖�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410404",
                DISTRICT_NAME: "鐭抽緳鍖�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410411",
                DISTRICT_NAME: "婀涙渤鍖�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410421",
                DISTRICT_NAME: "瀹濅赴鍘�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410422",
                DISTRICT_NAME: "鍙跺幙"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410423",
                DISTRICT_NAME: "椴佸北鍘�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410425",
                DISTRICT_NAME: "閮忓幙"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410481",
                DISTRICT_NAME: "鑸為挗甯�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410482",
                DISTRICT_NAME: "姹濆窞甯�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410483",
                DISTRICT_NAME: "甯傚尯鏂板煄鍖�"
            }, {
                CITY_CODE: "410400",
                DISTRICT_CODE: "410484",
                DISTRICT_NAME: "甯傚尯楂樻柊鍖�"
            }],
            410500: [{
                CITY_CODE: "410500",
                DISTRICT_CODE: "410502",
                DISTRICT_NAME: "鏂囧嘲鍖�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410503",
                DISTRICT_NAME: "鍖楀叧鍖�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410505",
                DISTRICT_NAME: "娈烽兘鍖�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410506",
                DISTRICT_NAME: "榫欏畨鍖�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410522",
                DISTRICT_NAME: "瀹夐槼鍘�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410523",
                DISTRICT_NAME: "姹ら槾鍘�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410526",
                DISTRICT_NAME: "婊戝幙"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410527",
                DISTRICT_NAME: "鍐呴粍鍘�"
            }, {
                CITY_CODE: "410500",
                DISTRICT_CODE: "410581",
                DISTRICT_NAME: "鏋楀窞甯�"
            }],
            410600: [{
                CITY_CODE: "410600",
                DISTRICT_CODE: "410602",
                DISTRICT_NAME: "楣ゅ北鍖�"
            }, {
                CITY_CODE: "410600",
                DISTRICT_CODE: "410603",
                DISTRICT_NAME: "灞卞煄鍖�"
            }, {
                CITY_CODE: "410600",
                DISTRICT_CODE: "410611",
                DISTRICT_NAME: "娣囨花鍖�"
            }, {
                CITY_CODE: "410600",
                DISTRICT_CODE: "410621",
                DISTRICT_NAME: "娴氬幙"
            }, {
                CITY_CODE: "410600",
                DISTRICT_CODE: "410622",
                DISTRICT_NAME: "娣囧幙"
            }],
            410700: [{
                CITY_CODE: "410700",
                DISTRICT_CODE: "410702",
                DISTRICT_NAME: "绾㈡棗鍖�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410703",
                DISTRICT_NAME: "鍗花鍖�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410704",
                DISTRICT_NAME: "鍑ゆ硥鍖�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410711",
                DISTRICT_NAME: "鐗ч噹鍖�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410721",
                DISTRICT_NAME: "鏂颁埂鍘�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410724",
                DISTRICT_NAME: "鑾峰槈鍘�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410725",
                DISTRICT_NAME: "鍘熼槼鍘�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410726",
                DISTRICT_NAME: "寤舵触鍘�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410727",
                DISTRICT_NAME: "灏佷笜鍘�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410728",
                DISTRICT_NAME: "闀垮灒鍘�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410781",
                DISTRICT_NAME: "鍗緣甯�"
            }, {
                CITY_CODE: "410700",
                DISTRICT_CODE: "410782",
                DISTRICT_NAME: "杈夊幙甯�"
            }],
            410800: [{
                CITY_CODE: "410800",
                DISTRICT_CODE: "410802",
                DISTRICT_NAME: "瑙ｆ斁鍖�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410803",
                DISTRICT_NAME: "涓珯鍖�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410804",
                DISTRICT_NAME: "椹潙鍖�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410811",
                DISTRICT_NAME: "灞遍槼鍖�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410821",
                DISTRICT_NAME: "淇鍘�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410822",
                DISTRICT_NAME: "鍗氱埍鍘�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410823",
                DISTRICT_NAME: "姝﹂櫉鍘�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410825",
                DISTRICT_NAME: "娓╁幙"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410882",
                DISTRICT_NAME: "娌侀槼甯�"
            }, {
                CITY_CODE: "410800",
                DISTRICT_CODE: "410883",
                DISTRICT_NAME: "瀛熷窞甯�"
            }],
            410900: [{
                CITY_CODE: "410900",
                DISTRICT_CODE: "410902",
                DISTRICT_NAME: "鍗庨緳鍖�"
            }, {
                CITY_CODE: "410900",
                DISTRICT_CODE: "410922",
                DISTRICT_NAME: "娓呬赴鍘�"
            }, {
                CITY_CODE: "410900",
                DISTRICT_CODE: "410923",
                DISTRICT_NAME: "鍗椾箰鍘�"
            }, {
                CITY_CODE: "410900",
                DISTRICT_CODE: "410926",
                DISTRICT_NAME: "鑼冨幙"
            }, {
                CITY_CODE: "410900",
                DISTRICT_CODE: "410927",
                DISTRICT_NAME: "鍙板墠鍘�"
            }, {
                CITY_CODE: "410900",
                DISTRICT_CODE: "410928",
                DISTRICT_NAME: "婵槼鍘�"
            }],
            411000: [{
                CITY_CODE: "411000",
                DISTRICT_CODE: "411002",
                DISTRICT_NAME: "榄忛兘鍖�"
            }, {
                CITY_CODE: "411000",
                DISTRICT_CODE: "411023",
                DISTRICT_NAME: "寤哄畨鍖�"
            }, {
                CITY_CODE: "411000",
                DISTRICT_CODE: "411024",
                DISTRICT_NAME: "閯㈤櫟鍘�"
            }, {
                CITY_CODE: "411000",
                DISTRICT_CODE: "411025",
                DISTRICT_NAME: "瑗勫煄鍘�"
            }, {
                CITY_CODE: "411000",
                DISTRICT_CODE: "411081",
                DISTRICT_NAME: "绂瑰窞甯�"
            }, {
                CITY_CODE: "411000",
                DISTRICT_CODE: "411082",
                DISTRICT_NAME: "闀胯憶甯�"
            }],
            411100: [{
                CITY_CODE: "411100",
                DISTRICT_CODE: "411102",
                DISTRICT_NAME: "婧愭眹鍖�"
            }, {
                CITY_CODE: "411100",
                DISTRICT_CODE: "411103",
                DISTRICT_NAME: "閮惧煄鍖�"
            }, {
                CITY_CODE: "411100",
                DISTRICT_CODE: "411104",
                DISTRICT_NAME: "鍙櫟鍖�"
            }, {
                CITY_CODE: "411100",
                DISTRICT_CODE: "411121",
                DISTRICT_NAME: "鑸為槼鍘�"
            }, {
                CITY_CODE: "411100",
                DISTRICT_CODE: "411122",
                DISTRICT_NAME: "涓撮鍘�"
            }],
            411200: [{
                CITY_CODE: "411200",
                DISTRICT_CODE: "411202",
                DISTRICT_NAME: "婀栨花鍖�"
            }, {
                CITY_CODE: "411200",
                DISTRICT_CODE: "411221",
                DISTRICT_NAME: "娓戞睜鍘�"
            }, {
                CITY_CODE: "411200",
                DISTRICT_CODE: "411222",
                DISTRICT_NAME: "闄曞幙"
            }, {
                CITY_CODE: "411200",
                DISTRICT_CODE: "411224",
                DISTRICT_NAME: "鍗㈡皬鍘�"
            }, {
                CITY_CODE: "411200",
                DISTRICT_CODE: "411281",
                DISTRICT_NAME: "涔夐┈甯�"
            }, {
                CITY_CODE: "411200",
                DISTRICT_CODE: "411282",
                DISTRICT_NAME: "鐏靛疂甯�"
            }],
            411300: [{
                CITY_CODE: "411300",
                DISTRICT_CODE: "411302",
                DISTRICT_NAME: "瀹涘煄鍖�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411303",
                DISTRICT_NAME: "鍗ч緳鍖�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411321",
                DISTRICT_NAME: "鍗楀彫鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411322",
                DISTRICT_NAME: "鏂瑰煄鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411323",
                DISTRICT_NAME: "瑗垮场鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411324",
                DISTRICT_NAME: "闀囧钩鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411325",
                DISTRICT_NAME: "鍐呬埂鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411326",
                DISTRICT_NAME: "娣呭窛鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411327",
                DISTRICT_NAME: "绀炬棗鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411328",
                DISTRICT_NAME: "鍞愭渤鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411329",
                DISTRICT_NAME: "鏂伴噹鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411330",
                DISTRICT_NAME: "妗愭煆鍘�"
            }, {
                CITY_CODE: "411300",
                DISTRICT_CODE: "411381",
                DISTRICT_NAME: "閭撳窞甯�"
            }],
            411400: [{
                CITY_CODE: "411400",
                DISTRICT_CODE: "411402",
                DISTRICT_NAME: "姊佸洯鍖�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411403",
                DISTRICT_NAME: "鐫㈤槼鍖�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411421",
                DISTRICT_NAME: "姘戞潈鍘�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411422",
                DISTRICT_NAME: "鐫㈠幙"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411423",
                DISTRICT_NAME: "瀹侀櫟鍘�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411424",
                DISTRICT_NAME: "鏌樺煄鍘�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411425",
                DISTRICT_NAME: "铏炲煄鍘�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411426",
                DISTRICT_NAME: "澶忛倯鍘�"
            }, {
                CITY_CODE: "411400",
                DISTRICT_CODE: "411481",
                DISTRICT_NAME: "姘稿煄甯�"
            }],
            411500: [{
                CITY_CODE: "411500",
                DISTRICT_CODE: "411502",
                DISTRICT_NAME: "娴夋渤鍖�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411503",
                DISTRICT_NAME: "骞虫ˉ鍖�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411521",
                DISTRICT_NAME: "缃楀北鍘�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411522",
                DISTRICT_NAME: "鍏夊北鍘�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411523",
                DISTRICT_NAME: "鏂板幙"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411524",
                DISTRICT_NAME: "鍟嗗煄鍘�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411525",
                DISTRICT_NAME: "鍥哄鍘�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411526",
                DISTRICT_NAME: "娼㈠窛鍘�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411527",
                DISTRICT_NAME: "娣花鍘�"
            }, {
                CITY_CODE: "411500",
                DISTRICT_CODE: "411528",
                DISTRICT_NAME: "鎭幙"
            }],
            411600: [{
                CITY_CODE: "411600",
                DISTRICT_CODE: "411602",
                DISTRICT_NAME: "宸濇眹鍖�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411621",
                DISTRICT_NAME: "鎵舵矡鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411622",
                DISTRICT_NAME: "瑗垮崕鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411623",
                DISTRICT_NAME: "鍟嗘按鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411624",
                DISTRICT_NAME: "娌堜笜鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411625",
                DISTRICT_NAME: "閮稿煄鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411626",
                DISTRICT_NAME: "娣槼鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411627",
                DISTRICT_NAME: "澶悍鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411628",
                DISTRICT_NAME: "楣块倯鍘�"
            }, {
                CITY_CODE: "411600",
                DISTRICT_CODE: "411681",
                DISTRICT_NAME: "椤瑰煄甯�"
            }],
            411700: [{
                CITY_CODE: "411700",
                DISTRICT_CODE: "411702",
                DISTRICT_NAME: "椹垮煄鍖�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411721",
                DISTRICT_NAME: "瑗垮钩鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411722",
                DISTRICT_NAME: "涓婅敗鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411723",
                DISTRICT_NAME: "骞宠垎鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411724",
                DISTRICT_NAME: "姝ｉ槼鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411725",
                DISTRICT_NAME: "纭北鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411726",
                DISTRICT_NAME: "娉岄槼鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411727",
                DISTRICT_NAME: "姹濆崡鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411728",
                DISTRICT_NAME: "閬傚钩鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411729",
                DISTRICT_NAME: "鏂拌敗鍘�"
            }, {
                CITY_CODE: "411700",
                DISTRICT_CODE: "411730",
                DISTRICT_NAME: "寮€鍙戝尯"
            }],
            419001: [{
                CITY_CODE: "419001",
                DISTRICT_CODE: "419001",
                DISTRICT_NAME: "娴庢簮甯�"
            }],
            420100: [{
                CITY_CODE: "420100",
                DISTRICT_CODE: "420102",
                DISTRICT_NAME: "姹熷哺鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420103",
                DISTRICT_NAME: "姹熸眽鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420104",
                DISTRICT_NAME: "纭氬彛鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420105",
                DISTRICT_NAME: "姹夐槼鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420106",
                DISTRICT_NAME: "姝︽槍鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420107",
                DISTRICT_NAME: "闈掑北鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420111",
                DISTRICT_NAME: "娲北鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420112",
                DISTRICT_NAME: "涓滆タ婀栧尯"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420113",
                DISTRICT_NAME: "姹夊崡鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420114",
                DISTRICT_NAME: "钄＄敻鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420115",
                DISTRICT_NAME: "姹熷鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420116",
                DISTRICT_NAME: "榛勯檪鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420117",
                DISTRICT_NAME: "鏂版床鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420118",
                DISTRICT_NAME: "姹夊彛鍖�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420119",
                DISTRICT_NAME: "涓滄箹楂樻柊"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420120",
                DISTRICT_NAME: "闃抽€�"
            }, {
                CITY_CODE: "420100",
                DISTRICT_CODE: "420121",
                DISTRICT_NAME: "寮€鍙戝尯"
            }],
            420200: [{
                CITY_CODE: "420200",
                DISTRICT_CODE: "420202",
                DISTRICT_NAME: "榛勭煶娓尯"
            }, {
                CITY_CODE: "420200",
                DISTRICT_CODE: "420203",
                DISTRICT_NAME: "瑗垮灞卞尯"
            }, {
                CITY_CODE: "420200",
                DISTRICT_CODE: "420204",
                DISTRICT_NAME: "涓嬮檰鍖�"
            }, {
                CITY_CODE: "420200",
                DISTRICT_CODE: "420205",
                DISTRICT_NAME: "閾佸北鍖�"
            }, {
                CITY_CODE: "420200",
                DISTRICT_CODE: "420222",
                DISTRICT_NAME: "闃虫柊鍘�"
            }, {
                CITY_CODE: "420200",
                DISTRICT_CODE: "420281",
                DISTRICT_NAME: "澶у喍甯�"
            }],
            420300: [{
                CITY_CODE: "420300",
                DISTRICT_CODE: "420302",
                DISTRICT_NAME: "鑼呯鍖�"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420303",
                DISTRICT_NAME: "寮犳咕鍖�"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420321",
                DISTRICT_NAME: "閮у幙"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420322",
                DISTRICT_NAME: "閮цタ鍘�"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420323",
                DISTRICT_NAME: "绔瑰北鍘�"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420324",
                DISTRICT_NAME: "绔规邯鍘�"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420325",
                DISTRICT_NAME: "鎴垮幙"
            }, {
                CITY_CODE: "420300",
                DISTRICT_CODE: "420381",
                DISTRICT_NAME: "涓规睙鍙ｅ競"
            }],
            420500: [{
                CITY_CODE: "420500",
                DISTRICT_CODE: "420502",
                DISTRICT_NAME: "瑗块櫟鍖�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420503",
                DISTRICT_NAME: "浼嶅宀楀尯"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420504",
                DISTRICT_NAME: "鐐瑰啗鍖�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420505",
                DISTRICT_NAME: "鐚囦涵鍖�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420506",
                DISTRICT_NAME: "澶烽櫟鍖�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420525",
                DISTRICT_NAME: "杩滃畨鍘�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420526",
                DISTRICT_NAME: "鍏村北鍘�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420527",
                DISTRICT_NAME: "绉綊鍘�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420528",
                DISTRICT_NAME: "闀块槼鍦熷鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420529",
                DISTRICT_NAME: "浜斿嘲鍦熷鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420581",
                DISTRICT_NAME: "瀹滈兘甯�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420582",
                DISTRICT_NAME: "褰撻槼甯�"
            }, {
                CITY_CODE: "420500",
                DISTRICT_CODE: "420583",
                DISTRICT_NAME: "鏋濇睙甯�"
            }],
            420600: [{
                CITY_CODE: "420600",
                DISTRICT_CODE: "420602",
                DISTRICT_NAME: "瑗勫煄鍖�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420606",
                DISTRICT_NAME: "妯婂煄鍖�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420607",
                DISTRICT_NAME: "瑗勫窞鍖�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420624",
                DISTRICT_NAME: "鍗楁汲鍘�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420625",
                DISTRICT_NAME: "璋峰煄鍘�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420626",
                DISTRICT_NAME: "淇濆悍鍘�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420682",
                DISTRICT_NAME: "鑰佹渤鍙ｅ競"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420683",
                DISTRICT_NAME: "鏋ｉ槼甯�"
            }, {
                CITY_CODE: "420600",
                DISTRICT_CODE: "420684",
                DISTRICT_NAME: "瀹滃煄甯�"
            }],
            420700: [{
                CITY_CODE: "420700",
                DISTRICT_CODE: "420702",
                DISTRICT_NAME: "姊佸瓙婀栧尯"
            }, {
                CITY_CODE: "420700",
                DISTRICT_CODE: "420703",
                DISTRICT_NAME: "鍗庡鍖�"
            }, {
                CITY_CODE: "420700",
                DISTRICT_CODE: "420704",
                DISTRICT_NAME: "閯傚煄鍖�"
            }],
            420800: [{
                CITY_CODE: "420800",
                DISTRICT_CODE: "420802",
                DISTRICT_NAME: "涓滃疂鍖�"
            }, {
                CITY_CODE: "420800",
                DISTRICT_CODE: "420804",
                DISTRICT_NAME: "鎺囧垁鍖�"
            }, {
                CITY_CODE: "420800",
                DISTRICT_CODE: "420821",
                DISTRICT_NAME: "浜北鍘�"
            }, {
                CITY_CODE: "420800",
                DISTRICT_CODE: "420822",
                DISTRICT_NAME: "娌欐磱鍘�"
            }, {
                CITY_CODE: "420800",
                DISTRICT_CODE: "420881",
                DISTRICT_NAME: "閽熺ゥ甯�"
            }],
            420900: [{
                CITY_CODE: "420900",
                DISTRICT_CODE: "420902",
                DISTRICT_NAME: "瀛濆崡鍖�"
            }, {
                CITY_CODE: "420900",
                DISTRICT_CODE: "420921",
                DISTRICT_NAME: "瀛濇槍鍘�"
            }, {
                CITY_CODE: "420900",
                DISTRICT_CODE: "420922",
                DISTRICT_NAME: "澶ф偀鍘�"
            }, {
                CITY_CODE: "420900",
                DISTRICT_CODE: "420923",
                DISTRICT_NAME: "浜戞ⅵ鍘�"
            }, {
                CITY_CODE: "420900",
                DISTRICT_CODE: "420981",
                DISTRICT_NAME: "搴斿煄甯�"
            }, {
                CITY_CODE: "420900",
                DISTRICT_CODE: "420982",
                DISTRICT_NAME: "瀹夐檰甯�"
            }, {
                CITY_CODE: "420900",
                DISTRICT_CODE: "420984",
                DISTRICT_NAME: "姹夊窛甯�"
            }],
            421000: [{
                CITY_CODE: "421000",
                DISTRICT_CODE: "421002",
                DISTRICT_NAME: "娌欏競鍖�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421003",
                DISTRICT_NAME: "鑽嗗窞鍖�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421022",
                DISTRICT_NAME: "鍏畨鍘�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421023",
                DISTRICT_NAME: "鐩戝埄鍘�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421024",
                DISTRICT_NAME: "姹熼櫟鍘�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421081",
                DISTRICT_NAME: "鐭抽甯�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421083",
                DISTRICT_NAME: "娲箹甯�"
            }, {
                CITY_CODE: "421000",
                DISTRICT_CODE: "421087",
                DISTRICT_NAME: "鏉炬粙甯�"
            }],
            421100: [{
                CITY_CODE: "421100",
                DISTRICT_CODE: "421102",
                DISTRICT_NAME: "榛勫窞鍖�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421121",
                DISTRICT_NAME: "鍥㈤鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421122",
                DISTRICT_NAME: "绾㈠畨鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421123",
                DISTRICT_NAME: "缃楃敯鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421124",
                DISTRICT_NAME: "鑻卞北鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421125",
                DISTRICT_NAME: "娴犳按鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421126",
                DISTRICT_NAME: "钑叉槬鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421127",
                DISTRICT_NAME: "榛勬鍘�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421181",
                DISTRICT_NAME: "楹诲煄甯�"
            }, {
                CITY_CODE: "421100",
                DISTRICT_CODE: "421182",
                DISTRICT_NAME: "姝︾┐甯�"
            }],
            421200: [{
                CITY_CODE: "421200",
                DISTRICT_CODE: "421202",
                DISTRICT_NAME: "鍜稿畨鍖�"
            }, {
                CITY_CODE: "421200",
                DISTRICT_CODE: "421221",
                DISTRICT_NAME: "鍢夐奔鍘�"
            }, {
                CITY_CODE: "421200",
                DISTRICT_CODE: "421222",
                DISTRICT_NAME: "閫氬煄鍘�"
            }, {
                CITY_CODE: "421200",
                DISTRICT_CODE: "421223",
                DISTRICT_NAME: "宕囬槼鍘�"
            }, {
                CITY_CODE: "421200",
                DISTRICT_CODE: "421224",
                DISTRICT_NAME: "閫氬北鍘�"
            }, {
                CITY_CODE: "421200",
                DISTRICT_CODE: "421281",
                DISTRICT_NAME: "璧ゅ甯�"
            }],
            421300: [{
                CITY_CODE: "421300",
                DISTRICT_CODE: "421303",
                DISTRICT_NAME: "鏇鹃兘鍖�"
            }, {
                CITY_CODE: "421300",
                DISTRICT_CODE: "421321",
                DISTRICT_NAME: "闅忓幙"
            }, {
                CITY_CODE: "421300",
                DISTRICT_CODE: "421381",
                DISTRICT_NAME: "骞挎按甯�"
            }],
            422800: [{
                CITY_CODE: "422800",
                DISTRICT_CODE: "422801",
                DISTRICT_NAME: "鎭╂柦甯�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422802",
                DISTRICT_NAME: "鍒╁窛甯�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422822",
                DISTRICT_NAME: "寤哄鍘�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422823",
                DISTRICT_NAME: "宸翠笢鍘�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422825",
                DISTRICT_NAME: "瀹ｆ仼鍘�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422826",
                DISTRICT_NAME: "鍜镐赴鍘�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422827",
                DISTRICT_NAME: "鏉ュ嚖鍘�"
            }, {
                CITY_CODE: "422800",
                DISTRICT_CODE: "422828",
                DISTRICT_NAME: "楣ゅ嘲鍘�"
            }],
            429004: [{
                CITY_CODE: "429004",
                DISTRICT_CODE: "429004",
                DISTRICT_NAME: "浠欐甯�"
            }],
            429005: [{
                CITY_CODE: "429005",
                DISTRICT_CODE: "429005",
                DISTRICT_NAME: "娼滄睙甯�"
            }],
            429006: [{
                CITY_CODE: "429006",
                DISTRICT_CODE: "429006",
                DISTRICT_NAME: "澶╅棬甯�"
            }],
            429021: [{
                CITY_CODE: "429021",
                DISTRICT_CODE: "429021",
                DISTRICT_NAME: "绁炲啘鏋舵灄鍖�"
            }],
            430100: [{
                CITY_CODE: "430100",
                DISTRICT_CODE: "430102",
                DISTRICT_NAME: "鑺欒搲鍖�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430103",
                DISTRICT_NAME: "澶╁績鍖�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430104",
                DISTRICT_NAME: "宀抽簱鍖�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430105",
                DISTRICT_NAME: "寮€绂忓尯"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430111",
                DISTRICT_NAME: "闆ㄨ姳鍖�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430112",
                DISTRICT_NAME: "鏈涘煄鍖�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430121",
                DISTRICT_NAME: "闀挎矙鍘�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430124",
                DISTRICT_NAME: "瀹佷埂鍘�"
            }, {
                CITY_CODE: "430100",
                DISTRICT_CODE: "430181",
                DISTRICT_NAME: "娴忛槼甯�"
            }],
            430200: [{
                CITY_CODE: "430200",
                DISTRICT_CODE: "430202",
                DISTRICT_NAME: "鑽峰鍖�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430203",
                DISTRICT_NAME: "鑺︽窞鍖�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430204",
                DISTRICT_NAME: "鐭冲嘲鍖�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430211",
                DISTRICT_NAME: "澶╁厓鍖�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430221",
                DISTRICT_NAME: "鏍床鍘�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430223",
                DISTRICT_NAME: "鏀稿幙"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430224",
                DISTRICT_NAME: "鑼堕櫟鍘�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430225",
                DISTRICT_NAME: "鐐庨櫟鍘�"
            }, {
                CITY_CODE: "430200",
                DISTRICT_CODE: "430281",
                DISTRICT_NAME: "閱撮櫟甯�"
            }],
            430300: [{
                CITY_CODE: "430300",
                DISTRICT_CODE: "430302",
                DISTRICT_NAME: "闆ㄦ箹鍖�"
            }, {
                CITY_CODE: "430300",
                DISTRICT_CODE: "430304",
                DISTRICT_NAME: "宀冲鍖�"
            }, {
                CITY_CODE: "430300",
                DISTRICT_CODE: "430321",
                DISTRICT_NAME: "婀樻江鍘�"
            }, {
                CITY_CODE: "430300",
                DISTRICT_CODE: "430381",
                DISTRICT_NAME: "婀樹埂甯�"
            }, {
                CITY_CODE: "430300",
                DISTRICT_CODE: "430382",
                DISTRICT_NAME: "闊跺北甯�"
            }, {
                CITY_CODE: "430300",
                DISTRICT_CODE: "430409",
                DISTRICT_NAME: "涔濆崕鍖�"
            }],
            430400: [{
                CITY_CODE: "430400",
                DISTRICT_CODE: "430405",
                DISTRICT_NAME: "鐝犳櫀鍖�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430406",
                DISTRICT_NAME: "闆佸嘲鍖�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430407",
                DISTRICT_NAME: "鐭抽紦鍖�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430408",
                DISTRICT_NAME: "钂告箻鍖�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430412",
                DISTRICT_NAME: "鍗楀渤鍖�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430421",
                DISTRICT_NAME: "琛￠槼鍘�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430422",
                DISTRICT_NAME: "琛″崡鍘�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430423",
                DISTRICT_NAME: "琛″北鍘�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430424",
                DISTRICT_NAME: "琛′笢鍘�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430426",
                DISTRICT_NAME: "绁佷笢鍘�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430481",
                DISTRICT_NAME: "鑰掗槼甯�"
            }, {
                CITY_CODE: "430400",
                DISTRICT_CODE: "430482",
                DISTRICT_NAME: "甯稿畞甯�"
            }],
            430500: [{
                CITY_CODE: "430500",
                DISTRICT_CODE: "430502",
                DISTRICT_NAME: "鍙屾竻鍖�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430503",
                DISTRICT_NAME: "澶хゥ鍖�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430511",
                DISTRICT_NAME: "鍖楀鍖�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430521",
                DISTRICT_NAME: "閭典笢鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430522",
                DISTRICT_NAME: "鏂伴偟鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430523",
                DISTRICT_NAME: "閭甸槼鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430524",
                DISTRICT_NAME: "闅嗗洖鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430525",
                DISTRICT_NAME: "娲炲彛鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430527",
                DISTRICT_NAME: "缁ュ畞鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430528",
                DISTRICT_NAME: "鏂板畞鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430529",
                DISTRICT_NAME: "鍩庢鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "430500",
                DISTRICT_CODE: "430581",
                DISTRICT_NAME: "姝﹀唸甯�"
            }],
            430600: [{
                CITY_CODE: "430600",
                DISTRICT_CODE: "430602",
                DISTRICT_NAME: "宀抽槼妤煎尯"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430603",
                DISTRICT_NAME: "浜戞邯鍖�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430611",
                DISTRICT_NAME: "鍚涘北鍖�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430621",
                DISTRICT_NAME: "宀抽槼鍘�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430623",
                DISTRICT_NAME: "鍗庡鍘�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430624",
                DISTRICT_NAME: "婀橀槾鍘�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430626",
                DISTRICT_NAME: "骞虫睙鍘�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430681",
                DISTRICT_NAME: "姹ㄧ綏甯�"
            }, {
                CITY_CODE: "430600",
                DISTRICT_CODE: "430682",
                DISTRICT_NAME: "涓存箻甯�"
            }],
            430700: [{
                CITY_CODE: "430700",
                DISTRICT_CODE: "430702",
                DISTRICT_NAME: "姝﹂櫟鍖�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430703",
                DISTRICT_NAME: "榧庡煄鍖�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430721",
                DISTRICT_NAME: "瀹変埂鍘�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430722",
                DISTRICT_NAME: "姹夊鍘�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430723",
                DISTRICT_NAME: "婢у幙"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430724",
                DISTRICT_NAME: "涓存晶鍘�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430725",
                DISTRICT_NAME: "妗冩簮鍘�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430726",
                DISTRICT_NAME: "鐭抽棬鍘�"
            }, {
                CITY_CODE: "430700",
                DISTRICT_CODE: "430781",
                DISTRICT_NAME: "娲ュ競甯�"
            }],
            430800: [{
                CITY_CODE: "430800",
                DISTRICT_CODE: "430802",
                DISTRICT_NAME: "姘稿畾鍖�"
            }, {
                CITY_CODE: "430800",
                DISTRICT_CODE: "430811",
                DISTRICT_NAME: "姝﹂櫟婧愬尯"
            }, {
                CITY_CODE: "430800",
                DISTRICT_CODE: "430821",
                DISTRICT_NAME: "鎱堝埄鍘�"
            }, {
                CITY_CODE: "430800",
                DISTRICT_CODE: "430822",
                DISTRICT_NAME: "妗戞鍘�"
            }],
            430900: [{
                CITY_CODE: "430900",
                DISTRICT_CODE: "430902",
                DISTRICT_NAME: "璧勯槼鍖�"
            }, {
                CITY_CODE: "430900",
                DISTRICT_CODE: "430903",
                DISTRICT_NAME: "璧北鍖�"
            }, {
                CITY_CODE: "430900",
                DISTRICT_CODE: "430921",
                DISTRICT_NAME: "鍗楀幙"
            }, {
                CITY_CODE: "430900",
                DISTRICT_CODE: "430922",
                DISTRICT_NAME: "妗冩睙鍘�"
            }, {
                CITY_CODE: "430900",
                DISTRICT_CODE: "430923",
                DISTRICT_NAME: "瀹夊寲鍘�"
            }, {
                CITY_CODE: "430900",
                DISTRICT_CODE: "430981",
                DISTRICT_NAME: "娌呮睙甯�"
            }, {
                CITY_CODE: "430900",
                DISTRICT_CODE: "430924",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            431000: [{
                CITY_CODE: "431000",
                DISTRICT_CODE: "431002",
                DISTRICT_NAME: "鍖楁箹鍖�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431003",
                DISTRICT_NAME: "鑻忎粰鍖�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431021",
                DISTRICT_NAME: "妗傞槼鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431022",
                DISTRICT_NAME: "瀹滅珷鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431023",
                DISTRICT_NAME: "姘稿叴鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431024",
                DISTRICT_NAME: "鍢夌鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431025",
                DISTRICT_NAME: "涓存鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431026",
                DISTRICT_NAME: "姹濆煄鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431027",
                DISTRICT_NAME: "妗備笢鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431028",
                DISTRICT_NAME: "瀹変粊鍘�"
            }, {
                CITY_CODE: "431000",
                DISTRICT_CODE: "431081",
                DISTRICT_NAME: "璧勫叴甯�"
            }],
            431100: [{
                CITY_CODE: "431100",
                DISTRICT_CODE: "431102",
                DISTRICT_NAME: "闆堕櫟鍖�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431103",
                DISTRICT_NAME: "鍐锋按婊╁尯"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431121",
                DISTRICT_NAME: "绁侀槼鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431122",
                DISTRICT_NAME: "涓滃畨鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431123",
                DISTRICT_NAME: "鍙岀墝鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431124",
                DISTRICT_NAME: "閬撳幙"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431125",
                DISTRICT_NAME: "姹熸案鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431126",
                DISTRICT_NAME: "瀹佽繙鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431127",
                DISTRICT_NAME: "钃濆北鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431128",
                DISTRICT_NAME: "鏂扮敯鍘�"
            }, {
                CITY_CODE: "431100",
                DISTRICT_CODE: "431129",
                DISTRICT_NAME: "姹熷崕鐟舵棌鑷不鍘�"
            }],
            431200: [{
                CITY_CODE: "431200",
                DISTRICT_CODE: "431202",
                DISTRICT_NAME: "楣ゅ煄鍖�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431221",
                DISTRICT_NAME: "涓柟鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431222",
                DISTRICT_NAME: "娌呴櫟鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431223",
                DISTRICT_NAME: "杈版邯鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431224",
                DISTRICT_NAME: "婧嗘郸鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431225",
                DISTRICT_NAME: "浼氬悓鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431226",
                DISTRICT_NAME: "楹婚槼鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431227",
                DISTRICT_NAME: "鏂版檭渚楁棌鑷不鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431228",
                DISTRICT_NAME: "鑺锋睙渚楁棌鑷不鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431229",
                DISTRICT_NAME: "闈栧窞鑻楁棌渚楁棌鑷不鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431230",
                DISTRICT_NAME: "閫氶亾渚楁棌鑷不鍘�"
            }, {
                CITY_CODE: "431200",
                DISTRICT_CODE: "431281",
                DISTRICT_NAME: "娲睙甯�"
            }],
            431300: [{
                CITY_CODE: "431300",
                DISTRICT_CODE: "431302",
                DISTRICT_NAME: "濞勬槦鍖�"
            }, {
                CITY_CODE: "431300",
                DISTRICT_CODE: "431321",
                DISTRICT_NAME: "鍙屽嘲鍘�"
            }, {
                CITY_CODE: "431300",
                DISTRICT_CODE: "431322",
                DISTRICT_NAME: "鏂板寲鍘�"
            }, {
                CITY_CODE: "431300",
                DISTRICT_CODE: "431381",
                DISTRICT_NAME: "鍐锋按姹熷競"
            }, {
                CITY_CODE: "431300",
                DISTRICT_CODE: "431382",
                DISTRICT_NAME: "娑熸簮甯�"
            }],
            433100: [{
                CITY_CODE: "433100",
                DISTRICT_CODE: "433101",
                DISTRICT_NAME: "鍚夐甯�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433122",
                DISTRICT_NAME: "娉告邯鍘�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433123",
                DISTRICT_NAME: "鍑ゅ嚢鍘�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433124",
                DISTRICT_NAME: "鑺卞灒鍘�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433125",
                DISTRICT_NAME: "淇濋潠鍘�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433126",
                DISTRICT_NAME: "鍙や笀鍘�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433127",
                DISTRICT_NAME: "姘搁『鍘�"
            }, {
                CITY_CODE: "433100",
                DISTRICT_CODE: "433130",
                DISTRICT_NAME: "榫欏北鍘�"
            }],
            440100: [{
                CITY_CODE: "440100",
                DISTRICT_CODE: "440103",
                DISTRICT_NAME: "鑽旀咕鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440104",
                DISTRICT_NAME: "瓒婄鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440105",
                DISTRICT_NAME: "娴风彔鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440106",
                DISTRICT_NAME: "澶╂渤鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440111",
                DISTRICT_NAME: "鐧戒簯鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440112",
                DISTRICT_NAME: "榛勫煍鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440113",
                DISTRICT_NAME: "鐣鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440114",
                DISTRICT_NAME: "鑺遍兘鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440115",
                DISTRICT_NAME: "鍗楁矙鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440116",
                DISTRICT_NAME: "钀濆矖鍖�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440183",
                DISTRICT_NAME: "澧炲煄甯�"
            }, {
                CITY_CODE: "440100",
                DISTRICT_CODE: "440184",
                DISTRICT_NAME: "浠庡寲甯�"
            }],
            440200: [{
                CITY_CODE: "440200",
                DISTRICT_CODE: "440203",
                DISTRICT_NAME: "姝︽睙鍖�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440204",
                DISTRICT_NAME: "娴堟睙鍖�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440205",
                DISTRICT_NAME: "鏇叉睙鍖�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440222",
                DISTRICT_NAME: "濮嬪叴鍘�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440224",
                DISTRICT_NAME: "浠佸寲鍘�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440229",
                DISTRICT_NAME: "缈佹簮鍘�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440232",
                DISTRICT_NAME: "涔虫簮鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440233",
                DISTRICT_NAME: "鏂颁赴鍘�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440281",
                DISTRICT_NAME: "涔愭槍甯�"
            }, {
                CITY_CODE: "440200",
                DISTRICT_CODE: "440282",
                DISTRICT_NAME: "鍗楅泟甯�"
            }],
            440300: [{
                CITY_CODE: "440300",
                DISTRICT_CODE: "440303",
                DISTRICT_NAME: "缃楁箹鍖�"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440304",
                DISTRICT_NAME: "绂忕敯鍖�"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440305",
                DISTRICT_NAME: "鍗楀北鍖�"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440306",
                DISTRICT_NAME: "瀹濆畨鍖�"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440307",
                DISTRICT_NAME: "榫欏矖鍖�"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440308",
                DISTRICT_NAME: "鐩愮敯鍖�"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440309",
                DISTRICT_NAME: "榫欏崕鏂板尯"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440310",
                DISTRICT_NAME: "鍏夋槑鏂板尯"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440311",
                DISTRICT_NAME: "鍧北鏂板尯"
            }, {
                CITY_CODE: "440300",
                DISTRICT_CODE: "440312",
                DISTRICT_NAME: "澶ч箯鏂板尯"
            }],
            440400: [{
                CITY_CODE: "440400",
                DISTRICT_CODE: "440402",
                DISTRICT_NAME: "棣欐床鍖�"
            }, {
                CITY_CODE: "440400",
                DISTRICT_CODE: "440403",
                DISTRICT_NAME: "鏂楅棬鍖�"
            }, {
                CITY_CODE: "440400",
                DISTRICT_CODE: "440404",
                DISTRICT_NAME: "閲戞咕鍖�"
            }],
            440500: [{
                CITY_CODE: "440500",
                DISTRICT_CODE: "440507",
                DISTRICT_NAME: "榫欐箹鍖�"
            }, {
                CITY_CODE: "440500",
                DISTRICT_CODE: "440511",
                DISTRICT_NAME: "閲戝钩鍖�"
            }, {
                CITY_CODE: "440500",
                DISTRICT_CODE: "440512",
                DISTRICT_NAME: "婵犳睙鍖�"
            }, {
                CITY_CODE: "440500",
                DISTRICT_CODE: "440513",
                DISTRICT_NAME: "娼槼鍖�"
            }, {
                CITY_CODE: "440500",
                DISTRICT_CODE: "440514",
                DISTRICT_NAME: "娼崡鍖�"
            }, {
                CITY_CODE: "440500",
                DISTRICT_CODE: "440515",
                DISTRICT_NAME: "婢勬捣鍖�"
            }, {
                CITY_CODE: "440500",
                DISTRICT_CODE: "440523",
                DISTRICT_NAME: "鍗楁境鍘�"
            }],
            440600: [{
                CITY_CODE: "440600",
                DISTRICT_CODE: "440604",
                DISTRICT_NAME: "绂呭煄鍖�"
            }, {
                CITY_CODE: "440600",
                DISTRICT_CODE: "440605",
                DISTRICT_NAME: "鍗楁捣鍖�"
            }, {
                CITY_CODE: "440600",
                DISTRICT_CODE: "440606",
                DISTRICT_NAME: "椤哄痉鍖�"
            }, {
                CITY_CODE: "440600",
                DISTRICT_CODE: "440607",
                DISTRICT_NAME: "涓夋按鍖�"
            }, {
                CITY_CODE: "440600",
                DISTRICT_CODE: "440608",
                DISTRICT_NAME: "楂樻槑鍖�"
            }],
            440700: [{
                CITY_CODE: "440700",
                DISTRICT_CODE: "440703",
                DISTRICT_NAME: "钃睙鍖�"
            }, {
                CITY_CODE: "440700",
                DISTRICT_CODE: "440704",
                DISTRICT_NAME: "姹熸捣鍖�"
            }, {
                CITY_CODE: "440700",
                DISTRICT_CODE: "440705",
                DISTRICT_NAME: "鏂颁細鍖�"
            }, {
                CITY_CODE: "440700",
                DISTRICT_CODE: "440781",
                DISTRICT_NAME: "鍙板北甯�"
            }, {
                CITY_CODE: "440700",
                DISTRICT_CODE: "440783",
                DISTRICT_NAME: "寮€骞冲競"
            }, {
                CITY_CODE: "440700",
                DISTRICT_CODE: "440784",
                DISTRICT_NAME: "楣ゅ北甯�"
            }, {
                CITY_CODE: "440700",
                DISTRICT_CODE: "440785",
                DISTRICT_NAME: "鎭╁钩甯�"
            }],
            440800: [{
                CITY_CODE: "440800",
                DISTRICT_CODE: "440802",
                DISTRICT_NAME: "璧ゅ潕鍖�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440803",
                DISTRICT_NAME: "闇炲北鍖�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440804",
                DISTRICT_NAME: "鍧″ご鍖�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440811",
                DISTRICT_NAME: "楹荤珷鍖�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440823",
                DISTRICT_NAME: "閬傛邯鍘�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440825",
                DISTRICT_NAME: "寰愰椈鍘�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440881",
                DISTRICT_NAME: "寤夋睙甯�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440882",
                DISTRICT_NAME: "闆峰窞甯�"
            }, {
                CITY_CODE: "440800",
                DISTRICT_CODE: "440883",
                DISTRICT_NAME: "鍚村窛甯�"
            }],
            440900: [{
                CITY_CODE: "440900",
                DISTRICT_CODE: "440902",
                DISTRICT_NAME: "鑼傚崡鍖�"
            }, {
                CITY_CODE: "440900",
                DISTRICT_CODE: "440903",
                DISTRICT_NAME: "鑼傛腐鍖�"
            }, {
                CITY_CODE: "440900",
                DISTRICT_CODE: "440923",
                DISTRICT_NAME: "鐢电櫧鍘�"
            }, {
                CITY_CODE: "440900",
                DISTRICT_CODE: "440981",
                DISTRICT_NAME: "楂樺窞甯�"
            }, {
                CITY_CODE: "440900",
                DISTRICT_CODE: "440982",
                DISTRICT_NAME: "鍖栧窞甯�"
            }, {
                CITY_CODE: "440900",
                DISTRICT_CODE: "440983",
                DISTRICT_NAME: "淇″疁甯�"
            }],
            441200: [{
                CITY_CODE: "441200",
                DISTRICT_CODE: "441202",
                DISTRICT_NAME: "绔窞鍖�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441203",
                DISTRICT_NAME: "榧庢箹鍖�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441223",
                DISTRICT_NAME: "骞垮畞鍘�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441224",
                DISTRICT_NAME: "鎬€闆嗗幙"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441225",
                DISTRICT_NAME: "灏佸紑鍘�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441226",
                DISTRICT_NAME: "寰峰簡鍘�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441283",
                DISTRICT_NAME: "楂樿鍖�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441284",
                DISTRICT_NAME: "鍥涗細甯�"
            }, {
                CITY_CODE: "441200",
                DISTRICT_CODE: "441285",
                DISTRICT_NAME: "楂樻柊鍖�"
            }],
            441300: [{
                CITY_CODE: "441300",
                DISTRICT_CODE: "441302",
                DISTRICT_NAME: "鎯犲煄鍖�"
            }, {
                CITY_CODE: "441300",
                DISTRICT_CODE: "441303",
                DISTRICT_NAME: "鎯犻槼鍖�"
            }, {
                CITY_CODE: "441300",
                DISTRICT_CODE: "441322",
                DISTRICT_NAME: "鍗氱綏鍘�"
            }, {
                CITY_CODE: "441300",
                DISTRICT_CODE: "441323",
                DISTRICT_NAME: "鎯犱笢鍘�"
            }, {
                CITY_CODE: "441300",
                DISTRICT_CODE: "441324",
                DISTRICT_NAME: "榫欓棬鍘�"
            }, {
                CITY_CODE: "441300",
                DISTRICT_CODE: "441325",
                DISTRICT_NAME: "浠叉伜鍖�"
            }, {
                CITY_CODE: "441300",
                DISTRICT_CODE: "441326",
                DISTRICT_NAME: "澶т簹婀惧尯"
            }],
            441400: [{
                CITY_CODE: "441400",
                DISTRICT_CODE: "441402",
                DISTRICT_NAME: "姊呮睙鍖�"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441421",
                DISTRICT_NAME: "姊呭幙"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441422",
                DISTRICT_NAME: "澶у煍鍘�"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441423",
                DISTRICT_NAME: "涓伴『鍘�"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441424",
                DISTRICT_NAME: "浜斿崕鍘�"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441426",
                DISTRICT_NAME: "骞宠繙鍘�"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441427",
                DISTRICT_NAME: "钑夊箔鍘�"
            }, {
                CITY_CODE: "441400",
                DISTRICT_CODE: "441481",
                DISTRICT_NAME: "鍏村畞甯�"
            }],
            441500: [{
                CITY_CODE: "441500",
                DISTRICT_CODE: "441502",
                DISTRICT_NAME: "鍩庡尯"
            }, {
                CITY_CODE: "441500",
                DISTRICT_CODE: "441521",
                DISTRICT_NAME: "娴蜂赴鍘�"
            }, {
                CITY_CODE: "441500",
                DISTRICT_CODE: "441523",
                DISTRICT_NAME: "闄嗘渤鍘�"
            }, {
                CITY_CODE: "441500",
                DISTRICT_CODE: "441581",
                DISTRICT_NAME: "闄嗕赴甯�"
            }],
            441600: [{
                CITY_CODE: "441600",
                DISTRICT_CODE: "441602",
                DISTRICT_NAME: "婧愬煄鍖�"
            }, {
                CITY_CODE: "441600",
                DISTRICT_CODE: "441621",
                DISTRICT_NAME: "绱噾鍘�"
            }, {
                CITY_CODE: "441600",
                DISTRICT_CODE: "441622",
                DISTRICT_NAME: "榫欏窛鍘�"
            }, {
                CITY_CODE: "441600",
                DISTRICT_CODE: "441623",
                DISTRICT_NAME: "杩炲钩鍘�"
            }, {
                CITY_CODE: "441600",
                DISTRICT_CODE: "441624",
                DISTRICT_NAME: "鍜屽钩鍘�"
            }, {
                CITY_CODE: "441600",
                DISTRICT_CODE: "441625",
                DISTRICT_NAME: "涓滄簮鍘�"
            }],
            441700: [{
                CITY_CODE: "441700",
                DISTRICT_CODE: "441702",
                DISTRICT_NAME: "姹熷煄鍖�"
            }, {
                CITY_CODE: "441700",
                DISTRICT_CODE: "441721",
                DISTRICT_NAME: "闃宠タ鍘�"
            }, {
                CITY_CODE: "441700",
                DISTRICT_CODE: "441723",
                DISTRICT_NAME: "闃充笢鍘�"
            }, {
                CITY_CODE: "441700",
                DISTRICT_CODE: "441781",
                DISTRICT_NAME: "闃虫槬甯�"
            }],
            441800: [{
                CITY_CODE: "441800",
                DISTRICT_CODE: "441802",
                DISTRICT_NAME: "娓呭煄鍖�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441821",
                DISTRICT_NAME: "浣涘唸鍘�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441823",
                DISTRICT_NAME: "闃冲北鍘�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441825",
                DISTRICT_NAME: "杩炲北澹棌鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441826",
                DISTRICT_NAME: "杩炲崡鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441827",
                DISTRICT_NAME: "娓呮柊鍘�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441884",
                DISTRICT_NAME: "鑻卞痉甯備笢鐗囧尯"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441885",
                DISTRICT_NAME: "鑻卞痉甯傝タ鐗囧尯"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441882",
                DISTRICT_NAME: "杩炲窞甯�"
            }, {
                CITY_CODE: "441800",
                DISTRICT_CODE: "441883",
                DISTRICT_NAME: "寮€鍙戝尯"
            }],
            441900: [{
                CITY_CODE: "441900",
                DISTRICT_CODE: "441933",
                DISTRICT_NAME: "鑾炲煄"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441934",
                DISTRICT_NAME: "鍗楀煄"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441935",
                DISTRICT_NAME: "涓滃煄"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441936",
                DISTRICT_NAME: "涓囨睙"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441937",
                DISTRICT_NAME: "闀垮畨"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441938",
                DISTRICT_NAME: "铏庨棬"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441939",
                DISTRICT_NAME: "濉樺帵"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441940",
                DISTRICT_NAME: "鍑ゅ矖"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441941",
                DISTRICT_NAME: "楂樺煑"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441942",
                DISTRICT_NAME: "鐭崇ⅲ"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441943",
                DISTRICT_NAME: "鍘氳"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441944",
                DISTRICT_NAME: "鐭抽緳"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441945",
                DISTRICT_NAME: "澶у箔灞�"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441946",
                DISTRICT_NAME: "鑼跺北"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441947",
                DISTRICT_NAME: "鐭虫帓"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441948",
                DISTRICT_NAME: "浼佺煶"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441949",
                DISTRICT_NAME: "妯播"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441950",
                DISTRICT_NAME: "妗ュご"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441951",
                DISTRICT_NAME: "璋㈠矖"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441952",
                DISTRICT_NAME: "涓滃潙"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441953",
                DISTRICT_NAME: "妯熸湪澶�"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441954",
                DISTRICT_NAME: "甯稿钩"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441955",
                DISTRICT_NAME: "瀵"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441956",
                DISTRICT_NAME: "澶ф湕"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441957",
                DISTRICT_NAME: "榛勬睙"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441958",
                DISTRICT_NAME: "娓呮邯"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441959",
                DISTRICT_NAME: "娌欑敯"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441960",
                DISTRICT_NAME: "閬撴粯"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441961",
                DISTRICT_NAME: "娲"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441962",
                DISTRICT_NAME: "楹绘秾"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441963",
                DISTRICT_NAME: "涓爞"
            }, {
                CITY_CODE: "441900",
                DISTRICT_CODE: "441964",
                DISTRICT_NAME: "鏈涚墰澧�"
            }],
            442000: [{
                CITY_CODE: "442000",
                DISTRICT_CODE: "442043",
                DISTRICT_NAME: "鐭冲矏鍖鸿閬�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442020",
                DISTRICT_NAME: "涓滃尯琛楅亾"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442021",
                DISTRICT_NAME: "瑗垮尯琛楅亾"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442022",
                DISTRICT_NAME: "鍗楀尯琛楅亾"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442023",
                DISTRICT_NAME: "浜旀灞辫閬�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442024",
                DISTRICT_NAME: "鐏偓寮€鍙戝尯"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442025",
                DISTRICT_NAME: "灏忔闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442026",
                DISTRICT_NAME: "榛勫渻闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442027",
                DISTRICT_NAME: "姘戜紬闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442028",
                DISTRICT_NAME: "涓滃嚖闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442029",
                DISTRICT_NAME: "涓滃崌闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442030",
                DISTRICT_NAME: "鍙ら晣闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442031",
                DISTRICT_NAME: "娌欐邯闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442032",
                DISTRICT_NAME: "鍧︽床闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442033",
                DISTRICT_NAME: "娓彛闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442034",
                DISTRICT_NAME: "涓夎闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442035",
                DISTRICT_NAME: "妯爮闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442036",
                DISTRICT_NAME: "鍗楀ご闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442037",
                DISTRICT_NAME: "闃滄矙闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442038",
                DISTRICT_NAME: "鍗楁湕闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442039",
                DISTRICT_NAME: "涓変埂闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442040",
                DISTRICT_NAME: "鏉胯姍闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442041",
                DISTRICT_NAME: "澶ф秾闀�"
            }, {
                CITY_CODE: "442000",
                DISTRICT_CODE: "442042",
                DISTRICT_NAME: "绁炴咕闀�"
            }],
            445100: [{
                CITY_CODE: "445100",
                DISTRICT_CODE: "445102",
                DISTRICT_NAME: "婀樻ˉ鍖�"
            }, {
                CITY_CODE: "445100",
                DISTRICT_CODE: "445121",
                DISTRICT_NAME: "娼畨鍘�"
            }, {
                CITY_CODE: "445100",
                DISTRICT_CODE: "445122",
                DISTRICT_NAME: "楗跺钩鍘�"
            }],
            445200: [{
                CITY_CODE: "445200",
                DISTRICT_CODE: "445202",
                DISTRICT_NAME: "姒曞煄鍖�"
            }, {
                CITY_CODE: "445200",
                DISTRICT_CODE: "445221",
                DISTRICT_NAME: "鎻笢鍘�"
            }, {
                CITY_CODE: "445200",
                DISTRICT_CODE: "445222",
                DISTRICT_NAME: "鎻タ鍘�"
            }, {
                CITY_CODE: "445200",
                DISTRICT_CODE: "445224",
                DISTRICT_NAME: "鎯犳潵鍘�"
            }, {
                CITY_CODE: "445200",
                DISTRICT_CODE: "445281",
                DISTRICT_NAME: "鏅畞甯�"
            }],
            445300: [{
                CITY_CODE: "445300",
                DISTRICT_CODE: "445302",
                DISTRICT_NAME: "浜戝煄鍖�"
            }, {
                CITY_CODE: "445300",
                DISTRICT_CODE: "445321",
                DISTRICT_NAME: "鏂板叴鍘�"
            }, {
                CITY_CODE: "445300",
                DISTRICT_CODE: "445322",
                DISTRICT_NAME: "閮佸崡鍘�"
            }, {
                CITY_CODE: "445300",
                DISTRICT_CODE: "445323",
                DISTRICT_NAME: "浜戝畨鍘�"
            }, {
                CITY_CODE: "445300",
                DISTRICT_CODE: "445381",
                DISTRICT_NAME: "缃楀畾甯�"
            }],
            450100: [{
                CITY_CODE: "450100",
                DISTRICT_CODE: "450102",
                DISTRICT_NAME: "鍏村畞鍖�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450103",
                DISTRICT_NAME: "闈掔鍖�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450105",
                DISTRICT_NAME: "姹熷崡鍖�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450107",
                DISTRICT_NAME: "瑗夸埂濉樺尯"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450108",
                DISTRICT_NAME: "鑹簡鍖�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450109",
                DISTRICT_NAME: "閭曞畞鍖�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450122",
                DISTRICT_NAME: "姝﹂福鍘�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450123",
                DISTRICT_NAME: "闅嗗畨鍘�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450124",
                DISTRICT_NAME: "椹北鍘�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450125",
                DISTRICT_NAME: "涓婃灄鍘�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450126",
                DISTRICT_NAME: "瀹鹃槼鍘�"
            }, {
                CITY_CODE: "450100",
                DISTRICT_CODE: "450127",
                DISTRICT_NAME: "妯幙"
            }],
            450200: [{
                CITY_CODE: "450200",
                DISTRICT_CODE: "450202",
                DISTRICT_NAME: "鍩庝腑鍖�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450203",
                DISTRICT_NAME: "楸煎嘲鍖�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450204",
                DISTRICT_NAME: "鏌冲崡鍖�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450205",
                DISTRICT_NAME: "鏌冲寳鍖�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450221",
                DISTRICT_NAME: "鏌虫睙鍘�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450222",
                DISTRICT_NAME: "鏌冲煄鍘�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450223",
                DISTRICT_NAME: "楣垮鍘�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450224",
                DISTRICT_NAME: "铻嶅畨鍘�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450225",
                DISTRICT_NAME: "铻嶆按鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "450200",
                DISTRICT_CODE: "450226",
                DISTRICT_NAME: "涓夋睙渚楁棌鑷不鍘�"
            }],
            450300: [{
                CITY_CODE: "450300",
                DISTRICT_CODE: "450302",
                DISTRICT_NAME: "绉€宄板尯"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450303",
                DISTRICT_NAME: "鍙犲僵鍖�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450304",
                DISTRICT_NAME: "璞″北鍖�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450305",
                DISTRICT_NAME: "涓冩槦鍖�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450311",
                DISTRICT_NAME: "闆佸北鍖�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450321",
                DISTRICT_NAME: "闃虫湐鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450322",
                DISTRICT_NAME: "涓存鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450323",
                DISTRICT_NAME: "鐏靛窛鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450324",
                DISTRICT_NAME: "鍏ㄥ窞鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450325",
                DISTRICT_NAME: "鍏村畨鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450326",
                DISTRICT_NAME: "姘哥鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450327",
                DISTRICT_NAME: "鐏岄槼鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450328",
                DISTRICT_NAME: "榫欒儨鍚勬棌鑷不鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450329",
                DISTRICT_NAME: "璧勬簮鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450330",
                DISTRICT_NAME: "骞充箰鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450331",
                DISTRICT_NAME: "鑽旇挷鍘�"
            }, {
                CITY_CODE: "450300",
                DISTRICT_CODE: "450332",
                DISTRICT_NAME: "鎭煄鐟舵棌鑷不鍘�"
            }],
            450400: [{
                CITY_CODE: "450400",
                DISTRICT_CODE: "450403",
                DISTRICT_NAME: "涓囩鍖�"
            }, {
                CITY_CODE: "450400",
                DISTRICT_CODE: "450404",
                DISTRICT_NAME: "铦跺北鍖�"
            }, {
                CITY_CODE: "450400",
                DISTRICT_CODE: "450405",
                DISTRICT_NAME: "闀挎床鍖�"
            }, {
                CITY_CODE: "450400",
                DISTRICT_CODE: "450421",
                DISTRICT_NAME: "鑻嶆ⅶ鍘�"
            }, {
                CITY_CODE: "450400",
                DISTRICT_CODE: "450422",
                DISTRICT_NAME: "钘ゅ幙"
            }, {
                CITY_CODE: "450400",
                DISTRICT_CODE: "450423",
                DISTRICT_NAME: "钂欏北鍘�"
            }, {
                CITY_CODE: "450400",
                DISTRICT_CODE: "450481",
                DISTRICT_NAME: "宀戞邯甯�"
            }],
            450500: [{
                CITY_CODE: "450500",
                DISTRICT_CODE: "450502",
                DISTRICT_NAME: "娴峰煄鍖�"
            }, {
                CITY_CODE: "450500",
                DISTRICT_CODE: "450503",
                DISTRICT_NAME: "閾舵捣鍖�"
            }, {
                CITY_CODE: "450500",
                DISTRICT_CODE: "450512",
                DISTRICT_NAME: "閾佸北娓尯"
            }, {
                CITY_CODE: "450500",
                DISTRICT_CODE: "450521",
                DISTRICT_NAME: "鍚堟郸鍘�"
            }],
            450600: [{
                CITY_CODE: "450600",
                DISTRICT_CODE: "450602",
                DISTRICT_NAME: "娓彛鍖�"
            }, {
                CITY_CODE: "450600",
                DISTRICT_CODE: "450603",
                DISTRICT_NAME: "闃插煄鍖�"
            }, {
                CITY_CODE: "450600",
                DISTRICT_CODE: "450621",
                DISTRICT_NAME: "涓婃€濆幙"
            }, {
                CITY_CODE: "450600",
                DISTRICT_CODE: "450681",
                DISTRICT_NAME: "涓滃叴甯�"
            }],
            450700: [{
                CITY_CODE: "450700",
                DISTRICT_CODE: "450702",
                DISTRICT_NAME: "閽﹀崡鍖�"
            }, {
                CITY_CODE: "450700",
                DISTRICT_CODE: "450703",
                DISTRICT_NAME: "閽﹀寳鍖�"
            }, {
                CITY_CODE: "450700",
                DISTRICT_CODE: "450721",
                DISTRICT_NAME: "鐏靛北鍘�"
            }, {
                CITY_CODE: "450700",
                DISTRICT_CODE: "450722",
                DISTRICT_NAME: "娴﹀寳鍘�"
            }],
            450800: [{
                CITY_CODE: "450800",
                DISTRICT_CODE: "450802",
                DISTRICT_NAME: "娓寳鍖�"
            }, {
                CITY_CODE: "450800",
                DISTRICT_CODE: "450803",
                DISTRICT_NAME: "娓崡鍖�"
            }, {
                CITY_CODE: "450800",
                DISTRICT_CODE: "450804",
                DISTRICT_NAME: "瑕冨鍖�"
            }, {
                CITY_CODE: "450800",
                DISTRICT_CODE: "450821",
                DISTRICT_NAME: "骞冲崡鍘�"
            }, {
                CITY_CODE: "450800",
                DISTRICT_CODE: "450881",
                DISTRICT_NAME: "妗傚钩甯�"
            }],
            450900: [{
                CITY_CODE: "450900",
                DISTRICT_CODE: "450902",
                DISTRICT_NAME: "鐜夊窞鍖�"
            }, {
                CITY_CODE: "450900",
                DISTRICT_CODE: "450921",
                DISTRICT_NAME: "瀹瑰幙"
            }, {
                CITY_CODE: "450900",
                DISTRICT_CODE: "450922",
                DISTRICT_NAME: "闄嗗窛鍘�"
            }, {
                CITY_CODE: "450900",
                DISTRICT_CODE: "450923",
                DISTRICT_NAME: "鍗氱櫧鍘�"
            }, {
                CITY_CODE: "450900",
                DISTRICT_CODE: "450924",
                DISTRICT_NAME: "鍏翠笟鍘�"
            }, {
                CITY_CODE: "450900",
                DISTRICT_CODE: "450981",
                DISTRICT_NAME: "鍖楁祦甯�"
            }],
            451000: [{
                CITY_CODE: "451000",
                DISTRICT_CODE: "451002",
                DISTRICT_NAME: "鍙虫睙鍖�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451021",
                DISTRICT_NAME: "鐢伴槼鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451022",
                DISTRICT_NAME: "鐢颁笢鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451023",
                DISTRICT_NAME: "骞虫灉鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451024",
                DISTRICT_NAME: "寰蜂繚鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451025",
                DISTRICT_NAME: "闈栬タ鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451026",
                DISTRICT_NAME: "閭ｅ潯鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451027",
                DISTRICT_NAME: "鍑屼簯鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451028",
                DISTRICT_NAME: "涔愪笟鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451029",
                DISTRICT_NAME: "鐢版灄鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451030",
                DISTRICT_NAME: "瑗挎灄鍘�"
            }, {
                CITY_CODE: "451000",
                DISTRICT_CODE: "451031",
                DISTRICT_NAME: "闅嗘灄鍚勬棌鑷不鍘�"
            }],
            451100: [{
                CITY_CODE: "451100",
                DISTRICT_CODE: "451102",
                DISTRICT_NAME: "鍏鍖�"
            }, {
                CITY_CODE: "451100",
                DISTRICT_CODE: "451121",
                DISTRICT_NAME: "鏄钩鍘�"
            }, {
                CITY_CODE: "451100",
                DISTRICT_CODE: "451122",
                DISTRICT_NAME: "閽熷北鍘�"
            }, {
                CITY_CODE: "451100",
                DISTRICT_CODE: "451123",
                DISTRICT_NAME: "瀵屽窛鐟舵棌鑷不鍘�"
            }],
            451200: [{
                CITY_CODE: "451200",
                DISTRICT_CODE: "451202",
                DISTRICT_NAME: "閲戝煄姹熷尯"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451221",
                DISTRICT_NAME: "鍗椾腹鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451222",
                DISTRICT_NAME: "澶╁敞鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451223",
                DISTRICT_NAME: "鍑ゅ北鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451224",
                DISTRICT_NAME: "涓滃叞鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451225",
                DISTRICT_NAME: "缃楀煄浠浆鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451226",
                DISTRICT_NAME: "鐜睙姣涘崡鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451227",
                DISTRICT_NAME: "宸撮┈鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451228",
                DISTRICT_NAME: "閮藉畨鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451229",
                DISTRICT_NAME: "澶у寲鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "451200",
                DISTRICT_CODE: "451281",
                DISTRICT_NAME: "瀹滃窞甯�"
            }],
            451300: [{
                CITY_CODE: "451300",
                DISTRICT_CODE: "451302",
                DISTRICT_NAME: "鍏村鍖�"
            }, {
                CITY_CODE: "451300",
                DISTRICT_CODE: "451321",
                DISTRICT_NAME: "蹇诲煄鍘�"
            }, {
                CITY_CODE: "451300",
                DISTRICT_CODE: "451322",
                DISTRICT_NAME: "璞″窞鍘�"
            }, {
                CITY_CODE: "451300",
                DISTRICT_CODE: "451323",
                DISTRICT_NAME: "姝﹀鍘�"
            }, {
                CITY_CODE: "451300",
                DISTRICT_CODE: "451324",
                DISTRICT_NAME: "閲戠鐟舵棌鑷不鍘�"
            }, {
                CITY_CODE: "451300",
                DISTRICT_CODE: "451381",
                DISTRICT_NAME: "鍚堝北甯�"
            }],
            451400: [{
                CITY_CODE: "451400",
                DISTRICT_CODE: "451402",
                DISTRICT_NAME: "姹熸床鍖�"
            }, {
                CITY_CODE: "451400",
                DISTRICT_CODE: "451421",
                DISTRICT_NAME: "鎵剁互鍘�"
            }, {
                CITY_CODE: "451400",
                DISTRICT_CODE: "451422",
                DISTRICT_NAME: "瀹佹槑鍘�"
            }, {
                CITY_CODE: "451400",
                DISTRICT_CODE: "451423",
                DISTRICT_NAME: "榫欏窞鍘�"
            }, {
                CITY_CODE: "451400",
                DISTRICT_CODE: "451424",
                DISTRICT_NAME: "澶ф柊鍘�"
            }, {
                CITY_CODE: "451400",
                DISTRICT_CODE: "451425",
                DISTRICT_NAME: "澶╃瓑鍘�"
            }, {
                CITY_CODE: "451400",
                DISTRICT_CODE: "451481",
                DISTRICT_NAME: "鍑ゥ甯�"
            }],
            460100: [{
                CITY_CODE: "460100",
                DISTRICT_CODE: "460105",
                DISTRICT_NAME: "绉€鑻卞尯"
            }, {
                CITY_CODE: "460100",
                DISTRICT_CODE: "460106",
                DISTRICT_NAME: "榫欏崕鍖�"
            }, {
                CITY_CODE: "460100",
                DISTRICT_CODE: "460107",
                DISTRICT_NAME: "鐞煎北鍖�"
            }, {
                CITY_CODE: "460100",
                DISTRICT_CODE: "460108",
                DISTRICT_NAME: "缇庡叞鍖�"
            }],
            460200: [{
                CITY_CODE: "460200",
                DISTRICT_CODE: "460201",
                DISTRICT_NAME: "鍚夐槼鍖�"
            }, {
                CITY_CODE: "460200",
                DISTRICT_CODE: "460202",
                DISTRICT_NAME: "澶╂动鍖�"
            }, {
                CITY_CODE: "460200",
                DISTRICT_CODE: "460203",
                DISTRICT_NAME: "宕栧窞鍖�"
            }, {
                CITY_CODE: "460200",
                DISTRICT_CODE: "460204",
                DISTRICT_NAME: "娴锋　鍖�"
            }],
            460300: [{
                CITY_CODE: "460300",
                DISTRICT_CODE: "460301",
                DISTRICT_NAME: "鐞兼捣甯�"
            }],
            460400: [{
                CITY_CODE: "460400",
                DISTRICT_CODE: "460401",
                DISTRICT_NAME: "鍎嬪窞甯�"
            }],
            460800: [{
                CITY_CODE: "460800",
                DISTRICT_CODE: "460801",
                DISTRICT_NAME: "鏂囨槍甯�"
            }],
            460700: [{
                CITY_CODE: "460700",
                DISTRICT_CODE: "460701",
                DISTRICT_NAME: "浜旀寚灞卞競"
            }],
            460600: [{
                CITY_CODE: "460600",
                DISTRICT_CODE: "460601",
                DISTRICT_NAME: "涓囧畞甯�"
            }],
            460500: [{
                CITY_CODE: "460500",
                DISTRICT_CODE: "460501",
                DISTRICT_NAME: "涓滄柟甯�"
            }],
            461100: [{
                CITY_CODE: "461100",
                DISTRICT_CODE: "461101",
                DISTRICT_NAME: "瀹氬畨鍘�"
            }],
            461600: [{
                CITY_CODE: "461600",
                DISTRICT_CODE: "461601",
                DISTRICT_NAME: "灞槍鍘�"
            }],
            461700: [{
                CITY_CODE: "461700",
                DISTRICT_CODE: "461701",
                DISTRICT_NAME: "婢勮繄鍘�"
            }],
            461000: [{
                CITY_CODE: "461000",
                DISTRICT_CODE: "461001",
                DISTRICT_NAME: "涓撮珮鍘�"
            }],
            461500: [{
                CITY_CODE: "461500",
                DISTRICT_CODE: "461501",
                DISTRICT_NAME: "鐧芥矙鍘�"
            }],
            460900: [{
                CITY_CODE: "460900",
                DISTRICT_CODE: "460901",
                DISTRICT_NAME: "鏄屾睙鍘�"
            }],
            461400: [{
                CITY_CODE: "461400",
                DISTRICT_CODE: "461401",
                DISTRICT_NAME: "涔愪笢鍘�"
            }],
            461300: [{
                CITY_CODE: "461300",
                DISTRICT_CODE: "461301",
                DISTRICT_NAME: "闄垫按鍘�"
            }],
            461800: [{
                CITY_CODE: "461800",
                DISTRICT_CODE: "461801",
                DISTRICT_NAME: "淇濅涵鍘�"
            }],
            461200: [{
                CITY_CODE: "461200",
                DISTRICT_CODE: "461201",
                DISTRICT_NAME: "鐞间腑鍘�"
            }],
            500100: [{
                CITY_CODE: "500100",
                DISTRICT_CODE: "500244",
                DISTRICT_NAME: "涓ゆ睙鏂板尯"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500101",
                DISTRICT_NAME: "涓囧窞鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500102",
                DISTRICT_NAME: "娑櫟鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500103",
                DISTRICT_NAME: "娓濅腑鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500104",
                DISTRICT_NAME: "澶ф浮鍙ｅ尯"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500105",
                DISTRICT_NAME: "姹熷寳鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500106",
                DISTRICT_NAME: "娌欏潽鍧濆尯"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500107",
                DISTRICT_NAME: "涔濋緳鍧″尯"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500108",
                DISTRICT_NAME: "鍗楀哺鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500109",
                DISTRICT_NAME: "鍖楃鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500110",
                DISTRICT_NAME: "缍︽睙鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500111",
                DISTRICT_NAME: "澶ц冻鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500112",
                DISTRICT_NAME: "娓濆寳鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500113",
                DISTRICT_NAME: "宸村崡鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500114",
                DISTRICT_NAME: "榛旀睙鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500115",
                DISTRICT_NAME: "闀垮鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500116",
                DISTRICT_NAME: "姹熸触鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500117",
                DISTRICT_NAME: "鍚堝窛鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500118",
                DISTRICT_NAME: "姘稿窛鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500119",
                DISTRICT_NAME: "鍗楀窛鍖�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500223",
                DISTRICT_NAME: "娼煎崡鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500224",
                DISTRICT_NAME: "閾滄鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500226",
                DISTRICT_NAME: "鑽ｆ槍鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500227",
                DISTRICT_NAME: "鐠у北鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500228",
                DISTRICT_NAME: "姊佸钩鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500229",
                DISTRICT_NAME: "鍩庡彛鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500230",
                DISTRICT_NAME: "涓伴兘鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500231",
                DISTRICT_NAME: "鍨睙鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500232",
                DISTRICT_NAME: "姝﹂殕鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500233",
                DISTRICT_NAME: "蹇犲幙"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500234",
                DISTRICT_NAME: "寮€鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500235",
                DISTRICT_NAME: "浜戦槼鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500236",
                DISTRICT_NAME: "濂夎妭鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500237",
                DISTRICT_NAME: "宸北鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500238",
                DISTRICT_NAME: "宸邯鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500240",
                DISTRICT_NAME: "鐭虫煴鍦熷鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500241",
                DISTRICT_NAME: "绉€灞卞湡瀹舵棌鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500242",
                DISTRICT_NAME: "閰夐槼鍦熷鏃忚嫍鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "500100",
                DISTRICT_CODE: "500243",
                DISTRICT_NAME: "褰按鑻楁棌鍦熷鏃忚嚜娌诲幙"
            }],
            510100: [{
                CITY_CODE: "510100",
                DISTRICT_CODE: "510104",
                DISTRICT_NAME: "閿︽睙鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510105",
                DISTRICT_NAME: "闈掔緤鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510106",
                DISTRICT_NAME: "閲戠墰鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510107",
                DISTRICT_NAME: "姝︿警鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510108",
                DISTRICT_NAME: "鎴愬崕鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510112",
                DISTRICT_NAME: "榫欐硥椹垮尯"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510113",
                DISTRICT_NAME: "闈掔櫧姹熷尯"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510114",
                DISTRICT_NAME: "鏂伴兘鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510115",
                DISTRICT_NAME: "娓╂睙鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510116",
                DISTRICT_NAME: "楂樻柊鍖�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510121",
                DISTRICT_NAME: "閲戝爞鍘�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510122",
                DISTRICT_NAME: "鍙屾祦鍘�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510124",
                DISTRICT_NAME: "閮幙"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510129",
                DISTRICT_NAME: "澶ч倯鍘�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510131",
                DISTRICT_NAME: "钂叉睙鍘�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510132",
                DISTRICT_NAME: "鏂版触鍘�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510181",
                DISTRICT_NAME: "閮芥睙鍫板競"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510182",
                DISTRICT_NAME: "褰窞甯�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510183",
                DISTRICT_NAME: "閭涘磧甯�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510184",
                DISTRICT_NAME: "宕囧窞甯�"
            }, {
                CITY_CODE: "510100",
                DISTRICT_CODE: "510185",
                DISTRICT_NAME: "绠€闃冲競"
            }],
            510300: [{
                CITY_CODE: "510300",
                DISTRICT_CODE: "510302",
                DISTRICT_NAME: "鑷祦浜曞尯"
            }, {
                CITY_CODE: "510300",
                DISTRICT_CODE: "510303",
                DISTRICT_NAME: "璐′簳鍖�"
            }, {
                CITY_CODE: "510300",
                DISTRICT_CODE: "510304",
                DISTRICT_NAME: "澶у畨鍖�"
            }, {
                CITY_CODE: "510300",
                DISTRICT_CODE: "510311",
                DISTRICT_NAME: "娌挎哗鍖�"
            }, {
                CITY_CODE: "510300",
                DISTRICT_CODE: "510321",
                DISTRICT_NAME: "鑽ｅ幙"
            }, {
                CITY_CODE: "510300",
                DISTRICT_CODE: "510322",
                DISTRICT_NAME: "瀵岄『鍘�"
            }],
            510400: [{
                CITY_CODE: "510400",
                DISTRICT_CODE: "510402",
                DISTRICT_NAME: "涓滃尯"
            }, {
                CITY_CODE: "510400",
                DISTRICT_CODE: "510403",
                DISTRICT_NAME: "瑗垮尯"
            }, {
                CITY_CODE: "510400",
                DISTRICT_CODE: "510411",
                DISTRICT_NAME: "浠佸拰鍖�"
            }, {
                CITY_CODE: "510400",
                DISTRICT_CODE: "510421",
                DISTRICT_NAME: "绫虫槗鍘�"
            }, {
                CITY_CODE: "510400",
                DISTRICT_CODE: "510422",
                DISTRICT_NAME: "鐩愯竟鍘�"
            }],
            510500: [{
                CITY_CODE: "510500",
                DISTRICT_CODE: "510502",
                DISTRICT_NAME: "姹熼槼鍖�"
            }, {
                CITY_CODE: "510500",
                DISTRICT_CODE: "510503",
                DISTRICT_NAME: "绾虫邯鍖�"
            }, {
                CITY_CODE: "510500",
                DISTRICT_CODE: "510504",
                DISTRICT_NAME: "榫欓┈娼尯"
            }, {
                CITY_CODE: "510500",
                DISTRICT_CODE: "510521",
                DISTRICT_NAME: "娉稿幙"
            }, {
                CITY_CODE: "510500",
                DISTRICT_CODE: "510522",
                DISTRICT_NAME: "鍚堟睙鍘�"
            }, {
                CITY_CODE: "510500",
                DISTRICT_CODE: "510524",
                DISTRICT_NAME: "鍙欐案鍘�"
            }, {
                CITY_CODE: "510500",
                DISTRICT_CODE: "510525",
                DISTRICT_NAME: "鍙よ敽鍘�"
            }],
            510600: [{
                CITY_CODE: "510600",
                DISTRICT_CODE: "510603",
                DISTRICT_NAME: "鏃岄槼鍖�"
            }, {
                CITY_CODE: "510600",
                DISTRICT_CODE: "510623",
                DISTRICT_NAME: "涓睙鍘�"
            }, {
                CITY_CODE: "510600",
                DISTRICT_CODE: "510626",
                DISTRICT_NAME: "缃楁睙鍘�"
            }, {
                CITY_CODE: "510600",
                DISTRICT_CODE: "510681",
                DISTRICT_NAME: "骞挎眽甯�"
            }, {
                CITY_CODE: "510600",
                DISTRICT_CODE: "510682",
                DISTRICT_NAME: "浠€閭″競"
            }, {
                CITY_CODE: "510600",
                DISTRICT_CODE: "510683",
                DISTRICT_NAME: "缁电甯�"
            }],
            510700: [{
                CITY_CODE: "510700",
                DISTRICT_CODE: "510703",
                DISTRICT_NAME: "娑煄鍖�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510704",
                DISTRICT_NAME: "娓镐粰鍖�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510705",
                DISTRICT_NAME: "楂樻柊鍖�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510722",
                DISTRICT_NAME: "涓夊彴鍘�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510723",
                DISTRICT_NAME: "鐩愪涵鍘�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510724",
                DISTRICT_NAME: "瀹夊幙"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510725",
                DISTRICT_NAME: "姊撴郊鍘�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510726",
                DISTRICT_NAME: "鍖楀窛缇屾棌鑷不鍘�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510727",
                DISTRICT_NAME: "骞虫鍘�"
            }, {
                CITY_CODE: "510700",
                DISTRICT_CODE: "510781",
                DISTRICT_NAME: "姹熸补甯�"
            }],
            510800: [{
                CITY_CODE: "510800",
                DISTRICT_CODE: "510802",
                DISTRICT_NAME: "鍒╁窞鍖�"
            }, {
                CITY_CODE: "510800",
                DISTRICT_CODE: "510811",
                DISTRICT_NAME: "鍏冨潩鍖�"
            }, {
                CITY_CODE: "510800",
                DISTRICT_CODE: "510812",
                DISTRICT_NAME: "鏈濆ぉ鍖�"
            }, {
                CITY_CODE: "510800",
                DISTRICT_CODE: "510821",
                DISTRICT_NAME: "鏃鸿媿鍘�"
            }, {
                CITY_CODE: "510800",
                DISTRICT_CODE: "510822",
                DISTRICT_NAME: "闈掑窛鍘�"
            }, {
                CITY_CODE: "510800",
                DISTRICT_CODE: "510823",
                DISTRICT_NAME: "鍓戦榿鍘�"
            }, {
                CITY_CODE: "510800",
                DISTRICT_CODE: "510824",
                DISTRICT_NAME: "鑻嶆邯鍘�"
            }],
            510900: [{
                CITY_CODE: "510900",
                DISTRICT_CODE: "510903",
                DISTRICT_NAME: "鑸瑰北鍖�"
            }, {
                CITY_CODE: "510900",
                DISTRICT_CODE: "510904",
                DISTRICT_NAME: "瀹夊眳鍖�"
            }, {
                CITY_CODE: "510900",
                DISTRICT_CODE: "510921",
                DISTRICT_NAME: "钃邯鍘�"
            }, {
                CITY_CODE: "510900",
                DISTRICT_CODE: "510922",
                DISTRICT_NAME: "灏勬椽鍘�"
            }, {
                CITY_CODE: "510900",
                DISTRICT_CODE: "510923",
                DISTRICT_NAME: "澶ц嫳鍘�"
            }],
            511000: [{
                CITY_CODE: "511000",
                DISTRICT_CODE: "511002",
                DISTRICT_NAME: "甯備腑鍖�"
            }, {
                CITY_CODE: "511000",
                DISTRICT_CODE: "511011",
                DISTRICT_NAME: "涓滃叴鍖�"
            }, {
                CITY_CODE: "511000",
                DISTRICT_CODE: "511024",
                DISTRICT_NAME: "濞佽繙鍘�"
            }, {
                CITY_CODE: "511000",
                DISTRICT_CODE: "511025",
                DISTRICT_NAME: "璧勪腑鍘�"
            }, {
                CITY_CODE: "511000",
                DISTRICT_CODE: "511028",
                DISTRICT_NAME: "闅嗘槍鍘�"
            }],
            511100: [{
                CITY_CODE: "511100",
                DISTRICT_CODE: "511102",
                DISTRICT_NAME: "甯備腑鍖�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511111",
                DISTRICT_NAME: "娌欐咕鍖�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511112",
                DISTRICT_NAME: "浜旈€氭ˉ鍖�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511113",
                DISTRICT_NAME: "閲戝彛娌冲尯"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511123",
                DISTRICT_NAME: "鐘嶄负鍘�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511124",
                DISTRICT_NAME: "浜曠爺鍘�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511126",
                DISTRICT_NAME: "澶规睙鍘�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511129",
                DISTRICT_NAME: "娌愬窛鍘�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511132",
                DISTRICT_NAME: "宄ㄨ竟褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511133",
                DISTRICT_NAME: "椹竟褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "511100",
                DISTRICT_CODE: "511181",
                DISTRICT_NAME: "宄ㄧ湁灞卞競"
            }],
            511300: [{
                CITY_CODE: "511300",
                DISTRICT_CODE: "511302",
                DISTRICT_NAME: "椤哄簡鍖�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511303",
                DISTRICT_NAME: "楂樺潽鍖�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511304",
                DISTRICT_NAME: "鍢夐櫟鍖�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511321",
                DISTRICT_NAME: "鍗楅儴鍘�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511322",
                DISTRICT_NAME: "钀ュ北鍘�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511323",
                DISTRICT_NAME: "钃畨鍘�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511324",
                DISTRICT_NAME: "浠檱鍘�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511325",
                DISTRICT_NAME: "瑗垮厖鍘�"
            }, {
                CITY_CODE: "511300",
                DISTRICT_CODE: "511381",
                DISTRICT_NAME: "闃嗕腑甯�"
            }],
            511400: [{
                CITY_CODE: "511400",
                DISTRICT_CODE: "511402",
                DISTRICT_NAME: "涓滃潯鍖�"
            }, {
                CITY_CODE: "511400",
                DISTRICT_CODE: "511421",
                DISTRICT_NAME: "浠佸鍘�"
            }, {
                CITY_CODE: "511400",
                DISTRICT_CODE: "511422",
                DISTRICT_NAME: "褰北鍘�"
            }, {
                CITY_CODE: "511400",
                DISTRICT_CODE: "511423",
                DISTRICT_NAME: "娲泤鍘�"
            }, {
                CITY_CODE: "511400",
                DISTRICT_CODE: "511424",
                DISTRICT_NAME: "涓规１鍘�"
            }, {
                CITY_CODE: "511400",
                DISTRICT_CODE: "511425",
                DISTRICT_NAME: "闈掔鍘�"
            }],
            511500: [{
                CITY_CODE: "511500",
                DISTRICT_CODE: "511502",
                DISTRICT_NAME: "缈犲睆鍖�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511503",
                DISTRICT_NAME: "鍗楁邯鍖�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511521",
                DISTRICT_NAME: "瀹滃鍘�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511523",
                DISTRICT_NAME: "姹熷畨鍘�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511524",
                DISTRICT_NAME: "闀垮畞鍘�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511525",
                DISTRICT_NAME: "楂樺幙"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511526",
                DISTRICT_NAME: "鐝欏幙"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511527",
                DISTRICT_NAME: "绛犺繛鍘�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511528",
                DISTRICT_NAME: "鍏存枃鍘�"
            }, {
                CITY_CODE: "511500",
                DISTRICT_CODE: "511529",
                DISTRICT_NAME: "灞忓北鍘�"
            }],
            511600: [{
                CITY_CODE: "511600",
                DISTRICT_CODE: "511602",
                DISTRICT_NAME: "骞垮畨鍖�"
            }, {
                CITY_CODE: "511600",
                DISTRICT_CODE: "511621",
                DISTRICT_NAME: "宀虫睜鍘�"
            }, {
                CITY_CODE: "511600",
                DISTRICT_CODE: "511622",
                DISTRICT_NAME: "姝﹁儨鍘�"
            }, {
                CITY_CODE: "511600",
                DISTRICT_CODE: "511623",
                DISTRICT_NAME: "閭绘按鍘�"
            }, {
                CITY_CODE: "511600",
                DISTRICT_CODE: "511681",
                DISTRICT_NAME: "鍗庤摜甯�"
            }, {
                CITY_CODE: "511600",
                DISTRICT_CODE: "511624",
                DISTRICT_NAME: "鍓嶉攱鍖�"
            }],
            511700: [{
                CITY_CODE: "511700",
                DISTRICT_CODE: "511702",
                DISTRICT_NAME: "閫氬窛鍖�"
            }, {
                CITY_CODE: "511700",
                DISTRICT_CODE: "511721",
                DISTRICT_NAME: "杈惧幙"
            }, {
                CITY_CODE: "511700",
                DISTRICT_CODE: "511722",
                DISTRICT_NAME: "瀹ｆ眽鍘�"
            }, {
                CITY_CODE: "511700",
                DISTRICT_CODE: "511723",
                DISTRICT_NAME: "寮€姹熷幙"
            }, {
                CITY_CODE: "511700",
                DISTRICT_CODE: "511724",
                DISTRICT_NAME: "澶х鍘�"
            }, {
                CITY_CODE: "511700",
                DISTRICT_CODE: "511725",
                DISTRICT_NAME: "娓犲幙"
            }, {
                CITY_CODE: "511700",
                DISTRICT_CODE: "511781",
                DISTRICT_NAME: "涓囨簮甯�"
            }],
            511800: [{
                CITY_CODE: "511800",
                DISTRICT_CODE: "511802",
                DISTRICT_NAME: "闆ㄥ煄鍖�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511821",
                DISTRICT_NAME: "鍚嶅北鍘�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511822",
                DISTRICT_NAME: "鑽ョ粡鍘�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511823",
                DISTRICT_NAME: "姹夋簮鍘�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511824",
                DISTRICT_NAME: "鐭虫鍘�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511825",
                DISTRICT_NAME: "澶╁叏鍘�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511826",
                DISTRICT_NAME: "鑺﹀北鍘�"
            }, {
                CITY_CODE: "511800",
                DISTRICT_CODE: "511827",
                DISTRICT_NAME: "瀹濆叴鍘�"
            }],
            511900: [{
                CITY_CODE: "511900",
                DISTRICT_CODE: "511902",
                DISTRICT_NAME: "宸村窞鍖�"
            }, {
                CITY_CODE: "511900",
                DISTRICT_CODE: "511921",
                DISTRICT_NAME: "閫氭睙鍘�"
            }, {
                CITY_CODE: "511900",
                DISTRICT_CODE: "511922",
                DISTRICT_NAME: "鍗楁睙鍘�"
            }, {
                CITY_CODE: "511900",
                DISTRICT_CODE: "511923",
                DISTRICT_NAME: "骞虫槍鍘�"
            }, {
                CITY_CODE: "511900",
                DISTRICT_CODE: "511924",
                DISTRICT_NAME: "鎭╅槼鍖�"
            }],
            512000: [{
                CITY_CODE: "512000",
                DISTRICT_CODE: "512002",
                DISTRICT_NAME: "闆佹睙鍖�"
            }, {
                CITY_CODE: "512000",
                DISTRICT_CODE: "512021",
                DISTRICT_NAME: "瀹夊渤鍘�"
            }, {
                CITY_CODE: "512000",
                DISTRICT_CODE: "512022",
                DISTRICT_NAME: "涔愯嚦鍘�"
            }],
            513200: [{
                CITY_CODE: "513200",
                DISTRICT_CODE: "513221",
                DISTRICT_NAME: "姹跺窛鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513222",
                DISTRICT_NAME: "鐞嗗幙"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513223",
                DISTRICT_NAME: "鑼傚幙"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513224",
                DISTRICT_NAME: "鏉炬綐鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513225",
                DISTRICT_NAME: "涔濆娌熷幙"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513226",
                DISTRICT_NAME: "閲戝窛鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513227",
                DISTRICT_NAME: "灏忛噾鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513228",
                DISTRICT_NAME: "榛戞按鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513229",
                DISTRICT_NAME: "椹皵搴峰幙"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513230",
                DISTRICT_NAME: "澹ゅ鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513231",
                DISTRICT_NAME: "闃垮潩鍘�"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513232",
                DISTRICT_NAME: "鑻ュ皵鐩栧幙"
            }, {
                CITY_CODE: "513200",
                DISTRICT_CODE: "513233",
                DISTRICT_NAME: "绾㈠師鍘�"
            }],
            513300: [{
                CITY_CODE: "513300",
                DISTRICT_CODE: "513321",
                DISTRICT_NAME: "搴峰畾鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513322",
                DISTRICT_NAME: "娉稿畾鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513323",
                DISTRICT_NAME: "涓瑰反鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513324",
                DISTRICT_NAME: "涔濋緳鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513325",
                DISTRICT_NAME: "闆呮睙鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513326",
                DISTRICT_NAME: "閬撳瓪鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513327",
                DISTRICT_NAME: "鐐夐湇鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513328",
                DISTRICT_NAME: "鐢樺瓬鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513329",
                DISTRICT_NAME: "鏂伴緳鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513330",
                DISTRICT_NAME: "寰锋牸鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513331",
                DISTRICT_NAME: "鐧界帀鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513332",
                DISTRICT_NAME: "鐭虫笭鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513333",
                DISTRICT_NAME: "鑹茶揪鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513334",
                DISTRICT_NAME: "鐞嗗鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513335",
                DISTRICT_NAME: "宸村鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513336",
                DISTRICT_NAME: "涔″煄鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513337",
                DISTRICT_NAME: "绋诲煄鍘�"
            }, {
                CITY_CODE: "513300",
                DISTRICT_CODE: "513338",
                DISTRICT_NAME: "寰楄崳鍘�"
            }],
            513400: [{
                CITY_CODE: "513400",
                DISTRICT_CODE: "513401",
                DISTRICT_NAME: "瑗挎槍甯�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513422",
                DISTRICT_NAME: "鏈ㄩ噷钘忔棌鑷不鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513423",
                DISTRICT_NAME: "鐩愭簮鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513424",
                DISTRICT_NAME: "寰锋槍鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513425",
                DISTRICT_NAME: "浼氱悊鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513426",
                DISTRICT_NAME: "浼氫笢鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513427",
                DISTRICT_NAME: "瀹佸崡鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513428",
                DISTRICT_NAME: "鏅牸鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513429",
                DISTRICT_NAME: "甯冩嫋鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513430",
                DISTRICT_NAME: "閲戦槼鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513431",
                DISTRICT_NAME: "鏄鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513432",
                DISTRICT_NAME: "鍠滃痉鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513433",
                DISTRICT_NAME: "鍐曞畞鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513434",
                DISTRICT_NAME: "瓒婅タ鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513435",
                DISTRICT_NAME: "鐢樻礇鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513436",
                DISTRICT_NAME: "缇庡鍘�"
            }, {
                CITY_CODE: "513400",
                DISTRICT_CODE: "513437",
                DISTRICT_NAME: "闆锋尝鍘�"
            }],
            520100: [{
                CITY_CODE: "520100",
                DISTRICT_CODE: "520102",
                DISTRICT_NAME: "鍗楁槑鍖�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520103",
                DISTRICT_NAME: "浜戝博鍖�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520111",
                DISTRICT_NAME: "鑺辨邯鍖�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520112",
                DISTRICT_NAME: "涔屽綋鍖�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520113",
                DISTRICT_NAME: "鐧戒簯鍖�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520114",
                DISTRICT_NAME: "灏忔渤鍖�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520121",
                DISTRICT_NAME: "寮€闃冲幙"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520122",
                DISTRICT_NAME: "鎭兘鍘�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520123",
                DISTRICT_NAME: "淇枃鍘�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520181",
                DISTRICT_NAME: "娓呴晣甯�"
            }, {
                CITY_CODE: "520100",
                DISTRICT_CODE: "520104",
                DISTRICT_NAME: "瑙傚北婀栧尯 "
            }],
            520200: [{
                CITY_CODE: "520200",
                DISTRICT_CODE: "520201",
                DISTRICT_NAME: "閽熷北鍖�"
            }, {
                CITY_CODE: "520200",
                DISTRICT_CODE: "520203",
                DISTRICT_NAME: "鍏灊鐗瑰尯"
            }, {
                CITY_CODE: "520200",
                DISTRICT_CODE: "520221",
                DISTRICT_NAME: "姘村煄鍘�"
            }, {
                CITY_CODE: "520200",
                DISTRICT_CODE: "520222",
                DISTRICT_NAME: "鐩樺幙"
            }],
            520300: [{
                CITY_CODE: "520300",
                DISTRICT_CODE: "520302",
                DISTRICT_NAME: "绾㈣姳宀楀尯"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520303",
                DISTRICT_NAME: "姹囧窛鍖�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520321",
                DISTRICT_NAME: "閬典箟鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520322",
                DISTRICT_NAME: "妗愭鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520323",
                DISTRICT_NAME: "缁ラ槼鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520324",
                DISTRICT_NAME: "姝ｅ畨鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520325",
                DISTRICT_NAME: "閬撶湡浠′浆鏃忚嫍鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520326",
                DISTRICT_NAME: "鍔″窛浠′浆鏃忚嫍鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520327",
                DISTRICT_NAME: "鍑ゅ唸鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520328",
                DISTRICT_NAME: "婀勬江鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520329",
                DISTRICT_NAME: "浣欏簡鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520330",
                DISTRICT_NAME: "涔犳按鍘�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520381",
                DISTRICT_NAME: "璧ゆ按甯�"
            }, {
                CITY_CODE: "520300",
                DISTRICT_CODE: "520382",
                DISTRICT_NAME: "浠佹€€甯�"
            }],
            520400: [{
                CITY_CODE: "520400",
                DISTRICT_CODE: "520402",
                DISTRICT_NAME: "瑗跨鍖�"
            }, {
                CITY_CODE: "520400",
                DISTRICT_CODE: "520421",
                DISTRICT_NAME: "骞冲潩鍘�"
            }, {
                CITY_CODE: "520400",
                DISTRICT_CODE: "520422",
                DISTRICT_NAME: "鏅畾鍘�"
            }, {
                CITY_CODE: "520400",
                DISTRICT_CODE: "520423",
                DISTRICT_NAME: "闀囧畞甯冧緷鏃忚嫍鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "520400",
                DISTRICT_CODE: "520424",
                DISTRICT_NAME: "鍏冲箔甯冧緷鏃忚嫍鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "520400",
                DISTRICT_CODE: "520425",
                DISTRICT_NAME: "绱簯鑻楁棌甯冧緷鏃忚嚜娌诲幙"
            }],
            520500: [{
                CITY_CODE: "520500",
                DISTRICT_CODE: "520502",
                DISTRICT_NAME: "涓冩槦鍏冲尯"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520521",
                DISTRICT_NAME: "澶ф柟鍘�"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520522",
                DISTRICT_NAME: "榛旇タ鍘�"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520523",
                DISTRICT_NAME: "閲戞矙鍘�"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520524",
                DISTRICT_NAME: "缁囬噾鍘�"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520525",
                DISTRICT_NAME: "绾抽泹鍘�"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520526",
                DISTRICT_NAME: "濞佸畞褰濇棌鍥炴棌鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "520500",
                DISTRICT_CODE: "520527",
                DISTRICT_NAME: "璧珷鍘�"
            }],
            520600: [{
                CITY_CODE: "520600",
                DISTRICT_CODE: "520602",
                DISTRICT_NAME: "纰ф睙鍖�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520603",
                DISTRICT_NAME: "涓囧北鍖�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520621",
                DISTRICT_NAME: "姹熷彛鍘�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520622",
                DISTRICT_NAME: "鐜夊睆渚楁棌鑷不鍘�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520623",
                DISTRICT_NAME: "鐭抽槨鍘�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520624",
                DISTRICT_NAME: "鎬濆崡鍘�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520625",
                DISTRICT_NAME: "鍗版睙鍦熷鏃忚嫍鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520626",
                DISTRICT_NAME: "寰锋睙鍘�"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520627",
                DISTRICT_NAME: "娌挎渤鍦熷鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "520600",
                DISTRICT_CODE: "520628",
                DISTRICT_NAME: "鏉炬鑻楁棌鑷不鍘�"
            }],
            522300: [{
                CITY_CODE: "522300",
                DISTRICT_CODE: "522301",
                DISTRICT_NAME: "鍏翠箟甯�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522322",
                DISTRICT_NAME: "鍏翠粊鍘�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522323",
                DISTRICT_NAME: "鏅畨鍘�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522324",
                DISTRICT_NAME: "鏅撮殕鍘�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522325",
                DISTRICT_NAME: "璐炰赴鍘�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522326",
                DISTRICT_NAME: "鏈涜盁鍘�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522327",
                DISTRICT_NAME: "鍐屼酣鍘�"
            }, {
                CITY_CODE: "522300",
                DISTRICT_CODE: "522328",
                DISTRICT_NAME: "瀹夐緳鍘�"
            }],
            522600: [{
                CITY_CODE: "522600",
                DISTRICT_CODE: "522601",
                DISTRICT_NAME: "鍑噷甯�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522622",
                DISTRICT_NAME: "榛勫钩鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522623",
                DISTRICT_NAME: "鏂界鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522624",
                DISTRICT_NAME: "涓夌鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522625",
                DISTRICT_NAME: "闀囪繙鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522626",
                DISTRICT_NAME: "宀戝珐鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522627",
                DISTRICT_NAME: "澶╂煴鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522628",
                DISTRICT_NAME: "閿﹀睆鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522629",
                DISTRICT_NAME: "鍓戞渤鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522630",
                DISTRICT_NAME: "鍙版睙鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522631",
                DISTRICT_NAME: "榛庡钩鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522632",
                DISTRICT_NAME: "姒曟睙鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522633",
                DISTRICT_NAME: "浠庢睙鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522634",
                DISTRICT_NAME: "闆峰北鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522635",
                DISTRICT_NAME: "楹绘睙鍘�"
            }, {
                CITY_CODE: "522600",
                DISTRICT_CODE: "522636",
                DISTRICT_NAME: "涓瑰鍘�"
            }],
            522700: [{
                CITY_CODE: "522700",
                DISTRICT_CODE: "522701",
                DISTRICT_NAME: "閮藉寑甯�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522702",
                DISTRICT_NAME: "绂忔硥甯�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522722",
                DISTRICT_NAME: "鑽旀尝鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522723",
                DISTRICT_NAME: "璐靛畾鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522725",
                DISTRICT_NAME: "鐡畨鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522726",
                DISTRICT_NAME: "鐙北鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522727",
                DISTRICT_NAME: "骞冲鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522728",
                DISTRICT_NAME: "缃楃敻鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522729",
                DISTRICT_NAME: "闀块『鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522730",
                DISTRICT_NAME: "榫欓噷鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522731",
                DISTRICT_NAME: "鎯犳按鍘�"
            }, {
                CITY_CODE: "522700",
                DISTRICT_CODE: "522732",
                DISTRICT_NAME: "涓夐兘姘存棌鑷不鍘�"
            }],
            522800: [{
                CITY_CODE: "522800",
                DISTRICT_CODE: "522801",
                DISTRICT_NAME: "婀栨疆鍏氭鍖�"
            }, {
                CITY_CODE: "522800",
                DISTRICT_CODE: "522802",
                DISTRICT_NAME: "楂樺嘲椹満鍖�"
            }, {
                CITY_CODE: "522800",
                DISTRICT_CODE: "522803",
                DISTRICT_NAME: "澶у鍩庡尯"
            }],
            530100: [{
                CITY_CODE: "530100",
                DISTRICT_CODE: "530102",
                DISTRICT_NAME: "浜斿崕鍖�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530103",
                DISTRICT_NAME: "鐩橀緳鍖�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530111",
                DISTRICT_NAME: "瀹樻浮鍖�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530112",
                DISTRICT_NAME: "瑗垮北鍖�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530113",
                DISTRICT_NAME: "涓滃窛鍖�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530114",
                DISTRICT_NAME: "鍛堣础鍖�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530122",
                DISTRICT_NAME: "鏅嬪畞鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530124",
                DISTRICT_NAME: "瀵屾皯鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530125",
                DISTRICT_NAME: "瀹滆壇鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530126",
                DISTRICT_NAME: "鐭虫灄褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530127",
                DISTRICT_NAME: "宓╂槑鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530128",
                DISTRICT_NAME: "绂勫姖褰濇棌鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530129",
                DISTRICT_NAME: "瀵荤敻鍥炴棌褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "530100",
                DISTRICT_CODE: "530181",
                DISTRICT_NAME: "瀹夊畞甯�"
            }],
            530300: [{
                CITY_CODE: "530300",
                DISTRICT_CODE: "530302",
                DISTRICT_NAME: "楹掗簾鍖�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530321",
                DISTRICT_NAME: "椹緳鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530322",
                DISTRICT_NAME: "闄嗚壇鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530323",
                DISTRICT_NAME: "甯堝畻鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530324",
                DISTRICT_NAME: "缃楀钩鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530325",
                DISTRICT_NAME: "瀵屾簮鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530326",
                DISTRICT_NAME: "浼氭辰鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530328",
                DISTRICT_NAME: "娌剧泭鍘�"
            }, {
                CITY_CODE: "530300",
                DISTRICT_CODE: "530381",
                DISTRICT_NAME: "瀹ｅ▉甯�"
            }],
            530400: [{
                CITY_CODE: "530400",
                DISTRICT_CODE: "530402",
                DISTRICT_NAME: "绾㈠鍖�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530421",
                DISTRICT_NAME: "姹熷窛鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530422",
                DISTRICT_NAME: "婢勬睙鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530423",
                DISTRICT_NAME: "閫氭捣鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530424",
                DISTRICT_NAME: "鍗庡畞鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530425",
                DISTRICT_NAME: "鏄撻棬鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530426",
                DISTRICT_NAME: "宄ㄥ北褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530427",
                DISTRICT_NAME: "鏂板钩褰濇棌鍌ｆ棌鑷不鍘�"
            }, {
                CITY_CODE: "530400",
                DISTRICT_CODE: "530428",
                DISTRICT_NAME: "鍏冩睙鍝堝凹鏃忓綕鏃忓偅鏃忚嚜娌诲幙"
            }],
            530500: [{
                CITY_CODE: "530500",
                DISTRICT_CODE: "530502",
                DISTRICT_NAME: "闅嗛槼鍖�"
            }, {
                CITY_CODE: "530500",
                DISTRICT_CODE: "530521",
                DISTRICT_NAME: "鏂界敻鍘�"
            }, {
                CITY_CODE: "530500",
                DISTRICT_CODE: "530522",
                DISTRICT_NAME: "鑵惧啿鍘�"
            }, {
                CITY_CODE: "530500",
                DISTRICT_CODE: "530523",
                DISTRICT_NAME: "榫欓櫟鍘�"
            }, {
                CITY_CODE: "530500",
                DISTRICT_CODE: "530524",
                DISTRICT_NAME: "鏄屽畞鍘�"
            }],
            530600: [{
                CITY_CODE: "530600",
                DISTRICT_CODE: "530602",
                DISTRICT_NAME: "鏄槼鍖�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530621",
                DISTRICT_NAME: "椴佺敻鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530622",
                DISTRICT_NAME: "宸у鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530623",
                DISTRICT_NAME: "鐩愭触鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530624",
                DISTRICT_NAME: "澶у叧鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530625",
                DISTRICT_NAME: "姘稿杽鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530626",
                DISTRICT_NAME: "缁ユ睙鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530627",
                DISTRICT_NAME: "闀囬泟鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530628",
                DISTRICT_NAME: "褰濊壇鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530629",
                DISTRICT_NAME: "濞佷俊鍘�"
            }, {
                CITY_CODE: "530600",
                DISTRICT_CODE: "530630",
                DISTRICT_NAME: "姘村瘜鍘�"
            }],
            530700: [{
                CITY_CODE: "530700",
                DISTRICT_CODE: "530702",
                DISTRICT_NAME: "鍙ゅ煄鍖�"
            }, {
                CITY_CODE: "530700",
                DISTRICT_CODE: "530721",
                DISTRICT_NAME: "鐜夐緳绾宠タ鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "530700",
                DISTRICT_CODE: "530722",
                DISTRICT_NAME: "姘歌儨鍘�"
            }, {
                CITY_CODE: "530700",
                DISTRICT_CODE: "530723",
                DISTRICT_NAME: "鍗庡潽鍘�"
            }, {
                CITY_CODE: "530700",
                DISTRICT_CODE: "530724",
                DISTRICT_NAME: "瀹佽挆褰濇棌鑷不鍘�"
            }],
            530800: [{
                CITY_CODE: "530800",
                DISTRICT_CODE: "530802",
                DISTRICT_NAME: "鎬濊寘鍖�"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530821",
                DISTRICT_NAME: "瀹佹幢鍝堝凹鏃忓綕鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530822",
                DISTRICT_NAME: "澧ㄦ睙鍝堝凹鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530823",
                DISTRICT_NAME: "鏅笢褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530824",
                DISTRICT_NAME: "鏅胺鍌ｆ棌褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530825",
                DISTRICT_NAME: "闀囨矃褰濇棌鍝堝凹鏃忔媺绁滄棌鑷不鍘�"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530826",
                DISTRICT_NAME: "姹熷煄鍝堝凹鏃忓綕鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530827",
                DISTRICT_NAME: "瀛熻繛鍌ｆ棌鎷夌鏃忎饯鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530828",
                DISTRICT_NAME: "婢滄钵鎷夌鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "530800",
                DISTRICT_CODE: "530829",
                DISTRICT_NAME: "瑗跨洘浣ゆ棌鑷不鍘�"
            }],
            530900: [{
                CITY_CODE: "530900",
                DISTRICT_CODE: "530902",
                DISTRICT_NAME: "涓寸繑鍖�"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530921",
                DISTRICT_NAME: "鍑ゅ簡鍘�"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530922",
                DISTRICT_NAME: "浜戝幙"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530923",
                DISTRICT_NAME: "姘稿痉鍘�"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530924",
                DISTRICT_NAME: "闀囧悍鍘�"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530925",
                DISTRICT_NAME: "鍙屾睙鎷夌鏃忎饯鏃忓竷鏈楁棌鍌ｆ棌鑷不鍘�"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530926",
                DISTRICT_NAME: "鑰块┈鍌ｆ棌浣ゆ棌鑷不鍘�"
            }, {
                CITY_CODE: "530900",
                DISTRICT_CODE: "530927",
                DISTRICT_NAME: "娌ф簮浣ゆ棌鑷不鍘�"
            }],
            532300: [{
                CITY_CODE: "532300",
                DISTRICT_CODE: "532301",
                DISTRICT_NAME: "妤氶泟甯�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532322",
                DISTRICT_NAME: "鍙屾煆鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532323",
                DISTRICT_NAME: "鐗熷畾鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532324",
                DISTRICT_NAME: "鍗楀崕鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532325",
                DISTRICT_NAME: "濮氬畨鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532326",
                DISTRICT_NAME: "澶у鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532327",
                DISTRICT_NAME: "姘镐粊鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532328",
                DISTRICT_NAME: "鍏冭皨鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532329",
                DISTRICT_NAME: "姝﹀畾鍘�"
            }, {
                CITY_CODE: "532300",
                DISTRICT_CODE: "532331",
                DISTRICT_NAME: "绂勪赴鍘�"
            }],
            532500: [{
                CITY_CODE: "532500",
                DISTRICT_CODE: "532501",
                DISTRICT_NAME: "涓棫甯�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532502",
                DISTRICT_NAME: "寮€杩滃競"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532503",
                DISTRICT_NAME: "钂欒嚜甯�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532523",
                DISTRICT_NAME: "灞忚竟鑻楁棌鑷不鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532524",
                DISTRICT_NAME: "寤烘按鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532525",
                DISTRICT_NAME: "鐭冲睆鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532526",
                DISTRICT_NAME: "寮ュ嫆鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532527",
                DISTRICT_NAME: "娉歌タ鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532528",
                DISTRICT_NAME: "鍏冮槼鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532529",
                DISTRICT_NAME: "绾㈡渤鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532530",
                DISTRICT_NAME: "閲戝钩鑻楁棌鐟舵棌鍌ｆ棌鑷不鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532531",
                DISTRICT_NAME: "缁挎槬鍘�"
            }, {
                CITY_CODE: "532500",
                DISTRICT_CODE: "532532",
                DISTRICT_NAME: "娌冲彛鐟舵棌鑷不鍘�"
            }],
            532600: [{
                CITY_CODE: "532600",
                DISTRICT_CODE: "532601",
                DISTRICT_NAME: "鏂囧北甯�"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532622",
                DISTRICT_NAME: "鐮氬北鍘�"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532623",
                DISTRICT_NAME: "瑗跨暣鍘�"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532624",
                DISTRICT_NAME: "楹绘牀鍧″幙"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532625",
                DISTRICT_NAME: "椹叧鍘�"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532626",
                DISTRICT_NAME: "涓樺寳鍘�"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532627",
                DISTRICT_NAME: "骞垮崡鍘�"
            }, {
                CITY_CODE: "532600",
                DISTRICT_CODE: "532628",
                DISTRICT_NAME: "瀵屽畞鍘�"
            }],
            532800: [{
                CITY_CODE: "532800",
                DISTRICT_CODE: "532801",
                DISTRICT_NAME: "鏅椽甯�"
            }, {
                CITY_CODE: "532800",
                DISTRICT_CODE: "532822",
                DISTRICT_NAME: "鍕愭捣鍘�"
            }, {
                CITY_CODE: "532800",
                DISTRICT_CODE: "532823",
                DISTRICT_NAME: "鍕愯厞鍘�"
            }],
            532900: [{
                CITY_CODE: "532900",
                DISTRICT_CODE: "532901",
                DISTRICT_NAME: "澶х悊甯�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532922",
                DISTRICT_NAME: "婕炬繛褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532923",
                DISTRICT_NAME: "绁ヤ簯鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532924",
                DISTRICT_NAME: "瀹惧窛鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532925",
                DISTRICT_NAME: "寮ユ浮鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532926",
                DISTRICT_NAME: "鍗楁锭褰濇棌鑷不鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532927",
                DISTRICT_NAME: "宸嶅北褰濇棌鍥炴棌鑷不鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532928",
                DISTRICT_NAME: "姘稿钩鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532929",
                DISTRICT_NAME: "浜戦緳鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532930",
                DISTRICT_NAME: "娲辨簮鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532931",
                DISTRICT_NAME: "鍓戝窛鍘�"
            }, {
                CITY_CODE: "532900",
                DISTRICT_CODE: "532932",
                DISTRICT_NAME: "楣ゅ簡鍘�"
            }],
            533100: [{
                CITY_CODE: "533100",
                DISTRICT_CODE: "533102",
                DISTRICT_NAME: "鐟炰附甯�"
            }, {
                CITY_CODE: "533100",
                DISTRICT_CODE: "533103",
                DISTRICT_NAME: "鑺掑競"
            }, {
                CITY_CODE: "533100",
                DISTRICT_CODE: "533122",
                DISTRICT_NAME: "姊佹渤鍘�"
            }, {
                CITY_CODE: "533100",
                DISTRICT_CODE: "533123",
                DISTRICT_NAME: "鐩堟睙鍘�"
            }, {
                CITY_CODE: "533100",
                DISTRICT_CODE: "533124",
                DISTRICT_NAME: "闄囧窛鍘�"
            }],
            533300: [{
                CITY_CODE: "533300",
                DISTRICT_CODE: "533321",
                DISTRICT_NAME: "娉告按鍘�"
            }, {
                CITY_CODE: "533300",
                DISTRICT_CODE: "533323",
                DISTRICT_NAME: "绂忚础鍘�"
            }, {
                CITY_CODE: "533300",
                DISTRICT_CODE: "533324",
                DISTRICT_NAME: "璐″北鐙緳鏃忔€掓棌鑷不鍘�"
            }, {
                CITY_CODE: "533300",
                DISTRICT_CODE: "533325",
                DISTRICT_NAME: "鍏板潽鐧芥棌鏅背鏃忚嚜娌诲幙"
            }],
            533400: [{
                CITY_CODE: "533400",
                DISTRICT_CODE: "533421",
                DISTRICT_NAME: "棣欐牸閲屾媺鍘�"
            }, {
                CITY_CODE: "533400",
                DISTRICT_CODE: "533422",
                DISTRICT_NAME: "寰烽挦鍘�"
            }, {
                CITY_CODE: "533400",
                DISTRICT_CODE: "533423",
                DISTRICT_NAME: "缁磋タ鍌堝兂鏃忚嚜娌诲幙"
            }],
            540100: [{
                CITY_CODE: "540100",
                DISTRICT_CODE: "540102",
                DISTRICT_NAME: "鍩庡叧鍖�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540121",
                DISTRICT_NAME: "鏋楀懆鍘�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540122",
                DISTRICT_NAME: "褰撻泟鍘�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540123",
                DISTRICT_NAME: "灏兼湪鍘�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540124",
                DISTRICT_NAME: "鏇叉按鍘�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540125",
                DISTRICT_NAME: "鍫嗛緳寰峰簡鍘�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540126",
                DISTRICT_NAME: "杈惧瓬鍘�"
            }, {
                CITY_CODE: "540100",
                DISTRICT_CODE: "540127",
                DISTRICT_NAME: "澧ㄧ宸ュ崱鍘�"
            }],
            542100: [{
                CITY_CODE: "542100",
                DISTRICT_CODE: "542121",
                DISTRICT_NAME: "鏄岄兘鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542122",
                DISTRICT_NAME: "姹熻揪鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542123",
                DISTRICT_NAME: "璐¤鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542124",
                DISTRICT_NAME: "绫讳箤榻愬幙"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542125",
                DISTRICT_NAME: "涓侀潚鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542126",
                DISTRICT_NAME: "瀵熼泤鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542127",
                DISTRICT_NAME: "鍏鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542128",
                DISTRICT_NAME: "宸﹁础鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542129",
                DISTRICT_NAME: "鑺掑悍鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542132",
                DISTRICT_NAME: "娲涢殕鍘�"
            }, {
                CITY_CODE: "542100",
                DISTRICT_CODE: "542133",
                DISTRICT_NAME: "杈瑰潩鍘�"
            }],
            542200: [{
                CITY_CODE: "542200",
                DISTRICT_CODE: "542221",
                DISTRICT_NAME: "涔冧笢鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542222",
                DISTRICT_NAME: "鎵庡泭鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542223",
                DISTRICT_NAME: "璐″槑鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542224",
                DISTRICT_NAME: "妗戞棩鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542225",
                DISTRICT_NAME: "鐞肩粨鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542226",
                DISTRICT_NAME: "鏇叉澗鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542227",
                DISTRICT_NAME: "鎺編鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542228",
                DISTRICT_NAME: "娲涙墡鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542229",
                DISTRICT_NAME: "鍔犳煡鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542231",
                DISTRICT_NAME: "闅嗗瓙鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542232",
                DISTRICT_NAME: "閿欓偅鍘�"
            }, {
                CITY_CODE: "542200",
                DISTRICT_CODE: "542233",
                DISTRICT_NAME: "娴崱瀛愬幙"
            }],
            542300: [{
                CITY_CODE: "542300",
                DISTRICT_CODE: "542301",
                DISTRICT_NAME: "鏃ュ杸鍒欏競"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542322",
                DISTRICT_NAME: "鍗楁湪鏋楀幙"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542323",
                DISTRICT_NAME: "姹熷瓬鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542324",
                DISTRICT_NAME: "瀹氭棩鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542325",
                DISTRICT_NAME: "钀ㄨ喀鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542326",
                DISTRICT_NAME: "鎷夊瓬鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542327",
                DISTRICT_NAME: "鏄備粊鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542328",
                DISTRICT_NAME: "璋㈤€氶棬鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542329",
                DISTRICT_NAME: "鐧芥湕鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542330",
                DISTRICT_NAME: "浠佸竷鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542331",
                DISTRICT_NAME: "搴烽┈鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542332",
                DISTRICT_NAME: "瀹氱粨鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542333",
                DISTRICT_NAME: "浠插反鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542334",
                DISTRICT_NAME: "浜氫笢鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542335",
                DISTRICT_NAME: "鍚夐殕鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542336",
                DISTRICT_NAME: "鑱傛媺鏈ㄥ幙"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542337",
                DISTRICT_NAME: "钀ㄥ槑鍘�"
            }, {
                CITY_CODE: "542300",
                DISTRICT_CODE: "542338",
                DISTRICT_NAME: "宀楀反鍘�"
            }],
            542400: [{
                CITY_CODE: "542400",
                DISTRICT_CODE: "542421",
                DISTRICT_NAME: "閭ｆ洸鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542422",
                DISTRICT_NAME: "鍢夐粠鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542423",
                DISTRICT_NAME: "姣斿鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542424",
                DISTRICT_NAME: "鑱傝崳鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542425",
                DISTRICT_NAME: "瀹夊鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542426",
                DISTRICT_NAME: "鐢虫墡鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542427",
                DISTRICT_NAME: "绱㈠幙"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542428",
                DISTRICT_NAME: "鐝垐鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542429",
                DISTRICT_NAME: "宸撮潚鍘�"
            }, {
                CITY_CODE: "542400",
                DISTRICT_CODE: "542430",
                DISTRICT_NAME: "灏肩帥鍘�"
            }],
            542500: [{
                CITY_CODE: "542500",
                DISTRICT_CODE: "542521",
                DISTRICT_NAME: "鏅叞鍘�"
            }, {
                CITY_CODE: "542500",
                DISTRICT_CODE: "542522",
                DISTRICT_NAME: "鏈揪鍘�"
            }, {
                CITY_CODE: "542500",
                DISTRICT_CODE: "542523",
                DISTRICT_NAME: "鍣跺皵鍘�"
            }, {
                CITY_CODE: "542500",
                DISTRICT_CODE: "542524",
                DISTRICT_NAME: "鏃ュ湡鍘�"
            }, {
                CITY_CODE: "542500",
                DISTRICT_CODE: "542525",
                DISTRICT_NAME: "闈╁悏鍘�"
            }, {
                CITY_CODE: "542500",
                DISTRICT_CODE: "542526",
                DISTRICT_NAME: "鏀瑰垯鍘�"
            }, {
                CITY_CODE: "542500",
                DISTRICT_CODE: "542527",
                DISTRICT_NAME: "鎺嫟鍘�"
            }],
            542600: [{
                CITY_CODE: "542600",
                DISTRICT_CODE: "542621",
                DISTRICT_NAME: "鏋楄姖鍘�"
            }, {
                CITY_CODE: "542600",
                DISTRICT_CODE: "542622",
                DISTRICT_NAME: "宸ュ竷姹熻揪鍘�"
            }, {
                CITY_CODE: "542600",
                DISTRICT_CODE: "542623",
                DISTRICT_NAME: "绫虫灄鍘�"
            }, {
                CITY_CODE: "542600",
                DISTRICT_CODE: "542624",
                DISTRICT_NAME: "澧ㄨ劚鍘�"
            }, {
                CITY_CODE: "542600",
                DISTRICT_CODE: "542625",
                DISTRICT_NAME: "娉㈠瘑鍘�"
            }, {
                CITY_CODE: "542600",
                DISTRICT_CODE: "542626",
                DISTRICT_NAME: "瀵熼殔鍘�"
            }, {
                CITY_CODE: "542600",
                DISTRICT_CODE: "542627",
                DISTRICT_NAME: "鏈楀幙"
            }],
            610100: [{
                CITY_CODE: "610100",
                DISTRICT_CODE: "610102",
                DISTRICT_NAME: "鏂板煄鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610103",
                DISTRICT_NAME: "纰戞灄鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610104",
                DISTRICT_NAME: "鑾叉箹鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610111",
                DISTRICT_NAME: "鐏炴ˉ鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610112",
                DISTRICT_NAME: "鏈ぎ鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610113",
                DISTRICT_NAME: "闆佸鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610114",
                DISTRICT_NAME: "闃庤壇鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610115",
                DISTRICT_NAME: "涓存郊鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610116",
                DISTRICT_NAME: "闀垮畨鍖�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610122",
                DISTRICT_NAME: "钃濈敯鍘�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610124",
                DISTRICT_NAME: "鍛ㄨ嚦鍘�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610125",
                DISTRICT_NAME: "鎴峰幙"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610126",
                DISTRICT_NAME: "楂橀櫟鍘�"
            }, {
                CITY_CODE: "610100",
                DISTRICT_CODE: "610127",
                DISTRICT_NAME: "鏉ㄥ噷鍖�"
            }],
            610200: [{
                CITY_CODE: "610200",
                DISTRICT_CODE: "610202",
                DISTRICT_NAME: "鐜嬬泭鍖�"
            }, {
                CITY_CODE: "610200",
                DISTRICT_CODE: "610203",
                DISTRICT_NAME: "鍗板彴鍖�"
            }, {
                CITY_CODE: "610200",
                DISTRICT_CODE: "610204",
                DISTRICT_NAME: "鑰€宸炲尯"
            }, {
                CITY_CODE: "610200",
                DISTRICT_CODE: "610222",
                DISTRICT_NAME: "瀹滃悰鍘�"
            }],
            610300: [{
                CITY_CODE: "610300",
                DISTRICT_CODE: "610302",
                DISTRICT_NAME: "娓花鍖�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610303",
                DISTRICT_NAME: "閲戝彴鍖�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610304",
                DISTRICT_NAME: "闄堜粨鍖�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610322",
                DISTRICT_NAME: "鍑ょ繑鍘�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610323",
                DISTRICT_NAME: "宀愬北鍘�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610324",
                DISTRICT_NAME: "鎵堕鍘�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610326",
                DISTRICT_NAME: "鐪夊幙"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610327",
                DISTRICT_NAME: "闄囧幙"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610328",
                DISTRICT_NAME: "鍗冮槼鍘�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610329",
                DISTRICT_NAME: "楹熸父鍘�"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610330",
                DISTRICT_NAME: "鍑ゅ幙"
            }, {
                CITY_CODE: "610300",
                DISTRICT_CODE: "610331",
                DISTRICT_NAME: "澶櫧鍘�"
            }],
            610400: [{
                CITY_CODE: "610400",
                DISTRICT_CODE: "610402",
                DISTRICT_NAME: "绉﹂兘鍖�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610404",
                DISTRICT_NAME: "娓煄鍖�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610422",
                DISTRICT_NAME: "涓夊師鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610423",
                DISTRICT_NAME: "娉鹃槼鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610424",
                DISTRICT_NAME: "涔惧幙"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610425",
                DISTRICT_NAME: "绀兼硥鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610426",
                DISTRICT_NAME: "姘稿鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610427",
                DISTRICT_NAME: "褰幙"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610428",
                DISTRICT_NAME: "闀挎鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610429",
                DISTRICT_NAME: "鏃倯鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610430",
                DISTRICT_NAME: "娣冲寲鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610431",
                DISTRICT_NAME: "姝﹀姛鍘�"
            }, {
                CITY_CODE: "610400",
                DISTRICT_CODE: "610481",
                DISTRICT_NAME: "鍏村钩甯�"
            }],
            610500: [{
                CITY_CODE: "610500",
                DISTRICT_CODE: "610502",
                DISTRICT_NAME: "涓存腑鍖�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610521",
                DISTRICT_NAME: "鍗庡幙"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610522",
                DISTRICT_NAME: "娼煎叧鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610523",
                DISTRICT_NAME: "澶ц崝鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610524",
                DISTRICT_NAME: "鍚堥槼鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610525",
                DISTRICT_NAME: "婢勫煄鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610526",
                DISTRICT_NAME: "钂插煄鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610527",
                DISTRICT_NAME: "鐧芥按鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610528",
                DISTRICT_NAME: "瀵屽钩鍘�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610581",
                DISTRICT_NAME: "闊╁煄甯�"
            }, {
                CITY_CODE: "610500",
                DISTRICT_CODE: "610582",
                DISTRICT_NAME: "鍗庨槾甯�"
            }],
            610600: [{
                CITY_CODE: "610600",
                DISTRICT_CODE: "610602",
                DISTRICT_NAME: "瀹濆鍖�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610621",
                DISTRICT_NAME: "寤堕暱鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610622",
                DISTRICT_NAME: "寤跺窛鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610623",
                DISTRICT_NAME: "瀛愰暱鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610624",
                DISTRICT_NAME: "瀹夊鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610625",
                DISTRICT_NAME: "蹇椾腹鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610626",
                DISTRICT_NAME: "鍚磋捣鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610627",
                DISTRICT_NAME: "鐢樻硥鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610628",
                DISTRICT_NAME: "瀵屽幙"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610629",
                DISTRICT_NAME: "娲涘窛鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610630",
                DISTRICT_NAME: "瀹滃窛鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610631",
                DISTRICT_NAME: "榛勯緳鍘�"
            }, {
                CITY_CODE: "610600",
                DISTRICT_CODE: "610632",
                DISTRICT_NAME: "榛勯櫟鍘�"
            }],
            610700: [{
                CITY_CODE: "610700",
                DISTRICT_CODE: "610702",
                DISTRICT_NAME: "姹夊彴鍖�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610721",
                DISTRICT_NAME: "鍗楅儜鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610722",
                DISTRICT_NAME: "鍩庡浐鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610723",
                DISTRICT_NAME: "娲嬪幙"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610724",
                DISTRICT_NAME: "瑗夸埂鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610725",
                DISTRICT_NAME: "鍕夊幙"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610726",
                DISTRICT_NAME: "瀹佸己鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610727",
                DISTRICT_NAME: "鐣ラ槼鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610728",
                DISTRICT_NAME: "闀囧反鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610729",
                DISTRICT_NAME: "鐣欏潩鍘�"
            }, {
                CITY_CODE: "610700",
                DISTRICT_CODE: "610730",
                DISTRICT_NAME: "浣涘潽鍘�"
            }],
            610800: [{
                CITY_CODE: "610800",
                DISTRICT_CODE: "610802",
                DISTRICT_NAME: "姒嗛槼鍖�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610821",
                DISTRICT_NAME: "绁炴湪鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610822",
                DISTRICT_NAME: "搴滆胺鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610823",
                DISTRICT_NAME: "妯北鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610824",
                DISTRICT_NAME: "闈栬竟鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610825",
                DISTRICT_NAME: "瀹氳竟鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610826",
                DISTRICT_NAME: "缁ュ痉鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610827",
                DISTRICT_NAME: "绫宠剛鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610828",
                DISTRICT_NAME: "浣冲幙"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610829",
                DISTRICT_NAME: "鍚村牎鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610830",
                DISTRICT_NAME: "娓呮锭鍘�"
            }, {
                CITY_CODE: "610800",
                DISTRICT_CODE: "610831",
                DISTRICT_NAME: "瀛愭床鍘�"
            }],
            610900: [{
                CITY_CODE: "610900",
                DISTRICT_CODE: "610902",
                DISTRICT_NAME: "姹夋花鍖�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610921",
                DISTRICT_NAME: "姹夐槾鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610922",
                DISTRICT_NAME: "鐭虫硥鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610923",
                DISTRICT_NAME: "瀹侀檿鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610924",
                DISTRICT_NAME: "绱槼鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610925",
                DISTRICT_NAME: "宀氱殝鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610926",
                DISTRICT_NAME: "骞冲埄鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610927",
                DISTRICT_NAME: "闀囧潽鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610928",
                DISTRICT_NAME: "鏃槼鍘�"
            }, {
                CITY_CODE: "610900",
                DISTRICT_CODE: "610929",
                DISTRICT_NAME: "鐧芥渤鍘�"
            }],
            611000: [{
                CITY_CODE: "611000",
                DISTRICT_CODE: "611002",
                DISTRICT_NAME: "鍟嗗窞鍖�"
            }, {
                CITY_CODE: "611000",
                DISTRICT_CODE: "611021",
                DISTRICT_NAME: "娲涘崡鍘�"
            }, {
                CITY_CODE: "611000",
                DISTRICT_CODE: "611022",
                DISTRICT_NAME: "涓瑰嚖鍘�"
            }, {
                CITY_CODE: "611000",
                DISTRICT_CODE: "611023",
                DISTRICT_NAME: "鍟嗗崡鍘�"
            }, {
                CITY_CODE: "611000",
                DISTRICT_CODE: "611024",
                DISTRICT_NAME: "灞遍槼鍘�"
            }, {
                CITY_CODE: "611000",
                DISTRICT_CODE: "611025",
                DISTRICT_NAME: "闀囧畨鍘�"
            }, {
                CITY_CODE: "611000",
                DISTRICT_CODE: "611026",
                DISTRICT_NAME: "鏌炴按鍘�"
            }],
            620100: [{
                CITY_CODE: "620100",
                DISTRICT_CODE: "620102",
                DISTRICT_NAME: "鍩庡叧鍖�"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620103",
                DISTRICT_NAME: "涓冮噷娌冲尯"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620104",
                DISTRICT_NAME: "瑗垮浐鍖�"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620105",
                DISTRICT_NAME: "瀹夊畞鍖�"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620111",
                DISTRICT_NAME: "绾㈠彜鍖�"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620121",
                DISTRICT_NAME: "姘哥櫥鍘�"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620122",
                DISTRICT_NAME: "鐨嬪叞鍘�"
            }, {
                CITY_CODE: "620100",
                DISTRICT_CODE: "620123",
                DISTRICT_NAME: "姒嗕腑鍘�"
            }],
            620200: [{
                CITY_CODE: "620200",
                DISTRICT_CODE: "620201",
                DISTRICT_NAME: "鍢夊唱鍏冲競"
            }],
            620300: [{
                CITY_CODE: "620300",
                DISTRICT_CODE: "620302",
                DISTRICT_NAME: "閲戝窛鍖�"
            }, {
                CITY_CODE: "620300",
                DISTRICT_CODE: "620321",
                DISTRICT_NAME: "姘告槍鍘�"
            }],
            620400: [{
                CITY_CODE: "620400",
                DISTRICT_CODE: "620402",
                DISTRICT_NAME: "鐧介摱鍖�"
            }, {
                CITY_CODE: "620400",
                DISTRICT_CODE: "620403",
                DISTRICT_NAME: "骞冲窛鍖�"
            }, {
                CITY_CODE: "620400",
                DISTRICT_CODE: "620421",
                DISTRICT_NAME: "闈栬繙鍘�"
            }, {
                CITY_CODE: "620400",
                DISTRICT_CODE: "620422",
                DISTRICT_NAME: "浼氬畞鍘�"
            }, {
                CITY_CODE: "620400",
                DISTRICT_CODE: "620423",
                DISTRICT_NAME: "鏅嘲鍘�"
            }],
            620500: [{
                CITY_CODE: "620500",
                DISTRICT_CODE: "620502",
                DISTRICT_NAME: "绉﹀窞鍖�"
            }, {
                CITY_CODE: "620500",
                DISTRICT_CODE: "620503",
                DISTRICT_NAME: "楹︾Н鍖�"
            }, {
                CITY_CODE: "620500",
                DISTRICT_CODE: "620521",
                DISTRICT_NAME: "娓呮按鍘�"
            }, {
                CITY_CODE: "620500",
                DISTRICT_CODE: "620522",
                DISTRICT_NAME: "绉﹀畨鍘�"
            }, {
                CITY_CODE: "620500",
                DISTRICT_CODE: "620523",
                DISTRICT_NAME: "鐢樿胺鍘�"
            }, {
                CITY_CODE: "620500",
                DISTRICT_CODE: "620524",
                DISTRICT_NAME: "姝﹀北鍘�"
            }, {
                CITY_CODE: "620500",
                DISTRICT_CODE: "620525",
                DISTRICT_NAME: "寮犲宸濆洖鏃忚嚜娌诲幙"
            }],
            620600: [{
                CITY_CODE: "620600",
                DISTRICT_CODE: "620602",
                DISTRICT_NAME: "鍑夊窞鍖�"
            }, {
                CITY_CODE: "620600",
                DISTRICT_CODE: "620621",
                DISTRICT_NAME: "姘戝嫟鍘�"
            }, {
                CITY_CODE: "620600",
                DISTRICT_CODE: "620622",
                DISTRICT_NAME: "鍙ゆ氮鍘�"
            }, {
                CITY_CODE: "620600",
                DISTRICT_CODE: "620623",
                DISTRICT_NAME: "澶╃钘忔棌鑷不鍘�"
            }],
            620700: [{
                CITY_CODE: "620700",
                DISTRICT_CODE: "620702",
                DISTRICT_NAME: "鐢樺窞鍖�"
            }, {
                CITY_CODE: "620700",
                DISTRICT_CODE: "620721",
                DISTRICT_NAME: "鑲冨崡瑁曞浐鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "620700",
                DISTRICT_CODE: "620722",
                DISTRICT_NAME: "姘戜箰鍘�"
            }, {
                CITY_CODE: "620700",
                DISTRICT_CODE: "620723",
                DISTRICT_NAME: "涓存辰鍘�"
            }, {
                CITY_CODE: "620700",
                DISTRICT_CODE: "620724",
                DISTRICT_NAME: "楂樺彴鍘�"
            }, {
                CITY_CODE: "620700",
                DISTRICT_CODE: "620725",
                DISTRICT_NAME: "灞变腹鍘�"
            }],
            620800: [{
                CITY_CODE: "620800",
                DISTRICT_CODE: "620802",
                DISTRICT_NAME: "宕嗗硳鍖�"
            }, {
                CITY_CODE: "620800",
                DISTRICT_CODE: "620821",
                DISTRICT_NAME: "娉惧窛鍘�"
            }, {
                CITY_CODE: "620800",
                DISTRICT_CODE: "620822",
                DISTRICT_NAME: "鐏靛彴鍘�"
            }, {
                CITY_CODE: "620800",
                DISTRICT_CODE: "620823",
                DISTRICT_NAME: "宕囦俊鍘�"
            }, {
                CITY_CODE: "620800",
                DISTRICT_CODE: "620824",
                DISTRICT_NAME: "鍗庝涵鍘�"
            }, {
                CITY_CODE: "620800",
                DISTRICT_CODE: "620825",
                DISTRICT_NAME: "搴勬氮鍘�"
            }, {
                CITY_CODE: "620800",
                DISTRICT_CODE: "620826",
                DISTRICT_NAME: "闈欏畞鍘�"
            }],
            620900: [{
                CITY_CODE: "620900",
                DISTRICT_CODE: "620902",
                DISTRICT_NAME: "鑲冨窞鍖�"
            }, {
                CITY_CODE: "620900",
                DISTRICT_CODE: "620921",
                DISTRICT_NAME: "閲戝鍘�"
            }, {
                CITY_CODE: "620900",
                DISTRICT_CODE: "620922",
                DISTRICT_NAME: "鐡滃窞鍘�"
            }, {
                CITY_CODE: "620900",
                DISTRICT_CODE: "620923",
                DISTRICT_NAME: "鑲冨寳钂欏彜鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "620900",
                DISTRICT_CODE: "620924",
                DISTRICT_NAME: "闃垮厠濉炲搱钀ㄥ厠鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "620900",
                DISTRICT_CODE: "620981",
                DISTRICT_NAME: "鐜夐棬甯�"
            }, {
                CITY_CODE: "620900",
                DISTRICT_CODE: "620982",
                DISTRICT_NAME: "鏁︾厡甯�"
            }],
            621000: [{
                CITY_CODE: "621000",
                DISTRICT_CODE: "621002",
                DISTRICT_NAME: "瑗垮嘲鍖�"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621021",
                DISTRICT_NAME: "搴嗗煄鍘�"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621022",
                DISTRICT_NAME: "鐜幙"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621023",
                DISTRICT_NAME: "鍗庢睜鍘�"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621024",
                DISTRICT_NAME: "鍚堟按鍘�"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621025",
                DISTRICT_NAME: "姝ｅ畞鍘�"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621026",
                DISTRICT_NAME: "瀹佸幙"
            }, {
                CITY_CODE: "621000",
                DISTRICT_CODE: "621027",
                DISTRICT_NAME: "闀囧師鍘�"
            }],
            621100: [{
                CITY_CODE: "621100",
                DISTRICT_CODE: "621102",
                DISTRICT_NAME: "瀹夊畾鍖�"
            }, {
                CITY_CODE: "621100",
                DISTRICT_CODE: "621121",
                DISTRICT_NAME: "閫氭腑鍘�"
            }, {
                CITY_CODE: "621100",
                DISTRICT_CODE: "621122",
                DISTRICT_NAME: "闄囪タ鍘�"
            }, {
                CITY_CODE: "621100",
                DISTRICT_CODE: "621123",
                DISTRICT_NAME: "娓簮鍘�"
            }, {
                CITY_CODE: "621100",
                DISTRICT_CODE: "621124",
                DISTRICT_NAME: "涓存串鍘�"
            }, {
                CITY_CODE: "621100",
                DISTRICT_CODE: "621125",
                DISTRICT_NAME: "婕冲幙"
            }, {
                CITY_CODE: "621100",
                DISTRICT_CODE: "621126",
                DISTRICT_NAME: "宀峰幙"
            }],
            621200: [{
                CITY_CODE: "621200",
                DISTRICT_CODE: "621202",
                DISTRICT_NAME: "姝﹂兘鍖�"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621221",
                DISTRICT_NAME: "鎴愬幙"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621222",
                DISTRICT_NAME: "鏂囧幙"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621223",
                DISTRICT_NAME: "瀹曟槍鍘�"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621224",
                DISTRICT_NAME: "搴峰幙"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621225",
                DISTRICT_NAME: "瑗垮拰鍘�"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621226",
                DISTRICT_NAME: "绀煎幙"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621227",
                DISTRICT_NAME: "寰藉幙"
            }, {
                CITY_CODE: "621200",
                DISTRICT_CODE: "621228",
                DISTRICT_NAME: "涓ゅ綋鍘�"
            }],
            622900: [{
                CITY_CODE: "622900",
                DISTRICT_CODE: "622901",
                DISTRICT_NAME: "涓村甯�"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622921",
                DISTRICT_NAME: "涓村鍘�"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622922",
                DISTRICT_NAME: "搴蜂箰鍘�"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622923",
                DISTRICT_NAME: "姘搁潠鍘�"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622924",
                DISTRICT_NAME: "骞挎渤鍘�"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622925",
                DISTRICT_NAME: "鍜屾斂鍘�"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622926",
                DISTRICT_NAME: "涓滀埂鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "622900",
                DISTRICT_CODE: "622927",
                DISTRICT_NAME: "绉煶灞变繚瀹夋棌涓滀埂鏃忔拻鎷夋棌鑷不鍘�"
            }],
            623000: [{
                CITY_CODE: "623000",
                DISTRICT_CODE: "623001",
                DISTRICT_NAME: "鍚堜綔甯�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623021",
                DISTRICT_NAME: "涓存江鍘�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623022",
                DISTRICT_NAME: "鍗撳凹鍘�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623023",
                DISTRICT_NAME: "鑸熸洸鍘�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623024",
                DISTRICT_NAME: "杩儴鍘�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623025",
                DISTRICT_NAME: "鐜涙洸鍘�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623026",
                DISTRICT_NAME: "纰屾洸鍘�"
            }, {
                CITY_CODE: "623000",
                DISTRICT_CODE: "623027",
                DISTRICT_NAME: "澶忔渤鍘�"
            }],
            630100: [{
                CITY_CODE: "630100",
                DISTRICT_CODE: "630102",
                DISTRICT_NAME: "鍩庝笢鍖�"
            }, {
                CITY_CODE: "630100",
                DISTRICT_CODE: "630103",
                DISTRICT_NAME: "鍩庝腑鍖�"
            }, {
                CITY_CODE: "630100",
                DISTRICT_CODE: "630104",
                DISTRICT_NAME: "鍩庤タ鍖�"
            }, {
                CITY_CODE: "630100",
                DISTRICT_CODE: "630105",
                DISTRICT_NAME: "鍩庡寳鍖�"
            }, {
                CITY_CODE: "630100",
                DISTRICT_CODE: "630121",
                DISTRICT_NAME: "澶ч€氬洖鏃忓湡鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "630100",
                DISTRICT_CODE: "630122",
                DISTRICT_NAME: "婀熶腑鍘�"
            }, {
                CITY_CODE: "630100",
                DISTRICT_CODE: "630123",
                DISTRICT_NAME: "婀熸簮鍘�"
            }],
            632100: [{
                CITY_CODE: "632100",
                DISTRICT_CODE: "632121",
                DISTRICT_NAME: "骞冲畨鍖�"
            }, {
                CITY_CODE: "632100",
                DISTRICT_CODE: "632122",
                DISTRICT_NAME: "姘戝拰鍥炴棌鍦熸棌鑷不鍘�"
            }, {
                CITY_CODE: "632100",
                DISTRICT_CODE: "632123",
                DISTRICT_NAME: "涔愰兘鍖�"
            }, {
                CITY_CODE: "632100",
                DISTRICT_CODE: "632126",
                DISTRICT_NAME: "浜掑姪鍦熸棌鑷不鍘�"
            }, {
                CITY_CODE: "632100",
                DISTRICT_CODE: "632127",
                DISTRICT_NAME: "鍖栭殕鍥炴棌鑷不鍘�"
            }, {
                CITY_CODE: "632100",
                DISTRICT_CODE: "632128",
                DISTRICT_NAME: "寰寲鎾掓媺鏃忚嚜娌诲幙"
            }],
            632200: [{
                CITY_CODE: "632200",
                DISTRICT_CODE: "632221",
                DISTRICT_NAME: "闂ㄦ簮鍥炴棌鑷不鍘�"
            }, {
                CITY_CODE: "632200",
                DISTRICT_CODE: "632222",
                DISTRICT_NAME: "绁佽繛鍘�"
            }, {
                CITY_CODE: "632200",
                DISTRICT_CODE: "632223",
                DISTRICT_NAME: "娴锋檹鍘�"
            }, {
                CITY_CODE: "632200",
                DISTRICT_CODE: "632224",
                DISTRICT_NAME: "鍒氬療鍘�"
            }],
            632300: [{
                CITY_CODE: "632300",
                DISTRICT_CODE: "632321",
                DISTRICT_NAME: "鍚屼粊鍘�"
            }, {
                CITY_CODE: "632300",
                DISTRICT_CODE: "632322",
                DISTRICT_NAME: "灏栨墡鍘�"
            }, {
                CITY_CODE: "632300",
                DISTRICT_CODE: "632323",
                DISTRICT_NAME: "娉藉簱鍘�"
            }, {
                CITY_CODE: "632300",
                DISTRICT_CODE: "632324",
                DISTRICT_NAME: "娌冲崡钂欏彜鏃忚嚜娌诲幙"
            }],
            632500: [{
                CITY_CODE: "632500",
                DISTRICT_CODE: "632521",
                DISTRICT_NAME: "鍏卞拰鍘�"
            }, {
                CITY_CODE: "632500",
                DISTRICT_CODE: "632522",
                DISTRICT_NAME: "鍚屽痉鍘�"
            }, {
                CITY_CODE: "632500",
                DISTRICT_CODE: "632523",
                DISTRICT_NAME: "璐靛痉鍘�"
            }, {
                CITY_CODE: "632500",
                DISTRICT_CODE: "632524",
                DISTRICT_NAME: "鍏存捣鍘�"
            }, {
                CITY_CODE: "632500",
                DISTRICT_CODE: "632525",
                DISTRICT_NAME: "璐靛崡鍘�"
            }],
            632600: [{
                CITY_CODE: "632600",
                DISTRICT_CODE: "632621",
                DISTRICT_NAME: "鐜涙瞾鍘�"
            }, {
                CITY_CODE: "632600",
                DISTRICT_CODE: "632622",
                DISTRICT_NAME: "鐝帥鍘�"
            }, {
                CITY_CODE: "632600",
                DISTRICT_CODE: "632623",
                DISTRICT_NAME: "鐢樺痉鍘�"
            }, {
                CITY_CODE: "632600",
                DISTRICT_CODE: "632624",
                DISTRICT_NAME: "杈炬棩鍘�"
            }, {
                CITY_CODE: "632600",
                DISTRICT_CODE: "632625",
                DISTRICT_NAME: "涔呮不鍘�"
            }, {
                CITY_CODE: "632600",
                DISTRICT_CODE: "632626",
                DISTRICT_NAME: "鐜涘鍘�"
            }],
            632700: [{
                CITY_CODE: "632700",
                DISTRICT_CODE: "632721",
                DISTRICT_NAME: "鐜夋爲甯�"
            }, {
                CITY_CODE: "632700",
                DISTRICT_CODE: "632722",
                DISTRICT_NAME: "鏉傚鍘�"
            }, {
                CITY_CODE: "632700",
                DISTRICT_CODE: "632723",
                DISTRICT_NAME: "绉板鍘�"
            }, {
                CITY_CODE: "632700",
                DISTRICT_CODE: "632724",
                DISTRICT_NAME: "娌诲鍘�"
            }, {
                CITY_CODE: "632700",
                DISTRICT_CODE: "632725",
                DISTRICT_NAME: "鍥婅唉鍘�"
            }, {
                CITY_CODE: "632700",
                DISTRICT_CODE: "632726",
                DISTRICT_NAME: "鏇查夯鑾卞幙"
            }],
            632800: [{
                CITY_CODE: "632800",
                DISTRICT_CODE: "632802",
                DISTRICT_NAME: "寰蜂护鍝堝競"
            }, {
                CITY_CODE: "632800",
                DISTRICT_CODE: "632821",
                DISTRICT_NAME: "涔屽叞鍘�"
            }, {
                CITY_CODE: "632800",
                DISTRICT_CODE: "632822",
                DISTRICT_NAME: "閮藉叞鍘�"
            }, {
                CITY_CODE: "632800",
                DISTRICT_CODE: "632823",
                DISTRICT_NAME: "澶╁郴鍘�"
            }, {
                CITY_CODE: "632800",
                DISTRICT_CODE: "632824",
                DISTRICT_NAME: "澶ф煷鏃﹁濮�"
            }, {
                CITY_CODE: "632800",
                DISTRICT_CODE: "632825",
                DISTRICT_NAME: "鑼礀甯�"
            }],
            632900: [{
                CITY_CODE: "632900",
                DISTRICT_CODE: "632801",
                DISTRICT_NAME: "鏍煎皵鏈ㄥ競"
            }],
            640100: [{
                CITY_CODE: "640100",
                DISTRICT_CODE: "640104",
                DISTRICT_NAME: "鍏村簡鍖�"
            }, {
                CITY_CODE: "640100",
                DISTRICT_CODE: "640105",
                DISTRICT_NAME: "瑗垮鍖�"
            }, {
                CITY_CODE: "640100",
                DISTRICT_CODE: "640106",
                DISTRICT_NAME: "閲戝嚖鍖�"
            }, {
                CITY_CODE: "640100",
                DISTRICT_CODE: "640121",
                DISTRICT_NAME: "姘稿畞鍘�"
            }, {
                CITY_CODE: "640100",
                DISTRICT_CODE: "640122",
                DISTRICT_NAME: "璐哄叞鍘�"
            }, {
                CITY_CODE: "640100",
                DISTRICT_CODE: "640181",
                DISTRICT_NAME: "鐏垫甯�"
            }],
            640200: [{
                CITY_CODE: "640200",
                DISTRICT_CODE: "640202",
                DISTRICT_NAME: "澶ф鍙ｅ尯"
            }, {
                CITY_CODE: "640200",
                DISTRICT_CODE: "640205",
                DISTRICT_NAME: "鎯犲啘鍖�"
            }, {
                CITY_CODE: "640200",
                DISTRICT_CODE: "640221",
                DISTRICT_NAME: "骞崇綏鍘�"
            }],
            640300: [{
                CITY_CODE: "640300",
                DISTRICT_CODE: "640302",
                DISTRICT_NAME: "鍒╅€氬尯"
            }, {
                CITY_CODE: "640300",
                DISTRICT_CODE: "640303",
                DISTRICT_NAME: "绾㈠鍫″尯"
            }, {
                CITY_CODE: "640300",
                DISTRICT_CODE: "640323",
                DISTRICT_NAME: "鐩愭睜鍘�"
            }, {
                CITY_CODE: "640300",
                DISTRICT_CODE: "640324",
                DISTRICT_NAME: "鍚屽績鍘�"
            }, {
                CITY_CODE: "640300",
                DISTRICT_CODE: "640381",
                DISTRICT_NAME: "闈掗摐宄″競"
            }],
            640400: [{
                CITY_CODE: "640400",
                DISTRICT_CODE: "640402",
                DISTRICT_NAME: "鍘熷窞鍖�"
            }, {
                CITY_CODE: "640400",
                DISTRICT_CODE: "640422",
                DISTRICT_NAME: "瑗垮悏鍘�"
            }, {
                CITY_CODE: "640400",
                DISTRICT_CODE: "640423",
                DISTRICT_NAME: "闅嗗痉鍘�"
            }, {
                CITY_CODE: "640400",
                DISTRICT_CODE: "640424",
                DISTRICT_NAME: "娉炬簮鍘�"
            }, {
                CITY_CODE: "640400",
                DISTRICT_CODE: "640425",
                DISTRICT_NAME: "褰槼鍘�"
            }],
            640500: [{
                CITY_CODE: "640500",
                DISTRICT_CODE: "640502",
                DISTRICT_NAME: "娌欏潯澶村尯"
            }, {
                CITY_CODE: "640500",
                DISTRICT_CODE: "640521",
                DISTRICT_NAME: "涓畞鍘�"
            }, {
                CITY_CODE: "640500",
                DISTRICT_CODE: "640522",
                DISTRICT_NAME: "娴峰師鍘�"
            }],
            650100: [{
                CITY_CODE: "650100",
                DISTRICT_CODE: "650102",
                DISTRICT_NAME: "澶╁北鍖�"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650103",
                DISTRICT_NAME: "娌欎緷宸村厠鍖�"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650104",
                DISTRICT_NAME: "鏂板競鍖�"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650105",
                DISTRICT_NAME: "姘寸（娌熷尯"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650106",
                DISTRICT_NAME: "澶村悲娌冲尯"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650107",
                DISTRICT_NAME: "杈惧潅鍩庡尯"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650109",
                DISTRICT_NAME: "绫充笢鍖�"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650121",
                DISTRICT_NAME: "涔岄瞾鏈ㄩ綈鍘�"
            }, {
                CITY_CODE: "650100",
                DISTRICT_CODE: "650111",
                DISTRICT_NAME: "鍐滃崄浜屽笀"
            }],
            650200: [{
                CITY_CODE: "650200",
                DISTRICT_CODE: "650203",
                DISTRICT_NAME: "鍏嬫媺鐜涗緷鍖�"
            }, {
                CITY_CODE: "650200",
                DISTRICT_CODE: "650204",
                DISTRICT_NAME: "鐧界⒈婊╁尯"
            }, {
                CITY_CODE: "650200",
                DISTRICT_CODE: "650205",
                DISTRICT_NAME: "涔屽皵绂惧尯"
            }, {
                CITY_CODE: "650200",
                DISTRICT_CODE: "650206",
                DISTRICT_NAME: "鍜屽竷鍏嬭禌灏旇挋鍙よ嚜娌诲幙"
            }],
            652100: [{
                CITY_CODE: "652100",
                DISTRICT_CODE: "652101",
                DISTRICT_NAME: "鍚愰瞾鐣競"
            }, {
                CITY_CODE: "652100",
                DISTRICT_CODE: "652122",
                DISTRICT_NAME: "閯杽鍘�"
            }, {
                CITY_CODE: "652100",
                DISTRICT_CODE: "652123",
                DISTRICT_NAME: "鎵樺厠閫婂幙"
            }, {
                CITY_CODE: "652100",
                DISTRICT_CODE: "652124",
                DISTRICT_NAME: "鍚愬搱鐭虫补"
            }],
            652200: [{
                CITY_CODE: "652200",
                DISTRICT_CODE: "652201",
                DISTRICT_NAME: "鍝堝瘑甯�"
            }, {
                CITY_CODE: "652200",
                DISTRICT_CODE: "652222",
                DISTRICT_NAME: "宸撮噷鍧ゅ搱钀ㄥ厠鑷不鍘�"
            }, {
                CITY_CODE: "652200",
                DISTRICT_CODE: "652223",
                DISTRICT_NAME: "浼婂惥鍘�"
            }, {
                CITY_CODE: "652200",
                DISTRICT_CODE: "652224",
                DISTRICT_NAME: "涓夐亾宀�"
            }],
            652300: [{
                CITY_CODE: "652300",
                DISTRICT_CODE: "652301",
                DISTRICT_NAME: "鏄屽悏甯�"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652302",
                DISTRICT_NAME: "闃滃悍甯�"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652323",
                DISTRICT_NAME: "鍛煎浘澹佸幙"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652324",
                DISTRICT_NAME: "鐜涚撼鏂幙"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652325",
                DISTRICT_NAME: "濂囧彴鍘�"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652327",
                DISTRICT_NAME: "鍚夋湪钀ㄥ皵鍘�"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652328",
                DISTRICT_NAME: "鏈ㄥ瀿鍝堣惃鍏嬭嚜娌诲幙"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652329",
                DISTRICT_NAME: "浜斿娓犲競"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652330",
                DISTRICT_NAME: "鑺宠崏婀�"
            }, {
                CITY_CODE: "652300",
                DISTRICT_CODE: "652331",
                DISTRICT_NAME: "鏂版箹"
            }],
            652700: [{
                CITY_CODE: "652700",
                DISTRICT_CODE: "652701",
                DISTRICT_NAME: "鍗氫箰甯�"
            }, {
                CITY_CODE: "652700",
                DISTRICT_CODE: "652722",
                DISTRICT_NAME: "绮炬渤鍘�"
            }, {
                CITY_CODE: "652700",
                DISTRICT_CODE: "652723",
                DISTRICT_NAME: "娓╂硥鍘�"
            }, {
                CITY_CODE: "652700",
                DISTRICT_CODE: "652724",
                DISTRICT_NAME: "闃挎媺灞卞彛甯�"
            }],
            652800: [{
                CITY_CODE: "652800",
                DISTRICT_CODE: "652801",
                DISTRICT_NAME: "搴撳皵鍕掑競"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652822",
                DISTRICT_NAME: "杞彴鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652823",
                DISTRICT_NAME: "灏夌妬鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652824",
                DISTRICT_NAME: "鑻ョ緦鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652825",
                DISTRICT_NAME: "涓旀湯鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652826",
                DISTRICT_NAME: "鐒夎€嗗洖鏃忚嚜娌诲幙"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652827",
                DISTRICT_NAME: "鍜岄潤鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652828",
                DISTRICT_NAME: "鍜岀鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652829",
                DISTRICT_NAME: "鍗氭箹鍘�"
            }, {
                CITY_CODE: "652800",
                DISTRICT_CODE: "652830",
                DISTRICT_NAME: "閾侀棬鍏冲競"
            }],
            652900: [{
                CITY_CODE: "652900",
                DISTRICT_CODE: "652901",
                DISTRICT_NAME: "闃垮厠鑻忓競"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652922",
                DISTRICT_NAME: "娓╁鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652923",
                DISTRICT_NAME: "搴撹溅鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652924",
                DISTRICT_NAME: "娌欓泤鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652925",
                DISTRICT_NAME: "鏂板拰鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652926",
                DISTRICT_NAME: "鎷滃煄鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652927",
                DISTRICT_NAME: "涔屼粈鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652928",
                DISTRICT_NAME: "闃跨摝鎻愬幙"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652929",
                DISTRICT_NAME: "鏌潽鍘�"
            }, {
                CITY_CODE: "652900",
                DISTRICT_CODE: "652930",
                DISTRICT_NAME: "闃挎媺灏斿競"
            }],
            653000: [{
                CITY_CODE: "653000",
                DISTRICT_CODE: "653001",
                DISTRICT_NAME: "闃垮浘浠€甯�"
            }, {
                CITY_CODE: "653000",
                DISTRICT_CODE: "653022",
                DISTRICT_NAME: "闃垮厠闄跺幙"
            }, {
                CITY_CODE: "653000",
                DISTRICT_CODE: "653023",
                DISTRICT_NAME: "闃垮悎濂囧幙"
            }, {
                CITY_CODE: "653000",
                DISTRICT_CODE: "653024",
                DISTRICT_NAME: "涔屾伆鍘�"
            }],
            653100: [{
                CITY_CODE: "653100",
                DISTRICT_CODE: "653101",
                DISTRICT_NAME: "鍠€浠€甯�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653121",
                DISTRICT_NAME: "鐤忛檮鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653122",
                DISTRICT_NAME: "鐤忓嫆鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653123",
                DISTRICT_NAME: "鑻卞悏娌欏幙"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653124",
                DISTRICT_NAME: "娉芥櫘鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653125",
                DISTRICT_NAME: "鑾庤溅鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653126",
                DISTRICT_NAME: "鍙跺煄鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653127",
                DISTRICT_NAME: "楹︾洊鎻愬幙"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653128",
                DISTRICT_NAME: "宀虫櫘婀栧幙"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653129",
                DISTRICT_NAME: "浼藉笀鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653130",
                DISTRICT_NAME: "宸存鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653131",
                DISTRICT_NAME: "濉斾粈搴撳皵骞插鍚夊厠鑷不鍘�"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653132",
                DISTRICT_NAME: "濂庝緷宸存牸鐭虫补"
            }, {
                CITY_CODE: "653100",
                DISTRICT_CODE: "653133",
                DISTRICT_NAME: "鍥炬湪鑸掑厠甯�"
            }],
            653200: [{
                CITY_CODE: "653200",
                DISTRICT_CODE: "653201",
                DISTRICT_NAME: "鍜岀敯甯�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653221",
                DISTRICT_NAME: "鍜岀敯鍘�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653222",
                DISTRICT_NAME: "澧ㄧ帀鍘�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653223",
                DISTRICT_NAME: "鐨北鍘�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653224",
                DISTRICT_NAME: "娲涙郸鍘�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653225",
                DISTRICT_NAME: "绛栧嫆鍘�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653226",
                DISTRICT_NAME: "浜庣敯鍘�"
            }, {
                CITY_CODE: "653200",
                DISTRICT_CODE: "653227",
                DISTRICT_NAME: "姘戜赴鍘�"
            }],
            654000: [{
                CITY_CODE: "654000",
                DISTRICT_CODE: "654002",
                DISTRICT_NAME: "浼婂畞甯�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654003",
                DISTRICT_NAME: "濂庡悲甯�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654021",
                DISTRICT_NAME: "浼婂畞鍘�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654022",
                DISTRICT_NAME: "瀵熷竷鏌ュ皵閿′集鑷不鍘�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654023",
                DISTRICT_NAME: "闇嶅煄鍘�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654024",
                DISTRICT_NAME: "宸╃暀鍘�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654025",
                DISTRICT_NAME: "鏂版簮鍘�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654026",
                DISTRICT_NAME: "鏄嫃鍘�"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654027",
                DISTRICT_NAME: "鐗瑰厠鏂幙"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654028",
                DISTRICT_NAME: "灏煎嫆鍏嬪幙"
            }, {
                CITY_CODE: "654000",
                DISTRICT_CODE: "654029",
                DISTRICT_NAME: "闇嶅皵鏋滄柉甯�"
            }],
            654200: [{
                CITY_CODE: "654200",
                DISTRICT_CODE: "654201",
                DISTRICT_NAME: "濉斿煄甯�"
            }, {
                CITY_CODE: "654200",
                DISTRICT_CODE: "654221",
                DISTRICT_NAME: "棰濇晱鍘�"
            }, {
                CITY_CODE: "654200",
                DISTRICT_CODE: "654224",
                DISTRICT_NAME: "鎵橀噷鍘�"
            }, {
                CITY_CODE: "654200",
                DISTRICT_CODE: "654225",
                DISTRICT_NAME: "瑁曟皯鍘�"
            }],
            654300: [{
                CITY_CODE: "654300",
                DISTRICT_CODE: "654301",
                DISTRICT_NAME: "闃垮嫆娉板競"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654321",
                DISTRICT_NAME: "甯冨皵娲ュ幙"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654322",
                DISTRICT_NAME: "瀵岃暣鍘�"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654323",
                DISTRICT_NAME: "绂忔捣鍘�"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654324",
                DISTRICT_NAME: "鍝堝反娌冲幙"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654325",
                DISTRICT_NAME: "闈掓渤鍘�"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654326",
                DISTRICT_NAME: "鍚夋湪涔冨幙"
            }, {
                CITY_CODE: "654300",
                DISTRICT_CODE: "654327",
                DISTRICT_NAME: "鍖楀悲甯�"
            }],
            654400: [{
                CITY_CODE: "654400",
                DISTRICT_CODE: "654401",
                DISTRICT_NAME: "濂庡悲鍖�"
            }, {
                CITY_CODE: "654400",
                DISTRICT_CODE: "654402",
                DISTRICT_NAME: "鍥㈠満"
            }, {
                CITY_CODE: "654400",
                DISTRICT_CODE: "654403",
                DISTRICT_NAME: "涔岃嫃甯�"
            }, {
                CITY_CODE: "654400",
                DISTRICT_CODE: "654404",
                DISTRICT_NAME: "鐙北瀛愬尯"
            }],
            659001: [{
                CITY_CODE: "659001",
                DISTRICT_CODE: "659001",
                DISTRICT_NAME: "鐭虫渤瀛愬競"
            }, {
                CITY_CODE: "659001",
                DISTRICT_CODE: "659011",
                DISTRICT_NAME: "娌欐咕鍘�"
            }]
        },
        PROVINCE_LIST: [{
            ESS_PROVINCE_CODE: "11",
            PROVINCE_CODE: "110000",
            PROVINCE_NAME: "鍖椾含"
        }, {
            ESS_PROVINCE_CODE: "13",
            PROVINCE_CODE: "120000",
            PROVINCE_NAME: "澶╂触"
        }, {
            ESS_PROVINCE_CODE: "18",
            PROVINCE_CODE: "130000",
            PROVINCE_NAME: "娌冲寳"
        }, {
            ESS_PROVINCE_CODE: "19",
            PROVINCE_CODE: "140000",
            PROVINCE_NAME: "灞辫タ"
        }, {
            ESS_PROVINCE_CODE: "10",
            PROVINCE_CODE: "150000",
            PROVINCE_NAME: "鍐呰挋鍙�"
        }, {
            ESS_PROVINCE_CODE: "91",
            PROVINCE_CODE: "210000",
            PROVINCE_NAME: "杈藉畞"
        }, {
            ESS_PROVINCE_CODE: "90",
            PROVINCE_CODE: "220000",
            PROVINCE_NAME: "鍚夋灄"
        }, {
            ESS_PROVINCE_CODE: "97",
            PROVINCE_CODE: "230000",
            PROVINCE_NAME: "榛戦緳姹�"
        }, {
            ESS_PROVINCE_CODE: "31",
            PROVINCE_CODE: "310000",
            PROVINCE_NAME: "涓婃捣"
        }, {
            ESS_PROVINCE_CODE: "34",
            PROVINCE_CODE: "320000",
            PROVINCE_NAME: "姹熻嫃"
        }, {
            ESS_PROVINCE_CODE: "36",
            PROVINCE_CODE: "330000",
            PROVINCE_NAME: "娴欐睙"
        }, {
            ESS_PROVINCE_CODE: "30",
            PROVINCE_CODE: "340000",
            PROVINCE_NAME: "瀹夊窘"
        }, {
            ESS_PROVINCE_CODE: "38",
            PROVINCE_CODE: "350000",
            PROVINCE_NAME: "绂忓缓"
        }, {
            ESS_PROVINCE_CODE: "75",
            PROVINCE_CODE: "360000",
            PROVINCE_NAME: "姹熻タ"
        }, {
            ESS_PROVINCE_CODE: "17",
            PROVINCE_CODE: "370000",
            PROVINCE_NAME: "灞变笢"
        }, {
            ESS_PROVINCE_CODE: "76",
            PROVINCE_CODE: "410000",
            PROVINCE_NAME: "娌冲崡"
        }, {
            ESS_PROVINCE_CODE: "71",
            PROVINCE_CODE: "420000",
            PROVINCE_NAME: "婀栧寳"
        }, {
            ESS_PROVINCE_CODE: "74",
            PROVINCE_CODE: "430000",
            PROVINCE_NAME: "婀栧崡"
        }, {
            ESS_PROVINCE_CODE: "51",
            PROVINCE_CODE: "440000",
            PROVINCE_NAME: "骞夸笢"
        }, {
            ESS_PROVINCE_CODE: "59",
            PROVINCE_CODE: "450000",
            PROVINCE_NAME: "骞胯タ"
        }, {
            ESS_PROVINCE_CODE: "50",
            PROVINCE_CODE: "460000",
            PROVINCE_NAME: "娴峰崡"
        }, {
            ESS_PROVINCE_CODE: "83",
            PROVINCE_CODE: "500000",
            PROVINCE_NAME: "閲嶅簡"
        }, {
            ESS_PROVINCE_CODE: "81",
            PROVINCE_CODE: "510000",
            PROVINCE_NAME: "鍥涘窛"
        }, {
            ESS_PROVINCE_CODE: "85",
            PROVINCE_CODE: "520000",
            PROVINCE_NAME: "璐靛窞"
        }, {
            ESS_PROVINCE_CODE: "86",
            PROVINCE_CODE: "530000",
            PROVINCE_NAME: "浜戝崡"
        }, {
            ESS_PROVINCE_CODE: "79",
            PROVINCE_CODE: "540000",
            PROVINCE_NAME: "瑗胯棌"
        }, {
            ESS_PROVINCE_CODE: "84",
            PROVINCE_CODE: "610000",
            PROVINCE_NAME: "闄曡タ"
        }, {
            ESS_PROVINCE_CODE: "87",
            PROVINCE_CODE: "620000",
            PROVINCE_NAME: "鐢樿們"
        }, {
            ESS_PROVINCE_CODE: "70",
            PROVINCE_CODE: "630000",
            PROVINCE_NAME: "闈掓捣"
        }, {
            ESS_PROVINCE_CODE: "88",
            PROVINCE_CODE: "640000",
            PROVINCE_NAME: "瀹佸"
        }, {
            ESS_PROVINCE_CODE: "89",
            PROVINCE_CODE: "650000",
            PROVINCE_NAME: "鏂扮枂"
        }],
        PROVINCE_MAP: {
            110000: [{
                CITY_CODE: "110100",
                CITY_NAME: "鍖椾含甯�",
                ESS_CITY_CODE: "110",
                PROVINCE_CODE: "110000"
            }],
            120000: [{
                CITY_CODE: "120100",
                CITY_NAME: "澶╂触甯�",
                ESS_CITY_CODE: "130",
                PROVINCE_CODE: "120000"
            }],
            130000: [{
                CITY_CODE: "130100",
                CITY_NAME: "鐭冲搴勫競",
                ESS_CITY_CODE: "188",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130200",
                CITY_NAME: "鍞愬北甯�",
                ESS_CITY_CODE: "181",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130300",
                CITY_NAME: "绉︾殗宀涘競",
                ESS_CITY_CODE: "182",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130400",
                CITY_NAME: "閭兏甯�",
                ESS_CITY_CODE: "186",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130500",
                CITY_NAME: "閭㈠彴甯�",
                ESS_CITY_CODE: "185",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130600",
                CITY_NAME: "淇濆畾甯�",
                ESS_CITY_CODE: "187",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130700",
                CITY_NAME: "寮犲鍙ｅ競",
                ESS_CITY_CODE: "184",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130800",
                CITY_NAME: "鎵垮痉甯�",
                ESS_CITY_CODE: "189",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "130900",
                CITY_NAME: "娌у窞甯�",
                ESS_CITY_CODE: "180",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "131000",
                CITY_NAME: "寤婂潑甯�",
                ESS_CITY_CODE: "183",
                PROVINCE_CODE: "130000"
            }, {
                CITY_CODE: "131100",
                CITY_NAME: "琛℃按甯�",
                ESS_CITY_CODE: "720",
                PROVINCE_CODE: "130000"
            }],
            140000: [{
                CITY_CODE: "140100",
                CITY_NAME: "澶師甯�",
                ESS_CITY_CODE: "190",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140200",
                CITY_NAME: "澶у悓甯�",
                ESS_CITY_CODE: "193",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140300",
                CITY_NAME: "闃虫硥甯�",
                ESS_CITY_CODE: "192",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140400",
                CITY_NAME: "闀挎不甯�",
                ESS_CITY_CODE: "195",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140500",
                CITY_NAME: "鏅嬪煄甯�",
                ESS_CITY_CODE: "194",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140600",
                CITY_NAME: "鏈斿窞甯�",
                ESS_CITY_CODE: "199",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140700",
                CITY_NAME: "鏅嬩腑甯�",
                ESS_CITY_CODE: "191",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140800",
                CITY_NAME: "杩愬煄甯�",
                ESS_CITY_CODE: "196",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "140900",
                CITY_NAME: "蹇诲窞甯�",
                ESS_CITY_CODE: "198",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "141000",
                CITY_NAME: "涓存本甯�",
                ESS_CITY_CODE: "197",
                PROVINCE_CODE: "140000"
            }, {
                CITY_CODE: "141100",
                CITY_NAME: "鍚曟甯�",
                ESS_CITY_CODE: "200",
                PROVINCE_CODE: "140000"
            }],
            150000: [{
                CITY_CODE: "150100",
                CITY_NAME: "鍛煎拰娴╃壒甯�",
                ESS_CITY_CODE: "101",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150200",
                CITY_NAME: "鍖呭ご甯�",
                ESS_CITY_CODE: "102",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150300",
                CITY_NAME: "涔屾捣甯�",
                ESS_CITY_CODE: "106",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150400",
                CITY_NAME: "璧ゅ嘲甯�",
                ESS_CITY_CODE: "107",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150500",
                CITY_NAME: "閫氳窘甯�",
                ESS_CITY_CODE: "109",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150600",
                CITY_NAME: "閯傚皵澶氭柉甯�",
                ESS_CITY_CODE: "104",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150700",
                CITY_NAME: "鍛间鸡璐濆皵甯�",
                ESS_CITY_CODE: "108",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150800",
                CITY_NAME: "宸村溅娣栧皵甯�",
                ESS_CITY_CODE: "105",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "150900",
                CITY_NAME: "涔屽叞瀵熷竷甯�",
                ESS_CITY_CODE: "103",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "152200",
                CITY_NAME: "鍏村畨鐩�",
                ESS_CITY_CODE: "113",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "152500",
                CITY_NAME: "閿℃灄閮嫆鐩�",
                ESS_CITY_CODE: "111",
                PROVINCE_CODE: "150000"
            }, {
                CITY_CODE: "152900",
                CITY_NAME: "闃挎媺鍠勭洘",
                ESS_CITY_CODE: "114",
                PROVINCE_CODE: "150000"
            }],
            210000: [{
                CITY_CODE: "210100",
                CITY_NAME: "娌堥槼甯�",
                ESS_CITY_CODE: "910",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210200",
                CITY_NAME: "澶ц繛甯�",
                ESS_CITY_CODE: "940",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210300",
                CITY_NAME: "闉嶅北甯�",
                ESS_CITY_CODE: "912",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210400",
                CITY_NAME: "鎶氶『甯�",
                ESS_CITY_CODE: "913",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210500",
                CITY_NAME: "鏈邯甯�",
                ESS_CITY_CODE: "914",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210600",
                CITY_NAME: "涓逛笢甯�",
                ESS_CITY_CODE: "915",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210700",
                CITY_NAME: "閿﹀窞甯�",
                ESS_CITY_CODE: "916",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210800",
                CITY_NAME: "钀ュ彛甯�",
                ESS_CITY_CODE: "917",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "210900",
                CITY_NAME: "闃滄柊甯�",
                ESS_CITY_CODE: "918",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211000",
                CITY_NAME: "杈介槼甯�",
                ESS_CITY_CODE: "919",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211100",
                CITY_NAME: "鐩橀敠甯�",
                ESS_CITY_CODE: "921",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211200",
                CITY_NAME: "閾佸箔甯�",
                ESS_CITY_CODE: "911",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211300",
                CITY_NAME: "鏈濋槼甯�",
                ESS_CITY_CODE: "920",
                PROVINCE_CODE: "210000"
            }, {
                CITY_CODE: "211400",
                CITY_NAME: "钁姦宀涘競",
                ESS_CITY_CODE: "922",
                PROVINCE_CODE: "210000"
            }],
            220000: [{
                CITY_CODE: "220100",
                CITY_NAME: "闀挎槬甯�",
                ESS_CITY_CODE: "901",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220200",
                CITY_NAME: "鍚夋灄甯�",
                ESS_CITY_CODE: "902",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220300",
                CITY_NAME: "鍥涘钩甯�",
                ESS_CITY_CODE: "903",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220400",
                CITY_NAME: "杈芥簮甯�",
                ESS_CITY_CODE: "906",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220500",
                CITY_NAME: "閫氬寲甯�",
                ESS_CITY_CODE: "905",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220600",
                CITY_NAME: "鐧藉北甯�",
                ESS_CITY_CODE: "908",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220700",
                CITY_NAME: "鏉惧師甯�",
                ESS_CITY_CODE: "904",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "220800",
                CITY_NAME: "鐧藉煄甯�",
                ESS_CITY_CODE: "907",
                PROVINCE_CODE: "220000"
            }, {
                CITY_CODE: "222400",
                CITY_NAME: "寤惰竟鏈濋矞鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "909",
                PROVINCE_CODE: "220000"
            }],
            230000: [{
                CITY_CODE: "230100",
                CITY_NAME: "鍝堝皵婊ㄥ競",
                ESS_CITY_CODE: "971",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230200",
                CITY_NAME: "榻愰綈鍝堝皵甯�",
                ESS_CITY_CODE: "973",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230300",
                CITY_NAME: "楦¤タ甯�",
                ESS_CITY_CODE: "991",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230400",
                CITY_NAME: "楣ゅ矖甯�",
                ESS_CITY_CODE: "993",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230500",
                CITY_NAME: "鍙岄腑灞卞競",
                ESS_CITY_CODE: "994",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230600",
                CITY_NAME: "澶у簡甯�",
                ESS_CITY_CODE: "981",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230700",
                CITY_NAME: "浼婃槬甯�",
                ESS_CITY_CODE: "996",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230800",
                CITY_NAME: "浣虫湪鏂競",
                ESS_CITY_CODE: "976",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "230900",
                CITY_NAME: "涓冨彴娌冲競",
                ESS_CITY_CODE: "992",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "231000",
                CITY_NAME: "鐗′腹姹熷競",
                ESS_CITY_CODE: "988",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "231100",
                CITY_NAME: "榛戞渤甯�",
                ESS_CITY_CODE: "990",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "231200",
                CITY_NAME: "缁ュ寲甯�",
                ESS_CITY_CODE: "989",
                PROVINCE_CODE: "230000"
            }, {
                CITY_CODE: "232700",
                CITY_NAME: "澶у叴瀹夊箔鍦板尯",
                ESS_CITY_CODE: "995",
                PROVINCE_CODE: "230000"
            }],
            310000: [{
                CITY_CODE: "310100",
                CITY_NAME: "涓婃捣甯�",
                ESS_CITY_CODE: "310",
                PROVINCE_CODE: "310000"
            }],
            320000: [{
                CITY_CODE: "320100",
                CITY_NAME: "鍗椾含甯�",
                ESS_CITY_CODE: "340",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320200",
                CITY_NAME: "鏃犻敗甯�",
                ESS_CITY_CODE: "330",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320300",
                CITY_NAME: "寰愬窞甯�",
                ESS_CITY_CODE: "350",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320400",
                CITY_NAME: "甯稿窞甯�",
                ESS_CITY_CODE: "440",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320500",
                CITY_NAME: "鑻忓窞甯�",
                ESS_CITY_CODE: "450",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320600",
                CITY_NAME: "鍗楅€氬競",
                ESS_CITY_CODE: "358",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320700",
                CITY_NAME: "杩炰簯娓競",
                ESS_CITY_CODE: "346",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320800",
                CITY_NAME: "娣畨甯�",
                ESS_CITY_CODE: "354",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "320900",
                CITY_NAME: "鐩愬煄甯�",
                ESS_CITY_CODE: "348",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321000",
                CITY_NAME: "鎵窞甯�",
                ESS_CITY_CODE: "430",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321100",
                CITY_NAME: "闀囨睙甯�",
                ESS_CITY_CODE: "343",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321200",
                CITY_NAME: "娉板窞甯�",
                ESS_CITY_CODE: "445",
                PROVINCE_CODE: "320000"
            }, {
                CITY_CODE: "321300",
                CITY_NAME: "瀹胯縼甯�",
                ESS_CITY_CODE: "349",
                PROVINCE_CODE: "320000"
            }],
            330000: [{
                CITY_CODE: "330100",
                CITY_NAME: "鏉窞甯�",
                ESS_CITY_CODE: "360",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330200",
                CITY_NAME: "瀹佹尝甯�",
                ESS_CITY_CODE: "370",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330300",
                CITY_NAME: "娓╁窞甯�",
                ESS_CITY_CODE: "470",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330400",
                CITY_NAME: "鍢夊叴甯�",
                ESS_CITY_CODE: "363",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330500",
                CITY_NAME: "婀栧窞甯�",
                ESS_CITY_CODE: "362",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330600",
                CITY_NAME: "缁嶅叴甯�",
                ESS_CITY_CODE: "365",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330700",
                CITY_NAME: "閲戝崕甯�",
                ESS_CITY_CODE: "367",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330800",
                CITY_NAME: "琛㈠窞甯�",
                ESS_CITY_CODE: "468",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "330900",
                CITY_NAME: "鑸熷北甯�",
                ESS_CITY_CODE: "364",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "331000",
                CITY_NAME: "鍙板窞甯�",
                ESS_CITY_CODE: "476",
                PROVINCE_CODE: "330000"
            }, {
                CITY_CODE: "331100",
                CITY_NAME: "涓芥按甯�",
                ESS_CITY_CODE: "469",
                PROVINCE_CODE: "330000"
            }],
            340000: [{
                CITY_CODE: "340100",
                CITY_NAME: "鍚堣偉甯�",
                ESS_CITY_CODE: "305",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340200",
                CITY_NAME: "鑺滄箹甯�",
                ESS_CITY_CODE: "303",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340300",
                CITY_NAME: "铓屽煚甯�",
                ESS_CITY_CODE: "301",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340400",
                CITY_NAME: "娣崡甯�",
                ESS_CITY_CODE: "307",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340500",
                CITY_NAME: "椹瀺灞卞競",
                ESS_CITY_CODE: "300",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340600",
                CITY_NAME: "娣寳甯�",
                ESS_CITY_CODE: "314",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340700",
                CITY_NAME: "閾滈櫟甯�",
                ESS_CITY_CODE: "308",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "340800",
                CITY_NAME: "瀹夊簡甯�",
                ESS_CITY_CODE: "302",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341000",
                CITY_NAME: "榛勫北甯�",
                ESS_CITY_CODE: "316",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341100",
                CITY_NAME: "婊佸窞甯�",
                ESS_CITY_CODE: "312",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341200",
                CITY_NAME: "闃滈槼甯�",
                ESS_CITY_CODE: "306",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341300",
                CITY_NAME: "瀹垮窞甯�",
                ESS_CITY_CODE: "313",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341500",
                CITY_NAME: "鍏畨甯�",
                ESS_CITY_CODE: "304",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341600",
                CITY_NAME: "浜冲窞甯�",
                ESS_CITY_CODE: "318",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341700",
                CITY_NAME: "姹犲窞甯�",
                ESS_CITY_CODE: "317",
                PROVINCE_CODE: "340000"
            }, {
                CITY_CODE: "341800",
                CITY_NAME: "瀹ｅ煄甯�",
                ESS_CITY_CODE: "311",
                PROVINCE_CODE: "340000"
            }],
            350000: [{
                CITY_CODE: "350100",
                CITY_NAME: "绂忓窞甯�",
                ESS_CITY_CODE: "380",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350200",
                CITY_NAME: "鍘﹂棬甯�",
                ESS_CITY_CODE: "390",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350300",
                CITY_NAME: "鑾嗙敯甯�",
                ESS_CITY_CODE: "385",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350400",
                CITY_NAME: "涓夋槑甯�",
                ESS_CITY_CODE: "389",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350500",
                CITY_NAME: "娉夊窞甯�",
                ESS_CITY_CODE: "480",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350600",
                CITY_NAME: "婕冲窞甯�",
                ESS_CITY_CODE: "395",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350700",
                CITY_NAME: "鍗楀钩甯�",
                ESS_CITY_CODE: "387",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350800",
                CITY_NAME: "榫欏博甯�",
                ESS_CITY_CODE: "384",
                PROVINCE_CODE: "350000"
            }, {
                CITY_CODE: "350900",
                CITY_NAME: "瀹佸痉甯�",
                ESS_CITY_CODE: "386",
                PROVINCE_CODE: "350000"
            }],
            360000: [{
                CITY_CODE: "360100",
                CITY_NAME: "鍗楁槍甯�",
                ESS_CITY_CODE: "750",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360200",
                CITY_NAME: "鏅痉闀囧競",
                ESS_CITY_CODE: "740",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360300",
                CITY_NAME: "钀嶄埂甯�",
                ESS_CITY_CODE: "758",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360400",
                CITY_NAME: "涔濇睙甯�",
                ESS_CITY_CODE: "755",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360500",
                CITY_NAME: "鏂颁綑甯�",
                ESS_CITY_CODE: "753",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360600",
                CITY_NAME: "楣版江甯�",
                ESS_CITY_CODE: "754",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360700",
                CITY_NAME: "璧ｅ窞甯�",
                ESS_CITY_CODE: "752",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360800",
                CITY_NAME: "鍚夊畨甯�",
                ESS_CITY_CODE: "751",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "360900",
                CITY_NAME: "瀹滄槬甯�",
                ESS_CITY_CODE: "756",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "361000",
                CITY_NAME: "鎶氬窞甯�",
                ESS_CITY_CODE: "759",
                PROVINCE_CODE: "360000"
            }, {
                CITY_CODE: "361100",
                CITY_NAME: "涓婇ザ甯�",
                ESS_CITY_CODE: "757",
                PROVINCE_CODE: "360000"
            }],
            370000: [{
                CITY_CODE: "370100",
                CITY_NAME: "娴庡崡甯�",
                ESS_CITY_CODE: "170",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370200",
                CITY_NAME: "闈掑矝甯�",
                ESS_CITY_CODE: "166",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370300",
                CITY_NAME: "娣勫崥甯�",
                ESS_CITY_CODE: "150",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370400",
                CITY_NAME: "鏋ｅ簞甯�",
                ESS_CITY_CODE: "157",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370500",
                CITY_NAME: "涓滆惀甯�",
                ESS_CITY_CODE: "156",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370600",
                CITY_NAME: "鐑熷彴甯�",
                ESS_CITY_CODE: "161",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370700",
                CITY_NAME: "娼嶅潑甯�",
                ESS_CITY_CODE: "155",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370800",
                CITY_NAME: "娴庡畞甯�",
                ESS_CITY_CODE: "158",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "370900",
                CITY_NAME: "娉板畨甯�",
                ESS_CITY_CODE: "172",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371000",
                CITY_NAME: "濞佹捣甯�",
                ESS_CITY_CODE: "152",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371100",
                CITY_NAME: "鏃ョ収甯�",
                ESS_CITY_CODE: "154",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371200",
                CITY_NAME: "鑾辫姕甯�",
                ESS_CITY_CODE: "160",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371300",
                CITY_NAME: "涓存矀甯�",
                ESS_CITY_CODE: "153",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371400",
                CITY_NAME: "寰峰窞甯�",
                ESS_CITY_CODE: "173",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371500",
                CITY_NAME: "鑱婂煄甯�",
                ESS_CITY_CODE: "174",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371600",
                CITY_NAME: "婊ㄥ窞甯�",
                ESS_CITY_CODE: "151",
                PROVINCE_CODE: "370000"
            }, {
                CITY_CODE: "371700",
                CITY_NAME: "鑿忔辰甯�",
                ESS_CITY_CODE: "159",
                PROVINCE_CODE: "370000"
            }],
            410000: [{
                CITY_CODE: "410100",
                CITY_NAME: "閮戝窞甯�",
                ESS_CITY_CODE: "760",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410200",
                CITY_NAME: "寮€灏佸競",
                ESS_CITY_CODE: "762",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410300",
                CITY_NAME: "娲涢槼甯�",
                ESS_CITY_CODE: "761",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410400",
                CITY_NAME: "骞抽《灞卞競",
                ESS_CITY_CODE: "769",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410500",
                CITY_NAME: "瀹夐槼甯�",
                ESS_CITY_CODE: "767",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410600",
                CITY_NAME: "楣ゅ甯�",
                ESS_CITY_CODE: "774",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410700",
                CITY_NAME: "鏂颁埂甯�",
                ESS_CITY_CODE: "764",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410800",
                CITY_NAME: "鐒︿綔甯�",
                ESS_CITY_CODE: "763",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "410900",
                CITY_NAME: "婵槼甯�",
                ESS_CITY_CODE: "773",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411000",
                CITY_NAME: "璁告槍甯�",
                ESS_CITY_CODE: "765",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411100",
                CITY_NAME: "婕渤甯�",
                ESS_CITY_CODE: "766",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411200",
                CITY_NAME: "涓夐棬宄″競",
                ESS_CITY_CODE: "772",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411300",
                CITY_NAME: "鍗楅槼甯�",
                ESS_CITY_CODE: "777",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411400",
                CITY_NAME: "鍟嗕笜甯�",
                ESS_CITY_CODE: "768",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411500",
                CITY_NAME: "淇￠槼甯�",
                ESS_CITY_CODE: "776",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411600",
                CITY_NAME: "鍛ㄥ彛甯�",
                ESS_CITY_CODE: "770",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "411700",
                CITY_NAME: "椹婚┈搴楀競",
                ESS_CITY_CODE: "771",
                PROVINCE_CODE: "410000"
            }, {
                CITY_CODE: "419001",
                CITY_NAME: "娴庢簮甯�",
                ESS_CITY_CODE: "775",
                PROVINCE_CODE: "410000"
            }],
            420000: [{
                CITY_CODE: "420100",
                CITY_NAME: "姝︽眽甯�",
                ESS_CITY_CODE: "710",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420200",
                CITY_NAME: "榛勭煶甯�",
                ESS_CITY_CODE: "715",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420300",
                CITY_NAME: "鍗佸牥甯�",
                ESS_CITY_CODE: "721",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420500",
                CITY_NAME: "瀹滄槍甯�",
                ESS_CITY_CODE: "711",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420600",
                CITY_NAME: "瑗勯槼甯�",
                ESS_CITY_CODE: "716",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420700",
                CITY_NAME: "閯傚窞甯�",
                ESS_CITY_CODE: "718",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420800",
                CITY_NAME: "鑽嗛棬甯�",
                ESS_CITY_CODE: "724",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "420900",
                CITY_NAME: "瀛濇劅甯�",
                ESS_CITY_CODE: "717",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421000",
                CITY_NAME: "鑽嗗窞甯�",
                ESS_CITY_CODE: "712",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421100",
                CITY_NAME: "榛勫唸甯�",
                ESS_CITY_CODE: "714",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421200",
                CITY_NAME: "鍜稿畞甯�",
                ESS_CITY_CODE: "719",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "421300",
                CITY_NAME: "闅忓窞甯�",
                ESS_CITY_CODE: "723",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "422800",
                CITY_NAME: "鎭╂柦鍦熷鏃忚嫍鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "727",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "429004",
                CITY_NAME: "浠欐甯�",
                ESS_CITY_CODE: "713",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "429005",
                CITY_NAME: "娼滄睙甯�",
                ESS_CITY_CODE: "713",
                PROVINCE_CODE: "420000"
            }, {
                CITY_CODE: "429006",
                CITY_NAME: "澶╅棬甯�",
                ESS_CITY_CODE: "713",
                PROVINCE_CODE: "420000"
            }],
            430000: [{
                CITY_CODE: "430100",
                CITY_NAME: "闀挎矙甯�",
                ESS_CITY_CODE: "741",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430200",
                CITY_NAME: "鏍床甯�",
                ESS_CITY_CODE: "742",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430300",
                CITY_NAME: "婀樻江甯�",
                ESS_CITY_CODE: "743",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430400",
                CITY_NAME: "琛￠槼甯�",
                ESS_CITY_CODE: "744",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430500",
                CITY_NAME: "閭甸槼甯�",
                ESS_CITY_CODE: "792",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430600",
                CITY_NAME: "宀抽槼甯�",
                ESS_CITY_CODE: "745",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430700",
                CITY_NAME: "甯稿痉甯�",
                ESS_CITY_CODE: "749",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430800",
                CITY_NAME: "寮犲鐣屽競",
                ESS_CITY_CODE: "794",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "430900",
                CITY_NAME: "鐩婇槼甯�",
                ESS_CITY_CODE: "747",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431000",
                CITY_NAME: "閮村窞甯�",
                ESS_CITY_CODE: "748",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431100",
                CITY_NAME: "姘稿窞甯�",
                ESS_CITY_CODE: "796",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431200",
                CITY_NAME: "鎬€鍖栧競",
                ESS_CITY_CODE: "795",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "431300",
                CITY_NAME: "濞勫簳甯�",
                ESS_CITY_CODE: "791",
                PROVINCE_CODE: "430000"
            }, {
                CITY_CODE: "433100",
                CITY_NAME: "婀樿タ鍦熷鏃忚嫍鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "793",
                PROVINCE_CODE: "430000"
            }],
            440000: [{
                CITY_CODE: "440100",
                CITY_NAME: "骞垮窞甯�",
                ESS_CITY_CODE: "510",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440300",
                CITY_NAME: "娣卞湷甯�",
                ESS_CITY_CODE: "540",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441900",
                CITY_NAME: "涓滆帪甯�",
                ESS_CITY_CODE: "580",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440600",
                CITY_NAME: "浣涘北甯�",
                ESS_CITY_CODE: "530",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441300",
                CITY_NAME: "鎯犲窞甯�",
                ESS_CITY_CODE: "570",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440400",
                CITY_NAME: "鐝犳捣甯�",
                ESS_CITY_CODE: "620",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "442000",
                CITY_NAME: "涓北甯�",
                ESS_CITY_CODE: "556",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440700",
                CITY_NAME: "姹熼棬甯�",
                ESS_CITY_CODE: "550",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440500",
                CITY_NAME: "姹曞ご甯�",
                ESS_CITY_CODE: "560",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440800",
                CITY_NAME: "婀涙睙甯�",
                ESS_CITY_CODE: "520",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "445200",
                CITY_NAME: "鎻槼甯�",
                ESS_CITY_CODE: "526",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441200",
                CITY_NAME: "鑲囧簡甯�",
                ESS_CITY_CODE: "536",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441800",
                CITY_NAME: "娓呰繙甯�",
                ESS_CITY_CODE: "535",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440200",
                CITY_NAME: "闊跺叧甯�",
                ESS_CITY_CODE: "558",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "445100",
                CITY_NAME: "娼窞甯�",
                ESS_CITY_CODE: "531",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "440900",
                CITY_NAME: "鑼傚悕甯�",
                ESS_CITY_CODE: "568",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441600",
                CITY_NAME: "娌虫簮甯�",
                ESS_CITY_CODE: "670",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441500",
                CITY_NAME: "姹曞熬甯�",
                ESS_CITY_CODE: "525",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441700",
                CITY_NAME: "闃虫睙甯�",
                ESS_CITY_CODE: "565",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "441400",
                CITY_NAME: "姊呭窞甯�",
                ESS_CITY_CODE: "528",
                PROVINCE_CODE: "440000"
            }, {
                CITY_CODE: "445300",
                CITY_NAME: "浜戞诞甯�",
                ESS_CITY_CODE: "538",
                PROVINCE_CODE: "440000"
            }],
            450000: [{
                CITY_CODE: "450100",
                CITY_NAME: "鍗楀畞甯�",
                ESS_CITY_CODE: "591",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450200",
                CITY_NAME: "鏌冲窞甯�",
                ESS_CITY_CODE: "593",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450300",
                CITY_NAME: "妗傛灄甯�",
                ESS_CITY_CODE: "592",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450400",
                CITY_NAME: "姊у窞甯�",
                ESS_CITY_CODE: "594",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450500",
                CITY_NAME: "鍖楁捣甯�",
                ESS_CITY_CODE: "599",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450600",
                CITY_NAME: "闃插煄娓競",
                ESS_CITY_CODE: "590",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450700",
                CITY_NAME: "閽﹀窞甯�",
                ESS_CITY_CODE: "597",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450800",
                CITY_NAME: "璐垫腐甯�",
                ESS_CITY_CODE: "589",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "450900",
                CITY_NAME: "鐜夋灄甯�",
                ESS_CITY_CODE: "595",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451000",
                CITY_NAME: "鐧捐壊甯�",
                ESS_CITY_CODE: "596",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451100",
                CITY_NAME: "璐哄窞甯�",
                ESS_CITY_CODE: "588",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451200",
                CITY_NAME: "娌虫睜甯�",
                ESS_CITY_CODE: "598",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451300",
                CITY_NAME: "鏉ュ甯�",
                ESS_CITY_CODE: "601",
                PROVINCE_CODE: "450000"
            }, {
                CITY_CODE: "451400",
                CITY_NAME: "宕囧乏甯�",
                ESS_CITY_CODE: "600",
                PROVINCE_CODE: "450000"
            }],
            460000: [{
                CITY_CODE: "460100",
                CITY_NAME: "娴峰彛甯�",
                ESS_CITY_CODE: "501",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460200",
                CITY_NAME: "涓変簹甯�",
                ESS_CITY_CODE: "502",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460300",
                CITY_NAME: "鐞兼捣甯�",
                ESS_CITY_CODE: "A04",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460400",
                CITY_NAME: "鍎嬪窞甯�",
                ESS_CITY_CODE: "503",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460500",
                CITY_NAME: "涓滄柟甯�",
                ESS_CITY_CODE: "A16",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460600",
                CITY_NAME: "涓囧畞甯�",
                ESS_CITY_CODE: "A07",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460700",
                CITY_NAME: "浜旀寚灞卞競",
                ESS_CITY_CODE: "A13",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460800",
                CITY_NAME: "鏂囨槍甯�",
                ESS_CITY_CODE: "A06",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "460900",
                CITY_NAME: "鏄屾睙鍘�",
                ESS_CITY_CODE: "A15",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461000",
                CITY_NAME: "涓撮珮鍘�",
                ESS_CITY_CODE: "A18",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461100",
                CITY_NAME: "瀹氬畨鍘�",
                ESS_CITY_CODE: "A01",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461200",
                CITY_NAME: "鐞间腑鍘�",
                ESS_CITY_CODE: "A08",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461300",
                CITY_NAME: "闄垫按鍘�",
                ESS_CITY_CODE: "A11",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461400",
                CITY_NAME: "涔愪笢鍘�",
                ESS_CITY_CODE: "A10",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461500",
                CITY_NAME: "鐧芥矙鍘�",
                ESS_CITY_CODE: "A14",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461600",
                CITY_NAME: "灞槍鍘�",
                ESS_CITY_CODE: "A05",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461700",
                CITY_NAME: "婢勮繄鍘�",
                ESS_CITY_CODE: "A02",
                PROVINCE_CODE: "460000"
            }, {
                CITY_CODE: "461800",
                CITY_NAME: "淇濅涵鍘�",
                ESS_CITY_CODE: "A09",
                PROVINCE_CODE: "460000"
            }],
            500000: [{
                CITY_CODE: "500100",
                CITY_NAME: "閲嶅簡甯�",
                ESS_CITY_CODE: "831",
                PROVINCE_CODE: "500000"
            }],
            510000: [{
                CITY_CODE: "510100",
                CITY_NAME: "鎴愰兘甯�",
                ESS_CITY_CODE: "810",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510300",
                CITY_NAME: "鑷础甯�",
                ESS_CITY_CODE: "818",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511800",
                CITY_NAME: "闆呭畨甯�",
                ESS_CITY_CODE: "811",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510700",
                CITY_NAME: "缁甸槼甯�",
                ESS_CITY_CODE: "824",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511100",
                CITY_NAME: "涔愬北甯�",
                ESS_CITY_CODE: "814",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510600",
                CITY_NAME: "寰烽槼甯�",
                ESS_CITY_CODE: "825",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510400",
                CITY_NAME: "鏀€鏋濊姳甯�",
                ESS_CITY_CODE: "813",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511500",
                CITY_NAME: "瀹滃甯�",
                ESS_CITY_CODE: "817",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "513200",
                CITY_NAME: "闃垮潩钘忔棌缇屾棌鑷不宸�",
                ESS_CITY_CODE: "829",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511000",
                CITY_NAME: "鍐呮睙甯�",
                ESS_CITY_CODE: "816",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511400",
                CITY_NAME: "鐪夊北甯�",
                ESS_CITY_CODE: "819",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "512000",
                CITY_NAME: "璧勯槼甯�",
                ESS_CITY_CODE: "830",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510500",
                CITY_NAME: "娉稿窞甯�",
                ESS_CITY_CODE: "815",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511300",
                CITY_NAME: "鍗楀厖甯�",
                ESS_CITY_CODE: "822",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511700",
                CITY_NAME: "杈惧窞甯�",
                ESS_CITY_CODE: "820",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510900",
                CITY_NAME: "閬傚畞甯�",
                ESS_CITY_CODE: "821",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "510800",
                CITY_NAME: "骞垮厓甯�",
                ESS_CITY_CODE: "826",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511600",
                CITY_NAME: "骞垮畨甯�",
                ESS_CITY_CODE: "823",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "511900",
                CITY_NAME: "宸翠腑甯�",
                ESS_CITY_CODE: "827",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "513400",
                CITY_NAME: "鍑夊北褰濇棌鑷不宸�",
                ESS_CITY_CODE: "812",
                PROVINCE_CODE: "510000"
            }, {
                CITY_CODE: "513300",
                CITY_NAME: "鐢樺瓬钘忔棌鑷不宸�",
                ESS_CITY_CODE: "828",
                PROVINCE_CODE: "510000"
            }],
            520000: [{
                CITY_CODE: "520100",
                CITY_NAME: "璐甸槼甯�",
                ESS_CITY_CODE: "850",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520200",
                CITY_NAME: "鍏洏姘村競",
                ESS_CITY_CODE: "853",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520300",
                CITY_NAME: "閬典箟甯�",
                ESS_CITY_CODE: "787",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520400",
                CITY_NAME: "瀹夐『甯�",
                ESS_CITY_CODE: "789",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520500",
                CITY_NAME: "姣曡妭甯�",
                ESS_CITY_CODE: "851",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "520600",
                CITY_NAME: "閾滀粊甯�",
                ESS_CITY_CODE: "785",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522300",
                CITY_NAME: "榛旇タ鍗�",
                ESS_CITY_CODE: "852",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522600",
                CITY_NAME: "榛斾笢鍗�",
                ESS_CITY_CODE: "786",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522700",
                CITY_NAME: "榛斿崡",
                ESS_CITY_CODE: "788",
                PROVINCE_CODE: "520000"
            }, {
                CITY_CODE: "522800",
                CITY_NAME: "璐靛畨",
                ESS_CITY_CODE: "854",
                PROVINCE_CODE: "520000"
            }],
            530000: [{
                CITY_CODE: "530100",
                CITY_NAME: "鏄嗘槑甯�",
                ESS_CITY_CODE: "860",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530300",
                CITY_NAME: "鏇查潠甯�",
                ESS_CITY_CODE: "866",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530400",
                CITY_NAME: "鐜夋邯甯�",
                ESS_CITY_CODE: "865",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530500",
                CITY_NAME: "淇濆北甯�",
                ESS_CITY_CODE: "731",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530600",
                CITY_NAME: "鏄€氬競",
                ESS_CITY_CODE: "867",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530700",
                CITY_NAME: "涓芥睙甯�",
                ESS_CITY_CODE: "863",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530800",
                CITY_NAME: "鏅幢甯�",
                ESS_CITY_CODE: "869",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "530900",
                CITY_NAME: "涓存钵甯�",
                ESS_CITY_CODE: "733",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532300",
                CITY_NAME: "妤氶泟褰濇棌鑷不宸�",
                ESS_CITY_CODE: "864",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532500",
                CITY_NAME: "绾㈡渤鍝堝凹鏃忓綕鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "861",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532600",
                CITY_NAME: "鏂囧北宸�",
                ESS_CITY_CODE: "732",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532800",
                CITY_NAME: "瑗垮弻鐗堢撼鍌ｆ棌鑷不宸�",
                ESS_CITY_CODE: "736",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "532900",
                CITY_NAME: "澶х悊鐧芥棌鑷不宸�",
                ESS_CITY_CODE: "862",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "533100",
                CITY_NAME: "寰峰畯鍌ｆ棌鏅鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "730",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "533300",
                CITY_NAME: "鎬掓睙鍌堝兂鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "734",
                PROVINCE_CODE: "530000"
            }, {
                CITY_CODE: "533400",
                CITY_NAME: "杩簡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "735",
                PROVINCE_CODE: "530000"
            }],
            540000: [{
                CITY_CODE: "540100",
                CITY_NAME: "鎷夎惃甯�",
                ESS_CITY_CODE: "790",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542100",
                CITY_NAME: "鏄岄兘鍦板尯",
                ESS_CITY_CODE: "800",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542200",
                CITY_NAME: "灞卞崡鍦板尯",
                ESS_CITY_CODE: "798",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542300",
                CITY_NAME: "鏃ュ杸鍒欏湴鍖�",
                ESS_CITY_CODE: "797",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542400",
                CITY_NAME: "閭ｆ洸鍦板尯",
                ESS_CITY_CODE: "801",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542500",
                CITY_NAME: "闃块噷鍦板尯",
                ESS_CITY_CODE: "802",
                PROVINCE_CODE: "540000"
            }, {
                CITY_CODE: "542600",
                CITY_NAME: "鏋楄姖鍦板尯",
                ESS_CITY_CODE: "799",
                PROVINCE_CODE: "540000"
            }],
            610000: [{
                CITY_CODE: "610100",
                CITY_NAME: "瑗垮畨甯�",
                ESS_CITY_CODE: "841",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610200",
                CITY_NAME: "閾滃窛甯�",
                ESS_CITY_CODE: "846",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610300",
                CITY_NAME: "瀹濋浮甯�",
                ESS_CITY_CODE: "840",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610400",
                CITY_NAME: "鍜搁槼甯�",
                ESS_CITY_CODE: "844",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610500",
                CITY_NAME: "娓崡甯�",
                ESS_CITY_CODE: "843",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610600",
                CITY_NAME: "寤跺畨甯�",
                ESS_CITY_CODE: "842",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610700",
                CITY_NAME: "姹変腑甯�",
                ESS_CITY_CODE: "849",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610800",
                CITY_NAME: "姒嗘灄甯�",
                ESS_CITY_CODE: "845",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "610900",
                CITY_NAME: "瀹夊悍甯�",
                ESS_CITY_CODE: "848",
                PROVINCE_CODE: "610000"
            }, {
                CITY_CODE: "611000",
                CITY_NAME: "鍟嗘礇甯�",
                ESS_CITY_CODE: "847",
                PROVINCE_CODE: "610000"
            }],
            620000: [{
                CITY_CODE: "620100",
                CITY_NAME: "鍏板窞甯�",
                ESS_CITY_CODE: "870",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620200",
                CITY_NAME: "鍢夊唱鍏冲競",
                ESS_CITY_CODE: "876",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620300",
                CITY_NAME: "閲戞槍甯�",
                ESS_CITY_CODE: "930",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620400",
                CITY_NAME: "鐧介摱甯�",
                ESS_CITY_CODE: "879",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620500",
                CITY_NAME: "澶╂按甯�",
                ESS_CITY_CODE: "877",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620600",
                CITY_NAME: "姝﹀▉甯�",
                ESS_CITY_CODE: "874",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620700",
                CITY_NAME: "寮犳帠甯�",
                ESS_CITY_CODE: "875",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620800",
                CITY_NAME: "骞冲噳甯�",
                ESS_CITY_CODE: "872",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "620900",
                CITY_NAME: "閰掓硥甯�",
                ESS_CITY_CODE: "931",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "621000",
                CITY_NAME: "搴嗛槼甯�",
                ESS_CITY_CODE: "873",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "621100",
                CITY_NAME: "瀹氳タ甯�",
                ESS_CITY_CODE: "871",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "621200",
                CITY_NAME: "闄囧崡甯�",
                ESS_CITY_CODE: "960",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "622900",
                CITY_NAME: "涓村鍥炴棌鑷不宸�",
                ESS_CITY_CODE: "878",
                PROVINCE_CODE: "620000"
            }, {
                CITY_CODE: "623000",
                CITY_NAME: "鐢樺崡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "961",
                PROVINCE_CODE: "620000"
            }],
            630000: [{
                CITY_CODE: "630100",
                CITY_NAME: "瑗垮畞甯�",
                ESS_CITY_CODE: "700",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632100",
                CITY_NAME: "娴蜂笢甯�",
                ESS_CITY_CODE: "701",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632200",
                CITY_NAME: "娴峰寳钘忔棌鑷不宸�",
                ESS_CITY_CODE: "706",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632300",
                CITY_NAME: "榛勫崡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "707",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632500",
                CITY_NAME: "娴峰崡钘忔棌鑷不宸�",
                ESS_CITY_CODE: "705",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632600",
                CITY_NAME: "鏋滄礇钘忔棌鑷不宸�",
                ESS_CITY_CODE: "708",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632700",
                CITY_NAME: "鐜夋爲钘忔棌鑷不宸�",
                ESS_CITY_CODE: "709",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632800",
                CITY_NAME: "娴疯タ钂欏彜鏃忚棌鏃忚嚜娌诲窞",
                ESS_CITY_CODE: "704",
                PROVINCE_CODE: "630000"
            }, {
                CITY_CODE: "632900",
                CITY_NAME: "鏍煎皵鏈ㄥ競",
                ESS_CITY_CODE: "702",
                PROVINCE_CODE: "630000"
            }],
            640000: [{
                CITY_CODE: "640100",
                CITY_NAME: "閾跺窛甯�",
                ESS_CITY_CODE: "880",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640200",
                CITY_NAME: "鐭冲槾灞卞競",
                ESS_CITY_CODE: "884",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640300",
                CITY_NAME: "鍚村繝甯�",
                ESS_CITY_CODE: "883",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640400",
                CITY_NAME: "鍥哄師甯�",
                ESS_CITY_CODE: "885",
                PROVINCE_CODE: "640000"
            }, {
                CITY_CODE: "640500",
                CITY_NAME: "涓崼甯�",
                ESS_CITY_CODE: "886",
                PROVINCE_CODE: "640000"
            }],
            650000: [{
                CITY_CODE: "650100",
                CITY_NAME: "涔岄瞾鏈ㄩ綈甯�",
                ESS_CITY_CODE: "890",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "650200",
                CITY_NAME: "鍏嬫媺鐜涗緷甯�",
                ESS_CITY_CODE: "899",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652100",
                CITY_NAME: "鍚愰瞾鐣湴鍖�",
                ESS_CITY_CODE: "894",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652200",
                CITY_NAME: "鍝堝瘑鍦板尯",
                ESS_CITY_CODE: "900",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652300",
                CITY_NAME: "鏄屽悏鍥炴棌鑷不宸�",
                ESS_CITY_CODE: "891",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652700",
                CITY_NAME: "鍗氬皵濉旀媺钂欏彜鑷不宸�",
                ESS_CITY_CODE: "951",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652800",
                CITY_NAME: "宸撮煶閮钂欏彜鑷不宸�",
                ESS_CITY_CODE: "895",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "652900",
                CITY_NAME: "闃垮厠鑻忓湴鍖�",
                ESS_CITY_CODE: "896",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "653000",
                CITY_NAME: "鍏嬪瓬鍕掕嫃鏌皵鍏嬪瓬鑷不宸�",
                ESS_CITY_CODE: "954",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "653100",
                CITY_NAME: "鍠€浠€鍦板尯",
                ESS_CITY_CODE: "897",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "653200",
                CITY_NAME: "鍜岀敯鍦板尯",
                ESS_CITY_CODE: "955",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654000",
                CITY_NAME: "浼婄妬鍝堣惃鍏嬭嚜娌诲窞",
                ESS_CITY_CODE: "898",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654200",
                CITY_NAME: "濉斿煄鍦板尯",
                ESS_CITY_CODE: "952",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654300",
                CITY_NAME: "闃垮嫆娉板湴鍖�",
                ESS_CITY_CODE: "953",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "654400",
                CITY_NAME: "濂庡悲",
                ESS_CITY_CODE: "892",
                PROVINCE_CODE: "650000"
            }, {
                CITY_CODE: "659001",
                CITY_NAME: "鐭虫渤瀛愬競",
                ESS_CITY_CODE: "893",
                PROVINCE_CODE: "650000"
            }]
        }
    }
}
]);
//# sourceMappingURL=common-b.js.map
