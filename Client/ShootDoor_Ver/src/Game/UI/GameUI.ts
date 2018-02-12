namespace ScenePanel {
    export class GameUI {
        private static instance: GameUI;
        public bgPanel: GameBgHor | HeadPanelVer;
        public headPanel: HeadPanelHor | HeadPanelVer;
        public loadingPanel: LoadingPanelHor | LoadingPanelVer;
        public roundPanel: RoundPanelHor | RoundPanelVer;
        public historyPanel: HistoryPanelHor | HistoryPanelVer;
        public timePanel: TimePanelHor | TimePanelVer;
        public betPanel: BetPanelHor | BetPanelVer;

        public cardPanel: CardPanelHor | CardPanelVer;
        public footballPanel: FootBallPanelHor | FootBallPanelVer;
        public promptPanel: PromptPanelHor | PromptPanelVer;
        public noteReocrdPanel: NoteRecordPanelHor | NoteRecordPanelVer;
        public tipsPanel: TipsPanelHor | TipsPanelVer;
        public rulePanel: RulePanelHor | RulePanelVer;

        private handler: Laya.Handler;
        private pokerFlyEffect: PokerFlyEffect;
        private isChange: boolean = false;
        private pokerChange: boolean = false;

        constructor() {
            document.addEventListener("screenMode", () => {
                this.ChangeModeUI();
            })
            this.ChangeModeUI();
        }


        public static GetInstance(): GameUI {
            if (!this.instance) {
                this.instance = new GameUI();
            }
            return this.instance;
        }

        public ChangeModeHanler(handler: Laya.Handler): void {
            this.handler = handler;
        }

        private ChangeModeUI(): void {
            if (GameConfig.ScreenMode == 0) {
                this.VerUI();
            } else {
                this.HorUI();
            }
            this.isChange = !this.isChange;
            if (this.handler) {
                this.handler.run();
            }
        }

        /**
         * 切换竖屏
         */
        private HorUI(): void {
            //添加背景 
            this.bgPanel = new GameBgHor();
            //添加头部
            this.headPanel = new HeadPanelHor();
            //添加局号
            this.roundPanel = new RoundPanelHor();
            //添加头部
            this.loadingPanel = new LoadingPanelHor();
            //添加扑克牌面板
            this.cardPanel = new CardPanelHor();
            //添加历史记录
            this.historyPanel = new HistoryPanelHor();
            //添加时钟
            this.timePanel = new TimePanelHor();
            //添加投注面板
            this.betPanel = new BetPanelHor();
            // //添加提示面板
            // this.promptPanel = new PromptPanelHor();
            // Laya.stage.addChild(this.promptPanel.GetUI());
            // //添加投注记录面板
            this.noteReocrdPanel = new NoteRecordPanelHor();
            //添加游戏规则面板
            this.rulePanel = new RulePanelHor();
            //添加关注提示面板
            this.tipsPanel = new TipsPanelHor();
            //添加足球面板
            this.footballPanel = new FootBallPanelHor(this.cardPanel.GetGoalWidth(), this.cardPanel.GetGoalHeight(), this.cardPanel.GetGoalCenterX(), this.cardPanel.GetGoalBottom());

            Laya.stage.addChild(this.bgPanel.GetUI());
            Laya.stage.addChild(this.headPanel.GetUI());
            Laya.stage.addChild(this.roundPanel.GetUI());
            Laya.stage.addChild(this.loadingPanel.GetUI());
            Laya.stage.addChild(this.cardPanel.GetUI());
            Laya.stage.addChild(this.historyPanel.GetUI());
            Laya.stage.addChild(this.timePanel.GetUI());
            Laya.stage.addChild(this.betPanel.GetUI());
            Laya.stage.addChild(this.noteReocrdPanel.GetUI());
            Laya.stage.addChild(this.rulePanel.GetUI());
            Laya.stage.addChild(this.tipsPanel.GetUI());
            Laya.stage.addChild(this.footballPanel.GetUI());

            if (this.pokerFlyEffect) {
                this.pokerFlyEffect.RecoveryPoker();
            }
            this.pokerFlyEffect = new PokerFlyEffect();
            

        }

        /**
         * 切换横屏
         */
        private VerUI(): void {
            //添加背景 
            this.bgPanel = new GameBgVer();
            //添加头部
            this.headPanel = new HeadPanelVer();
            //添加局号
            this.roundPanel = new RoundPanelVer();
            //添加头部
            this.loadingPanel = new LoadingPanelVer();
            //添加扑克牌面板
            this.cardPanel = new CardPanelVer();
            //添加历史记录
            this.historyPanel = new HistoryPanelVer();
            //添加时钟
            this.timePanel = new TimePanelVer();
            //添加投注面板
            this.betPanel = new BetPanelVer();
            // //添加提示面板
            // this.promptPanel = new PromptPanelVer();
            // Laya.stage.addChild(this.promptPanel.GetUI());
            // //添加投注记录面板
            this.noteReocrdPanel = new NoteRecordPanelVer();
            //添加游戏规则面板
            this.rulePanel = new RulePanelVer();
            //添加关注提示面板
            this.tipsPanel = new TipsPanelVer();

            //添加足球面板
            this.footballPanel = new FootBallPanelVer(this.cardPanel.GetGoalWidth(), this.cardPanel.GetGoalHeight(), this.cardPanel.GetGoalCenterX(), this.cardPanel.GetGoalBottom());


            Laya.stage.addChild(this.bgPanel.GetUI());
            Laya.stage.addChild(this.headPanel.GetUI());
            Laya.stage.addChild(this.roundPanel.GetUI());
            Laya.stage.addChild(this.loadingPanel.GetUI());
            Laya.stage.addChild(this.cardPanel.GetUI());
            Laya.stage.addChild(this.historyPanel.GetUI());
            Laya.stage.addChild(this.timePanel.GetUI());
            Laya.stage.addChild(this.betPanel.GetUI());
            Laya.stage.addChild(this.noteReocrdPanel.GetUI());
            Laya.stage.addChild(this.rulePanel.GetUI());
            Laya.stage.addChild(this.tipsPanel.GetUI());
            Laya.stage.addChild(this.footballPanel.GetUI());
            if (this.pokerFlyEffect) {
                this.pokerFlyEffect.RecoveryPoker();
            }
            this.pokerFlyEffect = new PokerFlyEffect();

        }
        /**
         * 获取头部面板
         */
        public GetHeadPanel(): HeadPanelHor | HeadPanelVer {
            return this.headPanel;
        }
        /**
         * 获取加载提示面板
         */
        public GetLoadingPanel(): LoadingPanelHor | LoadingPanelVer {
            return this.loadingPanel;
        }
        /**
         * 获取扑克牌面板
         */
        public GetCardPanel(): CardPanelHor | CardPanelVer {
            return this.cardPanel;
        }
        /**
         * 获取局号面板
         */
        public GetRoundPanel(): RoundPanelHor | RoundPanelVer {
            return this.roundPanel;
        }
        /**
         * 获取历史记录面板
         */
        public GetHistoryPanel(): HistoryPanelHor | HistoryPanelVer {
            return this.historyPanel;
        }
        /**
         * 获取时间面板
         */
        public GetTimePanel(): TimePanelHor | TimePanelVer {
            return this.timePanel;
        }
        /**
         * 获取投注面板
         */
        public GetBetPanel(): BetPanelHor | BetPanelVer {
            return this.betPanel;
        }
        // /**
        //  * 获取提示面板
        //  */
        // public GetPromptPanel(): PromptPanelHor | PromptPanelVer {
        //     return this.promptPanel;
        // }
        /**
         * 获取投注记录面板
         */
        public GetNoteRecordPanel(): NoteRecordPanelHor | NoteRecordPanelVer {
            return this.noteReocrdPanel;
        }
        /**
         * 获取关注提示面板
         */
        public GetTipsPanel(): TipsPanelHor | TipsPanelVer {
            return this.tipsPanel;
        }
        /**
         * 获取游戏规则面板
         */
        public GetRulePanel(): RulePanelHor | RulePanelVer {
            return this.rulePanel;
        }
        /**
         * 获取足球面板
         */
        public GetFootBallPanel(): FootBallPanelHor | FootBallPanelVer {
            return this.footballPanel;
        }

        public PokerFly(dto: Dto.CardInfoDto): void {
            let isChange: boolean = false;
            if (this.pokerChange != this.isChange) {
                isChange = true;
            }
            this.pokerFlyEffect.FlyPoker(dto, this.cardPanel.GetFlyPoker(isChange), this.historyPanel.GetEndFlyPoker(isChange));
        }
    }
}