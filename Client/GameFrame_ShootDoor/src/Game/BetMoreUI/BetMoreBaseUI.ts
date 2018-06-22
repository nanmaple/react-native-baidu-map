
    abstract class BetMoreBaseUI{
        protected ui: ui.BetMoreHUI | ui.BetMoreVUI;
        protected broadcast: Dto.BroadcastDto = new Dto.BroadcastDto();
        protected betBtnArr:any = new Object(); //投注按钮对象
        protected lastBetPosMsg:any = new Object();  //上一个注单投注成功的投注信息
        protected currentBetPosMsg:any = new Object();  //当前未投注成功的投注信息
        protected guessSuccess:boolean = false;
        protected cacheData:Dto.InitGameDto = null;  
        protected time:number = 0;  //时间
        protected timeStamp:number = 0;  //时间戳
        protected timeEffect: TimeEffect;   //游戏时间效果
        protected isShow:boolean = false;  //是否显示
        protected spadeIco:string = "ui/spade.png";
        protected blockIco:string = "ui/block.png";
        protected heartIco:string = "ui/heart.png";
        protected clubIco:string = "ui/club.png";
        constructor() {
 
        }
        
        /**
         * 切换横竖屏
         * @param isVer 是否为竖屏
         */
        public ResetScreen(isVer?: boolean) {
            Laya.stage.removeChild(this.ui);
            if (isVer) {
                this.ui = new ui.BetMoreVUI();
            } else {
                this.ui = new ui.BetMoreHUI();    
            }
            this.CreateBetBtn(isVer);
            this.ui.zOrder = 6;
            Laya.stage.addChild(this.ui);
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancelBet);
            //关闭面板
            this.ui.Close.on(Laya.Event.CLICK, this, this.Close);
            this.ui.visible = this.isShow;
            this.timeEffect = new TimeEffect(this.ui.time);
            if(this.cacheData){
                this.SetTime();
            }
            this.GameInit(this.cacheData);
        }

        abstract GameInit(data:any):void;

        abstract SetTime():void;

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
         * 禁用所有按钮
         */
        public DisabledAllBtn():void{
            this.DisabledBetBtn(true);
            this.DisabledBetPanel(true);
        }
        /**
         * 设置未投注成功的数据
         * @param noSureBetMsg 
         */
        public SetNoBetPos(noSureBetMsg:any):void{
            this.currentBetPosMsg = noSureBetMsg;
        }
        /**
         * 设置不同位置的投注金额
         */
        public SetBetPos(BetResultMsg: any, noSureBetMsg?:any): void {
            let unSucreData: any = {};  
            if(noSureBetMsg){
                for(let i in noSureBetMsg){
                    unSucreData[i] = noSureBetMsg[i].Amount;
                }
                this.DisabledBetBtn(false);
            }

            if (!BetResultMsg) {
                BetResultMsg = {};
            }
            for (let i in this.betBtnArr) {
                if(BetResultMsg[i]){
                    let Amount = BetResultMsg[i] + (unSucreData[i] ? unSucreData[i] : 0);
                    this.betBtnArr[i].SetValue(Amount);
                    this.betBtnArr[i].Refresh();
                }
                else{
                    let Amount = unSucreData[i] ? unSucreData[i] : null; 
                    this.betBtnArr[i].SetValue(Amount);
                    this.betBtnArr[i].Refresh();
                }
                
            }
        }
        /**
         * 禁用投注确认和取消按钮
         */
        public DisabledBetBtn(disabled: boolean = true): void {
            this.ui.ConfirmBetBtn.disabled = disabled;
            this.ui.CancleBetBtn.disabled = disabled;
        }
        /**
         * 禁用投注按钮
         * @param disabled 是否禁用
         */
        private DisabledBetPanel(disabled: boolean):void{
            for(let i in this.betBtnArr){
                this.betBtnArr[i].SetStatus(disabled);
            }
        }

        /**
         * 设置赔率
         * @param data 
         */
        public SetOdds(data:any):void{
            for (let i in this.betBtnArr) {
                let odd = data[i];
                this.betBtnArr[i].SetOdds(data[i]);
                this.betBtnArr[i].Refresh();
                if(odd == 0){  
                    this.betBtnArr[i].GetUI().getChildByName("masks").visible = true;
                    this.betBtnArr[i].GetUI().gray = false;
                }else{
                    this.betBtnArr[i].GetUI().getChildByName("masks").visible = false;
                }
            }
        }
        /**
         * 投注
         * @param data 
         */
        public Bet(data:Bet.BetPosAmountDto):void{
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
            for(let i in this.betBtnArr){
                if(data.Pos == Number(i)){
                    this.DisabledBetBtn(false);
                    this.betBtnArr[i].SetValue(data.Amount);
                    this.betBtnArr[i].Refresh();
                    break;
                }
            }
        }
        /**
         * 设置限额
         * @param limit 
         */
        public SetLimit(limit:Dto.LimitDto):void{
            for(let i in this.betBtnArr){
                this.betBtnArr[i].MinLimit = limit.MinBet;
                this.betBtnArr[i].MaxLimit = limit.MaxBet;
            }
        }
        /**
         * 创建投注按钮
         * @param isVer 
         */
        public CreateBetBtn(isVer:boolean):void{
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if(isVer){
                for(let i = 1; i <= 52; i++){
                    let btnUI:Bet.BetPos = new Bet.BetPos();
                    let j:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                    btnUI.SetText(language.GetLanguage(Enum.BetMoreTxtType[i%13]));
                    btnUI.SetType(2);   
                    btnUI.Pos = j;
                    this.betBtnArr[btnUI.Pos] = btnUI;
                    btnUI.width = 145;
                    btnUI.height = 80;
                    if(i >= 1 && i <= 13){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.spadeIco;
                        btnUI.GetUI().getChildByName("betName").color = "#000";
                        btnUI.x = btnUI.width * 3;
                        btnUI.y = btnUI.height * (13 - i) + 13 - i;
                    }
                    if(i >= 14 && i <= 26){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.heartIco;
                        btnUI.x = btnUI.width * 2;
                        btnUI.y = btnUI.height * (13 * 2 - i) + 13 * 2 - i;
                    }
                    if(i >= 27 && i <= 39){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.clubIco;
                        btnUI.GetUI().getChildByName("betName").color = "#000";
                        btnUI.x = btnUI.width;
                        btnUI.y = btnUI.height * (13 * 3 - i) + 13 * 3 - i;
                    }
                    if(i >= 40 && i <= 52){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.blockIco;
                        btnUI.x = 0;
                        btnUI.y = btnUI.height * (13 * 4- i) + 13 * 4 - i;
                    }
                    btnUI.Refresh();
                    this.ui.BetBox.addChild(btnUI.GetUI());
                }
            }else{
                for(let i = 1;i <= 52;i++){
                    let btnUI:Bet.BetPos = new Bet.BetPos();
                    let j:number = i%13 == 0 ? 100 * Math.floor(i/13) + 13 : Math.floor(i/13 + 1) * 100 + i%13;
                    btnUI.SetText(language.GetLanguage(Enum.BetMoreTxtType[i%13]));
                    btnUI.SetType(3);   
                    btnUI.Pos = j;
                    this.betBtnArr[btnUI.Pos] = btnUI;
                    btnUI.width = 95;
                    btnUI.height = 88;
                    if(i >= 1 && i <= 13){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.spadeIco;
                        btnUI.GetUI().getChildByName("betName").color = "#000";
                        btnUI.x = btnUI.width * (13 - i);
                        btnUI.y = btnUI.height * 3;
                    }
                    if(i >= 14 && i <= 26){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.heartIco;
                        btnUI.x = btnUI.width * (13 * 2 - i);
                        btnUI.y = btnUI.height * 2;
                    }
                    if(i >= 27 && i <= 39){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.clubIco;
                        btnUI.GetUI().getChildByName("betName").color = "#000";
                        btnUI.x = btnUI.width * (13 * 3 - i);
                        btnUI.y = btnUI.height;
                    }
                    if(i >= 40 && i <= 52){
                        let ico = btnUI.GetUI().getChildByName("ico").skin = this.blockIco;
                        btnUI.x = btnUI.width * (13 * 4- i);
                        btnUI.y = 0;
                    }
                    btnUI.Refresh();
                    this.ui.BetBox.addChild(btnUI.GetUI());
                }
            }
        }
        /**
         * 点击确定投注
         */
        public ConfirmBet():void{
            this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
            let event = new CustomEvent("GameUI", { detail: this.broadcast });
            document.dispatchEvent(event);
        };
        /**
         * 点击取消投注
         */
        public CancelBet():void{
            this.broadcast.Type = Enum.ListenUIEnum.CancelBet;
            let event = new CustomEvent("GameUI", { detail: this.broadcast });
            document.dispatchEvent(event);
        };
        /**
         * 确定投注
         */
        public Confirm():void{
            this.DisabledBetBtn(true);
        }
        /**
         * 取消投注
         */
        public Cancel():void{
            this.DisabledBetBtn(true);
            this.SetBetPos(this.lastBetPosMsg);
        }
        /**
         * 打开面板
         */
        public Show():void{
            this.isShow = true;
            this.ui.visible = this.isShow;
        }
        /**
         * 关闭面板
         */
        public Close():void{
            this.isShow = false;
            this.ui.visible = this.isShow;
        }
    }
