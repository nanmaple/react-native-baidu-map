/// <reference path="../../GameFrame/GameViewManager/Scale.ts"/>
abstract class HistoryBaseUI {
    protected ui: ui.HistoryRecordHUI | ui.HistoryRecordVUI;
    protected listBoxH: number = 0;
    constructor() {

    }

    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.HistoryRecordVUI();
        } else {
            this.ui = new ui.HistoryRecordHUI();
            this.ui.left = 20;
            this.ui.top = 100;
        }
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        this.listBoxH = this.ui.listPanel.height / 5;
        Laya.stage.addChild(this.ui);
        this.Refresh();
    }

    /**
     * 日志
     * @param msg 日志内容 
     * @param key 日志key值
     */
    protected Log(msg: any = "", key: string = "log"): void {
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    }

    abstract Refresh():void;

}
