namespace Enum{
    /**
     * 投注结果枚举
     */
    export enum BetResult{
        /**
         * 投注成功
         */
        Success = 0,
        /**
         * 余额不足，投注失败。
         */
        InsufficientBalance = 1,
        /**
         * 投注总金额超过额度限制
         */
        OverLimit = 2,
        /**
         * 参数错误
         */
        ParameterError = 3,
        /**
         * 系统错误，投注失败！
         */
        SystemError = 4,
    }
}