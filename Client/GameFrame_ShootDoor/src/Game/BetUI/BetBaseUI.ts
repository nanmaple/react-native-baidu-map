
    abstract class BetBaseUI{
        protected ui: ui.BetHUI | ui.BetVUI;
        protected betBtnArr:any = new Object(); //投注按钮对象
        protected chipsBtnArr:any = new Object();  //筹码按钮对象
        protected selectedChipNum:number = 0;  //当前选择的筹码
        protected chipPrice:number = 5;  //筹码值
        protected selectedChip:Laya.Button;  //当前选择的筹码对象
        protected chipsNormalSkin = "ui/btn_chip.png";
        protected chipsSelectSkin = "ui/chip_s.png";
        protected lastBetPosMsg:any = new Object();  //上一个注单投注成功的投注信息
        protected currentBetPosMsg:any = new Object();  //当前未投注成功的投注信息
        protected guessSuccess:boolean = false;
        protected cacheData:Dto.InitGameDto = null;  
        protected broadcast: Dto.BroadcastDto = new Dto.BroadcastDto();
        constructor() {
 
        }
        
        /**
         * 切换横竖屏
         * @param isVer 是否为竖屏
         */
        public ResetScreen(isVer?: boolean) {
            Laya.stage.removeChild(this.ui);
            if (isVer) {
                this.ui = new ui.BetVUI();
            } else {
                this.ui = new ui.BetHUI();
            }
            this.CreateBetBtn(isVer);
            this.ui.zOrder = 3;
            Laya.stage.addChild(this.ui);
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancelBet);
            //打开更多投注面板
            this.ui.Bet_More_Btn.on(Laya.Event.CLICK,this,this.OpenMoreBet);

            //筹码点击
            for (let i = 0; i < 5; i++) {
                let chip = this.ui.Chips.getChildAt(i) as Laya.Button;
                this.chipsBtnArr[i] = chip;
                chip.on(Laya.Event.CLICK, this, this.ChangeChip, [i]);
            }
            
            this.ChangeChip(this.selectedChipNum);
            this.GameInit(this.cacheData);
        }

        abstract GameInit(data:any):void;
        /**
         * 打开更多投注面板
         */
        public OpenMoreBet():void{
            this.broadcast.Type = Enum.ListenUIEnum.ShowMoreBet;
            let event = new CustomEvent("GameUI", { detail: this.broadcast });
            document.dispatchEvent(event);
        }
        /**
         * 获取筹码值
         */
        public GetChipPrice():number{
            return this.chipPrice;
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
         * 设置限额
         * @param limit 
         */
        public SetLimit(limit:Dto.LimitDto):void{
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            this.ui.maxBetLabel.text = language.GetLanguage("Maximum")+`:${limit.MaxBet}`;
            this.ui.minBetLabel.text = language.GetLanguage("Minimum")+`:${limit.MinBet}`;
            for(let i in this.betBtnArr){
                this.betBtnArr[i].MinLimit = limit.MinBet;
                this.betBtnArr[i].MaxLimit = limit.MaxBet;
            }
        }
        /**
         * 设置赔率
         * @param data 
         */
        public SetOdds(data:any):void{
            for(let i in this.betBtnArr){
                this.betBtnArr[i].SetOdds(data[i]);
                this.betBtnArr[i].Refresh();
            }
        }

        /**
         * 切换筹码
         * @param i 筹码编号
         */
        public ChangeChip(i: number): void {
            //获取当前点击的筹码  
            this.selectedChipNum = i;
            this.selectedChip = this.ui.Chips.getChildAt(i) as Laya.Button;
            this.chipPrice = Number(this.selectedChip.label);
            for (let i = 0; i < 5; i++) {
                let chip = this.ui.Chips.getChildAt(i) as Laya.Button;
                chip.skin = this.chipsNormalSkin;
                chip.scale(0.9, 0.9);
            }
            this.selectedChip.skin = this.chipsSelectSkin;
            this.selectedChip.scale(1.1, 1.1);
        }

        /**
         * 创建投注按钮
         * @param isVer 
         */
        public CreateBetBtn(isVer:boolean):void{
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if(isVer){
                for(let i = 1;i <= 13;i++){
                    let btnUI:Bet.BetPos = new Bet.BetPos();
                    btnUI.SetText(language.GetLanguage(Enum.BetPosType[i]));   
                    btnUI.zOrder = 5;
                    btnUI.Pos = i;
                    this.betBtnArr[btnUI.Pos] = btnUI;
                    btnUI.SetType(BetBtnData.Ver[Enum.BetPosType[i]].Type);
                    btnUI.width = BetBtnData.Ver[Enum.BetPosType[i]].Width;
                    btnUI.height = BetBtnData.Ver[Enum.BetPosType[i]].Height;
                    btnUI.x = BetBtnData.Ver[Enum.BetPosType[i]].X;
                    btnUI.y = BetBtnData.Ver[Enum.BetPosType[i]].Y;
                    btnUI.Refresh();
                    this.ui.BetBox.addChild(btnUI.GetUI());
                }
            }else{
                for(let i = 1;i <= 13;i++){
                    let btnUI:Bet.BetPos = new Bet.BetPos();
                    btnUI.SetText(language.GetLanguage(Enum.BetPosType[i]));
                    btnUI.zOrder = 5;
                    btnUI.Pos = i;
                    this.betBtnArr[btnUI.Pos] = btnUI;
                    btnUI.SetType(BetBtnData.Hor[Enum.BetPosType[i]].Type);
                    btnUI.width = BetBtnData.Hor[Enum.BetPosType[i]].Width;
                    btnUI.height = BetBtnData.Hor[Enum.BetPosType[i]].Height;
                    btnUI.x = BetBtnData.Hor[Enum.BetPosType[i]].X;
                    btnUI.y = BetBtnData.Hor[Enum.BetPosType[i]].Y;
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
         * 筹码动画
         * @param endX 结束位置x坐标
         * @param endY 结束位置y坐标
         * @param curBetPosChip 投注位置上的筹码
         * @param value 投注金额         
         * @param value 缓动后投注数量
         */
        public ChipsFly(data:Bet.BetPosAmountDto): void {
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
            //从对象池获取移动对象
            let flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
            //设置状态数
            flyChip.zOrder = 5;
            flyChip.stateNum = 1;
            flyChip.scale(1.1,1.1);
            flyChip.label = this.chipPrice.toString();
            flyChip.labelSize = 20;
            flyChip.labelColors = "#f00";
            flyChip.anchorX = 0.5;
            flyChip.anchorY = 0.5;
            flyChip.skin = this.chipsNormalSkin;
            Laya.stage.addChild(flyChip);
            //筹码动画
            let endX = (this.betBtnArr[data.Pos].GetUI().getChildAt(2).x + this.betBtnArr[data.Pos].x);
            let endY = this.betBtnArr[data.Pos].GetUI().getChildAt(2).localToGlobal(new Laya.Point(this.betBtnArr[data.Pos].GetUI().getChildAt(2).width / 2,
            this.betBtnArr[data.Pos].GetUI().getChildAt(2).height / 2))
            let obj: any = { x: endY.x, y: endY.y, scaleX: 1, scaleY: 1 };

            //设置初始位置为当前选择的筹码的位置
            let chip = this.selectedChip.localToGlobal(new Laya.Point(this.selectedChip.width / 2, this.selectedChip.height / 2));
            flyChip.pos(chip.x, chip.y);

            this.DisabledBetBtn(false);
            //开始缓动
            Laya.Tween.to(flyChip, obj, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, this.betBtnArr[data.Pos], data.Amount], false));
            
        }
        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        public ChipsFlyCallBack(flyChip: Laya.Button, curBetPosChip, value: number) {
            //回收
            flyChip.removeSelf();
            Laya.Pool.recover("flyChip", flyChip);
            if(this.cacheData.Status == Enum.GameStatus.SETTLE){
                this.DisabledAllBtn();
                this.SetBetPos(this.lastBetPosMsg);
                return;
            }
            curBetPosChip.SetValue(value);
            curBetPosChip.Refresh();
        }
    }
