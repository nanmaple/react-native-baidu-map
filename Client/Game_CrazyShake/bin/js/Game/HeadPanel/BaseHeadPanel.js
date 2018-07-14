/**
 * 功能键和余额基类
 */
var BaseHeadPanel = /** @class */ (function () {
    function BaseHeadPanel(eventKey) {
        this.balance = 0;
        this.scoreNum = 0;
        this.isVoiceOn = true;
        this.winAmount = 0;
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseHeadPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadPanelUI();
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
    BaseHeadPanel.prototype.OnButton = function () {
        var _this = this;
        this.ui.homeBtn.on(Laya.Event.CLICK, this, function () {
            window.location.href = "";
            //返回游戏大厅
        });
        this.ui.ruleBtn.on(Laya.Event.CLICK, this, this.EventNotification);
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
    BaseHeadPanel.prototype.SetRechargeNum = function (data) {
        this.ui.balanceNum.changeText(data.toString());
    };
    /**
     * 得分显示
     * @param scoreNum得分
     */
    BaseHeadPanel.prototype.SetScore = function (score) {
        if (score) {
            this.scoreNum = score;
            this.ui.scoreNum.changeText(JSON.stringify(score));
        }
        else {
            this.ui.scoreNum.changeText(JSON.stringify(score));
        }
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    BaseHeadPanel.prototype.EventNotification = function () {
        var data = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.OpenRule;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BaseHeadPanel;
}());
//# sourceMappingURL=BaseHeadPanel.js.map