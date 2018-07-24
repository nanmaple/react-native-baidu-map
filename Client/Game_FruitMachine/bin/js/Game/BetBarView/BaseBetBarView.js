var betpos = {
    0: Enum.BetBtnPosEnum.Apple,
    1: Enum.BetBtnPosEnum.Orange,
    2: Enum.BetBtnPosEnum.Orange,
    3: Enum.BetBtnPosEnum.Papaya,
    4: Enum.BetBtnPosEnum.Papaya,
    5: Enum.BetBtnPosEnum.Bell,
    6: Enum.BetBtnPosEnum.Bell,
    7: Enum.BetBtnPosEnum.Watermelon,
    8: Enum.BetBtnPosEnum.Watermelon,
    9: Enum.BetBtnPosEnum.Star,
    10: Enum.BetBtnPosEnum.Star,
    11: Enum.BetBtnPosEnum.Seven,
    12: Enum.BetBtnPosEnum.Seven,
    13: Enum.BetBtnPosEnum.Bar,
    14: Enum.BetBtnPosEnum.Bar,
    15: Enum.BetBtnPosEnum.Bar,
    16: 16
};
var BaseBetBarView = /** @class */ (function () {
    function BaseBetBarView() {
        /**最大投注数 */
        this.max = 99;
    }
    /**
     * 重置屏幕
     */
    BaseBetBarView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.BetBarViewUI();
        this.ui.zOrder = 1;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**
     * 初始化绑定点击事件
    */
    BaseBetBarView.prototype.Init = function () {
        this.lenght = this.ui.numChildren - 1; //减去上面的倍数条
        for (var i = 0; i < this.lenght; i++) {
            var bet = this.ui.getChildAt(i).getChildByName('betBtutton');
            bet.on(Laya.Event.CLICK, this, this.OnBetClick, [i, true]);
        }
    };
    return BaseBetBarView;
}());
//# sourceMappingURL=BaseBetBarView.js.map