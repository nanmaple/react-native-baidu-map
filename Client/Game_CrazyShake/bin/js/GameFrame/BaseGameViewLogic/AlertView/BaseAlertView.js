/**
 * 弹出框类型
 */
var AlertType;
(function (AlertType) {
    AlertType[AlertType["None"] = 0] = "None";
    AlertType[AlertType["OlnySure"] = 1] = "OlnySure";
    AlertType[AlertType["All"] = 2] = "All";
})(AlertType || (AlertType = {}));
var BaseAlertView = /** @class */ (function () {
    function BaseAlertView() {
        this.alertShow = false; //是否显示
        this.alertTxt = null; //显示文本内容
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    BaseAlertView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.AlertViewUI();
        //将提示UI类缓存为静态图像
        this.ui.zOrder = 999;
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
    return BaseAlertView;
}());
//# sourceMappingURL=BaseAlertView.js.map