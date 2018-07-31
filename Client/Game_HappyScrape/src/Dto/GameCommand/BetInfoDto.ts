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
         * 最大投注
         */
        public MaxBet: number = 0;
        /**
         * 最小投注
         */
        public MinBet: number = 0;
    }
}