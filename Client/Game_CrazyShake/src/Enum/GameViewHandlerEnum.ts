
namespace Enum {
    /**
     * 游戏总界面逻辑向游戏逻辑通知枚举
     */
    export enum GameViewHandlerEnum {
        /**
         * 启动socket
         */
        StartSocket = 0,
        /**********扩展***********/
        /** 
         * 投注操作
        */
        BetPos,
        /** 
         * 获取投注记录
        */
        GetBetRecord,
        /**
         * 获取最新余额
         */
        ChangeMoney,
    }
}