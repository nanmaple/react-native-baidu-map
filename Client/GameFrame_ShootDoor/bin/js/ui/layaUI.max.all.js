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
        AlertHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 375, "x": 667, "width": 584, "var": "prompt", "skin": "ui/bg_alert.png", "sizeGrid": "15,15,11,13", "height": 332, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "var": "close", "top": 20, "skin": "ui/close.png", "right": 20 } }, { "type": "Label", "props": { "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }] }] }] };
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
        AlertVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 567, "var": "prompt", "skin": "ui/bg_alert.png", "height": 328, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 771, "x": 344, "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 771, "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "y": 20, "x": 478, "var": "close", "skin": "ui/close.png" } }] }] }] };
        return AlertVUI;
    }(View));
    ui.AlertVUI = AlertVUI;
})(ui || (ui = {}));
(function (ui) {
    var BetBtnHUI = /** @class */ (function (_super) {
        __extends(BetBtnHUI, _super);
        function BetBtnHUI() {
            return _super.call(this) || this;
        }
        BetBtnHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetBtnHUI.uiView);
        };
        BetBtnHUI.uiView = { "type": "View", "props": { "width": 235, "height": 70 }, "child": [{ "type": "Label", "props": { "width": 80, "var": "betName", "valign": "middle", "text": "label", "name": "betName", "height": 40, "fontSize": 28, "color": "#faf114", "centerY": 0, "centerX": -40, "align": "center" } }, { "type": "Label", "props": { "width": 80, "var": "betOdd", "valign": "middle", "text": "---", "name": "betOdd", "height": 40, "fontSize": 28, "color": "#f6e03b", "centerY": 0, "centerX": 40, "align": "center" } }, { "type": "Button", "props": { "y": 35, "var": "betBtn", "stateNum": 1, "skin": "ui/btn_chip.png", "name": "betBtn", "labelSize": 24, "label": "1", "centerY": 0, "centerX": -40, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return BetBtnHUI;
    }(View));
    ui.BetBtnHUI = BetBtnHUI;
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
        BetBtnVUI.uiView = { "type": "View", "props": { "width": 155, "height": 105 }, "child": [{ "type": "Label", "props": { "width": 80, "valign": "middle", "text": "大", "name": "betName", "height": 40, "fontSize": 28, "color": "#faf114", "centerY": -20, "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "width": 80, "valign": "middle", "text": "11.11", "name": "betOdd", "height": 40, "fontSize": 28, "color": "#f6e03b", "centerY": 30, "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "stateNum": 1, "skin": "ui/btn_chip.png", "name": "betBtn", "labelSize": 24, "label": "1", "centerY": -10, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return BetBtnVUI;
    }(View));
    ui.BetBtnVUI = BetBtnVUI;
})(ui || (ui = {}));
(function (ui) {
    var BetHUI = /** @class */ (function (_super) {
        __extends(BetHUI, _super);
        function BetHUI() {
            return _super.call(this) || this;
        }
        BetHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetHUI.uiView);
        };
        BetHUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "width": 1335, "var": "BetBox", "skin": "ui/bg_bet.png", "height": 252, "centerX": 0, "bottom": 0 } }, { "type": "Label", "props": { "width": 1334, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#d00400", "stroke": 5, "fontSize": 60, "color": "#fbff70", "centerY": 100, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "width": 152, "var": "Chips", "top": 100, "skin": "ui/bg_chips.png", "right": 22 }, "child": [{ "type": "Button", "props": { "y": 60, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 148, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "10", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 233, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "20", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 317, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "50", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 403, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "100", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 455, "x": 24, "var": "minBetLabel", "text": "最小:xxxx", "fontSize": 24, "color": "#0012ff" } }, { "type": "Label", "props": { "y": 490, "x": 24, "var": "maxBetLabel", "text": "最大:xxxx", "fontSize": 24, "color": "#0012ff" } }] }, { "type": "Image", "props": { "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "left": 46, "height": 78, "bottom": 26, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "right": 20, "bottom": 26, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 1334, "var": "BetBg", "height": 252, "centerX": 0, "bottom": 0 } }, { "type": "Image", "props": { "var": "ChipsBg" } }, { "type": "Image", "props": { "var": "Bet_More_Btn", "skin": "ui/bet_more_btn.png", "right": 250, "bottom": 230 } }] };
        return BetHUI;
    }(View));
    ui.BetHUI = BetHUI;
})(ui || (ui = {}));
(function (ui) {
    var BetMoreBtnHUI = /** @class */ (function (_super) {
        __extends(BetMoreBtnHUI, _super);
        function BetMoreBtnHUI() {
            return _super.call(this) || this;
        }
        BetMoreBtnHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetMoreBtnHUI.uiView);
        };
        BetMoreBtnHUI.uiView = { "type": "View", "props": { "width": 95, "height": 88 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 95, "visible": false, "name": "masks", "height": 88, "bgColor": "#6dac7c" } }, { "type": "Label", "props": { "y": 10, "width": 40, "valign": "middle", "text": "K", "name": "betName", "left": 45, "height": 40, "fontSize": 40, "color": "#f6320d", "align": "center" } }, { "type": "Label", "props": { "width": 60, "valign": "middle", "text": "12.97", "name": "betOdd", "height": 40, "fontSize": 20, "color": "#076c28", "centerX": 0, "bottom": 0, "align": "center" } }, { "type": "Image", "props": { "y": 15, "skin": "ui/spade.png", "name": "ico", "left": 10 } }, { "type": "Button", "props": { "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "name": "betBtn", "labelSize": 20, "label": "0", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return BetMoreBtnHUI;
    }(View));
    ui.BetMoreBtnHUI = BetMoreBtnHUI;
})(ui || (ui = {}));
(function (ui) {
    var BetMoreBtnVUI = /** @class */ (function (_super) {
        __extends(BetMoreBtnVUI, _super);
        function BetMoreBtnVUI() {
            return _super.call(this) || this;
        }
        BetMoreBtnVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetMoreBtnVUI.uiView);
        };
        BetMoreBtnVUI.uiView = { "type": "View", "props": { "width": 145, "height": 80 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 145, "visible": false, "name": "masks", "height": 80, "bgColor": "#6dac7c" } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 40, "valign": "middle", "text": "K", "name": "betName", "left": 50, "height": 40, "fontSize": 40, "color": "#f6320d", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "y": 28, "x": 0, "width": 60, "valign": "middle", "text": "12.97", "name": "betOdd", "left": 85, "height": 40, "fontSize": 20, "color": "#076c28", "align": "center" } }, { "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/block.png", "name": "ico", "left": 20, "centerY": 0 } }, { "type": "Button", "props": { "y": 40, "x": 74, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "name": "betBtn", "labelSize": 20, "label": "0", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return BetMoreBtnVUI;
    }(View));
    ui.BetMoreBtnVUI = BetMoreBtnVUI;
})(ui || (ui = {}));
(function (ui) {
    var BetMoreHUI = /** @class */ (function (_super) {
        __extends(BetMoreHUI, _super);
        function BetMoreHUI() {
            return _super.call(this) || this;
        }
        BetMoreHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetMoreHUI.uiView);
        };
        BetMoreHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "width": 1257, "var": "Prompt", "skin": "ui/bg_bet_more.png", "height": 592, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Box", "props": { "y": 0, "width": 1257, "var": "Title", "height": 120, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 25, "x": 534, "skin": "ui/bet_title_ico.png" } }, { "type": "Image", "props": { "y": 31, "x": 607, "skin": "ui/bet_title.png", "centerY": 0 } }, { "type": "Image", "props": { "var": "Close", "skin": "ui/bet_close.png", "right": 30, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 122, "width": 1237, "var": "BetBox", "height": 352, "centerX": 0 } }, { "type": "Image", "props": { "width": 156, "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "height": 78, "centerX": 200, "bottom": 20, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "height": 78, "centerX": -200, "bottom": 20, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 40, "width": 60, "var": "time", "left": 60, "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 30, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 30, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }, { "type": "Label", "props": { "width": 1334, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#d00400", "stroke": 5, "fontSize": 60, "color": "#fbff70", "centerY": 100, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] };
        return BetMoreHUI;
    }(View));
    ui.BetMoreHUI = BetMoreHUI;
})(ui || (ui = {}));
(function (ui) {
    var BetMoreVUI = /** @class */ (function (_super) {
        __extends(BetMoreVUI, _super);
        function BetMoreVUI() {
            return _super.call(this) || this;
        }
        BetMoreVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetMoreVUI.uiView);
        };
        BetMoreVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 592, "var": "Prompt", "skin": "ui/bg_bet_more_v.png", "height": 1257, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Box", "props": { "y": 0, "width": 590, "var": "Title", "height": 95, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 12, "x": 210, "skin": "ui/bet_title_ico.png" } }, { "type": "Image", "props": { "y": 18, "x": 280, "skin": "ui/bet_title.png", "centerY": 0 } }, { "type": "Image", "props": { "var": "Close", "skin": "ui/bet_close.png", "right": 20, "centerY": 0 } }] }, { "type": "Box", "props": { "y": 97, "width": 580, "var": "BetBox", "height": 1050, "centerX": 0 } }, { "type": "Image", "props": { "width": 156, "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "right": 60, "height": 78, "bottom": 25, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "left": 60, "height": 78, "bottom": 25, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "y": 30, "width": 60, "var": "time", "left": 50, "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 30, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 30, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }, { "type": "Label", "props": { "y": 677, "x": 385, "width": 750, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#d00400", "stroke": 5, "fontSize": 60, "color": "#fbff70", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] }] };
        return BetMoreVUI;
    }(View));
    ui.BetMoreVUI = BetMoreVUI;
})(ui || (ui = {}));
(function (ui) {
    var BetVUI = /** @class */ (function (_super) {
        __extends(BetVUI, _super);
        function BetVUI() {
            return _super.call(this) || this;
        }
        BetVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetVUI.uiView);
        };
        BetVUI.uiView = { "type": "View", "props": { "y": 0, "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 715, "var": "ChipsBg", "skin": "ui/vertical/bg_chips_v.png", "sizeGrid": "62,0,53,0", "height": 125, "centerX": 0, "bottom": 655 } }, { "type": "Image", "props": { "width": 750, "var": "BetBg", "skin": "ui/vertical/betBg_v.png", "sizeGrid": "0,0,0,0", "height": 642, "centerX": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 750, "var": "BetBox", "skin": "ui/vertical/bet_v1.png", "height": 642, "centerX": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 1283, "width": 156, "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "height": 78, "centerX": 267, "bottom": 12, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 1283, "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "height": 78, "centerX": 14, "bottom": 12, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 715, "var": "Chips", "height": 125, "centerX": 0, "bottom": 655 }, "child": [{ "type": "Button", "props": { "y": 66, "x": 186, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 293, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "10", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 406, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "20", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 512, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "50", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 611, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "100", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 35, "x": 20, "var": "minBetLabel", "text": "最小:xxxx", "fontSize": 24, "color": "#ff001e" } }, { "type": "Label", "props": { "y": 70, "x": 20, "var": "maxBetLabel", "text": "最大:xxxx", "fontSize": 24, "color": "#ff001e" } }] }, { "type": "Label", "props": { "y": 667, "x": 375, "width": 750, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#d00400", "stroke": 5, "fontSize": 60, "color": "#fbff70", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "x": 687, "var": "Bet_More_Btn", "skin": "ui/bet_more_btn.png", "right": 0, "bottom": 640 } }] };
        return BetVUI;
    }(View));
    ui.BetVUI = BetVUI;
})(ui || (ui = {}));
(function (ui) {
    var CardHUI = /** @class */ (function (_super) {
        __extends(CardHUI, _super);
        function CardHUI() {
            return _super.call(this) || this;
        }
        CardHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.CardHUI.uiView);
        };
        CardHUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "compId": 1, "child": [{ "type": "Image", "props": { "width": 735, "var": "goal", "skin": "ui/bg_door.png", "height": 325, "centerX": 20, "bottom": 265 }, "child": [{ "type": "Image", "props": { "y": 187, "x": 44, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 700, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 368, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 250, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 6, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "name", "index": 20 }] } }, { "target": 29, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 29, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 29, "key": "name", "index": 20 }] } }, { "target": 32, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 32, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 32, "key": "name", "index": 20 }] } }, { "target": 1, "keyframes": { "var": [{ "value": "door", "tweenMethod": "linearNone", "tween": false, "target": 1, "key": "var", "index": 0 }, { "value": "", "tweenMethod": "linearNone", "tween": false, "target": 1, "key": "var", "index": 20 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }] };
        return CardHUI;
    }(View));
    ui.CardHUI = CardHUI;
})(ui || (ui = {}));
(function (ui) {
    var CardVUI = /** @class */ (function (_super) {
        __extends(CardVUI, _super);
        function CardVUI() {
            return _super.call(this) || this;
        }
        CardVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.CardVUI.uiView);
        };
        CardVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 561, "var": "goal", "skin": "ui/vertical/bg_door_v.png", "height": 342, "centerX": 0, "bottom": 795 }, "child": [{ "type": "Image", "props": { "y": 187, "x": 20, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 541, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 280, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
        return CardVUI;
    }(View));
    ui.CardVUI = CardVUI;
})(ui || (ui = {}));
(function (ui) {
    var FootballHUI = /** @class */ (function (_super) {
        __extends(FootballHUI, _super);
        function FootballHUI() {
            return _super.call(this) || this;
        }
        FootballHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.FootballHUI.uiView);
        };
        FootballHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Animation", "props": { "y": 715, "x": 667, "width": 60, "var": "football", "source": "FootballAni.ani", "pivotY": 30, "pivotX": 30, "height": 60 } }, { "type": "Label", "props": { "wordWrap": true, "width": 500, "var": "shootInfo", "valign": "middle", "text": "射中啦!", "strokeColor": "#d00400", "stroke": 5, "pivotY": 50, "pivotX": 200, "overflow": "hidden", "height": 100, "fontSize": 50, "font": "Helvetica", "color": "#fbff70", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] };
        return FootballHUI;
    }(View));
    ui.FootballHUI = FootballHUI;
})(ui || (ui = {}));
(function (ui) {
    var FootballVUI = /** @class */ (function (_super) {
        __extends(FootballVUI, _super);
        function FootballVUI() {
            return _super.call(this) || this;
        }
        FootballVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.FootballVUI.uiView);
        };
        FootballVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Animation", "props": { "y": 790, "x": 363, "width": 60, "var": "football", "source": "FootballAni.ani", "pivotY": 30, "pivotX": 30, "height": 60 } }, { "type": "Label", "props": { "y": 385, "wordWrap": true, "width": 500, "var": "shootInfo", "valign": "middle", "text": "射中啦!", "strokeColor": "#d00400", "stroke": 5, "pivotY": 50, "pivotX": 200, "overflow": "hidden", "height": 100, "fontSize": 50, "font": "Helvetica", "color": "#fbff70", "centerX": 0, "bold": true, "align": "center" } }] };
        return FootballVUI;
    }(View));
    ui.FootballVUI = FootballVUI;
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
        GameBgHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "var": "bg", "top": 0, "skin": "ui/bg.png", "right": 0, "left": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 10, "x": 10, "width": 735, "skin": "ui/bg_door.png", "height": 325, "centerX": 20, "bottom": 265 } }] };
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
        GameBgVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "ui/vertical/bg_v.png" } }, { "type": "Image", "props": { "y": 206, "x": 104, "width": 561, "skin": "ui/vertical/bg_door_v.png", "height": 342, "centerX": 0, "bottom": 796, "anchorY": 0, "anchorX": 0 } }] };
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
        GameLoadHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Label", "props": { "y": 375, "x": 667, "var": "progressLabel", "text": "0%", "fontSize": 35, "color": "#208df3", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
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
        GameLoadVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "y": 667, "x": 375, "visible": true, "var": "progressLabel", "text": "0%", "fontSize": 35, "color": "#208df3", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoadVUI;
    }(View));
    ui.GameLoadVUI = GameLoadVUI;
})(ui || (ui = {}));
(function (ui) {
    var HeadHUI = /** @class */ (function (_super) {
        __extends(HeadHUI, _super);
        function HeadHUI() {
            return _super.call(this) || this;
        }
        HeadHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HeadHUI.uiView);
        };
        HeadHUI.uiView = { "type": "View", "props": { "y": 0, "width": 1334, "height": 93 }, "child": [{ "type": "Image", "props": { "width": 1334, "var": "headBg", "top": 0, "skin": "ui/bg_header.png", "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 1334, "var": "headBox", "top": 0, "height": 93, "centerX": 0 }, "child": [{ "type": "Button", "props": { "width": 124, "var": "btnGR", "top": 6, "stateNum": 1, "skin": "ui/gr.png", "right": 274, "height": 72 } }, { "type": "Button", "props": { "width": 124, "var": "btnRule", "top": 6, "stateNum": 1, "skin": "ui/rule.png", "right": 100, "height": 72 } }, { "type": "Image", "props": { "width": 313, "var": "money", "top": 6, "skin": "ui/bg_money.png", "height": 73, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 77, "width": 214, "var": "score", "text": "0", "overflow": "hidden", "height": 32, "fontSize": 32, "color": "#333333", "align": "center" } }] }, { "type": "Image", "props": { "width": 260, "var": "info", "top": 4, "skin": "ui/bg_info.png", "left": 100, "height": 74 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 80, "width": 180, "var": "nickname", "valign": "middle", "text": "测试", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }, { "type": "Image", "props": { "y": 8, "x": 8, "width": 56, "var": "headPic", "skin": "ui/userImg.png", "height": 56 } }, { "type": "Label", "props": { "y": 35, "x": 80, "width": 180, "var": "agent", "valign": "middle", "text": "1", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }] }, { "type": "Image", "props": { "width": 124, "visible": false, "var": "attention", "top": 6, "skin": "ui/attention.png", "left": 100, "height": 72 } }] }] }] };
        return HeadHUI;
    }(View));
    ui.HeadHUI = HeadHUI;
})(ui || (ui = {}));
(function (ui) {
    var HeadVUI = /** @class */ (function (_super) {
        __extends(HeadVUI, _super);
        function HeadVUI() {
            return _super.call(this) || this;
        }
        HeadVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HeadVUI.uiView);
        };
        HeadVUI.uiView = { "type": "View", "props": { "width": 750, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "headBg", "skin": "ui/vertical/bg_header_v.png", "sizeGrid": "30,0,46,0" } }, { "type": "Image", "props": { "var": "btnGR", "top": 110, "skin": "ui/vertical/gr_v.png", "right": 120 } }, { "type": "Image", "props": { "var": "btnRule", "top": 110, "skin": "ui/vertical/rule_v.png", "right": 30 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 750, "var": "headBox", "height": 82 }, "child": [{ "type": "Image", "props": { "width": 260, "var": "info", "skin": "ui/bg_info.png", "left": 50, "height": 76, "centerY": 0 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 80, "width": 180, "var": "nickname", "valign": "middle", "text": "测试", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }, { "type": "Image", "props": { "y": 8, "x": 8, "width": 56, "var": "headPic", "skin": "ui/userImg.png", "height": 56 } }, { "type": "Label", "props": { "y": 35, "x": 80, "width": 180, "var": "agent", "valign": "middle", "text": "1", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }] }, { "type": "Image", "props": { "width": 313, "var": "money", "skin": "ui/bg_money.png", "right": 50, "height": 73, "centerY": 0 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 77, "width": 214, "var": "score", "text": "0", "overflow": "hidden", "height": 32, "fontSize": 32, "color": "#333333", "align": "center" } }] }, { "type": "Image", "props": { "visible": false, "var": "attention", "skin": "ui/attention.png", "left": 100, "centerY": 0 } }] }] };
        return HeadVUI;
    }(View));
    ui.HeadVUI = HeadVUI;
})(ui || (ui = {}));
(function (ui) {
    var HistoryRecordHUI = /** @class */ (function (_super) {
        __extends(HistoryRecordHUI, _super);
        function HistoryRecordHUI() {
            return _super.call(this) || this;
        }
        HistoryRecordHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HistoryRecordHUI.uiView);
        };
        HistoryRecordHUI.uiView = { "type": "View", "props": { "width": 212, "top": 100, "left": 20, "height": 538 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "history", "skin": "ui/bg_histrory.png" }, "child": [{ "type": "Panel", "props": { "y": 15, "x": 0, "width": 210, "var": "listPanel", "height": 500 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 210, "var": "_list", "spaceY": 0, "repeatY": 5, "height": 500 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 210, "renderType": "render", "name": "historyRecord", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 7, "width": 60, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 80 } }, { "type": "Image", "props": { "y": 10, "x": 74, "width": 60, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 80 } }, { "type": "Image", "props": { "y": 10, "x": 141, "width": 60, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 80 } }] }] }] }, { "type": "Image", "props": { "y": 65, "x": 37, "width": 60, "visible": false, "var": "pokerPos0", "skin": "ui/poker/pkbg.png", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 171, "width": 60, "visible": false, "var": "pokerPos1", "skin": "ui/poker/pkbg.png", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 103, "width": 60, "visible": false, "var": "pokerPos2", "skin": "ui/poker/pkbg.png", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
        return HistoryRecordHUI;
    }(View));
    ui.HistoryRecordHUI = HistoryRecordHUI;
})(ui || (ui = {}));
(function (ui) {
    var HistoryRecordVUI = /** @class */ (function (_super) {
        __extends(HistoryRecordVUI, _super);
        function HistoryRecordVUI() {
            return _super.call(this) || this;
        }
        HistoryRecordVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HistoryRecordVUI.uiView);
        };
        HistoryRecordVUI.uiView = { "type": "View", "props": { "width": 280, "left": 0, "height": 635, "bottom": 0 }, "child": [{ "type": "Image", "props": { "width": 280, "var": "history", "height": 635, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Panel", "props": { "y": 0, "x": 0, "width": 280, "var": "listPanel", "height": 635 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 280, "var": "_list", "spaceY": 0, "repeatY": 5, "height": 635 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 280, "renderType": "render", "name": "historyRecord", "height": 127 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 18, "width": 70, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 90 } }, { "type": "Image", "props": { "y": 18, "x": 105, "width": 70, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 90 } }, { "type": "Image", "props": { "y": 18, "x": 192, "width": 70, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 90 } }] }] }] }, { "type": "Image", "props": { "y": 63, "x": 53, "width": 70, "visible": false, "var": "pokerPos0", "skin": "ui/poker/pkbg.png", "height": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 63, "x": 140, "width": 70, "visible": false, "var": "pokerPos1", "skin": "ui/poker/pkbg.png", "height": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 63, "x": 227, "width": 70, "visible": false, "var": "pokerPos2", "skin": "ui/poker/pkbg.png", "height": 90, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
        return HistoryRecordVUI;
    }(View));
    ui.HistoryRecordVUI = HistoryRecordVUI;
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
        LoadingHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": true, "var": "txt", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
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
        LoadingVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": true, "var": "txt", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return LoadingVUI;
    }(View));
    ui.LoadingVUI = LoadingVUI;
})(ui || (ui = {}));
(function (ui) {
    var NoteRecordHUI = /** @class */ (function (_super) {
        __extends(NoteRecordHUI, _super);
        function NoteRecordHUI() {
            return _super.call(this) || this;
        }
        NoteRecordHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.NoteRecordHUI.uiView);
        };
        NoteRecordHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 } }, { "type": "Image", "props": { "var": "prompt", "skin": "ui/bg_record.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 15, "x": 960, "var": "close", "skin": "ui/close.png" } }, { "type": "Image", "props": { "y": 10, "x": 426, "var": "title", "skin": "ui/betrecord.png" } }, { "type": "Panel", "props": { "y": 65, "x": 13, "width": 1000, "height": 510 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "recordBox" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1000, "var": "recordHome", "height": 510 }, "child": [{ "type": "List", "props": { "y": 60, "x": 0, "width": 1000, "var": "_recordList", "spaceY": 0, "repeatY": 5, "height": 450 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1000, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 800, "wordWrap": true, "width": 150, "valign": "middle", "text": "100", "overflow": "scroll", "name": "total", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 30, "x": 168, "wordWrap": true, "width": 120, "valign": "middle", "text": "14:36:25", "overflow": "scroll", "name": "betTime", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 30, "x": 14, "wordWrap": true, "width": 150, "valign": "middle", "text": " 2018/1/12", "overflow": "scroll", "name": "betDate", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 10, "x": 295, "wordWrap": true, "width": 558, "valign": "middle", "text": "31243214234234", "overflow": "scroll", "name": "roundId", "height": 80, "fontSize": 28, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Image", "props": { "y": 34, "x": 950, "skin": "ui/go.png" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 21, "wordWrap": true, "width": 222, "var": "title_time", "valign": "middle", "text": "时间", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 380, "wordWrap": true, "width": 386, "var": "title_round", "valign": "middle", "text": "局号", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 775, "wordWrap": true, "width": 200, "var": "title_result", "valign": "middle", "text": "输赢", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }] }, { "type": "Label", "props": { "y": 225, "x": 350, "wordWrap": true, "width": 300, "var": "noBetData", "valign": "middle", "text": "暂无投注记录", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 225, "x": 350, "wordWrap": true, "width": 300, "var": "isLoading", "valign": "middle", "text": "加载中...", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 1000, "width": 1000, "var": "recordDetail", "height": 510 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 20, "width": 57, "var": "back", "skin": "ui/back.png", "height": 50 } }, { "type": "Box", "props": { "y": 60, "x": 0, "width": 1000, "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 40, "wordWrap": true, "width": 300, "var": "roundId", "valign": "middle", "text": "544656", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 20, "x": 700, "wordWrap": true, "width": 200, "var": "betResult", "valign": "middle", "text": "赢", "overflow": "hidden", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Box", "props": { "y": 10, "x": 370, "width": 215, "height": 80 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "poker1", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": 0, "x": 75, "width": 60, "var": "poker3", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": -1, "x": 150, "width": 60, "var": "poker2", "skin": "ui/poker/pkbg.png", "height": 80 } }] }] }, { "type": "List", "props": { "y": 220, "x": 0, "width": 1000, "var": "betDetailList", "spaceY": 0, "repeatY": 3, "height": 290 }, "child": [{ "type": "Box", "props": { "width": 1000, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "valign": "middle", "text": "1", "overflow": "hidden", "name": "betNum", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "List", "props": { "y": 0, "x": 80, "width": 920, "var": "betTypeList", "spaceX": 0, "repeatX": 5, "name": "betTypeList", "height": 100 }, "child": [{ "type": "Box", "props": { "width": 350, "renderType": "render", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 120, "valign": "middle", "text": "左撞柱", "overflow": "hidden", "name": "betPos", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "right" } }, { "type": "Label", "props": { "y": 0, "x": 140, "wordWrap": true, "width": 100, "valign": "middle", "text": "12.58", "overflow": "hidden", "name": "betOdds", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 260, "wordWrap": true, "width": 100, "valign": "middle", "text": "5", "overflow": "hidden", "name": "betAmount", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 25, "x": 140, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 25, "x": 250, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }] }] }] }] }, { "type": "Box", "props": { "y": 160, "x": 0, "width": 1000, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 40, "wordWrap": true, "width": 236, "var": "betDetails", "valign": "middle", "text": "投注详情如下：", "overflow": "scroll", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }] }] }] }] }] }] };
        return NoteRecordHUI;
    }(View));
    ui.NoteRecordHUI = NoteRecordHUI;
})(ui || (ui = {}));
(function (ui) {
    var NoteRecordVUI = /** @class */ (function (_super) {
        __extends(NoteRecordVUI, _super);
        function NoteRecordVUI() {
            return _super.call(this) || this;
        }
        NoteRecordVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.NoteRecordVUI.uiView);
        };
        NoteRecordVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 } }, { "type": "Image", "props": { "width": 718, "var": "prompt", "skin": "ui/vertical/bg_record_v.png", "height": 849, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 15, "x": 650, "var": "close", "skin": "ui/close.png" } }, { "type": "Image", "props": { "y": 10, "x": 272, "var": "title", "skin": "ui/betrecord.png" } }, { "type": "Panel", "props": { "y": 65, "x": 9, "width": 700, "height": 770 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "recordBox" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 700, "var": "recordHome", "height": 770 }, "child": [{ "type": "List", "props": { "y": 60, "x": 0, "width": 700, "var": "_recordList", "spaceY": 0, "repeatY": 10, "height": 710 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 700, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 22, "x": 510, "wordWrap": true, "width": 150, "valign": "middle", "text": "0", "overflow": "scroll", "name": "total", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 11, "x": 15, "wordWrap": true, "width": 150, "valign": "middle", "text": "14:36:25", "overflow": "scroll", "name": "betTime", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 48, "x": 15, "wordWrap": true, "width": 150, "valign": "middle", "text": " 2018/1/12", "overflow": "scroll", "name": "betDate", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 175, "wordWrap": true, "width": 340, "valign": "middle", "text": "31243214234234", "overflow": "scroll", "name": "roundId", "height": 80, "fontSize": 28, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Image", "props": { "y": 34, "x": 660, "skin": "ui/go.png" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 700 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 8, "wordWrap": true, "width": 163, "var": "title_time", "valign": "middle", "text": "时间", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 175, "wordWrap": true, "width": 340, "var": "title_round", "valign": "middle", "text": "局号", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 485, "wordWrap": true, "width": 200, "var": "title_result", "valign": "middle", "text": "输赢", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }] }, { "type": "Label", "props": { "y": 355, "x": 200, "wordWrap": true, "width": 300, "var": "noBetData", "valign": "middle", "text": "暂无投注记录", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 355, "x": 200, "wordWrap": true, "width": 300, "var": "isLoading", "valign": "middle", "text": "加载中...", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 700, "width": 700, "var": "recordDetail", "height": 770 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 20, "width": 57, "var": "back", "skin": "ui/back.png", "height": 50 } }, { "type": "Box", "props": { "y": 60, "x": 0, "width": 700, "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 40, "wordWrap": true, "width": 230, "var": "roundId", "valign": "middle", "text": "544656", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 22, "x": 520, "wordWrap": true, "width": 170, "var": "betResult", "valign": "middle", "text": "赢", "overflow": "hidden", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Box", "props": { "y": 10, "x": 280, "width": 215, "height": 80 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "poker1", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": 0, "x": 75, "width": 60, "var": "poker3", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": -1, "x": 150, "width": 60, "var": "poker2", "skin": "ui/poker/pkbg.png", "height": 80 } }] }] }, { "type": "List", "props": { "y": 220, "x": 0, "width": 700, "var": "betDetailList", "spaceY": 0, "repeatY": 5, "height": 550 }, "child": [{ "type": "Box", "props": { "width": 700, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "valign": "middle", "text": "1", "overflow": "hidden", "name": "betNum", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "List", "props": { "y": 0, "x": 80, "width": 620, "spaceX": 0, "repeatX": 3, "name": "betTypeList", "height": 100 }, "child": [{ "type": "Box", "props": { "width": 350, "renderType": "render", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 120, "valign": "middle", "text": "左撞柱", "overflow": "hidden", "name": "betPos", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "right" } }, { "type": "Label", "props": { "y": 0, "x": 140, "wordWrap": true, "width": 100, "valign": "middle", "text": "1.85", "overflow": "hidden", "name": "betOdds", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 260, "wordWrap": true, "width": 100, "valign": "middle", "text": "5", "overflow": "hidden", "name": "betAmount", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 25, "x": 140, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 25, "x": 250, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }] }] }] }] }, { "type": "Box", "props": { "y": 160, "x": 0, "width": 700, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 40, "wordWrap": true, "width": 236, "var": "betDetails", "valign": "middle", "text": "投注详情如下：", "overflow": "scroll", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }] }] }] }] }] }] };
        return NoteRecordVUI;
    }(View));
    ui.NoteRecordVUI = NoteRecordVUI;
})(ui || (ui = {}));
(function (ui) {
    var PokerHVUI = /** @class */ (function (_super) {
        __extends(PokerHVUI, _super);
        function PokerHVUI() {
            return _super.call(this) || this;
        }
        PokerHVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PokerHVUI.uiView);
        };
        PokerHVUI.uiView = { "type": "View", "props": { "y": 125, "x": 90, "width": 180, "height": 250, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "width": 180, "var": "img", "skin": "ui/poker/pkbg.png", "layoutEnabled": true, "height": 250 } }] };
        return PokerHVUI;
    }(View));
    ui.PokerHVUI = PokerHVUI;
})(ui || (ui = {}));
(function (ui) {
    var RoundHUI = /** @class */ (function (_super) {
        __extends(RoundHUI, _super);
        function RoundHUI() {
            return _super.call(this) || this;
        }
        RoundHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoundHUI.uiView);
        };
        RoundHUI.uiView = { "type": "View", "props": { "width": 739, "top": 93, "height": 62, "centerX": 20 }, "child": [{ "type": "Image", "props": { "width": 739, "var": "round", "skin": "ui/bg_round.png", "height": 62 }, "child": [{ "type": "Label", "props": { "width": 100, "var": "roundLabel", "valign": "middle", "text": "期号:", "overflow": "hidden", "left": 15, "height": 30, "fontSize": 30, "color": "#000000", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "x": 561, "width": 168, "var": "gameState", "valign": "middle", "text": "等待开始", "overflow": "hidden", "height": 30, "fontSize": 30, "color": "#000000", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "x": 115, "width": 439, "var": "gameRound", "valign": "middle", "height": 25, "fontSize": 26, "color": "#010101", "centerY": 0 } }] }] };
        return RoundHUI;
    }(View));
    ui.RoundHUI = RoundHUI;
})(ui || (ui = {}));
(function (ui) {
    var RoundVUI = /** @class */ (function (_super) {
        __extends(RoundVUI, _super);
        function RoundVUI() {
            return _super.call(this) || this;
        }
        RoundVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoundVUI.uiView);
        };
        RoundVUI.uiView = { "type": "View", "props": { "width": 500, "top": 110, "left": 30, "height": 62 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "var": "round", "skin": "ui/vertical/bg_round_v.png", "sizeGrid": "26,0,26,0", "height": 62 }, "child": [{ "type": "Label", "props": { "width": 78, "var": "roundLabel", "valign": "middle", "text": "期号:", "overflow": "hidden", "left": 10, "height": 30, "fontSize": 30, "color": "#000000", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "x": 355, "width": 140, "var": "gameState", "valign": "middle", "text": "等待开始", "overflow": "hidden", "height": 30, "fontSize": 30, "color": "#000000", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "width": 240, "var": "gameRound", "valign": "middle", "left": 103, "height": 25, "fontSize": 26, "color": "#010101", "centerY": 0 } }] }] };
        return RoundVUI;
    }(View));
    ui.RoundVUI = RoundVUI;
})(ui || (ui = {}));
(function (ui) {
    var RuleHUI = /** @class */ (function (_super) {
        __extends(RuleHUI, _super);
        function RuleHUI() {
            return _super.call(this) || this;
        }
        RuleHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RuleHUI.uiView);
        };
        RuleHUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "var": "prompt", "skin": "ui/bg_record.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 426, "var": "title", "skin": "ui/ruleTitle.png" } }, { "type": "Image", "props": { "y": 15, "x": 960, "var": "close", "skin": "ui/close.png" } }, { "type": "Panel", "props": { "y": 94, "x": 43, "width": 940, "var": "rule", "height": 460 } }] }] }] };
        return RuleHUI;
    }(View));
    ui.RuleHUI = RuleHUI;
})(ui || (ui = {}));
(function (ui) {
    var RuleVUI = /** @class */ (function (_super) {
        __extends(RuleVUI, _super);
        function RuleVUI() {
            return _super.call(this) || this;
        }
        RuleVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RuleVUI.uiView);
        };
        RuleVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "var": "prompt", "skin": "ui/vertical/bg_record_v.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 272, "var": "title", "skin": "ui/ruleTitle.png" } }, { "type": "Image", "props": { "y": 15, "x": 650, "var": "close", "skin": "ui/close.png" } }, { "type": "Panel", "props": { "y": 91, "x": 29, "width": 660, "var": "rule", "height": 720 } }] }] }] };
        return RuleVUI;
    }(View));
    ui.RuleVUI = RuleVUI;
})(ui || (ui = {}));
(function (ui) {
    var TimeHUI = /** @class */ (function (_super) {
        __extends(TimeHUI, _super);
        function TimeHUI() {
            return _super.call(this) || this;
        }
        TimeHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TimeHUI.uiView);
        };
        TimeHUI.uiView = { "type": "View", "props": { "y": 0, "width": 114, "height": 133, "centerX": 20, "bottom": 330 }, "child": [{ "type": "Image", "props": { "y": 67, "x": 57, "width": 114, "var": "timeClock", "skin": "ui/bg_time.png", "height": 133, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 58, "x": 30, "width": 60, "var": "time", "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 30, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 30, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }] };
        return TimeHUI;
    }(View));
    ui.TimeHUI = TimeHUI;
})(ui || (ui = {}));
(function (ui) {
    var TimeVUI = /** @class */ (function (_super) {
        __extends(TimeVUI, _super);
        function TimeVUI() {
            return _super.call(this) || this;
        }
        TimeVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TimeVUI.uiView);
        };
        TimeVUI.uiView = { "type": "View", "props": { "width": 114, "height": 133, "centerX": 0, "bottom": 880 }, "child": [{ "type": "Image", "props": { "y": 66, "x": 57, "width": 114, "var": "timeClock", "skin": "ui/bg_time.png", "height": 133, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 58, "x": 30, "width": 60, "var": "time", "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 30, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 30, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }] };
        return TimeVUI;
    }(View));
    ui.TimeVUI = TimeVUI;
})(ui || (ui = {}));
(function (ui) {
    var TipsHUI = /** @class */ (function (_super) {
        __extends(TipsHUI, _super);
        function TipsHUI() {
            return _super.call(this) || this;
        }
        TipsHUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TipsHUI.uiView);
        };
        TipsHUI.uiView = { "type": "View", "props": { "x": 0, "width": 1334, "visible": true, "renderType": "mask", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "width": 726, "var": "tipmsg", "top": 100, "skin": "ui/tip.png", "left": 160, "height": 442 }, "child": [{ "type": "Image", "props": { "width": 40, "var": "closeBtn", "top": 91, "skin": "ui/tipclose.png", "right": 44 } }, { "type": "Panel", "props": { "y": 195, "x": 275, "width": 360, "var": "tips", "height": 195 } }] }] }] };
        return TipsHUI;
    }(View));
    ui.TipsHUI = TipsHUI;
})(ui || (ui = {}));
(function (ui) {
    var TipsVUI = /** @class */ (function (_super) {
        __extends(TipsVUI, _super);
        function TipsVUI() {
            return _super.call(this) || this;
        }
        TipsVUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TipsVUI.uiView);
        };
        TipsVUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 596, "var": "tipmsg", "top": 100, "skin": "ui/vertical/tip_v.png", "left": 150, "height": 586 }, "child": [{ "type": "Image", "props": { "width": 40, "var": "closeBtn", "top": 239, "skin": "ui/tipclose.png", "right": 44 } }, { "type": "Panel", "props": { "y": 340, "x": 145, "width": 360, "var": "tips", "height": 195 } }] }] }] };
        return TipsVUI;
    }(View));
    ui.TipsVUI = TipsVUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map