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
    var TipsPanel = (function (_super) {
        __extends(TipsPanel, _super);
        function TipsPanel() {
            var _this = _super.call(this) || this;
            _this.closeBtn.on(Laya.Event.CLICK, _this, _this.CloseTip);
            _this.visible = false;
            if (GameConfig.RatioType) {
                _this.closeBtn.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.closeBtn.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 显示面板
         */
        TipsPanel.prototype.ShowTip = function () {
            this.visible = true;
        };
        /**
         * 关闭面板
         */
        TipsPanel.prototype.CloseTip = function () {
            this.visible = false;
        };
        return TipsPanel;
    }(ui.TipsPanelUI));
    ScenePanel.TipsPanel = TipsPanel;
})(ScenePanel || (ScenePanel = {}));
