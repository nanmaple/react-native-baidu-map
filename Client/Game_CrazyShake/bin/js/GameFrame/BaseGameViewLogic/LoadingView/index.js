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
/// <reference path="./BaseLoadingView.ts"/>
/// <reference path="../IView.ts"/>
var LoadingView = /** @class */ (function (_super) {
    __extends(LoadingView, _super);
    function LoadingView() {
        return _super.call(this) || this;
    }
    /**
     * 显示loading
     */
    LoadingView.prototype.ShowLoading = function (txt) {
        this.loadingShow = true;
        this.loadingTxt = LanguageUtils.Language.Get(txt);
        if (!this.ui) {
            return;
        }
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
    };
    /**
     * 隐藏loading
     */
    LoadingView.prototype.HideLoading = function () {
        this.loadingShow = false;
        if (!this.ui) {
            return;
        }
        this.ui.visible = this.loadingShow;
    };
    /**
     * Loading加载处理
     * @param data
     */
    LoadingView.prototype.Set = function (data) {
        switch (data.Type) {
            case BaseEnum.GameModalEnum.Close:
                this.HideLoading();
                break;
            case BaseEnum.GameModalEnum.Open:
                this.ShowLoading("ConnectService");
                break;
            case BaseEnum.GameModalEnum.Msg:
                this.ShowLoading(data.Data);
                break;
            case BaseEnum.GameModalEnum.LoginOut:
                this.ShowLoading("AccountLoginOut");
                break;
            case BaseEnum.GameModalEnum.MemClose:
                this.ShowLoading("MemberClosed");
                break;
            default:
                break;
        }
    };
    /**
     * 刷新
     */
    LoadingView.prototype.Refresh = function () {
    };
    return LoadingView;
}(BaseLoadingView));
//# sourceMappingURL=index.js.map