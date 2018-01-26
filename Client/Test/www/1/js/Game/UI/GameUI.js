var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScenePanel;
(function (ScenePanel) {
    var GameScenes = /** @class */ (function (_super) {
        __extends(GameScenes, _super);
        function GameScenes() {
            var _this = _super.call(this) || this;
            //添加背景 
            _this.zOrder = 1;
            Laya.stage.addChild(_this);
            //添加游戏局数
            _this.roundPanel = new ScenePanel.RoundPanel();
            _this.roundPanel.zOrder = 2;
            Laya.stage.addChild(_this.roundPanel);
            //添加牌面
            _this.cardPanel = new ScenePanel.CardPanel();
            _this.cardPanel.zOrder = 2;
            Laya.stage.addChild(_this.cardPanel);
            //添加足球
            _this.footballPanel = new ScenePanel.FootBallPanel(_this.cardPanel);
            _this.footballPanel.zOrder = 3;
            Laya.stage.addChild(_this.footballPanel);
            //添加历史面板
            _this.historyPanel = new ScenePanel.HistoryPanel();
            _this.historyPanel.zOrder = 4;
            Laya.stage.addChild(_this.historyPanel);
            //添加投注面板
            _this.betPanel = new ScenePanel.BetPanel();
            _this.betPanel.zOrder = 5;
            Laya.stage.addChild(_this.betPanel);
            //添加头部
            _this.headPanel = new ScenePanel.HeadPanel();
            _this.headPanel.zOrder = 6;
            Laya.stage.addChild(_this.headPanel);
            //添加时间面板
            _this.timePanel = new ScenePanel.TimePanel();
            _this.timePanel.zOrder = 7;
            Laya.stage.addChild(_this.timePanel);
            //添加提示面板
            _this.promptPanel = new ScenePanel.PromptPanel();
            _this.promptPanel.zOrder = 8;
            Laya.stage.addChild(_this.promptPanel);
            //添加投注记录面板
            _this.noteReocrdPanel = new ScenePanel.NoteRecordPanel();
            _this.noteReocrdPanel.zOrder = 8;
            Laya.stage.addChild(_this.noteReocrdPanel);
            //添加游戏规则面板
            _this.rulePanel = new ScenePanel.RulePanel();
            _this.rulePanel.zOrder = 8;
            Laya.stage.addChild(_this.rulePanel);
            //添加loading面板
            _this.loadingPanel = new ScenePanel.LoadingPanel();
            _this.loadingPanel.zOrder = 9;
            Laya.stage.addChild(_this.loadingPanel);
            _this.tipsPanel = new ScenePanel.TipsPanel();
            _this.tipsPanel.zOrder = 8;
            Laya.stage.addChild(_this.tipsPanel);
            //缩放
            _this.ScaleState();
            return _this;
        }
        /**
         * 缩放舞台
         */
        GameScenes.prototype.ScaleState = function () {
        };
        return GameScenes;
    }(ui.GameUI));
    ScenePanel.GameScenes = GameScenes;
})(ScenePanel || (ScenePanel = {}));
