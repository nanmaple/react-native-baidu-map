namespace Dto{
    /**
     * 游戏结果Dto
     */
    export class GameResultDto{
        public Balance:number;
        public WinAmount:number;
        public Mines:Object;
        public Status:Enum.BetResult;
    }
}