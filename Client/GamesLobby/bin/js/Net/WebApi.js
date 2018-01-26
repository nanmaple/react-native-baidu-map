/// <reference path="Config.ts" />
/// <reference path="../Utils/Http.ts" />
var Net;
(function (Net) {
    /**
     * WebApi层
     * 单例 使用WebApi.instance
     */
    var WebApi = (function () {
        function WebApi() {
            //token存储
            this.header = {
                Authorization: ""
            };
            //http
            this.http = new Utils.Http();
        }
        /**
         * 设置token
         * @param token
         */
        WebApi.prototype.SetToken = function (token) {
            if (token === void 0) { token = ""; }
            this.header.Authorization = token;
            return true;
        };
        /**
         * 微信登录
         * @param dto 登录参数Dto
         * @param successHandler 成功回调
         * @param errorhandler 失败回调
         */
        WebApi.prototype.Login = function (dto, successHandler, errorhandler) {
            var obj = {
                Code: dto.Code,
                ParentID: dto.ParentID,
                DeviceType: dto.DeviceType,
                DeviceId: dto.DeviceId
            };
            //请求调Net的api，
            this.http.Post(Net.ApiConfig.Login, obj, null, function (response) {
                console.log("Login成功回调");
                if (response.Result == Enum.ErrorCode.Success) {
                    successHandler.runWith(response.Data);
                }
                else {
                    errorhandler.runWith(response.Result);
                }
            }, function (error) {
                console.log("Login失败回调");
                errorhandler.runWith(error.toString());
            });
        };
        ;
        /**
         * 登录检查
         * @param token token值
         * @param successHandler 成功回调
         * @param errorhandler 错误回调
         */
        WebApi.prototype.LoginCheck = function (token, successHandler, errorhandler) {
            var header = {
                Authorization: token
            };
            //请求调Net的api，
            this.http.Post(Net.ApiConfig.LoginCheck, null, header, function (response) {
                console.log("LoginCheck成功回调");
                if (response.Result == Enum.ErrorCode.Success) {
                    successHandler.runWith(response.Data);
                }
                else {
                    errorhandler.runWith(response.ErrorCode);
                }
            }, function (error) {
                console.log("LoginCheck失败回调");
                errorhandler.runWith(error.toString());
            });
        };
        ;
        /**
         * 通过临时token和会员id登录
         * @param token token值
         * @param successHandler 成功回调
         * @param errorhandler 错误回调
         */
        WebApi.prototype.LoginByID = function (token, dto, successHandler, errorhandler) {
            var header = {
                Authorization: token
            };
            var params = {
                MemberID: dto.MemberID,
                DeviceType: dto.DeviceType,
                DeviceId: dto.DeviceId
            };
            //请求调Net的api，
            this.http.Post(Net.ApiConfig.LoginById, params, header, function (response) {
                console.log("LoginCheck成功回调");
                if (response.Result == Enum.ErrorCode.Success) {
                    successHandler.runWith(response.Data);
                }
                else {
                    errorhandler.runWith(response.ErrorCode);
                }
            }, function (error) {
                console.log("LoginCheck失败回调");
                errorhandler.runWith(error.toString());
            });
        };
        ;
        /**
         * 获取会员信息
         * @param successHandler 成功回调
         * @param errorhandler 失败回调
         */
        WebApi.prototype.GetMemberInfo = function (successHandler, errorhandler) {
            //请求调Net的api，
            this.http.Post(Net.ApiConfig.GetMemberInfo, null, this.header, function (response) {
                console.log("GetMemberInfo成功回调");
                if (response.Result == Enum.ErrorCode.Success) {
                    successHandler.runWith(response.Data);
                }
                else {
                    errorhandler.runWith(response.ErrorCode);
                }
            }, function (error) {
                console.log("GetMemberInfo失败回调");
                errorhandler.runWith(error.toString());
            });
        };
        return WebApi;
    }());
    //单例
    WebApi.instance = new WebApi();
    Net.WebApi = WebApi;
})(Net || (Net = {}));
