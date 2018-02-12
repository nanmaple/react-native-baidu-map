class LoadingrPanelCtrl extends Laya.Sprite {
    private onClose: Laya.Handler;   //加载进度回调
    private loadingScenes: ScenePanel.LoadingPanel;
    constructor(onClose?: Laya.Handler) {
        super();
        this.onClose = onClose;
    }
}