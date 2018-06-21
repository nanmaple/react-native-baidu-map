
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
                this.CreateBetBtn(isVer);
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
                    this.ui.Chips.bottom = 655 * GameConfig.ShortLength;
                    this.ui.ChipsBg.bottom = 655 * GameConfig.ShortLength;
                } 
            } else {
                this.ui = new ui.BetHUI();
                this.CreateBetBtn(isVer);
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
            }
            this.ui.zOrder = 3;
            Laya.stage.addChild(this.ui);
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
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

        abstract CreateBetBtn(isVer:boolean):void;

        abstract ConfirmBet():void;

        abstract CancleBet():void;

        abstract ChangeChip(i:number):void;

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
    }
