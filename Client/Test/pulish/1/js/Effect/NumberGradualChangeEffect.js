/**
 * 数字缓动变化效果。
 * 构造函数传入要变化的Laya.Label标签对象
 */
var NumberGradualChangeEffect = (function () {
    function NumberGradualChangeEffect(txt) {
        this.result = 0; //最终要显示的数，可能还未增加或者减少到
        this.showText = 0; //当前显示的数字
        this.count = 10; //初始变化次数
        this.changedCount = 1; //变化了多少次
        this.txt = txt;
        this.result = this.MoneyToNumber(this.txt.text);
    }
    NumberGradualChangeEffect.prototype.MoneyToNumber = function (money) {
        if (money.indexOf(",") == -1) {
            return Number(money);
        }
        else {
            var text = money.split(",").join("");
            return Number(text);
        }
    };
    /**
     * 初始化计数器
     * @param data 变化的数据
     */
    NumberGradualChangeEffect.prototype.initCounter = function (data) {
        this.changedCount = 1;
        this.result += data;
        this.cardinalNumber = Number(((this.result - this.showText) / this.count).toFixed(2));
        if (this.cardinalNumber === 0) {
            this.allCount = 0;
        }
        else {
            this.allCount = Number(((this.result - this.showText) / this.cardinalNumber).toFixed(2));
        }
        this.remainder = this.result - this.cardinalNumber * this.allCount;
    };
    /**
     * 启动数字变化
     * @param data 要增加或者减少的数目
     * 初始化
     * 开启循环 100ms
     */
    NumberGradualChangeEffect.prototype.start = function (data) {
        Laya.timer.clear(this, this.onLoop);
        //设置文本内容
        this.showText = this.MoneyToNumber(this.txt.text);
        this.result = this.MoneyToNumber(this.txt.text);
        data = Number(data);
        data = (data - this.result);
        this.initCounter(data);
        Laya.timer.loop(100, this, this.onLoop);
    };
    /**
     * 循环
     * 显示数字
     * 循环次数累加
     */
    NumberGradualChangeEffect.prototype.onLoop = function () {
        this.showText = this.showText - 0 + this.cardinalNumber;
        var formatNum = Utils.Money.Format(this.showText);
        this.txt.changeText(formatNum);
        this.changedCount += 1;
        if (this.changedCount > this.allCount) {
            this.end();
        }
    };
    /**
     * 循环结束
     * 清除定时器
     */
    NumberGradualChangeEffect.prototype.end = function () {
        var formatNum = Utils.Money.Format(this.result);
        this.txt.changeText(formatNum);
        Laya.timer.clear(this, this.onLoop);
    };
    return NumberGradualChangeEffect;
}());
