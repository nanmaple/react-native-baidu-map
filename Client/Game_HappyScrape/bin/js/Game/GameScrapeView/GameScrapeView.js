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
var Enum;
(function (Enum) {
    var GameScrapeView;
    (function (GameScrapeView) {
        /**
         * 游戏结束
         */
        GameScrapeView[GameScrapeView["GameResult"] = 0] = "GameResult";
    })(GameScrapeView = Enum.GameScrapeView || (Enum.GameScrapeView = {}));
})(Enum || (Enum = {}));
/**
* View类
* 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
*
*/
var GameScrapeView = (function (_super) {
    __extends(GameScrapeView, _super);
    function GameScrapeView(eventKey) {
        var _this = _super.call(this) || this;
        _this.listenEventKey = "";
        _this.listenEventKey = eventKey;
        return _this;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    GameScrapeView.prototype.Refresh = function () {
    };
    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data
     */
    GameScrapeView.prototype.Set = function (data, type) {
        switch (type) {
            case Enum.GameCommand.MsgGameInit:
                this.GameInit(data);
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameSettleResult(data);
                break;
            case Enum.GameScrapeView.GameResult:
                this.GameResult();
                break;
            default:
                break;
        }
    };
    /**
     * 游戏初始化
     * @param data
     */
    GameScrapeView.prototype.GameInit = function (data) {
        for (var index = 0; index < this.ui.oddsInfo.numChildren; index++) {
            var odds = this.ui.oddsInfo.getChildAt(index);
            odds.odd.text = "x" + data.Game1OddsInfo[index];
        }
    };
    /**
     * 投注结果
     * @param data
     */
    GameScrapeView.prototype.GameSettleResult = function (data) {
        if (data.Status == Enum.BetErrorCode.Success) {
            this.GameStart(data);
        }
    };
    /**
     * 游戏开始
     */
    GameScrapeView.prototype.GameStart = function (data) {
        this.game2Count = {};
        this.bonus = data.WinAmount;
        this.ReSetMaskView(true);
        this.DisabledScrape(false);
        for (var index = 0; index < this.ui.scrape_game1.numChildren; index++) {
            var layer = this.ui.scrape_game1.getChildAt(index);
            for (var i = 0; i < layer.numChildren; i++) {
                var majBox = layer.getChildAt(i);
                majBox.mahjong.skin = this.GetMahjongSkin(data.Game1Icons[index][i]);
                majBox.select.visible = false;
            }
        }
        for (var index = 0; index < this.ui.result_game1.numChildren; index++) {
            var mahjong = this.ui.result_game1.getChildAt(index);
            mahjong.skin = this.GetMahjongSkin(data.Game1RewardIcons[index]);
        }
        for (var index = 0; index < this.ui.result_game2.numChildren; index++) {
            var resBox = this.ui.result_game2.getChildAt(index);
            resBox.amount.text = "x" + data.Game2Icons[index];
            resBox.select.visible = false;
            if (this.game2Count[resBox.amount.text]) {
                this.game2Count[resBox.amount.text]++;
            }
            else {
                this.game2Count[resBox.amount.text] = 1;
            }
        }
    };
    /**
     * 兑奖匹配中奖麻将(勾选)
     * @param data
     */
    GameScrapeView.prototype.MatchingResult = function () {
        //匹配游戏一
        for (var index_1 = 0; index_1 < this.ui.scrape_game1.numChildren; index_1++) {
            var layer = this.ui.scrape_game1.getChildAt(index_1);
            for (var i = 0; i < layer.numChildren; i++) {
                var majBox = layer.getChildAt(i);
                for (var j = 0; j < this.ui.result_game1.numChildren; j++) {
                    var mahjong = this.ui.result_game1.getChildAt(j);
                    if (majBox.mahjong.skin == mahjong.skin) {
                        majBox.select.visible = true;
                    }
                }
            }
        }
        //匹配游戏二
        for (var key in this.game2Count) {
            if (this.game2Count[key] >= 3) {
                for (var index = 0; index < this.ui.result_game2.numChildren; index++) {
                    var resBox = this.ui.result_game2.getChildAt(index);
                    if (resBox.amount.text == key) {
                        resBox.select.visible = true;
                    }
                }
            }
        }
    };
    /**
     * 设置麻将的皮肤地址
     * @param index
     */
    GameScrapeView.prototype.GetMahjongSkin = function (index) {
        return "ui/mahjong/" + index + ".png";
    };
    /**
     * 游戏结束（完成兑奖）
     */
    GameScrapeView.prototype.GameResult = function () {
        this.DisabledScrape(true);
        this.ReSetMaskView(false);
        this.MatchingResult();
        this.SetAmount();
    };
    /**
     * 设置中奖金额
     */
    GameScrapeView.prototype.SetAmount = function () {
        this.ui.amount.text = this.bonus.toString();
        if (this.bonus <= 0) {
            Utils.BackgroundMusic.PlaySounds("sound/lose.mp3");
        }
        else {
            Utils.BackgroundMusic.PlaySounds("sound/low.mp3");
        }
    };
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    GameScrapeView.prototype.EventNotification = function (type, value) {
        var data = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        var event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    };
    return GameScrapeView;
}(BaseGameScrapeView));
//# sourceMappingURL=GameScrapeView.js.map