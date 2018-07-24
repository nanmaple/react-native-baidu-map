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
    var OperateView;
    (function (OperateView) {
        /**改变游戏状态 */
        OperateView[OperateView["ChangGameStatus"] = 10000] = "ChangGameStatus";
        /**游戏初始化设置 */
        OperateView[OperateView["Init"] = 10001] = "Init";
    })(OperateView = Enum.OperateView || (Enum.OperateView = {}));
})(Enum || (Enum = {}));
/**操作面板类 */
var OperateView = /** @class */ (function (_super) {
    __extends(OperateView, _super);
    function OperateView(eventKey) {
        var _this = _super.call(this) || this;
        /**游戏状态 */
        _this.gameStatus = Enum.GameStatus.WaitInit;
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     */
    OperateView.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    OperateView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.OperateView.ChangGameStatus:
                this.ChangGameStatus(data);
                break;
            case Enum.OperateView.Init:
                this.InitSetting(data);
                break;
        }
    };
    /**
     * 初始化基数
     * @param data
     */
    OperateView.prototype.InitSetting = function (data) {
        this.chipArray = data;
        this.ui.currChip.text = data[0];
    };
    /**
     * 改变游戏状态
     * @param data 游戏状态枚举
     */
    OperateView.prototype.ChangGameStatus = function (data) {
        this.gameStatus = data;
        switch (data) {
            case Enum.GameStatus.Default:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.clear.disabled = false;
                this.ui.addAll.disabled = false;
                this.ui.start.disabled = false;
                this.ui.big.disabled = true;
                this.ui.small.disabled = true;
                this.ui.start.label = LanguageUtils.Language.Get('GameStart');
                break;
            case Enum.GameStatus.Execute:
                this.ui.addChip.disabled = true;
                this.ui.reduceChip.disabled = true;
                this.ui.small.disabled = true;
                this.ui.big.disabled = true;
                this.ui.clear.disabled = true;
                this.ui.addAll.disabled = true;
                this.ui.start.disabled = true;
                break;
            case Enum.GameStatus.Guess:
                this.ui.addChip.disabled = false;
                this.ui.reduceChip.disabled = false;
                this.ui.small.disabled = false;
                this.ui.big.disabled = false;
                this.ui.clear.disabled = true;
                this.ui.addAll.disabled = true;
                this.ui.start.disabled = false;
                this.ui.start.label = LanguageUtils.Language.Get('GainScore');
                break;
        }
    };
    /**
     * 加大猜大小金额
    */
    OperateView.prototype.OnAddChip = function () {
        Laya.SoundManager.stopAllSound();
        this.EventNotification(Enum.ListenViewEnum.AddGuessSum);
    };
    /**
     * 减小猜大小金额
    */
    OperateView.prototype.OnReduceChip = function () {
        Laya.SoundManager.stopAllSound();
        this.EventNotification(Enum.ListenViewEnum.ReduceGuessSum);
    };
    /**
     * 开始游戏或收获分数
    */
    OperateView.prototype.OnStart = function () {
        Laya.SoundManager.stopAllSound();
        if (this.gameStatus == Enum.GameStatus.Default) {
            this.EventNotification(Enum.ListenViewEnum.GameStart);
        }
        else {
            this.EventNotification(Enum.ListenViewEnum.GatherFraction);
            Laya.SoundManager.playSound(SoundConfig.SounRes.Gain);
        }
    };
    /**
     * 清空投注
    */
    OperateView.prototype.OnClear = function () {
        this.EventNotification(Enum.ListenViewEnum.ClearBet);
    };
    /**
     * 选择大小为小
    */
    OperateView.prototype.OnSmall = function () {
        this.EventNotification(Enum.ListenViewEnum.GuessSize, 0);
    };
    /**
     * 全部位置+1
    */
    OperateView.prototype.OnAddAll = function () {
        this.EventNotification(Enum.ListenViewEnum.AddAll);
    };
    /**
     * 选择大小为大
    */
    OperateView.prototype.OnBig = function () {
        Laya.SoundManager.stopAllSound();
        this.EventNotification(Enum.ListenViewEnum.GuessSize, 1);
    };
    /**
     * 加注
     */
    OperateView.prototype.OnIncrease = function () {
        if (this.gameStatus != Enum.GameStatus.Default)
            return;
        this.currChip += 1;
        if (this.currChip == this.chipArray.length) {
            this.currChip = 0;
        }
        this.ui.currChip.text = this.chipArray[this.currChip];
        this.EventNotification(Enum.ListenViewEnum.ChangBaseAmount, this.chipArray[this.currChip]);
    };
    ;
    /**
     * 减注
     */
    OperateView.prototype.OnDecrease = function () {
        if (this.gameStatus != Enum.GameStatus.Default)
            return;
        this.currChip -= 1;
        if (this.currChip == -1) {
            this.currChip = this.chipArray.length - 1;
        }
        this.ui.currChip.text = this.chipArray[this.currChip];
        this.EventNotification(Enum.ListenViewEnum.ChangBaseAmount, this.chipArray[this.currChip]);
    };
    ;
    /**
     * 统一事件发送
     * @param type 事件类型
     */
    OperateView.prototype.EventNotification = function (type, value) {
        if (value === void 0) { value = ''; }
        if (this.gameStatus == Enum.GameStatus.WaitInit)
            return;
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return OperateView;
}(BaseOperateView));
//# sourceMappingURL=OperateView.js.map