var BaseGameChipsView = /** @class */ (function () {
    function BaseGameChipsView() {
        this.listenEventKey = "";
        /**
         * 筹码数组
         */
        this.chipsArr = [];
        /**
         * 选中的筹码皮肤
         */
        this.selectChipSkin = "ui/chip/btn_select.png";
        /**
         * 未选中的筹码皮肤
         */
        this.noSelectChipSkin = "ui/chip/btn_noselect.png";
        /**
         * 投注金额(不包含道具金额)
         */
        this.betAmount = null;
    }
    /**
     * 重置屏幕
     */
    BaseGameChipsView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameChipsViewUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        this.ui.btn_shoor.on(Laya.Event.CLICK, this, this.ShootDoor);
        this.ui.btn_left.on(Laya.Event.CLICK, this, this.PreviousPage);
        this.ui.btn_right.on(Laya.Event.CLICK, this, this.NextPage);
        this.ui.btn_max.on(Laya.Event.CLICK, this, this.ChooseMaxChip);
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**
     * 初始化
     * @param data
     */
    BaseGameChipsView.prototype.Init = function () {
        this.DisabledShootBtn(true);
        this.ui.chipPanel.hScrollBarSkin = "";
    };
    /**
     * 选择投注筹码
     * @param index
     */
    BaseGameChipsView.prototype.ChooseChip = function (index) {
        this.betAmount = Number(this.chipsArr[index].chip.label);
        for (var i = 0; i < this.chipsArr.length; i++) {
            this.chipsArr[i].chip.skin = this.noSelectChipSkin;
            if (index == i) {
                this.chipsArr[i].chip.skin = this.selectChipSkin;
            }
        }
        this.EventNotification(Enum.ListenViewEnum.ChooseChip);
    };
    /**
     * 设置投注总金额
     * @param betAmount 投注金额
     * @param propAmount 道具金额
     */
    BaseGameChipsView.prototype.SetBetTotalAmount = function (betAmount, propAmount) {
        var total = betAmount + propAmount;
        this.ui.money.text = total.toString();
    };
    /**
     * 获取投注金额
     */
    BaseGameChipsView.prototype.GetBetAmount = function () {
        return this.betAmount;
    };
    /**
     * 重置
     */
    BaseGameChipsView.prototype.Reset = function () {
        this.DisabledShootBtn(false);
        this.SetBetTotalAmount(this.betAmount, 0);
    };
    /**
     * 是否禁用射门按钮
     * @param disabled
     */
    BaseGameChipsView.prototype.DisabledShootBtn = function (disabled) {
        this.ui.btn_shoor.disabled = disabled;
        this.ui.btn_shoor.gray = false;
    };
    /**
     * 上一页
     */
    BaseGameChipsView.prototype.PreviousPage = function () {
    };
    /**
     * 下一页
     */
    BaseGameChipsView.prototype.NextPage = function () {
    };
    /**
     * 选择最大筹码
     */
    BaseGameChipsView.prototype.ChooseMaxChip = function () {
    };
    return BaseGameChipsView;
}());
//# sourceMappingURL=BaseGameChipsView.js.map