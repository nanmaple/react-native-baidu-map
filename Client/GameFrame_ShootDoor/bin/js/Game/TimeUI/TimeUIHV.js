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
var TimeHV = /** @class */ (function (_super) {
    __extends(TimeHV, _super);
    function TimeHV() {
        return _super.call(this) || this;
    }
    TimeHV.prototype.Refresh = function () {
    };
    /**
     * 开始倒计时
     * @param time
     */
    TimeHV.prototype.StartGameTime = function (time) {
        this.time = time;
        this.timeStamp = new Date().getTime();
        this.ui.visible = true;
        this.timeEffect.StartGameTime(time);
    };
    /**
     * 游戏时间结束
     */
    TimeHV.prototype.EndGameTime = function () {
        this.timeEffect.EndGameTime();
        this.ui.visible = false;
        Utils.BackgroundMusic.PlaySounds("sound/csz1.wav");
    };
    /**
     * 设置游戏时间
     * @param time
     */
    TimeHV.prototype.Set = function () {
        var nowDate = new Date().getTime();
        var date;
        date = this.time - (nowDate - this.timeStamp) / 1000;
        this.time = date < 0 ? 0 : date;
        return this.time;
    };
    return TimeHV;
}(TimeBaseUI));
//# sourceMappingURL=TimeUIHV.js.map