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
var Enum;
(function (Enum) {
    /**
     * 头部面板枚举
     */
    var TreasurePanel;
    (function (TreasurePanel) {
        /**
         * 游戏初始化
         */
        TreasurePanel[TreasurePanel["GameInit"] = 17000] = "GameInit";
        /**
         * 按下投注按钮
         */
        TreasurePanel[TreasurePanel["GameBetPos"] = 17001] = "GameBetPos";
        /**
         * 游戏结果处理
         */
        TreasurePanel[TreasurePanel["GameSettleResult"] = 17002] = "GameSettleResult";
        /**
         * 刷新
         */
        TreasurePanel[TreasurePanel["GameRefreshBtn"] = 17003] = "GameRefreshBtn";
        /**
         * 下一场
         */
        TreasurePanel[TreasurePanel["GameNextTime"] = 17004] = "GameNextTime";
        /**
         * 挖掘动画完成
         */
        TreasurePanel[TreasurePanel["GameDigAniComplete"] = 17005] = "GameDigAniComplete";
    })(TreasurePanel = Enum.TreasurePanel || (Enum.TreasurePanel = {}));
})(Enum || (Enum = {}));
/// <reference path="../../Effect/MineEffect.ts"/>
/**
 * 宝藏面板
 */
var TreasurePanel = /** @class */ (function (_super) {
    __extends(TreasurePanel, _super);
    function TreasurePanel(eventKey) {
        var _this = _super.call(this, eventKey) || this;
        _this.mineNum = 0;
        _this.betNum = 0;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    TreasurePanel.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    TreasurePanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.TreasurePanel.GameInit:
                this.ui.mineImg.mouseEnabled = true;
                this.InitMineOdds(data.OddsInfo);
                break;
            case Enum.TreasurePanel.GameBetPos:
                this.ui.mineImg.mouseEnabled = false;
                this.betNum = data;
                break;
            case Enum.TreasurePanel.GameSettleResult:
                this.mines = data.Mines;
                this.amount = data.WinAmount;
                break;
            case Enum.TreasurePanel.GameRefreshBtn:
                this.ui.mineImg.mouseEnabled = true;
                break;
            case Enum.TreasurePanel.GameNextTime:
                this.ui.mineImg.mouseEnabled = true;
                this.mineNum = 0;
                break;
            case Enum.TreasurePanel.GameDigAniComplete:
                this.Show();
                break;
            default:
                break;
        }
    };
    TreasurePanel.prototype.Show = function () {
        var _this = this;
        var mineEffectList = new Array();
        for (var i in this.mines) {
            var price = this.betNum * this.mineOdds[i];
            // let mineUrl = "ui/" + this.mines[i] + ".png";
            for (var j = 0; j < this.mines[i]; j++) {
                this.mineNum++;
                var effect = Laya.Pool.getItemByClass("img", MineEffect);
                var jumpPos = this.JumpPos();
                var mineUrl = "ui/testMine.png";
                effect.listenEventKey = this.listenEventKey;
                effect.ShowAll = this.amount,
                    effect.Price = price,
                    effect.ShowSkin = mineUrl,
                    effect.Pos1 = [this.mineX, this.mineY],
                    effect.Pos2 = jumpPos,
                    effect.Pos3 = [166, 888],
                    effect.PoolKey = "img";
                mineEffectList.push(effect);
            }
        }
        // mineEffectList[0].Start();
        var k = 0;
        Laya.timer.loop(400, this, function () {
            if (k != _this.mineNum - 1) {
                mineEffectList[k].Start();
                k++;
            }
            else {
                mineEffectList[k].Start(true);
                Laya.timer.clearAll(_this);
            }
        }, [k]);
    };
    TreasurePanel.prototype.JumpPos = function () {
        var temp = Math.random();
        var jumpX = 0;
        if (temp < 0.5)
            jumpX = this.mineX + 80;
        else
            jumpX = this.mineX - 80;
        if (this.mineX < 100)
            jumpX = 130;
        if (this.mineX > 650)
            jumpX = 620;
        var jumpY = this.mineY + 80 * (Math.random() - 0.6);
        return [jumpX, jumpY];
    };
    return TreasurePanel;
}(BaseTreasurePanel));
//# sourceMappingURL=TreasurePanel.js.map