namespace GameEnum {
    /**
     * 游戏命令
     */
    export enum GameCommand {
        /**
         * 游戏初始化（用户进入时发送）
         */
        MSG_GAME_INIT = 1,
        /**
         * 开始（用户开始游戏才返回赔率的游戏）
         */
        MSG_GAME_START = 2,
        /**
         * 投注
         */
        MSG_GAME_BET = 3,
        /**
         * 投注结果（成功/失败）
         */
        MSG_GAME_BETRESULT = 4,
        /**
         * 停止下注
         */
        MSG_GAME_STOPBET = 5,
        /**
         * 游戏结果
         */
        MSG_GAME_GAMERESULT = 6,
        /**
         * 结算结果
         */
        MSG_GAME_SETTLERESULT = 7,
        /**
         * 其他命令（需要游戏逻辑自己解析下层命令）
         */
        MSG_GAME_OTHER = 100,
    }
}