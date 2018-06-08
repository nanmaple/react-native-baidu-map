namespace Enum {
    /**
     * 投注错误类型
     */
    export enum BetErrorCode {
        /**
         * 成功
         */
        SUCCESS = 0,
        /**
         * 赔率错误
         */
        ODDS_ERROR = 1,
        /**
         * 金额错误
         */
        AMOUNT_ERROR = 2,
        /**
         * 余额不足
         */
        BALANCE_SMALL = 3,
        /**
         * 投注位置错误
         */
        BETPOS_ERROR = 4,
        /**
         * 不在投注状态
         */
        NOTBET_STATUS = 5,
        /**
         * 超过限额
         */
        OVER_LIMIT = 6
    }
}