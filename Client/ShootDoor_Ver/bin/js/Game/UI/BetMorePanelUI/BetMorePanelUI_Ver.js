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
    var BetMorePanelVer = /** @class */ (function (_super) {
        __extends(BetMorePanelVer, _super);
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        function BetMorePanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.time.scale(GameConfig.LengthShort, 1);
                _this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                _this.ui.Title.scale(GameConfig.LengthShort, 1);
                for (var i = 0; i < 52; i++) {
                    var Box = _this.ui.BetBox.getChildAt(i);
                    var child1 = Box.getChildAt(1);
                    var child2 = Box.getChildAt(2);
                    var child3 = Box.getChildAt(3);
                    var child4 = Box.getChildAt(4);
                    child1.scale(GameConfig.LengthShort, 1);
                    child2.scale(GameConfig.LengthShort, 1);
                    child3.scale(GameConfig.LengthShort, 1);
                    child4.scale(GameConfig.LengthShort, 1);
                }
                _this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                _this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
            }
            else {
                _this.ui.MsgPanel.scale(1, GameConfig.LengthShort);
                _this.ui.time.scale(1, GameConfig.LengthShort);
                _this.ui.Title.scale(1, GameConfig.LengthShort);
                _this.ui.ConfirmBetBtn.scale(1, GameConfig.LengthShort);
                _this.ui.CancleBetBtn.scale(1, GameConfig.LengthShort);
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
        BetMorePanelVer.prototype.ChipsFly = function (i, value) {
            // console.log(i,value);
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
            var betBoxChild = this.ui.BetBox.getChildByName(Enum.BetMorePosType[i]);
            var curBetPosChip = betBoxChild.getChildAt(4);
            //从对象池获取移动对象
            this.ChipsFlyCallBack(curBetPosChip, value);
        };
        return BetMorePanelVer;
    }(ScenePanel.BetMorePanelBaseUI));
    ScenePanel.BetMorePanelVer = BetMorePanelVer;
})(ScenePanel || (ScenePanel = {}));
