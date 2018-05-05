namespace ScenePanel {
    export class BetPanelVer extends BetPanelBaseUI {
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        constructor() {
            super(false);
            if (GameConfig.RatioType) {
                this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
                this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                this.ui.Chips.scale(GameConfig.LengthShort, 1);
                for(let i:number = 0;i < 13;i++){
                    let Box:Laya.Box = this.ui.BetBox.getChildAt(i) as Laya.Box;
                    let child1:Laya.Label = Box.getChildAt(0) as Laya.Label;
                    let child2:Laya.Label = Box.getChildAt(1) as Laya.Label;
                    let child3:Laya.Button = Box.getChildAt(2) as Laya.Button;
                    child1.scale(GameConfig.LengthShort, 1);
                    child2.scale(GameConfig.LengthShort, 1);
                    child3.scale(GameConfig.LengthShort, 1);
                }
                this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                this.ui.Chips.bottom = 655;
            } else {
                this.ui.CancleBetBtn.scale(1, GameConfig.ShortLength);
                this.ui.ConfirmBetBtn.scale(1, GameConfig.ShortLength);
                this.ui.Chips.scale(1, GameConfig.ShortLength);
                this.ui.ChipsBg.scale(1, GameConfig.ShortLength);
                this.ui.BetBox.scale(1, GameConfig.ShortLength);
                this.ui.BetBg.scale(1, GameConfig.ShortLength);
                this.ui.MsgPanel.scale(1, GameConfig.ShortLength);
                this.baseX = 18;
                this.ui.Chips.bottom = 655 * GameConfig.ShortLength;
                this.ui.ChipsBg.bottom = 655 * GameConfig.ShortLength;
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
            let y: number = 1334;
            this.baseX = 18;
            if (GameConfig.RatioType) {
                this.ui.Chips.bottom = 655;
                y = y - this.ui.Chips.bottom - this.ui.Chips.height / 2;
                this.baseX = this.baseX + 357 * (1 - GameConfig.LengthShort);
            } else {
                y = y - this.ui.Chips.bottom - this.ui.Chips.height * GameConfig.ShortLength / 2;
            }
            let length: number = this.chipsBtn.length;
            for (let i = 0; i < length; i++) {
                let x: number = this.baseX;
                if (GameConfig.RatioType) {
                    x = x + this.chipsBtn[i].x * GameConfig.LengthShort;
                } else {
                    x = x + this.chipsBtn[i].x; 
                }
                this.chipsPoint.push(new Laya.Point(x, y));
            }
        }

        /**
        * 获取所有投注位置坐标
        */
        public GetBetBtnPoint(): void {
            let baseY: number = 1334;
            let baseX: number = 375;
            if (GameConfig.RatioType) {
                baseY = baseY - 642;
                baseX = baseX * (1 - GameConfig.LengthShort);
            } else {
                baseY = baseY - 642 * GameConfig.ShortLength;
                baseX = 0;
            }
            let length: number = this.betMoneyLabelArr.length;
            for (let i = 0; i < length; i++) {
                let x: number = this.betMoneyLabelArr[i].x + (this.betMoneyLabelArr[i].parent as Laya.Image).x;
                let y: number = this.betMoneyLabelArr[i].y + (this.betMoneyLabelArr[i].parent as Laya.Image).y;
                if (GameConfig.RatioType) {
                    x = x;
                    y = baseY + y;
                } else {
                    x = x;
                    y = baseY + y * GameConfig.ShortLength;
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
                flyChip.scale(1.1 * GameConfig.LengthShort, 1.1);
                obj.scaleX = GameConfig.LengthShort;
            } else {
                flyChip.scale(1.1, 1.1 * GameConfig.ShortLength);
                obj.scaleY = GameConfig.ShortLength;
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
