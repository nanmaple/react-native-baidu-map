//var Domains = "m.17guess.cn";
var Domains = "synjiguang.com";
var GetJsSignatures = "//" + Domains + "/api/WeChat/GetJsSignature";
var GetAppIDApis = "//" + Domains + "/api/WeChat/GetAppID";
function Wechat(http, handler, option) {
    this.GetJsSignatureTimes = 0;
    this.WeChatShareHandler = handler;
    this.wx = window.wx;
    this.AppId = null;
    this.WeChatShareOption = option;
    this.http = new http();
}
;
/**
* 分享配置
* @param {*} parentID
* @param {*} link
*/
/**
* 获取微信配置信息
* @param url
*/
Wechat.prototype.GetJsSignature = function () {
    var _this = this;
    this.GetAppID().then(function (appid) {
        try {
            var wechat = _this;
            var url = window.location.href.split("#")[0];
            var obj = {
                Url: encodeURIComponent(url)
            };
            _this.http.Post(GetJsSignatures, obj, LoginService.header, function (res) {
                console.log("GetJsSignature", "Success");
                var Data = res.Data, Result = res.Result;
                if (Result == 1) {
                    wechat.Init(appid, Data);
                }
                else if (_this.GetJsSignatureTimes <= 4) {
                    _this.GetJsSignatureTimes++;
                    _this.GetJsSignature();
                }
                else {
                    alert("用户分享地址错误, 请重新登录");
                    console.log("获取JS签名错误");
                }
                var authorizeDto = _this.WeChatShareOption;
                //分享微信好友
                wechat.ShareAppMessage(authorizeDto.Title, authorizeDto.Desc, authorizeDto.ImgUrl, authorizeDto.Link, _this.WeChatShareHandler);
                //分享QQ
                wechat.ShareQQ(authorizeDto.Title, authorizeDto.Desc, authorizeDto.ImgUrl, authorizeDto.Link, _this.WeChatShareHandler);
                var dto = _this.WeChatShareOption;
                //分享朋友圈
                wechat.ShareTimeline(dto.Title, dto.ImgUrl, dto.Link, _this.WeChatShareHandler);
                //分享qq空间
                wechat.ShareQZone(dto.Title, dto.Desc, dto.ImgUrl, dto.Link, _this.WeChatShareHandler);
            }, function (err) {
                console.log("GetJsSignature", err);
            });
        }
        catch (error) {
            var msg = _this.languageManager.GetErrorMsg(JSON.stringify(error));
            // alert(msg);
        }
    }, function (err) {
        console.log("获取appid", err);
    });
};
/**
* 初始化
* @param dto
*/
Wechat.prototype.Init = function (appid, dto) {
    if (this.wx) {
        this.wx.config({
            debug: false,
            appId: appid,
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
Wechat.prototype.checkJsApi = function (api, handler) {
    this.wx.checkJsApi({
        jsApiList: api,
        success: function (res) {
            console.log(res);
            if (res.errMsg == "checkJsApi:ok") {
                handler();
            }
            else {
                // alert(JSON.stringify(res));
            }
            // 以键值对的形式返回，可用的api值true，不可用为false
            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
        }
    });
};
Wechat.prototype.GetNetworkType = function (handler) {
    if (this.wx) {
        this.wx.getNetworkType({
            success: function (res) {
                if (res.errMsg == "getNetworkType:fail") {
                    handler(null);
                }
                else {
                    var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                    handler(networkType);
                }
            }
        });
    }
    else {
        console.log("未引入weixin.js");
    }
};
/**
 * PC端浏览器网络监测
 * @param handler
 */
Wechat.prototype.GetPcNetworkType = function (handler) {
    //网络连接
    if (window.navigator.onLine == true) {
        handler(true);
    }
    else {
        handler(false);
    }
};
/**
* 分享朋友圈
* @param title 标题
* @param imgUrl 图片地址
* @param link 跳转网页地址
* @param handler 回调
*/
Wechat.prototype.ShareTimeline = function (title, imgUrl, link, handler) {
    var _this = this;
    if (this.wx) {
        this.wx.ready(function () {
            _this.checkJsApi(["onMenuShareTimeline"], function () {
                _this.wx.onMenuShareTimeline({
                    title: title,
                    imgUrl: imgUrl,
                    link: link,
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        handler(1);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        handler(0);
                    }
                });
            });
        });
    }
    else {
        console.log("未引入weixin.js");
        handler(-1);
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
Wechat.prototype.ShareAppMessage = function (title, desc, imgUrl, link, handler) {
    var _this = this;
    if (this.wx) {
        this.wx.ready(function () {
            _this.checkJsApi(["onMenuShareAppMessage"], function () {
                _this.wx.onMenuShareAppMessage({
                    title: title,
                    desc: desc,
                    imgUrl: imgUrl,
                    link: link,
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        handler(1);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        handler(0);
                    }
                });
            });
        });
    }
    else {
        console.log("未引入weixin.js");
        handler(-1);
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
Wechat.prototype.ShareQQ = function (title, desc, imgUrl, link, handler) {
    var _this = this;
    if (this.wx) {
        this.wx.ready(function () {
            _this.checkJsApi(["onMenuShareAppMessage"], function () {
                _this.wx.onMenuShareQQ({
                    title: title,
                    desc: desc,
                    imgUrl: imgUrl,
                    link: link,
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        handler(1);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        handler(0);
                    }
                });
            });
        });
    }
    else {
        console.log("未引入weixin.js");
        handler(-1);
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
Wechat.prototype.ShareQZone = function (title, desc, imgUrl, link, handler) {
    var _this = this;
    if (this.wx) {
        this.wx.ready(function () {
            _this.checkJsApi(["onMenuShareAppMessage"], function () {
                _this.wx.onMenuShareQZone({
                    title: title,
                    desc: desc,
                    imgUrl: imgUrl,
                    link: link,
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        handler(1);
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        handler(0);
                    }
                });
            });
        });
    }
    else {
        console.log("未引入weixin.js");
        handler(-1);
    }
};
Wechat.prototype.GetAppID = function () {
    var _this = this;
    return new Promise(function (resolve, reject) {
        _this.http.Get(GetAppIDApis, null, null, function (res) {
            console.log("GetAppID", res);
            if (res && res.Data) {
                localStorage.setItem("AppId", res.Data);
                resolve(res.Data);
            }

        }, function (err) {
            console.log(err);
            reject(err);
        });
    });
};
