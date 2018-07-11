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
var GameChipsView = /** @class */ (function (_super) {
    __extends(GameChipsView, _super);
    function GameChipsView(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    GameChipsView.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameChipsView.prototype.Set = function (data) {
        switch (data.Type) {
            case Enum.GameCommand.MSG_GAME_INIT:
                this.GameInit(data.Data);
                break;
            case Enum.GameCommand.MSG_GAME_SETTLERESULT:
                this.GameResult(data.Data);
                break;
            default:
                break;
        }
    };
    /**
     * 游戏初始化
     * @param data
     */
    GameChipsView.prototype.GameInit = function (data) {
        this.InitChip(data.BaseAmounts);
        this.DisabledShootBtn(false);
    };
    /**
     * 初始化筹码
     * @param data
     */
    GameChipsView.prototype.InitChip = function (data) {
        this.ui.chipBox.removeChildren();
        this.chipsArr = [];
        this.betAmount = this.betAmount ? this.betAmount : data[0];
        this.SetBetTotalAmount(this.betAmount, 0);
        for (var index = 0; index < data.length; index++) {
            var chipBtn = new ui.ChipBtnViewUI();
            chipBtn.on(Laya.Event.CLICK, this, this.ChooseChip, [index]);
            chipBtn.x = (chipBtn.width + 10) * index + 10;
            chipBtn.chip.skin = this.noSelectChipSkin;
            chipBtn.chip.label = data[index];
            this.ui.chipBox.addChild(chipBtn);
            this.chipsArr.push(chipBtn);
        }
        this.chipsArr[0].chip.skin = this.selectChipSkin;
    };
    /**
     * 投注结果
     * @param data
     */
    GameChipsView.prototype.GameResult = function (data) {
        if (data.Status != Enum.BetResultEnum.Success) {
            this.Reset();
        }
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameChipsView.prototype.ShootDoor = function () {
        this.DisabledShootBtn(true);
        this.EventNotification(Enum.ListenViewEnum.ShootDoor);
    };
    /**
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameChipsView.prototype.EventNotification = function (type, value) {
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return GameChipsView;
}(BaseGameChipsView));
//# sourceMappingURL=GameChipsView.js.map