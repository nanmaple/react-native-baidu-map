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
         * 投注按钮点击
         */
        BetPos = 1,

        OpenRule,

        OpenRecord,

        DigAniComplete,

        NextTime,

        GameAniOver,

        CloseRule,

        GetRecord,

        AutoBet,

        StopAutoDig,

        OnGameBgClick,

        ConfirmBet,

        CancelBet,
    }
}