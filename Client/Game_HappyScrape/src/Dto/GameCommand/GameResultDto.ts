namespace Dto {
    /**
     * 游戏结算结果Dto
     */
    export class GameResultDto {
        /**
         * 余额
         */
        public Balance: number;
        /**
         * 中奖金额，0表示未中奖
         */
        public WinAmount: number;
        /**
         * 游戏一的游戏结果
         */
        public Game1Icons: any;
        /**
         * 游戏一的,兑奖区域的图案
         */
        public Game1RewardIcons: any;
        /**
         * 游戏二的游戏结果
         */
        public Game2Icons: any;
        /**
         * 投注结果状态
         */
        public Status: Enum.BetErrorCode;
    }
}