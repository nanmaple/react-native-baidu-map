/**
 * 组件Set() 参数类型枚举
 */
namespace Enum {
    export enum ToyPanel {
        MSG_GAME_BET,
        MSG_GAME_SETTLERESULT,
    }
}
/**
* 骰子面板
*/
class ToyPanel extends BaseToyPanel implements IView {
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
            case Enum.ToyPanel.MSG_GAME_BET:
                this.startRock();
                break;
            case Enum.ToyPanel.MSG_GAME_SETTLERESULT:
                this.Lottery(data);
                break;
            default:
                break;
        }
    }
    public open(handler: Laya.Handler) {
    }
}