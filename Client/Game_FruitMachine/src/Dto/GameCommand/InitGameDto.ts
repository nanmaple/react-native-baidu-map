namespace Dto {
    /**
     * 初始化游戏Dto
     */
    export class InitGameDto {
        /**
         * 限额
         */
        public Limit: LimitDto;
        /**
         * 余额
         */
        public Balance: number;
        /**
         * 历史
         */
        public History: Array<HistoryRoundDto>;
        /**
         * 游戏状态
         */
        public Status: Enum.GameStatus;
        /**
         * 局号
         */
        public RoundID: string;
        /**
         * 投注时间
         */
        public BetTime: number;
        /**
         * 牌信息
         */
        public Cards: CardInfoDto;
        /**
         * 赔率{Enum.BetPosType:number}
         */
        public Odds: any;
        /**
         * 总投注 {Enum.BetPosType:number}
         */
        public TotalBet: any
    }
}