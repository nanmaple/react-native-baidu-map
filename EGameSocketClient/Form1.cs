using QIC.EGame.GameServer.Dtos;
using QIC.EGame.IService.Dtos;
using QIC.EGame.IService.Enums;
using QIC.Infrastructure.Common.Safety;
using QIC.Infrastructure.Common.Safety.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using WebSocketSharp;
using QIC.Infrastructure.Common.Utilities;
using QIC.EGame.IGameMachineService.Dtos;
using QIC.EGame.GameMachineService.ShootDoor.Dtos;
using QIC.EGame.GameMachineService.ShootDoor.Enums;

namespace EGameSocketClient
{
    public partial class Form1 : Form
    {
        private string url = "ws://192.168.0.2:9110/GameId={0}&MemberId={1}&Device={2}&DeviceId={3}&Token={4}";
        //private string url = "ws://127.0.0.1:9800/GameId={0}&MemberId={1}&Device={2}&DeviceId={3}&Token={4}";
        private TokenManagement<TokenDto> tokenManager = new TokenManagement<TokenDto>("123456", 604800, 604800);
        Dictionary<BetPosType, decimal> odds = null;
        Dictionary<BetPosType, decimal> totalBet = null;
        List<SettleDto> settleResult = null;

        private WebSocket webSocket = null;

        public Form1()
        {
            InitializeComponent();
            cmb_device.SelectedIndex = 0;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            var gameId = Convert.ToInt32(txt_gameId.Text);
            var memberId = Convert.ToInt32(txt_memberId.Text);
            var device = cmb_device.SelectedItem.ToString();
            var deviceId = txt_deviceId.Text;

            int enumValue = (int)((DeviceType)Enum.Parse(typeof(DeviceType), device));
            TokenResult tokenResult = tokenManager.CreatToken(new TokenDto
            {
                MemberID = memberId,
                DeviceID = deviceId,
                DeviceType = enumValue,
                exp = DateTime.Now.AddSeconds(604800).ToUnixTimeSpan(),
                iat = DateTime.Now.ToUnixTimeSpan()
            });
            string token = tokenResult.Token;

            ShowMessage(string.Format(url, gameId, memberId, device, deviceId, token));

        }
        private void btn_conn_Click(object sender, EventArgs e)
        {
            var gameId = Convert.ToInt32(txt_gameId.Text);
            var memberId = Convert.ToInt32(txt_memberId.Text);
            var device = cmb_device.SelectedItem.ToString();
            var deviceId = txt_deviceId.Text;

            int enumValue = (int)((DeviceType)Enum.Parse(typeof(DeviceType), device));
            TokenResult tokenResult = tokenManager.CreatToken(new TokenDto
            {
                MemberID = memberId,
                DeviceID = deviceId,
                DeviceType = enumValue,
                exp = DateTime.Now.AddSeconds(604800).ToUnixTimeSpan(),
                iat = DateTime.Now.ToUnixTimeSpan()
            });
            string token = tokenResult.Token;

            var ws = new WebSocket(string.Format(url, gameId, memberId, device, deviceId, token));

            //收到消息处理
            ws.OnMessage += (onMessageSender, arg) =>
            {
                ShowMessage(arg.Data);
                MessageDto dto = arg.Data.FromJson<MessageDto>();
                switch (dto.Command)
                {
                    case MainCommand.MSG_ACK:
                        break;
                    case MainCommand.MSG_ERROR:
                        break;
                    case MainCommand.MSG_GAME:
                        MessageDto<GameMessageDto> gameDto = arg.Data.FromJson<MessageDto<GameMessageDto>>();
                        switch (gameDto.Data.Command)
                        {
                            case QIC.EGame.IGameMachineService.Enums.GameCommand.MSG_GAME_INIT:
                                MessageDto<GameMessageDto<InitGameDto>> initDto = arg.Data.FromJson<MessageDto<GameMessageDto<InitGameDto>>>();

                                if (initDto.Data.Data.Status == GameStatus.BET)
                                {
                                    odds = initDto.Data.Data.Odds;
                                    totalBet = initDto.Data.Data.TotalBet;
                                    ShowOdds();
                                }
                                if (initDto.Data.Data.Cards !=null) ShowCards(initDto.Data.Data.Cards.FirstCard, initDto.Data.Data.Cards.SecondCard, initDto.Data.Data.Cards.ThirdCard);
                                break;
                            case QIC.EGame.IGameMachineService.Enums.GameCommand.MSG_GAME_START:
                                MessageDto<GameMessageDto<StartGameDto>> startDto = arg.Data.FromJson<MessageDto<GameMessageDto<StartGameDto>>>();
                                ShowCards(startDto.Data.Data.FirstCard, startDto.Data.Data.SecondCard, 0);
                                odds = startDto.Data.Data.Odds;
                                totalBet = null;
                                ShowOdds();
                                break;
                            case QIC.EGame.IGameMachineService.Enums.GameCommand.MSG_GAME_GAMERESULT:
                                MessageDto<GameMessageDto<CardInfoDto>> gameResultDto = arg.Data.FromJson<MessageDto<GameMessageDto<CardInfoDto>>>();
                                ShowCards(gameResultDto.Data.Data.FirstCard, gameResultDto.Data.Data.SecondCard, gameResultDto.Data.Data.ThirdCard);
                                break;
                            case QIC.EGame.IGameMachineService.Enums.GameCommand.MSG_GAME_BETRESULT:
                                MessageDto<GameMessageDto<BetResultDto>> betResultDto = arg.Data.FromJson<MessageDto<GameMessageDto<BetResultDto>>>();
                                if (betResultDto.Data.Data.Success)
                                {
                                    totalBet = betResultDto.Data.Data.TotalBet.ToDictionary(item => (BetPosType)item.Key, item
                                        => item.Value);
                                }
                                ShowOdds();
                                break;
                            case QIC.EGame.IGameMachineService.Enums.GameCommand.MSG_GAME_SETTLERESULT:
                                MessageDto<GameMessageDto<SettleResultDto>> settleResultDto = arg.Data.FromJson<MessageDto<GameMessageDto<SettleResultDto>>>();
                                settleResult = settleResultDto.Data.Data.Result;
                                ShowOdds();
                                break;
                        }
                        break;
                    case MainCommand.MSG_KICKOUT:
                        break;
                    case MainCommand.MSG_SYSTEM_PUSH:
                        break;
                    default:
                        break;
                }
            };
            ws.OnOpen += (onOpenSender, arg) =>
            {
                ShowMessage("已连接");
            };

            //连接关闭处理
            ws.OnClose += (onCloseSender, arg) =>
            {
                ShowMessage("连接已断开");
            };
            //错误处理
            ws.OnError += (OnErrorSender, arg) =>
            {

            };

            ws.Connect();
            webSocket = ws;
        }
        private void ShowMessage(string message)
        {
            this.Invoke((EventHandler)delegate { richTextBox1.AppendText(DateTime.Now + " - " + message + "\r\n"); });
        }
        private void ShowCards(short fristCard, short secondCard, short thirdCard)
        {
            this.Invoke((EventHandler)delegate
            {
                lblFirst.Text = GetCard(fristCard);
                lblSecond.Text = GetCard(secondCard);
                lblThird.Text = GetCard(thirdCard);
            });
        }
        private string GetCard(short card)
        {
            if (card <= 0 || card >= 53) return "";
            byte number = Convert.ToByte((card-1) % 13);
            number++;
            byte color = Convert.ToByte(Math.Floor((card - 1) / 13M));

            string point = string.Empty;
            switch (color)
            {
                case 0:
                    point = "黑";
                    break;
                case 1:
                    point = "红";
                    break;
                case 2:
                    point = "梅";
                    break;
                case 3:
                    point = "方";
                    break;
            }
            if (number == 11) point += "J";
            else if (number == 12) point += "Q";
            else if (number == 13) point += "K";
            else if (number == 1) point += "A";
            else point += number.ToString();
            return point;
        }
        private void ShowOdds()
        {
            this.Invoke((EventHandler)delegate
            {
                foreach (KeyValuePair<BetPosType, decimal> item in odds)
                {
                    string betValue = item.Value.ToString();
                    if (totalBet != null && totalBet.ContainsKey(item.Key))
                    {
                        betValue += "[" + totalBet[item.Key] + "]";
                    }
                    switch (item.Key)
                    {
                        case BetPosType.BIG:
                            
                            btnBig.Text = betValue; break;
                        case BetPosType.BLACK:
                            btnBlack.Text = betValue; break;
                        case BetPosType.EVEN:
                            btnEven.Text = betValue; break;
                        case BetPosType.HIT:
                            btnHit.Text = betValue; break;
                        case BetPosType.IN:
                            btnIn.Text = betValue; break;
                        case BetPosType.ODD:
                            btnOdd.Text = betValue; break;
                        case BetPosType.OUT:
                            btnOut.Text = betValue; break;
                        case BetPosType.RED:
                            btnRed.Text = betValue; break;
                        case BetPosType.SMALL:
                            btnSmall.Text = betValue; break;

                    }
                }
            });
        }

