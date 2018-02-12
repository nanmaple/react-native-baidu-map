namespace ScenePanel {
    export class LoadingPanel extends ui.LoadingUI {
        constructor() {
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap";
            this.centerX = 0;
            this.centerY = 0;
            this.visible = false;
            this.on(Laya.Event.CLICK, this, () => {
             });
        }
        /**
         * 显示loading
         */
        public ShowLoading(): void {
            this.visible = true;
            this.loadingAni.play();
        }
        /**
         * 隐藏loading
         */
        public HideLoading(): void {
            this.visible = false;
            this.loadingAni.stop();
        }

        /**
         * 显示Connect Server
         */
        public ShowConnect(): void {
            this.visible = true;
            (this.connectServer as Laya.Label).visible = true;
            (this.loadingAni as Laya.Animation).visible = false;
        }

        /**
         * 隐藏Connect Server
         */
        public HideConnect(): void {
            this.visible = false;
            (this.connectServer as Laya.Label).visible = false;
            (this.loadingAni as Laya.Animation).visible = true;
        }
    }
}