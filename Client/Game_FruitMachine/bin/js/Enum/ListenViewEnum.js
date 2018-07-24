var Enum;
(function (Enum) {
    /**
     * 监听UI事件类型枚举
     */
    var ListenViewEnum;
    (function (ListenViewEnum) {
        /**
         * 游戏资源加载完成
         */
        ListenViewEnum[ListenViewEnum["GameLoadComplate"] = 0] = "GameLoadComplate";
        /**
         * 投注
         */
        ListenViewEnum[ListenViewEnum["BetPos"] = 1] = "BetPos";
        /** 开始滚动*/
        ListenViewEnum[ListenViewEnum["GameStart"] = 2] = "GameStart";
        /** 收取分数*/
        ListenViewEnum[ListenViewEnum["GatherFraction"] = 3] = "GatherFraction";
        /** 结束滚动*/
        ListenViewEnum[ListenViewEnum["GameEnd"] = 4] = "GameEnd";
        /** 修改投注基数*/
        ListenViewEnum[ListenViewEnum["ChangBaseAmount"] = 5] = "ChangBaseAmount";
        /**添加猜大小分数 */
        ListenViewEnum[ListenViewEnum["AddGuessSum"] = 6] = "AddGuessSum";
        /**减小猜大小分数 */
        ListenViewEnum[ListenViewEnum["ReduceGuessSum"] = 7] = "ReduceGuessSum";
        /**清除所有投注信息 */
        ListenViewEnum[ListenViewEnum["ClearBet"] = 8] = "ClearBet";
        /**猜大小 */
        ListenViewEnum[ListenViewEnum["GuessSize"] = 9] = "GuessSize";
        /**全部投注位置+1 */
        ListenViewEnum[ListenViewEnum["AddAll"] = 10] = "AddAll";
        /**滚动随机数停止 */
        ListenViewEnum[ListenViewEnum["RandomEndm"] = 11] = "RandomEndm";
        /**
         * 获取最新余额
         */
        ListenViewEnum[ListenViewEnum["GetBalance"] = 12] = "GetBalance";
        /**打开规则面板 */
        ListenViewEnum[ListenViewEnum["ShowRule"] = 13] = "ShowRule";
        /**获取历史记录 */
        ListenViewEnum[ListenViewEnum["GetRecord"] = 14] = "GetRecord";
        /**打开记录面板*/
        ListenViewEnum[ListenViewEnum["ShowRecord"] = 15] = "ShowRecord";
    })(ListenViewEnum = Enum.ListenViewEnum || (Enum.ListenViewEnum = {}));
})(Enum || (Enum = {}));
//# sourceMappingURL=ListenViewEnum.js.map