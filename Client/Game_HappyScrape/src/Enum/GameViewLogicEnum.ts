namespace Enum {
    /**
     * 游戏管理逻辑向游戏界面逻辑数据通知枚举
     */
    export enum GameViewLogicEnum {
        /**
         * 投注
         */
        BetPos = 101,
        /**
         * 获取投注记录
         */
        GetRecord,
        /**
         * 改变余额
         */
        ChangMoney,
        /**
         * 获取用户信息
         */
        GetMemberInfo,
        /**
         * 最大金额投注
         */
        MaxBetAmount,
        /**
         * 投注失败
         */
        BetPosError,
    }
}