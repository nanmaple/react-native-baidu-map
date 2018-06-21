/**
 * 弹出框类型
 */
var AlertType;
(function (AlertType) {
    AlertType[AlertType["None"] = 0] = "None";
    AlertType[AlertType["OlnySure"] = 1] = "OlnySure";
    AlertType[AlertType["All"] = 2] = "All";
})(AlertType || (AlertType = {}));
var AlertBaseUI = /** @class */ (function () {
    function AlertBaseUI() {
        this.alertShow = false; //是否显示
        this.alertTxt = null; //显示文本内容
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    AlertBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.AlertVUI();
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(GameConfig.LengthShort, 1);
            }
            else {
                this.ui.prompt.scale(1, GameConfig.ShortLength);
            }
        }
        else {
            this.ui = new ui.AlertHUI();
            if (GameConfig.RatioType) {
                this.ui.prompt.scale(1, GameConfig.LengthShort);
            }
            else {
                this.ui.prompt.scale(GameConfig.ShortLength, 1);
            }
        }
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 10;
        this.ui.cacheAs = "bitmap";
        //确认、取消按钮绑定点击事件
        this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.sure.on(Laya.Event.CLICK, this, this.OnClickSure);
        this.ui.cancel.on(Laya.Event.CLICK, this, this.OnClickCancel);
        this.AlertType(this.alertType);
        this.ui.visible = this.alertShow;
        this.ui.txt.text = this.alertTxt;
        Laya.stage.addChild(this.ui);
    };
    return AlertBaseUI;
}());
//# sourceMappingURL=AlertBaseUI.js.map