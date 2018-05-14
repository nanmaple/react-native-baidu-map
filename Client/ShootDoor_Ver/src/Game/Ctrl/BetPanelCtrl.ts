class BetPanelCtrl {
    //投注面板UI
    private betPanel: ScenePanel.BetPanelHor | ScenePanel.BetPanelVer;
    //当前投注筹码值
    private chip: number = 5;
    //注入handler
    private handler: Laya.Handler;
    //上一个注单投注成功的投注信息
    private lastBetPosMsg: any = new Object();
    //当前未投注成功的注单信息
    private currentBetPosMsg: Array<Dto.BetDto> = new Array<Dto.BetDto>();
    //当前赔率
    private currentOdds: any = new Object();
    //限额
    private limitScore: Dto.LimitDto;
    //已发送的send注单
    private sendBetPosMsg: any = new Object();
    //账号是否关闭
    private isClose: boolean;
    //当前投注分数
    private currentBetSocre: number = 0;
    //余额
    private balance: number = 0;

    //构造函数，传入回调
    constructor(handler: Laya.Handler, isClose: boolean, memberInfo: BaseDto.MemberInfoDto) {
        //绑定handler回调
        this.handler = handler;
        //绑定账号是否关闭
        this.isClose = isClose;
        ScenePanel.GameUI.GetInstance().GetBetPanel().SetClickHandelr(Laya.Handler.create(this, this.BtnClickHandler, [0], false));
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetClickHandelr(Laya.Handler.create(this, this.BtnClickHandler, [1], false));
        if (memberInfo) {
            this.balance = Number(memberInfo.Score);
        }
        //禁用投注
        ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledAllBtn();
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledAllBtn();
    }

    /**
     * 设置赔率
     * @param odds 赔率信息
     */
    public SetOdds(odds: any, limit?: Dto.LimitDto): void {
        this.currentOdds = odds;
        //改变按钮赔率
        ScenePanel.GameUI.GetInstance().GetBetPanel().SetOdds(odds);
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetOdds(odds);
    }

    /**
     * 游戏初始化
     * @param data 初始化数据
     */
    public GameInit(data: Dto.InitGameDto, isReInit: boolean = false): void { 
        if (!isReInit) {
            //清除当前未投注成功的注单信息
            this.currentBetPosMsg = new Array<Dto.BetDto>();
        }
        //重置按钮的赔率
        this.SetOdds(data.Odds);
        //设置限额
        this.limitScore = data.Limit;
        ScenePanel.GameUI.GetInstance().GetBetPanel().SetLimit(data.Limit);
        //初始化界面
        if (data.Status == BaseEnum.GameStatus.BET && !this.isClose) {
            this.lastBetPosMsg = data.TotalBet;
        }
        ScenePanel.GameUI.GetInstance().GetBetPanel().GameInit(this.lastBetPosMsg, this.currentBetPosMsg, true);
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().GameInit(this.lastBetPosMsg, this.currentBetPosMsg, true);
    }

    /**
     * 开始新一局游戏
     * @param odds 赔率信息
     */
    public GameStart(odds: any): void {
        //清除当前未投注成功的注单信息
        this.currentBetPosMsg = new Array<Dto.BetDto>();
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
        this.currentBetSocre = 0;
        //清除飞动筹码
        ScenePanel.GameUI.GetInstance().GetBetPanel().ClearFlyChip();
        //重置投注面板
        ScenePanel.GameUI.GetInstance().GetBetPanel().ResetBetBtnLabel();
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().ResetBetBtnLabel();
        //禁用投注按钮
        ScenePanel.GameUI.GetInstance().GetBetPanel().SetBetting(true);
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetBetting(true);
        //重置按钮的赔率
        this.SetOdds(odds);
        //账号未关闭
        if (!this.isClose) {
            //重置确认投注按钮
            ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetPanel(false);
            ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetPanel(false);
            //启动定时重发
            Laya.timer.loop(5000, this, this.ReSend);
        }
    }

    /**
     * 投注Ack回调
     */
    public BetAck(id: string): void {
        if (this.sendBetPosMsg[id]) {
            this.sendBetPosMsg[id] = null;
            //取消确认投注按钮的loading效果
        }
    }

    /**
     * 投注结果
     */
    public BetResult(dto: Dto.BetResultDto): void {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        if (this.isClose) {
            return;
        }
        //改变上一局投注结果
        if (dto.Success) {
            this.balance = dto.Balance;
            //改变投注信息为本次投注成功的注单信息 this.lastBetPosMsg
            this.lastBetPosMsg = dto.TotalBet;
            console.log("上一次投注数据:",this.lastBetPosMsg);
            ScenePanel.GameUI.GetInstance().GetBetPanel().SetBetPos(this.lastBetPosMsg);
            ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetBetPos(this.lastBetPosMsg);
            //提示投注成功
            ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("betSuccess"));
            ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("betSuccess"));
        } else {
            //根据错误码转换对应错误信息
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            let errorMsg: string = language.GetLanguage(BaseEnum.BetErrorCode[dto.ErrorCode], GameConfig.GameID);
            //提示错误信息
            ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(errorMsg);
            ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(errorMsg);
            //还原上次成功的投注状态
            ScenePanel.GameUI.GetInstance().GetBetPanel().SetBetPos(this.lastBetPosMsg);
            ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetBetPos(this.lastBetPosMsg);
        }
    }

    /**
     * 游戏结束
     */
    public GameResult(): void {
        if (this.isClose) {
            return;
        }
        ScenePanel.GameUI.GetInstance().GetBetPanel().SetBetting(false);
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetBetting(false);
        //禁用所有按钮
        ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledAllBtn();
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledAllBtn();
        //清除已发送的注单
        this.sendBetPosMsg = new Object();
        //修改位置和数值
        ScenePanel.GameUI.GetInstance().GetBetPanel().GameResult(this.lastBetPosMsg);
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().GameResult(this.lastBetPosMsg);
        //清除当前未投注成功的注单信息
        this.currentBetPosMsg = new Array<Dto.BetDto>();
        this.currentBetSocre = 0;
    }

    /**
     * 游戏结算
     */
    public SettleResult(data: Dto.GameResultDto,roundID:string): void {
        if (this.isClose) {
            return;
        }
        this.balance = data.Balance;
        //输赢动画效果
        ScenePanel.GameUI.GetInstance().GetBetPanel().SettleResult(data, this.lastBetPosMsg);
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().SettleResult(data, this.lastBetPosMsg);
        //清除上一个注单投注成功的投注信息
        this.lastBetPosMsg = new Object();
    }

    /**
     * 按钮回调事件
     * @param clickType 按钮类型及数据
     */
    private BtnClickHandler(type:number, dto: ScenePanel.ClickResultDto): void {
        switch (dto.Type) {
            case ScenePanel.ClickType.ODDS:
                //点击投注回调
                this.BetPosType(dto.Data, type);
                break;

            case ScenePanel.ClickType.BET:
                //投注确认回调
                this.BetConfirm(type);
                break;

            case ScenePanel.ClickType.CANCEL:
                //投注取消按钮回调
                this.BetCancel(type);
                break;

            case ScenePanel.ClickType.CHIP:
                //切换筹码回调
                this.ChangeChip(dto.Data);
                break;

            default:
                break;
        }
    }

    /**
     * 下注
     * @param posType 投注类型
     */
    private BetPosType(posType: Enum.BetPosType, type:number = 0): void {
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        let length: number = this.currentBetPosMsg.length;
        let hasPos: boolean = false;
        if (this.currentOdds[posType] == 0) return;
        //当前位置已投注金额
        let allBetSocre: number = 0;
        if (this.lastBetPosMsg && this.lastBetPosMsg.hasOwnProperty(posType)) {
            allBetSocre += this.lastBetPosMsg[posType];
        }
        for (let index = 0; index < length; index++) {
            //当前未投注注单中存在该类型投注，则累加金额
            if (this.currentBetPosMsg[index].BetPos == posType) {
                hasPos = true;
                //当前位置未投注成功的投注金额
                let currentBetSocre: number = this.currentBetPosMsg[index].Amount + this.chip;
                allBetSocre += currentBetSocre;
                //投注后金额在投注限额以内
                if (this.limitScore.MinBet <= allBetSocre && allBetSocre <= this.limitScore.MaxBet) {
                    //累加当前投注金额
                    let willAllBetMoney = this.currentBetSocre + this.chip;
                    if (willAllBetMoney > this.balance) {
                        //todo 多语言处理
                        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("BALANCE_SMALL")):
                        ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("BALANCE_SMALL"));
                        if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
                            type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
                            ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
                        }
                        return;
                    }
                    this.currentBetSocre = willAllBetMoney;
                    this.currentBetPosMsg[index].Amount = currentBetSocre;
                    type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ChipsFly(posType - 1, allBetSocre) :       
                    ScenePanel.GameUI.GetInstance().GetBetMorePanel().ChipsFly(posType, allBetSocre);
                } else if (allBetSocre > this.limitScore.MaxBet) {
                    let betMoney: number = this.limitScore.MaxBet - (allBetSocre - this.chip);
                    //投注金额为0，已结达到最大额度
                    if (betMoney <= 0) {
                        //todo 多语言处理
                        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("OVER_LIMIT")):
                        ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("OVER_LIMIT"));
                        if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
                            type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
                            ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
                        }
                        return;
                    }
                    let willAllBetMoney = this.currentBetSocre + betMoney;
                    if (willAllBetMoney > this.balance) {
                        //todo 多语言处理
                        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("BALANCE_SMALL")):
                        ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("BALANCE_SMALL"));
                        if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
                            type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
                            ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
                        }
                        return;
                    }
                    this.currentBetSocre = willAllBetMoney;
                    this.currentBetPosMsg[index].Amount = this.limitScore.MaxBet;
                    type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ChipsFly(posType - 1, this.limitScore.MaxBet) :
                    ScenePanel.GameUI.GetInstance().GetBetMorePanel().ChipsFly(posType, this.limitScore.MaxBet);
                }
                break;
            }
        }

        //当前未投注注单中存在该类型投注，则追加该类型
        if (!hasPos) {
            let dto: Dto.BetDto = new Dto.BetDto();
            dto.BetPos = posType;
            //当前位置所有投注金额
            allBetSocre += this.chip;
            //投注筹码大于最小额度
            if (this.limitScore.MinBet <= allBetSocre && allBetSocre <= this.limitScore.MaxBet) {
                //累加当前投注金额
                let willAllBetMoney = this.currentBetSocre + this.chip;
                if (willAllBetMoney > this.balance) {
                    //todo 多语言处理
                    type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("BALANCE_SMALL")):
                    ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("BALANCE_SMALL"));
                    if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
                        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
                        ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
                    }
                    return;
                }
                this.currentBetSocre = willAllBetMoney;
                dto.Odds = this.currentOdds[posType];
                dto.Amount = this.chip;
                this.currentBetPosMsg.push(dto);
                type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ChipsFly(posType - 1, allBetSocre) :
                ScenePanel.GameUI.GetInstance().GetBetMorePanel().ChipsFly(posType, allBetSocre);
            } else if (allBetSocre > this.limitScore.MaxBet) {
                //求出达到超过最大投注额度时，实际可投注的金额
                let betMoney: number = this.limitScore.MaxBet - (allBetSocre - this.chip);
                //投注金额为0，已结达到最大额度
                if (betMoney <= 0) {
                    //todo 多语言处理
                    type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("OVER_LIMIT")):
                    ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("OVER_LIMIT"));
                    if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
                        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
                        ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
                    }
                    return;
                }
                //计算是否超过余额
                let willAllBetMoney = this.currentBetSocre + betMoney;
                if (willAllBetMoney > this.balance) {
                    //todo 多语言处理
                    type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ShowMsg(language.GetLanguage("BALANCE_SMALL")):
                    ScenePanel.GameUI.GetInstance().GetBetMorePanel().ShowMsg(language.GetLanguage("BALANCE_SMALL"));
                    if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
                        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
                        ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
                    }
                    return;
                }
                //累加当前投注额度
                this.currentBetSocre = willAllBetMoney;
                //累加到当前投注信息
                dto.Amount = betMoney;
                dto.Odds = this.currentOdds[posType];
                this.currentBetPosMsg.push(dto);
                type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().ChipsFly(posType - 1, this.limitScore.MaxBet) :
                ScenePanel.GameUI.GetInstance().GetBetMorePanel().ChipsFly(posType, this.limitScore.MaxBet);
            }
        }
        if (!this.currentBetPosMsg || this.currentBetPosMsg.length == 0) {
            type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().DisabledBetBtn():
            ScenePanel.GameUI.GetInstance().GetBetMorePanel().DisabledBetBtn();
        }
    }

    /**
     * 确认投注
     * @param 
     */
    private BetConfirm(type:number): void {
        if (this.isClose || !this.currentBetPosMsg || this.currentBetPosMsg.length === 0) {
            return;
        }
        //确认投注，发送当前注单到服务器
        let dto: Dto.HandlerDto = new Dto.HandlerDto();
        dto.MsgID = null;
        dto.Data = this.currentBetPosMsg;
        console.log("确认投注：",dto)
        this.handler.runWith(dto);
    }

    /**
     * 发送前返回消息id
     * @param id 消息ID
     */
    public SetMsgID(id: string): void {
        //将当前局投注注单赋值到已发送的队列中;
        let dto: Dto.SendBetDto = new Dto.SendBetDto();
        dto.Time = new Date().getTime();
        dto.Data = this.currentBetPosMsg;
        this.sendBetPosMsg[id] = dto;
        this.currentBetPosMsg = new Array<Dto.BetDto>();
        this.currentBetSocre = 0;
    }

    /**
     * 取消投注
     * @param posType 投注类型
     */
    private BetCancel(type:number = 0): void {
        if (this.isClose) {
            return;
        }
        this.currentBetPosMsg = new Array<Dto.BetDto>();
        this.currentBetSocre = 0;
        //改变投注信息为上一次投注成功的注单信息 this.lastBetPosMsg
        type == 0 ? ScenePanel.GameUI.GetInstance().GetBetPanel().SetBetPos(this.lastBetPosMsg) :
        ScenePanel.GameUI.GetInstance().GetBetMorePanel().SetBetPos(this.lastBetPosMsg);

    }

    /**
     * 改筹码
     * @param posType 投注类型
     */
    private ChangeChip(chip: number): void {
        if (this.isClose) {
            return;
        }
        this.chip = chip;
    }

    /**
     * 未收到Ack回复，则进行重发
     */
    private ReSend(): void {
        let timestamp = new Date().getTime();
        for (var key in this.sendBetPosMsg) {
            //需要重发的消息存在，则重发
            if (this.sendBetPosMsg[key]) {
                let sub = (timestamp - this.sendBetPosMsg[key].Time) / 1000;
                if (sub >= 5) {
                    let dto: Dto.HandlerDto = new Dto.HandlerDto();
                    dto.MsgID = key;
                    dto.Data = this.sendBetPosMsg[key].Data;
                    this.handler.runWith(dto);
                }
            }
        }
    }
}