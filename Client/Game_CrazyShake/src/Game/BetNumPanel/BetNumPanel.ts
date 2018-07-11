/**
 * 组件Set() 参数类型枚举
 */
namespace Enum {
    export enum BetNumPanel {
        EnableButton = 10000,
        MSG_GAME_INIT,
        MSG_GAME_BET,
        MSG_GAME_AniPlayComplete,
    }
}

/**
 * 投注额面板
 * 功能：增加、减少投注额
 */
class BetNumPanel extends BaseBetNumPanel implements IView {
    private MaxBet:number
    constructor() {
        super();
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
     * @param data 数据
     * @param type 枚举类型
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.BetNumPanel.MSG_GAME_INIT:
                this.MaxBet=data.MaxBet;
                let tempMaxBet=Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = tempMaxBet<this.MaxBet?tempMaxBet:this.MaxBet;
                this.EnableButton();
            case Enum.BetNumPanel.MSG_GAME_AniPlayComplete:
                let temMaxBet=Math.floor(data.Balance / 100) * 100;
                this.maxBetNum = temMaxBet<this.MaxBet?temMaxBet:this.MaxBet;
                this.EnableButton();
                break;
            case Enum.BetNumPanel.MSG_GAME_BET:
                this.EnableButton(false);
                break;
            default:
                break;
        }

    }



    /**
     * 获取投注额
     */
    public GetBetNum() {
        return this.currentBetNum
    }
}