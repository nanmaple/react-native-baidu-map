namespace ScenePanel {
    export class TipsPanel extends ui.TipsPanelUI {
        constructor() {
            super();
            this.closeBtn.on(Laya.Event.CLICK, this, this.CloseTip);
            this.visible = false;
            if (GameConfig.RatioType) {
                this.closeBtn.scale(GameConfig.HeightWidth, 1);
            } else {
                this.closeBtn.scale(1, GameConfig.WidthHeight);
            }
        }
        /**
         * 显示面板
         */
        public ShowTip(): void {
            this.visible = true;
        }
        /**
         * 关闭面板
         */
        public CloseTip(): void {
            this.visible = false;
        }
    }
}