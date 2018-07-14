var BaseGameChipsView = /** @class */ (function () {
    function BaseGameChipsView() {
        this.listenEventKey = "";
        /**
         * 筹码数组
         */
        this.chipsArr = null;
        /**
         * 选中的筹码皮肤
         */
        this.selectChipSkin = "ui/chip/btn_select.png";
        /**
         * 未选中的筹码皮肤
         */
        this.noSelectChipSkin = "ui/chip/btn_noselect.png";
        /**
         * 射门默认的皮肤
         */
        this.shootDoorSkin = "ui/chip/btn_shoor.png";
        /**
         * 射门按下的皮肤
         */
        this.noShootDoorSkin = "ui/chip/btn_shoor_n.png";
        /**
         * 投注金额(不包含道具金额)
         */
        this.betAmount = null;
        /**
         * 筹码总页数
         */
        this.pageNum = 1;
        /**
         * 当前筹码页
         */
        this.pageNow = 1;
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
        this.ui.btn_max.label = LanguageUtils.Language.Get("MaxChip");
        Laya.stage.addChild(this.ui);
        this.Init();
    };
    /**
     * 初始化
     * @param data
     */
    BaseGameChipsView.prototype.Init = function () {
        this.DisabledShootBtn(true);
    };
    /**
     * 是否禁用射门按钮
     * @param disabled
     */
    BaseGameChipsView.prototype.DisabledShootBtn = function (disabled) {
        if (disabled) {
            this.ui.btn_shoor.skin = this.noShootDoorSkin;
        }
        else {
            this.ui.btn_shoor.skin = this.shootDoorSkin;
        }
        this.ui.btn_shoor.disabled = disabled;
        this.ui.btn_shoor.gray = false;
    };
    /**
     * 跳转到上一页
     */
    BaseGameChipsView.prototype.PreviousPage = function () {
        if (this.pageNow <= 1) {
            return;
        }
        else {
            this.pageNow--;
            Laya.Tween.to(this.ui.chipBox, { x: -this.ui.chipPanel.width * (this.pageNow - 1) }, 500, Laya.Ease.circInOut);
        }
    };
    /**
     * 跳转到下一页
     */
    BaseGameChipsView.prototype.NextPage = function () {
        if (this.pageNow >= this.pageNum) {
            return;
        }
        else {
            this.pageNow++;
            Laya.Tween.to(this.ui.chipBox, { x: -this.ui.chipPanel.width * (this.pageNow - 1) }, 500, Laya.Ease.circInOut);
        }
    };
    /**
     * 跳转到最大筹码页
     * @param index
     */
    BaseGameChipsView.prototype.MaxChipPage = function (index) {
        this.pageNow = Math.ceil((index + 1) / 4);
        Laya.Tween.to(this.ui.chipBox, { x: -this.ui.chipPanel.width * (this.pageNow - 1) }, 500, Laya.Ease.circInOut);
    };
    /**
     * 选择最大筹码
     */
    BaseGameChipsView.prototype.ChooseMaxChip = function () {
        this.EventNotification(Enum.ListenViewEnum.ChooseMaxChip);
    };
    return BaseGameChipsView;
}());
//# sourceMappingURL=BaseGameChipsView.js.map