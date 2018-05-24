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
/// <reference path="WebApiBase.ts" />
var Network;
(function (Network) {
    var Http;
    (function (Http) {
        /**
         * WebApi层
         * 单例 使用WebApi.instance
         */
        var WebApi = /** @class */ (function (_super) {
            __extends(WebApi, _super);
            function WebApi() {
                return _super.call(this) || this;
            }
            /**
             * 单例
             */
            WebApi.GetInstance = function () {
                if (!this.instance) {
                    this.instance = new WebApi();
                    this.instance.InitHttp();
                    this.instance.InitToken();
                }
                return this.instance;
            };
            return WebApi;
        }(WebApiBase));
        Http.WebApi = WebApi;
    })(Http = Network.Http || (Network.Http = {}));
})(Network || (Network = {}));
//# sourceMappingURL=index.js.map