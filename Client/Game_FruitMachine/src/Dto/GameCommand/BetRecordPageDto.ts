namespace Dto {
    export class BetRecordPageDto {
        /**
         * 上一次拉取数据最后一条数据的id
         */
        public LastId: number = null;
        /**
         * 每页个数
         */
        public PageSize: number = 10;
        /**
         * 游戏ID
         */
        public GameId: number;
    }
}