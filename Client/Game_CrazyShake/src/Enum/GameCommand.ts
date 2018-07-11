namespace Enum {
    /**
     * 游戏命令
     */
    export enum GameCommand {
        /**
         * 游戏初始化（用户进入时发送）
         */
        MsgGameInit = 1,
        /**
         * 开始（用户开始游戏才返回赔率的游戏）
         */
        MsgGameStart = 2,
        /**
         * 投注
         */
        MsgGameBet = 3,
        /**
         * 投注结果（成功/失败）
         */
        MsgGameBetResult = 4,
        /**
         * 停止下注
         */
        MsgGameStopBet = 5,
        /**
         * 游戏结果
         */
        MsgGameGameResult = 6,
        /**
         * 结算结果
         */
        MsgGameSettleResult = 7,
        /**
         * 其他命令（需要游戏逻辑自己解析下层命令）
         */
        MsgGameOther = 100,
    }
}