using QIC.EGame.GameMachineService.GoalFootball.Enums;

namespace QIC.EGame.GameMachineService.GoalFootball.Dtos
{
    /// <summary>
    /// 注单结果的Dto
    /// </summary>
    public class GameResultDto
    {
        /// <summary>
        /// 新的余额
        /// </summary>
        public decimal Balance { get; set; }

        /// <summary>
        /// 中奖金额，0表示未中奖
        /// </summary>
        public decimal WinAmount { get; set; }

        /// <summary>
        /// 投注状态，指示投注是否成功
        /// </summary>
        public BetResult Status { get; set; }

        public static GameResultDto ParameterError
        {
            get
            {
                return new GameResultDto()
                {
                    Status = BetResult.ParameterError
                };
            }
        }
        public static GameResultDto InsufficientBalance
        {
            get
            {
                return new GameResultDto()
                {
                    Status = BetResult.InsufficientBalance
                };
            }
        }
        public static GameResultDto OverLimit
        {
            get
            {
                return new GameResultDto()
                {
                    Status = BetResult.OverLimit
                };
            }
        }
        public static GameResultDto SystemError
        {
            get
            {
                return new GameResultDto()
                {
                    Status = BetResult.SystemError
                };
            }
        }
    }
}