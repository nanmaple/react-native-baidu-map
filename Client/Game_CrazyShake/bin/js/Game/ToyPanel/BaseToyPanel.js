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
        this.ui.x = 175;
        this.ui.y = 370;
        Laya.stage.addChild(this.ui);
    };
    /**
     * 开始摇盅
     */
    BaseToyPanel.prototype.startRock = function () {
        var _this = this;
        Laya.Tween.to(this.ui.cap, { y: 17 }, 1200, Laya.Ease.linearIn, Laya.Handler.create(this, function () { _this.ui.ani2.play(0, true); }));
    };
    /**
     * 开奖
     * @param data骰子图片Array
     */
    BaseToyPanel.prototype.lottery = function (data) {
        if (this.ui.ani2.isPlaying) {
            this.ui.ani2.stop();
            var aniIndex = this.ui.ani2.index;
            this.ui.ani2.play(aniIndex, false);
            this.OnAniComplete(data);
        }
        else {
            this.OnAniComplete(data);
        }
    };
    /**
     * 监听ani2动画播放是否完成
     * @param data
     */
    BaseToyPanel.prototype.OnAniComplete = function (data) {
        var _this = this;
        this.ui.ani2.on(Laya.Event.COMPLETE, this, function () {
            _this.ui.ani2.stop();
            _this.changeDice(data.Data.Dices);
            Laya.Tween.to(_this.ui.cap, { y: -470 }, 1200, Laya.Ease.linearIn, Laya.Handler.create(_this, function () {
                _this.EventNotification(data);
            }, data));
        }, data);
    };
    /**
     * 通知动画播放完成
     * @param value
     */
    BaseToyPanel.prototype.EventNotification = function (value) {
        var dto = new Dto.EventNotificationDto();
        dto.Type = Enum.ListenViewEnum.AniPlayComplete;
        dto.Value = value;
        var event = new CustomEvent(this.listenEventKey, { detail: dto });
        document.dispatchEvent(event);
    };
    /**
     * 改变骰子图片
     * @param data骰子编号Array
     */
    BaseToyPanel.prototype.changeDice = function (data) {
        this.ui.dice1.skin = "ui/point" + data[0] + ".png";
        this.ui.dice2.skin = "ui/point" + data[1] + ".png";
        this.ui.dice3.skin = "ui/point" + data[2] + ".png";
    };
    return BaseToyPanel;
}());
//# sourceMappingURL=BaseToyPanel.js.map