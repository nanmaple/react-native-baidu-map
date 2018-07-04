/**
 * 功能键和余额基类
 *
 */
var BaseFunBalancePanel = /** @class */ (function () {
    function BaseFunBalancePanel() {
    }
    /**
     * 重置屏幕
     */
    BaseFunBalancePanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FunBalancePanelUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 124;
        Laya.stage.addChild(this.ui);
        this.OnButton();
    };
    /**
     * 绑定按钮
     */
    BaseFunBalancePanel.prototype.OnButton = function () {
        this.ui.ruleBtn.on(Laya.Event.CLICK, this, function () {
            //弹出游戏规则面板
        });
        this.ui.voiceBtn.on(Laya.Event.MOUSE_DOWN, this, function () {
            //关闭游戏声音
        });
        this.ui.rechargeBtn.on(Laya.Event.CLICK, this, function () {
            //弹出游戏充值面板
        });
        this.ui.rankBtn.on(Laya.Event.CLICK, this, function () {
            //弹出游戏排行榜
        });
    };
    /**
     * 余额显示
     * @param rechargeNum余额
     */
    BaseFunBalancePanel.prototype.SetRechargeNum = function (rechargeNum) {
        this.ui.balanceNum.changeText(JSON.stringify(rechargeNum));
    };
    /**
     * 得分显示
     * @param scoreNum得分
     */
    BaseFunBalancePanel.prototype.SetScore = function (score) {
        this.ui.scoreNum.changeText(JSON.stringify(score));
    };
    return BaseFunBalancePanel;
}());
//# sourceMappingURL=BaseFunBalancePanel.js.map