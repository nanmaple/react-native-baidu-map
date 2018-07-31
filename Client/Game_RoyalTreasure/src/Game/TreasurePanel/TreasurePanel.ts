namespace Enum {
    /**
     * 头部面板枚举
     */
    export enum TreasurePanel {
        /**
         * 游戏初始化
         */
        GameInit = 17000,
        /**
         * 按下投注按钮
         */
        GameBetPos,
        /**
         * 游戏结果处理
         */
        GameSettleResult,
        /**
         * 刷新
         */
        GameRefreshBtn,
        /**
         * 下一场
         */
        GameNextTime,
        /**
         * 挖掘动画完成
         */
        GameDigAniComplete,
    }
}

/// <reference path="../../Effect/MineEffect.ts"/>

/**
 * 宝藏面板
 */
class TreasurePanel extends BaseTreasurePanel implements IView {
    private mines: Object;              //挖到的矿石及数量
    private amount: number;             //得分
    public mineNum: number = 0;         //挖到矿石总数
    private betNum: number = 0;         //投注额
    
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
            case Enum.TreasurePanel.GameInit:
                this.ui.mineImg.mouseEnabled = true;
                this.InitMineOdds(data.OddsInfo);
                break;
            case Enum.TreasurePanel.GameBetPos:
                this.ui.mineImg.mouseEnabled = false;
                this.betNum = data;
                break;
            case Enum.TreasurePanel.GameSettleResult:
                this.mines = data.Mines;
                this.amount = data.WinAmount;
                break;
            case Enum.TreasurePanel.GameRefreshBtn:
                this.ui.mineImg.mouseEnabled = true;
                break;
            case Enum.TreasurePanel.GameNextTime:
                this.ui.mineImg.mouseEnabled = true;
                this.mineNum = 0;
                break;
            case Enum.TreasurePanel.GameDigAniComplete:
                this.ShowMines()
                break;
            default:
                break;
        }
    }
    /**
     * 显示挖到的矿石
     */
    private ShowMines() {
        let mineEffectList: Array<MineEffect> = new Array<MineEffect>();
        for (let i in this.mines) {
            let price=this.betNum*this.mineOdds[i];
            // let mineUrl = "ui/" + this.mines[i] + ".png";
            for (let j = 0; j < this.mines[i]; j++) {
                this.mineNum++;
                let effect: MineEffect = Laya.Pool.getItemByClass("img", MineEffect);
                let jumpPos = this.JumpPos();
                let mineUrl = "ui/testMine.png";
                    effect.listenEventKey = this.listenEventKey;
                    effect.ShowAll = this.amount,
                    effect.Price = price,
                    effect.ShowSkin = mineUrl,
                    effect.Pos1 = [this.mineX, this.mineY],
                    effect.Pos2 = jumpPos,
                    effect.Pos3 = [166, 888],
                    effect.PoolKey = "img";
                    effect.t=0;
                    effect.counts=0;
                mineEffectList.push(effect);
            }
        }
        // mineEffectList[0].Start();
        let k: number = 0;
        Laya.timer.loop(400, this, () => {
            if (k != this.mineNum - 1) {
                mineEffectList[k].Start();
                k++;
            }
            else {
                mineEffectList[k].Start(true);
                Laya.timer.clearAll(this);
            }
        }, [k])
    }
    /**
     * 随机设置矿石落点位置
     */
    private JumpPos(): any {
        let temp = Math.random();
        let jumpX = 0;
        if (temp < 0.5) jumpX = this.mineX + 166;
        else jumpX = this.mineX - 166;
        if (this.mineX < 130) jumpX = this.mineX+166;
        if (this.mineX > 620) jumpX = this.mineX-166;
        let jumpY = this.mineY + 30 +30 * Math.random();
        return [jumpX, jumpY]
    }

}
