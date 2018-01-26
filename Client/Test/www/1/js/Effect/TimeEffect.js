var TimeEffect = /** @class */ (function () {
    function TimeEffect(time) {
        this.timeUI = time;
    }
    /**
     * 游戏时间UI显示
     * @param time 时间
     */
    TimeEffect.prototype.GameTimeUI = function (time) {
        var data = {};
        var timeNum = time;
        for (var i = 1; i >= 0; i--) {
            data["item" + i] = { index: Math.floor(timeNum % 10) };
            timeNum /= 10;
        }
        this.timeUI.dataSource = data;
    };
    /**
     * 模拟游戏时间倒计时
     */
    TimeEffect.prototype.SetGameTime = function () {
        this.gameTime--;
        if (this.gameTime <= 0) {
            //游戏时间结束
            this.EndGameTime();
        }
        this.GameTimeUI(this.gameTime);
    };
    /**
     * 游戏时间开始
     */
    TimeEffect.prototype.StartGameTime = function (time) {
        this.gameTime = time;
        this.GameTimeUI(this.gameTime);
        Laya.timer.loop(1000, this, this.SetGameTime);
    };
    /**
     * 游戏时间结束
     */
    TimeEffect.prototype.EndGameTime = function () {
        //清除定时器
        Laya.timer.clear(this, this.SetGameTime);
        //计时器归零
        this.gameTime = 0;
        this.GameTimeUI(this.gameTime);
    };
    return TimeEffect;
}());
