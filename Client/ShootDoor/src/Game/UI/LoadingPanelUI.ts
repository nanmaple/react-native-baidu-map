namespace ScenePanel {
   export class LoadingPanel extends ui.LoadingUI {
        constructor() {
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap";  
            this.centerX = 0;
            this.centerY = 0;
            this.visible = false;
        }
        /**
         * 显示loading
         */
        public ShowLoading():void{
            this.visible = true;
            this.loadingAni.play();
        }
        /**
         * 隐藏loading
         */
        public HideLoading():void{
            this.visible = false;
            this.loadingAni.stop();
        }
    }
}