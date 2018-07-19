namespace OnceBet {
    /**
    * 多位置投注逻辑接口
    */
    export interface IBetLogic {
        /**
         * 投注
         */
        Bet(memScore: number,  positon: number): any;

        /** 
         * 清除投注信息
        */
        ClearBet(): any;

        /**
         * 获取当前局投注值
         */
        GetBetInfo(): BetDto;

        /**
         * 修改投注基数
         * @param data 
         */
        ChangBaseAmount(memScore: number,data:number):void;

         /**
         * 获取当前局投注总分数
         */
        GetBetScore(): number ;

        /**
         * 设置投注总限额
         * @param BaseAmounts
         * @param MaxBet 
         * @param MinBet 
         */
        SetBetLimit(BaseAmounts:any,MaxBet:number,MinBet:number):void;
    }

}