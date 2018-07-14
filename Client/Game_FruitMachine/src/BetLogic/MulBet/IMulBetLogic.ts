namespace MulBet {
    /**
    * 多位置投注逻辑接口
    */
    export interface IMulBetLogic {
        /**
         * 投注
         */
        Bet(memScore: number, currentBet: MulBet.BetPosValue): any;

        /**
         * 撤销投注信息
         */
        RetractBet(): any;

        /**
         * 确认投注
         */
        ConfirmBet(): any;

        /**
         * 设置当前投注注单的guid
         * @param betID 消息ID
         */
        SetMsgID(betID: string): void;

        /**
        * 投注Ack回调
        * @param id 消息guid
        */
        BetAck(id: string): void;

        /**
        * 设置成功投注数据，默认重置为空数据
        * @param data 投注成功数据
        */
        SetBetSuccessData(data: any): void;

        /**
       * 重置新一局游戏的投注数据
       */
        SetNewRound(): void;

        /**
         * 重置所有投注数据
         */
        ResetData(): void;

        /**
         * 获取当前局投注值
         */
        GetBetScore(): number;
    }
}