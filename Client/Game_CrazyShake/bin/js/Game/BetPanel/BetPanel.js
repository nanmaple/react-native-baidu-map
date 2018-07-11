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
/**
 * 组件Set() 参数类型枚举
 */
var Enum;
(function (Enum) {
    var BetPanel;
    (function (BetPanel) {
        BetPanel[BetPanel["EnableButton"] = 10000] = "EnableButton";
        BetPanel[BetPanel["MSG_GAME_INIT"] = 10001] = "MSG_GAME_INIT";
        BetPanel[BetPanel["MSG_GAME_BET"] = 10002] = "MSG_GAME_BET";
        BetPanel[BetPanel["MSG_GAME_AniPlayComplete"] = 10003] = "MSG_GAME_AniPlayComplete";
    })(BetPanel = Enum.BetPanel || (Enum.BetPanel = {}));
})(Enum || (Enum = {}));
/**
 * 投注开始按钮面板
 */
var BetPanel = /** @class */ (function (_super) {
    __extends(BetPanel, _super);
    function BetPanel(eventKey) {
        return _super.call(this, eventKey) || this;
    }
    /**
 * 类型：公有方法
 * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
 * 一般用于，当数据改变后，渲染需要延迟进行的情况
 */
    BetPanel.prototype.Refresh = function (isEnabled) {
        if (isEnabled === void 0) { isEnabled = true; }
        this.EnableButton(isEnabled);
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     * @param type 枚举类型
     */
    BetPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.BetPanel.MSG_GAME_AniPlayComplete:
                this.EnableButton();
                break;
            case Enum.BetPanel.MSG_GAME_INIT:
                //按键附上赔率信息
                this.EnableButton();
                break;
            case Enum.BetPanel.MSG_GAME_BET:
                this.EnableButton(false);
                break;
            default:
                break;
        }
    };
    return BetPanel;
}(BaseBetPanel));
//# sourceMappingURL=BetPanel.js.map