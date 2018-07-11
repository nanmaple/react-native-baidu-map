using System.Collections.Generic;
using QIC.EGame.GameMachineService.CrazyShake.Enums;

namespace QIC.EGame.GameMachineService.CrazyShake.Dtos
{
    /// <summary>
    /// 游戏下注的Dto
    /// </summary>
    public class GameBetDto
    {
        /// <summary>
        /// 投注金额
        /// </summary>
        public decimal Amount { get; set; }
        /// <summary>
        /// 下注的位置
        /// </summary>
        public BetPosType BetPos { get; set; }
    }
}
