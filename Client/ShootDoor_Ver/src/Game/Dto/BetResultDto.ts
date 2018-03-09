namespace Dto {
    /**
     * 投注结果Dto
     */
    export class BetResultDto {
        /**
         * 局号
         */
        public RoundID: string;
        /**
         * 成功
         */
        public Success: boolean;
        /**
         * 余额
         */
        public Balance: number;
        /**
         * 总投注金额{int,number}
         */
        public TotalBet: any;
        /**
         * 错误编号
         */
        public ErrorCode: BaseEnum.BetErrorCode;
        /**
         * 错误说明
         */
        public Description: string
    }
}