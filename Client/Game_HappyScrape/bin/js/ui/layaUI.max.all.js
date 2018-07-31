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
    var AlertViewUI = (function (_super) {
        __extends(AlertViewUI, _super);
        function AlertViewUI() {
            return _super.call(this) || this;
        }
        AlertViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.AlertViewUI.uiView);
        };
        return AlertViewUI;
    }(View));
    AlertViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 567, "var": "prompt", "skin": "ui/alert.png", "height": 328, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Label", "props": { "y": 771, "x": 344, "wordWrap": true, "width": 100, "var": "cancel", "valign": "top", "text": "取消", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 771, "wordWrap": true, "width": 100, "var": "sure", "valign": "top", "text": "确定", "overflow": "scroll", "height": 40, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": -110, "bottom": 20, "align": "center" } }, { "type": "Label", "props": { "y": 100, "wordWrap": true, "width": 500, "var": "txt", "valign": "top", "overflow": "scroll", "height": 150, "fontSize": 32, "font": "Arial", "color": "#000000", "centerX": 0, "align": "left" } }, { "type": "Image", "props": { "var": "close", "top": -25, "skin": "ui/close.png", "right": -25 } }] }] }] };
    ui.AlertViewUI = AlertViewUI;
})(ui || (ui = {}));
(function (ui) {
    var Game2ResViewUI = (function (_super) {
        __extends(Game2ResViewUI, _super);
        function Game2ResViewUI() {
            return _super.call(this) || this;
        }
        Game2ResViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Game2ResViewUI.uiView);
        };
        return Game2ResViewUI;
    }(View));
    Game2ResViewUI.uiView = { "type": "View", "props": { "width": 150, "height": 50 }, "child": [{ "type": "Label", "props": { "width": 150, "var": "amount", "valign": "middle", "text": "10", "height": 50, "fontSize": 40, "color": "#000000", "align": "center" } }, { "type": "Image", "props": { "var": "select", "skin": "ui/scrape/select.png", "centerY": 0, "centerX": 0 } }] };
    ui.Game2ResViewUI = Game2ResViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBetPosViewUI = (function (_super) {
        __extends(GameBetPosViewUI, _super);
        function GameBetPosViewUI() {
            return _super.call(this) || this;
        }
        GameBetPosViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBetPosViewUI.uiView);
        };
        return GameBetPosViewUI;
    }(View));
    GameBetPosViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 200, "bottom": 0 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 20, "width": 100, "var": "max", "stateNum": 1, "skin": "ui/betPos/btn.png", "sizeGrid": "20,20,20,20", "labelSize": 25, "labelColors": "#fff", "label": "最大", "height": 50 } }, { "type": "Box", "props": { "y": 0, "x": 189, "width": 250, "height": 50 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 50, "var": "reduce", "stateNum": 1, "skin": "ui/betPos/btn.png", "sizeGrid": "20,20,20,20", "labelSize": 25, "labelColors": "#fff", "labelAlign": "center", "label": "-", "height": 50 } }, { "type": "Button", "props": { "width": 50, "var": "add", "top": 0, "stateNum": 1, "skin": "ui/betPos/btn.png", "sizeGrid": "20,20,20,20", "right": 0, "labelSize": 25, "labelColors": "#fff", "label": "+", "height": 50 } }, { "type": "Label", "props": { "width": 150, "var": "amount", "valign": "middle", "text": "100", "height": 40, "fontSize": 20, "color": "#000000", "centerY": 0, "centerX": 0, "bgColor": "#ffffff", "align": "center" } }] }, { "type": "Box", "props": { "y": 70, "x": 330, "width": 400, "var": "btnBox", "right": 20, "height": 120, "bottom": 10 }, "child": [{ "type": "Button", "props": { "y": 60, "x": 200, "width": 400, "var": "cash", "stateNum": 1, "skin": "ui/betPos/btn_cash.png", "labelStrokeColor": "#a86b10", "labelStroke": 5, "labelSize": 40, "labelColors": "#fff", "label": "兑奖", "height": 120, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Button", "props": { "y": 60, "x": 200, "width": 400, "var": "start", "stateNum": 1, "skin": "ui/betPos/btn_start.png", "labelStrokeColor": "#a86b10", "labelStroke": 5, "labelSize": 40, "labelColors": "#fff", "label": "开始刮", "height": 120, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Animation", "props": { "y": 60, "x": 200, "source": "BtnWaitAni.ani", "autoPlay": true } }] }] };
    ui.GameBetPosViewUI = GameBetPosViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameBgViewUI = (function (_super) {
        __extends(GameBgViewUI, _super);
        function GameBgViewUI() {
            return _super.call(this) || this;
        }
        GameBgViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameBgViewUI.uiView);
        };
        return GameBgViewUI;
    }(View));
    GameBgViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "visible": true, "skin": "ui/bg/gameBg1.jpg", "height": 1334 } }, { "type": "Image", "props": { "y": -150, "width": 1624, "visible": true, "skin": "ui/bg/topBg.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 486, "x": 0, "width": 750, "visible": true, "skin": "ui/bg/greenBg.jpg", "centerY": 0, "centerX": 0 } }] };
    ui.GameBgViewUI = GameBgViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameHeadViewUI = (function (_super) {
        __extends(GameHeadViewUI, _super);
        function GameHeadViewUI() {
            return _super.call(this) || this;
        }
        GameHeadViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameHeadViewUI.uiView);
        };
        return GameHeadViewUI;
    }(View));
    GameHeadViewUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "left": 0, "height": 200 }, "child": [{ "type": "Image", "props": { "var": "voice", "skin": "ui/header/voice_open.png", "left": 120, "bottom": 0 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "head_bg", "skin": "ui/header/headBg.png", "height": 75 }, "child": [{ "type": "Image", "props": { "width": 55, "var": "home", "skin": "ui/header/homeBg.png", "left": 30, "height": 55, "centerY": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 55, "skin": "ui/header/home.png", "height": 55 } }] }, { "type": "Image", "props": { "x": 556, "skin": "ui/header/balance.png", "centerY": 0 }, "child": [{ "type": "Label", "props": { "y": 0, "x": 50, "width": 125, "var": "balance", "valign": "middle", "text": "0", "height": 40, "fontSize": 30, "color": "#ffffff", "align": "center" } }] }, { "type": "Image", "props": { "y": -5, "var": "title", "skin": "ui/header/head_tit.png", "centerX": 0 } }] }, { "type": "Image", "props": { "var": "record", "skin": "ui/header/record.png", "right": 20, "bottom": 0 } }, { "type": "Image", "props": { "var": "rule", "skin": "ui/header/rule.png", "left": 20, "bottom": 0 } }, { "type": "Image", "props": { "var": "recharge", "skin": "ui/header/recharge.png", "right": 120, "bottom": 0 } }] };
    ui.GameHeadViewUI = GameHeadViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameLoadViewUI = (function (_super) {
        __extends(GameLoadViewUI, _super);
        function GameLoadViewUI() {
            return _super.call(this) || this;
        }
        GameLoadViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameLoadViewUI.uiView);
        };
        return GameLoadViewUI;
    }(View));
    GameLoadViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 750, "skin": "ui/maskBg.png", "height": 1334, "centerY": 0, "centerX": 0 } }, { "type": "Label", "props": { "y": 667, "x": 375, "visible": true, "var": "progressLabel", "text": "0%", "fontSize": 35, "color": "#ffffff", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
    ui.GameLoadViewUI = GameLoadViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameRecordViewUI = (function (_super) {
        __extends(GameRecordViewUI, _super);
        function GameRecordViewUI() {
            return _super.call(this) || this;
        }
        GameRecordViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameRecordViewUI.uiView);
        };
        return GameRecordViewUI;
    }(View));
    GameRecordViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 667, "x": 375, "width": 558, "var": "prompt", "skin": "ui/record.png", "height": 797, "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": -25, "x": 522, "var": "close", "top": -25, "skin": "ui/close.png", "right": -25 } }, { "type": "Image", "props": { "y": -5, "var": "title", "skin": "ui/record_tit.png", "centerX": 0 } }, { "type": "Panel", "props": { "y": 69, "x": 12, "width": 500, "var": "panelList", "height": 680, "centerX": 0 }, "child": [{ "type": "Box", "props": { "width": 500, "height": 60 }, "child": [{ "type": "Label", "props": { "y": 0, "width": 150, "var": "num_tit", "valign": "middle", "text": "序号", "left": 0, "height": 60, "fontSize": 30, "color": "#fecc05", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 0, "x": 150, "width": 200, "var": "reward_tit", "valign": "middle", "text": "获得奖励", "height": 60, "fontSize": 30, "color": "#fecc05", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 0, "width": 150, "var": "time_tit", "valign": "middle", "text": "时间", "right": 0, "height": 60, "fontSize": 30, "color": "#fecc05", "bold": true, "align": "center" } }] }, { "type": "List", "props": { "y": 60, "x": 0, "width": 500, "var": "recordList", "spaceY": 5, "repeatY": 10, "height": 620 }, "child": [{ "type": "Box", "props": { "width": 500, "renderType": "render", "height": 55, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 500, "skin": "ui/recordlist.png", "sizeGrid": "20,20,20,20", "name": "listBg", "height": 55 } }, { "type": "Label", "props": { "y": 0, "width": 150, "valign": "middle", "text": "1", "name": "num", "left": 0, "height": 55, "fontSize": 25, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 0, "width": 200, "valign": "middle", "text": "100", "name": "reward", "height": 55, "fontSize": 25, "color": "#ffffff", "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "y": 5, "width": 150, "valign": "middle", "text": "2018-01-16", "right": 0, "name": "date", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }, { "type": "Label", "props": { "y": 30, "width": 150, "valign": "middle", "text": "18:25:25", "right": 0, "name": "time", "height": 25, "fontSize": 20, "color": "#ffffff", "align": "center" } }] }] }, { "type": "Label", "props": { "width": 500, "var": "noRecord", "valign": "middle", "text": "暂无数据", "height": 50, "fontSize": 25, "color": "#ffffff", "centerY": 0, "centerX": 0, "align": "center" } }, { "type": "Label", "props": { "width": 500, "var": "isLoading", "valign": "middle", "text": "正在加载...", "height": 50, "fontSize": 25, "color": "#ffffff", "centerY": 0, "centerX": 0, "align": "center" } }] }] }] }] };
    ui.GameRecordViewUI = GameRecordViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameResultViewUI = (function (_super) {
        __extends(GameResultViewUI, _super);
        function GameResultViewUI() {
            return _super.call(this) || this;
        }
        GameResultViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameResultViewUI.uiView);
        };
        return GameResultViewUI;
    }(View));
    GameResultViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 100 } };
    ui.GameResultViewUI = GameResultViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameRuleViewUI = (function (_super) {
        __extends(GameRuleViewUI, _super);
        function GameRuleViewUI() {
            return _super.call(this) || this;
        }
        GameRuleViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameRuleViewUI.uiView);
        };
        return GameRuleViewUI;
    }(View));
    GameRuleViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Image", "props": { "width": 560, "var": "prompt", "skin": "ui/rule/ruleBg.png", "height": 800, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "width": 60, "var": "close", "top": -25, "skin": "ui/close.png", "right": -25, "height": 60, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": -5, "width": 205, "var": "title", "skin": "ui/rule/rule_title.png", "height": 55, "centerX": 0 } }, { "type": "Image", "props": { "width": 15, "var": "previous", "skin": "ui/rule/btn_select.png", "height": 15, "centerX": -15, "bottom": 15 } }, { "type": "Image", "props": { "width": 15, "var": "next", "skin": "ui/rule/btn_noselect.png", "height": 15, "centerX": 15, "bottom": 15 } }, { "type": "Panel", "props": { "y": 70, "x": 0, "width": 560, "var": "rulePanel", "height": 690 }, "child": [{ "type": "Box", "props": { "x": 0, "width": 1120, "var": "ruleBox", "height": 690 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 560, "height": 690 } }, { "type": "Box", "props": { "y": 0, "x": 560, "width": 560, "height": 690 }, "child": [{ "type": "Label", "props": { "width": 500, "var": "ruleTotal", "height": 650, "centerY": 0, "centerX": 0 } }] }] }] }] }] };
    ui.GameRuleViewUI = GameRuleViewUI;
})(ui || (ui = {}));
(function (ui) {
    var GameScrapeViewUI = (function (_super) {
        __extends(GameScrapeViewUI, _super);
        function GameScrapeViewUI() {
            return _super.call(this) || this;
        }
        GameScrapeViewUI.prototype.createChildren = function () {
            View.regComponent("ui.Game2ResViewUI", ui.Game2ResViewUI);
            View.regComponent("ui.MahjongViewUI", ui.MahjongViewUI);
            View.regComponent("ui.OddsInfoViewUI", ui.OddsInfoViewUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.GameScrapeViewUI.uiView);
        };
        return GameScrapeViewUI;
    }(View));
    GameScrapeViewUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "y": 200, "x": 0, "width": 750, "var": "bg", "height": 900 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/scrape/game1_mask.png" } }, { "type": "Image", "props": { "y": 666, "x": 0, "skin": "ui/scrape/game_bg.png" } }, { "type": "Image", "props": { "y": 200, "skin": "ui/scrape/game2_bg.png", "right": 20 } }] }, { "type": "Box", "props": { "y": 200, "x": 0, "width": 750, "var": "result", "height": 900 }, "child": [{ "type": "Box", "props": { "y": 240, "width": 300, "var": "result_game2", "height": 180, "centerX": 140 }, "child": [{ "type": "Game2ResView", "props": { "y": 0, "x": 10, "runtime": "ui.Game2ResViewUI" } }, { "type": "Game2ResView", "props": { "y": 22, "x": 150, "runtime": "ui.Game2ResViewUI" } }, { "type": "Game2ResView", "props": { "y": 66, "x": 0, "runtime": "ui.Game2ResViewUI" } }, { "type": "Game2ResView", "props": { "y": 98, "x": 150, "runtime": "ui.Game2ResViewUI" } }, { "type": "Game2ResView", "props": { "y": 128, "x": 35, "runtime": "ui.Game2ResViewUI" } }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 386, "var": "scrape_game1", "height": 666 }, "child": [{ "type": "Box", "props": { "y": 8, "x": 14, "name": "item0" }, "child": [{ "type": "MahjongView", "props": { "y": 0, "x": 0, "runtime": "ui.MahjongViewUI" } }] }, { "type": "Box", "props": { "y": 100, "x": 14, "name": "item1" }, "child": [{ "type": "MahjongView", "props": { "runtime": "ui.MahjongViewUI" } }] }, { "type": "Box", "props": { "y": 192, "x": 14, "name": "item2" }, "child": [{ "type": "MahjongView", "props": { "y": 0, "x": 0, "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 74, "runtime": "ui.MahjongViewUI" } }] }, { "type": "Box", "props": { "y": 284, "x": 14, "name": "item3" }, "child": [{ "type": "MahjongView", "props": { "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 74, "runtime": "ui.MahjongViewUI" } }] }, { "type": "Box", "props": { "y": 376, "x": 14, "name": "item4" }, "child": [{ "type": "MahjongView", "props": { "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 74, "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 148, "runtime": "ui.MahjongViewUI" } }] }, { "type": "Box", "props": { "y": 468, "x": 14, "name": "item5" }, "child": [{ "type": "MahjongView", "props": { "name": "item0", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 74, "name": "item1", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 148, "name": "item2", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 222, "name": "item3", "runtime": "ui.MahjongViewUI" } }] }, { "type": "Box", "props": { "y": 560, "x": 14, "name": "item6" }, "child": [{ "type": "MahjongView", "props": { "name": "item0", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 74, "name": "item1", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 148, "name": "item2", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 222, "name": "item3", "runtime": "ui.MahjongViewUI" } }, { "type": "MahjongView", "props": { "y": 0, "x": 296, "name": "item4", "runtime": "ui.MahjongViewUI" } }] }] }, { "type": "Box", "props": { "width": 340, "var": "result_game1", "left": 55, "height": 200, "bottom": 17 }, "child": [{ "type": "Image", "props": { "skin": "ui/mahjong/1.png", "name": "item0" } }, { "type": "Image", "props": { "y": 0, "x": 90, "skin": "ui/mahjong/1.png", "name": "item1" } }, { "type": "Image", "props": { "y": 0, "x": 180, "skin": "ui/mahjong/1.png", "name": "item2" } }, { "type": "Image", "props": { "y": 0, "x": 270, "skin": "ui/mahjong/1.png", "name": "item3" } }, { "type": "Image", "props": { "y": 110, "x": 0, "skin": "ui/mahjong/1.png", "name": "item4" } }, { "type": "Image", "props": { "y": 110, "x": 90, "skin": "ui/mahjong/1.png", "name": "item5" } }, { "type": "Image", "props": { "y": 110, "x": 180, "skin": "ui/mahjong/1.png", "name": "item6" } }, { "type": "Image", "props": { "y": 110, "x": 270, "skin": "ui/mahjong/1.png", "name": "item7" } }] }] }, { "type": "Box", "props": { "y": 200, "x": 0, "width": 750, "var": "masks", "height": 900, "cacheAs": "bitmap" }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "ui/scrape/game1_mask.png" } }, { "type": "Image", "props": { "y": 666, "x": 0, "skin": "ui/scrape/game_mask.png" } }, { "type": "Image", "props": { "y": 200, "skin": "ui/scrape/game2_mask.png", "right": 20 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 750, "var": "coating", "name": "coating", "height": 900 } }] }, { "type": "Box", "props": { "y": 200, "x": 0, "width": 500, "var": "oddsInfo", "height": 666 }, "child": [{ "type": "OddsInfoView", "props": { "y": 8, "x": 95, "name": "item0", "runtime": "ui.OddsInfoViewUI" } }, { "type": "OddsInfoView", "props": { "y": 100, "x": 95, "name": "item1", "runtime": "ui.OddsInfoViewUI" } }, { "type": "OddsInfoView", "props": { "y": 192, "x": 170, "name": "item2", "runtime": "ui.OddsInfoViewUI" } }, { "type": "OddsInfoView", "props": { "y": 284, "x": 170, "name": "item3", "runtime": "ui.OddsInfoViewUI" } }, { "type": "OddsInfoView", "props": { "y": 374, "x": 240, "name": "item4", "runtime": "ui.OddsInfoViewUI" } }, { "type": "OddsInfoView", "props": { "y": 468, "x": 315, "name": "item5", "runtime": "ui.OddsInfoViewUI" } }, { "type": "OddsInfoView", "props": { "y": 560, "x": 390, "name": "item6", "runtime": "ui.OddsInfoViewUI" } }] }, { "type": "Box", "props": { "y": 200, "width": 400, "var": "ruleOne", "right": 100, "height": 200 }, "child": [{ "type": "Label", "props": { "width": 400, "var": "ruleOneTit", "valign": "middle", "text": "游戏一", "strokeColor": "#000000", "stroke": 5, "height": 50, "fontSize": 30, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 50, "x": 0, "wordWrap": true, "width": 400, "var": "ruleOneCon", "valign": "top", "strokeColor": "#000000", "stroke": 5, "overflow": "scroll", "leading": 10, "height": 150, "fontSize": 22, "color": "#ffffff", "align": "left" } }] }, { "type": "Box", "props": { "y": 670, "width": 200, "var": "ruleTwo", "right": 50, "height": 200 }, "child": [{ "type": "Label", "props": { "width": 200, "var": "ruleTwoTit", "valign": "middle", "text": "游戏二", "strokeColor": "#000000", "stroke": 5, "height": 50, "fontSize": 30, "color": "#ffffff", "align": "left" } }, { "type": "Label", "props": { "y": 50, "x": 0, "wordWrap": true, "width": 200, "var": "ruleTwoCon", "valign": "top", "strokeColor": "#000000", "stroke": 5, "overflow": "scroll", "leading": 10, "height": 150, "fontSize": 22, "color": "#ffffff", "align": "left" } }] }, { "type": "Box", "props": { "y": 960, "x": 135, "width": 300, "visible": false, "var": "bonus", "height": 50 }, "child": [{ "type": "Label", "props": { "var": "amount", "text": "100", "fontSize": 50, "font": "Arial", "color": "#f84931", "centerY": 0, "centerX": 0, "bold": true, "align": "center" } }] }] };
    ui.GameScrapeViewUI = GameScrapeViewUI;
})(ui || (ui = {}));
(function (ui) {
    var LoadingViewUI = (function (_super) {
        __extends(LoadingViewUI, _super);
        function LoadingViewUI() {
            return _super.call(this) || this;
        }
        LoadingViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.LoadingViewUI.uiView);
        };
        return LoadingViewUI;
    }(View));
    LoadingViewUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "skin": "ui/maskBg.png", "height": 1334 } }, { "type": "Label", "props": { "width": 242.798828125, "visible": true, "var": "txt", "strokeColor": "#d00400", "stroke": 5, "height": 28, "fontSize": 28, "color": "#fbff70", "centerY": 0, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 } }] };
    ui.LoadingViewUI = LoadingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var MahjongViewUI = (function (_super) {
        __extends(MahjongViewUI, _super);
        function MahjongViewUI() {
            return _super.call(this) || this;
        }
        MahjongViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MahjongViewUI.uiView);
        };
        return MahjongViewUI;
    }(View));
    MahjongViewUI.uiView = { "type": "View", "props": { "width": 70, "height": 90 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "mahjong", "skin": "ui/mahjong/0.png" } }, { "type": "Image", "props": { "visible": false, "var": "select", "skin": "ui/scrape/select.png", "centerY": 0, "centerX": 0 } }] };
    ui.MahjongViewUI = MahjongViewUI;
})(ui || (ui = {}));
(function (ui) {
    var OddsInfoViewUI = (function (_super) {
        __extends(OddsInfoViewUI, _super);
        function OddsInfoViewUI() {
            return _super.call(this) || this;
        }
        OddsInfoViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.OddsInfoViewUI.uiView);
        };
        return OddsInfoViewUI;
    }(View));
    OddsInfoViewUI.uiView = { "type": "View", "props": { "width": 100, "height": 90 }, "child": [{ "type": "Image", "props": { "y": 35, "width": 80, "skin": "ui/scrape/game_bg.png", "height": 40, "centerX": 0 }, "child": [{ "type": "Label", "props": { "var": "odd", "valign": "middle", "text": "0.5", "overflow": "hidden", "fontSize": 20, "color": "#000000", "centerY": 0, "centerX": 0, "align": "center" } }] }, { "type": "Label", "props": { "y": 15, "var": "level", "text": "第一层", "strokeColor": "#000000", "stroke": 5, "fontSize": 22, "color": "#ffffff", "centerX": 0 } }] };
    ui.OddsInfoViewUI = OddsInfoViewUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map