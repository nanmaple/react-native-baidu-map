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
        public flyPoker: Array<Laya.Image> = new Array<Laya.Image>();
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
            //添加时间面板
            this.timePanel = new TimePanel();
            this.timePanel.zOrder = 4;
            Laya.stage.addChild(this.timePanel);
            //添加投注面板
            this.betPanel = new BetPanel();
            this.betPanel.zOrder = 5;
            Laya.stage.addChild(this.betPanel);
            //添加历史面板
            this.historyPanel = new HistoryPanel();
            this.historyPanel.zOrder = 6;
            Laya.stage.addChild(this.historyPanel);
            //添加头部
            this.headPanel = new HeadPanel();
            this.headPanel.zOrder = 7;
            Laya.stage.addChild(this.headPanel);
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
            this.tipsPanel.zOrder = 10;
            Laya.stage.addChild(this.tipsPanel);

            for (let i = 0; i < 3; i++) {
                let newflyPoker: Laya.Image = Laya.Pool.getItemByClass("flyPoker", Laya.Image);
                newflyPoker.visible = false;
                newflyPoker.zOrder = 7;
                newflyPoker.anchorX = 0.5;
                newflyPoker.anchorY = 0.5;
                this.flyPoker.push(newflyPoker);
                Laya.stage.addChild(newflyPoker);
            }
        }

        public FlyPoker(dto: Dto.CardInfoDto): void {
            let flyPoker: any = this.cardPanel.GetFlyPoker();
            let endFlyPoker: any = this.historyPanel.GetEndFlyPoker();
            let i: number = 0;
            for (var key in dto) {
                if (dto.hasOwnProperty(key)) {
                    this.flyPoker[i].skin = `ui/poker/${dto[key]}.png`;
                    this.flyPoker[i].visible = true;
                    this.flyPoker[i].x = flyPoker[i].x;
                    this.flyPoker[i].y = flyPoker[i].y;
                    this.flyPoker[i].width = flyPoker[i].width;
                    this.flyPoker[i].height = flyPoker[i].height;
                    this.flyPoker[i].scale(1, 1);
                    Laya.Tween.to(this.flyPoker[i], { x: endFlyPoker[i].x, y: endFlyPoker[i].y, width: endFlyPoker[i].width, height: endFlyPoker[i].height }, 2000, Laya.Ease.sineInOut, Laya.Handler.create(this, (index: number) => {
                        this.flyPoker[index].visible = false;
                    }, [i]));
                    i++;
                }
            }
        }
    }
}