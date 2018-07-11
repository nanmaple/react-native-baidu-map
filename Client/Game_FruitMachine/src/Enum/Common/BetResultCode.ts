namespace Enum {
    /**
     * 投注结果类型
     */
    export enum BetResultCode {
        /**
         * 成功
         */
        Success = 0,
        /**
         * 余额不足，投注失败
         */
        InsufficientBalance,
        /**
         * 超过限额
         */
        OverLimit,
        /**
         * 参数错误
         */
        ParmeterError,
        /**
         * 系统错误，投注失败
         */
        SystemError,

        
    }
}