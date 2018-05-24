/// <reference path="../../Utils/Http/index.ts" />
var WebApiBase = /** @class */ (function () {
    function WebApiBase() {
        //token存储
        this.header = {
            Authorization: ""
        };
    }
    /**
     * 初始化http
     */
    WebApiBase.prototype.InitHttp = function () {
        this.http = new Utils.Http();
    };
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
    return WebApiBase;
}());
//# sourceMappingURL=WebApiBase.js.map