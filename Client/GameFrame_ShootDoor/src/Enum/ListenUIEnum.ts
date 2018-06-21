namespace Enum{
    /**
     * 监听UI事件类型枚举
     */
    export enum ListenUIEnum{
        /**
         * 游戏资源加载完成
         */
        GameLoadComplate = 0,
        /**
         * 投注按钮点击
         */
        BetPos = 1,
        /**
         * 确认投注
         */
        ConfirmBet,
        /**
         * 取消投注
         */
        CancelBet,
        
        /**************头部部分**************/
        /**
         * 显示规则
         */
        ShowRule,
        /**
         * 显示投注记录
         */
        BetHistory,
        /**
         * 加载投注记录
         */
        GetBetRecord,
        /**
         * 改变余额
         */
        ChangeMoney,

        /************历史投注位置****************/
        HistoryPos,
        /**
         * 获取用户信息
         */
        GetMemberInfo,
        /**
         * 显示更多投注
         */
        ShowMoreBet,
    }
}