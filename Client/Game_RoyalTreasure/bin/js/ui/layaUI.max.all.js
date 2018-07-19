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
    var AlertViewUI = /** @class */ (function (_super) {
        __extends(AlertViewUI, _super);
        function AlertViewUI() {
            return _super.call(this) || this;
        }
        AlertViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AlertViewUI.uiView);
        };
        AlertViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 567, "var": "prompt", "skin": "ui/prompt.png", "height": 328, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 771, "x": 344, "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 771, "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "y": 20, "x": 479, "var": "close", "skin": "ui/close.png" } }] }] }] };
        return AlertViewUI;
    }(View));
    ui.AlertViewUI = AlertViewUI;
})(ui || (ui = {}));
(function (ui) {
    var FootPanelUI = /** @class */ (function (_super) {
        __extends(FootPanelUI, _super);
        function FootPanelUI() {
            return _super.call(this) || this;
        }
        FootPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.FootPanelUI.uiView);
        };
        FootPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 6, "x": -22, "width": 793, "skin": "ui/footer.png" } }, { "type": "Image", "props": { "y": 102, "x": 290, "width": 170, "skin": "ui/betNumBg.png", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 10, "width": 150, "var": "betNum", "text": "0", "height": 41, "fontSize": 34, "color": "#ffffff", "align": "center" } }] }, { "type": "Button", "props": { "y": 92, "x": 480, "width": 65, "var": "addBtn", "stateNum": 1, "skin": "ui/btn_add.png", "height": 85 } }, { "type": "Button", "props": { "y": 92, "x": 205, "width": 65, "var": "decreaseBtn", "stateNum": 1, "skin": "ui/btn_decrease.png", "height": 85 } }, { "type": "Button", "props": { "y": 92, "x": 4, "width": 157, "var": "rechargeBtn", "stateNum": 1, "skin": "ui/btn_recharge.png", "height": 85 } }, { "type": "Button", "props": { "y": 92, "x": 562, "width": 179, "var": "autoDigBtn", "stateNum": 1, "skin": "ui/btn_autoDig.png", "height": 85 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 27, "width": 125, "skin": "ui/autoDigWord.png", "height": 36 } }] }] };
        return FootPanelUI;
    }(View));
    ui.FootPanelUI = FootPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBgViewUI = /** @class */ (function (_super) {
        __extends(GameBgViewUI, _super);
        function GameBgViewUI() {
            return _super.call(this) || this;
        }
        GameBgViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBgViewUI.uiView);
        };
        GameBgViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/bg.jpg", "height": 1334 } }] };
        return GameBgViewUI;
    }(View));
    ui.GameBgViewUI = GameBgViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameLoadViewUI = /** @class */ (function (_super) {
        __extends(GameLoadViewUI, _super);
        function GameLoadViewUI() {
            return _super.call(this) || this;
        }
        GameLoadViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameLoadViewUI.uiView);
        };
        GameLoadViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "ui/maskBg.png", "height": 1334, "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "y": 667, "x": 375, "visible": true, "var": "progressLabel", "text": "0%", "fontSize": 35, "color": "#ffffff", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoadViewUI;
    }(View));
    ui.GameLoadViewUI = GameLoadViewUI;
})(ui || (ui = {}));
(function (ui) {
    var HeadPanelUI = /** @class */ (function (_super) {
        __extends(HeadPanelUI, _super);
        function HeadPanelUI() {
            return _super.call(this) || this;
        }
        HeadPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HeadPanelUI.uiView);
        };
        HeadPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 260 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/header.png" } }, { "type": "Image", "props": { "y": 9, "x": 280, "width": 189, "skin": "ui/balanceBg.png" }, "child": [{ "type": "Label", "props": { "y": 12, "x": 35, "width": 145, "var": "balance", "text": "0", "height": 27, "fontSize": 25, "color": "#ffffff", "align": "center" } }] }, { "type": "Image", "props": { "y": 5, "x": 261, "skin": "ui/balanceMark.png" } }, { "type": "Image", "props": { "y": 5, "x": 60, "width": 80, "var": "homeBtn", "skin": "ui/homeBtn.png" } }, { "type": "Image", "props": { "y": 95, "x": 249, "skin": "ui/semicircle.png" } }, { "type": "Image", "props": { "y": 96, "x": 265, "skin": "ui/lightOff.png" } }, { "type": "Image", "props": { "y": 150, "x": 243, "skin": "ui/leftGold.png" } }, { "type": "Image", "props": { "y": 160, "x": 377, "skin": "ui/rightGold.png" } }, { "type": "Image", "props": { "y": 105, "x": 341, "skin": "ui/crown.png" } }, { "type": "Image", "props": { "y": 146, "x": 307, "skin": "ui/blackDiamond.png" } }, { "type": "Image", "props": { "y": 133, "x": 371, "skin": "ui/redDiamond.png" } }] };
        return HeadPanelUI;
    }(View));
    ui.HeadPanelUI = HeadPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingViewUI = /** @class */ (function (_super) {
        __extends(LoadingViewUI, _super);
        function LoadingViewUI() {
            return _super.call(this) || this;
        }
        LoadingViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingViewUI.uiView);
        };
        LoadingViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": true, "var": "txt", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return LoadingViewUI;
    }(View));
    ui.LoadingViewUI = LoadingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var TreasurePanelUI = /** @class */ (function (_super) {
        __extends(TreasurePanelUI, _super);
        function TreasurePanelUI() {
            return _super.call(this) || this;
        }
        TreasurePanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TreasurePanelUI.uiView);
        };
        TreasurePanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 866 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/mine1.png", "scaleY": 0.65, "scaleX": 0.65 } }, { "type": "Image", "props": { "y": 185, "x": 77, "skin": "ui/mine2.png" } }, { "type": "Image", "props": { "y": 144, "x": 278, "skin": "ui/mine3.png" } }, { "type": "Image", "props": { "y": 192, "x": 445, "skin": "ui/mine4.png" } }, { "type": "Image", "props": { "y": 288, "x": 469, "skin": "ui/mine5.png" } }, { "type": "Image", "props": { "y": 238, "x": 373, "skin": "ui/mine6.png" } }, { "type": "Image", "props": { "y": 276, "x": -1, "skin": "ui/mine3.png" } }, { "type": "Image", "props": { "y": 315, "x": 131, "skin": "ui/mine2.png" } }, { "type": "Image", "props": { "y": 439, "x": 71, "skin": "ui/mine3.png" } }, { "type": "Image", "props": { "y": 340, "x": 474, "skin": "ui/mine4.png" } }, { "type": "Image", "props": { "y": 550, "x": 339, "skin": "ui/mine5.png" } }, { "type": "Image", "props": { "y": 345, "x": 375, "skin": "ui/mine6.png" } }, { "type": "Image", "props": { "y": 462, "x": 161, "skin": "ui/mine4.png" } }, { "type": "Image", "props": { "y": 569, "x": 14, "skin": "ui/mine3.png" } }, { "type": "Image", "props": { "y": 683, "x": 203, "skin": "ui/mine4.png" } }, { "type": "Image", "props": { "y": 691, "x": -6, "skin": "ui/mine5.png" } }, { "type": "Image", "props": { "y": 700, "x": 103, "skin": "ui/mine6.png" } }, { "type": "Image", "props": { "y": 596, "x": 328, "skin": "ui/mine4.png" } }, { "type": "Image", "props": { "y": 560, "x": 504, "width": 324, "skin": "ui/mine4.png", "skewY": 180, "skewX": 180, "pivotY": 176, "pivotX": -3, "height": 172 } }, { "type": "Image", "props": { "y": 434, "x": 367, "skin": "ui/mine2.png" } }, { "type": "Image", "props": { "y": 584, "x": 476, "skin": "ui/mine4.png" } }, { "type": "Image", "props": { "y": 690, "x": 519, "skin": "ui/mine5.png" } }] };
        return TreasurePanelUI;
    }(View));
    ui.TreasurePanelUI = TreasurePanelUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map