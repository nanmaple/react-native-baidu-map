var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Config.ts" />
/// <reference path="../../Base/Utils/Http.ts" />
var Net;
(function (Net) {
    /**
     * WebApi层
     * 单例 使用WebApi.instance
     */
    var WebApi = /** @class */ (function (_super) {
        __extends(WebApi, _super);
        function WebApi() {
            return _super.call(this, GameConfig.GameID) || this;
        }
        WebApi.GetInstance = function () {
            if (!this.instance) {
                this.instance = new WebApi();
                this.instance.SetToken();
            }
            return this.instance;
        };
        /**
         * 获取投注信息信息
         * @param successHandler 成功回调
         * @param errorhandler 失败回调
         */
        WebApi.prototype.GetBetRecord = function (dto, successHandler, errorhandler) {
            this.http.Post(Net.ApiConfig.GetBetRecord, dto, this.header, function (response) {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    var dto_1 = new Dto.HandlerDto();
                    dto_1.Data = response.Data;
                    successHandler.runWith(dto_1);
                }
                else {
                    errorhandler.runWith(response.ErrorCode);
                }
            }, function (error) {
                errorhandler.runWith(error.toString());
            });
        };
        return WebApi;
    }(WebApiBaseCtrl));
    Net.WebApi = WebApi;
})(Net || (Net = {}));
