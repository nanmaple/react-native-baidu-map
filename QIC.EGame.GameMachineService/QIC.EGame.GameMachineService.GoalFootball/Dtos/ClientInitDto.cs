using System.Collections.Generic;
using QIC.EGame.GameMachineService.GoalFootball.Enums;

namespace QIC.EGame.GameMachineService.GoalFootball.Dtos
{
    /// <summary>
    /// 客户端初始化的Dto
    /// </summary>
    public class ClientInitDto
    {
        /// <summary>
        /// 投注基数
        /// </summary>
        public List<int> BaseAmounts { get; set; }

        /// <summary>
        /// 赔率信息
        /// </summary>
        public List<decimal> OddsInfo { get; set; }

        /// <summary>
        /// 用户余额
        /// </summary>
        public decimal Balance { get; set; }
    }
}
