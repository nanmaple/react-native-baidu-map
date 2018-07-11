/**
 * 组件Set() 参数类型枚举
 */
namespace Enum {
    /**
     * 投注面板参数类型枚举
     */
    export enum BetPanel {
        /**
         * 游戏初始化
         */
        MSG_GAME_INIT= 10000,
        /**
         * 游戏投注
         */
        MSG_GAME_BET,
        /**
         * 动画完成
         */
        MSG_GAME_AniPlayComplete,
        /**
         * 游戏错误
         */
        MSG_GAME_ALERT
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
    public Refresh(isEnabled: boolean = true): void {
        this.EnableButton(isEnabled);
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     * @param type 枚举类型 
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.BetPanel.MSG_GAME_AniPlayComplete:
                this.RecoverBtnImg();
                this.EnableButton();
                break;
            case Enum.BetPanel.MSG_GAME_INIT:
                //按键附上赔率信息
                this.NotePosOdds(data)
                this.EnableButton();
                break;
            case Enum.BetPanel.MSG_GAME_BET:
                this.EnableButton(false);
                break;
            case Enum.BetPanel.MSG_GAME_ALERT:
                this.RecoverBtnImg();
                break;    
            default:
                break;
        }
    }


}