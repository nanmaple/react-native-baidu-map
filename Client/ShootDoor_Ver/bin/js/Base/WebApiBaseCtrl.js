/// <reference path="./Utils/Http.ts" />
var WebApiBaseCtrl = /** @class */ (function () {
    function WebApiBaseCtrl(gameID) {
        //token存储
        this.header = {
            Authorization: ""
        };
        this.http = new Utils.Http();
        this.gameID = gameID;
    }
    /**
     * 设置token
     */
    WebApiBaseCtrl.prototype.SetToken = function (token) {
        if (token) {
            this.header.Authorization = token;
            return;
        }
        //从会员服务中获取用户信息
        var memberServer = new ServiceManager.MemberManager(this.gameID);
        //获取Socket Token
        var authorizationInfo = memberServer.GetSocketInfo();
        this.header.Authorization = authorizationInfo.Token;
    };
    return WebApiBaseCtrl;
}());
