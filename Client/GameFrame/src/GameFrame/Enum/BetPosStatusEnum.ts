namespace GameEnum {
    /*
    * 游戏投注位置状态
    */
    export enum BetPosStatus {
        /**
         * 禁用
         */
        Forbid = 0,
        /** 
         * 正常
        */
        Allow = 1,
        /**
         * 满额
         */
        Full = 2,
    }
}