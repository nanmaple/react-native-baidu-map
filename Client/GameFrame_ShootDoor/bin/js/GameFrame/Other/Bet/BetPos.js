var Bet;
(function (Bet) {
    /*
    * name;
    */
    var BetPos = /** @class */ (function () {
        function BetPos() {
            this.zOrder = 0;
        }
        /**
         * 设置UI类型
        */
        BetPos.prototype.SetType = function (Type) {
            this.Type = Type;
            switch (Type) {
                case 0:
                    this.ui = new ui.BetBtnVUI();
                    break;
                case 1:
                    this.ui = new ui.BetBtnHUI();
                    break;
                case 2:
                    this.ui = new ui.BetMoreBtnVUI();
                    break;
                case 3:
                    this.ui = new ui.BetMoreBtnHUI();
                    break;
                default:
                    this.ui = new ui.BetBtnVUI();
                    break;
            }
            if (this.ui) {
                this.ui.on(Laya.Event.CLICK, this, this.onClick);
            }
        };
        /**
         * 返回投注位置UI
        */
        BetPos.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 获取投注位置信息
        */
        BetPos.prototype.GetValue = function () {
            var betPosValue = new Bet.BetPosValue();
            betPosValue.MinLimit = this.MinLimit;
            betPosValue.MaxLimit = this.MaxLimit;
            betPosValue.Pos = this.Pos;
            betPosValue.Odds = this.Odds;
            return betPosValue;
        };
        //刷新
        BetPos.prototype.Refresh = function () {
            this.ui.disabled = false;
            this.ui.pos(this.x, this.y);
            this.ui.size(this.width, this.height);
            this.ui.zOrder = this.zOrder;
            //this.ui处理
            var uiOdd = this.ui.getChildByName('betOdd');
            uiOdd.text = this.Odds ? this.Odds.toString() : '---';
            var betBtn = this.ui.getChildByName('betBtn');
            if (this.Value) {
                betBtn.label = this.Value.toString();
                betBtn.visible = true;
            }
            else {
                betBtn.visible = false;
            }
            var betName = this.ui.getChildByName('betName');
            betName.text = this.Text;
            if (this.Status == GameEnum.BetPosStatus.Forbid) {
                this.ui.disabled = true;
            }
        };
        /**
         * 设置按钮是否禁用
         */
        BetPos.prototype.SetStatus = function (disabled) {
            if (disabled) {
                this.Status = GameEnum.BetPosStatus.Forbid;
                this.ui.disabled = true;
            }
            else {
                this.Status = GameEnum.BetPosStatus.Allow;
                this.ui.disabled = false;
            }
        };
        /**
         * 设置值
         * @param value
         */
        BetPos.prototype.SetValue = function (value) {
            this.Value = value;
        };
        /**
         * 设置赔率
         * @param value
         */
        BetPos.prototype.SetOdds = function (value) {
            if (value == 0) {
                this.Status = GameEnum.BetPosStatus.Forbid;
            }
            else {
                this.Status = GameEnum.BetPosStatus.Allow;
            }
            this.Odds = value;
        };
        /**
         * 设置文字
         * @param value
         */
        BetPos.prototype.SetText = function (value) {
            this.Text = value;
        };
        /**
         * 投注点击事件
         */
        BetPos.prototype.onClick = function () {
            var data = new Dto.BroadcastDto();
            data.Value = this.GetValue();
            data.Type = Enum.ListenUIEnum.BetPos;
            var event = new CustomEvent("GameUI", { detail: data });
            document.dispatchEvent(event);
        };
        return BetPos;
    }());
    Bet.BetPos = BetPos;
})(Bet || (Bet = {}));
//# sourceMappingURL=BetPos.js.map