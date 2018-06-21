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
var GameStatus = ["等待", "投注", "结束", "正在结算", "已结算"];
var GameBgHV = /** @class */ (function (_super) {
    __extends(GameBgHV, _super);
    function GameBgHV() {
        var _this = _super.call(this) || this;
        _this.broadcast = new Dto.BroadcastDto();
        _this.roundId = "";
        _this.gameStatus = "";
        _this.balance = "";
        _this.firstCard = "";
        _this.secondCard = "";
        _this.thirdCard = "";
        _this.btnPosArr = new Object();
        _this.CreateLabel = function (x, y, color) {
            if (color === void 0) { color = "yellow"; }
            var ui = new Laya.Label();
            ui.color = color;
            ui.fontSize = 22; //设置 textInput 的字体大小。
            ui.x = x; //设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
            ui.y = y; //设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
            ui.zOrder = 2;
            return ui;
        };
        _this.roundIdUI = _this.CreateLabel(300, 200);
        Laya.stage.addChild(_this.roundIdUI);
        _this.gameStatusUI = _this.CreateLabel(200, 250);
        Laya.stage.addChild(_this.gameStatusUI);
        _this.balanceUI = _this.CreateLabel(400, 250);
        Laya.stage.addChild(_this.balanceUI);
        _this.firstCardUI = _this.CreateLabel(200, 300);
        Laya.stage.addChild(_this.firstCardUI);
        _this.secondCardUI = _this.CreateLabel(300, 300);
        Laya.stage.addChild(_this.secondCardUI);
        _this.thirdCardUI = _this.CreateLabel(400, 300);
        Laya.stage.addChild(_this.thirdCardUI);
        for (var i = 0; i < 13; i++) {
            _this.btnUI = new Bet.BetPos();
            // this.btnUI.SetOdds(0.51);
            _this.btnUI.SetText("射偏");
            // this.btnUI.SetValue(10);
            _this.btnUI.SetType(1);
            _this.btnUI.width = 200;
            _this.btnUI.height = 80;
            _this.btnUI.x = 500;
            _this.btnUI.y = 300 + i * _this.btnUI.height;
            _this.btnUI.zOrder = 2;
            _this.btnUI.MinLimit = 10;
            _this.btnUI.MaxLimit = 100;
            _this.btnUI.Pos = i + 1;
            _this.btnUI.Refresh();
            _this.btnPosArr[_this.btnUI.Pos] = _this.btnUI;
            Laya.stage.addChild(_this.btnUI.GetUI());
        }
        return _this;
    }
    // private CreateBtn = (x: number, y: number, label: string = ""): any => {
    //     let ui = new Laya.Button();
    //     ui.label =label;//设置 textInput 的文本。
    //     ui.skin = 'comp/button.png';
    //     ui.labelSize = 22;//设置 textInput 的字体大小。
    //     ui.x = x;//设置 textInput 对象的属性 x 的值，用于控制 textInput 对象的显示位置。
    //     ui.y = y;//设置 textInput 对象的属性 y 的值，用于控制 textInput 对象的显示位置。
    //     ui.width = 150;//设置 textInput 的宽度。
    //     ui.height = 36;//设置 textInput 的高度。
    //     ui.zOrder = 2;
    //     ui.on(Laya.Event.CLICK, this, this.Bet);
    //     return ui;
    // }
    GameBgHV.prototype.Log = function () { };
    GameBgHV.prototype.Set = function (data) {
        switch (data.type) {
            case 0:
                this.roundId = data.data;
                break;
            case 1:
                this.gameStatus = GameStatus[data.data];
                break;
            case 2:
                this.balance = data.data;
                break;
            case 3:
                if (data.data) {
                    this.firstCard = data.data.FirstCard;
                    this.secondCard = data.data.SecondCard;
                    this.thirdCard = data.data.ThirdCard;
                }
                break;
            case 4:
                this.SetOdds(data.data);
                break;
            case 5:
                this.GameEnd();
                break;
            default:
                break;
        }
        this.Refresh();
    };
    GameBgHV.prototype.GameEnd = function () {
        for (var i in this.btnPosArr) {
            this.btnPosArr[i].SetValue();
            // this.btnPosArr[i].SetOdds(0);
            this.btnPosArr[i].Refresh();
        }
    };
    GameBgHV.prototype.SetOdds = function (data) {
        for (var i in data) {
            if (Number(i) <= 13) {
                this.btnPosArr[i].SetOdds(data[i]);
                this.btnPosArr[i].Refresh();
            }
        }
    };
    GameBgHV.prototype.Refresh = function () {
        this.roundIdUI.text = this.roundId;
        this.gameStatusUI.text = this.gameStatus;
        this.balanceUI.text = this.balance;
        this.firstCardUI.text = this.firstCard;
        this.secondCardUI.text = this.secondCard;
        this.thirdCardUI.text = this.thirdCard;
    };
    GameBgHV.prototype.IsBet = function (data) {
        for (var i in this.btnPosArr) {
            if (data.Pos == Number(i)) {
                this.btnPosArr[i].SetValue(data.Amount);
                this.btnPosArr[i].Refresh();
            }
        }
    };
    GameBgHV.prototype.ConfirmBet = function () {
        this.broadcast.Type = Enum.ListenUIEnum.ConfirmBet;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    /**
     * 广播
     */
    GameBgHV.prototype.Broadcast = function () {
        this.broadcast.Type = Enum.ListenUIEnum.OnGameBgClick;
        var event = new CustomEvent("GameUI", { detail: this.broadcast });
        document.dispatchEvent(event);
    };
    GameBgHV.prototype.Close = function () {
        this.Broadcast();
    };
    return GameBgHV;
}(GameBgBaseUI));
//# sourceMappingURL=GameBgUIHV.js.map