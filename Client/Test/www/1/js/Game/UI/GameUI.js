var ScenePanel;
(function (ScenePanel) {
    var GameUI = /** @class */ (function () {
        function GameUI() {
            var _this = this;
            this.isChange = false;
            this.pokerChange = false;
            this.pokerArr = new Array();
            document.addEventListener("screenMode", function () {
                _this.ChangeModeUI();
            });
            this.ChangeModeUI();
        }
        GameUI.GetInstance = function () {
            if (!this.instance) {
                this.instance = new GameUI();
            }
            return this.instance;
        };
        GameUI.prototype.ChangeModeHanler = function (handler) {
            this.handler = handler;
        };
        GameUI.prototype.ChangeModeUI = function () {
            if (GameConfig.ScreenMode == 0) {
                this.VerUI();
            }
            else {
                this.HorUI();
            }
            this.isChange = !this.isChange;
            if (this.handler) {
                this.handler.run();
            }
        };
        /**
         * 切换竖屏
         */
        GameUI.prototype.HorUI = function () {
            //添加背景 
            this.bgPanel = new ScenePanel.GameBgHor();
            //添加头部
            this.headPanel = new ScenePanel.HeadPanelHor();
            //添加局号
            this.roundPanel = new ScenePanel.RoundPanelHor();
            //添加头部
            this.loadingPanel = new ScenePanel.LoadingPanelHor();
            //添加扑克牌面板
            this.cardPanel = new ScenePanel.CardPanelHor();
            //添加历史记录
            this.historyPanel = new ScenePanel.HistoryPanelHor();
            //添加时钟
            this.timePanel = new ScenePanel.TimePanelHor();
            //添加投注面板
            this.betPanel = new ScenePanel.BetPanelHor();
            // //添加提示面板
            // this.promptPanel = new PromptPanelHor();
            // Laya.stage.addChild(this.promptPanel.GetUI());
            // //添加投注记录面板
            this.noteReocrdPanel = new ScenePanel.NoteRecordPanelHor();
            //添加游戏规则面板
            this.rulePanel = new ScenePanel.RulePanelHor();
            //添加关注提示面板
            this.tipsPanel = new ScenePanel.TipsPanelHor();
            //添加足球面板
            this.footballPanel = new ScenePanel.FootBallPanelHor(this.cardPanel.GetGoalWidth(), this.cardPanel.GetGoalHeight(), this.cardPanel.GetGoalCenterX(), this.cardPanel.GetGoalBottom());
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
        };
        /**
         * 切换横屏
         */
        GameUI.prototype.VerUI = function () {
            //添加背景 
            this.bgPanel = new ScenePanel.GameBgVer();
            //添加头部
            this.headPanel = new ScenePanel.HeadPanelVer();
            //添加局号
            this.roundPanel = new ScenePanel.RoundPanelVer();
            //添加头部
            this.loadingPanel = new ScenePanel.LoadingPanelVer();
            //添加扑克牌面板
            this.cardPanel = new ScenePanel.CardPanelVer();
            //添加历史记录
            this.historyPanel = new ScenePanel.HistoryPanelVer();
            //添加时钟
            this.timePanel = new ScenePanel.TimePanelVer();
            //添加投注面板
            this.betPanel = new ScenePanel.BetPanelVer();
            // //添加提示面板
            // this.promptPanel = new PromptPanelVer();
            // Laya.stage.addChild(this.promptPanel.GetUI());
            // //添加投注记录面板
            this.noteReocrdPanel = new ScenePanel.NoteRecordPanelVer();
            //添加游戏规则面板
            this.rulePanel = new ScenePanel.RulePanelVer();
            //添加关注提示面板
            this.tipsPanel = new ScenePanel.TipsPanelVer();
            //添加足球面板
            this.footballPanel = new ScenePanel.FootBallPanelVer(this.cardPanel.GetGoalWidth(), this.cardPanel.GetGoalHeight(), this.cardPanel.GetGoalCenterX(), this.cardPanel.GetGoalBottom());
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
        };
        /**
         * 获取头部面板
         */
        GameUI.prototype.GetHeadPanel = function () {
            return this.headPanel;
        };
        /**
         * 获取加载提示面板
         */
        GameUI.prototype.GetLoadingPanel = function () {
            return this.loadingPanel;
        };
        /**
         * 获取扑克牌面板
         */
        GameUI.prototype.GetCardPanel = function () {
            return this.cardPanel;
        };
        /**
         * 获取局号面板
         */
        GameUI.prototype.GetRoundPanel = function () {
            return this.roundPanel;
        };
        /**
         * 获取历史记录面板
         */
        GameUI.prototype.GetHistoryPanel = function () {
            return this.historyPanel;
        };
        /**
         * 获取时间面板
         */
        GameUI.prototype.GetTimePanel = function () {
            return this.timePanel;
        };
        /**
         * 获取投注面板
         */
        GameUI.prototype.GetBetPanel = function () {
            return this.betPanel;
        };
        // /**
        //  * 获取提示面板
        //  */
        // public GetPromptPanel(): PromptPanelHor | PromptPanelVer {
        //     return this.promptPanel;
        // }
        /**
         * 获取投注记录面板
         */
        GameUI.prototype.GetNoteRecordPanel = function () {
            return this.noteReocrdPanel;
        };
        /**
         * 获取关注提示面板
         */
        GameUI.prototype.GetTipsPanel = function () {
            return this.tipsPanel;
        };
        /**
         * 获取游戏规则面板
         */
        GameUI.prototype.GetRulePanel = function () {
            return this.rulePanel;
        };
        /**
         * 获取足球面板
         */
        GameUI.prototype.GetFootBallPanel = function () {
            return this.footballPanel;
        };
        GameUI.prototype.PokerFly = function (dto) {
            var isChange = false;
            if (this.pokerChange != this.isChange) {
                isChange = true;
            }
            this.pokerArr = this.cardPanel.GetFlyPoker(isChange);
            this.pokerFlyEffect.FlyPoker(dto, this.cardPanel.GetFlyPoker(isChange), this.historyPanel.GetEndFlyPoker(isChange));
        };
        GameUI.prototype.ClearPokerFly = function () {
            this.pokerFlyEffect.ClearFlyPoker();
        };
        return GameUI;
    }());
    ScenePanel.GameUI = GameUI;
})(ScenePanel || (ScenePanel = {}));
