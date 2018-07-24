namespace Dto {
    /**
     * 投注信息Dto
     */
    export class BetInfoDto {
        /**
         * 投注金额
         */
        public betAmount:number = null;
        /**
         * 投注总金额
         */
        public betTotalAmount:number = 0;
        /**
         * 道具使用总金额
         */
        public propTotalAmount:number = 0;
        /**
         * 道具使用状态
         */
        public propStatus:Array<number> = [0,0,0];
        /**
         * 最大投注
         */
        public MaxBet: number = 0;
        /**
         * 最小投注
         */
        public MinBet: number = 0;
    }
}