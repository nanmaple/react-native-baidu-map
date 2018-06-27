namespace Enum {
    /**
     * 投注错误类型
     */
    export enum BetErrorCode {
        /**
         * 成功
         */
        Success = 0,
        /**
         * 赔率错误
         */
        OddsError = 1,
        /**
         * 金额错误
         */
        AmountError = 2,
        /**
         * 余额不足
         */
        InsufficientBalance = 3,
        /**
         * 投注位置错误
         */
        BetPosError = 4,
        /**
         * 不在投注状态
         */
        NotBetting = 5,
        /**
         * 超过限额
         */
        OverQuota = 6
    }
}