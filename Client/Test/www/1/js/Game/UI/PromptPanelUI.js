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
    var PromptPanel = /** @class */ (function (_super) {
        __extends(PromptPanel, _super);
        function PromptPanel() {
            var _this = _super.call(this) || this;
            //将提示UI类缓存为静态图像
            _this.cacheAs = "bitmap";
            _this.centerX = 0; //水平方向居中
            _this.centerY = 0; //垂直方向居中
            _this.visible = false;
            //确认、取消按钮绑定点击事件
            _this.sureBox.getChildByName("sureBtn").on(Laya.Event.CLICK, _this, _this.OnClickConfirm);
            if (GameConfig.RatioType) {
                _this.prompt.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.prompt.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
         * 弹出提示框
         * @param txt 显示内容
         */
        PromptPanel.prototype.ShowMsg = function (txt) {
            this.visible = true;
            this.promptTxt.text = txt;
        };
        /**
         * 点击确认
         */
        PromptPanel.prototype.OnClickConfirm = function () {
            this.visible = false;
        };
        return PromptPanel;
    }(ui.PromptUI));
    ScenePanel.PromptPanel = PromptPanel;
})(ScenePanel || (ScenePanel = {}));
