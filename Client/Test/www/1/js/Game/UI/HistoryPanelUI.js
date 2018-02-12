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
    var HistoryPanel = /** @class */ (function (_super) {
        __extends(HistoryPanel, _super);
        function HistoryPanel() {
            var _this = _super.call(this) || this;
            _this.cacheAs = "bitmap";
            _this.left = 20;
            _this.top = 100;
            if (GameConfig.RatioType) {
                _this.history.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.history.scale(1, GameConfig.WidthHeight);
            }
            _this.listBoxH = _this.listPanel.height / 5;
            return _this;
        }
        /**
         * 滚动历史列表
         */
        HistoryPanel.prototype.ScrollHistoryList = function (hander) {
            Laya.Tween.to(this._list, { y: this.listBoxH }, 2000, Laya.Ease.quadInOut, Laya.Handler.create(this, this.ResetHistoryList));
            this.hander = hander;
        };
        /**
         * 重置历史列表
         */
        HistoryPanel.prototype.ResetHistoryList = function () {
            this._list.y = 0;
            this.hander.run();
        };
        /**
         * 获取牌面结束位置和宽高
         */
        HistoryPanel.prototype.GetEndFlyPoker = function () {
            if (!this.flyPoker) {
                this.flyPoker = [{ x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }, { x: 0, y: 0, width: 0, height: 0 }];
                //循环创建扑克牌数组
                for (var i = 0; i < 3; i++) {
                    var poker = this["pokerPos" + i];
                    if (GameConfig.RatioType) {
                        this.flyPoker[i].width = poker.width * GameConfig.HeightWidth;
                        this.flyPoker[i].height = poker.height;
                        this.flyPoker[i].x = poker.x * GameConfig.HeightWidth + 20 + this.flyPoker[i].width / 2;
                        this.flyPoker[i].y = poker.y + 100 + this.flyPoker[i].height / 2;
                    }
                    else {
                        this.flyPoker[i].width = poker.width;
                        this.flyPoker[i].height = poker.height * GameConfig.WidthHeight;
                        this.flyPoker[i].x = poker.x + 20 + this.flyPoker[i].width / 2;
                        this.flyPoker[i].y = poker.y * GameConfig.WidthHeight + 100 + this.flyPoker[i].height / 2;
                    }
                }
            }
            return this.flyPoker;
        };
        return HistoryPanel;
    }(ui.HistoryRecordUI));
    ScenePanel.HistoryPanel = HistoryPanel;
})(ScenePanel || (ScenePanel = {}));
