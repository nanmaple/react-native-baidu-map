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
    var RulePanel = /** @class */ (function (_super) {
        __extends(RulePanel, _super);
        function RulePanel() {
            var _this = _super.call(this) || this;
            //将提示UI类缓存为静态图像
            _this.cacheAs = "bitmap";
            _this.visible = false;
            if (GameConfig.RatioType) {
                _this.prompt.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.prompt.scale(1, GameConfig.WidthHeight);
            }
            _this.close.on(Laya.Event.CLICK, _this, _this.CloseRule);
            return _this;
        }
        /**
         * 显示游戏规则
         */
        RulePanel.prototype.ShowRule = function () {
            this.visible = true;
        };
        /**
         * 关闭游戏规则
         */
        RulePanel.prototype.CloseRule = function () {
            this.visible = false;
            this.ClearTextureRes();
        };
        /**
         * 销毁投注面板资源，释放内存
         */
        RulePanel.prototype.ClearTextureRes = function () {
            Laya.loader.clearTextureRes("ui/mask.png");
            Laya.loader.clearTextureRes("ui/bg_record.png");
            Laya.loader.clearTextureRes("ui/recordLine.png");
        };
        return RulePanel;
    }(ui.RulePanelUI));
    ScenePanel.RulePanel = RulePanel;
})(ScenePanel || (ScenePanel = {}));
