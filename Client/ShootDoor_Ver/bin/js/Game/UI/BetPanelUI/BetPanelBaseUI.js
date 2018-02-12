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
    var BetPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function BetPanelBaseUI(isHor) {
            this.chipPrice = 5; //筹码
            this.chipsPoint = new Array(); //全部筹码坐标
            this.betBtnPoint = new Array(); //投注位置坐标
            this.betBtnArr = new Array(); //投注按钮对象
            this.oddsLabelArr = new Array(); //赔率表签
            this.betMoneyLabelArr = new Array(); //投注位置上的筹码
            this.chipsBtn = new Array(); //全部筹码
            this.maxBet = 0; //最大限额
            this.minBet = 0; //最小限额
            this.chipsNormalSkin = "ui/btn_chip.png";
            this.chipsSelectSkin = "ui/chip_s.png";
            this.baseX = 18;
            if (isHor) {
                this.ui = new ui.BetPanelUI();
            }
            else {
                this.ui = new ui.BetPanel_VerUI();
            }
            this.ui.zOrder = 5;
            this.uiData = ScenePanel.BetPanelUIData.GetInstance();
            this.ResetBetBtnLabel();
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;
        }
        /**
         * 获取UI
         */
        BetPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
        * 设置点击事件回调handler回调
        * @param handler
        */
        BetPanelBaseUI.prototype.SetClickHandelr = function (handler) {
            //绑定回调
            this.uiData.handler = handler;
        };
        /**
         * 设置当前是否可以投注
         * @param isBetting
         */
        BetPanelBaseUI.prototype.SetBetting = function (isBetting) {
            this.uiData.isBetting = isBetting;
        };
        /**
        * 给每一个Button绑定点击事件
        * 为每一个Label绑定DataChange
        * 存储Label中心点坐标
        * 存储Btn对象
        */
        BetPanelBaseUI.prototype.BindClick = function () {
            var language = new LanguageUtils.Language();
            //绑定投注按钮
            for (var i = 1; i <= 13; i++) {
                var betBoxChild = this.ui.BetBox.getChildByName(Enum.BetPosType[i]);
                //绑定点击事件 
                betBoxChild.on(Laya.Event.CLICK, this, this.Bet, [i - 1]);
                this.betBtnArr.push(betBoxChild);
                this.betMoneyLabelArr.push(betBoxChild.getChildAt(2));
                this.oddsLabelArr.push(betBoxChild.getChildAt(1));
                //设置多语言
                betBoxChild.getChildAt(0).text = language.GetLanguage(Enum.BetPosType[i].toLowerCase());
            }
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
            //筹码点击
            for (var i = 0; i < 5; i++) {
                var chip = this.ui.Chips.getChildAt(i);
                this.chipsBtn.push(chip);
                chip.on(Laya.Event.CLICK, this, this.ChangeChip, [i, chip.label]);
            }
            this.GetChipsPoint();
            this.GetBetBtnPoint();
        };
        //还原btn样式,清空label
        BetPanelBaseUI.prototype.ResetBetBtnLabel = function () {
            //启用投注和撤销按钮
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;
            //还原数值            
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betMoneyLabelArr[i].label = "0";
                this.betMoneyLabelArr[i].visible = false;
            }
        };
        //修改全部投注按钮状态（启用禁用）
        BetPanelBaseUI.prototype.SetBetBtn = function (disabled) {
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].disabled = disabled;
            }
        };
        /**
         * 设置赔率
         * @param odds 服务器传来的赔率
         */
        BetPanelBaseUI.prototype.SetOdds = function (odds) {
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                var odd = odds[i + 1];
                if (odd == 0) {
                    this.oddsLabelArr[i].text = "---";
                    this.betBtnArr[i].disabled = true;
                }
                else {
                    this.oddsLabelArr[i].text = odds[i + 1];
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
        BetPanelBaseUI.prototype.Bet = function (i) {
            //启用确认投注按钮
            this.ui.ConfirmBetBtn.disabled = false;
            this.ui.CancleBetBtn.disabled = false;
            var params = {
                Type: ClickType.ODDS,
                Data: i + 1
            };
            this.uiData.handler.runWith(params);
            Utils.BackgroundMusic.PlaySounds("sound/bet.wav");
        };
        /**
         * 设置不同位置的投注总金额
         */
        BetPanelBaseUI.prototype.SetBetPosMsg = function (BetResultMsg, UnSureBet) {
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
         * 设置不同位置的投注总金额
         */
        BetPanelBaseUI.prototype.SetBetPos = function (BetResultMsg, UnSureBet) {
            //无投注成功的注单，直接还原初始状态
            var length = UnSureBet ? UnSureBet.length : 0;
            var unSucreData = {};
            if (UnSureBet && UnSureBet.length > 0) {
                for (var i = 0; i < length; i++) {
                    var index = UnSureBet[i].BetPos - 1;
                    unSucreData[UnSureBet[i].BetPos] = UnSureBet[i].Amount;
                }
                //启用确认投注按钮
                this.ui.ConfirmBetBtn.disabled = false;
                this.ui.CancleBetBtn.disabled = false;
            }
            if (!BetResultMsg) {
                BetResultMsg = {};
            }
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                var index = i + 1;
                this.betMoneyLabelArr[i].label = BetResultMsg[index] ? BetResultMsg[index] : 0 + (unSucreData[index] ? unSucreData[index] : 0);
                if (BetResultMsg[index] || unSucreData[index]) {
                    this.betMoneyLabelArr[i].visible = true;
                }
                else {
                    this.betMoneyLabelArr[i].visible = false;
                }
            }
        };
        /**
         * 游戏初始化
         */
        BetPanelBaseUI.prototype.GameInit = function (BetResultMsg, unSureBetMsg, limit) {
            //设置额度
            this.SetLimit(limit);
            //设置总投注金额
            this.SetBetPos(BetResultMsg, unSureBetMsg);
            //重置按钮皮肤
            this.RestSkin();
        };
        /**
         * 游戏结果
         */
        BetPanelBaseUI.prototype.GameResult = function (BetResultMsg, unSureBetMsg, limit) {
            //设置最大限额
            if (limit) {
                this.SetLimit(limit);
            }
            //设置总投注金额
            this.SetBetPos(BetResultMsg);
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
        BetPanelBaseUI.prototype.SetLimit = function (limit) {
            //设置最大限额
            this.maxBet = limit.MaxBet;
            //设置最小限额
            this.minBet = limit.MinBet;
            this.ui.maxBetLabel.text = "\u6700\u5927:" + limit.MaxBet;
            this.ui.minBetLabel.text = "\u6700\u5C0F:" + limit.MinBet;
        };
        /**
         * 重置按钮皮肤
         */
        BetPanelBaseUI.prototype.RestSkin = function () {
            for (var index = 0; index < 12; index++) {
            }
        };
        /**
         * 结算结果
         */
        BetPanelBaseUI.prototype.SettleResult = function (data, betData) {
            this.uiData.guessSuccess = false;
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
                    this.uiData.guessSuccess = true;
                }
            }
            if (!this.uiData.guessSuccess) {
                this.ShowMsg("很遗憾，再接再厉");
            }
        };
        /**
         * 确认投注
         * 生成注单
         */
        BetPanelBaseUI.prototype.ConfirmBet = function () {
            //启用投注和撤销按钮
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;
            var params = {
                Type: ClickType.BET
            };
            this.uiData.handler.runWith(params);
        };
        /**
         * 取消投注
        */
        BetPanelBaseUI.prototype.CancleBet = function () {
            this.ResetBetBtnLabel();
            var params = {
                Type: ClickType.CANCEL
            };
            this.uiData.handler.runWith(params);
        };
        /**
         * 切换筹码
         * @param i 筹码编号
         */
        BetPanelBaseUI.prototype.ChangeChip = function (i) {
            //获取当前点击的筹码  
            this.uiData.selectedChipNum = i;
            this.selectedChip = this.ui.Chips.getChildAt(i);
            this.chipPrice = Number(this.selectedChip.label);
            for (var i_1 = 0; i_1 < 5; i_1++) {
                var chip = this.ui.Chips.getChildAt(i_1);
                chip.skin = this.chipsNormalSkin;
                chip.scale(0.9, 0.9);
            }
            this.selectedChip.skin = this.chipsSelectSkin;
            this.selectedChip.scale(1.1, 1.1);
            if (this.uiData.handler) {
                var params = {
                    Type: ClickType.CHIP,
                    Data: this.chipPrice
                };
                this.uiData.handler.runWith(params);
            }
        };
        /**
         * 禁用所有按钮
         */
        BetPanelBaseUI.prototype.DisabledAllBtn = function () {
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;
            this.SetBetBtn(true);
        };
        /**
         * 禁用投注和取消按钮
         */
        BetPanelBaseUI.prototype.DisabledBetBtn = function () {
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;
        };
        /**
         * 提示消息
         * @param txt 提示的信息
         */
        BetPanelBaseUI.prototype.ShowMsg = function (txt) {
            var _this = this;
            this.ui.MsgPanel.changeText(txt);
            this.ui.MsgPanel.visible = true;
            Laya.timer.once(1500, this, function () { _this.ui.MsgPanel.visible = false; });
        };
        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        BetPanelBaseUI.prototype.ChipsFlyCallBack = function (flyChip, curBetPosChip, value) {
            //回收
            flyChip.removeSelf();
            Laya.Pool.recover("flyChip", flyChip);
            if (this.uiData.isBetting) {
                //设置最终值 
                curBetPosChip.label = value.toString();
                //显示当前筹码
                curBetPosChip.visible = true;
            }
        };
        return BetPanelBaseUI;
    }());
    ScenePanel.BetPanelBaseUI = BetPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
