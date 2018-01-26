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
    var AccountListUI = /** @class */ (function (_super) {
        __extends(AccountListUI, _super);
        function AccountListUI() {
            return _super.call(this) || this;
        }
        AccountListUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AccountListUI.uiView);
        };
        AccountListUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "List", "props": { "y": 151, "x": 0, "width": 1334, "visible": false, "var": "accountList", "repeatY": 6, "repeatX": 1, "height": 433 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1334, "renderType": "render", "height": 72 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 409, "width": 677, "valign": "middle", "text": "账号：                      代理： ", "padding": "0,10,0,10", "name": "item", "mouseEnabled": true, "height": 72, "fontSize": 36, "color": "#338fff", "borderColor": "#fff45c", "align": "left" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 105, "width": 220, "valign": "middle", "text": "label", "overflow": "hidden", "name": "account", "height": 72, "fontSize": 36, "color": "#338fff", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 424, "width": 220, "valign": "middle", "text": "label", "overflow": "hidden", "name": "agent", "height": 72, "fontSize": 36, "color": "#338fff", "align": "left" } }] }] }] }, { "type": "Label", "props": { "y": 375, "x": 667, "visible": true, "var": "login", "text": "登录中...", "fontSize": 36, "color": "#338fff", "cacheAs": "bitmap", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return AccountListUI;
    }(View));
    ui.AccountListUI = AccountListUI;
})(ui || (ui = {}));
