namespace Bet{
    export class BetLogic{
        constructor(){
            
        }

        /**
         * 投注
         * @param memScore 游戏分数
         * @param betInfo 投注信息
         * @param currentBet 本次投注信息
         */
        public Bet(memScore : number, betInfo : Bet.BetDataDto, currentBet : Bet.BetPosValue):any{
            //用户状态判断
            //游戏状态判断
            //用户余额是否大于最小投注限额，用户已投分数与余额之差大于最小限额
            //取投注位置已投注数据(成功投分数，已投注分数，正在投注分数)
            //比较新投注数据和已投注数据,是否超过
            memScore = memScore - (betInfo.BetSocre + betInfo.BetingSocre);
            let alreadyBet:number = this.BeforeAmount(currentBet,betInfo);
            let pos:number = currentBet.Pos;

            if(memScore == 0 ){
                return {success:false,data:LanguageUtils.Type.BalanceSmall}
            }
            if(alreadyBet == 0 && currentBet.Amount < currentBet.MinLimit){
                return {success:false,data:LanguageUtils.Type.LowLimit}
            }
            
            if(alreadyBet != 0 || memScore >= currentBet.MinLimit){//------------1

                if(alreadyBet < currentBet.MaxLimit){//------------2

                    if(currentBet.Amount + alreadyBet > currentBet.MaxLimit){//------------3.1
                        currentBet.Amount = currentBet.MaxLimit - alreadyBet;
                    }
                    
                    if(memScore < currentBet.Amount){//------------3.2
                        currentBet.Amount = memScore;
                    }
  
                    if(betInfo.NoBetSuceessData[pos]){//------------3.3
                        betInfo.NoBetSuceessData[pos].Amount += currentBet.Amount;
                    }else{
                        let bet:Bet.BetDto = new Bet.BetDto();
                        bet.Amount = currentBet.Amount;
                        bet.BetPos = currentBet.Pos;
                        bet.Odds = currentBet.Odds;
                        betInfo.NoBetSuceessData[pos] = bet;
                    }
                    betInfo.BetSocre += currentBet.Amount;
                    return {success:true,data:(currentBet.Amount+alreadyBet)};

                }else{
                    return {success:false,data:LanguageUtils.Type.OverLimit};
                }
            }else{
                return {success:false,data:LanguageUtils.Type.BalanceSmall};
            }
        }

        /**
         * 计算余额
         */
        private CalcBalance():any{
        }

        /**
         * 计算当前位置是否超限
         */
        private CalcBetPosLimit():any{
        }

        /**
         * 之前的投注额
         * @param currentBet 本次投注信息
         * @param betInfo 注单信息
         */
        private BeforeAmount(currentBet : Bet.BetPosValue,betInfo:Bet.BetDataDto):number{
            let pos = currentBet.Pos;
            let alreadyBet:number = 0;

            if(betInfo.NoBetSuceessData[pos]){
                alreadyBet += betInfo.NoBetSuceessData[pos].Amount;
            }
            if(betInfo.BetSuccessData[pos]){
                alreadyBet += betInfo.BetSuccessData[pos];
            }
            for(let i in betInfo.SendingBetData){
                if(betInfo.SendingBetData[i].Data[pos]){
                    alreadyBet += betInfo.SendingBetData[i].Data[pos].Amount;
                }
            }
            return alreadyBet;
        }


        /**
         * 撤销未提交投注
         * @param betInfo 投注信息
         */
        public RetractBet(betInfo : Bet.BetDataDto):any{
            betInfo.BetSocre = 0;
            betInfo.NoBetSuceessData = new Object();
            return betInfo;
        }

        /**
         * 确认投注
         * @param betInfo 投注信息
         */
        public ConfirmBet(betInfo : Bet.BetDataDto):any{
            if(!betInfo.NoBetSuceessData || JSON.stringify(betInfo.NoBetSuceessData) == "{}"){
                return;
            }
            console.log(betInfo)
            //确认投注，发送当前注单到服务器   
            let dto: Dto.HandlerDto = new Dto.HandlerDto();
            dto.MsgID = null;
            dto.Data = Object.values(betInfo.NoBetSuceessData);
            
            return dto;
        }

        /**
         * 发送前返回消息id
         * @param id 消息ID
         */
        public SetMsgID(betID:string,betInfo : Bet.BetDataDto): void {
            //将当前局投注注单赋值到已发送的队列中;
            betInfo.SendingBetData[betID] = {Socre:betInfo.BetSocre,Data:betInfo.NoBetSuceessData};
            betInfo.BetingSocre += betInfo.BetSocre;

            betInfo.BetSocre = 0;
            betInfo.NoBetSuceessData = new Object();
        }

    }
}