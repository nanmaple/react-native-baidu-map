namespace Enum {
    /**
     * 投注额面板参数类型枚举
     */
    export enum BetNumPanel {
        /**
         * 游戏初始化
         */
        GameInit = 15000,
        /**
         * 开始游戏动画
         */
        GameStartAni,
        /**
         * 收到游戏结果
         */
        GameSettleResult,
    }
}

/**
 * 投注额面板
 * 功能：增加、减少投注额
 */
class BetNumPanel extends BaseBetNumPanel implements IView {
    private MaxBet: number
    constructor() {
        super();
    }
    /**
 * 类型：公有方法
 * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
 * 一般用于，当数据改变后，渲染需要延迟进行的情况
 */
    public Refresh(): void {
        this.EnableButton();
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 数据
     * @param type 枚举类型
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.BetNumPanel.GameInit:
                this.EnableButton();
                this.ui.betNumText.changeText("100");
                this.MaxBet = data.MaxBet;
                let initMaxBet = Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = initMaxBet < this.MaxBet ? initMaxBet : this.MaxBet;
                break;
            case Enum.BetNumPanel.GameStartAni:
                this.EnableButton(false);
                break;
            case Enum.BetNumPanel.GameSettleResult:
                let comMaxBet = Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = comMaxBet < this.MaxBet ? comMaxBet : this.MaxBet;
                break;
            default:
                break;
        }

    }

    /**
     * 获取投注额
     */
    public GetBetNum(): number {
        return this.currentBetNum;
    }
}