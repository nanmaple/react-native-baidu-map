namespace Dto {
    /**
     * 初始化游戏Dto
     */
    export class GameInitDto {
        /**
         * 投注基数
         */
        public BaseAmounts: Array<number>;
        /**
         * 赔率信息
         */
        public OddsInfo: Array<number>;
        /**
         * 用户余额
         */
        public Balance: number;
        /**
         * 最大投注
         */
        public MaxBet: number;
        /**
         * 最小投注
         */
        public MinBet: number;
    }
}