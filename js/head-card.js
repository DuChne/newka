webpackJsonp([49], {
    0 : function(e, n, t) { (function(e) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e: {
                default:
                e
            }
        }
        var a = t(6),
            i = n(a);
        t(117);
        var o = t(9),
            r = t(66);
        e(function() {
            function n() {
                "513" === m.channel && (s = "亲爱的用户，您已获赠送专属特权", l = "您已获得全国范围内超过100项腾讯应用流量免费特权，请速领取！", h = "https://m.10010.com/queen/static/images/tencent/head-card/images/share-img-513.jpg")
            }
            function t() {
                "app" === m.sign ? e(".invite-img").hide() : e(".invite-img").show()
            }
            function a() {
                var n = window.navigator.userAgent.toLowerCase();
                n.indexOf("micromessenger") >= 0 && (0, r.isEmpty)(m.randomCode) ? t() : e(".invite-img").hide()
            }
            function c() {
                "528" === m.channel ? e(".channel-hide").hide() : e(".channel-hide").show()
            }
            i.
            default.attach(document.body);
            var s = "免流量畅玩！邀您免费领取腾讯王卡",
                l = "超百款应用免流量！玩游戏、听音乐、看视频，不用wifi我任性！",
                d = location.href.split("#")[0],
                h = "https://m.10010.com/queen/static/images/tencent/heroes-invincible/images/share-img.jpg",
                m = (0, o.getUrlParam)();
            n(),
                (0, o.setShare)(s, l, d, h),
                (0, o.resize)(375);
            var f = "2",
                u = function(e) {
                    e.hasClass("left") ? (e.removeClass("left down").addClass("center checked transition"), 0 === e.index() ? (e.next().removeClass("center checked ").addClass("right down transition"), e.next().next().removeClass("right down").addClass("left  transition")) : 1 === e.index() ? (e.prev().removeClass("right down").addClass("left  transition"), e.next().removeClass("checked center").addClass("right down transition")) : (e.prev().removeClass("right down").addClass("left transition"), e.prev().prev().removeClass("checked  center").addClass("right down transition"))) : e.hasClass("right") && (e.removeClass("right down").addClass("center checked transition"), 0 === e.index() ? (e.next().removeClass("left down").addClass("right transition"), e.next().next().removeClass("checked center ").addClass("left down transition")) : 1 === e.index() ? (e.prev().removeClass("checked center ").addClass("left down transition"), e.next().removeClass("left down").addClass("right transition")) : (e.prev().removeClass("center checked").addClass("left down transition"), e.prev().prev().removeClass("left down").addClass("right transition")))
                };
            e(".switch .tab").on("click",
                function(n) {
                    var t = e(n.currentTarget);
                    u(t)
                }),
                e(".tab-left").on("click",
                    function() {
                        var n = e(".right");
                        u(n)
                    }),
                e(".tab-right").on("click",
                    function() {
                        var n = e(".left");
                        u(n)
                    }),
                e("#toTop").on("click",
                    function() {
                        e("body").scrollTop(0)
                    }),
                e("#apply").on("click",
                    function() {
                        f = e(".checked").attr("data-type"),
                            "1295" === m.channel || "1296" === m.channel || "1297" === m.channel || "1299" === m.channel || "1300" === m.channel ? location.href = "apply?product=" + f + (0, o.buttonUrlParam)(m) : m.share_id && m.act_type && m.id_type ? location.href = "royalty-plan-fill.html?product=" + f + (0, o.buttonUrlParam)(m) : location.href = "apply?product=" + f + (0, o.buttonUrlParam)(m)
                    }),
                e("#planetmap1").on("click",
                    function() {
                        location.href = "https://m.10010.com/queen/familycard/familycard.html?channel=24"
                    }),
                e("#planetmap2").on("click",
                    function() {
                        location.href = "https://m.10010.com/queen/tencent/tariff-details.html"
                    }),
                e("#planetmap3").on("click",
                    function() {
                        location.href = "https://m.10010.com/queen/tencent/flow-range.html"
                    });
            var p = 750,
                v = [[189, 275, 290, 302]],
                g = [[178, 110, 327, 139]],
                C = [[170, 171, 365, 200]],
                w = function(e, n) {
                    for (var t = "",
                             a = 0; a < e.length; a += 1) a === e.length - 1 ? t += e[a] * n: (t += e[a] * n, t += ",");
                    return t
                },
                k = function(n, t, a, i) {
                    e(i).find("area").each(function(i, o) {
                        e(o).attr("coords", w(a[i], t / n))
                    })
                };
            k(p, e(document.body).width(), v, "#planetmap1"),
                k(p, e(document.body).width(), g, "#planetmap2"),
                k(p, e(document.body).width(), C, "#planetmap3"),
                e(window).resize(function() { (0, o.resize)(375)
                }),
                a(),
                e(".invite-img img").on("click",
                    function() {
                        location.href = "http://txwk.10010.com/KCard/wxCommon/goto?state=WX_KCARD_WZPLAN_INDEX"
                    }),
                c()
        })
    }).call(n, t(1))
    },
    117 : function(e, n) {}
});