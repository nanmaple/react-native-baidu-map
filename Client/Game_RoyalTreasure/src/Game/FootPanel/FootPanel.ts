namespace Enum {
    /**
     * 底部面板枚举
     */
    export enum FootPanel {
        /**
         * 游戏初始化
         */
        GameInit = 10000,
        /**
         * 游戏结果处理
         */
        GameSettleResult,
    }
}
/**
 * 底部面板
 */
class FootPanel extends BaseFootPanel implements IView {
    private MaxBet: number
    constructor(eventKey: string) {
        super(eventKey);
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    public Refresh(): void {

    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.FootPanel.GameInit:
                this.EnableButton();
                this.ui.betNum.changeText("100");
                this.MaxBet = data.MaxBet;
                let initMaxBet = Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = initMaxBet < this.MaxBet ? initMaxBet : this.MaxBet;
                break;
            case Enum.FootPanel.GameSettleResult:
                let comMaxBet = Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = comMaxBet < this.MaxBet ? comMaxBet : this.MaxBet;
                break;
            default:
                break;
        }
    }

}
