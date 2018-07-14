/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameHeadView = /** @class */ (function () {
    function BaseGameHeadView() {
        /**
         * 用户余额
         */
        this.balance = 0;
        /**
         * 是否禁音
         */
        this.muted = false;
        /**
         * 声音打开的皮肤
         */
        this.openVoiceSkin = "ui/header/voice_open.png";
        /**
         * 声音关闭的皮肤
         */
        this.closeVoiceSkin = "ui/header/voice_close.png";
    }
    /**
     * 重置屏幕
     */
    BaseGameHeadView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameHeadViewUI();
        this.ui.zOrder = 4;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.moneyEffect = new Effect.NumberGradualChangeEffect(this.ui.balance);
        this.ui.balance.on(Laya.Event.CLICK, this, this.GetBalance);
        this.ui.voice.on(Laya.Event.CLICK, this, this.SetVoice);
        this.ui.rule.on(Laya.Event.CLICK, this, this.OpenRule);
        this.ui.home.on(Laya.Event.CLICK, this, this.BackHome);
    };
    /**
     * 获取最新余额
     */
    BaseGameHeadView.prototype.GetBalance = function () {
        this.EventNotification(Enum.ListenViewEnum.GetBalance);
    };
    /**
     * 设置声音
     */
    BaseGameHeadView.prototype.SetVoice = function () {
        if (this.muted) {
            this.muted = false;
            this.ui.voice.skin = this.openVoiceSkin;
            Utils.BackgroundMusic.MuteMusic(this.muted);
        }
        else {
            this.muted = true;
            this.ui.voice.skin = this.closeVoiceSkin;
            Utils.BackgroundMusic.MuteMusic(this.muted);
        }
    };
    /**
     * 打开规则面板
     */
    BaseGameHeadView.prototype.OpenRule = function () {
        this.EventNotification(Enum.ListenViewEnum.OpenRule);
    };
    /**
     * 返回首页
     */
    BaseGameHeadView.prototype.BackHome = function () {
    };
    return BaseGameHeadView;
}());
//# sourceMappingURL=BaseGameHeadView.js.map