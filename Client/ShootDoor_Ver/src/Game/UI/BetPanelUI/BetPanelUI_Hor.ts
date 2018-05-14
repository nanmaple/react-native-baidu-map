namespace ScenePanel {
    export class BetPanelHor extends BetPanelBaseUI {

        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        constructor() {
            super(true);
            if (GameConfig.RatioType) {
                this.ui.CancleBetBtn.scale(1, GameConfig.LengthShort);
                this.ui.ConfirmBetBtn.scale(1, GameConfig.LengthShort);
                this.ui.Chips.scale(1, GameConfig.LengthShort);
                this.ui.BetBox.scale(1, GameConfig.LengthShort);
                this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
            } else {
                this.ui.CancleBetBtn.scale(GameConfig.ShortLength, 1);
                this.ui.ConfirmBetBtn.scale(GameConfig.ShortLength, 1);
                this.ui.Chips.scale(GameConfig.ShortLength, 1);
                this.ui.BetBox.scale(GameConfig.ShortLength, 1);
                this.ui.MsgPanel.scale(GameConfig.ShortLength, 1);
            }
            //绑定事件
            this.BindClick();
            this.ChangeChip(this.uiData.selectedChipNum);
        }


        /**
         * 获取筹码坐标
         * 
         */
        public GetChipsPoint(): void {
            let x: number = 1312;
            if (GameConfig.RatioType) {
                let width: number = this.ui.Chips.width
                x = x - width / 2;
            } else {
                let width: number = this.ui.Chips.width * GameConfig.ShortLength;
                x = x - width / 2;
            }
            let length: number = this.chipsBtn.length;
            for (let i = 0; i < length; i++) {
                let y: number = 100;
                if (GameConfig.RatioType) {
                    y += this.chipsBtn[i].y * GameConfig.LengthShort;
                } else {
                    y += this.chipsBtn[i].y;
                }
                this.chipsPoint.push(new Laya.Point(x, y));
            }
        }

        /**
        * 获取所有投注位置坐标
        */
        public GetBetBtnPoint(): void {
            let baseY: number = 750;
            let baseX: number = 667;
            if (GameConfig.RatioType) {
                baseY = baseY - 252 * GameConfig.LengthShort;
                baseX = 0;
            } else {
                baseY = baseY - 252;
                baseX = baseX * (1 - GameConfig.ShortLength);
            }
            let length: number = this.betMoneyLabelArr.length;
            for (let i = 0; i < length; i++) {
                let x: number = this.betMoneyLabelArr[i].x + (this.betMoneyLabelArr[i].parent as Laya.Image).x;
                let y: number = this.betMoneyLabelArr[i].y + (this.betMoneyLabelArr[i].parent as Laya.Image).y;
                if (GameConfig.RatioType) {
                    x = baseX + x;
                    y = baseY + y * GameConfig.LengthShort;
                } else {
                    x = baseX + x * GameConfig.ShortLength;
                    y = baseY + y;
                }
                let point = new Laya.Point(x, y);
                this.betBtnPoint.push(point);
            }
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
            let curBetPosChip = this.betBtnArr[i].getChildAt(2) as Laya.Button;
            //从对象池获取移动对象
            let flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
            //设置状态数
            flyChip.stateNum = 1;
            flyChip.label = this.chipPrice.toString();
            flyChip.anchorX = 0.5;
            flyChip.anchorY = 0.5;
            flyChip.skin = this.chipsNormalSkin;

            //筹码动画
            let endX = (this.betBtnPoint[i].x);
            let endY = (this.betBtnPoint[i].y);
            let obj: any = { x: endX, y: endY, scaleX: 1, scaleY: 1 }
            if (GameConfig.RatioType) {
                flyChip.scale(1.1, 1.1 * GameConfig.LengthShort);
                obj.scaleY = GameConfig.LengthShort;
            } else {
                flyChip.scale(1.1 * GameConfig.ShortLength, 1.1);
                obj.scaleX = GameConfig.ShortLength;
            }
            //设置初始位置为当前选择的筹码的位置
            flyChip.pos((this.chipsPoint[this.uiData.selectedChipNum.toString()].x), (this.chipsPoint[this.uiData.selectedChipNum.toString()].y));
            this.ui.addChild(flyChip);

            //开始缓动
            Laya.Tween.to(flyChip, obj, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, curBetPosChip, value], false));
            this.flyChipArray.push(flyChip);
        }
    }
}
