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
    var RouletteView;
    (function (RouletteView) {
        /**设置结果 */
        RouletteView[RouletteView["SetResult"] = 10000] = "SetResult";
        /**开始滚动 */
        RouletteView[RouletteView["StartRoll"] = 10001] = "StartRoll";
        /**初始化 */
        RouletteView[RouletteView["Init"] = 10002] = "Init";
    })(RouletteView = Enum.RouletteView || (Enum.RouletteView = {}));
})(Enum || (Enum = {}));
/**轮盘类面板*/
var RouletteView = /** @class */ (function (_super) {
    __extends(RouletteView, _super);
    function RouletteView(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /** 刷新UI*/
    RouletteView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     */
    RouletteView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.RouletteView.SetResult:
                this.SetResult(data);
                break;
            case Enum.RouletteView.StartRoll:
                this.StartRoll();
                break;
            case Enum.RouletteView.Init:
                this.Init();
                break;
        }
    };
    /** 游戏初始化*/
    RouletteView.prototype.Init = function () {
        Laya.timer.clear(this, this.LoopCallBack);
        this.start = 1;
        this.index = 0;
        this.end = null;
        this.firstRoll = true;
        this.rollStatus = Enum.RollStatus.SpeedUp;
        this.currentSpeed = defaultSpeed;
        this.currentFrame = 0;
        var length = this.box.numChildren;
        for (var i = 0; i < length; i++) {
            this.box.getChildAt(i).getChildByName('halo').visible = false;
        }
        this.box.getChildAt(0).getChildByName('halo').visible = true;
        this.box.getChildAt(0).getChildByName('halo').alpha = 1;
        Laya.SoundManager.stopAllSound();
    };
    /**
     * 设置游戏结果
     * @param result 结果类型
     */
    RouletteView.prototype.SetResult = function (result) {
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
        this.DeceleratePoint();
    };
    /**
     * 开始滚动
     */
    RouletteView.prototype.StartRoll = function () {
        this.num = 0;
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
            if (this.end != null && this.num >= this.accelerateEnd + this.slowDistance) {
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
        this.end = null;
        this.firstRoll = true;
        this.rollStatus = Enum.RollStatus.SpeedUp;
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
        if (this.firstRoll) {
            Laya.SoundManager.playSound(SoundConfig.SounRes.RollEaseIn);
            this.firstRoll = false;
        }
        //加速
        this.SpeedUp();
        //显示和隐藏位置修改
        var hide = this.rollStatus != Enum.RollStatus.SpeedDwon ? this.index - (this.halos - 1) : this.index;
        hide = this.Convert(hide);
        /**减速 */
        this.SpeedDown();
        //显示、隐藏、透明度操作
        this.ChangAlpha(hide);
        //记录数据修改 
        this.index++;
        this.num++;
    };
    /**
     * 透明度修改操作
     * @param hide 隐藏位置
     */
    RouletteView.prototype.ChangAlpha = function (hide) {
        if (this.index == (this.iconNum - 1))
            this.index = -1;
        this.box.getChildAt(this.index + 1).getChildByName('halo').visible = true;
        this.box.getChildAt(this.index + 1).getChildByName('halo').alpha = 1;
        for (var i = 1; i < this.halos; i++) {
            this.box.getChildAt(this.Convert(this.index - i)).getChildByName('halo').alpha = 1 - 0.2 * i;
        }
        this.box.getChildAt(hide).getChildByName('halo').visible = false;
    };
    /**加速运动 */
    RouletteView.prototype.SpeedUp = function () {
        if (this.rollStatus == Enum.RollStatus.SpeedUp) {
            this.currentSpeed -= 2;
            if (this.currentSpeed < 1) {
                this.currentSpeed = 1;
                this.rollStatus = Enum.RollStatus.SpeeUniform;
                Laya.SoundManager.stopSound(SoundConfig.SounRes.RollEaseIn);
                Laya.SoundManager.playSound(SoundConfig.SounRes.RollLinear, 0);
            }
        }
    };
    /**
     * 减速运动
     */
    RouletteView.prototype.SpeedDown = function () {
        //未返回结果禁止减速
        if (this.end == null)
            return;
        //减速
        if (this.rollStatus == Enum.RollStatus.SpeedDwon) {
            var speed = Math.floor(20 / this.slowDistance);
            this.currentSpeed += speed;
            return;
        }
        //开始减速运动
        if (this.rollStatus == Enum.RollStatus.SpeeUniform && this.num >= this.accelerateEnd) {
            this.rollStatus = Enum.RollStatus.SpeedDwon;
            Laya.SoundManager.stopSound(SoundConfig.SounRes.RollLinear);
            Laya.SoundManager.playSound(SoundConfig.SounRes.RollEaseOut);
            for (var i = 0; i < this.halos; i++) {
                this.box.getChildAt(this.Convert(this.index - i)).getChildByName('halo').visible = false;
            }
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
        }
        else {
            distance = Math.abs(distance);
            dic = (distance - this.slowDistance);
            dic = dic > 0 ? dic : this.iconNum + dic;
        }
        if (this.num / this.iconNum < 4) {
            this.accelerateEnd = this.iconNum * 4 + dic;
        }
        else {
            this.accelerateEnd = this.iconNum * Math.ceil(this.num / this.iconNum) + dic;
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