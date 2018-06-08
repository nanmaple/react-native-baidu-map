/// <reference path='../../GameFrame/Enum/GameCommand.ts'/>
namespace Dto {

    /**
     * 游戏命令dto
     */
    export class GameMessageDto {
        /**
         * 游戏命令枚举
         */
        public Command: GameEnum.GameCommand;
        /**
         * 游戏命令内容
         */
        public Data: any
    }
}