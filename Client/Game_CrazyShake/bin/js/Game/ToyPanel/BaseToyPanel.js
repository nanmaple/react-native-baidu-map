var BaseToyPanel = /** @class */ (function () {
    function BaseToyPanel(eventKey) {
        this.listenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseToyPanel.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.ToyPanelUI();
        this.ui.zOrder = 2;
        //设置组件位置
        this.ui.x = 183;
        this.ui.y = 360;
        Laya.stage.addChild(this.ui);
        this.ui.ani2.on(Laya.Event.COMPLETE, this, this.Lottery);
    };
    /**
     * 开始摇盅
     */
    BaseToyPanel.prototype.StartRock = function () {
        var _this = this;
        Laya.timer.once(400, this, function () { Laya.SoundManager.playSound("sound/duangSound.mp3"); });
        Laya.Tween.to(this.ui.cap, { y: 17 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
            Laya.timer.once(250, _this, function () {
                Laya.SoundManager.playSound("sound/rockDiceSound.mp3");
                _this.ui.ani2.play(0, true);
            });
        }));
    };
    /**
     * 开奖
     * @param data 游戏结果
     */
    BaseToyPanel.prototype.Lottery = function () {
        var _this = this;
        this.ui.ani2.stop();
        this.ChangeDice(this.dices);
        Laya.timer.once(570, this, function () { Laya.SoundManager.playSound("sound/upCoverSound.mp3"); });
        Laya.Tween.to(this.ui.cap, { y: -470 }, 500, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
            _this.EventNotification();
        }), 700);
    };
    /**
     * 通知动画播放完成
     * @param value
     */
    BaseToyPanel.prototype.EventNotification = function () {
        var dto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.AniPlayComplete;
        dto.Value = null;
        var event = new CustomEvent(this.listenEventKey, { detail: dto });
        document.dispatchEvent(event);
    };
    /**
     * 改变骰子图片
     * @param data骰子编号Array
     */
    BaseToyPanel.prototype.ChangeDice = function (data) {
        this.ui.dice1.skin = "ui/point" + data[0] + ".png";
        this.ui.dice2.skin = "ui/point" + data[1] + ".png";
        this.ui.dice3.skin = "ui/point" + data[2] + ".png";
    };
    return BaseToyPanel;
}());
//# sourceMappingURL=BaseToyPanel.js.map