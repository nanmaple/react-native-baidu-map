using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using QIC.EGame.GameMachineService.FruitMachine.Enums;

namespace QIC.EGame.GameMachineService.FruitMachine.Dtos
{
    /// <summary>
    /// 游戏下注的Dto
    /// </summary>
    public class GameBetDto
    {
        /// <summary>
        /// 投注基数（即每注金额）
        /// </summary>
        public decimal BaseAmount { get; set; }
        /// <summary>
        /// 下注的位置信息和倍数信息，字典的Key为下注位置，Value为下注的倍数。
        /// </summary>
        public Dictionary<BetPosType, int> BetInfos { get; set; }
    }
}
