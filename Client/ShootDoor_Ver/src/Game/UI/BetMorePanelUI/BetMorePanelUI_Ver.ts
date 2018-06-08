namespace ScenePanel {
    export class BetMorePanelVer extends BetMorePanelBaseUI {
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        constructor() {
            super(false);          
            if (GameConfig.RatioType) {
                this.ui.time.scale(GameConfig.LengthShort, 1);
                this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                this.ui.Title.scale(GameConfig.LengthShort, 1);
                for(let i:number = 0;i < 52;i++){
                    let Box:Laya.Box = this.ui.BetBox.getChildAt(i) as Laya.Box;
                    let child1:Laya.Label = Box.getChildAt(1) as Laya.Label;
                    let child2:Laya.Label = Box.getChildAt(2) as Laya.Label;
                    let child3:Laya.Button = Box.getChildAt(3) as Laya.Button;
                    let child4:Laya.Button = Box.getChildAt(4) as Laya.Button;
                    child1.scale(GameConfig.LengthShort, 1);
                    child2.scale(GameConfig.LengthShort, 1);
                    child3.scale(GameConfig.LengthShort, 1);
                    child4.scale(GameConfig.LengthShort, 1);
                }
                this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
            } else {
                this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
                this.ui.time.scale(1, GameConfig.LengthShort);
                this.ui.Title.scale(1, GameConfig.LengthShort);
                this.ui.ConfirmBetBtn.scale(1, GameConfig.LengthShort);
                this.ui.CancleBetBtn.scale(1, GameConfig.LengthShort);
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
            // console.log(i,value);
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
            let betBoxChild: any = this.ui.BetBox.getChildByName(Enum.BetMorePosType[i]);
            let curBetPosChip = betBoxChild.getChildAt(4) as Laya.Button;
            //从对象池获取移动对象
            this.ChipsFlyCallBack(curBetPosChip,value);
        }
    }
}
