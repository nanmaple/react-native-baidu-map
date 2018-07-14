namespace Enum {
    export enum GameStatus {
        /**
         * 默认
         */
        Default = 0,
        /**
         * 投注状态
         */
        Bet = 1,
        /**
         * 结束状态
         */
        End = 2,
        /**
         * 正在结算状态
         */
        Settle = 3,
        /**
         * 已结算
         */
        Settled = 4,
    }
}