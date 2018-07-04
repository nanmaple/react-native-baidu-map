namespace Dto {
    /**
     * 游戏结束
     */
    export class EndGameDto {
        /**
         * 局号
         */
        public RoundID: string;
        /**
         * 第一张牌
         */
        public FirstCard: number;
        /**
         * 第二张牌
         */
        public SecondCard: number;
        /**
         * 第三张牌
         */
        public ThirdCard: number;
    }
}