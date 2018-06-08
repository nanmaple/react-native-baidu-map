var Bet;
(function (Bet) {
    /*
    * name;
    */
    var BetPos = /** @class */ (function () {
        function BetPos() {
        }
        /**
         * 设置UI类型
        */
        BetPos.prototype.SetType = function (Type) {
            this.Type = Type;
            switch (Type) {
                case 0:
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
            this.ui.pos(this.x, this.y);
            this.ui.size(this.width, this.height);
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
         * 设置值
         * @param value
         */
        BetPos.prototype.SetValue = function (value) {
            if ((value + this.Value) >= this.MaxLimit) {
                this.Status = GameEnum.BetPosStatus.Full;
                this.Value = this.MaxLimit;
                return;
            }
            else if (value != null && value < this.MinLimit) {
                return;
            }
            else if (value == null) {
                this.Status = GameEnum.BetPosStatus.Forbid;
            }
            else {
                this.Status = GameEnum.BetPosStatus.Allow;
                if (this.Value) {
                    value += this.Value;
                }
            }
            this.Value = value;
        };
        /**
         * 设置赔率
         * @param value
         */
        BetPos.prototype.SetOdds = function (value) {
            if (this.Odds == null || this.Status == GameEnum.BetPosStatus.Forbid) {
                //是否判断禁用状态时 赔率的显示
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
            data.value = this.GetValue();
            data.Type = Enum.ListenUIEnum.BetPos;
            var event = new CustomEvent("GameUI", { detail: data });
            document.dispatchEvent(event);
        };
        return BetPos;
    }());
})(Bet || (Bet = {}));
//# sourceMappingURL=BetPos.js.map