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
var LoadingHV = /** @class */ (function (_super) {
    __extends(LoadingHV, _super);
    function LoadingHV() {
        return _super.call(this) || this;
    }
    /**
     * 显示Connect Server
     */
    LoadingHV.prototype.ShowLoading = function (txt) {
        var language = new LanguageUtils.Language();
        if (!this.ui) {
            return;
        }
        this.loadingShow = true;
        this.loadingTxt = language.GetLanguage(txt);
        this.ui.visible = this.loadingShow;
        this.ui.txt.text = this.loadingTxt;
    };
    /**
     * 隐藏Connect Server
     */
    LoadingHV.prototype.HideLoading = function () {
        if (!this.ui) {
            return;
        }
        this.loadingShow = false;
        this.ui.visible = this.loadingShow;
    };
    /**
     * Loading加载处理
     * @param data
     */
    LoadingHV.prototype.Set = function (data) {
        switch (data.Type) {
            case GameEnum.GameModalEnum.Close:
                this.HideLoading();
                break;
            case GameEnum.GameModalEnum.Open:
                this.ShowLoading(LanguageUtils.Type.ConnectService);
                break;
            case GameEnum.GameModalEnum.Msg:
                this.ShowLoading(data.Data);
                break;
            case GameEnum.GameModalEnum.LoginOut:
                this.ShowLoading(LanguageUtils.Type.AccountLoginOut);
                break;
            case GameEnum.GameModalEnum.MemClose:
                this.ShowLoading(LanguageUtils.Type.MemberClosed);
                break;
            default:
                break;
        }
    };
    LoadingHV.prototype.Refresh = function () {
    };
    return LoadingHV;
}(LoadingBaseUI));
//# sourceMappingURL=LoadingUIHV.js.map