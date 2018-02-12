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
var ScenePanel;
(function (ScenePanel) {
    var ClickType;
    (function (ClickType) {
        ClickType[ClickType["ODDS"] = 0] = "ODDS";
        ClickType[ClickType["BET"] = 1] = "BET";
        ClickType[ClickType["CANCEL"] = 2] = "CANCEL";
        ClickType[ClickType["CHIP"] = 3] = "CHIP";
    })(ClickType = ScenePanel.ClickType || (ScenePanel.ClickType = {}));
    var ClickResultDto = /** @class */ (function () {
        function ClickResultDto() {
        }
        return ClickResultDto;
    }());
    ScenePanel.ClickResultDto = ClickResultDto;
    var BetPanel = /** @class */ (function (_super) {
        __extends(BetPanel, _super);
        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        function BetPanel() {
            var _this = _super.call(this) || this;
            _this.chipPrice = 5; //筹码
            _this.selectedChipNum = 0; //当前选择的筹码编号
            _this.chipsPoint = new Array(); //全部筹码坐标
            _this.betBtnPoint = new Array(); //投注位置坐标
            _this.betBtnArr = new Array(); //投注按钮对象
            _this.oddsLabelArr = new Array(); //赔率表签
            _this.betMoneyLabelArr = new Array(); //投注位置上的筹码
            _this.chipsBtn = new Array(); //全部筹码
            _this.guessSuccess = false; //是否有猜中
            _this.chipsNormalSkin = "ui/btn_chip.png";
            _this.chipsSelectSkin = "ui/chip_s.png";
            _this.ResetBetBtnLabel();
            _this.ConfirmBetBtn.disabled = true;
            _this.CancleBetBtn.disabled = true;
            if (GameConfig.RatioType) {
                _this.CancleBetBtn.scale(GameConfig.HeightWidth, 1);
                _this.ConfirmBetBtn.scale(GameConfig.HeightWidth, 1);
                _this.Chips.scale(GameConfig.HeightWidth, 1);
                _this.BetBox.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.CancleBetBtn.scale(1, GameConfig.WidthHeight);
                _this.ConfirmBetBtn.scale(1, GameConfig.WidthHeight);
                _this.Chips.scale(1, GameConfig.WidthHeight);
                _this.BetBox.scale(1, GameConfig.WidthHeight);
            }
            return _this;
        }
        /**
        * 设置点击事件回调handler回调
        * @param handler
        */
        BetPanel.prototype.SetClickHandelr = function (handler) {
            //绑定回调
            this.handler = handler;
            this.BindClick();
        };
        /**
         * 设置当前是否可以投注
         * @param isBetting
         */
        BetPanel.prototype.SetBetting = function (isBetting) {
            this.isBetting = isBetting;
        };
        /**
        * 给每一个Button绑定点击事件
        * 为每一个Label绑定DataChange
        * 存储Label中心点坐标
        * 存储Btn对象
        */
        BetPanel.prototype.BindClick = function () {
            var language = new LanguageUtils.Language();
            //绑定投注按钮
            for (var i = 1; i <= 13; i++) {
                var betBoxChild = this.BetBox.getChildByName(Enum.BetPosType[i]);
                //绑定点击事件 
                betBoxChild.on(Laya.Event.CLICK, this, this.Bet, [i - 1]);
                this.betBtnArr.push(betBoxChild);
                this.betMoneyLabelArr.push(betBoxChild.getChildAt(2));
                this.oddsLabelArr.push(betBoxChild.getChildAt(1));
                //设置多语言
                betBoxChild.getChildAt(0).text = language.GetLanguage(Enum.BetPosType[i].toLowerCase());
            }
            //确认投注
            this.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
            //筹码点击
            for (var i = 0; i < 5; i++) {
                var chip = this.Chips.getChildAt(i);
                this.chipsBtn.push(chip);
                chip.on(Laya.Event.CLICK, this, this.ChangeChip, [i, chip.label]);
            }
            this.GetChipsPoint();
            this.GetBetBtnPoint();
        };
        /**
         * 获取筹码坐标
         *
         */
        BetPanel.prototype.GetChipsPoint = function () {
            for (var i = 0; i < this.chipsBtn.length; i++) {
                var width = this.chipsBtn[i].getBounds().width;
                var height = this.chipsBtn[i].getBounds().height;
                var x = this.chipsBtn[i].getBounds().x + width / 2;
                var y = this.chipsBtn[i].getBounds().y + height;
                if (GameConfig.RatioType) {
                    x = x * GameConfig.HeightWidth;
                }
                else {
                    y = y * GameConfig.WidthHeight;
                }
                this.chipsPoint.push(new Laya.Point(this.Chips.x - x, this.Chips.y + y));
            }
        };
        /**
        * 获取所有投注位置坐标
        *
        */
        BetPanel.prototype.GetBetBtnPoint = function () {
            for (var i = 0; i < this.betMoneyLabelArr.length; i++) {
                var width = this.betMoneyLabelArr[i].getBounds().width;
                var height = this.betMoneyLabelArr[i].getBounds().height;
                var x = this.betMoneyLabelArr[i].getBounds().x + width / 2 + this.betMoneyLabelArr[i].parent.x;
                var y = this.betMoneyLabelArr[i].getBounds().y + height / 2 + this.betMoneyLabelArr[i].parent.y;
                if (GameConfig.RatioType) {
                    x = x * GameConfig.HeightWidth;
                    y += 498;
                }
                else {
                    y = y * GameConfig.WidthHeight;
                }
                var point = new Laya.Point(this.BetBox.x + x, this.BetBox.y + y);
                this.betBtnPoint.push(point);
            }
        };
        //还原btn样式,清空label
        BetPanel.prototype.ResetBetBtnLabel = function () {
            //启用投注和撤销按钮
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
            //还原数值            
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betMoneyLabelArr[i].label = "0";
                this.betMoneyLabelArr[i].visible = false;
            }
        };
        //修改全部投注按钮状态（启用禁用）
        BetPanel.prototype.SetBetBtn = function (disabled) {
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].disabled = disabled;
            }
        };
        /**
         * 设置赔率
         * @param Odds 服务器传来的赔率
         */
        BetPanel.prototype.SetOdds = function (Odds) {
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                var odd = Odds[i + 1];
                if (odd == 0) {
                    this.oddsLabelArr[i].text = "---";
                    this.betBtnArr[i].disabled = true;
                }
                else {
                    this.oddsLabelArr[i].text = Odds[i + 1];
                }
            }
        };
        /**
          * 投注
          * btn点击事件
          * @param i 当前点击的btn的序号
          * 修改btn样式
          * 实例化一个缓动动画
          */
        BetPanel.prototype.Bet = function (i) {
            //启用确认投注按钮
            this.ConfirmBetBtn.disabled = false;
            this.CancleBetBtn.disabled = false;
            var params = {
                Type: ClickType.ODDS,
                Data: i + 1
            };
            this.handler.runWith(params);
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
        };
        /**
         * 设置不同位置的投注总金额
         */
        BetPanel.prototype.SetBetPos = function (BetResultMsg, UnSureBet) {
            //清空投注但未确认的注单信息
            if (UnSureBet) {
                for (var i = 0, len = UnSureBet.length; i < len; i++) {
                    var index = UnSureBet[i].BetPos - 1;
                    this.betMoneyLabelArr[index].visible = false;
                }
            }
            //无投注成功的注单，直接还原初始状态
            if (!BetResultMsg) {
                for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                    this.betMoneyLabelArr[i].label = "0";
                    this.betMoneyLabelArr[i].visible = false;
                }
                return;
            }
            for (var i in BetResultMsg) {
                var index = Number(i) - 1;
                if (!BetResultMsg[i]) {
                    this.betMoneyLabelArr[index].visible = false;
                }
                else if (!this.betMoneyLabelArr[index].visible) {
                    this.betMoneyLabelArr[index].visible = true;
                }
                if (this.betMoneyLabelArr[index].label !== BetResultMsg[i]) {
                    this.betMoneyLabelArr[index].label = BetResultMsg[i];
                }
            }
        };
        /**
         * 游戏初始化
         */
        BetPanel.prototype.GameInit = function (BetResultMsg, limit) {
            //设置额度
            this.SetLimit(limit);
            //设置总投注金额
            this.SetBetPos(BetResultMsg);
            //重置按钮皮肤
            this.RestSkin();
        };
        /**
         * 游戏结果
         */
        BetPanel.prototype.GameResult = function (BetResultMsg, unSureBetMsg, limit) {
            //设置最大限额
            if (limit) {
                this.SetLimit(limit);
            }
            //设置总投注金额
            this.SetBetPos(BetResultMsg, unSureBetMsg);
            //重置按钮皮肤
            this.RestSkin();
            //禁用按钮
            this.DisabledAllBtn();
        };
        /**
         * 设置投注限额
         * @param maxBet
         * @param minBet
         */
        BetPanel.prototype.SetLimit = function (limit) {
            //设置最大限额
            this.maxBet = limit.MaxBet;
            //设置最小限额
            this.minBet = limit.MinBet;
            this.maxBetLabel.text = "\u6700\u5927:" + limit.MaxBet;
            this.minBetLabel.text = "\u6700\u5C0F:" + limit.MinBet;
        };
        /**
         * 重置按钮皮肤
         */
        BetPanel.prototype.RestSkin = function () {
            for (var index = 0; index < 12; index++) {
            }
        }; /**
         * 结算结果
         */
        BetPanel.prototype.SettleResult = function (data, betData) {
            //总赢数目
            var win = 0;
            var gameResult = JSON.parse(data.GameResult);
            var card = Utils.Poker.GetNumber(gameResult.ThirdCard);
            var msg = new Array();
            for (var i in data.SettleResult) {
                if (data.SettleResult[i] > 0) {
                    if (card == 7) {
                        var pos = Number(i);
                        if (Enum.BetPosType.BIG == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                        else if (Enum.BetPosType.SMALL == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                        else if (Enum.BetPosType.ODD == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                        else if (Enum.BetPosType.EVEN == pos) {
                            this.betBtnArr[Number(i) - 1].gray = false;
                            continue;
                        }
                    }
                    this.betBtnArr[Number(i) - 1].gray = false;
                    if (data.SettleResult[i] > 100) {
                        data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                    }
                    this.betMoneyLabelArr[Number(i) - 1].label = data.SettleResult[i];
                    this.guessSuccess = true;
                }
            }
            if (!this.guessSuccess) {
                this.ShowMsg("很遗憾，再接再厉");
            }
        };
        /**
         * 确认投注
         * 生成注单
         */
        BetPanel.prototype.ConfirmBet = function () {
            //启用投注和撤销按钮
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
            var params = {
                Type: ClickType.BET
            };
            this.handler.runWith(params);
        };
        /**
         * 取消投注
        */
        BetPanel.prototype.CancleBet = function () {
            this.ResetBetBtnLabel();
            var params = {
                Type: ClickType.CANCEL
            };
            this.handler.runWith(params);
        };
        /**
         * 切换筹码
         * @param i 筹码编号
         */
        BetPanel.prototype.ChangeChip = function (i) {
            //获取当前点击的筹码  
            this.selectedChipNum = i;
            this.selectedChip = this.Chips.getChildAt(i);
            this.chipPrice = Number(this.selectedChip.label);
            for (var i_1 = 0; i_1 < 5; i_1++) {
                var chip = this.Chips.getChildAt(i_1);
                chip.skin = this.chipsNormalSkin;
                chip.scale(0.9, 0.9);
            }
            this.selectedChip.skin = this.chipsSelectSkin;
            this.selectedChip.scale(1.1, 1.1);
            var params = {
                Type: ClickType.CHIP,
                Data: this.chipPrice
            };
            this.handler.runWith(params);
        };
        /**
         * 禁用所有按钮
         */
        BetPanel.prototype.DisabledAllBtn = function () {
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
            this.SetBetBtn(true);
        };
        /**
         * 禁用投注和取消按钮
         */
        BetPanel.prototype.DisabledBetBtn = function () {
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
        };
        /**
         * 提示消息
         * @param txt 提示的信息
         */
        BetPanel.prototype.ShowMsg = function (txt) {
            var _this = this;
            this.MsgPanel.changeText(txt);
            this.MsgPanel.visible = true;
            Laya.timer.once(1500, this, function () { _this.MsgPanel.visible = false; });
        };
        /**
         * 筹码动画
         * @param endX 结束位置x坐标
         * @param endY 结束位置y坐标
         * @param curBetPosChip 投注位置上的筹码
         * @param value 投注金额
         * @param value 缓动后投注数量
         */
        BetPanel.prototype.ChipsFly = function (i, value) {
            var curBetPosChip = this.betBtnArr[i].getChildAt(2);
            //筹码动画
            var endX = (this.betBtnPoint[i].x);
            var endY = (this.betBtnPoint[i].y);
            //从对象池获取移动对象
            var flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
            //设置状态数
            flyChip.stateNum = 1;
            flyChip.label = this.chipPrice.toString();
            flyChip.anchorX = 0.5;
            flyChip.anchorY = 0.5;
            //设置初始位置为当前选择的筹码的位置
            flyChip.pos((this.chipsPoint[this.selectedChipNum.toString()].x), (this.chipsPoint[this.selectedChipNum.toString()].y) - 40);
            flyChip.skin = this.chipsNormalSkin;
            var obj = { x: endX, y: endY, scaleX: 1, scaleY: 1 };
            if (GameConfig.RatioType) {
                flyChip.scale(1.1 * GameConfig.HeightWidth, 1.1);
                obj.scaleX = GameConfig.HeightWidth;
            }
            else {
                flyChip.scale(1.1, 1.1 * GameConfig.WidthHeight);
                obj.scaleY = GameConfig.WidthHeight;
            }
            this.addChild(flyChip);
            //开始缓动
            Laya.Tween.to(flyChip, obj, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, curBetPosChip, value], false));
        };
        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        BetPanel.prototype.ChipsFlyCallBack = function (flyChip, curBetPosChip, value) {
            //回收
            flyChip.removeSelf();
            Laya.Pool.recover("flyChip", flyChip);
            if (this.isBetting) {
                //设置最终值 
                curBetPosChip.label = value.toString();
                //显示当前筹码
                curBetPosChip.visible = true;
            }
        };
        return BetPanel;
    }(ui.BetPanelUI));
    ScenePanel.BetPanel = BetPanel;
})(ScenePanel || (ScenePanel = {}));
