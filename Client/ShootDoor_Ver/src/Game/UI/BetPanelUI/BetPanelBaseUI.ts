namespace ScenePanel {
    export enum ClickType {
        ODDS = 0,
        BET,
        CANCEL,
        CHIP
    }
    export class ClickResultDto {
        public Type: ClickType;
        public Data?: number | Enum.BetPosType;
    }

    export abstract class BetPanelBaseUI {
        protected ui: ui.BetPanelUI | ui.BetPanel_VerUI;
        protected uiData: BetPanelUIData;

        protected chipPrice: number = 5;                           //筹码
        protected selectedChip: Laya.Button;                       //当前选择的筹码对象
        protected chipsPoint: Laya.Point[] = new Array();          //全部筹码坐标
        protected betBtnPoint: Laya.Point[] = new Array();         //投注位置坐标
        protected betBtnArr: Laya.Box[] = new Array();             //投注按钮对象
        protected oddsLabelArr: Laya.Label[] = new Array();        //赔率表签
        protected betMoneyLabelArr: Laya.Button[] = new Array();   //投注位置上的筹码
        protected chipsBtn: Laya.Button[] = new Array();           //全部筹码
        protected maxBet: number = 0;                                  //最大限额
        protected minBet: number = 0;                                  //最小限额
        protected chipsNormalSkin = "ui/btn_chip.png";
        protected chipsSelectSkin = "ui/chip_s.png";
        protected flyChip: Laya.Button;                              //缓动对象
        protected baseX: number = 18;
        protected flyChipArray: Array<Laya.Button> = new Array<Laya.Button>();
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.BetPanelUI();
            } else {
                this.ui = new ui.BetPanel_VerUI();
            }
            this.ui.zOrder = 5;
            this.uiData = BetPanelUIData.GetInstance();

            this.ResetBetBtnLabel();
            this.DisabledBetBtn(true);
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.BetPanelUI | ui.BetPanel_VerUI {
            return this.ui;
        }


        /**
        * 设置点击事件回调handler回调
        * @param handler 
        */
        public SetClickHandelr(handler: Laya.Handler): void {
            //绑定回调
            this.uiData.handler = handler;
        }

        /**
         * 设置当前是否可以投注
         * @param isBetting 
         */
        public SetBetting(isBetting: boolean): void {
            this.uiData.isBetting = isBetting;
        }

        /**
    	* 给每一个Button绑定点击事件
    	* 为每一个Label绑定DataChange
    	* 存储Label中心点坐标
    	* 存储Btn对象
    	*/
        protected BindClick(): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            //绑定投注按钮
            for (let i = 1; i <= 13; i++) {
                let betBoxChild: any = this.ui.BetBox.getChildByName(Enum.BetPosType[i]);
                //绑定点击事件 
                betBoxChild.on(Laya.Event.CLICK, this, this.Bet, [i - 1]);
                this.betBtnArr.push(betBoxChild as Laya.Box);
                this.betMoneyLabelArr.push(betBoxChild.getChildAt(2) as Laya.Button);
                this.oddsLabelArr.push(betBoxChild.getChildAt(1) as Laya.Label);
                //设置多语言
                betBoxChild.getChildAt(0).text = language.GetLanguage(Enum.BetPosType[i].toLowerCase());
            }
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
            //筹码点击
            for (let i = 0; i < 5; i++) {
                let chip = this.ui.Chips.getChildAt(i) as Laya.Button;
                this.chipsBtn.push(chip);
                chip.on(Laya.Event.CLICK, this, this.ChangeChip, [i, chip.label]);
            }
            this.GetChipsPoint();
            this.GetBetBtnPoint();

        }

        /**
         * 获取筹码坐标
         * 
         */
        abstract GetChipsPoint(): void;

        /**
        * 获取所有投注位置坐标
        */
        abstract GetBetBtnPoint(): void;

        //还原btn样式,清空label
        public ResetBetBtnLabel(): void {
            //启用投注和撤销按钮
            this.DisabledBetBtn(true);
            //还原数值            
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betMoneyLabelArr[i].label = "0";
                this.betMoneyLabelArr[i].visible = false;
            }
        }

        public ClearFlyChip(): void {
            let length: number = this.flyChipArray.length;
            for (var index = length - 1; index >= 0; index--) {
                Laya.Tween.clearTween(this.flyChipArray[index]);
                (<Laya.Button>this.flyChipArray[index]).removeSelf();
                Laya.Pool.recover("flyChip", this.flyChipArray[index]);
                this.flyChipArray.splice(index, 1);
            }
        }

        /**
         * 禁用所有按钮
         */
        public DisabledAllBtn(): void {
            this.DisabledBetBtn(true);
            this.DisabledBetPanel(true);
        }
        /**
         * 禁用投注和取消按钮
         */
        public DisabledBetBtn(disabled: boolean = true): void {
            this.ui.ConfirmBetBtn.disabled = disabled;
            this.ui.CancleBetBtn.disabled = disabled;
        }
        //修改全部投注按钮状态（启用禁用）
        public DisabledBetPanel(disabled: boolean): void {
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].disabled = disabled;
            }
        }

        /**
         * 设置赔率
         * @param odds 服务器传来的赔率 
         */
        public SetOdds(odds: any): void {
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                let odd = odds[i + 1];
                if (odd == 0) {
                    this.oddsLabelArr[i].text = "---";
                    this.betBtnArr[i].disabled = true;
                } else {
                    this.oddsLabelArr[i].text = odds[i + 1];
                }
            }
        }

        /**
          * 投注
          * btn点击事件
          * @param i 当前点击的btn的序号 
          * 修改btn样式
          * 实例化一个缓动动画
          */
        private Bet(i: number): void {
            //启用确认投注按钮
            this.DisabledBetBtn(false);
            let params: ClickResultDto = {
                Type: ClickType.ODDS,
                Data: i + 1
            }
            this.uiData.handler.runWith(params);
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
        }

        /**
         * 设置不同位置的投注总金额
         */
        public SetBetPosMsg(BetResultMsg: any, UnSureBet?: any): void {
            //清空投注但未确认的注单信息
            if (UnSureBet) {
                for (let i = 0, len = UnSureBet.length; i < len; i++) {
                    let index: number = UnSureBet[i].BetPos - 1;
                    this.betMoneyLabelArr[index].visible = false;
                }
            }

            //无投注成功的注单，直接还原初始状态
            if (!BetResultMsg) {
                for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                    this.betMoneyLabelArr[i].label = "0";
                    this.betMoneyLabelArr[i].visible = false;
                }
                return;
            }
            for (let i in BetResultMsg) {
                let index: number = Number(i) - 1;
                if (!BetResultMsg[i]) {
                    this.betMoneyLabelArr[index].visible = false;
                } else if (!this.betMoneyLabelArr[index].visible) {
                    this.betMoneyLabelArr[index].visible = true;
                }
                if (this.betMoneyLabelArr[index].label !== BetResultMsg[i]) {
                    this.betMoneyLabelArr[index].label = BetResultMsg[i];
                }
            }

        }

        /**
         * 设置不同位置的投注总金额
         */
        public SetBetPos(BetResultMsg: any, UnSureBet?: any): void {
            //无投注成功的注单，直接还原初始状态
            let length: number = UnSureBet ? UnSureBet.length : 0;
            let unSucreData: any = {};
            if (UnSureBet && UnSureBet.length > 0) {
                for (let i = 0; i < length; i++) {
                    let index: number = UnSureBet[i].BetPos - 1;
                    unSucreData[UnSureBet[i].BetPos] = UnSureBet[i].Amount;
                }
                //启用确认投注按钮
                this.ui.ConfirmBetBtn.disabled = false;
                this.ui.CancleBetBtn.disabled = false;
            }
            if (!BetResultMsg) {
                BetResultMsg = {};
            }
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                let index: number = i + 1;
                this.betMoneyLabelArr[i].label = BetResultMsg[index] ? BetResultMsg[index] : 0 + (unSucreData[index] ? unSucreData[index] : 0);
                if (BetResultMsg[index] || unSucreData[index]) {
                    this.betMoneyLabelArr[i].visible = true;
                } else {
                    this.betMoneyLabelArr[i].visible = false;
                }
            }
        }

        /**
         * 游戏初始化
         */
        public GameInit(BetResultMsg: any, unSureBetMsg: any, canBet: boolean): void {
            if (canBet) {
                //禁用按钮
                this.DisabledBetPanel(false);
                this.SetBetting(true);
                //设置总投注金额
                this.SetBetPos(BetResultMsg, unSureBetMsg);
            } else {
                this.SetBetting(false);
                //设置总投注金额
                this.SetBetPos(BetResultMsg);
                //禁用按钮
                this.DisabledAllBtn();
            }
        }

        /**
         * 游戏结果
         */
        public GameResult(BetResultMsg: any): void {
            //设置总投注金额
            this.SetBetPos(BetResultMsg);
            //禁用按钮
            this.DisabledAllBtn();
        }

        /**
         * 设置投注限额
         * @param maxBet 
         * @param minBet 
         */
        public SetLimit(limit: Dto.LimitDto): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            //设置最大限额
            this.maxBet = limit.MaxBet;
            //设置最小限额
            this.minBet = limit.MinBet;
            this.ui.maxBetLabel.text = language.GetLanguage("Maximum")+`:${limit.MaxBet}`;
            this.ui.minBetLabel.text = language.GetLanguage("Minimum")+`:${limit.MinBet}`;
        }

        /**
         * 结算结果
         */
        public SettleResult(data: Dto.GameResultDto, betData: any): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            this.uiData.guessSuccess = false;
            //总赢数目
            let win: number = 0;
            let gameResult: Dto.CardInfoDto = JSON.parse(data.GameResult);
            let card: number = Utils.Poker.GetNumber(gameResult.ThirdCard);
            let msg: Array<string> = new Array<string>();
            for (let i in data.SettleResult) {
                if (data.SettleResult[i] > 0) {
                    if (card == 7) {
                        let pos: Enum.BetPosType = Number(i);
                        if (Enum.BetPosType.BIG == pos) {
                            (this.betBtnArr[Number(i) - 1] as Laya.Button).gray = false;
                            continue;
                        } else if (Enum.BetPosType.SMALL == pos) {
                            (this.betBtnArr[Number(i) - 1] as Laya.Button).gray = false;
                            continue;
                        } else if (Enum.BetPosType.ODD == pos) {
                            (this.betBtnArr[Number(i) - 1] as Laya.Button).gray = false;
                            continue;
                        } else if (Enum.BetPosType.EVEN == pos) {
                            (this.betBtnArr[Number(i) - 1] as Laya.Button).gray = false;
                            continue;
                        }
                    }
                    (this.betBtnArr[Number(i) - 1] as Laya.Button).gray = false;
                    if (data.SettleResult[i] > 100) {
                        data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                    }
                    (this.betMoneyLabelArr[Number(i) - 1] as Laya.Button).label = data.SettleResult[i];

                    this.uiData.guessSuccess = true;
                }
            }
            if (!this.uiData.guessSuccess) {
                this.ShowMsg(language.GetLanguage("gameFail"));
            }

        }

        /**
         * 确认投注
         * 生成注单
         */
        private ConfirmBet(): void {
            //启用投注和撤销按钮
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;

            let params: ClickResultDto = {
                Type: ClickType.BET
            }
            this.uiData.handler.runWith(params);
            this.ClearFlyChip();
        }

        /**
         * 取消投注
        */
        private CancleBet(): void {
            this.ResetBetBtnLabel();
            let params: ClickResultDto = {
                Type: ClickType.CANCEL
            }
            this.uiData.handler.runWith(params);
            this.ClearFlyChip();
        }

        /**
         * 切换筹码
         * @param i 筹码编号
         */

        protected ChangeChip(i: number): void {
            //获取当前点击的筹码  
            this.uiData.selectedChipNum = i;
            this.selectedChip = this.ui.Chips.getChildAt(i) as Laya.Button;
            this.chipPrice = Number(this.selectedChip.label);
            for (let i = 0; i < 5; i++) {
                let chip = this.ui.Chips.getChildAt(i) as Laya.Button;
                chip.skin = this.chipsNormalSkin;
                chip.scale(0.9, 0.9);
            }
            this.selectedChip.skin = this.chipsSelectSkin;
            this.selectedChip.scale(1.1, 1.1);
            if (this.uiData.handler) {
                let params: ClickResultDto = {
                    Type: ClickType.CHIP,
                    Data: this.chipPrice
                }
                this.uiData.handler.runWith(params);
            }
        }

        /**
         * 提示消息
         * @param txt 提示的信息
         */
        public ShowMsg(txt: string): void {
            this.ui.MsgPanel.changeText(txt);
            this.ui.MsgPanel.visible = true;
            Laya.timer.once(1500, this, () => { this.ui.MsgPanel.visible = false; });
        }



        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        protected ChipsFlyCallBack(flyChip: Laya.Button, curBetPosChip, value: number) {
            //回收
            flyChip.removeSelf();
            Laya.Pool.recover("flyChip", flyChip);
            if (this.uiData.isBetting) {
                //设置最终值 
                curBetPosChip.label = value.toString();
                //显示当前筹码
                curBetPosChip.visible = true;
            }
        }
    }
}