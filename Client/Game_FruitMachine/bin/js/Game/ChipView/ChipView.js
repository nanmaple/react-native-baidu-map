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
/*
* name;
*/
var ChipView = /** @class */ (function (_super) {
    __extends(ChipView, _super);
    function ChipView(eventKey) {
        var _this = _super.call(this) || this;
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
        this.currChip = data;
        this.ui.currChip.text = data;
    };
    /**
    * 按下加注或减注
    * @param type 添加或减去
    */
    ChipView.prototype.OnMouseDown = function (type) {
        this.loopMark = true;
        this.type = type;
        if (type) {
            this.currChip += 100;
        }
        else {
            this.currChip -= 100;
            if (this.currChip < 100) {
                this.currChip = 100;
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
            this.currChip += 100;
        }
        else {
            this.currChip -= 100;
            if (this.currChip < 100) {
                Laya.timer.clear(this, this.LoopCallback);
                this.currChip = 100;
                return;
            }
        }
        this.ui.currChip.text = this.currChip + '';
    };
    /**
    * 鼠标移出或抬起结束加减注
    */
    ChipView.prototype.OnMouseUp = function () {
        if (!this.loopMark)
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
        this.currChip = value;
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = Enum.ListenViewEnum.ChangBaseAmount;
        var event = new CustomEvent("GameViewKey", { detail: data });
        document.dispatchEvent(event);
    };
    return ChipView;
}(BaseChipView));
//# sourceMappingURL=ChipView.js.map