namespace Dto {
    export class BetDto {
        /**
         * 投注位置
         */
        public BetPos: Enum.BetPosType;
        /**
         * 投注赔率
         */
        public Odds :number;
        /**
         * 投注金额
         */
        public Amount: number;
    }
}