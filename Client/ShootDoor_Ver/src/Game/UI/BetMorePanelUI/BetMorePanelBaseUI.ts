namespace ScenePanel {

    export abstract class BetMorePanelBaseUI {
        protected ui: ui.BetMorePanelUI | ui.BetMorePanel_VerUI;
        protected uiData: BetMorePanelUIData;

        protected chipPrice: number = 5;                           //筹码
        protected selectedChip: Laya.Button;                       //当前选择的筹码对象
        protected chipsPoint: Laya.Point[] = new Array();          //全部筹码坐标
        protected betBtnPoint: Laya.Point[] = new Array();         //投注位置坐标
        protected betBtnArr: Laya.Box[] = new Array();             //投注按钮对象
        protected oddsLabelArr: Laya.Label[] = new Array();        //赔率表签
        protected betMoneyLabelArr: Laya.Button[] = new Array();   //投注位置上的筹码
        protected chipsBtn: Laya.Button[] = new Array();           //全部筹码
        protected timeEffect: TimeEffect;   //游戏时间效果
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.BetMorePanelUI();
            } else {
                this.ui = new ui.BetMorePanel_VerUI();
            }
            this.ui.zOrder = 8;
            this.uiData = BetMorePanelUIData.GetInstance();
            this.ui.visible = this.uiData.visible;

            this.ResetBetBtnLabel();
            this.DisabledBetBtn(true);
            this.ui.Close.on(Laya.Event.CLICK,this,this.HideBetMorePanel);
            this.timeEffect = new TimeEffect(this.ui.time);
        }
        /**
         * 开始倒计时
         * @param time 
         */
        public StartGameTime(time: number): void {
            this.ui.time.visible = true;
            this.timeEffect.StartGameTime(time);
        }
        /**
         * 游戏时间结束
         */
        public EndGameTime(): void {
            this.ui.time.visible = false;
            this.timeEffect.EndGameTime();
        }
        /**
         * 显示当前投注面板
         */
        ShowBetMorePanel():void{
            this.uiData.visible = true;
            this.ui.visible = this.uiData.visible;
        }
        /**
         * 隐藏当前投注面板
         */
        HideBetMorePanel():void{
            this.uiData.visible = false;
            this.ui.visible = this.uiData.visible;
        }
        /**
         * 获取UI
         */
        public GetUI(): ui.BetMorePanelUI | ui.BetMorePanel_VerUI {
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
            for (let i = 1; i <= 52; i++) {
                let j:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                let betBoxChild: any = this.ui.BetBox.getChildByName(Enum.BetMorePosType[j]) as mask;
                //绑定点击事件 
                betBoxChild.on(Laya.Event.CLICK, this, this.Bet, [i - 1,j]);
                this.betBtnArr.push(betBoxChild as Laya.Box);
                this.betMoneyLabelArr.push(betBoxChild.getChildAt(4) as Laya.Button);
                this.oddsLabelArr.push(betBoxChild.getChildAt(2) as Laya.Label);
            }
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);

        }


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
            for (let i = 1, len = this.betBtnArr.length; i <= len; i++) {
                let j:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                let odd = odds[j];
                if (odd == 0) {
                    this.oddsLabelArr[i-1].text = "---";
                    this.betBtnArr[i-1].disabled = true;
                    this.betBtnArr[i-1].Show();
                } else {
                    this.betBtnArr[i-1].Hide();
                    this.oddsLabelArr[i-1].text = odds[j];
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
        private Bet(i: number, pos:number): void {
            //启用确认投注按钮
            if(this.oddsLabelArr[i].text != "---"){
                this.DisabledBetBtn(false);
            }
            let params: ClickResultDto = {
                Type: ClickType.ODDS,
                Data: pos
            }
            this.uiData.handler.runWith(params);  
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
            for (let i = 1, len = this.betBtnArr.length; i <= len; i++) {
                let index:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                this.betMoneyLabelArr[i-1].label = BetResultMsg[index] ? BetResultMsg[index] : 0 + (unSucreData[index] ? unSucreData[index] : 0);
                if (BetResultMsg[index] || unSucreData[index]) {
                    this.betMoneyLabelArr[i-1].visible = true;
                } else {
                    this.betMoneyLabelArr[i-1].visible = false;
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
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].Hide();
            }
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

                    for (let j = 1, len = this.betBtnArr.length; j <= len; j++) {
                        let index:number = j%13 == 0 ? 100 * Math.floor(j/13) + 13 : Math.floor(j/13 + 1) * 100 + j%13;
                        if(Number(i) == index){
                            (this.betBtnArr[j - 1] as Laya.Button).gray = false;
                            if (data.SettleResult[i] > 100) {
                                data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                            }
                            (this.betMoneyLabelArr[j - 1] as Laya.Button).label = data.SettleResult[i];
                        }
                    }

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
        }

        /**
         * 提示消息
         * @param txt 提示的信息
         */
        public ShowMsg(txt: string): void {
            Laya.timer.clear(this,this.HideMsg);
            this.ui.MsgPanel.changeText(txt);
            this.ui.MsgPanel.visible = true;
            Laya.timer.once(2000, this, this.HideMsg);
        }
        /**
         * 隐藏提示信息
         */
        public HideMsg():void{
            this.ui.MsgPanel.visible = false;
        }
        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        protected ChipsFlyCallBack(curBetPosChip, value: number) {
            if (this.uiData.isBetting) {
                //设置最终值 
                curBetPosChip.label = value.toString();
                //显示当前筹码
                curBetPosChip.visible = true;
            }
        }
    }
}