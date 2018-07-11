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
         * 获取最新余额
         */
        ChangeMoney,
        /**
         * 获取用户信息
         */
        GetMemberInfo,
        /**
         * 选择道具
         */
        ChooseProp,
        /**
         * 选择筹码
         */
        ChooseChip,
        /**
         * 选择最大筹码
         */
        ChooseMaxChip,
        /**
         * 游戏结束
         */
        GameResult,
    }
}