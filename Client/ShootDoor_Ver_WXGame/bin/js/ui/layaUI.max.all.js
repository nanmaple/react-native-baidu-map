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
    var BetPanelUI = /** @class */ (function (_super) {
        __extends(BetPanelUI, _super);
        function BetPanelUI() {
            return _super.call(this) || this;
        }
        BetPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetPanelUI.uiView);
        };
        BetPanelUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "width": 1335, "var": "BetBox", "skin": "ui/bg_bet.png", "height": 252, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "y": 22, "x": 627, "width": 133, "visible": true, "name": "IN", "height": 130 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 36, "width": 60, "valign": "middle", "text": "射进", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "x": 36, "width": 60, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 66, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 22, "x": 281, "width": 346, "name": "OUT", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 95, "width": 60, "valign": "middle", "text": "射偏", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 12, "x": 175, "width": 60, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 120, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 22, "x": 761, "width": 346, "name": "HIT", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 95, "width": 60, "valign": "middle", "text": "撞柱", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 12, "x": 175, "width": 60, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 120, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 156, "x": 556, "width": 132, "name": "BIG", "height": 95 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "大:", "height": 40, "fontSize": 24, "color": "#ffbf66", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 50, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#ffbf66", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 47, "x": 66, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 156, "x": 692, "width": 132, "name": "SMALL", "height": 95 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "小:", "height": 40, "fontSize": 24, "color": "#66fcff", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 50, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#66fcff", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 47, "x": 66, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 156, "x": 832, "width": 132, "name": "ODD", "height": 95 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "单:", "height": 40, "fontSize": 24, "color": "#ffbf66", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 50, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#ffbf66", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 47, "x": 66, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 156, "x": 968, "width": 148, "name": "EVEN", "height": 95 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "双:", "height": 40, "fontSize": 24, "color": "#66fcff", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 50, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#66fcff", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 47, "x": 74, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 157, "x": 268, "width": 148, "name": "RED", "height": 95 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "红:", "height": 40, "fontSize": 24, "color": "#ffbf66", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 50, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#ffbf66", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 47, "x": 74, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 156, "x": 420, "width": 132, "name": "BLACK", "height": 95 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "黑:", "height": 40, "fontSize": 24, "color": "#66fcff", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 50, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#66fcff", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 47, "x": 66, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 90, "x": 279, "width": 173, "name": "LOUT", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 25, "width": 60, "valign": "middle", "text": "左", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 12, "x": 80, "width": 80, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 50, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 90, "x": 453, "width": 173, "name": "ROUT", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 25, "width": 60, "valign": "middle", "text": "右", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 12, "x": 80, "width": 80, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 50, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 90, "x": 764, "width": 173, "name": "LHIT", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 25, "width": 60, "valign": "middle", "text": "左", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 12, "x": 80, "width": 80, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 50, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 90, "x": 938, "width": 173, "name": "RHIT", "height": 65 }, "child": [{ "type": "Label", "props": { "y": 12, "x": 25, "width": 60, "valign": "middle", "text": "右", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 12, "x": 80, "width": 80, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 32, "x": 50, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Label", "props": { "width": 1334, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#d00400", "stroke": 5, "fontSize": 60, "color": "#fbff70", "centerY": 100, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "width": 152, "var": "Chips", "top": 100, "skin": "ui/bg_chips.png", "right": 22 }, "child": [{ "type": "Button", "props": { "y": 60, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 148, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "10", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 233, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "20", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 317, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "50", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 403, "x": 75, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "100", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 455, "x": 24, "var": "minBetLabel", "text": "最小:xxxx", "fontSize": 24, "color": "#0012ff" } }, { "type": "Label", "props": { "y": 490, "x": 24, "var": "maxBetLabel", "text": "最大:xxxx", "fontSize": 24, "color": "#0012ff" } }] }, { "type": "Image", "props": { "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "left": 46, "height": 78, "bottom": 26, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "right": 20, "bottom": 26, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "width": 1334, "var": "BetBg", "height": 252, "centerX": 0, "bottom": 0 } }, { "type": "Image", "props": { "var": "ChipsBg" } }] };
        return BetPanelUI;
    }(View));
    ui.BetPanelUI = BetPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var BetPanel_VerUI = /** @class */ (function (_super) {
        __extends(BetPanel_VerUI, _super);
        function BetPanel_VerUI() {
            return _super.call(this) || this;
        }
        BetPanel_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.BetPanel_VerUI.uiView);
        };
        BetPanel_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 715, "var": "ChipsBg", "skin": "ui/vertical/bg_chips_v.png", "sizeGrid": "62,0,53,0", "height": 125, "centerX": 0, "bottom": 655 } }, { "type": "Image", "props": { "width": 750, "var": "BetBg", "skin": "ui/vertical/betBg_v.png", "sizeGrid": "0,0,0,0", "height": 642, "centerX": 0, "bottom": 0 } }, { "type": "Image", "props": { "width": 750, "var": "BetBox", "skin": "ui/vertical/bet_v1.png", "height": 642, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "y": 8, "x": 281, "width": 470, "visible": true, "name": "IN", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 30, "width": 60, "valign": "middle", "text": "射进", "name": "numLabel", "left": 155, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 30, "width": 60, "valign": "middle", "text": "---", "name": "numBet", "left": 247, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 50, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "name": "button", "left": 155, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 109, "x": 441, "width": 155, "name": "OUT", "height": 105 }, "child": [{ "type": "Label", "props": { "y": 15, "width": 60, "valign": "middle", "text": "射偏", "left": 48, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 80, "valign": "middle", "text": "---", "left": 38, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 30, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "left": 42, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 214, "x": 441, "width": 155, "name": "HIT", "height": 105 }, "child": [{ "type": "Label", "props": { "y": 15, "width": 60, "valign": "middle", "text": "撞柱", "left": 48, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 80, "valign": "middle", "text": "---", "left": 38, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 30, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "left": 42, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 464, "x": 281, "width": 235, "name": "BIG", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 47, "width": 60, "valign": "middle", "text": "大:", "height": 40, "fontSize": 24, "color": "#ffbf66", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 125, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#ffbf66", "align": "center" } }, { "type": "Button", "props": { "y": 35, "x": 77, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 464, "x": 517, "width": 235, "name": "SMALL", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 47, "width": 60, "valign": "middle", "text": "小:", "height": 40, "fontSize": 24, "color": "#66fcff", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 125, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#66fcff", "align": "center" } }, { "type": "Button", "props": { "y": 35, "x": 77, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 320, "x": 281, "width": 235, "name": "ODD", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 47, "width": 60, "valign": "middle", "text": "单:", "height": 40, "fontSize": 24, "color": "#ffbf66", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 125, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#ffbf66", "align": "center" } }, { "type": "Button", "props": { "y": 35, "x": 77, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 320, "x": 517, "width": 235, "name": "EVEN", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 47, "width": 60, "valign": "middle", "text": "双:", "height": 40, "fontSize": 24, "color": "#66fcff", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 125, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#66fcff", "align": "center" } }, { "type": "Button", "props": { "y": 35, "x": 77, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 391, "x": 281, "width": 235, "name": "RED", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 47, "width": 60, "valign": "middle", "text": "红:", "height": 40, "fontSize": 24, "color": "#ffbf66", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 125, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#ffbf66", "align": "center" } }, { "type": "Button", "props": { "y": 35, "x": 77, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 391, "x": 517, "width": 235, "name": "BLACK", "height": 70 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 47, "width": 60, "valign": "middle", "text": "黑:", "height": 40, "fontSize": 24, "color": "#66fcff", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 125, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#66fcff", "align": "center" } }, { "type": "Button", "props": { "y": 35, "x": 77, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 109, "x": 281, "width": 155, "name": "LOUT", "height": 105 }, "child": [{ "type": "Label", "props": { "y": 15, "width": 60, "valign": "middle", "text": "左", "left": 48, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 80, "valign": "middle", "text": "---", "left": 38, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 30, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "left": 42, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 109, "x": 593, "width": 155, "name": "ROUT", "height": 105 }, "child": [{ "type": "Label", "props": { "y": 15, "width": 60, "valign": "middle", "text": "右", "left": 48, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 80, "valign": "middle", "text": "---", "left": 38, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 30, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "left": 42, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 214, "x": 281, "width": 155, "name": "LHIT", "height": 105 }, "child": [{ "type": "Label", "props": { "y": 15, "width": 60, "valign": "middle", "text": "左", "left": 48, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 80, "valign": "middle", "text": "---", "left": 38, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 30, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "left": 42, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 214, "x": 593, "width": 155, "name": "RHIT", "height": 105 }, "child": [{ "type": "Label", "props": { "y": 15, "width": 60, "valign": "middle", "text": "右", "left": 48, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 80, "valign": "middle", "text": "---", "left": 38, "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 30, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "left": 42, "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Image", "props": { "y": 1283, "width": 156, "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "height": 78, "centerX": 267, "bottom": 12, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 1283, "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "height": 78, "centerX": 14, "bottom": 12, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Box", "props": { "width": 715, "var": "Chips", "height": 125, "centerX": 0, "bottom": 655 }, "child": [{ "type": "Button", "props": { "y": 66, "x": 186, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 293, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "10", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 406, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "20", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 512, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "50", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 66, "x": 611, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "100", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 35, "x": 20, "var": "minBetLabel", "text": "最小:xxxx", "fontSize": 24, "color": "#ff001e" } }, { "type": "Label", "props": { "y": 70, "x": 20, "var": "maxBetLabel", "text": "最大:xxxx", "fontSize": 24, "color": "#ff001e" } }] }, { "type": "Label", "props": { "y": 667, "x": 375, "width": 750, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#d00400", "stroke": 5, "fontSize": 60, "color": "#fbff70", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }] };
        return BetPanel_VerUI;
    }(View));
    ui.BetPanel_VerUI = BetPanel_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var CardPanelUI = /** @class */ (function (_super) {
        __extends(CardPanelUI, _super);
        function CardPanelUI() {
            return _super.call(this) || this;
        }
        CardPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.CardPanelUI.uiView);
        };
        CardPanelUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "compId": 1, "child": [{ "type": "Image", "props": { "width": 735, "var": "goal", "skin": "ui/bg_door.png", "height": 325, "centerX": 20, "bottom": 265 }, "child": [{ "type": "Image", "props": { "y": 187, "x": 44, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 700, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 368, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 250, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 6, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "name", "index": 20 }] } }, { "target": 29, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 29, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 29, "key": "name", "index": 20 }] } }, { "target": 32, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 32, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 32, "key": "name", "index": 20 }] } }, { "target": 1, "keyframes": { "var": [{ "value": "door", "tweenMethod": "linearNone", "tween": false, "target": 1, "key": "var", "index": 0 }, { "value": "", "tweenMethod": "linearNone", "tween": false, "target": 1, "key": "var", "index": 20 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }] };
        return CardPanelUI;
    }(View));
    ui.CardPanelUI = CardPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var CardPanel_VerUI = /** @class */ (function (_super) {
        __extends(CardPanel_VerUI, _super);
        function CardPanel_VerUI() {
            return _super.call(this) || this;
        }
        CardPanel_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.CardPanel_VerUI.uiView);
        };
        CardPanel_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 561, "var": "goal", "skin": "ui/vertical/bg_door_v.png", "height": 342, "centerX": 0, "bottom": 795 }, "child": [{ "type": "Image", "props": { "y": 187, "x": 20, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 541, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 187, "x": 280, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
        return CardPanel_VerUI;
    }(View));
    ui.CardPanel_VerUI = CardPanel_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var FootballUI = /** @class */ (function (_super) {
        __extends(FootballUI, _super);
        function FootballUI() {
            return _super.call(this) || this;
        }
        FootballUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.FootballUI.uiView);
        };
        FootballUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Animation", "props": { "y": 715, "x": 667, "width": 60, "var": "football", "source": "FootballAni.ani", "pivotY": 30, "pivotX": 30, "height": 60 } }, { "type": "Label", "props": { "wordWrap": true, "width": 500, "var": "shootInfo", "valign": "middle", "text": "射中啦!", "strokeColor": "#d00400", "stroke": 5, "pivotY": 50, "pivotX": 200, "overflow": "hidden", "height": 100, "fontSize": 50, "font": "Helvetica", "color": "#fbff70", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] };
        return FootballUI;
    }(View));
    ui.FootballUI = FootballUI;
})(ui || (ui = {}));
(function (ui) {
    var Football_VerUI = /** @class */ (function (_super) {
        __extends(Football_VerUI, _super);
        function Football_VerUI() {
            return _super.call(this) || this;
        }
        Football_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Football_VerUI.uiView);
        };
        Football_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Animation", "props": { "y": 790, "x": 363, "width": 60, "var": "football", "source": "FootballAni.ani", "pivotY": 30, "pivotX": 30, "height": 60 } }, { "type": "Label", "props": { "y": 385, "wordWrap": true, "width": 500, "var": "shootInfo", "valign": "middle", "text": "射中啦!", "strokeColor": "#d00400", "stroke": 5, "pivotY": 50, "pivotX": 200, "overflow": "hidden", "height": 100, "fontSize": 50, "font": "Helvetica", "color": "#fbff70", "centerX": 0, "bold": true, "align": "center" } }] };
        return Football_VerUI;
    }(View));
    ui.Football_VerUI = Football_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBgUI = /** @class */ (function (_super) {
        __extends(GameBgUI, _super);
        function GameBgUI() {
            return _super.call(this) || this;
        }
        GameBgUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBgUI.uiView);
        };
        GameBgUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/bg.png", "height": 750 } }] };
        return GameBgUI;
    }(View));
    ui.GameBgUI = GameBgUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBg_VerUI = /** @class */ (function (_super) {
        __extends(GameBg_VerUI, _super);
        function GameBg_VerUI() {
            return _super.call(this) || this;
        }
        GameBg_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBg_VerUI.uiView);
        };
        GameBg_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/vertical/bg_v.png" } }] };
        return GameBg_VerUI;
    }(View));
    ui.GameBg_VerUI = GameBg_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var GameLoadUI = /** @class */ (function (_super) {
        __extends(GameLoadUI, _super);
        function GameLoadUI() {
            return _super.call(this) || this;
        }
        GameLoadUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameLoadUI.uiView);
        };
        GameLoadUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Label", "props": { "var": "progressLabel", "text": "0%", "fontSize": 32, "color": "#0f85aa", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoadUI;
    }(View));
    ui.GameLoadUI = GameLoadUI;
})(ui || (ui = {}));
(function (ui) {
    var GameLoad_VerUI = /** @class */ (function (_super) {
        __extends(GameLoad_VerUI, _super);
        function GameLoad_VerUI() {
            return _super.call(this) || this;
        }
        GameLoad_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameLoad_VerUI.uiView);
        };
        GameLoad_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Label", "props": { "var": "progressLabel", "text": "0%", "fontSize": 32, "color": "#0f85aa", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoad_VerUI;
    }(View));
    ui.GameLoad_VerUI = GameLoad_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var Game_VerUI = /** @class */ (function (_super) {
        __extends(Game_VerUI, _super);
        function Game_VerUI() {
            return _super.call(this) || this;
        }
        Game_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Game_VerUI.uiView);
        };
        Game_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/vertical/bg_v.png" } }] };
        return Game_VerUI;
    }(View));
    ui.Game_VerUI = Game_VerUI;
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
        HeadPanelUI.uiView = { "type": "View", "props": { "y": 0, "width": 1334, "height": 100 }, "child": [{ "type": "Image", "props": { "width": 1334, "var": "headBg", "top": 0, "skin": "ui/bg_header.png", "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "var": "headBox", "top": 0, "height": 93, "centerX": 0 }, "child": [{ "type": "Button", "props": { "y": 4, "x": 932, "width": 124, "var": "btnGR", "stateNum": 1, "skin": "ui/gr.png", "height": 72 } }, { "type": "Button", "props": { "y": 4, "x": 1130, "width": 124, "var": "btnRule", "stateNum": 1, "skin": "ui/rule.png", "height": 72 } }, { "type": "Image", "props": { "y": 5, "x": 510, "width": 313, "var": "money", "skin": "ui/bg_money.png", "height": 73 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 77, "width": 214, "var": "score", "text": "0", "overflow": "hidden", "height": 32, "fontSize": 32, "color": "#333333", "align": "center" } }] }, { "type": "Image", "props": { "y": 4, "x": 76, "width": 260, "var": "info", "skin": "ui/bg_info.png", "height": 76 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 80, "width": 180, "var": "nickname", "valign": "middle", "text": "测试", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }, { "type": "Image", "props": { "y": 8, "x": 8, "width": 56, "var": "headPic", "skin": "ui/userImg.png", "height": 56 } }, { "type": "Label", "props": { "y": 35, "x": 80, "width": 180, "var": "agent", "valign": "middle", "text": "1", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }] }, { "type": "Image", "props": { "y": 4, "x": 130, "visible": false, "var": "attention", "skin": "ui/attention.png" } }] }] }] };
        return HeadPanelUI;
    }(View));
    ui.HeadPanelUI = HeadPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var HeadPanel_VerUI = /** @class */ (function (_super) {
        __extends(HeadPanel_VerUI, _super);
        function HeadPanel_VerUI() {
            return _super.call(this) || this;
        }
        HeadPanel_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HeadPanel_VerUI.uiView);
        };
        HeadPanel_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "headBg", "skin": "ui/vertical/bg_header_v.png", "sizeGrid": "30,0,46,0" } }, { "type": "Image", "props": { "var": "btnGR", "top": 110, "skin": "ui/vertical/gr_v.png", "right": 120 } }, { "type": "Image", "props": { "var": "btnRule", "top": 110, "skin": "ui/vertical/rule_v.png", "right": 30 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 750, "var": "headBox", "height": 82 }, "child": [{ "type": "Image", "props": { "width": 260, "var": "info", "skin": "ui/bg_info.png", "left": 50, "height": 76, "centerY": 0 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 80, "width": 180, "var": "nickname", "valign": "middle", "text": "测试", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }, { "type": "Image", "props": { "y": 8, "x": 8, "width": 56, "var": "headPic", "skin": "ui/userImg.png", "height": 56 } }, { "type": "Label", "props": { "y": 35, "x": 80, "width": 180, "var": "agent", "valign": "middle", "text": "1", "overflow": "hidden", "height": 25, "fontSize": 20, "color": "#333333", "align": "left" } }] }, { "type": "Image", "props": { "width": 313, "var": "money", "skin": "ui/bg_money.png", "right": 50, "height": 73, "centerY": 0 }, "child": [{ "type": "Label", "props": { "y": 15, "x": 77, "width": 214, "var": "score", "text": "0", "overflow": "hidden", "height": 32, "fontSize": 32, "color": "#333333", "align": "center" } }] }, { "type": "Image", "props": { "visible": false, "var": "attention", "skin": "ui/attention.png", "left": 100, "centerY": 0 } }] }] };
        return HeadPanel_VerUI;
    }(View));
    ui.HeadPanel_VerUI = HeadPanel_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var HistoryRecordUI = /** @class */ (function (_super) {
        __extends(HistoryRecordUI, _super);
        function HistoryRecordUI() {
            return _super.call(this) || this;
        }
        HistoryRecordUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HistoryRecordUI.uiView);
        };
        HistoryRecordUI.uiView = { "type": "View", "props": { "width": 212, "top": 100, "left": 20, "height": 538 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "history", "skin": "ui/bg_histrory.png" }, "child": [{ "type": "Image", "props": { "y": 65, "x": 37, "width": 60, "visible": false, "var": "pokerPos0", "skin": "ui/poker/pkbg.png", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 171, "width": 60, "visible": false, "var": "pokerPos1", "skin": "ui/poker/pkbg.png", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 65, "x": 103, "width": 60, "visible": false, "var": "pokerPos2", "skin": "ui/poker/pkbg.png", "height": 80, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Panel", "props": { "y": 15, "x": 0, "width": 210, "var": "listPanel", "height": 500 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 210, "var": "_list", "spaceY": 0, "repeatY": 5, "height": 500 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 210, "renderType": "render", "name": "historyRecord", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 7, "width": 60, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 80 } }, { "type": "Image", "props": { "y": 10, "x": 74, "width": 60, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 80 } }, { "type": "Image", "props": { "y": 10, "x": 141, "width": 60, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 80 } }] }] }] }] }] };
        return HistoryRecordUI;
    }(View));
    ui.HistoryRecordUI = HistoryRecordUI;
})(ui || (ui = {}));
(function (ui) {
    var HistoryRecord_VerUI = /** @class */ (function (_super) {
        __extends(HistoryRecord_VerUI, _super);
        function HistoryRecord_VerUI() {
            return _super.call(this) || this;
        }
        HistoryRecord_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.HistoryRecord_VerUI.uiView);
        };
        HistoryRecord_VerUI.uiView = { "type": "View", "props": { "y": 0, "width": 280, "left": 0, "height": 635 }, "child": [{ "type": "Image", "props": { "var": "history", "top": 0, "right": 0, "left": 0, "bottom": 0 }, "child": [{ "type": "Image", "props": { "y": 63, "x": 53, "width": 70, "visible": false, "var": "pokerPos0", "skin": "ui/poker/pkbg.png", "height": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 63, "x": 227, "width": 70, "visible": false, "var": "pokerPos1", "skin": "ui/poker/pkbg.png", "height": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 63, "x": 140, "width": 70, "visible": false, "var": "pokerPos2", "skin": "ui/poker/pkbg.png", "height": 90, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Panel", "props": { "y": 0, "x": 0, "width": 280, "var": "listPanel", "height": 635 }, "child": [{ "type": "List", "props": { "y": 0, "x": 0, "width": 280, "var": "_list", "spaceY": 0, "repeatY": 5, "height": 635 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 280, "renderType": "render", "name": "historyRecord", "height": 127 }, "child": [{ "type": "Image", "props": { "y": 18, "x": 18, "width": 70, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 90 } }, { "type": "Image", "props": { "y": 18, "x": 105, "width": 70, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 90 } }, { "type": "Image", "props": { "y": 18, "x": 192, "width": 70, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 90 } }] }] }] }] }] };
        return HistoryRecord_VerUI;
    }(View));
    ui.HistoryRecord_VerUI = HistoryRecord_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingUI = /** @class */ (function (_super) {
        __extends(LoadingUI, _super);
        function LoadingUI() {
            return _super.call(this) || this;
        }
        LoadingUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingUI.uiView);
        };
        LoadingUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/mask.png" } }, { "type": "Label", "props": { "width": 242.798828125, "visible": false, "var": "connectServer", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return LoadingUI;
    }(View));
    ui.LoadingUI = LoadingUI;
})(ui || (ui = {}));
(function (ui) {
    var Loading_VerUI = /** @class */ (function (_super) {
        __extends(Loading_VerUI, _super);
        function Loading_VerUI() {
            return _super.call(this) || this;
        }
        Loading_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Loading_VerUI.uiView);
        };
        Loading_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": -2, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": false, "var": "connectServer", "text": "connecting server...", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return Loading_VerUI;
    }(View));
    ui.Loading_VerUI = Loading_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var NoteRecordUI = /** @class */ (function (_super) {
        __extends(NoteRecordUI, _super);
        function NoteRecordUI() {
            return _super.call(this) || this;
        }
        NoteRecordUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.NoteRecordUI.uiView);
        };
        NoteRecordUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 } }, { "type": "Image", "props": { "var": "prompt", "skin": "ui/bg_record.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 15, "x": 960, "var": "close", "skin": "ui/close.png" } }, { "type": "Image", "props": { "y": 10, "x": 426, "var": "title", "skin": "ui/betrecord.png" } }, { "type": "Panel", "props": { "y": 65, "x": 13, "width": 1000, "height": 510 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "recordBox" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1000, "var": "recordHome", "height": 510 }, "child": [{ "type": "List", "props": { "y": 60, "x": 0, "width": 1000, "var": "_recordList", "spaceY": 0, "repeatY": 5, "height": 450 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 1000, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 800, "wordWrap": true, "width": 150, "valign": "middle", "text": "100", "overflow": "scroll", "name": "total", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 30, "x": 168, "wordWrap": true, "width": 120, "valign": "middle", "text": "14:36:25", "overflow": "scroll", "name": "betTime", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 30, "x": 14, "wordWrap": true, "width": 150, "valign": "middle", "text": " 2018/1/12", "overflow": "scroll", "name": "betDate", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 10, "x": 295, "wordWrap": true, "width": 558, "valign": "middle", "text": "31243214234234", "overflow": "scroll", "name": "roundId", "height": 80, "fontSize": 28, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Image", "props": { "y": 34, "x": 950, "skin": "ui/go.png" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 21, "wordWrap": true, "width": 222, "var": "title_time", "valign": "middle", "text": "时间", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 380, "wordWrap": true, "width": 386, "var": "title_round", "valign": "middle", "text": "局号", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 775, "wordWrap": true, "width": 200, "var": "title_result", "valign": "middle", "text": "输赢", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }] }, { "type": "Label", "props": { "y": 225, "x": 350, "wordWrap": true, "width": 300, "var": "noBetData", "valign": "middle", "text": "暂无投注记录", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 225, "x": 350, "wordWrap": true, "width": 300, "var": "isLoading", "valign": "middle", "text": "加载中...", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 1000, "width": 1000, "var": "recordDetail", "height": 510 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 20, "width": 57, "var": "back", "skin": "ui/back.png", "height": 50 } }, { "type": "Box", "props": { "y": 60, "x": 0, "width": 1000, "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 40, "wordWrap": true, "width": 300, "var": "roundId", "valign": "middle", "text": "544656", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 20, "x": 700, "wordWrap": true, "width": 200, "var": "betResult", "valign": "middle", "text": "赢", "overflow": "hidden", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Box", "props": { "y": 10, "x": 370, "width": 215, "height": 80 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "poker1", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": 0, "x": 75, "width": 60, "var": "poker3", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": -1, "x": 150, "width": 60, "var": "poker2", "skin": "ui/poker/pkbg.png", "height": 80 } }] }] }, { "type": "List", "props": { "y": 220, "x": 0, "width": 1000, "var": "betDetailList", "spaceY": 0, "repeatY": 3, "height": 290 }, "child": [{ "type": "Box", "props": { "width": 1000, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "valign": "middle", "text": "1", "overflow": "hidden", "name": "betNum", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "List", "props": { "y": 0, "x": 80, "width": 920, "var": "betTypeList", "spaceX": 0, "repeatX": 5, "name": "betTypeList", "height": 100 }, "child": [{ "type": "Box", "props": { "width": 350, "renderType": "render", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 120, "valign": "middle", "text": "左撞柱", "overflow": "hidden", "name": "betPos", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "right" } }, { "type": "Label", "props": { "y": 0, "x": 140, "wordWrap": true, "width": 100, "valign": "middle", "text": "12.58", "overflow": "hidden", "name": "betOdds", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 260, "wordWrap": true, "width": 100, "valign": "middle", "text": "5", "overflow": "hidden", "name": "betAmount", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 25, "x": 140, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 25, "x": 250, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }] }] }] }] }, { "type": "Box", "props": { "y": 160, "x": 0, "width": 1000, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 40, "wordWrap": true, "width": 236, "var": "betDetails", "valign": "middle", "text": "投注详情如下：", "overflow": "scroll", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 1000, "skin": "ui/recordLine.png", "height": 1 } }] }] }] }] }] }] };
        return NoteRecordUI;
    }(View));
    ui.NoteRecordUI = NoteRecordUI;
})(ui || (ui = {}));
(function (ui) {
    var NoteRecord_VerUI = /** @class */ (function (_super) {
        __extends(NoteRecord_VerUI, _super);
        function NoteRecord_VerUI() {
            return _super.call(this) || this;
        }
        NoteRecord_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.NoteRecord_VerUI.uiView);
        };
        NoteRecord_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 } }, { "type": "Image", "props": { "width": 718, "var": "prompt", "skin": "ui/vertical/bg_record_v.png", "height": 849, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 15, "x": 650, "var": "close", "skin": "ui/close.png" } }, { "type": "Image", "props": { "y": 10, "x": 272, "var": "title", "skin": "ui/betrecord.png" } }, { "type": "Panel", "props": { "y": 65, "x": 9, "width": 700, "height": 770 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "recordBox" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 700, "var": "recordHome", "height": 770 }, "child": [{ "type": "List", "props": { "y": 60, "x": 0, "width": 700, "var": "_recordList", "spaceY": 0, "repeatY": 10, "height": 710 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 700, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 22, "x": 510, "wordWrap": true, "width": 150, "valign": "middle", "text": "0", "overflow": "scroll", "name": "total", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 11, "x": 15, "wordWrap": true, "width": 150, "valign": "middle", "text": "14:36:25", "overflow": "scroll", "name": "betTime", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 48, "x": 15, "wordWrap": true, "width": 150, "valign": "middle", "text": " 2018/1/12", "overflow": "scroll", "name": "betDate", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 175, "wordWrap": true, "width": 340, "valign": "middle", "text": "31243214234234", "overflow": "scroll", "name": "roundId", "height": 80, "fontSize": 28, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Image", "props": { "y": 34, "x": 660, "skin": "ui/go.png" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 700 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 8, "wordWrap": true, "width": 163, "var": "title_time", "valign": "middle", "text": "时间", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 175, "wordWrap": true, "width": 340, "var": "title_round", "valign": "middle", "text": "局号", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 485, "wordWrap": true, "width": 200, "var": "title_result", "valign": "middle", "text": "输赢", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }] }, { "type": "Label", "props": { "y": 355, "x": 200, "wordWrap": true, "width": 300, "var": "noBetData", "valign": "middle", "text": "暂无投注记录", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 355, "x": 200, "wordWrap": true, "width": 300, "var": "isLoading", "valign": "middle", "text": "加载中...", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 700, "width": 700, "var": "recordDetail", "height": 770 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 20, "width": 57, "var": "back", "skin": "ui/back.png", "height": 50 } }, { "type": "Box", "props": { "y": 60, "x": 0, "width": 700, "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 40, "wordWrap": true, "width": 280, "var": "roundId", "valign": "middle", "text": "544656", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 22, "x": 530, "wordWrap": true, "width": 152, "var": "betResult", "valign": "middle", "text": "赢", "overflow": "hidden", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Box", "props": { "y": 10, "x": 280, "width": 215, "height": 80 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "poker1", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": 0, "x": 75, "width": 60, "var": "poker3", "skin": "ui/poker/pkbg.png", "height": 80 } }, { "type": "Image", "props": { "y": -1, "x": 150, "width": 60, "var": "poker2", "skin": "ui/poker/pkbg.png", "height": 80 } }] }] }, { "type": "List", "props": { "y": 220, "x": 0, "width": 700, "var": "betDetailList", "spaceY": 0, "repeatY": 5, "height": 550 }, "child": [{ "type": "Box", "props": { "width": 700, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "valign": "middle", "text": "1", "overflow": "hidden", "name": "betNum", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "List", "props": { "y": 0, "x": 80, "width": 620, "spaceX": 0, "repeatX": 3, "name": "betTypeList", "height": 100 }, "child": [{ "type": "Box", "props": { "width": 350, "renderType": "render", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 120, "valign": "middle", "text": "左撞柱", "overflow": "hidden", "name": "betPos", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "right" } }, { "type": "Label", "props": { "y": 0, "x": 140, "wordWrap": true, "width": 100, "valign": "middle", "text": "1.85", "overflow": "hidden", "name": "betOdds", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 260, "wordWrap": true, "width": 100, "valign": "middle", "text": "5", "overflow": "hidden", "name": "betAmount", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 25, "x": 140, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 25, "x": 250, "wordWrap": true, "width": 1, "valign": "middle", "rotation": 15, "overflow": "hidden", "name": "line", "height": 50, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }] }] }] }] }, { "type": "Box", "props": { "y": 160, "x": 0, "width": 700, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 40, "wordWrap": true, "width": 236, "var": "betDetails", "valign": "middle", "text": "投注详情如下：", "overflow": "scroll", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 700, "skin": "ui/recordLine.png", "height": 1 } }] }] }] }] }] }] };
        return NoteRecord_VerUI;
    }(View));
    ui.NoteRecord_VerUI = NoteRecord_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var PromptUI = /** @class */ (function (_super) {
        __extends(PromptUI, _super);
        function PromptUI() {
            return _super.call(this) || this;
        }
        PromptUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PromptUI.uiView);
        };
        PromptUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 209, "x": 375, "width": 584, "var": "prompt", "skin": "ui/bg_alert.png", "sizeGrid": "15,15,11,13", "height": 332, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 101, "x": 50, "wordWrap": true, "width": 484, "var": "promptTxt", "valign": "top", "overflow": "scroll", "height": 130, "fontSize": 32, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 240, "x": 244, "width": 94, "var": "sureBtn", "skin": "ui/ok.png", "height": 54 } }, { "type": "Image", "props": { "y": 20, "x": 214, "var": "title", "skin": "ui/title.png" } }] }] }] };
        return PromptUI;
    }(View));
    ui.PromptUI = PromptUI;
})(ui || (ui = {}));
(function (ui) {
    var Prompt_VerUI = /** @class */ (function (_super) {
        __extends(Prompt_VerUI, _super);
        function Prompt_VerUI() {
            return _super.call(this) || this;
        }
        Prompt_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Prompt_VerUI.uiView);
        };
        Prompt_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 209, "x": 375, "width": 584, "var": "prompt", "skin": "ui/bg_alert.png", "sizeGrid": "15,15,11,13", "height": 332, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 101, "x": 50, "wordWrap": true, "width": 484, "var": "promptTxt", "valign": "top", "overflow": "scroll", "height": 130, "fontSize": 32, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 240, "x": 244, "width": 94, "var": "sureBtn", "skin": "ui/ok.png", "height": 54 } }, { "type": "Image", "props": { "y": 20, "x": 214, "var": "title", "skin": "ui/title.png" } }] }] }] };
        return Prompt_VerUI;
    }(View));
    ui.Prompt_VerUI = Prompt_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var RoundPanelUI = /** @class */ (function (_super) {
        __extends(RoundPanelUI, _super);
        function RoundPanelUI() {
            return _super.call(this) || this;
        }
        RoundPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoundPanelUI.uiView);
        };
        RoundPanelUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "var": "round", "top": 98, "skin": "ui/bg_round.png", "centerX": 20 }, "child": [{ "type": "Label", "props": { "y": 16, "x": 15, "width": 100, "var": "roundLabel", "text": "期号:", "overflow": "hidden", "height": 30, "fontSize": 30, "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 16, "x": 561, "width": 168, "var": "gameState", "text": "等待开始", "overflow": "hidden", "height": 30, "fontSize": 30, "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 18, "x": 115, "width": 439, "var": "gameRound", "valign": "middle", "height": 25, "fontSize": 26, "color": "#010101" } }] }] };
        return RoundPanelUI;
    }(View));
    ui.RoundPanelUI = RoundPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var RoundPanel_VerUI = /** @class */ (function (_super) {
        __extends(RoundPanel_VerUI, _super);
        function RoundPanel_VerUI() {
            return _super.call(this) || this;
        }
        RoundPanel_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RoundPanel_VerUI.uiView);
        };
        RoundPanel_VerUI.uiView = { "type": "View", "props": { "width": 525, "top": 110, "left": 30, "height": 65 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "round", "skin": "ui/vertical/bg_round_v.png", "sizeGrid": "26,0,26,0" }, "child": [{ "type": "Label", "props": { "y": 16, "x": 11, "width": 100, "var": "roundLabel", "valign": "middle", "text": "期号:", "overflow": "hidden", "left": 11, "height": 30, "fontSize": 30, "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 16, "x": 380, "width": 140, "var": "gameState", "text": "等待开始", "overflow": "hidden", "height": 30, "fontSize": 30, "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 19, "x": 111, "width": 260, "var": "gameRound", "valign": "middle", "left": 111, "height": 25, "fontSize": 26, "color": "#010101" } }] }] };
        return RoundPanel_VerUI;
    }(View));
    ui.RoundPanel_VerUI = RoundPanel_VerUI;
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
        RulePanelUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "var": "prompt", "skin": "ui/bg_record.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 426, "var": "title", "skin": "ui/ruleTitle.png" } }, { "type": "Image", "props": { "y": 15, "x": 960, "var": "close", "skin": "ui/close.png" } }, { "type": "Panel", "props": { "y": 94, "x": 43, "width": 940, "var": "rule", "height": 460 } }] }] }] };
        return RulePanelUI;
    }(View));
    ui.RulePanelUI = RulePanelUI;
})(ui || (ui = {}));
(function (ui) {
    var RulePanel_VerUI = /** @class */ (function (_super) {
        __extends(RulePanel_VerUI, _super);
        function RulePanel_VerUI() {
            return _super.call(this) || this;
        }
        RulePanel_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.RulePanel_VerUI.uiView);
        };
        RulePanel_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "var": "prompt", "skin": "ui/vertical/bg_record_v.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 10, "x": 272, "var": "title", "skin": "ui/ruleTitle.png" } }, { "type": "Image", "props": { "y": 15, "x": 650, "var": "close", "skin": "ui/close.png" } }, { "type": "Panel", "props": { "y": 91, "x": 29, "width": 660, "var": "rule", "height": 720 } }] }] }] };
        return RulePanel_VerUI;
    }(View));
    ui.RulePanel_VerUI = RulePanel_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var TimeUI = /** @class */ (function (_super) {
        __extends(TimeUI, _super);
        function TimeUI() {
            return _super.call(this) || this;
        }
        TimeUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TimeUI.uiView);
        };
        TimeUI.uiView = { "type": "View", "props": { "y": 0, "width": 114, "height": 133, "centerX": 20, "bottom": 330 }, "child": [{ "type": "Image", "props": { "y": 67, "x": 57, "width": 114, "var": "timeClock", "skin": "ui/bg_time.png", "height": 133, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 58, "x": 30, "width": 60, "var": "time", "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 32, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 32, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }] };
        return TimeUI;
    }(View));
    ui.TimeUI = TimeUI;
})(ui || (ui = {}));
(function (ui) {
    var Time_VerUI = /** @class */ (function (_super) {
        __extends(Time_VerUI, _super);
        function Time_VerUI() {
            return _super.call(this) || this;
        }
        Time_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Time_VerUI.uiView);
        };
        Time_VerUI.uiView = { "type": "View", "props": { "width": 114, "height": 133, "centerX": 0, "bottom": 880 }, "child": [{ "type": "Image", "props": { "y": 66, "x": 57, "width": 114, "var": "timeClock", "skin": "ui/bg_time.png", "height": 133, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 58, "x": 30, "width": 60, "var": "time", "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 32, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 32, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }] };
        return Time_VerUI;
    }(View));
    ui.Time_VerUI = Time_VerUI;
})(ui || (ui = {}));
(function (ui) {
    var TipsPanelUI = /** @class */ (function (_super) {
        __extends(TipsPanelUI, _super);
        function TipsPanelUI() {
            return _super.call(this) || this;
        }
        TipsPanelUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TipsPanelUI.uiView);
        };
        TipsPanelUI.uiView = { "type": "View", "props": { "x": 0, "width": 1334, "visible": true, "renderType": "mask", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "width": 726, "var": "tipmsg", "skin": "ui/tip.png", "height": 442, "centerY": -76, "centerX": -76 }, "child": [{ "type": "Image", "props": { "width": 40, "var": "closeBtn", "top": 91, "skin": "ui/tipclose.png", "right": 44 } }, { "type": "Panel", "props": { "y": 195, "x": 275, "width": 360, "var": "tips", "height": 195 } }] }] }] };
        return TipsPanelUI;
    }(View));
    ui.TipsPanelUI = TipsPanelUI;
})(ui || (ui = {}));
(function (ui) {
    var TipsPanel_VerUI = /** @class */ (function (_super) {
        __extends(TipsPanel_VerUI, _super);
        function TipsPanel_VerUI() {
            return _super.call(this) || this;
        }
        TipsPanel_VerUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.TipsPanel_VerUI.uiView);
        };
        TipsPanel_VerUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/mask.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 596, "var": "tipmsg", "top": 110, "skin": "ui/vertical/tip_v.png", "height": 586, "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 40, "var": "closeBtn", "top": 239, "skin": "ui/tipclose.png", "right": 44 } }, { "type": "Panel", "props": { "y": 340, "x": 145, "width": 360, "var": "tips", "height": 195 } }] }] }] };
        return TipsPanel_VerUI;
    }(View));
    ui.TipsPanel_VerUI = TipsPanel_VerUI;
})(ui || (ui = {}));
