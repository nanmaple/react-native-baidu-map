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
var RandomNumView = /** @class */ (function (_super) {
    __extends(RandomNumView, _super);
    function RandomNumView() {
        var _this = _super.call(this) || this;
        // private ui:ui.NumberUI = new ui.NumberUI();
        _this.bigNumber = 14; //大小区分值为偶数
        _this.count = 28; //跳动次数
        _this.currCount = 0; //当前次数
        return _this;
        // Laya.stage.addChild(this.ui)
    }
    /**
     * 刷新UI
    */
    RandomNumView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     * @param value
     */
    RandomNumView.prototype.Set = function (value) {
        this.result = value;
    };
    /**
     * 滚动结果
     * @param endCallback 结束回调
     */
    RandomNumView.prototype.Roll = function (endCallback) {
        var median = this.bigNumber / 2;
        this.endCallback = endCallback;
        if (this.result) {
            this.resNumber = Math.ceil(Math.random() * (median));
        }
        else {
            this.resNumber = Math.ceil(Math.random() * (this.bigNumber - median) + median);
        }
        console.log(this.resNumber);
        Laya.timer.frameLoop(2, this, this.LoopCallBack);
    };
    /**
     * 定时器回调函数
     */
    RandomNumView.prototype.LoopCallBack = function () {
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
        this.ui.number.text = number + '';
        if (this.currCount >= this.count + this.resNumber) {
            Laya.timer.clear(this, this.LoopCallBack);
            this.currCount = 0;
            this.endCallback && this.endCallback();
        }
    };
    return RandomNumView;
}(BaseRandomNumView));
//# sourceMappingURL=RandomNumView.js.map