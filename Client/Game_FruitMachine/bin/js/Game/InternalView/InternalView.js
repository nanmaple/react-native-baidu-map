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
    var InternalView;
    (function (InternalView) {
        /**设置当前投注额 */
        InternalView[InternalView["SetCurrentBet"] = 10000] = "SetCurrentBet";
        /**开始随机数动画 */
        InternalView[InternalView["RandomAnimated"] = 10001] = "RandomAnimated";
    })(InternalView = Enum.InternalView || (Enum.InternalView = {}));
})(Enum || (Enum = {}));
/**中心信息面板类 */
var InternalView = /** @class */ (function (_super) {
    __extends(InternalView, _super);
    function InternalView(eventKey) {
        var _this = _super.call(this) || this;
        _this.bigNumber = 14; //大小区分值为偶数
        _this.count = 28; //跳动次数
        _this.currCount = 0; //当前次数
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新UI
    */
    InternalView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     * @param value
     */
    InternalView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.InternalView.SetCurrentBet:
                this.ui.curBet.text = data;
                break;
            case Enum.InternalView.RandomAnimated:
                this.Roll(data);
                break;
        }
    };
    /**
     * 滚动结果
     * @param result 结束数字
     */
    InternalView.prototype.Roll = function (result) {
        this.resNumber = result;
        console.log('随机数为:' + this.resNumber);
        Laya.timer.frameLoop(2, this, this.LoopCallBack);
    };
    /**
     * 定时器回调函数
     */
    InternalView.prototype.LoopCallBack = function () {
        this.currCount++;
        var number = this.currCount % this.bigNumber;
        number = number ? number : this.bigNumber;
        //图片显示数值的情况
        // let one = number%10;
        // let ten = Math.floor(number/10);
        // this.ui.onesPlace.index = one;
        // this.ui.tensPlace.index = ten;
        //文字显示数值的情况
        if (number < 10)
            number = '0' + number;
        this.ui.random.text = number + '';
        if (this.currCount >= this.count + this.resNumber) {
            this.RollEnd();
        }
    };
    /**
     * 滚动结束
     */
    InternalView.prototype.RollEnd = function () {
        Laya.timer.clear(this, this.LoopCallBack);
        this.currCount = 0;
        //发送事件
        var data = new Dto.EventNotificationDto();
        data.Value = '';
        data.Type = Enum.ListenViewEnum.RandomEndm;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return InternalView;
}(BaseInternalView));
//# sourceMappingURL=InternalView.js.map