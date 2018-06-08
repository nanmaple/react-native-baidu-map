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
        if (!this.ui) {
            return;
        }
        this.loadingShow = true;
        this.loadingTxt = txt;
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
    LoadingHV.prototype.LoadingHandle = function (data) {
        switch (data.Type) {
            case GameEnum.GameModalEnum.Close:
                this.HideLoading();
                break;
            case GameEnum.GameModalEnum.Open:
                this.ShowLoading("Connect Service");
                break;
            case GameEnum.GameModalEnum.Msg:
                this.ShowLoading(data.Data);
                break;
            case GameEnum.GameModalEnum.LoginOut:
                this.ShowLoading("你的账户已在其他地方登陆");
                break;
            case GameEnum.GameModalEnum.MemClose:
                this.ShowLoading("账户已关闭");
                break;
            default:
                break;
        }
    };
    LoadingHV.prototype.Refresh = function () {
    };
    /**
     * 设置文本显示内容
     * @param data
     */
    LoadingHV.prototype.Set = function (data) {
        if (!this.ui) {
            return;
        }
        this.loadingTxt = data;
        this.ui.txt.text = this.loadingTxt;
    };
    return LoadingHV;
}(LoadingBaseUI));
//# sourceMappingURL=LoadingUIHV.js.map