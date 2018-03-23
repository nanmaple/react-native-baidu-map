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
    AccountListUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "List", "props": { "y": 70, "x": 0, "width": 1334, "visible": false, "var": "accountList", "spaceY": 5, "repeatY": 6, "height": 680 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1334, "renderType": "render", "name": "list", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 20, "width": 200, "valign": "middle", "text": "Recommender:", "overflow": "hidden", "name": "label", "height": 70, "fontSize": 26, "font": "Arial", "color": "#008000", "bold": true, "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 220, "width": 300, "valign": "middle", "text": "label", "overflow": "hidden", "name": "agent", "height": 70, "fontSize": 26, "font": "Arial", "color": "#333", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 1334, "valign": "middle", "padding": "0,10,0,10", "name": "item", "mouseEnabled": true, "height": 70, "fontSize": 36, "borderColor": "#eee", "align": "left" } }, { "type": "Image", "props": { "y": 17, "skin": "go.png", "right": 20 } }] }] }, { "type": "Label", "props": { "visible": true, "var": "login", "text": "登录中...", "fontSize": 30, "color": "#008000", "centerY": 0, "centerX": 0, "cacheAs": "bitmap", "bold": false, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 1334, "visible": false, "var": "title", "valign": "middle", "text": "请选择推荐人", "padding": "0,10,0,10", "mouseEnabled": true, "height": 70, "fontSize": 26, "font": "Arial", "color": "#008000", "bold": true, "align": "center" } }] };
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
    AccountList_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1222 }, "child": [{ "type": "List", "props": { "y": 70, "x": 0, "width": 750, "visible": false, "var": "accountList", "spaceY": 5, "repeatY": 6, "height": 1152 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 750, "renderType": "render", "name": "list", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 750, "valign": "middle", "padding": "0,10,0,10", "name": "item", "mouseEnabled": true, "height": 70, "fontSize": 36, "borderColor": "#eee", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 120, "width": 300, "valign": "middle", "text": "label", "overflow": "hidden", "name": "agent", "height": 70, "fontSize": 26, "font": "Arial", "color": "#333", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 20, "width": 100, "valign": "middle", "text": "推荐人:", "overflow": "hidden", "name": "label", "height": 70, "fontSize": 26, "font": "Arial", "color": "#008000", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 17, "skin": "go.png", "right": 20 } }] }] }, { "type": "Label", "props": { "visible": true, "var": "login", "text": "登录中...", "fontSize": 30, "color": "#008000", "centerY": 0, "centerX": 0, "cacheAs": "bitmap", "bold": false, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 750, "visible": false, "var": "title", "valign": "middle", "text": "请选择推荐人", "padding": "0,10,0,10", "mouseEnabled": true, "height": 70, "fontSize": 26, "font": "Arial", "color": "#008000", "bold": true, "align": "center" } }] };
    ui.AccountList_VerUI = AccountList_VerUI;
})(ui || (ui = {}));
