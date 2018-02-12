namespace ScenePanel {
    export abstract class LoadingPanelBaseUI {
        protected ui: ui.LoadingUI | ui.Loading_VerUI;
        protected uiData: LoadingPanelUIData;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.LoadingUI();
            } else {
                this.ui = new ui.Loading_VerUI();
            }
            this.ui.zOrder = 9;
            this.ui.cacheAs = "bitmap";
            this.ui.visible = false;
            this.ui.on(Laya.Event.CLICK, this, () => {

            });
            this.uiData = LoadingPanelUIData.GetInstance();
            if (this.uiData && this.uiData.showLoading) {
                this.ShowLoading();
            }

            if (this.uiData && this.uiData.showConnect) {
                this.ShowConnect();
            }
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.LoadingUI | ui.Loading_VerUI {
            return this.ui;
        }

        /**
         * 显示loading
         */
        public ShowLoading(): void {
            this.uiData.showLoading = true;
            this.ui.visible = this.uiData.showLoading;
            this.ui.loadingAni.play();
        }
        /**
         * 隐藏loading
         */
        public HideLoading(): void {
            this.uiData.showLoading = false;
            this.ui.visible = this.uiData.showLoading;
            this.ui.loadingAni.stop();
        }

        /**
         * 显示Connect Server
         */
        public ShowConnect(): void {
            this.uiData.showConnect = true;
            this.ui.visible = this.uiData.showConnect;
            (this.ui.connectServer as Laya.Label).visible = true;
            (this.ui.loadingAni as Laya.Animation).visible = false;
        }

        /**
         * 隐藏Connect Server
         */
        public HideConnect(): void {
            this.uiData.showConnect = false;
            this.ui.visible = this.uiData.showConnect;
            (this.ui.connectServer as Laya.Label).visible = false;
            (this.ui.loadingAni as Laya.Animation).visible = true;
        }
    }
}