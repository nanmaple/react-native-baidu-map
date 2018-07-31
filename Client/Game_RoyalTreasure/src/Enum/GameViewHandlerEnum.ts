/*
* name;
*/
namespace Enum {
    export enum GameViewHandlerEnum {
        
        /** 
         * 投注操作
        */
        BetPos = 0,

        ConfirmBet = 1,

        CancelBet = 2,

        GetNoBetSucData = 3,

        /** 
         * 获取投注记录
        */
        GetBetRecord = 4,
        /**
         * 获取最新余额
         */
        ChangeMoney = 5,
        /**
         * 获取用户信息
         */
        GetMemberInfo = 6,
        /**
         * 启动连接
         */
        StartSocket,
        /**
         * 获取记录
         */
        GetRecord
    }
}