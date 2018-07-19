/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
abstract class BaseGameHeadView {
    protected ui: ui.GameHeadViewUI;
    /**
     * 金币改变动画
     */
    protected moneyEffect: Effect.NumberGradualChangeEffect;
    /**
     * 用户余额
     */
    protected balance:number = 0;
    /**
     * 是否禁音
     */
    protected muted:boolean = false;
    /**
     * 声音打开的皮肤
     */
    protected openVoiceSkin:string = "ui/header/voice_open.png";
    /**
     * 声音关闭的皮肤
     */
    protected closeVoiceSkin:string = "ui/header/voice_close.png";
    constructor() {

    }

    /**
     * 重置屏幕
     */
    public ResetScreen() {
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
        this.ui.record.on(Laya.Event.CLICK, this, this.OpenRecord);
        this.ui.title.skin = LanguageUtils.Language.Get("HeadTitleSkin");
    }
    /**
     * 获取最新余额
     */
    private GetBalance():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.EventNotification(Enum.ListenViewEnum.GetBalance);
    }
    /**
     * 设置声音
     */
    private SetVoice():void{
        if(this.muted){
            this.muted = false;
            this.ui.voice.skin = this.openVoiceSkin;
            Utils.BackgroundMusic.MuteMusic(this.muted);
        }else{
            this.muted = true;
            this.ui.voice.skin = this.closeVoiceSkin;
            Utils.BackgroundMusic.MuteMusic(this.muted);
        }
    }
    /**
     * 打开规则面板
     */
    private OpenRule():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        this.EventNotification(Enum.ListenViewEnum.OpenRule);
    }
    /**
     * 打开游戏记录
     */
    private OpenRecord():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
    }
    /**
     * 返回首页
     */
    private BackHome():void{
        Utils.BackgroundMusic.PlaySounds("sound/btn.mp3");
        Laya.Browser.window.location.href = "";
    }
    /**
     * 事件广播
     * @param type 类型
     * @param value 值
     */
    abstract EventNotification(type:any, value?:any): void;
}
