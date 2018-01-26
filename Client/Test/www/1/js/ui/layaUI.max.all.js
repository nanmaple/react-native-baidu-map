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
        BetPanelUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "width": 1335, "var": "BetBox", "skin": "ui/bg_bet.png", "height": 252, "centerX": 0, "bottom": 0 }, "child": [{ "type": "Box", "props": { "y": 28, "x": 556, "width": 272, "visible": true, "name": "IN", "height": 116 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 100, "width": 60, "valign": "middle", "text": "射进：", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "x": 110, "width": 60, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 60, "x": 56, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 28, "x": 284, "width": 272, "name": "OUT", "height": 116 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 100, "width": 60, "valign": "middle", "text": "射偏:", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "x": 100, "width": 60, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 60, "x": 56, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 28, "x": 832, "width": 272, "name": "HIT", "height": 116 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 100, "width": 60, "valign": "middle", "text": "撞解:", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Label", "props": { "y": 60, "x": 100, "width": 60, "valign": "middle", "text": "---", "height": 40, "fontSize": 28, "color": "#faf114", "align": "center" } }, { "type": "Button", "props": { "y": 60, "x": 56, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 148, "x": 556, "width": 132, "name": "BIG", "height": 104 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "大:", "height": 40, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 52, "x": 68, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 148, "x": 692, "width": 132, "name": "SMALL", "height": 104 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "小:", "height": 40, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 52, "x": 68, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 148, "x": 832, "width": 132, "name": "ODD", "height": 104 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "单:", "height": 40, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 52, "x": 68, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 148, "x": 968, "width": 148, "name": "EVEN", "height": 104 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "双:", "height": 40, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 26, "x": 76, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "centerY": 0, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 148, "x": 268, "width": 148, "name": "RED", "height": 104 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "红:", "height": 40, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "y": 52, "x": 76, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Box", "props": { "y": 148, "x": 420, "width": 132, "name": "BLACK", "height": 104 }, "child": [{ "type": "Label", "props": { "y": 10, "width": 60, "valign": "middle", "text": "黑:", "height": 40, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 60, "width": 60, "valign": "middle", "text": "---", "height": 30, "fontSize": 24, "color": "#faf114", "centerX": 0, "align": "center" } }, { "type": "Button", "props": { "x": 68, "width": 72, "visible": false, "stateNum": 1, "skin": "ui/btn_chip.png", "labelSize": 20, "label": "0", "height": 74, "centerY": -1, "anchorY": 0.5, "anchorX": 0.5 } }] }] }, { "type": "Label", "props": { "width": 1334, "visible": false, "var": "MsgPanel", "text": "恭喜你猜中了", "strokeColor": "#0c44f3", "stroke": 5, "fontSize": 60, "color": "#e81915", "centerY": 0, "centerX": 0, "bold": true, "anchorY": 0.5, "anchorX": 0.5, "align": "center" } }, { "type": "Image", "props": { "var": "Chips", "top": 100, "skin": "ui/bg_chips.png", "right": 22, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Button", "props": { "y": 160, "x": 76, "stateNum": 1, "skin": "ui/chip_s.png", "scaleY": 1.1, "scaleX": 1.1, "labelSize": 20, "labelColors": "#f00", "label": "5", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 244, "x": 76, "stateNum": 1, "skin": "ui/btn_chip.png", "scaleY": 0.9, "scaleX": 0.9, "labelSize": 20, "labelColors": "#f00", "label": "10", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 325, "x": 76, "stateNum": 1, "skin": "ui/btn_chip.png", "scaleY": 0.9, "scaleX": 0.9, "labelSize": 20, "labelColors": "#f00", "label": "20", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 405, "x": 76, "stateNum": 1, "skin": "ui/btn_chip.png", "scaleY": 0.9, "scaleX": 0.9, "labelSize": 20, "labelColors": "#f00", "label": "50", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 485, "x": 76, "stateNum": 1, "skin": "ui/btn_chip.png", "scaleY": 0.9, "scaleX": 0.9, "labelSize": 20, "labelColors": "#f00", "label": "100", "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "width": 156, "var": "CancleBetBtn", "skin": "ui/cancel.png", "left": 46, "height": 78, "bottom": 26, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "var": "ConfirmBetBtn", "skin": "ui/confirm.png", "right": 20, "bottom": 26, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return BetPanelUI;
    }(View));
    ui.BetPanelUI = BetPanelUI;
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
        CardPanelUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "compId": 1, "child": [{ "type": "Image", "props": { "width": 735, "var": "goal", "skin": "ui/bg_door.png", "height": 325, "centerX": 20, "bottom": 249 }, "child": [{ "type": "Image", "props": { "y": 204, "x": 44, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker0", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 204, "x": 700, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker1", "height": 250, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 204, "x": 368, "width": 180, "skin": "ui/poker/pkbg.png", "name": "poker2", "height": 250, "anchorY": 0.5, "anchorX": 0.5 }, "compId": 6 }] }], "animations": [{ "nodes": [{ "target": 6, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 6, "key": "name", "index": 20 }] } }, { "target": 29, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 29, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 29, "key": "name", "index": 20 }] } }, { "target": 32, "keyframes": { "name": [{ "value": "", "tweenMethod": "linearNone", "tween": false, "target": 32, "key": "name", "index": 0 }, { "value": "pokerBg", "tweenMethod": "linearNone", "tween": false, "target": 32, "key": "name", "index": 20 }] } }, { "target": 1, "keyframes": { "var": [{ "value": "door", "tweenMethod": "linearNone", "tween": false, "target": 1, "key": "var", "index": 0 }, { "value": "", "tweenMethod": "linearNone", "tween": false, "target": 1, "key": "var", "index": 20 }] } }], "name": "ani2", "id": 2, "frameRate": 24, "action": 0 }] };
        return CardPanelUI;
    }(View));
    ui.CardPanelUI = CardPanelUI;
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
        FootballUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Animation", "props": { "y": 708, "x": 667, "width": 80, "var": "football", "source": "FootballAni.ani", "pivotY": 40, "pivotX": 40, "height": 80 } }, { "type": "Label", "props": { "y": 375, "x": 667, "wordWrap": true, "width": 400, "var": "shootInfo", "valign": "middle", "text": "射中啦!", "strokeColor": "#79cf1b", "stroke": 2, "pivotY": 50, "pivotX": 200, "overflow": "hidden", "height": 100, "fontSize": 50, "font": "Helvetica", "color": "#117a1e", "bold": true, "align": "center" } }] };
        return FootballUI;
    }(View));
    ui.FootballUI = FootballUI;
})(ui || (ui = {}));
(function (ui) {
    var GameUI = /** @class */ (function (_super) {
        __extends(GameUI, _super);
        function GameUI() {
            return _super.call(this) || this;
        }
        GameUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameUI.uiView);
        };
        GameUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/bg.png", "height": 750 } }] };
        return GameUI;
    }(View));
    ui.GameUI = GameUI;
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
        GameLoadUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Label", "props": { "y": 374, "x": 666, "width": 80, "var": "progressLabel", "text": "0%", "height": 40, "fontSize": 32, "color": "#0f85aa", "anchorY": 0.5, "anchorX": 0.5 } }] };
        return GameLoadUI;
    }(View));
    ui.GameLoadUI = GameLoadUI;
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
        HeadPanelUI.uiView = { "type": "View", "props": { "y": 0, "width": 1334, "height": 100 }, "child": [{ "type": "Image", "props": { "width": 1334, "var": "headBg", "top": 0, "skin": "ui/bg_header.png", "centerX": 0 }, "child": [{ "type": "Button", "props": { "y": 4, "x": 932, "width": 124, "var": "btnGR", "stateNum": 1, "skin": "ui/gr.png", "height": 72 } }, { "type": "Button", "props": { "y": 4, "x": 1130, "width": 124, "var": "btnRule", "stateNum": 1, "skin": "ui/rule.png", "height": 72 } }, { "type": "Image", "props": { "y": 8, "x": 556, "width": 248, "var": "money", "skin": "ui/bg_money.png", "height": 72 }, "child": [{ "type": "Label", "props": { "y": 14, "x": 70, "width": 108, "var": "score", "text": "0", "overflow": "hidden", "height": 32, "fontSize": 32, "color": "#333333", "align": "center" } }] }, { "type": "Image", "props": { "y": 4, "x": 76, "width": 260, "var": "info", "skin": "ui/bg_info.png", "height": 76 }, "child": [{ "type": "Label", "props": { "y": 18, "x": 82, "width": 160, "var": "nickname", "text": "xxxxxx", "overflow": "hidden", "height": 32, "fontSize": 32, "color": "#333333", "align": "left" } }, { "type": "Image", "props": { "y": 8, "x": 8, "width": 56, "var": "headPic", "skin": "ui/userImg.png", "height": 56 } }] }, { "type": "Image", "props": { "y": 4, "x": 130, "width": 124, "visible": false, "var": "attention", "skin": "ui/attention.png", "height": 72 } }] }] };
        return HeadPanelUI;
    }(View));
    ui.HeadPanelUI = HeadPanelUI;
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
        HistoryRecordUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 212, "height": 538 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "history", "skin": "ui/bg_histrory.png" }, "child": [{ "type": "List", "props": { "y": 8, "x": 0, "width": 220, "var": "_list", "spaceY": 5, "repeatY": 5, "height": 433 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 1, "renderType": "render", "name": "historyRecord" }, "child": [{ "type": "Image", "props": { "y": 8, "x": 11, "width": 56, "skin": "ui/poker/1.png", "name": "poker0", "height": 72 } }, { "type": "Image", "props": { "y": 8, "x": 78, "width": 56, "skin": "ui/poker/1.png", "name": "poker2", "height": 72 } }, { "type": "Image", "props": { "y": 8, "x": 145, "width": 56, "skin": "ui/poker/1.png", "name": "poker1", "height": 72 } }] }] }, { "type": "Label", "props": { "y": 446, "x": 30, "var": "minBetLabel", "text": "最小额度:xxxx", "fontSize": 24, "color": "#0012ff" } }, { "type": "Label", "props": { "y": 484, "x": 30, "var": "maxBetLabel", "text": "最大额度:xxxx", "fontSize": 24, "color": "#0012ff" } }] }] };
        return HistoryRecordUI;
    }(View));
    ui.HistoryRecordUI = HistoryRecordUI;
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
        LoadingUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Animation", "props": { "y": 375, "x": 667, "var": "loadingAni", "source": "Loading.ani", "pivotY": 18, "pivotX": 18 }, "compId": 2 }], "animations": [{ "nodes": [{ "target": 2, "keyframes": { "autoPlay": [{ "value": false, "tweenMethod": "linearNone", "tween": false, "target": 2, "key": "autoPlay", "index": 0 }] } }], "name": "loading", "id": 1, "frameRate": 24, "action": 0 }] };
        return LoadingUI;
    }(View));
    ui.LoadingUI = LoadingUI;
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
        NoteRecordUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 86, "x": 189, "width": 956, "var": "prompt", "skin": "ui/bg_record.png", "height": 578 }, "child": [{ "type": "Image", "props": { "y": 28, "x": 391, "var": "title", "skin": "ui/betrecord.png" } }, { "type": "Image", "props": { "y": 32, "x": 869, "var": "close", "skin": "ui/close.png" } }, { "type": "Panel", "props": { "y": 115, "x": 13, "width": 930, "height": 450 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "var": "recordBox" }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 930, "var": "recordHome", "height": 450 }, "child": [{ "type": "List", "props": { "y": 60, "x": 0, "width": 930, "var": "_recordList", "spaceY": 0, "repeatY": 4, "height": 390 }, "child": [{ "type": "Box", "props": { "width": 930, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 830, "wordWrap": true, "width": 60, "valign": "middle", "text": "赢", "overflow": "scroll", "name": "betResult", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 50, "wordWrap": true, "width": 150, "valign": "middle", "text": "14:36 ", "overflow": "scroll", "name": "betTime", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 50, "x": 50, "wordWrap": true, "width": 150, "valign": "middle", "text": " 2018/1/12", "overflow": "scroll", "name": "betDate", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 10, "x": 205, "wordWrap": true, "width": 600, "valign": "middle", "text": "31243214234234", "overflow": "scroll", "name": "bureauNum", "height": 80, "fontSize": 28, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 930, "skin": "ui/recordLine.png", "height": 1 } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 60, "wordWrap": true, "width": 100, "valign": "middle", "text": "时间", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 0, "x": 205, "wordWrap": true, "width": 600, "valign": "middle", "text": "局号", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 783, "wordWrap": true, "width": 150, "valign": "middle", "text": "输赢", "overflow": "scroll", "height": 60, "fontSize": 36, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 930, "skin": "ui/recordLine.png", "height": 1 } }] }, { "type": "Label", "props": { "y": 195, "x": 365, "wordWrap": true, "width": 200, "var": "isLoading", "valign": "middle", "text": "加载中...", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }] }, { "type": "Box", "props": { "y": 0, "x": 930, "width": 930, "var": "recordDetail", "height": 450 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 20, "width": 57, "var": "back", "skin": "ui/back.png", "height": 50 } }, { "type": "Box", "props": { "y": 60, "x": 0, "width": 930, "height": 100 }, "child": [{ "type": "Label", "props": { "y": 20, "x": 40, "wordWrap": true, "width": 132, "valign": "middle", "text": "结果：", "overflow": "scroll", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Label", "props": { "y": 20, "x": 500, "wordWrap": true, "width": 228, "var": "betResult", "valign": "middle", "text": "赢", "overflow": "hidden", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 100, "x": 0, "width": 930, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Box", "props": { "y": 10, "x": 204, "width": 215, "height": 80 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "poker1", "skin": "ui/poker/1.png", "height": 80 } }, { "type": "Image", "props": { "y": 0, "x": 75, "width": 60, "var": "poker3", "skin": "ui/poker/1.png", "height": 80 } }, { "type": "Image", "props": { "y": -1, "x": 150, "width": 60, "var": "poker2", "skin": "ui/poker/1.png", "height": 80 } }] }] }, { "type": "List", "props": { "y": 220, "x": 0, "width": 930, "var": "betDetailList", "spaceY": 0, "repeatY": 2, "height": 230 }, "child": [{ "type": "Box", "props": { "width": 930, "renderType": "render", "name": "listBox", "height": 100 }, "child": [{ "type": "Image", "props": { "y": 100, "x": 0, "width": 930, "skin": "ui/recordLine.png", "height": 1 } }, { "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "valign": "middle", "text": "1", "overflow": "hidden", "name": "betNum", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "List", "props": { "y": 0, "x": 80, "width": 850, "var": "betTypeList", "spaceX": 0, "repeatX": 10, "name": "betTypeList", "height": 100 }, "child": [{ "type": "Box", "props": { "width": 240, "renderType": "render", "height": 100 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 80, "valign": "middle", "text": "撞柱", "overflow": "hidden", "name": "betPos", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 80, "wordWrap": true, "width": 80, "valign": "middle", "text": "1.85", "overflow": "hidden", "name": "betOdds", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 160, "wordWrap": true, "width": 80, "valign": "middle", "text": "5", "overflow": "hidden", "name": "betAmount", "height": 100, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 80, "wordWrap": true, "width": 1, "valign": "middle", "overflow": "hidden", "name": "line", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }, { "type": "Label", "props": { "y": 20, "x": 160, "wordWrap": true, "width": 1, "valign": "middle", "overflow": "hidden", "name": "line", "height": 60, "fontSize": 30, "font": "Arial", "color": "#000000", "bgColor": "#000000", "align": "center" } }] }] }] }] }, { "type": "Box", "props": { "y": 160, "x": 0, "width": 930, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 10, "x": 40, "wordWrap": true, "width": 236, "valign": "middle", "text": "投注详情如下：", "overflow": "scroll", "height": 40, "fontSize": 30, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 60, "x": 0, "width": 930, "skin": "ui/recordLine.png", "height": 1 } }] }] }] }] }] }] }] };
        return NoteRecordUI;
    }(View));
    ui.NoteRecordUI = NoteRecordUI;
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
        PromptUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 208, "x": 374, "width": 584, "var": "prompt", "skin": "ui/bg_alert.png", "sizeGrid": "15,15,11,13", "height": 332 }, "child": [{ "type": "Label", "props": { "y": 106, "x": 50, "wordWrap": true, "width": 484, "var": "promptTxt", "valign": "top", "text": "您的余额不足。", "overflow": "scroll", "height": 120, "fontSize": 32, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Box", "props": { "y": 240, "x": 244, "var": "sureBox" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 94, "skin": "ui/ok.png", "name": "sureBtn", "height": 54 } }] }, { "type": "Box", "props": { "y": 240, "x": 92, "width": 400, "var": "rechargeBox", "height": 54 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 94, "skin": "ui/ok.png", "name": "sureBtn", "height": 54 } }, { "type": "Image", "props": { "y": 0, "x": 300, "width": 94, "skin": "ui/charge.png", "name": "rechargeBtn", "height": 54 } }] }, { "type": "Image", "props": { "y": 27, "x": 232, "width": 120, "skin": "ui/title.png", "height": 36 } }] }] }] };
        return PromptUI;
    }(View));
    ui.PromptUI = PromptUI;
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
        RoundPanelUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "var": "round", "top": 98, "skin": "ui/bg_round.png", "centerX": 20 }, "child": [{ "type": "Label", "props": { "y": 18, "x": 28, "width": 103, "text": "期号:", "height": 43, "fontSize": 30, "color": "#08e500" } }, { "type": "Label", "props": { "y": 18, "x": 544, "width": 168, "var": "gameState", "text": "等待开始", "height": 40, "fontSize": 30, "color": "#08e500", "align": "right" } }, { "type": "Label", "props": { "y": 20, "x": 106, "width": 448, "var": "gameRound", "height": 26, "fontSize": 26, "color": "#08e500" } }] }] };
        return RoundPanelUI;
    }(View));
    ui.RoundPanelUI = RoundPanelUI;
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
        RulePanelUI.uiView = { "type": "View", "props": { "width": 1334, "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/mask.png" }, "child": [{ "type": "Image", "props": { "y": 86, "x": 189, "var": "prompt", "skin": "ui/bg_record.png" }, "child": [{ "type": "Image", "props": { "y": 28, "x": 391, "skin": "ui/ruleTitle.png" } }, { "type": "Label", "props": { "y": 147, "x": 68, "wordWrap": true, "width": 820, "var": "gameRule", "valign": "top", "text": "游戏规则", "overflow": "scroll", "height": 385, "fontSize": 32, "font": "Arial", "color": "#000000", "align": "left" } }, { "type": "Image", "props": { "y": 32, "x": 869, "var": "close", "skin": "ui/close.png" } }] }] }] };
        return RulePanelUI;
    }(View));
    ui.RulePanelUI = RulePanelUI;
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
        TimeUI.uiView = { "type": "View", "props": { "y": 56, "x": 47, "width": 94, "height": 112, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "skin": "ui/bg_time.png", "scaleY": 0.9, "scaleX": 0.9, "centerY": 0.5, "centerX": 0.5 }, "child": [{ "type": "Box", "props": { "y": 46, "x": 18, "width": 60, "var": "time", "height": 40 }, "child": [{ "type": "Clip", "props": { "y": 0, "x": 0, "width": 32, "skin": "ui/clip_number.png", "name": "item0", "height": 40, "clipX": 10 } }, { "type": "Clip", "props": { "y": 0, "x": 30, "width": 32, "skin": "ui/clip_number.png", "sizeGrid": "0,0,0,0", "name": "item1", "index": 0, "height": 40, "clipX": 10 } }] }] }] };
        return TimeUI;
    }(View));
    ui.TimeUI = TimeUI;
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
        TipsPanelUI.uiView = { "type": "View", "props": { "x": 0, "width": 1334, "visible": true, "renderType": "mask", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1334, "skin": "ui/mask.png", "height": 750 }, "child": [{ "type": "Image", "props": { "y": 110, "x": 338, "var": "closeBtn", "skin": "ui/tip.png", "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 65, "x": 544, "skin": "ui/tipclose.png" } }] }] }] };
        return TipsPanelUI;
    }(View));
    ui.TipsPanelUI = TipsPanelUI;
})(ui || (ui = {}));