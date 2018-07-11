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

        ConfirmBet,

        CancelBet,

        GetNoBetSucData,

        /** 
         * 获取投注记录
        */
        GetBetRecord,
        /**
         * 获取最新余额
         */
        ChangeMoney,
        /**
         * 获取用户信息
         */
        GetMemberInfo,
    }
}