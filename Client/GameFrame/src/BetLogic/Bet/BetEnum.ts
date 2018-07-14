namespace OnceBet {
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

    /**
     * 投注计算结果
     */
    export enum BetReult{
        /**
         * 成功
         */
        Success=0,
        /**
         * 余额不足
         */
        InsufficientBalance,
        /**
         * 超出限制
         */
        OverLimit,
    }
}