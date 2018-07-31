namespace Dto {
    /**
     * 初始化游戏Dto
     */
    export class GameInitDto {
        /**
         * 游戏一的各层赔率信息
         */
        public Game1OddsInfo: Array<number>;
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