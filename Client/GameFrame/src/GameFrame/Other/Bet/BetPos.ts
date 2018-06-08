namespace Bet {
    /*
    * name;
    */
    class BetPos {
        public width: number;
        public height: number;
        public x: number;
        public y: number;
        public MinLimit: number;
        public MaxLimit: number;
        public Pos: number;//服务器对应位置

        public Text: string;

        public Odds: number;
        public Status: GameEnum.BetPosStatus;
        public Value: number;
        public Type: number;//位置的类型 由游戏确定

        public ui: ui.BetBtnVUI;

        constructor() {
        }

        /** 
         * 设置UI类型
        */
        private SetType(Type: number): void {
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
        }

        /** 
         * 返回投注位置UI
        */
        public GetUI(): any {
            return this.ui;
        }

        /** 
         * 获取投注位置信息
        */
        public GetValue(): Bet.BetPosValue {
            let betPosValue = new Bet.BetPosValue();
            betPosValue.MinLimit = this.MinLimit;
            betPosValue.MaxLimit = this.MaxLimit;
            betPosValue.Pos = this.Pos;
            betPosValue.Odds = this.Odds;
            return betPosValue;
        }

        //刷新
        public Refresh(): void {
            this.ui.pos(this.x, this.y);
            this.ui.size(this.width, this.height);
            //this.ui处理
            let uiOdd = <Laya.Label>this.ui.getChildByName('betOdd');
            uiOdd.text = this.Odds ? this.Odds.toString() : '---';

            let betBtn = <Laya.Button>this.ui.getChildByName('betBtn');
            if (this.Value) {
                betBtn.label = this.Value.toString();
                betBtn.visible = true;
            } else {
                betBtn.visible = false;
            }

            let betName = <Laya.Label>this.ui.getChildByName('betName');
            betName.text = this.Text;

            if (this.Status == GameEnum.BetPosStatus.Forbid) {
                this.ui.disabled = true;
            }

        }

        /**
         * 设置值
         * @param value 
         */
        public SetValue(value: number): void {
            if ((value + this.Value) >= this.MaxLimit) {
                this.Status = GameEnum.BetPosStatus.Full;
                this.Value = this.MaxLimit;
                return;
            } else if(value != null && value < this.MinLimit){
                return;
            } else if (value == null) {
                this.Status = GameEnum.BetPosStatus.Forbid;
            } else {
                this.Status = GameEnum.BetPosStatus.Allow;
                if (this.Value) {
                    value += this.Value;
                }
            }
            this.Value = value;
        }

        /**
         * 设置赔率
         * @param value 
         */
        public SetOdds(value: number): void {
            if (this.Odds == null || this.Status == GameEnum.BetPosStatus.Forbid) {
                //是否判断禁用状态时 赔率的显示
            }
            this.Odds = value;
        }

        /**
         * 设置文字
         * @param value 
         */
        public SetText(value: string): void {
            this.Text = value;
        }

        /**
         * 投注点击事件
         */
        private onClick(): void {
            let data: Dto.BroadcastDto = new Dto.BroadcastDto();
            data.value = this.GetValue();
            data.Type = Enum.ListenUIEnum.BetPos;

            let event = new CustomEvent("GameUI", { detail: data });
            document.dispatchEvent(event);

        }
    }
}