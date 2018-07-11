/**
 * 组件Set() 参数类型枚举
 */
namespace Enum {
    export enum FunBalancePanel {
        MSG_GAME_INIT = 13000,
        MSG_GAME_BET,
        MSG_GAME_AniPlayComplete,
    }
}

/**
 * 功能键、余额、获得分数面板
 */
class FunBalancePanel extends BaseFunBalancePanel implements IView {
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
     * @param data 游戏投注结果
     * @param type 枚举类型
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.FunBalancePanel.MSG_GAME_INIT:
                this.SetRechargeNum(data.Balance);
                break;
            case Enum.FunBalancePanel.MSG_GAME_BET:
                this.balance = data.Balance - data.WinAmount;
                this.SetRechargeNum(this.balance);
                this.SetScore(0);
                break;
            case Enum.FunBalancePanel.MSG_GAME_AniPlayComplete:
                this.SetRechargeNum(data.Balance);
                this.SetScore(data.WinAmount);
                break;
            default:
                break;
        }
    }
}