        private void btnBig_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.BIG);
        }

        private void btnSmall_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.SMALL);
        }

        private void btnHit_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.HIT);
        }

        private void btnOdd_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.ODD);
        }

        private void btnEven_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.EVEN);
        }

        private void btnIn_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.IN);
        }

        private void btnRed_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.RED);
        }

        private void btnBlack_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.BLACK);
        }

        private void btnOut_Click(object sender, EventArgs e)
        {
            Bet(BetPosType.OUT);
        }
        private void Bet(BetPosType betpos)
        {
            if (odds == null || odds.ContainsKey(betpos) == false) return;
            if (odds[betpos] == 0) return;

            MessageDto<GameMessageDto<List<BetDto>>> bet = new MessageDto<GameMessageDto<List<BetDto>>>
            {
                MSGID = Guid.NewGuid().ToString(),
                Command = MainCommand.MSG_GAME,
                Data = new GameMessageDto<List<BetDto>>
                {
                    Command = QIC.EGame.IGameMachineService.Enums.GameCommand.MSG_GAME_BET,
                    Data = new List<BetDto>()
                }
            };
            bet.Data.Data.Add(new BetDto { BetPos = betpos.GetHashCode(), Amount = 10, Odds = odds[betpos] });
            ShowMessage(bet.ToJson());
            webSocket.Send(bet.ToJson());
        }

    }
}