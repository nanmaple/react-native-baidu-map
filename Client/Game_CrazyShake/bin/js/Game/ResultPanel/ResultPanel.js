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
    /**
     * 结果面板参数类型枚举
     */
    var ResultPanel;
    (function (ResultPanel) {
        ResultPanel[ResultPanel["GameStartAni"] = 8888] = "GameStartAni";
        ResultPanel[ResultPanel["GameSettleResult"] = 8889] = "GameSettleResult";
    })(ResultPanel = Enum.ResultPanel || (Enum.ResultPanel = {}));
})(Enum || (Enum = {}));
/**
 * 结果面板类
 */
var ResultPanel = /** @class */ (function (_super) {
    __extends(ResultPanel, _super);
    function ResultPanel() {
        var _this = _super.call(this) || this;
        _this.listenEventKey = "";
        _this.isWin = true;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    ResultPanel.prototype.Refresh = function () {
        this.ui.visible = true;
        if (this.isWin) {
            Laya.SoundManager.playSound("sound/winSound.mp3");
        }
        else
            Laya.SoundManager.playSound("sound/failSound.wav");
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    ResultPanel.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.ResultPanel.GameStartAni:
                this.ui.visible = false;
                break;
            case Enum.ResultPanel.GameSettleResult:
                if (data.WinAmount == 0) {
                    this.isWin = false;
                    this.ResultFail();
                }
                else {
                    this.isWin = true;
                    this.ResultWin(data);
                }
                break;
            default:
                break;
        }
    };
    return ResultPanel;
}(BaseResultPanel));
//# sourceMappingURL=ResultPanel.js.map