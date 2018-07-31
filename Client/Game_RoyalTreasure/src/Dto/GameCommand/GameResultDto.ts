namespace Dto{
    /**
     * 游戏结果Dto
     */
    export class GameResultDto{
        /**
         * 余额
         */
        public Balance:number;
        /**
         * 盈利
         */
        public WinAmount:number;
        /**
         * 各种矿石获得的数量
         */
        public Mines:Object;
        /**
         * 投注结果
         */
        public Status:Enum.BetResult;
    }
}