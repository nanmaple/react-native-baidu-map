var ScenePanel;
(function (ScenePanel) {
    var BetMorePanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function BetMorePanelBaseUI(isHor) {
            this.chipPrice = 5; //筹码
            this.chipsPoint = new Array(); //全部筹码坐标
            this.betBtnPoint = new Array(); //投注位置坐标
            this.betBtnArr = new Array(); //投注按钮对象
            this.oddsLabelArr = new Array(); //赔率表签
            this.betMoneyLabelArr = new Array(); //投注位置上的筹码
            this.chipsBtn = new Array(); //全部筹码
            if (isHor) {
                this.ui = new ui.BetMorePanelUI();
            }
            else {
                this.ui = new ui.BetMorePanel_VerUI();
            }
            this.ui.zOrder = 8;
            this.uiData = ScenePanel.BetMorePanelUIData.GetInstance();
            this.ui.visible = this.uiData.visible;
            this.ResetBetBtnLabel();
            this.DisabledBetBtn(true);
            this.ui.Close.on(Laya.Event.CLICK, this, this.HideBetMorePanel);
            this.timeEffect = new TimeEffect(this.ui.time);
        }
        /**
         * 开始倒计时
         * @param time
         */
        BetMorePanelBaseUI.prototype.StartGameTime = function (time) {
            this.ui.time.visible = true;
            this.timeEffect.StartGameTime(time);
        };
        /**
         * 游戏时间结束
         */
        BetMorePanelBaseUI.prototype.EndGameTime = function () {
            this.ui.time.visible = false;
            this.timeEffect.EndGameTime();
        };
        /**
         * 显示当前投注面板
         */
        BetMorePanelBaseUI.prototype.ShowBetMorePanel = function () {
            this.uiData.visible = true;
            this.ui.visible = this.uiData.visible;
        };
        /**
         * 隐藏当前投注面板
         */
        BetMorePanelBaseUI.prototype.HideBetMorePanel = function () {
            this.uiData.visible = false;
            this.ui.visible = this.uiData.visible;
        };
        /**
         * 获取UI
         */
        BetMorePanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
        * 设置点击事件回调handler回调
        * @param handler
        */
        BetMorePanelBaseUI.prototype.SetClickHandelr = function (handler) {
            //绑定回调
            this.uiData.handler = handler;
        };
        /**
         * 设置当前是否可以投注
         * @param isBetting
         */
        BetMorePanelBaseUI.prototype.SetBetting = function (isBetting) {
            this.uiData.isBetting = isBetting;
        };
        /**
        * 给每一个Button绑定点击事件
        * 为每一个Label绑定DataChange
        * 存储Label中心点坐标
        * 存储Btn对象
        */
        BetMorePanelBaseUI.prototype.BindClick = function () {
            var language = new LanguageUtils.Language();
            //绑定投注按钮
            for (var i = 1; i <= 52; i++) {
                var j = i % 13 == 0 ? 100 * Math.floor(i / 13) + 13 : Math.floor(i / 13 + 1) * 100 + i % 13;
                var betBoxChild = this.ui.BetBox.getChildByName(Enum.BetMorePosType[j]);
                //绑定点击事件 
                betBoxChild.on(Laya.Event.CLICK, this, this.Bet, [i - 1, j]);
                this.betBtnArr.push(betBoxChild);
                this.betMoneyLabelArr.push(betBoxChild.getChildAt(4));
                this.oddsLabelArr.push(betBoxChild.getChildAt(2));
            }
            //确认投注
            this.ui.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.ui.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
        };
        //还原btn样式,清空label
        BetMorePanelBaseUI.prototype.ResetBetBtnLabel = function () {
            //启用投注和撤销按钮
            this.DisabledBetBtn(true);
            //还原数值            
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betMoneyLabelArr[i].label = "0";
                this.betMoneyLabelArr[i].visible = false;
            }
        };
        /**
         * 禁用所有按钮
         */
        BetMorePanelBaseUI.prototype.DisabledAllBtn = function () {
            this.DisabledBetBtn(true);
            this.DisabledBetPanel(true);
        };
        /**
         * 禁用投注和取消按钮
         */
        BetMorePanelBaseUI.prototype.DisabledBetBtn = function (disabled) {
            if (disabled === void 0) { disabled = true; }
            this.ui.ConfirmBetBtn.disabled = disabled;
            this.ui.CancleBetBtn.disabled = disabled;
        };
        //修改全部投注按钮状态（启用禁用）
        BetMorePanelBaseUI.prototype.DisabledBetPanel = function (disabled) {
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].disabled = disabled;
            }
        };
        /**
         * 设置赔率
         * @param odds 服务器传来的赔率
         */
        BetMorePanelBaseUI.prototype.SetOdds = function (odds) {
            for (var i = 1, len = this.betBtnArr.length; i <= len; i++) {
                var j = i % 13 == 0 ? 100 * Math.floor(i / 13) + 13 : Math.floor(i / 13 + 1) * 100 + i % 13;
                var odd = odds[j];
                if (odd == 0) {
                    this.oddsLabelArr[i - 1].text = "---";
                    this.betBtnArr[i - 1].disabled = true;
                    this.betBtnArr[i - 1].Show();
                }
                else {
                    this.betBtnArr[i - 1].Hide();
                    this.oddsLabelArr[i - 1].text = odds[j];
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
        BetMorePanelBaseUI.prototype.Bet = function (i, pos) {
            //启用确认投注按钮
            if (this.oddsLabelArr[i].text != "---") {
                this.DisabledBetBtn(false);
            }
            var params = {
                Type: ScenePanel.ClickType.ODDS,
                Data: pos
            };
            this.uiData.handler.runWith(params);
        };
        /**
         * 设置不同位置的投注总金额
         */
        BetMorePanelBaseUI.prototype.SetBetPosMsg = function (BetResultMsg, UnSureBet) {
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
        BetMorePanelBaseUI.prototype.SetBetPos = function (BetResultMsg, UnSureBet) {
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
            for (var i = 1, len = this.betBtnArr.length; i <= len; i++) {
                var index = i % 13 == 0 ? 100 * Math.floor(i / 13) + 13 : Math.floor(i / 13 + 1) * 100 + i % 13;
                this.betMoneyLabelArr[i - 1].label = BetResultMsg[index] ? BetResultMsg[index] : 0 + (unSucreData[index] ? unSucreData[index] : 0);
                if (BetResultMsg[index] || unSucreData[index]) {
                    this.betMoneyLabelArr[i - 1].visible = true;
                }
                else {
                    this.betMoneyLabelArr[i - 1].visible = false;
                }
            }
        };
        /**
         * 游戏初始化
         */
        BetMorePanelBaseUI.prototype.GameInit = function (BetResultMsg, unSureBetMsg, canBet) {
            if (canBet) {
                //禁用按钮
                this.DisabledBetPanel(false);
                this.SetBetting(true);
                //设置总投注金额
                this.SetBetPos(BetResultMsg, unSureBetMsg);
            }
            else {
                this.SetBetting(false);
                //设置总投注金额
                this.SetBetPos(BetResultMsg);
                //禁用按钮
                this.DisabledAllBtn();
            }
        };
        /**
         * 游戏结果
         */
        BetMorePanelBaseUI.prototype.GameResult = function (BetResultMsg) {
            //设置总投注金额
            this.SetBetPos(BetResultMsg);
            //禁用按钮
            this.DisabledAllBtn();
            for (var i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].Hide();
            }
        };
        /**
         * 结算结果
         */
        BetMorePanelBaseUI.prototype.SettleResult = function (data, betData) {
            var language = new LanguageUtils.Language();
            this.uiData.guessSuccess = false;
            //总赢数目
            var win = 0;
            var gameResult = JSON.parse(data.GameResult);
            var card = Utils.Poker.GetNumber(gameResult.ThirdCard);
            var msg = new Array();
            for (var i in data.SettleResult) {
                if (data.SettleResult[i] > 0) {
                    for (var j = 1, len = this.betBtnArr.length; j <= len; j++) {
                        var index = j % 13 == 0 ? 100 * Math.floor(j / 13) + 13 : Math.floor(j / 13 + 1) * 100 + j % 13;
                        if (Number(i) == index) {
                            this.betBtnArr[j - 1].gray = false;
                            if (data.SettleResult[i] > 100) {
                                data.SettleResult[i] = Utils.Money.Format(data.SettleResult[i], 0);
                            }
                            this.betMoneyLabelArr[j - 1].label = data.SettleResult[i];
                        }
                    }
                    this.uiData.guessSuccess = true;
                }
            }
            if (!this.uiData.guessSuccess) {
                this.ShowMsg(language.GetLanguage("gameFail"));
            }
        };
        /**
         * 确认投注
         * 生成注单
         */
        BetMorePanelBaseUI.prototype.ConfirmBet = function () {
            //启用投注和撤销按钮
            this.ui.ConfirmBetBtn.disabled = true;
            this.ui.CancleBetBtn.disabled = true;
            var params = {
                Type: ScenePanel.ClickType.BET
            };
            this.uiData.handler.runWith(params);
        };
        /**
         * 取消投注
        */
        BetMorePanelBaseUI.prototype.CancleBet = function () {
            this.ResetBetBtnLabel();
            var params = {
                Type: ScenePanel.ClickType.CANCEL
            };
            this.uiData.handler.runWith(params);
        };
        /**
         * 提示消息
         * @param txt 提示的信息
         */
        BetMorePanelBaseUI.prototype.ShowMsg = function (txt) {
            Laya.timer.clear(this, this.HideMsg);
            this.ui.MsgPanel.changeText(txt);
            this.ui.MsgPanel.visible = true;
            Laya.timer.once(2000, this, this.HideMsg);
        };
        /**
         * 隐藏提示信息
         */
        BetMorePanelBaseUI.prototype.HideMsg = function () {
            this.ui.MsgPanel.visible = false;
        };
        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        BetMorePanelBaseUI.prototype.ChipsFlyCallBack = function (curBetPosChip, value) {
            if (this.uiData.isBetting) {
                //设置最终值 
                curBetPosChip.label = value.toString();
                //显示当前筹码
                curBetPosChip.visible = true;
            }
        };
        return BetMorePanelBaseUI;
    }());
    ScenePanel.BetMorePanelBaseUI = BetMorePanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
