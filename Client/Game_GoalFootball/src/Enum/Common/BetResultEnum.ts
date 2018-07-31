namespace Enum {
    /**
     * 投注结果类型
     */
    export enum BetResultEnum {
        /**
         * 投注成功
         */
        Success,
        /**
         * 余额不足
         */
        BalanceSmall,
        /**
         * 超过限额
         */
        OverLimit,
         /**
         * 参数错误
         */
        InvalidArgument,
        /**
         * 系统错误
         */
        SystemError,

    }
}