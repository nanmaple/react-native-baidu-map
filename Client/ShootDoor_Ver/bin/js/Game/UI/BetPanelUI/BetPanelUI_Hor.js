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
    var BetPanelHor = /** @class */ (function (_super) {
        __extends(BetPanelHor, _super);
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        function BetPanelHor() {
            var _this = _super.call(this, true) || this;
            if (GameConfig.RatioType) {
                _this.ui.CancleBetBtn.scale(1, GameConfig.LengthShort);
                _this.ui.ConfirmBetBtn.scale(1, GameConfig.LengthShort);
                _this.ui.Chips.scale(1, GameConfig.LengthShort);
                _this.ui.BetBox.scale(1, GameConfig.LengthShort);
            }
            else {
                _this.ui.CancleBetBtn.scale(GameConfig.ShortLength, 1);
                _this.ui.ConfirmBetBtn.scale(GameConfig.ShortLength, 1);
                _this.ui.Chips.scale(GameConfig.ShortLength, 1);
                _this.ui.BetBox.scale(GameConfig.ShortLength, 1);
            }
            //绑定事件
            _this.BindClick();
            _this.ChangeChip(_this.uiData.selectedChipNum);
            return _this;
        }
        /**
         * 获取筹码坐标
         *
         */
        BetPanelHor.prototype.GetChipsPoint = function () {
            var x = 1312;
            if (GameConfig.RatioType) {
                var width = this.ui.Chips.width;
                x = x - width / 2;
            }
            else {
                var width = this.ui.Chips.width * GameConfig.ShortLength;
                x = x - width / 2;
            }
            var length = this.chipsBtn.length;
            for (var i = 0; i < length; i++) {
                var y = 100;
                if (GameConfig.RatioType) {
                    y += this.chipsBtn[i].y * GameConfig.LengthShort;
                }
                else {
                    y += this.chipsBtn[i].y;
                }
                this.chipsPoint.push(new Laya.Point(x, y));
            }
        };
        /**
        * 获取所有投注位置坐标
        */
        BetPanelHor.prototype.GetBetBtnPoint = function () {
            var baseY = 750;
            var baseX = 667;
            if (GameConfig.RatioType) {
                baseY = baseY - 252 * GameConfig.LengthShort;
                baseX = 0;
            }
            else {
                baseY = baseY - 252;
                baseX = baseX * (1 - GameConfig.ShortLength);
            }
            var length = this.betMoneyLabelArr.length;
            for (var i = 0; i < length; i++) {
                var x = this.betMoneyLabelArr[i].x + this.betMoneyLabelArr[i].parent.x;
                var y = this.betMoneyLabelArr[i].y + this.betMoneyLabelArr[i].parent.y;
                if (GameConfig.RatioType) {
                    x = baseX + x;
                    y = baseY + y * GameConfig.LengthShort;
                }
                else {
                    x = baseX + x * GameConfig.ShortLength;
                    y = baseY + y;
                }
                var point = new Laya.Point(x, y);
                this.betBtnPoint.push(point);
            }
        };
        /**
         * 筹码动画
         * @param endX 结束位置x坐标
         * @param endY 结束位置y坐标
         * @param curBetPosChip 投注位置上的筹码
         * @param value 投注金额
         * @param value 缓动后投注数量
         */
        BetPanelHor.prototype.ChipsFly = function (i, value) {
            var curBetPosChip = this.betBtnArr[i].getChildAt(2);
            //从对象池获取移动对象
            var flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
            //设置状态数
            flyChip.stateNum = 1;
            flyChip.label = this.chipPrice.toString();
            flyChip.anchorX = 0.5;
            flyChip.anchorY = 0.5;
            flyChip.skin = this.chipsNormalSkin;
            //筹码动画
            var endX = (this.betBtnPoint[i].x);
            var endY = (this.betBtnPoint[i].y);
            var obj = { x: endX, y: endY, scaleX: 1, scaleY: 1 };
            if (GameConfig.RatioType) {
                flyChip.scale(1.1, 1.1 * GameConfig.LengthShort);
                obj.scaleY = GameConfig.LengthShort;
            }
            else {
                flyChip.scale(1.1 * GameConfig.ShortLength, 1.1);
                obj.scaleX = GameConfig.ShortLength;
            }
            //设置初始位置为当前选择的筹码的位置
            flyChip.pos((this.chipsPoint[this.uiData.selectedChipNum.toString()].x), (this.chipsPoint[this.uiData.selectedChipNum.toString()].y));
            this.ui.addChild(flyChip);
            //开始缓动
            Laya.Tween.to(flyChip, obj, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, curBetPosChip, value], false));
        };
        return BetPanelHor;
    }(ScenePanel.BetPanelBaseUI));
    ScenePanel.BetPanelHor = BetPanelHor;
})(ScenePanel || (ScenePanel = {}));
