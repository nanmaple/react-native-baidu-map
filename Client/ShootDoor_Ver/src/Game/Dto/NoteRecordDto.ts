namespace Dto{
    //投注记录dto
    export class NoteRecordDto{
        /**
         * 投注金额
         */
        public BetAmount:number;
        /**
         * 投注时间
         */
        public BetTime:Date;
        /**
         * 投注详细数据
         */
        public GameData:any;
        /**
         * 投注游戏名称
         */
        public GameName:string;
        /**
         * 投注结束获得金额
         */
        public PayAmount:number;
        /**
         * 投注收益
         */
        public Total:number;
        /**
         * 投注Id
         */
        public Id:number;
        /**
         * 局号
         */
        public RoundId:string;
    }
}