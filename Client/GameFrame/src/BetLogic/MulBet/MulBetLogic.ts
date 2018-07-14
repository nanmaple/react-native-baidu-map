/// <reference path="./MulBetInfoDto.ts" />

namespace MulBet {
    /**
     * 多位置投注逻辑
     */
    export class MulBetLogic implements MulBet.IMulBetLogic {
        private betInfo: MulBet.BetDataDto = new MulBet.BetDataDto();
        constructor() {

        }

        /**
         * 投注
         * @param memScore 游戏分数
         * @param currentBet 本次投注信息
         */
        public Bet(memScore: number, currentBet: MulBet.BetPosValue): any {
            //用户状态判断
            //游戏状态判断
            //用户余额是否大于最小投注限额，用户已投分数与余额之差大于最小限额
            //取投注位置已投注数据(成功投分数，已投注分数，正在投注分数)
            //比较新投注数据和已投注数据,是否超过
            memScore = memScore - (this.betInfo.BetSocre + this.betInfo.BetingSocre);
            let alreadyBet: number = this.BeforeAmount(currentBet);
            let pos: number = currentBet.Pos;
            if (memScore == 0) {
                return { success: false, data: MulBet.BetReult.InsufficientBalance }
            }
            if (alreadyBet == 0 && currentBet.Amount < currentBet.MinLimit) {
                return { success: false, data: MulBet.BetReult.LowLimit }
            }

            if (alreadyBet != 0 || memScore >= currentBet.MinLimit) {//------------1

                if (alreadyBet < currentBet.MaxLimit) {//------------2

                    if (currentBet.Amount + alreadyBet > currentBet.MaxLimit) {//------------3.1
                        currentBet.Amount = currentBet.MaxLimit - alreadyBet;
                    }

                    if (memScore < currentBet.Amount) {//------------3.2
                        currentBet.Amount = memScore;
                    }

                    if (this.betInfo.NoBetSuceessData[pos]) {//------------3.3
                        this.betInfo.NoBetSuceessData[pos].Amount += currentBet.Amount;
                    } else {
                        let bet: MulBet.BetDto = new MulBet.BetDto();
                        bet.Amount = currentBet.Amount;
                        bet.BetPos = currentBet.Pos;
                        bet.Odds = currentBet.Odds;
                        this.betInfo.NoBetSuceessData[pos] = bet;
                    }
                    this.betInfo.BetSocre += currentBet.Amount;
                    return { success: true, data: (currentBet.Amount + alreadyBet) };

                } else {
                    return { success: false, data: MulBet.BetReult.OverLimit };
                }
            } else {
                return { success: false, data: MulBet.BetReult.InsufficientBalance};
            }
        }

        /**
         * 之前的投注额
         * @param currentBet 本次投注信息
         * @param betInfo 注单信息
         */
        private BeforeAmount(currentBet: MulBet.BetPosValue): number {
            let pos = currentBet.Pos;
            let alreadyBet: number = 0;

            if (this.betInfo.NoBetSuceessData[pos]) {
                alreadyBet += this.betInfo.NoBetSuceessData[pos].Amount;
            }
            if (this.betInfo.BetSuccessData && this.betInfo.BetSuccessData[pos]) {
                alreadyBet += this.betInfo.BetSuccessData[pos];
            }
            for (let i in this.betInfo.SendingBetData) {
                if (JSON.stringify(this.betInfo.SendingBetData[i]) != "{}" && this.betInfo.SendingBetData[i].Data[pos]) {
                    alreadyBet += this.betInfo.SendingBetData[i].Data[pos].Amount;
                }
            }
            return alreadyBet;
        }


        /**
         * 撤销未提交投注
         */
        public RetractBet(): any {
            this.betInfo.BetSocre = 0;
            this.betInfo.NoBetSuceessData = new Object();
            return this.betInfo;
        }

        /**
         * 确认投注
         */
        public ConfirmBet(): any {
            if (!this.betInfo.NoBetSuceessData || JSON.stringify(this.betInfo.NoBetSuceessData) == "{}") {
                return;
            }

            return Object.values(this.betInfo.NoBetSuceessData);
        }

        /**
         * 设置当前投注注单的guid
         * @param betID 消息guid
         */
        public SetMsgID(betID: string): void {
            //将当前局投注注单赋值到已发送的队列中;
            this.betInfo.SendingBetData[betID] = { Socre: this.betInfo.BetSocre, Data: this.betInfo.NoBetSuceessData };
            this.betInfo.BetingSocre += this.betInfo.BetSocre;

            this.betInfo.BetSocre = 0;
            this.betInfo.NoBetSuceessData = new Object();
        }

        /**
         * 投注Ack回调
         * @param id 消息guid
         */
        public BetAck(id: string): void {
            if (this.betInfo.SendingBetData[id]) {
                this.betInfo.SendingBetData[id] = new Object();
                this.betInfo.BetingSocre = 0;
            }
        }

        /**
         * 设置成功投注数据，默认重置为空数据
         * @param data 投注成功数据
         */
        public SetBetSuccessData(data: any = new Object()): void {
            this.betInfo.BetSuccessData = data;
        }

        /**
         * 重置新一局游戏的投注数据
         */
        public SetNewRound(): void {
            this.betInfo.BetSuccessData = new Object();
            this.betInfo.NoBetSuceessData = new Object();
            this.betInfo.BetSocre = 0;
        }

        /**
         * 重置所有投注数据
         */
        public ResetData(): void {
            this.betInfo.NoBetSuceessData = new Object();
            this.betInfo.BetSocre = 0;
            this.betInfo.BetingSocre = 0;
            this.betInfo.SendingBetData = new Object();
        }
        /**
         * 获取当前局投注值
         */
        public GetBetScore(): number {
            return this.betInfo.BetSocre + this.betInfo.BetingSocre;
        }
    }
}