/**
 * 组件Set() 参数类型枚举
 */
namespace Enum {
    /**
     * 骰子面板参数类型枚举
     */
    export enum ToyPanel {
        GameInit = 6666,
        GameStartAni,
        GameSettleResult,
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
        this.isGetResult = false;
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.ToyPanel.GameInit:
                this.Init();
                break;
            case Enum.ToyPanel.GameStartAni:
                this.StartRock();
                break;
            case Enum.ToyPanel.GameSettleResult:
                this.isGetResult = true;
                this.dices = data.Data.Dices;
                break;
            default:
                break;
        }
    }
    /**
     * 初始化方法
     */
    private Init(){
        Laya.timer.clearAll(this);
        this.ui.ani4.gotoAndStop(0);
        this.ui.cap.y=-470;
        this.ChangeDice([1,1,1]);
        this.isGetResult=false;
    }
}