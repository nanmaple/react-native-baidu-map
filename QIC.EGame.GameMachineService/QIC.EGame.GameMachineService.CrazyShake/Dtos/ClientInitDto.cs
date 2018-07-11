using System.Collections.Generic;
using QIC.EGame.GameMachineService.CrazyShake.Enums;

namespace QIC.EGame.GameMachineService.CrazyShake.Dtos
{
    /// <summary>
    /// 客户端初始化的Dto
    /// </summary>
    public class ClientInitDto
    {
        /// <summary>
        /// 赔率信息
        /// </summary>
        public Dictionary<BetPosType, decimal> PosOdds { get; set; }

        /// <summary>
        /// 用户余额
        /// </summary>
        public decimal Balance { get; set; }
    }
}
