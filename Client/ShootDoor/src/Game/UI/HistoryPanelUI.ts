namespace ScenePanel {
    export class HistoryPanel extends ui.HistoryRecordUI {
        public listBoxH: number;   //历史列表每一行的高度
        private hander: Laya.Handler;
        public flyPoker: any;
        constructor() {
            super();
            this.cacheAs = "bitmap";
            this.left = 20;
            this.top = 100;
            if (GameConfig.RatioType) {
                this.history.scale(GameConfig.HeightWidth, 1);
            } else {
                this.history.scale(1, GameConfig.WidthHeight);
            }
            this.listBoxH = this.listPanel.height / 5;
        }
        /**
         * 滚动历史列表
         */
        public ScrollHistoryList(hander: Laya.Handler): void {
            Laya.Tween.to(this._list, { y: this.listBoxH }, 2000, Laya.Ease.quadInOut, Laya.Handler.create(this, this.ResetHistoryList));
            this.hander = hander;
        }
        /**
         * 重置历史列表
         */
        private ResetHistoryList(): void {
            this._list.y = 0;
            this.hander.run();
        }

        /**
         * 获取牌面结束位置和宽高
         */
        public GetEndFlyPoker(): void {
            if (!this.flyPoker) {
                this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }]
                //循环创建扑克牌数组
                for (let i: number = 0; i < 3; i++) {
                    let poker: Laya.Image = this["pokerPos" + i] as Laya.Image;
                    if (GameConfig.RatioType) {
                        this.flyPoker[i].width = poker.width * GameConfig.HeightWidth;
                        this.flyPoker[i].height = poker.height;
                        this.flyPoker[i].x = poker.x * GameConfig.HeightWidth + 20 + this.flyPoker[i].width / 2;
                        this.flyPoker[i].y = poker.y + 100 + this.flyPoker[i].height / 2;
                    } else {
                        this.flyPoker[i].width = poker.width;
                        this.flyPoker[i].height = poker.height * GameConfig.WidthHeight;
                        this.flyPoker[i].x = poker.x + 20 + this.flyPoker[i].width / 2;
                        this.flyPoker[i].y = poker.y * GameConfig.WidthHeight + 100 + this.flyPoker[i].height / 2;
                    }
                }
            }
            return this.flyPoker;
        }

    }

}