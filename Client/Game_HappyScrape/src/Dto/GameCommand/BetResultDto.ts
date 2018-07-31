namespace Dto {
    /**
     * 投注结果Dto
     */
    export class BetResultDto {
        /**
         * 余额
         */
        public Balance: number;
        /**
         * 中奖金额，0表示未中奖
         */
        public WinAmount: number;
        /**
         * 赔率
         */
        public Odds: any;
        /**
         * 投注结果状态
         */
        public Status: Enum.BetErrorCode;
    }
}