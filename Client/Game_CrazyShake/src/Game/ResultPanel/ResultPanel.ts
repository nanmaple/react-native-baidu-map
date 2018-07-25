
namespace Enum {
    /**
     * 结果面板参数类型枚举
     */
    export enum ResultPanel {
        GameInit = 8888,
        GameStartAni,
        GameSettleResult,
    }
}

/**
 * 结果面板类
 */
class ResultPanel extends BaseResultPanel implements IView {
    private listenEventKey: string = "";
    private isWin: boolean = true;
    constructor() {
        super();
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    public Refresh(): void {
        this.ui.visible = true;
        if (this.isWin) {
            Laya.SoundManager.playSound("sound/winSound.mp3")
        }
        else Laya.SoundManager.playSound("sound/failSound.wav")
    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.ResultPanel.GameInit:
                this.ui.visible = false;
                break;
            case Enum.ResultPanel.GameStartAni:
                this.ui.visible = false;
                break;
            case Enum.ResultPanel.GameSettleResult:
                if (data.WinAmount == 0) {
                    this.isWin = false;
                    this.ResultFail();
                }
                else {
                    this.isWin = true;
                    this.ResultWin(data);
                }
                break;
            default:
                break;
        }
    }
}
