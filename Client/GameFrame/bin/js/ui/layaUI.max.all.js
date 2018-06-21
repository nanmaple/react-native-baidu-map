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
    var AlertHUI = /** @class */ (function (_super) {
        __extends(AlertHUI, _super);
        function AlertHUI() {
            return _super.call(this) || this;
        }
        AlertHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AlertHUI.uiView);
        };
        AlertHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/maskBg.png", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 375, "x": 667, "width": 584, "var": "prompt", "skin": "ui/prompt.png", "sizeGrid": "15,15,11,13", "height": 332, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "var": "close", "top": 20, "skin": "ui/close.png", "right": 20 } }, { "type": "Label", "props": { "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }] }] }] };
        return AlertHUI;
    }(View));
    ui.AlertHUI = AlertHUI;
})(ui || (ui = {}));
(function (ui) {
    var AlertVUI = /** @class */ (function (_super) {
        __extends(AlertVUI, _super);
        function AlertVUI() {
            return _super.call(this) || this;
        }
        AlertVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AlertVUI.uiView);
        };
        AlertVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 567, "var": "prompt", "skin": "ui/prompt.png", "height": 328, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 771, "x": 344, "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 771, "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "y": 20, "x": 478, "var": "close", "skin": "ui/close.png" } }] }] }] };
        return AlertVUI;
    }(View));
    ui.AlertVUI = AlertVUI;
})(ui || (ui = {}));
(function (ui) {
    var BetBtnVUI = /** @class */ (function (_super) {
        __extends(BetBtnVUI, _super);
        function BetBtnVUI() {
            return _super.call(this) || this;
        }
        BetBtnVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetBtnVUI.uiView);
        };
        BetBtnVUI.uiView = { "type": "View", "props": { "width": 200, "height": 70 }, "child": [{ "type": "Label", "props": { "width": 60, "var": "betName", "valign": "middle", "text": "label", "name": "betName", "left": 20, "height": 40, "fontSize": 28, "color": "#faf114", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "width": 60, "var": "betOdd", "valign": "middle", "text": "---", "right": 20, "name": "betOdd", "height": 40, "fontSize": 28, "color": "#f6e03b", "centerY": 0, "align": "center" } }, { "type": "Button", "props": { "y": -2, "var": "betBtn", "stateNum": 1, "skin": "ui/btn_chip.png", "name": "betBtn", "left": 20, "label": "1", "centerY": 0 } }] };
        return BetBtnVUI;
    }(View));
    ui.BetBtnVUI = BetBtnVUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBgHUI = /** @class */ (function (_super) {
        __extends(GameBgHUI, _super);
        function GameBgHUI() {
            return _super.call(this) || this;
        }
        GameBgHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBgHUI.uiView);
        };
        GameBgHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/gameBg.png", "height": 750 } }, { "type": "Image", "props": { "y": 372, "x": 471, "var": "close", "skin": "ui/close.png" } }, { "type": "Label", "props": { "wordWrap": true, "width": 100, "var": "btnsure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#ffffff", "centerX": -563, "bottom": 29, "align": "center" } }] };
        return GameBgHUI;
    }(View));
    ui.GameBgHUI = GameBgHUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBgVUI = /** @class */ (function (_super) {
        __extends(GameBgVUI, _super);
        function GameBgVUI() {
            return _super.call(this) || this;
        }
        GameBgVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBgVUI.uiView);
        };
        GameBgVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/gameBg_v.png" } }, { "type": "Image", "props": { "y": 268, "x": 86, "var": "close", "skin": "ui/close.png" } }, { "type": "Label", "props": { "wordWrap": true, "width": 100, "var": "btnsure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#ffffff", "centerX": -280, "bottom": 35, "align": "center" } }] };
        return GameBgVUI;
    }(View));
    ui.GameBgVUI = GameBgVUI;
})(ui || (ui = {}));
(function (ui) {
    var GameLoadHUI = /** @class */ (function (_super) {
        __extends(GameLoadHUI, _super);
        function GameLoadHUI() {
            return _super.call(this) || this;
        }
        GameLoadHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameLoadHUI.uiView);
        };
        GameLoadHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "width": 1334, "skin": "ui/maskBg.png", "height": 750, "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "y": 375, "x": 667, "var": "progressLabel", "text": "0%", "fontSize": 35, "color": "#fdfeff", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoadHUI;
    }(View));
    ui.GameLoadHUI = GameLoadHUI;
})(ui || (ui = {}));
(function (ui) {
    var GameLoadVUI = /** @class */ (function (_super) {
        __extends(GameLoadVUI, _super);
        function GameLoadVUI() {
            return _super.call(this) || this;
        }
        GameLoadVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameLoadVUI.uiView);
        };
        GameLoadVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "ui/maskBg.png", "height": 1334, "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "y": 667, "x": 375, "visible": true, "var": "progressLabel", "text": "0%", "fontSize": 35, "color": "#ffffff", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoadVUI;
    }(View));
    ui.GameLoadVUI = GameLoadVUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingHUI = /** @class */ (function (_super) {
        __extends(LoadingHUI, _super);
        function LoadingHUI() {
            return _super.call(this) || this;
        }
        LoadingHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingHUI.uiView);
        };
        LoadingHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/maskBg.png", "height": 750 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": true, "var": "txt", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return LoadingHUI;
    }(View));
    ui.LoadingHUI = LoadingHUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingVUI = /** @class */ (function (_super) {
        __extends(LoadingVUI, _super);
        function LoadingVUI() {
            return _super.call(this) || this;
        }
        LoadingVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingVUI.uiView);
        };
        LoadingVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": true, "var": "txt", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return LoadingVUI;
    }(View));
    ui.LoadingVUI = LoadingVUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map