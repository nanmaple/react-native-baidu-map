namespace Dto {
    /**
     * 游戏结果Dto
     */
    export class InitGameDto {
        /**
         * 余额
         */
        public Balance: number;
        /**
         * 最大投注量
         */
        public MaxBet: number;
        /**
         * 最小投注量
         */
        public MinBet: number;
        /**
         *  投注位置赔率
         */
        public ResultPosOdds: any;
        /**
         * 投注基数
         */
        public BaseAmounts: any
    }
}