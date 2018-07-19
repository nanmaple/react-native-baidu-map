namespace Dto{
    /**
     * 初始化数据类
     */
    export class ClientInitDto{
        /**
         * 赔率信息
         */
        public OddsInfo:Object;
        /**
         * 余额
         */
        public Balance:number;
        /**
         * 最小投注额
         */
        public MinBet:number;
        /**
         * 最大投注额
         */
        public MaxBet:number;
    }
}