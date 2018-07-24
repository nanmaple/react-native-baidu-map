/**
 * 结果面板基类
 */
var BaseResultPanel = /** @class */ (function () {
    function BaseResultPanel() {
    }
    /**
     * 重置屏幕
     */
    BaseResultPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ResultPanelUI();
        this.ui.zOrder = 8;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.x = 115;
        this.ui.y = 97;
        this.ui.visible = false;
    };
    /**
     * “赢”执行的方法
     * @param data 游戏结果数据
     */
    BaseResultPanel.prototype.ResultWin = function (data) {
        this.ui.winImg.visible = true;
        this.ui.failImg.visible = false;
        this.ui.winNote.visible = true;
        this.ui.failNote.visible = false;
        this.TextResult(data);
    };
    /**
     * 输入游戏结果文字
     * @param data 游戏结果数据
     */
    BaseResultPanel.prototype.TextResult = function (data) {
        var resultPoint = "" + data.Dices[0] + "、" + data.Dices[1] + "、" + data.Dices[2] + "";
        this.ui.wordResultPoint.changeText(resultPoint);
        var result = LanguageUtils.Language.Get(Enum.GameBetType[data.Result]);
        this.ui.wordResult.changeText(result);
    };
    /**
     * “输”执行的方法
     */
    BaseResultPanel.prototype.ResultFail = function () {
        this.ui.failImg.visible = true;
        this.ui.winImg.visible = false;
        this.ui.failNote.visible = true;
        this.ui.winNote.visible = false;
    };
    return BaseResultPanel;
}());
//# sourceMappingURL=BaseResultPanel.js.map