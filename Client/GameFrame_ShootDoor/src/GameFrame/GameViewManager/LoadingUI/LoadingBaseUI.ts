
    abstract class LoadingBaseUI{
        protected ui: ui.LoadingHUI | ui.LoadingVUI;
        protected loadingShow:boolean = false;
        protected loadingTxt:string = null;
        constructor() {

        }

        /**
         * 切换横竖屏
         * @param isHor 是否为横屏
         */
        public ResetScreen(isVer?: boolean) {
            Laya.stage.removeChild(this.ui);
            if (isVer) {
                this.ui = new ui.LoadingVUI();
            } else {
                this.ui = new ui.LoadingHUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 8;
            this.ui.cacheAs = "bitmap";
            this.ui.visible = this.loadingShow;
            this.ui.txt.text = this.loadingTxt;
            this.ui.on(Laya.Event.CLICK, this, ()=>{
                return false;
            })
            Laya.stage.addChild(this.ui);
        }
    }
