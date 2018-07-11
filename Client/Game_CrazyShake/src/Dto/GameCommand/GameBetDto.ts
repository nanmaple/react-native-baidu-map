/// <reference path='../../Enum/GameCommand.ts'/>
namespace Dto {

    /**
     * 游戏投注信息dto
     */
    export class GameBetDto {
        /**
         * 投注额
         */
        public Amount: number;
        /**
         * 投注类型
         */
        public BetPos:Enum.GameBetType;
    }
}