namespace Enum {
    /**
     * 头部面板枚举
     */
    export enum HeadPanel {
        /**
         * 游戏初始化
         */
        GameInit = 10000,
        /**
         * 游戏结果处理
         */
        GameSettleResult,
        /**
         * 下一场游戏
         */
        GameNextTime,
    }
}



/**
 * 顶部面板
 */
class HeadPanel extends BaseHeadPanel implements IView {
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
            case Enum.HeadPanel.GameInit:
                this.currentBalance = data;
                this.SetBalance(data);
                break;
            case Enum.HeadPanel.GameSettleResult:
                this.currentBalance = data.Balance;
                this.SetBalance(data.Balance - data.WinAmount);
                break;
            case Enum.HeadPanel.GameNextTime:
                this.SetBalance(this.currentBalance);
            break;
            default:
                break;
        }

    }

}
