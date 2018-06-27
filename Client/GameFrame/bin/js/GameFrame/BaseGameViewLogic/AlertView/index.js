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
/// <reference path="./BaseAlertView.ts"/>
/// <reference path="../IView.ts"/>
var AlertView = /** @class */ (function (_super) {
    __extends(AlertView, _super);
    function AlertView() {
        return _super.call(this) || this;
    }
    /**
     * 点击确定
     */
    AlertView.prototype.OnClickSure = function (handler) {
        this.Hide();
        if (typeof handler !== "undefined") {
            handler.run();
        }
    };
    /**
     * 点击取消
     */
    AlertView.prototype.OnClickCancel = function (handler) {
        this.Hide();
        if (typeof handler !== "undefined") {
            handler.run();
        }
    };
    /**
     * 弹出框类型判断
     * @param type
     */
    AlertView.prototype.AlertType = function (type) {
        if (!this.ui) {
            return;
        }
        switch (type) {
            case AlertType.None:
                this.ui.sure.visible = false;
                this.ui.cancel.visible = false;
                break;
            case AlertType.OlnySure:
                this.ui.cancel.visible = false;
                this.ui.sure.centerX = 0;
                break;
            case AlertType.All:
                this.ui.sure.visible = true;
                this.ui.cancel.visible = true;
                break;
            default:
                break;
        }
    };
    /**
     * 弹出提示框
     * @param txt 显示内容
     */
    AlertView.prototype.Show = function (type, txt) {
        if (type === void 0) { type = 0; }
        if (!this.ui) {
            return;
        }
        this.alertType = type;
        this.AlertType(type);
        this.ui.prompt.scale(0, 0);
        this.alertShow = true;
        this.alertTxt = LanguageUtils.Language.Get(txt);
        this.ui.visible = this.alertShow;
        this.ui.txt.text = this.alertTxt;
        Laya.Tween.to(this.ui.prompt, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.backOut);
    };
    /**
     * 关闭弹出框
     */
    AlertView.prototype.Hide = function () {
        var _this = this;
        if (!this.ui) {
            return;
        }
        Laya.Tween.to(this.ui.prompt, { scaleX: 0, scaleY: 0 }, 500, Laya.Ease.backIn, Laya.Handler.create(this, function () {
            _this.alertShow = false;
            _this.ui.visible = _this.alertShow;
        }, null, false));
    };
    /**
     * 刷新
     */
    AlertView.prototype.Refresh = function () {
    };
    /**
     * 设置显示文本内容
     * @param data
     */
    AlertView.prototype.Set = function (data) {
        this.alertTxt = data;
        this.ui.txt.text = this.alertTxt;
    };
    return AlertView;
}(BaseAlertView));
//# sourceMappingURL=index.js.map