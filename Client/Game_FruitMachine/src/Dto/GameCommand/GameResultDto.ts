namespace Dto {
    /**
     * 游戏结果Dto
     */
    export class GameResultDto {
        /**
         * 游戏结果位置
         */
        public Result: Enum.ResultPosEnum;
        /**
         * 余额
         */
        public Balance: number;
        /**
         *  中奖金额 0为未中奖
         */
        public WinAmount: any;
        /**
         * 投注状态
         */
        public Status: Enum.BetResultCode;
        /**
         * 是否为猜大小
         */
        public GuessResult:boolean;
    }
}