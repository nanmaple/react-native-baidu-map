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
    var BetBarView;
    (function (BetBarView) {
        /**设置投注个数 */
        BetBarView[BetBarView["SET_BET"] = 10000] = "SET_BET";
        /**全部加1 */
        BetBarView[BetBarView["ADD_ALL"] = 10001] = "ADD_ALL";
        /**清除全部 */
        BetBarView[BetBarView["CLEAR_ALL"] = 10002] = "CLEAR_ALL";
    })(BetBarView = Enum.BetBarView || (Enum.BetBarView = {}));
})(Enum || (Enum = {}));
var BetBarView = /** @class */ (function (_super) {
    __extends(BetBarView, _super);
    function BetBarView(eventKey) {
        var _this = _super.call(this) || this;
        _this.ListenEventKey = eventKey;
        return _this;
    }
    /**
     * 刷新UI
    */
    BetBarView.prototype.Refresh = function () {
    };
    /**
     * 设置结果
     * @param position
     */
    BetBarView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.BetBarView.SET_BET:
                this.SetBet(data);
                break;
            case Enum.BetBarView.ADD_ALL:
                this.AddAll();
                break;
            case Enum.BetBarView.CLEAR_ALL:
                this.ClearAll();
                break;
        }
    };
    BetBarView.prototype.SetBet = function (data) {
        var number = this.ui.getChildAt(data.Pos).getChildAt(1).getChildByName('betNumber');
        number.text = data.Amount + '';
    };
    /**
     * 全部+1
     */
    BetBarView.prototype.AddAll = function () {
        for (var i = 0; i < this.lenght; i++) {
            this.OnBetClick(i);
        }
    };
    /**
     * 清除所有
    */
    BetBarView.prototype.ClearAll = function () {
        for (var i = 0; i < this.lenght; i++) {
            var number = this.ui.getChildAt(i).getChildAt(1).getChildByName('betNumber');
            number.text = '0';
        }
    };
    /**
     * 点击事件触发函数
     * @param position 投注位置
     */
    BetBarView.prototype.OnBetClick = function (position) {
        var data = new Dto.EventNotificationDto();
        data.Value = position;
        data.Type = Enum.ListenViewEnum.BetPos;
        var event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return BetBarView;
}(BaseBetBarView));
//# sourceMappingURL=BetBarView.js.map