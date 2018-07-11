namespace Enum {
    /**
     * 游戏管理逻辑向游戏界面逻辑数据通知枚举
     */
    export enum GameViewLogicEnum {
        /**
         * 投注成功
         */
        BetSuccess = 101,
        /**
         * 添加投注记录
         */
        SetRecord,
        /**
         * 改变余额
         */
        ChangMoney,
        /**
         * 获取用户信息
         */
        GetMemberInfo,

        /**
         * 修改投注基数
         */
        ChangBaseAmount,
        /**修改游戏状态 */
        ChangGameStatus,
        /**修改当前投注分数 */
        ChangeCurrBet,
        /**本次滚动结束 */
        // GameEnd,



    }
}