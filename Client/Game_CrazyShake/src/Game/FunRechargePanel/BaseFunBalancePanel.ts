/**
 * 功能键和余额基类
 * 
 */
class BaseFunBalancePanel {
    protected ui: ui.FunBalancePanelUI;
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FunBalancePanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y=124;
        Laya.stage.addChild(this.ui);
        this.OnButton();
    }
    /**
     * 绑定按钮
     */
    private OnButton(){
        this.ui.ruleBtn.on(Laya.Event.CLICK,this,()=>{
            //弹出游戏规则面板
        })
        this.ui.voiceBtn.on(Laya.Event.MOUSE_DOWN,this,()=>{
            //关闭游戏声音
        })
        this.ui.rechargeBtn.on(Laya.Event.CLICK,this,()=>{
            //弹出游戏充值面板
        })
        this.ui.rankBtn.on(Laya.Event.CLICK,this,()=>{
            //弹出游戏排行榜
        })  
    }
    /**
     * 余额显示
     * @param rechargeNum余额 
     */
    protected SetRechargeNum(rechargeNum:number){
        this.ui.balanceNum.changeText(JSON.stringify(rechargeNum))
    }
    /**
     * 得分显示
     * @param scoreNum得分 
     */
    protected SetScore(score:number){
        this.ui.scoreNum.changeText(JSON.stringify(score))
    }
}
