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
    AccountListUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 1334, "visible": false, "var": "accountList", "spaceY": 8, "repeatY": 6, "height": 750 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1334, "renderType": "render", "name": "list", "height": 72 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 20, "width": 100, "valign": "middle", "text": "代理：", "overflow": "hidden", "name": "label", "height": 72, "fontSize": 32, "color": "#008000", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 120, "width": 220, "valign": "middle", "text": "label", "overflow": "hidden", "name": "agent", "height": 72, "fontSize": 32, "color": "#333", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 1334, "valign": "middle", "padding": "0,10,0,10", "name": "item", "mouseEnabled": true, "height": 72, "fontSize": 36, "color": "#338fff", "borderColor": "#ddd", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 1254, "width": 80, "valign": "middle", "text": ">", "right": 0, "overflow": "hidden", "height": 72, "fontSize": 50, "font": "SimSun", "color": "#ddd", "align": "center" } }] }] }, { "type": "Label", "props": { "visible": true, "var": "login", "text": "登录中...", "fontSize": 36, "color": "#008000", "centerY": 0, "centerX": 0, "cacheAs": "bitmap", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] };
    ui.AccountListUI = AccountListUI;
})(ui || (ui = {}));
(function (ui) {
    var AccountList_VerUI = (function (_super) {
        __extends(AccountList_VerUI, _super);
        function AccountList_VerUI() {
            return _super.call(this) || this;
        }
        AccountList_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AccountList_VerUI.uiView);
        };
        return AccountList_VerUI;
    }(View));
    AccountList_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1222 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 750, "visible": false, "var": "accountList", "spaceY": 8, "repeatY": 6, "height": 1222 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 750, "renderType": "render", "name": "list", "height": 72 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 750, "valign": "middle", "padding": "0,10,0,10", "name": "item", "mouseEnabled": true, "height": 72, "fontSize": 36, "color": "#338fff", "borderColor": "#ddd", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 120, "width": 220, "valign": "middle", "text": "label", "overflow": "hidden", "name": "agent", "height": 72, "fontSize": 32, "color": "#333", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 20, "width": 100, "valign": "middle", "text": "代理：", "overflow": "hidden", "name": "label", "height": 72, "fontSize": 32, "color": "#008000", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 670, "width": 80, "valign": "middle", "text": ">", "right": 0, "overflow": "hidden", "height": 72, "fontSize": 50, "font": "SimSun", "color": "#ddd", "align": "center" } }] }] }, { "type": "Label", "props": { "visible": true, "var": "login", "text": "登录中...", "fontSize": 36, "color": "#008000", "centerY": 0, "centerX": 0, "cacheAs": "bitmap", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }] };
    ui.AccountList_VerUI = AccountList_VerUI;
})(ui || (ui = {}));
