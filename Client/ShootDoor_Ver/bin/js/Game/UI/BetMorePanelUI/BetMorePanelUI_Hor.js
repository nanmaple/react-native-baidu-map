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
    var BetMorePanelHor = /** @class */ (function (_super) {
        __extends(BetMorePanelHor, _super);
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        function BetMorePanelHor() {
            var _this = _super.call(this, true) || this;
            if (GameConfig.RatioType) {
                _this.ui.Prompt.scale(1, GameConfig.LengthShort);
                _this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
            }
            else {
                _this.ui.Prompt.scale(GameConfig.ShortLength, 1);
                _this.ui.MsgPanel.scale(GameConfig.ShortLength, 1);
            }
            //绑定事件
            _this.BindClick();
            return _this;
        }
        /**
         * 筹码动画
         * @param endX 结束位置x坐标
         * @param endY 结束位置y坐标
         * @param curBetPosChip 投注位置上的筹码
         * @param value 投注金额
         * @param value 缓动后投注数量
         */
        BetMorePanelHor.prototype.ChipsFly = function (i, value) {
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
            var betBoxChild = this.ui.BetBox.getChildByName(Enum.BetMorePosType[i]);
            var curBetPosChip = betBoxChild.getChildAt(4);
            //从对象池获取移动对象
            this.ChipsFlyCallBack(curBetPosChip, value);
        };
        return BetMorePanelHor;
    }(ScenePanel.BetMorePanelBaseUI));
    ScenePanel.BetMorePanelHor = BetMorePanelHor;
})(ScenePanel || (ScenePanel = {}));
