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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var AccountListUI = (function (_super) {
        __extends(AccountListUI, _super);
        function AccountListUI() {
            return _super.call(this) || this;
        }
        AccountListUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AccountListUI.uiView);
        };
        return AccountListUI;
    }(View));
    AccountListUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "List", "props": { "y": 151, "x": 331, "width": 672, "visible": false, "var": "accountList", "repeatY": 6, "height": 433 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 672, "renderType": "render", "height": 72 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 1, "width": 670, "valign": "middle", "padding": "0,10,0,10", "name": "item", "mouseEnabled": true, "height": 72, "fontSize": 36, "color": "#338fff", "borderColor": "#fff45c", "align": "left" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 10, "width": 320, "name": "accountBox", "height": 72 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 100, "width": 220, "valign": "middle", "text": "label", "overflow": "hidden", "name": "account", "height": 72, "fontSize": 32, "color": "#338fff", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 100, "valign": "middle", "text": "账号：", "overflow": "hidden", "height": 72, "fontSize": 32, "color": "#338fff", "align": "left" } }] }, { "type": "Box", "props": { "y": 0, "x": 340, "name": "agentBox" }, "child": [{ "type": "Label", "props": { "x": 100, "width": 220, "valign": "middle", "text": "label", "overflow": "hidden", "name": "agent", "height": 72, "fontSize": 32, "color": "#338fff", "align": "left" } }, { "type": "Label", "props": { "width": 100, "valign": "middle", "text": "代理：", "overflow": "hidden", "height": 72, "fontSize": 32, "color": "#338fff", "align": "left" } }] }] }] }] }, { "type": "Label", "props": { "y": 375, "x": 667, "visible": true, "var": "login", "text": "登录中...", "fontSize": 36, "color": "#338fff", "cacheAs": "bitmap", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] };
    ui.AccountListUI = AccountListUI;
})(ui || (ui = {}));
