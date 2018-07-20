/**
 * 结果面板基类
 */
class BaseResultPanel {
    protected ui: ui.ResultPanelUI;
    constructor() {
    }

    /**
     * 重置屏幕
     */
    public ResetScreen(): void {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ResultPanelUI();
        this.ui.zOrder = 8;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.x = 115;
        this.ui.y = 97;
        this.ui.visible = false;
    }
    /**
     * “赢”执行的方法
     * @param data 游戏结果数据
     */
    protected ResultWin(data: any): void {
        this.ui.winImg.visible = true;
        this.ui.failImg.visible = false;
        this.ui.winNote.visible = true;
        this.ui.failNote.visible = false;
        this.TextResult(data);
    }
    /**
     * 输入游戏结果文字
     * @param data 游戏结果数据
     */
    private TextResult(data) {
        let resultPoint = "" + data.Dices[0] + "、" + data.Dices[1] + "、" + data.Dices[2] + "";
        this.ui.wordResultPoint.changeText(resultPoint);
        let result = LanguageUtils.Language.Get(Enum.GameBetType[data.Result]);
        this.ui.wordResult.changeText(result);
    }
    /**
     * “输”执行的方法
     */
    protected ResultFail(): void {
        this.ui.failImg.visible = true;
        this.ui.winImg.visible = false;
        this.ui.failNote.visible = true;
        this.ui.winNote.visible = false;
    }

}
