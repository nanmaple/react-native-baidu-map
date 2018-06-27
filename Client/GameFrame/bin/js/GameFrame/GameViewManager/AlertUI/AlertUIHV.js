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
var AlertHV = /** @class */ (function (_super) {
    __extends(AlertHV, _super);
    function AlertHV() {
        return _super.call(this) || this;
    }
    /**
 * 点击确定
 */
    AlertHV.prototype.OnClickSure = function () {
        this.Hide();
    };
    /**
     * 点击取消
     */
    AlertHV.prototype.OnClickCancel = function () {
        this.Hide();
    };
    /**
     * 弹出框类型判断
     * @param type
     */
    AlertHV.prototype.AlertType = function (type) {
        if (!this.ui) {
            return;
        }
        if (type == AlertType.None) {
            this.ui.sure.visible = false;
            this.ui.cancel.visible = false;
        }
        if (type == AlertType.OlnySure) {
            this.ui.cancel.visible = false;
            this.ui.sure.centerX = 0;
        }
        if (type == AlertType.All) {
            this.ui.sure.visible = true;
            this.ui.cancel.visible = true;
        }
    };
    /**
     * 弹出提示框
     * @param txt 显示内容
     */
    AlertHV.prototype.Show = function (type, txt) {
        if (type === void 0) { type = 0; }
        if (!this.ui) {
            return;
        }
        this.alertType = type;
        this.AlertType(type);
        this.ui.prompt.scale(0, 0);
        this.alertShow = true;
        this.alertTxt = LanguageUtils.Language.GetLanguage(txt);
        this.ui.visible = this.alertShow;
        this.ui.txt.text = this.alertTxt;
        Laya.Tween.to(this.ui.prompt, { scaleX: 1, scaleY: 1 }, 500, Laya.Ease.backOut);
    };
    /**
     * 关闭弹出框
     */
    AlertHV.prototype.Hide = function () {
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
    AlertHV.prototype.Refresh = function () {
    };
    /**
     * 设置显示文本内容
     * @param data
     */
    AlertHV.prototype.Set = function (data) {
        this.alertTxt = data;
        this.ui.txt.text = this.alertTxt;
    };
    return AlertHV;
}(AlertBaseUI));
//# sourceMappingURL=AlertUIHV.js.map