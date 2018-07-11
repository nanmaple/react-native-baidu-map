using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QIC.EGame.GameMachineService.FruitMachine.Enums;

namespace QIC.EGame.GameMachineService.FruitMachine.Dtos
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
        /// 开奖位置赔率
        /// </summary>
        public Dictionary<ResultPos, decimal> ResultPosOdds { get; set; }

        /// <summary>
        /// 用户余额
        /// </summary>
        public decimal Balance { get; set; }
    }
}
