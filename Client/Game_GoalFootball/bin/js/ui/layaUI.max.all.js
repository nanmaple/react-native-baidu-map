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
        AlertViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 567, "var": "prompt", "skin": "ui/alert.png", "height": 328, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 771, "x": 344, "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 771, "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "y": 20, "x": 479, "var": "close", "skin": "ui/close.png" } }] }] }] };
        return AlertViewUI;
    }(View));
    ui.AlertViewUI = AlertViewUI;
})(ui || (ui = {}));
(function (ui) {
    var ChipBtnViewUI = /** @class */ (function (_super) {
        __extends(ChipBtnViewUI, _super);
        function ChipBtnViewUI() {
            return _super.call(this) || this;
        }
        ChipBtnViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ChipBtnViewUI.uiView);
        };
        ChipBtnViewUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 118, "height": 134 }, "child": [{ "type": "Button", "props": { "width": 118, "var": "chip", "stateNum": 1, "skin": "ui/chip/btn_noselect.png", "labelStrokeColor": "#b04400", "labelStroke": 3, "labelSize": 40, "labelFont": "Arial", "labelColors": "#fbfffb", "labelBold": true, "label": "0", "height": 134, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
        return ChipBtnViewUI;
    }(View));
    ui.ChipBtnViewUI = ChipBtnViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameAniViewUI = /** @class */ (function (_super) {
        __extends(GameAniViewUI, _super);
        function GameAniViewUI() {
            return _super.call(this) || this;
        }
        GameAniViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameAniViewUI.uiView);
        };
        GameAniViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "y": 310, "x": 135, "width": 480, "var": "goal", "height": 190 } }, { "type": "Box", "props": { "y": 555, "x": 135, "width": 480, "var": "defender", "height": 225, "centerY": 0, "centerX": 0 } }, { "type": "Animation", "props": { "y": 930, "x": 375, "var": "football", "source": "FootballAni.ani" } }, { "type": "Animation", "props": { "y": 690, "x": 50, "var": "player", "source": "PlayerAni.ani" } }, { "type": "Box", "props": { "var": "propBox", "top": 260 } }, { "type": "Animation", "props": { "y": 430, "x": 375, "var": "goalkeeper", "source": "GoalkeeperAni.ani" } }] };
        return GameAniViewUI;
    }(View));
    ui.GameAniViewUI = GameAniViewUI;
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
        GameBgViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/bg.jpg" } }, { "type": "Box", "props": { "y": 290, "x": 115, "width": 520, "height": 230 } }] };
        return GameBgViewUI;
    }(View));
    ui.GameBgViewUI = GameBgViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameChipsViewUI = /** @class */ (function (_super) {
        __extends(GameChipsViewUI, _super);
        function GameChipsViewUI() {
            return _super.call(this) || this;
        }
        GameChipsViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameChipsViewUI.uiView);
        };
        GameChipsViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 350, "bottom": 0 }, "child": [{ "type": "Button", "props": { "x": 520, "var": "btn_shoor", "stateNum": 1, "skin": "ui/chip/btn_shoor.png", "bottom": 170 } }, { "type": "Image", "props": { "y": 130, "x": 170, "width": 300, "skin": "ui/chip/total_bg.png", "sizeGrid": "15,30,15,22", "height": 50 }, "child": [{ "type": "Label", "props": { "x": 0, "width": 100, "var": "total", "valign": "middle", "text": "总投:", "fontSize": 30, "color": "#ffffff", "centerY": 0, "align": "center" } }, { "type": "Label", "props": { "x": 100, "width": 200, "var": "money", "text": "0", "fontSize": 30, "color": "#ffffff", "centerY": 0 } }] }, { "type": "Image", "props": { "width": 750, "var": "chipBg", "left": 0, "height": 150, "bottom": 0 }, "child": [{ "type": "Image", "props": { "var": "btn_left", "skin": "ui/chip/btn_left.png", "left": 10, "centerY": 0 } }, { "type": "Image", "props": { "var": "btn_right", "skin": "ui/chip/btn_right.png", "right": 150, "centerY": 0 } }, { "type": "Panel", "props": { "x": 55, "width": 512, "var": "chipPanel", "height": 134, "centerY": 0 }, "child": [{ "type": "Box", "props": { "x": 0, "width": 0, "var": "chipBox", "height": 134, "centerY": 0 } }] }, { "type": "Button", "props": { "var": "btn_max", "stateNum": 1, "skin": "ui/chip/btn_max.png", "right": 20, "labelSize": 40, "labelFont": "SimSun", "labelColors": "#333", "labelBold": true, "label": "最大", "centerY": 0 } }] }] };
        return GameChipsViewUI;
    }(View));
    ui.GameChipsViewUI = GameChipsViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameHeadViewUI = /** @class */ (function (_super) {
        __extends(GameHeadViewUI, _super);
        function GameHeadViewUI() {
            return _super.call(this) || this;
        }
        GameHeadViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameHeadViewUI.uiView);
        };
        GameHeadViewUI.uiView = { "type": "View", "props": { "width": 750, "top": 0, "left": 0, "height": 200 }, "child": [{ "type": "Image", "props": { "x": 120, "var": "voice", "skin": "ui/header/voice_open.png", "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 0, "var": "head_bg", "skin": "ui/header/head_bg.png" }, "child": [{ "type": "Image", "props": { "y": 16, "width": 55, "var": "home", "skin": "ui/header/home_bg.png", "left": 30, "height": 55 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 55, "skin": "ui/header/home.png", "height": 55 } }] }, { "type": "Image", "props": { "y": 22, "x": 556, "skin": "ui/header/balance.png" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 50, "width": 125, "var": "balance", "valign": "middle", "text": "0", "height": 40, "fontSize": 30, "color": "#ffffff", "align": "center" } }] }] }, { "type": "Image", "props": { "var": "rank", "skin": "ui/header/rank.png", "right": 20, "bottom": 0 } }, { "type": "Image", "props": { "var": "rule", "skin": "ui/header/rule.png", "left": 20, "bottom": 0 } }] };
        return GameHeadViewUI;
    }(View));
    ui.GameHeadViewUI = GameHeadViewUI;
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
    var GameResAlertViewUI = /** @class */ (function (_super) {
        __extends(GameResAlertViewUI, _super);
        function GameResAlertViewUI() {
            return _super.call(this) || this;
        }
        GameResAlertViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameResAlertViewUI.uiView);
        };
        GameResAlertViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Image", "props": { "var": "prompt", "skin": "ui/successTip.png", "centerY": 0, "centerX": 0 } }] };
        return GameResAlertViewUI;
    }(View));
    ui.GameResAlertViewUI = GameResAlertViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameRuleViewUI = /** @class */ (function (_super) {
        __extends(GameRuleViewUI, _super);
        function GameRuleViewUI() {
            return _super.call(this) || this;
        }
        GameRuleViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameRuleViewUI.uiView);
        };
        GameRuleViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Image", "props": { "width": 560, "var": "prompt", "skin": "ui/rule/rule_bg.png", "height": 800, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "close", "top": -25, "skin": "ui/rule/btn_close.png", "right": -25, "height": 60, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "var": "title", "skin": "ui/rule/rule_title.png", "centerX": 0 } }, { "type": "Image", "props": { "width": 15, "var": "previous", "skin": "ui/rule/btn_select.png", "height": 15, "centerX": -15, "bottom": 15 } }, { "type": "Image", "props": { "width": 15, "var": "next", "skin": "ui/rule/btn_noselect.png", "height": 15, "centerX": 15, "bottom": 15 } }, { "type": "Panel", "props": { "y": 70, "x": 0, "width": 560, "var": "rulePanel", "height": 690 }, "child": [{ "type": "Box", "props": { "x": 0, "width": 1120, "var": "ruleBox", "height": 690 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 560, "height": 690 }, "child": [{ "type": "Image", "props": { "y": 70, "skin": "ui/rule/ruleImg_1.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 260, "skin": "ui/rule/ruleImg_2.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 420, "skin": "ui/rule/ruleImg_3.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 615, "skin": "ui/rule/ruleImg_4.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 0, "width": 500, "skin": "ui/chip/total_bg.png", "sizeGrid": "13,34,18,34", "height": 70, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 500, "var": "rule_1", "valign": "middle", "padding": "10,10,10,10", "overflow": "scroll", "leading": 5, "height": 70, "fontSize": 21, "color": "#ffffff", "align": "left" } }] }, { "type": "Image", "props": { "y": 180, "width": 500, "skin": "ui/chip/total_bg.png", "sizeGrid": "13,34,18,34", "height": 70, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 500, "var": "rule_2", "valign": "middle", "padding": "10,10,10,10", "overflow": "scroll", "leading": 5, "height": 70, "fontSize": 21, "color": "#ffffff", "align": "left" } }] }, { "type": "Image", "props": { "y": 342, "width": 500, "skin": "ui/chip/total_bg.png", "sizeGrid": "13,34,18,34", "height": 70, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 500, "var": "rule_3", "valign": "middle", "padding": "10,10,10,10", "overflow": "scroll", "leading": 5, "height": 70, "fontSize": 21, "color": "#ffffff", "align": "left" } }] }, { "type": "Image", "props": { "y": 555, "width": 500, "skin": "ui/chip/total_bg.png", "sizeGrid": "13,34,18,34", "height": 50, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 500, "var": "rule_4", "valign": "middle", "padding": "10,10,10,10", "overflow": "scroll", "leading": 5, "height": 50, "fontSize": 21, "color": "#ffffff", "align": "left" } }] }] }, { "type": "Box", "props": { "y": 0, "x": 560, "width": 560, "height": 690 }, "child": [{ "type": "Image", "props": { "y": 0, "width": 500, "skin": "ui/chip/total_bg.png", "sizeGrid": "13,34,18,34", "height": 690, "centerX": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "wordWrap": true, "width": 500, "var": "total", "valign": "middle", "padding": "10,10,10,10", "overflow": "scroll", "leading": 5, "height": 690, "fontSize": 21, "color": "#ffffff", "align": "left" } }] }] }] }] }] }] };
        return GameRuleViewUI;
    }(View));
    ui.GameRuleViewUI = GameRuleViewUI;
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
    var PropBtnViewUI = /** @class */ (function (_super) {
        __extends(PropBtnViewUI, _super);
        function PropBtnViewUI() {
            return _super.call(this) || this;
        }
        PropBtnViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.PropBtnViewUI.uiView);
        };
        PropBtnViewUI.uiView = { "type": "View", "props": { "width": 120, "height": 110 }, "child": [{ "type": "Animation", "props": { "y": 0, "x": 20, "var": "prop", "source": "PropAni.ani" } }, { "type": "Image", "props": { "y": 130, "width": 120, "skin": "ui/prop/coin_bg.png", "name": "iconBg", "height": 27, "centerX": 0, "bottom": 0 } }, { "type": "Image", "props": { "y": 130, "x": 10, "visible": false, "var": "select", "skin": "ui/prop/select.png", "left": 40, "bottom": 30 } }, { "type": "Label", "props": { "y": 130, "x": 10, "var": "money", "valign": "middle", "text": "0", "fontSize": 20, "color": "#ffffff", "centerX": 0, "bottom": 5, "align": "center" } }] };
        return PropBtnViewUI;
    }(View));
    ui.PropBtnViewUI = PropBtnViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map