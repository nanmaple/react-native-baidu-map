namespace ScenePanel {
    export enum ClickType {
        ODDS = 0,
        BET,
        CANCEL,
        CHIP
    }
    export class ClickResultDto {
        public Type: ClickType;
        public Data?: number | Enum.BetPosType;
    }
    export class BetPanel extends ui.BetPanelUI {
        private handler: Laya.Handler;                         //回调句柄
        private chipPrice: number = 5;                         //筹码
        private selectedChip: Laya.Button;                    //当前选择的筹码对象
        private selectedChipNum: Number = 0;                  //当前选择的筹码编号
        private chipsPoint: Laya.Point[] = new Array();      //全部筹码坐标
        private betBtnPoint: Laya.Point[] = new Array();     //投注位置坐标
        private betBtnArr: Laya.Box[] = new Array();         //投注按钮对象
        private oddsLabelArr: Laya.Label[] = new Array(); //赔率表签
        private betMoneyLabelArr: Laya.Button[] = new Array(); //投注位置上的筹码
        private chipsBtn: Laya.Button[] = new Array();        //全部筹码
        private guessSuccess: boolean = false;               //是否有猜中
        private chipsNormalSkin = "ui/btn_chip.png";
        private chipsSelectSkin = "ui/chip_s.png";
        private maxBet: number;                           //最大限额
        private minBet: number;                           //最小限额
        private flyChip: Laya.Button;                     //缓动对象
        private isBetting: boolean;

        private heightRatio: number;
        private widthRatio: number;

        /**
         * 投注面板构造函数
         * @param handler 传入回调绑定
         */
        constructor() {
            super();
            this.ResetBetBtnLabel();
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
            if (GameConfig.RatioType) {
                this.CancleBetBtn.scale(GameConfig.HeightWidth, 1);
                this.ConfirmBetBtn.scale(GameConfig.HeightWidth, 1);
                this.Chips.scale(GameConfig.HeightWidth, 1);
                this.BetBox.scale(GameConfig.HeightWidth, 1);
            } else {
                this.CancleBetBtn.scale(1, GameConfig.WidthHeight);
                this.ConfirmBetBtn.scale(1, GameConfig.WidthHeight);
                this.Chips.scale(1, GameConfig.WidthHeight);
                this.BetBox.scale(1, GameConfig.WidthHeight);
            }
        }

        /**
        * 设置点击事件回调handler回调
        * @param handler 
        */
        public SetClickHandelr(handler: Laya.Handler): void {
            //绑定回调
            this.handler = handler;
            this.BindClick();
        }

        /**
         * 设置当前是否可以投注
         * @param isBetting 
         */
        public SetBetting(isBetting: boolean): void {
            this.isBetting = isBetting;
        }



        /**
    	* 给每一个Button绑定点击事件
    	* 为每一个Label绑定DataChange
    	* 存储Label中心点坐标
    	* 存储Btn对象
    	*/
        private BindClick(): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            //绑定投注按钮
            for (let i = 1; i <= 9; i++) {
                let betBoxChild: any = this.BetBox.getChildByName(Enum.BetPosType[i]);
                //绑定点击事件 
                betBoxChild.on(Laya.Event.CLICK, this, this.Bet, [i - 1]);
                this.betBtnArr.push(betBoxChild as Laya.Box);
                this.betMoneyLabelArr.push(betBoxChild.getChildAt(2) as Laya.Button);
                this.oddsLabelArr.push(betBoxChild.getChildAt(1) as Laya.Label);
                //设置多语言
                betBoxChild.getChildAt(0).text = language.GetLanguage(Enum.BetPosType[i].toLowerCase());
            }
            //确认投注
            this.ConfirmBetBtn.on(Laya.Event.CLICK, this, this.ConfirmBet);
            //取消投注
            this.CancleBetBtn.on(Laya.Event.CLICK, this, this.CancleBet);
            //筹码点击
            for (let i = 0; i < 5; i++) {
                let chip = this.Chips.getChildAt(i) as Laya.Button;
                this.chipsBtn.push(chip);
                chip.on(Laya.Event.CLICK, this, this.ChangeChip, [i, chip.label]);
            }
            this.GetChipsPoint();
            this.GetBetBtnPoint();

        }
        /**
         * 获取筹码坐标
         * 
         */
        private GetChipsPoint(): void {
            for (let i = 0; i < this.chipsBtn.length; i++) {
                let x = this.chipsBtn[i].getBounds().x,
                    y = this.chipsBtn[i].getBounds().y,
                    width = this.chipsBtn[i].getBounds().width,
                    height = this.chipsBtn[i].getBounds().height;
                this.chipsPoint.push((this.chipsBtn[i].parent as Laya.Image).localToGlobal(new Laya.Point(x, y)));
            }
        }
        /**
        * 获取所有投注位置坐标
        * 
        */
        private GetBetBtnPoint(): void {
            for (let i = 0; i < this.betMoneyLabelArr.length; i++) {
                let x = this.betMoneyLabelArr[i].getBounds().x;
                let y = this.betMoneyLabelArr[i].getBounds().y;
                let width = this.betMoneyLabelArr[i].getBounds().width;
                let height = this.betMoneyLabelArr[i].getBounds().height;
                let point: Laya.Point = (this.betMoneyLabelArr[i].parent as Laya.Image).localToGlobal(new Laya.Point(x, y));

                if (GameConfig.RatioType) {
                    point.y += 498;
                } else {
                }
                this.betBtnPoint.push(point);
            }
        }

        //还原btn样式,清空label
        public ResetBetBtnLabel(): void {
            //启用投注和撤销按钮
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;

            //还原数值            
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betMoneyLabelArr[i].label = "0";
                this.betMoneyLabelArr[i].visible = false;

            }
        }

        //修改全部投注按钮状态（启用禁用）
        public SetBetBtn(disabled: boolean): void {
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                this.betBtnArr[i].disabled = disabled;
            }
        }
        /**
         * 设置赔率
         * @param Odds 服务器传来的赔率 
         */
        public SetOdds(Odds): void {
            for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                let odd = Odds[i + 1];
                if (odd == 0) {
                    this.oddsLabelArr[i].text = "---";
                    this.betBtnArr[i].disabled = true;
                } else {
                    this.oddsLabelArr[i].text = Odds[i + 1];
                }

            }

        }
        /**
          * 投注
          * btn点击事件
          * @param i 当前点击的btn的序号 
          * 修改btn样式
          * 实例化一个缓动动画
          */
        private Bet(i: number): void {
            //启用确认投注按钮
            this.ConfirmBetBtn.disabled = false;
            this.CancleBetBtn.disabled = false;
            let params: ClickResultDto = {
                Type: ClickType.ODDS,
                Data: i + 1
            }
            this.handler.runWith(params);
        }

        /**
         * 设置不同位置的投注总金额
         */
        public SetBetPos(BetResultMsg: any, UnSureBet?: any): void {

            //清空投注但未确认的注单信息
            if (UnSureBet) {
                for (let i = 0, len = UnSureBet.length; i < len; i++) {
                    let index: number = UnSureBet[i].BetPos - 1;
                    this.betMoneyLabelArr[index].visible = false;
                }
            }

            //无投注成功的注单，直接还原初始状态
            if (!BetResultMsg) {
                for (let i = 0, len = this.betBtnArr.length; i < len; i++) {
                    this.betMoneyLabelArr[i].label = "0";
                    this.betMoneyLabelArr[i].visible = false;
                }
                return;
            }
            for (let i in BetResultMsg) {
                let index: number = Number(i) - 1;
                if (!BetResultMsg[i]) {
                    this.betMoneyLabelArr[index].visible = false;
                } else if (!this.betMoneyLabelArr[index].visible) {
                    this.betMoneyLabelArr[index].visible = true;
                }
                if (this.betMoneyLabelArr[index].label !== BetResultMsg[i]) {
                    this.betMoneyLabelArr[index].label = BetResultMsg[i];
                }
            }

        }
        /**
         * 游戏初始化
         */
        public GameInit(BetResultMsg: any, limit: Dto.LimitDto): void {
            //设置额度
            this.SetLimit(limit);
            //设置总投注金额
            this.SetBetPos(BetResultMsg);
            //重置按钮皮肤
            this.RestSkin();
        }
        /**
         * 游戏结果
         */
        public GameResult(BetResultMsg: any, unSureBetMsg: any, limit?: Dto.LimitDto): void {
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
        }

        /**
         * 设置投注限额
         * @param maxBet 
         * @param minBet 
         */
        private SetLimit(limit: Dto.LimitDto): void {
            //设置最大限额
            this.maxBet = limit.MaxBet;
            //设置最小限额
            this.minBet = limit.MinBet;
        }

        /**
         * 重置按钮皮肤
         */
        private RestSkin(): void {
            for (var index = 0; index < 9; index++) {
            }
        }        /**
         * 结算结果
         */
        public SettleResult(data): void {
            //总赢数目
            let win: number = 0;
            let gameResult: Dto.CardInfoDto = JSON.parse(data.GameResult);
            let card: number = Utils.Poker.GetNumber(gameResult.ThirdCard);
            let msg: Array<string> = new Array<string>();
            for (let i in data.SettleResult) {
                if (data.SettleResult[i] > 0) {
                    if (card == 7) {
                        let pos: Enum.BetPosType = Number(i);
                        if (Enum.BetPosType.BIG == pos) {
                            msg.push("大");
                            continue;
                        } else if (Enum.BetPosType.SMALL == pos) {
                            msg.push("小");
                            continue;
                        } else if (Enum.BetPosType.ODD == pos) {
                            msg.push("单");
                            continue;
                        } else if (Enum.BetPosType.EVEN == pos) {
                            msg.push("双");
                            continue;
                        }
                    }
                    win += data.SettleResult[i];                                                                                                                                                                                                                                    
                    this.betBtnArr[Number(i) - 1].gray = false;

                    this.guessSuccess = true;
                }
            }
            if (this.guessSuccess) {
                let backMsg: string = msg.length > 0 ? `,${msg.join(',')}为和局退还本金` : ``;
                this.ShowMsg(`猜中了：${Math.round(win)}${backMsg}`);
                this.guessSuccess = false;
            } else if (msg.length > 0) {
                this.ShowMsg(`${msg.join(',')}为和局退还本金`);
            }
            else {
                this.ShowMsg("很遗憾，再接再厉");
            }

        }
        /**
         * 确认投注
         * 生成注单
         */
        private ConfirmBet(): void {
            //启用投注和撤销按钮
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;

            let params: ClickResultDto = {
                Type: ClickType.BET
            }
            this.handler.runWith(params);
        }
        /**
         * 取消投注
        */
        private CancleBet(): void {
            this.ResetBetBtnLabel();
            let params: ClickResultDto = {
                Type: ClickType.CANCEL
            }
            this.handler.runWith(params);
        }

        /**
         * 切换筹码
         * @param i 筹码编号
         */

        private ChangeChip(i: number): void {
            //获取当前点击的筹码  
            this.selectedChipNum = i;
            this.selectedChip = this.Chips.getChildAt(i) as Laya.Button;
            this.chipPrice = Number(this.selectedChip.label);
            for (let i = 0; i < 5; i++) {
                let chip = this.Chips.getChildAt(i) as Laya.Button;
                chip.skin = this.chipsNormalSkin;
                chip.scale(0.9, 0.9);
            }
            this.selectedChip.skin = this.chipsSelectSkin;
            this.selectedChip.scale(1.1, 1.1);
            let params: ClickResultDto = {
                Type: ClickType.CHIP,
                Data: this.chipPrice
            }
            this.handler.runWith(params);
        }
        /**
         * 禁用所有按钮
         */
        public DisabledAllBtn(): void {
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
            this.SetBetBtn(true);
        }


        /**
         * 禁用投注和取消按钮
         */
        public DisabledBetBtn(): void {
            this.ConfirmBetBtn.disabled = true;
            this.CancleBetBtn.disabled = true;
        }

        /**
         * 提示消息
         * @param txt 提示的信息
         */
        public ShowMsg(txt: string): void {
            this.MsgPanel.changeText(txt);
            this.MsgPanel.visible = true;
            Laya.timer.once(1500, this, () => { this.MsgPanel.visible = false; });
        }

        /**
         * 筹码动画
         * @param endX 结束位置x坐标
         * @param endY 结束位置y坐标
         * @param curBetPosChip 投注位置上的筹码
         * @param value 投注金额         
         * @param value 缓动后投注数量
         */
        public ChipsFly(i: number, value: number): void {
            let curBetPosChip = this.betBtnArr[i].getChildAt(2) as Laya.Button;
            //筹码动画
            let endX = (this.betBtnPoint[i].x);
            let endY = (this.betBtnPoint[i].y);
            //从对象池获取移动对象
            let flyChip = Laya.Pool.getItemByClass("flyChip", Laya.Button);
            //设置状态数
            flyChip.stateNum = 1;
            flyChip.label = this.chipPrice.toString();
            //设置初始位置为当前选择的筹码的位置
            flyChip.pos((this.chipsPoint[this.selectedChipNum.toString()].x), (this.chipsPoint[this.selectedChipNum.toString()].y) - 40);
            flyChip.skin = this.chipsNormalSkin;

            if (GameConfig.RatioType) {
                flyChip.scale(GameConfig.HeightWidth, 1);
            } else {
                flyChip.scale(1, GameConfig.WidthHeight);
            }
            this.addChild(flyChip);

            //开始缓动
            Laya.Tween.to(flyChip, { x: endX, y: endY }, 700, Laya.Ease.cubicInOut, Laya.Handler.create(this, this.ChipsFlyCallBack, [flyChip, curBetPosChip, value], false));

        }

        /**
         * 筹码动画回调
         * @param i i 筹码位置编号
         * @param flyChip 当前结束换动的筹码对象
         */
        private ChipsFlyCallBack(flyChip: Laya.Button, curBetPosChip, value: number) {
            //回收
            flyChip.removeSelf();
            Laya.Pool.recover("flyChip", flyChip);
            if (this.isBetting) {
                //设置最终值 
                curBetPosChip.label = value.toString();
                //显示当前筹码
                curBetPosChip.visible = true;
            }

        }
    }
}
