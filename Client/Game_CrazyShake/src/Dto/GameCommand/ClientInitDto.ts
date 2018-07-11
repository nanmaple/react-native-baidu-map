namespace Dto {
    /**
     * 初始化游戏Dto
     */
    export class ClientInitDto {
        /**
         * 赔率信息
         */
       public PosOdds:Object;
       /**
        * 用户余额
        */
       public Balance:number;
       /**
        * 最大投注限额
        */
       public MaxBet:number;
    }
}