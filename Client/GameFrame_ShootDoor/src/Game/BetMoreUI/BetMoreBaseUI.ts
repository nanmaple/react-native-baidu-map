
    abstract class BetMoreBaseUI{
        protected ui: ui.BetMoreHUI | ui.BetMoreVUI;
        protected betBtnArr:any = new Object(); //投注按钮对象
        protected lastBetPosMsg:any = new Object();  //上一个注单投注成功的投注信息
        protected currentBetPosMsg:any = new Object();  //当前未投注成功的投注信息
        protected guessSuccess:boolean = false;
        protected cacheData:Dto.InitGameDto = null;  
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
                this.CreateBetBtn(isVer);
                if (GameConfig.RatioType) {
                    this.ui.time.scale(GameConfig.LengthShort, 1);
                    this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                    this.ui.Title.scale(GameConfig.LengthShort, 1);
                    for(let i:number = 0;i < 52;i++){
                        let Box:Laya.View = this.ui.BetBox.getChildAt(i) as Laya.View;
                        let child1:Laya.Label = Box.getChildAt(1) as Laya.Label;
                        let child2:Laya.Label = Box.getChildAt(2) as Laya.Label;
                        let child3:Laya.Image = Box.getChildAt(3) as Laya.Image;
                        let child4:Laya.Button = Box.getChildAt(4) as Laya.Button;
                        child1.scale(GameConfig.LengthShort, 1);
                        child2.scale(GameConfig.LengthShort, 1);
                        child3.scale(GameConfig.LengthShort, 1);
                        child4.scale(GameConfig.LengthShort, 1);
                    }
                    this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                    this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
                } else {
                    this.ui.MsgPanel.scale(1, GameConfig.ShortLength);
                    this.ui.time.scale(1, GameConfig.ShortLength);
                    this.ui.Title.scale(1, GameConfig.ShortLength);
                    this.ui.ConfirmBetBtn.scale(1, GameConfig.ShortLength);
                    this.ui.CancleBetBtn.scale(1, GameConfig.ShortLength);
                } 
            } else {
                this.ui = new ui.BetMoreHUI();
                this.CreateBetBtn(isVer);
                if (GameConfig.RatioType) {
                    this.ui.Prompt.scale(1, GameConfig.LengthShort);
                    this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
                } else {
                    this.ui.Prompt.scale(GameConfig.ShortLength, 1);
                    this.ui.MsgPanel.scale(GameConfig.ShortLength, 1);
                }
            }
            this.ui.zOrder = 8;
            Laya.stage.addChild(this.ui);
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
            //关闭面板
            this.ui.Close.on(Laya.Event.CLICK, this, this.Close);
            this.ui.visible = this.isShow;
            this.GameInit(this.cacheData);
        }

        abstract CreateBetBtn(isVer:boolean):void;

        abstract ConfirmBet():void;

        abstract CancleBet():void;

        abstract GameInit(data:any):void;
        
        abstract Close():void;
    }
