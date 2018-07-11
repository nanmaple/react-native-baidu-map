namespace QIC.EGame.GameMachineService.FruitMachine.Enums
{
    /// <summary>
    /// 投注结果的枚举
    /// </summary>
    public enum BetResult
    {
        /// <summary>
        /// 投注成功
        /// </summary>
        Success = 0,
        /// <summary>
        /// 余额不足，投注失败。
        /// </summary>
        InsufficientBalance,
        /// <summary>
        /// 投注总金额超过额度限制
        /// </summary>
        OverLimit,
        /// <summary>
        /// 参数错误
        /// </summary>
        ParameterError,
        /// <summary>
        /// 系统错误，投注失败！
        /// </summary>
        SystemError
    }
}