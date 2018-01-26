class LoadingrPanelCtrl extends Laya.Sprite {
    private onClose: Laya.Handler;   //加载进度回调
    private loadingScenes: ScenePanel.LoadingPanel;
    constructor(onClose?: Laya.Handler) {
        super();
        this.onClose = onClose;
    }
    // /**
    //  * 显示loading
    //  */
    // public LoadingShow(): void {
        // this.loadingScenes = Laya.Pool.getItemByClass("loading", ScenePanel.LoadingPanel);
    //     Laya.stage.addChild(this.loadingScenes);
    // }
    // /**
    //  * 隐藏loading
    //  */
    // public LoadingClose(): void {
    //     this.loadingScenes.removeSelf();
    //     Laya.Pool.recover("loading", this.loadingScenes);
    // }
}