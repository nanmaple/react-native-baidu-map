namespace Bet {
    /**
     * 投注相关内容
     */
    export class BetDataDto {
        /**
         * 当前投注成功的投注信息
         */
        public BetSuccessData: any = new Object();
        /**
         * 当前一次投注的总分数
         */
        public BetSocre: number = 0;
        /**
         * 当前一次未投注成功的注单信息
         */
        public NoBetSuceessData: any = new Object();
        /**
         * 正在定时重发的投注总分数
         */
        public BetingSocre: number = 0;
        /**
         * 已发送的send注单
         * key: 注单号
         * value:投注信息{Socre:**,Data:**}
         */
        public SendingBetData: any = new Object();
    }

    /**
     * 投注提交内容
     */
    export class BetDto {
        /**
         * 投注位置
         */
        public BetPos: Enum.BetPosType;
        /**
         * 投注赔率
         */
        public Odds: number;
        /**
         * 投注金额
         */
        public Amount: number;
    }


    /**
     * 投注面板UI到Ctrl传递数据Dto
     */
    export class BetPosValue {
        /**
         * 最小投注
         */
        public MinLimit: number;
        /**
         * 最大投注
         */
        public MaxLimit: number;
        /**
         * 投注位置
         */
        public Pos: number;
        /**
         * 投注分数
         */
        public Amount: number;
        /**
         * 赔率
         */
        public Odds: number;
    }
}