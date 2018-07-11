// const type = Enum.BetPosTypeEnum;
// const betpos = {0:type.Apple,1:type.Orange,2:type.Papaya,3:type.Bell,4:type.Watermelon,5:type.Star,6:type.Seven,7:type.Bar}
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
        // this.ui.cacheAs = "bitmap";
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
            bet.on(Laya.Event.CLICK, this, this.OnBetClick, [i]);
        }
    };
    return BaseBetBarView;
}());
//# sourceMappingURL=BaseBetBarView.js.map