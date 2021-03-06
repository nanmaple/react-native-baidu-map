
namespace Enum {
    /**
     * 投注面板参数类型枚举
     */
    export enum BetPanel {
    }
}
/**
 * 投注开始按钮面板
 */
class BetPanel extends BaseBetPanel implements IView {

    constructor(eventKey: string) {
        super(eventKey);
    }
    /**
 * 类型：公有方法
 * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
 * 一般用于，当数据改变后，渲染需要延迟进行的情况
 */
    public Refresh(): void {
        this.RecoverBtnImg();
        this.EnableButton();
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    public Set(data: any, type?: any): void {
        //按键附上赔率信息
        this.NotePosOdds(data)
        this.EnableButton();
    }
}