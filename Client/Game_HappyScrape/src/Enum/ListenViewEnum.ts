namespace Enum{
    /**
     * 监听UI事件类型枚举
     */
    export enum ListenViewEnum{
        /**
         * 游戏资源加载完成
         */
        GameLoadComplate = 0,
        /**
         * 获取余额
         */
        GetBalance,
        /**
         * 投注
         */
        BetPos,
        /**
         * 打开规则面板
         */
        OpenRule,
        /**
         * 打开游戏记录面板
         */
        OpenRecord,
        /**
         * 获取游戏记录
         */
        GetRecord,
        /**
         * 最大金额投注
         */
        MaxBetAmount,
        /**
         * 设置投注金额
         */
        SetBetAmount,
        /**
         * 游戏结束
         */
        GameResult,
    }
}