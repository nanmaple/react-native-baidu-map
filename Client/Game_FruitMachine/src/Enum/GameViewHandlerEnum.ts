/*
* name;
*/
namespace Enum {
    export enum GameViewHandlerEnum {
        
        /** 
         * 投注操作
        */
        BetPos = 0,

        /**
         * 获取最新余额
         */
        GetBalance = 1,
    
        /**
         * 修改投注基数
         */
        ChangBaseAmount,

        /**清除所有投注信息 */
        ClearBet,

        /**全部投注位置+1 */
        AddAll,

        /** 猜大小*/
        GuessSize,

        /**游戏开始滚动 */
        GameStart,
        
        /**游戏结束滚动 */
        GameEnd,

        /**socket连接 */
        StartSocket,

        /**收分操作 */
        GatherFraction,

        /**加大竞猜筹码 */
        AddGuessSum,

        /**减小竞猜筹码 */
        ReduceGuessSum,

        /** 随机数动画结束*/
        RandomEnd,
    }
}