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
         * 投注
         */
        BetPos = 1,
        
        /** 开始滚动*/
        GameStart,

        /** 收取分数*/
        GatherFraction,

        /** 结束滚动*/
        GameEnd,

        /** 修改投注基数*/
        ChangBaseAmount,

        /**添加猜大小分数 */
        AddGuessSum,

        /**减小猜大小分数 */
        ReduceGuessSum,

        /**清除所有投注信息 */
        ClearBet,

        /**猜大小 */
        GuessSize,

        /**全部投注位置+1 */
        AddAll,

        /**滚动随机数停止 */
        RandomEndm,

        /**
         * 获取最新余额
         */
        GetBalance,

        /**打开规则面板 */
        ShowRule,
    }
}