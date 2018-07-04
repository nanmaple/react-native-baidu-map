namespace Dto {
    /**
     * 游戏结果Dto
     */
    export class GameResultDto {
        /**
         * 局号
         */
        public RoundID: string;
        /**
         * 余额
         */
        public Balance: number;
        /**
         *  结算结果 key: 投注位置, value: 输赢金额
         */
        public SettleResult: any;
        /**
         * 游戏结果(CardInfoDto)
         */
        public GameResult: string
    }
}