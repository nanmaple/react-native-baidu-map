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
        /**修改游戏状态 */
        ChangGameStatus,
        /**修改当前投注分数 */
        ChangeCurrBet,
        /**本次滚动结束 */
        GameEnd,
        /**清理投注记录 */
        ClearBet,
        /**猜大小结束 */
        GuessEnd,



    }
}