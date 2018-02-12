namespace Dto {
    export class StartGameDto {
        /**
         * 局号
         */
        public RoundID: string;
        /**
         * 投注时间
         */
        public BetTime :number;
        /**
         * 第一张牌
         */
        public FirstCard: number;
        /**
         * 第二张牌
         */
        public SecondCard: number;
        /**
         * 赔率{Enum.BetPosType:number}
         */
        public Odds: any;
    }
}