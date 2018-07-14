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
    var ChipView;
    (function (ChipView) {
        /**设置投注个数 */
        ChipView[ChipView["SetBaseAmonut"] = 10000] = "SetBaseAmonut";
        /**改变游戏状态 */
        ChipView[ChipView["ChangGameStatus"] = 10001] = "ChangGameStatus";
        /**游戏初始化设置 */
        ChipView[ChipView["Init"] = 10002] = "Init";
    })(ChipView = Enum.ChipView || (Enum.ChipView = {}));
})(Enum || (Enum = {}));
/**筹码面板类 */
var ChipView = /** @class */ (function (_super) {
    __extends(ChipView, _super);
    function ChipView(eventKey) {
        var _this = _super.call(this) || this;
        /**游戏状态 */
        _this.gameStatus = Enum.GameStatus.Default;
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新UI
    */
    ChipView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     */
    ChipView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.ChipView.SetBaseAmonut:
                this.currChip = data;
                this.ui.currChip.text = data;
                break;
            case Enum.ChipView.ChangGameStatus:
                this.gameStatus = data;
                break;
            case Enum.ChipView.Init:
                this.InitSetting(data);
                break;
        }
    };
    ChipView.prototype.InitSetting = function (data) {
        this.baseChip = data[0];
        this.ui.currChip.text = data[0];
        this.smallFast = data[1];
        this.ui.leftLable.text = data[1];
        this.bigFast = data[2];
        this.ui.rightLable.text = data[2];
    };
    /**
    * 按下加注或减注
    * @param type 添加或减去
    */
    ChipView.prototype.OnMouseDown = function (type) {
        if (this.gameStatus != Enum.GameStatus.Default)
            return;
        this.loopMark = true;
        this.type = type;
        if (type) {
            this.currChip += this.baseChip;
            if (this.currChip > this.maxChip) {
                this.currChip = this.maxChip;
            }
        }
        else {
            this.currChip -= this.baseChip;
            if (this.currChip < this.baseChip) {
                this.currChip = this.baseChip;
                return;
            }
        }
        this.ui.currChip.text = this.currChip + '';
        Laya.timer.once(300, this, this.DelayCallback);
    };
    /**
     * 延迟执行循环
    */
    ChipView.prototype.DelayCallback = function () {
        Laya.timer.frameLoop(3, this, this.LoopCallback);
    };
    /**
     * 循环累计回调函数
    */
    ChipView.prototype.LoopCallback = function () {
        if (!this.loopMark) {
            Laya.timer.clear(this, this.LoopCallback);
            return;
        }
        if (this.type) {
            this.currChip += this.baseChip;
            if (this.currChip > this.maxChip) {
                this.currChip = this.maxChip;
            }
        }
        else {
            this.currChip -= this.baseChip;
            if (this.currChip < this.baseChip) {
                Laya.timer.clear(this, this.LoopCallback);
                this.currChip = this.baseChip;
                return;
            }
        }
        this.ui.currChip.text = this.currChip + '';
    };
    /**
    * 鼠标移出或抬起结束加减注
    */
    ChipView.prototype.OnMouseUp = function () {
        if (!this.loopMark || this.gameStatus != Enum.GameStatus.Default)
            return;
        this.loopMark = false;
        Laya.timer.clear(this, this.DelayCallback);
        Laya.timer.clear(this, this.LoopCallback);
        this.OnSetChip(this.currChip);
    };
    /**
     * 设置筹码事件监听函数
     * @param value 筹码额
     */
    ChipView.prototype.OnSetChip = function (value) {
        if (this.gameStatus != Enum.GameStatus.Default || !value)
            return;
        SoundManage.PlaySound(SoundConfig.SounRes.Button);
        this.currChip = value;
        var data = new Dto.EventNotificationDto();
        data.Value = this.currChip;
        data.Type = Enum.ListenViewEnum.ChangBaseAmount;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return ChipView;
}(BaseChipView));
//# sourceMappingURL=ChipView.js.map