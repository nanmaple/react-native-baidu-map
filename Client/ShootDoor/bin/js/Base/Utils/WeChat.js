var Utils;
(function (Utils) {
    var WeChat = (function () {
        function WeChat() {
            this.wx = Laya.Browser.window.wx;
        }
        /**
         * 初始化
         * @param dto
         */
        WeChat.prototype.Init = function (dto) {
            this.AppId = GameConfig.AppId;
            if (this.wx) {
                this.wx.config({
                    debug: false,
                    appId: GameConfig.AppId,
                    timestamp: dto.Timestamp,
                    nonceStr: dto.NonceStr,
                    signature: dto.Signature,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'onMenuShareQZone'
                    ]
                });
            }
            else {
                console.log("未引入weixin.js");
            }
        };
        WeChat.prototype.GetNetworkType = function (handler) {
            if (this.wx) {
                this.wx.getNetworkType({
                    success: function (res) {
                        if (res.errMsg == "getNetworkType:fail") {
                            handler.runWith(null);
                        }
                        else {
                            var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                            handler.runWith(networkType);
                        }
                    }
                });
            }
            else {
                console.log("未引入weixin.js");
            }
        };
        /**
         * 分享朋友圈
         * @param title 标题
         * @param imgUrl 图片地址
         * @param link 跳转网页地址
         * @param handler 回调
         */
        WeChat.prototype.ShareTimeline = function (title, imgUrl, link, handler) {
            var _this = this;
            if (this.wx) {
                this.wx.ready(function () {
                    _this.wx.onMenuShareTimeline({
                        title: title,
                        imgUrl: imgUrl,
                        link: link,
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            handler.runWith(1);
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            handler.runWith(0);
                        }
                    });
                });
            }
            else {
                console.log("未引入weixin.js");
                handler.runWith(-1);
            }
        };
        /**
         * 分享微信好友
         * @param title 标题
         * @param desc 描述
         * @param imgUrl 图片地址
         * @param link 跳转网页地址
         * @param handler 回调
        */
        WeChat.prototype.ShareAppMessage = function (title, desc, imgUrl, link, handler) {
            var _this = this;
            if (this.wx) {
                this.wx.ready(function () {
                    _this.wx.onMenuShareAppMessage({
                        title: title,
                        desc: desc,
                        imgUrl: imgUrl,
                        link: link,
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            handler.runWith(1);
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            handler.runWith(0);
                        }
                    });
                });
            }
            else {
                console.log("未引入weixin.js");
                handler.runWith(-1);
            }
        };
        /**
         * 分享QQ
         * @param title 标题
         * @param desc 描述
         * @param imgUrl 图片地址
         * @param link 跳转网页地址
         * @param handler 回调
        */
        WeChat.prototype.ShareQQ = function (title, desc, imgUrl, link, handler) {
            var _this = this;
            if (this.wx) {
                this.wx.ready(function () {
                    _this.wx.onMenuShareQQ({
                        title: title,
                        desc: desc,
                        imgUrl: imgUrl,
                        link: link,
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            handler.runWith(1);
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            handler.runWith(0);
                        }
                    });
                });
            }
            else {
                console.log("未引入weixin.js");
                handler.runWith(-1);
            }
        };
        /**
         * 分享QQ空间
         * @param title 标题
         * @param desc 描述
         * @param imgUrl 图片地址
         * @param link 跳转网页地址
         * @param handler 回调
        */
        WeChat.prototype.ShareQZone = function (title, desc, imgUrl, link, handler) {
            var _this = this;
            if (this.wx) {
                this.wx.ready(function () {
                    _this.wx.onMenuShareQZone({
                        title: title,
                        desc: desc,
                        imgUrl: imgUrl,
                        link: link,
                        success: function () {
                            // 用户确认分享后执行的回调函数
                            handler.runWith(1);
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                            handler.runWith(0);
                        }
                    });
                });
            }
            else {
                console.log("未引入weixin.js");
                handler.runWith(-1);
            }
        };
        return WeChat;
    }());
    Utils.WeChat = WeChat;
})(Utils || (Utils = {}));
