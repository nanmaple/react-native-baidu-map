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
/**轮盘类面板*/
var RouletteView = /** @class */ (function (_super) {
    __extends(RouletteView, _super);
    function RouletteView(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /**
     * 刷新UI
    */
    RouletteView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     */
    RouletteView.prototype.Set = function (data) {
        this.StartRoll(data);
    };
    /**
     * 开始滚动
     * @param result 结果类型
     */
    RouletteView.prototype.StartRoll = function (result) {
        this.num = 0;
        var res = gameResult[result];
        if (!res)
            return;
        if (typeof res == 'number') {
            this.end = res;
        }
        else {
            var index = Math.floor(Math.random() * res.length);
            this.end = res[index];
        }
        this.slowDistance = Math.floor(Math.random() * (slow.max + 1 - slow.min)) + slow.min;
        this.DeceleratePoint();
        Laya.timer.frameLoop(1, this, this.LoopCallBack);
    };
    /**
     * 定时器回调函数
    */
    RouletteView.prototype.LoopCallBack = function () {
        this.currentFrame++;
        //每次到达间隔帧动画移动
        if (this.currentFrame % this.currentSpeed == 0) {
            this.AuraMove();
            if (this.num >= this.accelerateEnd + this.slowDistance) {
                this.RollEnd();
            }
            this.currentFrame = 0;
        }
    };
    /**
     * 滚动结束
     */
    RouletteView.prototype.RollEnd = function () {
        Laya.timer.clear(this, this.LoopCallBack);
        this.start = this.end;
        this.accelerateStart = true;
        this.currentSpeed = defaultSpeed;
        //发送事件
        var data = new Dto.EventNotificationDto();
        data.Value = '';
        data.Type = Enum.ListenViewEnum.GameEnd;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    /**
     * 光环移动
    */
    RouletteView.prototype.AuraMove = function () {
        //加速
        if (this.accelerateStart && this.currentSpeed > 1) {
            this.currentSpeed -= 2;
        }
        //显示和隐藏位置修改
        var hide = this.accelerateStart ? this.index - 2 : this.index;
        hide = this.Convert(hide);
        this.Deceleration();
        //显示、隐藏、透明度操作
        if (this.index == (this.iconNum - 1))
            this.index = -1;
        var index = this.box.getChildAt(hide).getChildByName('animated').index;
        this.box.getChildAt(this.index + 1).getChildByName('animated').visible = true;
        this.box.getChildAt(this.index + 1).getChildByName('animated').play(index);
        this.box.getChildAt(hide).getChildByName('animated').gotoAndStop(0);
        this.box.getChildAt(hide).getChildByName('animated').visible = false;
        //记录数据修改
        this.index++;
        this.num++;
    };
    /**
     * 减速运动
     */
    RouletteView.prototype.Deceleration = function () {
        //减速
        if (!this.accelerateStart) {
            var speed = Math.floor(30 / this.slowDistance);
            this.currentSpeed += speed;
            return;
        }
        //开始减速运动
        if (this.accelerateStart && this.num >= this.accelerateEnd) {
            this.accelerateStart = false;
            this.box.getChildAt(this.index).getChildByName('animated').gotoAndStop(0);
            this.box.getChildAt(this.Convert(this.index - 1)).getChildByName('animated').gotoAndStop(0);
            this.box.getChildAt(this.index).getChildByName('animated').visible = false;
            this.box.getChildAt(this.Convert(this.index - 1)).getChildByName('animated').visible = false;
        }
    };
    /**
     * 减速点位置
    */
    RouletteView.prototype.DeceleratePoint = function () {
        var distance = (this.start - this.end);
        var dic;
        if (distance > 0) {
            distance = distance > this.iconNum / 2 ? distance - this.iconNum : distance;
            //额外移动距离
            if (distance < 0 && Math.abs(distance) > this.slowDistance) {
                dic = Math.abs(distance) - this.slowDistance;
            }
            else {
                dic = this.iconNum - (this.slowDistance + distance);
            }
            this.accelerateEnd = this.iconNum * 3 + dic;
        }
        else {
            distance = Math.abs(distance);
            dic = (distance - this.slowDistance);
            dic = dic > 0 ? dic : this.iconNum + dic;
            this.accelerateEnd = this.iconNum * 3 + dic;
        }
    };
    /**
     * 轮盘位置转换 解决到最后一个跳转第一个
     * @param value
     */
    RouletteView.prototype.Convert = function (value) {
        if (value < 0) {
            value = this.iconNum + value;
            return value;
        }
        else if (value > this.iconNum) {
            value = value - this.iconNum;
            return value;
        }
        else {
            return value;
        }
    };
    return RouletteView;
}(BaseRouletteView));
//# sourceMappingURL=RouletteView.js.map