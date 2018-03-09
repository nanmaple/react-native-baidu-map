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
    var BetPanelVer = /** @class */ (function (_super) {
        __extends(BetPanelVer, _super);
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        function BetPanelVer() {
            var _this = _super.call(this, false) || this;
            if (GameConfig.RatioType) {
                _this.ui.CancleBetBtn.scale(GameConfig.LengthShort, 1);
                _this.ui.ConfirmBetBtn.scale(GameConfig.LengthShort, 1);
                _this.ui.Chips.scale(GameConfig.LengthShort, 1);
                for (var i = 0; i < 13; i++) {
                    var Box = _this.ui.BetBox.getChildAt(i);
                    var child1 = Box.getChildAt(0);
                    var child2 = Box.getChildAt(1);
                    var child3 = Box.getChildAt(2);
                    child1.scale(GameConfig.LengthShort, 1);
                    child2.scale(GameConfig.LengthShort, 1);
                    child3.scale(GameConfig.LengthShort, 1);
                }
                _this.ui.MsgPanel.scale(GameConfig.LengthShort, 1);
                _this.ui.Chips.bottom = 655;
            }
            else {
                _this.ui.CancleBetBtn.scale(1, GameConfig.ShortLength);
                _this.ui.ConfirmBetBtn.scale(1, GameConfig.ShortLength);
                _this.ui.Chips.scale(1, GameConfig.ShortLength);
                _this.ui.ChipsBg.scale(1, GameConfig.ShortLength);
                _this.ui.BetBox.scale(1, GameConfig.ShortLength);
                _this.ui.BetBg.scale(1, GameConfig.ShortLength);
                _this.ui.MsgPanel.scale(1, GameConfig.ShortLength);
                _this.baseX = 18;
                _this.ui.Chips.bottom = 655 * GameConfig.ShortLength;
                _this.ui.ChipsBg.bottom = 655 * GameConfig.ShortLength;
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
        BetPanelVer.prototype.GetChipsPoint = function () {
            var y = 1334;
            this.baseX = 18;
            if (GameConfig.RatioType) {
                this.ui.Chips.bottom = 655;
                y = y - this.ui.Chips.bottom - this.ui.Chips.height / 2;
                this.baseX = this.baseX + 357 * (1 - GameConfig.LengthShort);
            }
            else {
                y = y - this.ui.Chips.bottom - this.ui.Chips.height * GameConfig.ShortLength / 2;
            }
            var length = this.chipsBtn.length;
            for (var i = 0; i < length; i++) {
                var x = this.baseX;
                if (GameConfig.RatioType) {
                    x = x + this.chipsBtn[i].x * GameConfig.LengthShort;
                }
                else {
                    x = x + this.chipsBtn[i].x;
                }
                this.chipsPoint.push(new Laya.Point(x, y));
            }
        };
        /**
        * 获取所有投注位置坐标
        */
        BetPanelVer.prototype.GetBetBtnPoint = function () {
            var baseY = 1334;
            var baseX = 375;
            if (GameConfig.RatioType) {
                baseY = baseY - 642;
                baseX = baseX * (1 - GameConfig.LengthShort);
            }
            else {
                baseY = baseY - 642 * GameConfig.ShortLength;
                baseX = 0;
            }
            var length = this.betMoneyLabelArr.length;
            for (var i = 0; i < length; i++) {
                var x = this.betMoneyLabelArr[i].x + this.betMoneyLabelArr[i].parent.x;
                var y = this.betMoneyLabelArr[i].y + this.betMoneyLabelArr[i].parent.y;
                if (GameConfig.RatioType) {
                    x = x;
                    y = baseY + y;
                }
                else {
                    x = x;
                    y = baseY + y * GameConfig.ShortLength;
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
        BetPanelVer.prototype.ChipsFly = function (i, value) {
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
                flyChip.scale(1.1 * GameConfig.LengthShort, 1.1);
                obj.scaleX = GameConfig.LengthShort;
            }
            else {
                flyChip.scale(1.1, 1.1 * GameConfig.ShortLength);
                obj.scaleY = GameConfig.ShortLength;
            }
            //设置初始位置为当前选择的筹码的位置
            flyChip.pos((this.chipsPoint[this.uiData.selectedChipNum.toString()].x), (this.chipsPoint[this.uiData.selectedChipNum.toString()].y));
            this.ui.addChild(flyChip);
            //开始缓动
            Laya.Tween.to(flyChip, obj, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, curBetPosChip, value], false));
            this.flyChipArray.push(flyChip);
        };
        return BetPanelVer;
    }(ScenePanel.BetPanelBaseUI));
    ScenePanel.BetPanelVer = BetPanelVer;
})(ScenePanel || (ScenePanel = {}));
