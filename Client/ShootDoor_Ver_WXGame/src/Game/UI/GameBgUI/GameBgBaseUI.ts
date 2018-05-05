namespace ScenePanel {
    export abstract class GameBgBaseUI {
        protected ui: ui.GameBgUI | ui.GameBg_VerUI;
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.GameBgUI();
            } else {
                this.ui = new ui.GameBg_VerUI();
            }
            this.ui.zOrder = 1;
            this.ui.cacheAs = "bitmap";
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.GameBgUI | ui.GameBg_VerUI {
            return this.ui;
        }
    }


}