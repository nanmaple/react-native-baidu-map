/**
 * 数字缓动变化效果。
 * 构造函数传入要变化的Laya.Label标签对象
 */
class NumberGradualChangeEffect {
    private result: number = 0;                  //最终要显示的数，可能还未增加或者减少到
    private showText: number = 0;                //当前显示的数字
    private count: number = 10;                  //初始变化次数
    private allCount: number;                    //需要变化的总次时
    private changedCount: number = 1;            //变化了多少次
    private cardinalNumber: number;              //每次加多少   比如一次加10，
    private remainder: number;                 //剩余不够一次  比如剩余的不够10，
    public txt: Laya.Label;                      //存放Label对象
    constructor(txt: Laya.Label) {
        this.txt = txt;
        this.result = this.MoneyToNumber(this.txt.text);

    }

    private MoneyToNumber(money: string): number {
        if (money.indexOf(",") == -1) {
            return Number(money);
        } else {
            let text = money.split(",").join("");
            return Number(text);
        }

    }

    /**
     * 初始化计数器
     * @param data 变化的数据
     */
    private initCounter(data) {
        this.changedCount = 1;
        this.result += data;
        this.cardinalNumber = Number(((this.result - this.showText) / this.count).toFixed(2));
        if (this.cardinalNumber === 0) {
            this.allCount = 0;
        } else {
            this.allCount = Number(((this.result - this.showText) / this.cardinalNumber).toFixed(2));
        }

        this.remainder = this.result - this.cardinalNumber * this.allCount;
    }

    /**
     * 启动数字变化
     * @param data 要增加或者减少的数目 
     * 初始化
     * 开启循环 100ms
     */
    public start(data: number): void {
        Laya.timer.clear(this, this.onLoop);
        //设置文本内容
        this.showText = this.MoneyToNumber(this.txt.text);
        this.result = this.MoneyToNumber(this.txt.text);
        data = Number(data);
        data = (data - this.result);
        this.initCounter(data);
        Laya.timer.loop(100, this, this.onLoop);
    }

    /**
     * 循环
     * 显示数字
     * 循环次数累加
     */
    private onLoop() {
        this.showText = this.showText - 0 + this.cardinalNumber;
        let formatNum = Utils.Money.Format(this.showText);
        this.txt.changeText(formatNum);
        this.changedCount += 1;
        if (this.changedCount > this.allCount) {
            this.end();
        }
    }

    /**
     * 循环结束
     * 清除定时器
     */
    private end() {
        let formatNum = Utils.Money.Format(this.result);
        this.txt.changeText(formatNum);
        Laya.timer.clear(this, this.onLoop);
    }
}
