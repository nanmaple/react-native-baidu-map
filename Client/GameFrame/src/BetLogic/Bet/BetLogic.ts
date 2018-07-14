/// <reference path="./BetInfoDto.ts" />

namespace OnceBet {
    /**
     * 多位置投注逻辑
     */
    export class BetLogic implements IBetLogic {
        private betInfo: BetDataDto = new BetDataDto();
        
        constructor() {

        }

        /**
         * 投注
         * @param memScore 游戏分数
         * @param positon 本次投注位置
         */
        public Bet(memScore: number, positon: number): any {
            //用户状态判断
            //游戏状态判断
            //用户余额是否大于最小投注限额，用户已投分数与余额之差大于最小限额
            //取投注位置已投注数据(成功投分数，已投注分数，正在投注分数)
            //比较新投注数据和已投注数据,是否超过
            memScore -= this.betInfo.BetNumber * this.betInfo.BaseAmount;
            if(memScore < this.betInfo.BaseAmount){
                 return { success: false, data: 'InsufficientBalance' }
            }

            this.betInfo.BetNumber += 1;
            if(this.betInfo.BetSuccessData[positon]){
                if(this.betInfo.BetSuccessData[positon] >= this.betInfo.MaxBetNum){
                    return { success: false, data: 'OverLimit'}
                }
                this.betInfo.BetSuccessData[positon] += 1;
            }else{
                this.betInfo.BetSuccessData[positon] = 1;
            }
            return { success: true, data: this.betInfo.BetSuccessData[positon] }
        }

        /**
         * 设置投注总限额
         * @param MaxBet 
         * @param MinBet 
         */
        public SetBetLimit(MaxBet:number,MinBet:number):void{
            this.betInfo.MaxBet = MaxBet;
            this.betInfo.MinBet = MinBet;
        }

        /**
         * 清空投注信息
         */
        public ClearBet(): any {
            this.betInfo.BetNumber = 0;
            this.betInfo.BetSuccessData = new Object();
        }

        /**
         * 获取当前局投注信息
         */
        public GetBetInfo(): BetDto {
            let dto = new BetDto();
            dto.BaseAmount = this.betInfo.BaseAmount;
            dto.BetInfos = this.betInfo.BetSuccessData;
            return dto;
        }

        /**
         * 获取当前局投注总分数
         */
        public GetBetScore(): number {
            let sum = this.betInfo.BaseAmount * this.betInfo.BetNumber;
            return sum;
        }

        /**
         * 修改投注基数
         * @param data 
         */
        public ChangBaseAmount(memScore: number,data:ChangBaseAmount):number{
            let all = data.Value*this.betInfo.BetNumber;
            if(all > memScore){
                let chip = Math.floor(memScore/this.betInfo.BetNumber/data.BaseAmount)*data.BaseAmount;
                if(chip == 0) chip = data.BaseAmount;
                this.betInfo.BaseAmount = chip;
                return chip;
            }
            
            this.betInfo.BaseAmount = data.Value;
            return data.Value;
        }
    }

}