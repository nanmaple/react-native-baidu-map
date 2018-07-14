/**
 * 功能键和余额基类
 */
class BaseHeadPanel {
    protected ui: ui.HeadPanelUI;
    protected balance: number = 0;
    protected scoreNum: number = 0;
    protected isVoiceOn: boolean = true;
    protected winAmount: number = 0;
    protected listenEventKey:string;
    constructor(eventKey: string) {
        this.listenEventKey = eventKey;
    }

    /**
     * 重置屏幕
     */
    public ResetScreen(): void {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.HeadPanelUI();
        this.ui.zOrder = 3;
        this.ui.cacheAs = "bitmap";
        //设置组件位置
        this.ui.y = 39;
        this.ui.balanceNum.changeText(this.balance.toString());
        Laya.stage.addChild(this.ui);
        this.OnButton();

    }
    /**
     * 绑定按钮
     */
    protected OnButton(): void {
        this.ui.homeBtn.on(Laya.Event.CLICK, this, () => {
            window.location.href = "";
            //返回游戏大厅
        })
        this.ui.ruleBtn.on(Laya.Event.CLICK, this, this.EventNotification)
        this.ui.voiceBtn.on(Laya.Event.CLICK, this, () => {
            if (this.isVoiceOn) {
                this.isVoiceOn = false;
                Laya.SoundManager.musicMuted = true;
                this.ui.voiceBtn.skin = "ui/voiceOffBtn.png"
            }
            else {
                this.isVoiceOn = true
                Laya.SoundManager.musicMuted = false;
                this.ui.voiceBtn.skin = "ui/voiceOnBtn.png"
            }

        })
        this.ui.rechargeBtn.on(Laya.Event.CLICK, this, () => {
            //弹出游戏充值面板
        })
        this.ui.rankBtn.on(Laya.Event.CLICK, this, () => {
            //弹出游戏排行榜
        })
    }
    /**
     * 余额显示
     * @param rechargeNum余额 
     */
    protected SetRechargeNum(data:any): void {
        this.ui.balanceNum.changeText(data.toString());
    }
    /**
     * 得分显示
     * @param scoreNum得分 
     */
    protected SetScore(score: number): void {
        if (score) {
            this.scoreNum = score;
            this.ui.scoreNum.changeText(JSON.stringify(score));
        }
        else {
            this.ui.scoreNum.changeText(JSON.stringify(score));
        }
    }

    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    private EventNotification(): void {
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = {};
        data.Type = Enum.ListenViewEnum.OpenRule;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
