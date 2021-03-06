namespace OnceBet {
    /**
     * 投注相关内容
     */
    export class BetDataDto {
        /*** 当前总投注信息*/
        public BetSuccessData: any = new Object();
        /**当前投注的总数 */
        public BetNumber: number = 0;

        /** 投注基数*/
        // public BaseAmount: number;

        /** 当前投注基数*/
        public CurrBaseAmount: number;

        /**最大基数 */
        // public MaxBase:number;

        /**上一次投注位置、个数信息 data, number*/ 
        public LastBet:any = new Object();

        /**单个位置最大投注数 */
        public MaxBetNum:number = 99;
        
        /**最大投注总额 */
        public MaxBet:number;

        /**最小投注总额 */
        public MinBet:number;
    }

    /**
     * 投注提交内容
     */
    export class BetDto {
        /**
         * 投注基数
         */
        public BaseAmount: number;

        /**
         * 投注位置和倍数 key：位置  value:倍数
         */
        public BetInfos: any;

        /**是否是猜大小  0小 1大*/
        public Guess?:number;
        
    }

    /** 
     * 投注位置投注后数据
    */
    export class BetPosAmountDto {
        /**
         * 投注位置
         */
        public Pos: number;
        /**
         * 投注倍数
         */
        public Amount: number;
    }


}