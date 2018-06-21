var Enum;
(function (Enum) {
    /**
     * 监听UI事件类型枚举
     */
    var ListenUIEnum;
    (function (ListenUIEnum) {
        /**
         * 游戏资源加载完成
         */
        ListenUIEnum[ListenUIEnum["GameLoadComplate"] = 0] = "GameLoadComplate";
        /**
         * 投注按钮点击
         */
        ListenUIEnum[ListenUIEnum["BetPos"] = 1] = "BetPos";
        /**
         * 确认投注
         */
        ListenUIEnum[ListenUIEnum["ConfirmBet"] = 2] = "ConfirmBet";
        /**
         * 取消投注
         */
        ListenUIEnum[ListenUIEnum["CancelBet"] = 3] = "CancelBet";
        /**************头部部分**************/
        /**
         * 显示规则
         */
        ListenUIEnum[ListenUIEnum["ShowRule"] = 4] = "ShowRule";
        /**
         * 显示投注记录
         */
        ListenUIEnum[ListenUIEnum["BetHistory"] = 5] = "BetHistory";
        /**
         * 加载投注记录
         */
        ListenUIEnum[ListenUIEnum["GetBetRecord"] = 6] = "GetBetRecord";
        /**
         * 改变余额
         */
        ListenUIEnum[ListenUIEnum["ChangeMoney"] = 7] = "ChangeMoney";
        /************历史投注位置****************/
        ListenUIEnum[ListenUIEnum["HistoryPos"] = 8] = "HistoryPos";
        /**
         * 获取用户信息
         */
        ListenUIEnum[ListenUIEnum["GetMemberInfo"] = 9] = "GetMemberInfo";
        /**
         * 显示更多投注
         */
        ListenUIEnum[ListenUIEnum["ShowMoreBet"] = 10] = "ShowMoreBet";
    })(ListenUIEnum = Enum.ListenUIEnum || (Enum.ListenUIEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenUIEnum.js.map