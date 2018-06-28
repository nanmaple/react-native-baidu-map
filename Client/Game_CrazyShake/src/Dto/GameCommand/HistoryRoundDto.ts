namespace Dto {
    /**
     * 历史局信息
     */
    export class HistoryRoundDto {
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