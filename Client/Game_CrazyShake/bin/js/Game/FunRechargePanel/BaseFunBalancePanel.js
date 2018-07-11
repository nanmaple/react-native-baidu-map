/**
 * 功能键和余额基类
 *
 */
var BaseFunBalancePanel = /** @class */ (function () {
    function BaseFunBalancePanel() {
        this.balance = 0;
        this.scoreNum = 0;
        this.isVoiceOn = true;
    }
    /**
     * 重置屏幕
     */
    BaseFunBalancePanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.FunBalancePanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 39;
        this.ui.balanceNum.changeText(this.balance.toString());
        Laya.stage.addChild(this.ui);
        this.OnButton();
    };
    /**
     * 绑定按钮
     */
    BaseFunBalancePanel.prototype.OnButton = function () {
        var _this = this;
        this.ui.homeBtn.on(Laya.Event.CLICK, this, function () {
            window.location.href = "";
            //返回游戏大厅
        });
        this.ui.ruleBtn.on(Laya.Event.CLICK, this, function () {
            //弹出游戏规则面板
        });
        this.ui.voiceBtn.on(Laya.Event.CLICK, this, function () {
            if (_this.isVoiceOn) {
                _this.isVoiceOn = false;
                Laya.SoundManager.musicMuted = true;
                _this.ui.voiceBtn.skin = "ui/voiceOffBtn.png";
            }
            else {
                _this.isVoiceOn = true;
                Laya.SoundManager.musicMuted = false;
                _this.ui.voiceBtn.skin = "ui/voiceOnBtn.png";
            }
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
    BaseFunBalancePanel.prototype.SetRechargeNum = function (balanceNum) {
        this.balance = balanceNum;
        this.ui.balanceNum.changeText(balanceNum.toString());
    };
    /**
     * 得分显示
     * @param scoreNum得分
     */
    BaseFunBalancePanel.prototype.SetScore = function (score) {
        if (score) {
            this.scoreNum = score;
            this.ui.scoreNum.changeText(JSON.stringify(score));
        }
        else {
            this.ui.scoreNum.changeText(JSON.stringify(score));
        }
    };
    return BaseFunBalancePanel;
}());
//# sourceMappingURL=BaseFunBalancePanel.js.map