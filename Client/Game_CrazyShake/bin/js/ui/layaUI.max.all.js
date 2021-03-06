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
        AlertViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 567, "var": "prompt", "skin": "ui/alert_bg.png", "height": 328, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 771, "x": 344, "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 771, "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 62, "wordWrap": true, "width": 515, "var": "txt", "valign": "middle", "overflow": "scroll", "height": 202, "fontSize": 32, "font": "Arial", "color": "#fff", "centerX": 0 } }, { "type": "Image", "props": { "y": -29, "x": 535, "var": "close", "skin": "ui/btn_close.png" } }] }] }] };
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
        BetNumPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 125 }, "child": [{ "type": "Button", "props": { "y": 17, "x": 39, "var": "maxBtn", "stateNum": 1, "skin": "ui/maxBtn1.png" }, "child": [{ "type": "Label", "props": { "y": 18, "x": 25, "width": 95, "var": "maxWord", "height": 60, "fontSize": 43, "font": "Microsoft YaHei", "color": "#6d3e04", "bold": true, "align": "center" } }] }, { "type": "Text", "props": { "y": 42, "x": 383, "width": 205, "var": "betNumText", "text": "100", "height": 40, "fontSize": 40, "color": "#ffffff", "align": "center" } }, { "type": "Button", "props": { "y": 15, "x": 256, "var": "decreaseBtn", "stateNum": 1, "skin": "ui/decreaseBtn1.png" } }, { "type": "Button", "props": { "y": 15, "x": 609, "var": "addBtn", "stateNum": 1, "skin": "ui/addBtn1.png" } }] };
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
        BetPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 266 }, "child": [{ "type": "Image", "props": { "y": 39, "x": 508, "var": "bigBtn", "skin": "ui/betBtnUp.png" }, "child": [{ "type": "Label", "props": { "y": 115, "x": 104, "width": 170, "var": "bigOdds", "pivotY": 15, "pivotX": 85, "height": 30, "fontSize": 24, "font": "Helvetica", "color": "#ffb017", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 146, "x": 104, "width": 170, "var": "bigRule", "pivotY": 16, "pivotX": 85, "height": 30, "fontSize": 24, "font": "Helvetica", "color": "#ffb017", "bold": false, "align": "center" } }] }, { "type": "Image", "props": { "y": 39, "x": 264, "var": "jaguarBtn", "skin": "ui/betBtnUp.png" }, "child": [{ "type": "Label", "props": { "y": 116, "x": 106, "width": 170, "var": "jaguarOdds", "pivotY": 16, "pivotX": 85, "height": 30, "fontSize": 24, "font": "Helvetica", "color": "#ffb017", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 145, "x": 106, "width": 170, "var": "jaguarRule", "pivotY": 15, "pivotX": 85, "height": 30, "fontSize": 24, "font": "Helvetica", "color": "#ffb017", "bold": false, "align": "center" } }] }, { "type": "Image", "props": { "y": 38, "x": 19, "var": "littleBtn", "skin": "ui/betBtnUp.png" }, "child": [{ "type": "Label", "props": { "y": 117, "x": 106, "width": 170, "var": "littleOdds", "pivotY": 15, "pivotX": 85, "height": 30, "fontSize": 24, "font": "Helvetica", "color": "#ffb017", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 148, "x": 106, "width": 170, "var": "littleRule", "pivotY": 16, "pivotX": 85, "height": 30, "fontSize": 24, "font": "Helvetica", "color": "#ffb017", "bold": false, "align": "center" } }] }, { "type": "Image", "props": { "y": 98, "x": 127, "width": 80, "var": "littleWord", "skin": "ui/littleWord.png", "pivotY": 36, "pivotX": 41, "height": 69 } }, { "type": "Image", "props": { "y": 98, "x": 617, "width": 80, "var": "bigWord", "skin": "ui/bigWord.png", "pivotY": 35, "pivotX": 41, "height": 68 } }, { "type": "Image", "props": { "y": 102, "x": 376, "width": 121, "var": "jaguarWord", "skin": "ui/jaguarWord.png", "pivotY": 27, "pivotX": 62, "height": 53 } }] };
        return BetPanelUI;
    }(View));
    ui.BetPanelUI = BetPanelUI;
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
        GameBgViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/bg.png" } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "visible": false, "var": "maskBg", "skin": "ui/maskBg.png", "skewY": 90, "skewX": 90, "height": 750, "alpha": 0.4 } }] };
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
    var GameRecordViewUI = /** @class */ (function (_super) {
        __extends(GameRecordViewUI, _super);
        function GameRecordViewUI() {
            return _super.call(this) || this;
        }
        GameRecordViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameRecordViewUI.uiView);
        };
        GameRecordViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 558, "var": "prompt", "skin": "ui/record.png", "height": 797, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 522, "var": "close", "top": -25, "skin": "ui/btn_close.png", "right": -25 } }, { "type": "Image", "props": { "y": -5, "var": "title", "skin": "ui/record_tit.png", "centerX": 0 } }, { "type": "Panel", "props": { "y": 69, "x": 12, "width": 500, "var": "panelList", "height": 680, "centerX": 0 }, "child": [{ "type": "Box", "props": { "width": 500, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 0, "width": 150, "var": "num_tit", "valign": "middle", "text": "序号", "left": 0, "height": 60, "fontSize": 30, "color": "#fecc05", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 150, "width": 200, "var": "reward_tit", "valign": "middle", "text": "获得奖励", "height": 60, "fontSize": 30, "color": "#fecc05", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 0, "width": 150, "var": "time_tit", "valign": "middle", "text": "时间", "right": 0, "height": 60, "fontSize": 30, "color": "#fecc05", "bold": true, "align": "center" } }] }, { "type": "List", "props": { "y": 60, "x": 0, "width": 500, "var": "recordList", "spaceY": 5, "repeatY": 10, "height": 620 }, "child": [{ "type": "Box", "props": { "width": 500, "renderType": "render", "height": 55, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "skin": "ui/listBgTwo.png", "sizeGrid": "20,20,20,20", "name": "listBg", "height": 55 } }, { "type": "Label", "props": { "y": 0, "width": 150, "valign": "middle", "text": "1", "name": "num", "left": 0, "height": 55, "fontSize": 25, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 0, "width": 200, "valign": "middle", "text": "100", "name": "reward", "height": 55, "fontSize": 25, "color": "#ffffff", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 5, "width": 150, "valign": "middle", "text": "2018-01-16", "right": 0, "name": "date", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 30, "width": 150, "valign": "middle", "text": "18:25:25", "right": 0, "name": "time", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }] }, { "type": "Label", "props": { "width": 500, "var": "noRecord", "valign": "middle", "text": "暂无数据", "height": 50, "fontSize": 25, "color": "#ffffff", "centerY": 0, "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "width": 500, "var": "isLoading", "valign": "middle", "text": "正在加载...", "height": 50, "fontSize": 25, "color": "#ffffff", "centerY": 0, "centerX": 0, "align": "center" } }] }] }] }] };
        return GameRecordViewUI;
    }(View));
    ui.GameRecordViewUI = GameRecordViewUI;
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
        HeadPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 230 }, "child": [{ "type": "Image", "props": { "y": 21, "x": 550, "skin": "ui/balance.png" } }, { "type": "Label", "props": { "y": 26, "x": 601, "width": 127, "var": "balanceNum", "text": "0", "height": 32, "fontSize": 30, "color": "#ffffff", "align": "center" } }, { "type": "Button", "props": { "y": 127, "x": 653, "var": "recordBtn", "stateNum": 1, "skin": "ui/recordBtn1.png" } }, { "type": "Button", "props": { "y": 127, "x": 559, "var": "rechargeBtn", "stateNum": 1, "skin": "ui/rechargeBtn1.png" } }, { "type": "Button", "props": { "y": 127, "x": 20, "var": "ruleBtn", "stateNum": 1, "skin": "ui/ruleBtn1.png" } }, { "type": "Image", "props": { "y": 127, "x": 112, "var": "voiceBtn", "skin": "ui/voiceOnBtn.png" } }, { "type": "Label", "props": { "y": 163, "x": 287, "width": 179, "var": "scoreNum", "text": "0", "height": 37, "fontSize": 33, "font": "Microsoft YaHei", "color": "#eae6e1", "bold": false, "align": "center" } }, { "type": "Button", "props": { "y": 12, "x": 24, "var": "homeBtn", "stateNum": 1, "skin": "ui/homeBtn1.png" } }, { "type": "Image", "props": { "y": 11, "x": 265, "var": "gameLogo", "skin": "ui/GameLogo.png" } }, { "type": "Label", "props": { "y": 117, "x": 345, "width": 60, "var": "getWord", "text": "获得", "height": 27, "fontSize": 24, "font": "SimHei", "color": "#f4f4f4", "bold": true, "align": "center" } }] };
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
    var ResultPanelUI = /** @class */ (function (_super) {
        __extends(ResultPanelUI, _super);
        function ResultPanelUI() {
            return _super.call(this) || this;
        }
        ResultPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ResultPanelUI.uiView);
        };
        ResultPanelUI.uiView = { "type": "View", "props": { "width": 519, "height": 527 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 519, "var": "winImg", "skin": "ui/win.png", "height": 527 } }, { "type": "Image", "props": { "y": 359, "x": 69, "width": 380, "var": "resultNote", "skin": "ui/mask.png", "height": 101 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 0, "wordWrap": true, "width": 377, "visible": false, "var": "failNote", "text": "阿哦~一定是手滑了，再来一次吧~", "height": 81, "fontSize": 38, "font": "Helvetica", "color": "#b7b5b5", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 380, "visible": false, "var": "winNote", "height": 101, "color": "#b7b5b5" }, "child": [{ "type": "Label", "props": { "y": 6, "x": 60, "width": 137, "var": "wordResultPoint", "text": "1、1、1", "height": 42, "fontSize": 38, "color": "#e54209", "align": "center" } }, { "type": "Label", "props": { "y": 6, "x": 203, "width": 45, "var": "wordPoint", "text": "点", "height": 42, "fontSize": 38, "color": "#ffefa3", "align": "center" } }, { "type": "Label", "props": { "y": 6, "x": 256, "width": 85, "var": "wordResult", "text": "大", "height": 42, "fontSize": 38, "color": "#e54209", "align": "left" } }, { "type": "Label", "props": { "y": 50, "x": 31, "width": 324, "var": "wordEnd", "text": "恭喜您！", "height": 42, "fontSize": 38, "color": "#ffefa3", "align": "center" } }] }] }, { "type": "Image", "props": { "y": 169, "x": 185, "var": "failImg", "skin": "ui/fail.png" } }] };
        return ResultPanelUI;
    }(View));
    ui.ResultPanelUI = ResultPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var RulePanelUI = /** @class */ (function (_super) {
        __extends(RulePanelUI, _super);
        function RulePanelUI() {
            return _super.call(this) || this;
        }
        RulePanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RulePanelUI.uiView);
        };
        RulePanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/maskBg.png", "skewY": 90, "skewX": 90 } }, { "type": "Image", "props": { "y": 272, "x": 66, "skin": "ui/ruleBg.png" } }, { "type": "Image", "props": { "y": 366, "x": 568, "var": "closeBtn", "skin": "ui/closeBtn.png" } }, { "type": "Image", "props": { "y": 364, "x": 291, "var": "ruleLogo", "skin": "ui/ruleLogo.png" } }, { "type": "Image", "props": { "y": 449, "x": 159, "var": "ruleWord", "skin": "ui/ruleWord.png" } }] };
        return RulePanelUI;
    }(View));
    ui.RulePanelUI = RulePanelUI;
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
        ToyPanelUI.uiView = { "type": "View", "props": { "width": 400, "height": 500 }, "child": [{ "type": "Panel", "props": { "y": 266, "x": 199, "width": 400, "var": "panel", "rotation": 0, "pivotY": 266, "pivotX": 199, "name": "", "height": 500 }, "compId": 2, "child": [{ "type": "Image", "props": { "y": 261, "x": -10, "var": "floor", "skin": "ui/floor.png" } }, { "type": "Image", "props": { "y": 280, "x": 241, "var": "dice3", "skin": "ui/point1.png", "name": "" } }, { "type": "Image", "props": { "y": 276, "x": 70, "var": "dice1", "skin": "ui/point1.png", "name": "" } }, { "type": "Image", "props": { "y": 305, "x": 155, "var": "dice2", "skin": "ui/point1.png", "name": "" } }, { "type": "Image", "props": { "y": -470, "x": 36, "var": "cap", "skin": "ui/cap.png" }, "compId": 7 }] }], "animations": [{ "nodes": [{ "target": 7, "keyframes": { "y": [{ "value": 17, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }], "x": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }] } }, { "target": 2, "keyframes": { "y": [{ "value": 266, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 3 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 9 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 15 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 21 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 27 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 33 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 39 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 45 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 51 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 57 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 63 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 69 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 75 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 81 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 87 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 93 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 99 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 105 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 111 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 117 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 120 }] } }], "name": "ani2", "id": 2, "frameRate": 60, "action": 0 }, { "nodes": [{ "target": 7, "keyframes": { "y": [{ "value": 17, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }], "x": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }] } }, { "target": 2, "keyframes": { "y": [{ "value": 266, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -18, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 3 }, { "value": 18, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 9 }, { "value": -18, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 15 }, { "value": 18, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 21 }, { "value": -18, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 27 }, { "value": 18, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 33 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 39 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 45 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 51 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 57 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 63 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 69 }, { "value": -14, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 75 }, { "value": 14, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 81 }, { "value": -14, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 87 }, { "value": 14, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 93 }, { "value": -14, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 99 }, { "value": 14, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 105 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 111 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 117 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 120 }] } }], "name": "ani1", "id": 2, "frameRate": 60, "action": 0 }, { "nodes": [{ "target": 7, "keyframes": { "y": [{ "value": 17, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }], "x": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }] } }, { "target": 2, "keyframes": { "y": [{ "value": 266, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 3 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 9 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 15 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 21 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 27 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 33 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 39 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 45 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 51 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 57 }, { "value": -12, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 63 }, { "value": 12, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 69 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 75 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 81 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 87 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 93 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 99 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 105 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 111 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 117 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 120 }] } }], "name": "ani3", "id": 2, "frameRate": 60, "action": 0 }, { "nodes": [{ "target": 7, "keyframes": { "y": [{ "value": 17, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "y", "index": 0 }], "x": [{ "value": 36, "tweenMethod": "linearNone", "tween": true, "target": 7, "key": "x", "index": 0 }] } }, { "target": 2, "keyframes": { "y": [{ "value": 266, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 3 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 9 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 15 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 21 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 27 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 33 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 39 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 45 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 51 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 57 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 63 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 69 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 75 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 81 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 87 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 93 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 99 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 105 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 111 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 117 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 123 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 129 }, { "value": -9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 135 }, { "value": 9, "tweenMethod": "linearNone", "tween": true, "target": 2, "label": null, "key": "rotation", "index": 141 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 144 }] } }], "name": "ani4", "id": 2, "frameRate": 60, "action": 0 }] };
        return ToyPanelUI;
    }(View));
    ui.ToyPanelUI = ToyPanelUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map