using System.Collections.Generic;
using QIC.EGame.GameMachineService.GoalFootball.Enums;

namespace QIC.EGame.GameMachineService.GoalFootball.Dtos
{
    /// <summary>
    /// 游戏下注的Dto
    /// </summary>
    public class GameBetDto
    {
        /// <summary>
        /// 投注基数（即每注金额）
        /// </summary>
        public decimal Amount { get; set; }
        /// <summary>
        /// 道具使用情况
        /// </summary>
        public List<int> Props { get; set; }
    }
}
