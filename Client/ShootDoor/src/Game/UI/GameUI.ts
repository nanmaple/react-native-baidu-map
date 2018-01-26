namespace ScenePanel {
    export class GameScenes extends ui.GameUI {
        public cardPanel: CardPanel;
        public footballPanel: FootBallPanel;
        public betPanel: BetPanel;
        public headPanel: HeadPanel;
        public historyPanel: HistoryPanel;
        public promptPanel: PromptPanel;
        public timePanel: TimePanel;
        public noteReocrdPanel: NoteRecordPanel;
        public loadingPanel: LoadingPanel;
        public roundPanel: RoundPanel;
        public tipsPanel: TipsPanel;
        public rulePanel: RulePanel;
        constructor() {
            super();

            //添加背景 
            this.zOrder = 1;
            Laya.stage.addChild(this);
            //添加游戏局数
            this.roundPanel = new RoundPanel();
            this.roundPanel.zOrder = 2;
            Laya.stage.addChild(this.roundPanel);
            //添加牌面
            this.cardPanel = new CardPanel();
            this.cardPanel.zOrder = 2;
            Laya.stage.addChild(this.cardPanel);
            //添加足球
            this.footballPanel = new FootBallPanel(this.cardPanel);
            this.footballPanel.zOrder = 3;
            Laya.stage.addChild(this.footballPanel);
            //添加历史面板
            this.historyPanel = new HistoryPanel();
            this.historyPanel.zOrder = 4;
            Laya.stage.addChild(this.historyPanel);
            //添加投注面板
            this.betPanel = new BetPanel();
            this.betPanel.zOrder = 5;
            Laya.stage.addChild(this.betPanel);
            //添加头部
            this.headPanel = new HeadPanel();
            this.headPanel.zOrder = 6;
            Laya.stage.addChild(this.headPanel);
            //添加时间面板
            this.timePanel = new TimePanel();
            this.timePanel.zOrder = 7;
            Laya.stage.addChild(this.timePanel);
            //添加提示面板
            this.promptPanel = new PromptPanel();
            this.promptPanel.zOrder = 8;
            Laya.stage.addChild(this.promptPanel);
            //添加投注记录面板
            this.noteReocrdPanel = new NoteRecordPanel();
            this.noteReocrdPanel.zOrder = 8;
            Laya.stage.addChild(this.noteReocrdPanel);
            //添加游戏规则面板
            this.rulePanel = new RulePanel();
            this.rulePanel.zOrder = 8;
            Laya.stage.addChild(this.rulePanel);
            //添加loading面板
            this.loadingPanel = new LoadingPanel();
            this.loadingPanel.zOrder = 9;
            Laya.stage.addChild(this.loadingPanel);

            this.tipsPanel = new TipsPanel();
            this.tipsPanel.zOrder = 8;
            Laya.stage.addChild(this.tipsPanel);

            //缩放
            this.ScaleState();
        }

        /**
         * 缩放舞台
         */
        private ScaleState(): void {
        }
    }
}