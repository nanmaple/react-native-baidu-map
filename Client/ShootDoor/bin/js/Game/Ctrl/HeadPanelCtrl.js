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
var HeadPanelCtrl = (function (_super) {
    __extends(HeadPanelCtrl, _super);
    function HeadPanelCtrl(headPanel, noteRecordPanel, rulePanel, memberInfo, parentID) {
        var _this = _super.call(this) || this;
        _this.headPanel = headPanel;
        //创建头部面板UI实例
        var grHandler = Laya.Handler.create(_this, _this.OnClickGR, null, false);
        var ruleHandler = Laya.Handler.create(_this, _this.OnClickRule, null, false);
        _this.headPanel.SetInfo(memberInfo, parentID, grHandler, ruleHandler);
        _this.noteRecordPanelCtrl = new NoteRecordPanelCtrl(noteRecordPanel);
        _this.rulePanel = rulePanel;
        return _this;
    }
    /**
     * 点击个人投注记录
     */
    HeadPanelCtrl.prototype.OnClickGR = function () {
        this.noteRecordPanelCtrl.ShowNoteRecord();
    };
    /**
     * 点击规则
     */
    HeadPanelCtrl.prototype.OnClickRule = function () {
        this.rulePanel.ShowRule();
    };
    /**
     * 改变金额
     * @param money
     */
    HeadPanelCtrl.prototype.ChangeMoney = function (money) {
        this.headPanel.ChangeMoney(Math.floor(money));
    };
    return HeadPanelCtrl;
}(Laya.Sprite));
