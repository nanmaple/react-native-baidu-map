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
    var HistoryPanelVer = /** @class */ (function (_super) {
        __extends(HistoryPanelVer, _super);
        function HistoryPanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.left = 375 * (1 - GameConfig.LengthShort);
                _this.ui.bottom = 0;
                _this.ui.history.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.left = 0;
                _this.ui.top = 1334 - 635 * GameConfig.ShortLength;
                _this.ui.history.scale(1, GameConfig.ShortLength);
            }
            return _this;
        }
        /**
         * 获取牌面结束位置和宽高
         */
        HistoryPanelVer.prototype.GetEndFlyPoker = function (isChange) {
            // if (!this.uiData.flyPoker || isChange) {
            this.uiData.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }];
            //循环创建扑克牌数组
            for (var i = 0; i < 3; i++) {
                var poker = this.ui["pokerPos" + i];
                if (GameConfig.RatioType) {
                    this.uiData.flyPoker[i].width = poker.width * GameConfig.LengthShort;
                    this.uiData.flyPoker[i].height = poker.height;
                    this.uiData.flyPoker[i].x = this.ui.x + poker.x * GameConfig.LengthShort;
                    this.uiData.flyPoker[i].y = this.ui.y + poker.y;
                }
                else {
                    this.uiData.flyPoker[i].width = poker.width;
                    this.uiData.flyPoker[i].height = poker.height * GameConfig.ShortLength;
                    this.uiData.flyPoker[i].x = this.ui.x + poker.x;
                    this.uiData.flyPoker[i].y = this.ui.y + poker.y * GameConfig.ShortLength;
                }
            }
            // }
            return this.uiData.flyPoker;
        };
        return HistoryPanelVer;
    }(ScenePanel.HistoryPanelBaseUI));
    ScenePanel.HistoryPanelVer = HistoryPanelVer;
})(ScenePanel || (ScenePanel = {}));
