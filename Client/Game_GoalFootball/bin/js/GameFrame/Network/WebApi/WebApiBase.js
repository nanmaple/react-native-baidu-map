/// <reference path="./Http.ts" />
var WebApiBase = /** @class */ (function () {
    function WebApiBase() {
        //token存储
        this.header = {
            Authorization: ""
        };
        this.http = new Network.Http();
    }
    /**
     * 初始化充缓存中获取token
     */
    WebApiBase.prototype.InitToken = function () {
        //从会员服务中获取token
        var memberManager = new MemberManager.Member();
        var authorizationDto = memberManager.GetAuthorization();
        if (authorizationDto) {
            this.header.Authorization = authorizationDto.Token;
        }
    };
    /**
     * 设置token
     * @param token token值
     */
    WebApiBase.prototype.SetToken = function (token) {
        this.header.Authorization = token;
    };
    /**
     * Post方法
     * @param url 地址
     * @param params 参数
     * @param successBack 成功回调
     * @param failBack 失败回调
     */
    WebApiBase.prototype.Post = function (url, params, header, successBack, failBack) {
        this.http.Post(url, params, Utils.ObjectEx.assign({}, this.header, header), successBack, failBack);
    };
    /**
     * Get方法
     * @param url 地址
     * @param params 参数
     * @param successBack 成功回调
     * @param failBack 失败回调
     */
    WebApiBase.prototype.Get = function (url, params, header, successBack, failBack) {
        this.http.Get(url, params, Utils.ObjectEx.assign({}, this.header, header), successBack, failBack);
    };
    return WebApiBase;
}());
//# sourceMappingURL=WebApiBase.js.map