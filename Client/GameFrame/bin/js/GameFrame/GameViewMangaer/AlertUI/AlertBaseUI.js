/**
 * 弹出框类型
 */
var PromptType;
(function (PromptType) {
    PromptType[PromptType["None"] = 0] = "None";
    PromptType[PromptType["OlnySure"] = 1] = "OlnySure";
    PromptType[PromptType["All"] = 2] = "All";
})(PromptType || (PromptType = {}));
var AlertBaseUI = (function () {
    /**
     * 构造函数
     * @param isHor 是否横版
     */
    function AlertBaseUI(isHor) {
        if (isHor) {
            this.ui = new ui.PromptUI();
        }
        else {
            this.ui = new ui.Prompt_VerUI();
        }
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 9;
        this.ui.cacheAs = "bitmap";
        this.uiData = GameUIData.GetInstance();
        this.ui.visible = this.uiData.alertShow;
        this.ui.txt.text = this.uiData.alertTxt;
        this.AlertType(this.uiData.alertType);
        //确认、取消按钮绑定点击事件
        this.ui.close.on(Laya.Event.CLICK, this, this.HideAlert);
        this.ui.sure.on(Laya.Event.CLICK, this, this.OnClickSure);
        this.ui.cancel.on(Laya.Event.CLICK, this, this.OnClickCancel);
        if (GameConfig.RatioType) {
            this.ui.prompt.scale(GameConfig.LengthShort, 1);
        }
        else {
            this.ui.prompt.scale(1, GameConfig.ShortLength);
        }
    }
    /**
     * 获取UI
     */
    AlertBaseUI.prototype.GetUI = function () {
        return this.ui;
    };
    /**
     * 点击确定
     */
    AlertBaseUI.prototype.OnClickSure = function () {
        this.HideAlert();
    };
    /**
     * 点击取消
     */
    AlertBaseUI.prototype.OnClickCancel = function () {
        this.HideAlert();
    };
    /**
     * 弹出框类型判断
     * @param type
     */
    AlertBaseUI.prototype.AlertType = function (type) {
        if (type == PromptType.None) {
            this.ui.sure.visible = false;
            this.ui.cancel.visible = false;
        }
        if (type == PromptType.OlnySure) {
            this.ui.cancel.visible = false;
            this.ui.sure.centerX = 0;
        }
        if (type == PromptType.All) {
            this.ui.sure.visible = true;
            this.ui.cancel.visible = true;
        }
    };
    /**
     * 弹出提示框
     * @param txt 显示内容
     */
    AlertBaseUI.prototype.ShowAlert = function (type, txt) {
        if (type === void 0) { type = 0; }
        this.uiData.alertType = type;
        this.AlertType(type);
        this.ui.prompt.scale(0.5, 0.5);
        this.uiData.alertShow = true;
        this.uiData.alertTxt = txt;
        this.ui.visible = this.uiData.alertShow;
        this.ui.txt.text = this.uiData.alertTxt;
        Laya.Tween.to(this.ui.prompt, { scaleX: 1, scaleY: 1 }, 1000, Laya.Ease.elasticOut);
    };
    /**
     * 关闭弹出框
     */
    AlertBaseUI.prototype.HideAlert = function () {
        this.uiData.alertShow = false;
        this.ui.visible = this.uiData.alertShow;
    };
    AlertBaseUI.prototype.Refresh = function () {
    };
    AlertBaseUI.prototype.Set = function () {
    };
    return AlertBaseUI;
}());
//# sourceMappingURL=AlertBaseUI.js.map