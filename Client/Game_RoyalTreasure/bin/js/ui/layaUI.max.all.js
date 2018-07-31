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
        FootPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 6, "x": -22, "width": 793, "skin": "ui/footer.png" } }, { "type": "Image", "props": { "y": 102, "x": 290, "width": 170, "skin": "ui/betNumBg.png", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 10, "width": 150, "var": "betNum", "text": "100", "height": 41, "fontSize": 34, "color": "#ffffff", "align": "center" } }] }, { "type": "Button", "props": { "y": 92, "x": 480, "width": 65, "var": "addBtn", "stateNum": 1, "skin": "ui/addBtn1.png", "height": 85 } }, { "type": "Button", "props": { "y": 92, "x": 205, "width": 65, "var": "decreaseBtn", "stateNum": 1, "skin": "ui/decreaseBtn1.png", "height": 85 } }, { "type": "Button", "props": { "y": 92, "x": 4, "width": 157, "var": "maxBtn", "stateNum": 1, "skin": "ui/maxBtn1.png", "height": 85 }, "child": [{ "type": "Label", "props": { "y": 13, "x": 0, "width": 158, "text": "最大", "height": 58, "fontSize": 40, "font": "Microsoft YaHei", "color": "#703e3e", "bold": true, "align": "center" } }] }, { "type": "Button", "props": { "y": 92, "x": 562, "width": 179, "var": "autoDigBtn", "stateNum": 1, "skin": "ui/btn_autoDig.png", "height": 85 }, "child": [{ "type": "Image", "props": { "y": 24, "x": 27, "width": 125, "skin": "ui/autoDigWord.png", "height": 36 } }] }] };
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
        HeadPanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 260 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/header.png" } }, { "type": "Image", "props": { "y": 9, "x": 280, "width": 189, "skin": "ui/balanceBg.png" }, "child": [{ "type": "Label", "props": { "y": 12, "x": 35, "width": 145, "var": "balance", "text": "0", "height": 27, "fontSize": 25, "color": "#ffffff", "align": "center" } }] }, { "type": "Image", "props": { "y": 5, "x": 261, "skin": "ui/balanceMark.png" } }, { "type": "Image", "props": { "y": 7, "x": 60, "var": "homeBtn", "skin": "ui/homeBtn1.png" } }, { "type": "Image", "props": { "y": 95, "x": 249, "skin": "ui/semicircle.png" } }, { "type": "Image", "props": { "y": 96, "x": 265, "skin": "ui/lightOff.png" } }, { "type": "Image", "props": { "y": 150, "x": 243, "skin": "ui/leftGold.png" } }, { "type": "Image", "props": { "y": 160, "x": 377, "skin": "ui/rightGold.png" } }, { "type": "Image", "props": { "y": 105, "x": 341, "skin": "ui/crown.png" } }, { "type": "Image", "props": { "y": 146, "x": 307, "skin": "ui/blackDiamond.png" } }, { "type": "Image", "props": { "y": 133, "x": 371, "skin": "ui/redDiamond.png" } }, { "type": "Image", "props": { "y": 89, "x": 17, "var": "ruleBtn", "skin": "ui/ruleBtn1.png" } }, { "type": "Image", "props": { "y": 89, "x": 111, "var": "voiceBtn", "skin": "ui/voiceOnBtn.png" } }, { "type": "Image", "props": { "y": 89, "x": 562, "var": "rechargeBtn", "skin": "ui/rechargeBtn1.png" } }, { "type": "Image", "props": { "y": 89, "x": 656, "var": "recordBtn", "skin": "ui/recordBtn1.png" } }] };
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
    var MineEffectUI = /** @class */ (function (_super) {
        __extends(MineEffectUI, _super);
        function MineEffectUI() {
            return _super.call(this) || this;
        }
        MineEffectUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MineEffectUI.uiView);
        };
        MineEffectUI.uiView = { "type": "View", "props": { "y": 61, "x": 45, "width": 90, "height": 120, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 33, "x": 16, "var": "mine", "skin": "ui/testMine.png", "scaleY": 0.9, "scaleX": 0.9 } }, { "type": "Label", "props": { "y": 10, "x": 0, "width": 90, "var": "mineScore", "text": "100", "height": 30, "fontSize": 24, "font": "SimSun", "color": "#ee875f", "bold": true, "align": "center" } }] };
        return MineEffectUI;
    }(View));
    ui.MineEffectUI = MineEffectUI;
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
        ToyPanelUI.uiView = { "type": "View", "props": { "width": 280, "height": 226 }, "compId": 1, "child": [{ "type": "Image", "props": { "y": 77, "x": 15, "var": "hammer", "skin": "ui/hammer.png" }, "compId": 2 }, { "type": "Image", "props": { "y": 52, "x": 7, "visible": false, "var": "hammerSplit", "skin": "ui/hammerSplit.png" }, "compId": 6 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "y": [{ "value": 134, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "y", "index": 0 }], "x": [{ "value": 137, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 0 }, { "value": 137, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 23 }, { "value": 136, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "x", "index": 35 }], "rotation": [{ "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 0 }, { "value": 155, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 23 }, { "value": 0, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "rotation", "index": 35 }], "pivotY": [{ "value": 57, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotY", "index": 0 }], "pivotX": [{ "value": 122, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotX", "index": 0 }, { "value": 121, "tweenMethod": "linearNone", "tween": true, "target": 2, "key": "pivotX", "index": 35 }] } }, { "target": 1, "keyframes": { "width": [{ "value": 280, "tweenMethod": "linearNone", "tween": true, "target": 1, "key": "width", "index": 0 }, { "value": 280, "tweenMethod": "linearNone", "tween": true, "target": 1, "key": "width", "index": 35 }], "height": [{ "value": 226, "tweenMethod": "linearNone", "tween": true, "target": 1, "key": "height", "index": 0 }, { "value": 226, "tweenMethod": "linearNone", "tween": true, "target": 1, "key": "height", "index": 35 }] } }, { "target": 6, "keyframes": { "y": [{ "value": 52, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 0 }, { "value": 92, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "y", "index": 35 }], "x": [{ "value": 7, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 0 }, { "value": 13, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "x", "index": 35 }], "width": [{ "value": 203, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "width", "index": 0 }, { "value": 154, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "width", "index": 35 }], "height": [{ "value": 172, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "height", "index": 0 }, { "value": 116, "tweenMethod": "linearNone", "tween": true, "target": 6, "key": "height", "index": 35 }] } }], "name": "dig", "id": 1, "frameRate": 60, "action": 0 }] };
        return ToyPanelUI;
    }(View));
    ui.ToyPanelUI = ToyPanelUI;
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
        TreasurePanelUI.uiView = { "type": "View", "props": { "width": 750, "height": 866 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "mineImg", "skin": "ui/Mine.png", "height": 866 } }, { "type": "Image", "props": { "y": 577, "x": 41, "var": "car", "skin": "ui/car.png" } }] };
        return TreasurePanelUI;
    }(View));
    ui.TreasurePanelUI = TreasurePanelUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map