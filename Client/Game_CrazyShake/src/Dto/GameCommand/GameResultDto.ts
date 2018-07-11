/// <reference path='../../Enum/BetResult.ts'/>
/// <reference path='../../Enum/GameBetType.ts'/>
namespace Dto {
    /**
     * 游戏结果Dto
     */
    export class GameResultDto {
        /**
         * 新的余额
         */
        public Balance:number;
        /**
         * 中奖金额
         */
        public WinAmount:number;
        /**
         * 投注状态，投注是否成功
         */
        public Status:Enum.BetResult;
        /**
         * 开奖的位置
         */
        public Result:Enum.GameBetType;
        /**
         * 骰子的状态Array
         */
        public Dices:any;
    }
}