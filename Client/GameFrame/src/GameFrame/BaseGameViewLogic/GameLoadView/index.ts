/// <reference path="./BaseGameLoadView.ts"/>
/// <reference path="../IView.ts"/>
class GameLoadView extends BaseGameLoadView implements IView {
    /**
     * 事件通知key
     */
    private viewEventKey: string = "";
    constructor(eventKey:string) {
        super();
        this.viewEventKey = eventKey;
    }

    /**
     * 设置进度
     * @param data 
     */
    public Set(data: any): void {
        this.progress = data;
        this.Refresh();
    }

    /**
     * 刷新界面效果
     */
    public Refresh(): void {
        if (!this.ui) {
            return;
        }
        this.ui.progressLabel.text = Math.round(this.progress * 100) + "%";
    }

    /**
     * 移除加载资源界面
     */
    public Remove(): void {
        if (!this.ui) {
            return;
        }
        Laya.stage.removeChild(this.ui);
    }

    /**
     * 开始加载
     * @param dataArr 
     */
    public StartLoad(dataArr: Array<any>) {
        Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.Set, null, false));
    }

    /**
     * 游戏资源加载完成
     */
    private onLoadResource(): void {
        let broadcast: Dto.BroadcastDto = new Dto.BroadcastDto();
        broadcast.Type = Enum.ListenViewEnum.GameLoadComplate;
        let event = new CustomEvent(this.viewEventKey, { detail: broadcast });
        document.dispatchEvent(event);
    }
}
