/// <reference path="../Logic/MulBet/MulBetInfoDto.ts"/>
namespace MulBet {
    /*
    * 投注位置
    */
    export class BetPos {
        public width: number;
        public height: number;
        public x: number;
        public y: number;
        public zOrder: number = 0;
        public MinLimit: number;
        public MaxLimit: number;
        public Pos: number;//服务器对应位置

        public Text: string;

        public Odds: number;
        public Status: MulBet.BetPosStatus;
        public Value: number;
        public Type: number;//位置的类型 由游戏确定

        public ui: any;
        private ListenEventKey: string = ""

        constructor(eventKey: string) {
            this.ListenEventKey = eventKey;
        }

        /** 
         * 设置UI类型
        */
        public SetUI(ui: any, Type?: number): void {
            this.ui = ui;
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
        public GetValue(): MulBet.BetPosValue {
            let betPosValue = new MulBet.BetPosValue();
            betPosValue.MinLimit = this.MinLimit;
            betPosValue.MaxLimit = this.MaxLimit;
            betPosValue.Pos = this.Pos;
            betPosValue.Odds = this.Odds;
            return betPosValue;
        }

        //刷新
        public Refresh(): void {
            this.ui.disabled = false;
            this.ui.pos(this.x, this.y);
            this.ui.size(this.width, this.height);
            this.ui.zOrder = this.zOrder;
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

            if (this.Status == MulBet.BetPosStatus.Forbid) {
                this.ui.disabled = true;
            }

        }
        /**
         * 设置按钮是否禁用
         */
        public SetStatus(disabled: boolean): void {
            if (disabled) {
                this.Status = MulBet.BetPosStatus.Forbid;
                this.ui.disabled = true;
            } else {
                this.Status = MulBet.BetPosStatus.Allow;
                this.ui.disabled = false;
            }
        }

        /**
         * 设置值
         * @param value 
         */
        public SetValue(value?: number): void {
            this.Value = value;
        }

        /**
         * 设置赔率
         * @param value 
         */
        public SetOdds(value: number): void {
            if (value == 0) {
                this.Status = MulBet.BetPosStatus.Forbid;
            } else {
                this.Status = MulBet.BetPosStatus.Allow;
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
            let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
            data.Value = this.GetValue();
            data.Type = Enum.ListenViewEnum.BetPos;

            let event = new CustomEvent(this.ListenEventKey, { detail: data });
            document.dispatchEvent(event);

        }
    }
}