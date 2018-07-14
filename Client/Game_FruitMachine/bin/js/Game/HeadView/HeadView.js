var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Enum;
(function (Enum) {
    var HeadView;
    (function (HeadView) {
        /**初始化 */
        HeadView[HeadView["Init"] = 10000] = "Init";
        /**改变 */
        HeadView[HeadView["Chang"] = 10001] = "Chang";
    })(HeadView = Enum.HeadView || (Enum.HeadView = {}));
})(Enum || (Enum = {}));
/**头部面板类 */
var HeadView = /** @class */ (function (_super) {
    __extends(HeadView, _super);
    function HeadView(eventKey) {
        var _this = _super.call(this) || this;
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新UI
    */
    HeadView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     */
    HeadView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.HeadView.Init:
                if (data.balance != null) {
                    this.balance = data.balance;
                    this.ui.balance.text = Utils.Money.Format(data.balance);
                }
                break;
            case Enum.HeadView.Chang:
                this.ChangMoney(data);
                break;
        }
    };
    /**
     * 改变余额
     * @param data
     */
    HeadView.prototype.ChangMoney = function (data) {
        if (data.balance != null) {
            this.balance = data.balance;
            this.effect.start(data.balance);
        }
        if (data.winAmount != null) {
            this.winAmount = data.winAmount;
            this.ui.gain.text = data.winAmount + '';
        }
    };
    /**返回首页 */
    HeadView.prototype.OnGoHome = function () { };
    /**刷新余额 */
    HeadView.prototype.OnRefreshBalance = function () {
        this.EventNotification(Enum.ListenViewEnum.GetBalance);
    };
    /**静音设置 */
    HeadView.prototype.OnSetMute = function () {
        this.muted = !this.muted;
        if (this.muted) {
            this.ui.btnSound.skin = 'ui/head_muted.png';
        }
        else {
            this.ui.btnSound.skin = 'ui/head_sound.png';
        }
        SoundManage.SetMute(this.muted);
        this.EventNotification(Enum.ListenViewEnum.SetMute, this.muted);
    };
    /**显示规则面板 */
    HeadView.prototype.OnShowRule = function () {
        this.EventNotification(Enum.ListenViewEnum.ShowRule);
    };
    /**
     * 统一事件发送
     * @param type 事件类型
     */
    HeadView.prototype.EventNotification = function (type, value) {
        if (value === void 0) { value = ''; }
        SoundManage.PlaySound(SoundConfig.SounRes.Button);
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return HeadView;
}(BaseHeadView));
//# sourceMappingURL=HeadView.js.map