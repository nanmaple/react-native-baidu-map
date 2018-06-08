namespace ScenePanel {
    export class BetMorePanelHor extends BetMorePanelBaseUI {

        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.Prompt.scale(1, GameConfig.LengthShort);
                this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.Prompt.scale(GameConfig.ShortLength, 1);
                this.ui.MsgPanel.scale(GameConfig.ShortLength, 1);
            }
            //绑定事件
            this.BindClick();
        }

        /**
         * 筹码动画
         * @param endX 结束位置x坐标
         * @param endY 结束位置y坐标
         * @param curBetPosChip 投注位置上的筹码
         * @param value 投注金额         
         * @param value 缓动后投注数量
         */
        public ChipsFly(i: number, value: number): void {
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
            let betBoxChild: any = this.ui.BetBox.getChildByName(Enum.BetMorePosType[i]);
            let curBetPosChip = betBoxChild.getChildAt(4) as Laya.Button;
            //从对象池获取移动对象
            this.ChipsFlyCallBack(curBetPosChip,value);
        }
    }
}
