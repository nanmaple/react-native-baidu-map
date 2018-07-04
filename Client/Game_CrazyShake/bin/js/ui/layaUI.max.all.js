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
    var BetNumPanelUI = /** @class */ (function (_super) {
        __extends(BetNumPanelUI, _super);
        function BetNumPanelUI() {
            return _super.call(this) || this;
        }
        BetNumPanelUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetNumPanelUI.uiView);
        };
        BetNumPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 125 }, "child": [{ "type": "Image", "props": { "y": 12, "x": 47, "var": "maxBtn", "skin": "ui/maxBtn1.png" } }, { "type": "Image", "props": { "y": 4, "x": 199, "skin": "ui/frame2.png" }, "child": [{ "type": "Text", "props": { "y": 38, "x": 147, "var": "betNumText", "text": "100", "fontSize": 40, "color": "#ffffff" } }] }, { "type": "Image", "props": { "y": 15, "x": 226, "var": "decreaseBtn", "skin": "ui/decreaseBtn1.png" } }, { "type": "Image", "props": { "y": 15, "x": 592, "var": "addBtn", "skin": "ui/addBtn1.png" } }, { "type": "Image", "props": { "y": 4, "x": 200, "skin": "ui/frame1.png", "height": 116 } }] };
        return BetNumPanelUI;
    }(View));
    ui.BetNumPanelUI = BetNumPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var BetPanelUI = /** @class */ (function (_super) {
        __extends(BetPanelUI, _super);
        function BetPanelUI() {
            return _super.call(this) || this;
        }
        BetPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetPanelUI.uiView);
        };
        BetPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 266 }, "child": [{ "type": "Image", "props": { "y": 20, "x": 508, "var": "bigBtn", "skin": "ui/bigBtn1.png" } }, { "type": "Image", "props": { "y": 5, "x": 264, "var": "jaguarBtn", "skin": "ui/jaguarBtn1.png" } }, { "type": "Image", "props": { "y": 20, "x": 19, "var": "littleBtn", "skin": "ui/littleBtn1.png" } }] };
        return BetPanelUI;
    }(View));
    ui.BetPanelUI = BetPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var FunBalancePanelUI = /** @class */ (function (_super) {
        __extends(FunBalancePanelUI, _super);
        function FunBalancePanelUI() {
            return _super.call(this) || this;
        }
        FunBalancePanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.FunBalancePanelUI.uiView);
        };
        FunBalancePanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 230 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 461, "skin": "ui/remainingSum.png", "height": 49 }, "child": [{ "type": "Label", "props": { "y": 3, "x": 72, "width": 167, "var": "balanceNum", "text": "0", "height": 36, "fontSize": 36, "color": "#ffffff", "align": "center" } }] }, { "type": "Button", "props": { "y": 108, "x": 661, "var": "rankBtn", "stateNum": 2, "skin": "ui/btn_rank.png" } }, { "type": "Button", "props": { "y": 107, "x": 582, "var": "rechargeBtn", "stateNum": 2, "skin": "ui/btn_recharge.png" } }, { "type": "Button", "props": { "y": 107, "x": 20, "var": "ruleBtn", "stateNum": 2, "skin": "ui/btn_rule.png" } }, { "type": "Button", "props": { "y": 108, "x": 101, "var": "voiceBtn", "stateNum": 2, "skin": "ui/btn_voice.png" } }, { "type": "Label", "props": { "y": 126, "x": 287, "width": 179, "var": "scoreNum", "text": "0", "height": 37, "fontSize": 33, "font": "Microsoft YaHei", "color": "#eaa236", "bold": true, "align": "center" } }] };
        return FunBalancePanelUI;
    }(View));
    ui.FunBalancePanelUI = FunBalancePanelUI;
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
        GameBgViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/bg.jpg" } }] };
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
        GameLoadViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "ui/maskBg.png", "height": 1334, "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "width": 50.5859375, "visible": true, "var": "progressLabel", "text": "0%", "height": 35, "fontSize": 35, "color": "#ffffff", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
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
        HeadPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 80 }, "child": [{ "type": "Image", "props": { "y": 8, "x": 194, "skin": "ui/logo.png" } }, { "type": "Image", "props": { "y": 7, "x": 639, "var": "homeBtn", "skin": "ui/home.png" } }] };
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
        LoadingViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": false, "var": "txt", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return LoadingViewUI;
    }(View));
    ui.LoadingViewUI = LoadingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadPanelUI = /** @class */ (function (_super) {
        __extends(LoadPanelUI, _super);
        function LoadPanelUI() {
            return _super.call(this) || this;
        }
        LoadPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadPanelUI.uiView);
        };
        LoadPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/loadmain.jpg" } }, { "type": "Image", "props": { "y": 879, "x": 0, "skin": "ui/loadnotice.png" } }, { "type": "ProgressBar", "props": { "y": 571, "x": 86, "var": "timeBar", "value": 0, "skin": "ui/progress_time.png" } }] };
        return LoadPanelUI;
    }(View));
    ui.LoadPanelUI = LoadPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var ToyPanelUI = /** @class */ (function (_super) {
        __extends(ToyPanelUI, _super);
        function ToyPanelUI() {
            return _super.call(this) || this;
        }
        ToyPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ToyPanelUI.uiView);
        };
        ToyPanelUI.uiView = { "type": "View", "props": { "width": 400, "height": 500 }, "child": [{ "type": "Panel", "props": { "y": 266, "x": 199, "width": 400, "var": "panel", "rotation": 0, "pivotY": 266, "pivotX": 199, "name": "", "height": 500 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 273, "x": 21, "var": "floor", "skin": "ui/floor.png" } }, { "type": "Image", "props": { "y": 280, "x": 241, "var": "dice3", "skin": "ui/point1.png", "name": "" } }, { "type": "Image", "props": { "y": 276, "x": 70, "var": "dice1", "skin": "ui/point1.png", "name": "" } }, { "type": "Image", "props": { "y": 305, "x": 155, "var": "dice2", "skin": "ui/point1.png", "name": "" } }, { "type": "Image", "props": { "y": -470, "x": 33, "var": "cap", "skin": "ui/cap.png" }, "compId": 7 }] }], "animations": [{ "nodes": [{ "target": 7, "keyframes": { "y": [{ "value": 17, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }], "x": [{ "value": 35, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }] } }, { "target": 2, "keyframes": { "y": [{ "value": 266, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 2 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 6 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 10 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 14 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 18 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 22 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 24 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }, { "nodes": [{ "target": 7, "keyframes": { "y": [{ "value": -470, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }, { "value": 18, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "y", "index": 27 }, { "value": 18, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 30 }, { "value": 18, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 56 }], "x": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }, { "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "label": null, "key": "x", "index": 27 }, { "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 30 }] } }, { "target": 2, "keyframes": { "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 27 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 30 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 34 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 38 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 42 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 46 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 50 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 54 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 56 }] } }], "name": "ani1", "id": 1, "frameRate": 24, "action": 0 }] };
        return ToyPanelUI;
    }(View));
    ui.ToyPanelUI = ToyPanelUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map