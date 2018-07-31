/*
* name;
*/
namespace Enum {
    export enum GameViewHandlerEnum {
        /**
         * 启动socket
         */
        StartSocket = 0,
        /** 
         * 投注操作
        */
        BetPos,
        /**
         * 获取用户信息
         */
        GetMemberInfo,
        /**
         * 游戏结束
         */
        GameResult,
        /**
         * 获取余额
         */
        GetBalance,
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
    }
}