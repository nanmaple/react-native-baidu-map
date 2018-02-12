namespace Dto {
    /**
     * 限额
     */
    export class LimitDto {
        /**
         * 最小投注
         */
        public MinBet: number;
        /**
         * 最大投注
         */
        public MaxBet: number;
    }

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

    /**
     * 游戏结果Dto
     */
    export class GameResultDto {
        /**
         * 余额
         */
        public Balance: number;
        /**
         *  结算结果 key: 投注位置, value: 输赢金额
         */
        public SettleResult: any;
        /**
         * 游戏结果(CardInfoDto)
         */
        public GameResult: string
    }

    /**
     * 牌信息
     */
    export class CardInfoDto {
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
        public Status: BaseEnum.GameStatus;
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

    /**
     * 缓存游戏数据Dto
     */
    export class CacheGameDto extends InitGameDto {
        public BetTimeStamp: number = 0;
    }
}