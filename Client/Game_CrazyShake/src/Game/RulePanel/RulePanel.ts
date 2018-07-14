
/**
 * 游戏规则面板
 */
class RulePanel extends BaseRulePanel implements IView {
    constructor(eventKey: string) {
        super(eventKey);
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    public Refresh(): void {
        this.ui.visible=true;
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     */
    public Set(): void {
        this.ui.visible=false;
    }


}
