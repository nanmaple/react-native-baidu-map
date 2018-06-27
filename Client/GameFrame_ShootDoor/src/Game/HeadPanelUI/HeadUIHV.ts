/*
* name;
*/
class HeadUIHV extends HeadBaseUI{
    constructor(){
        super();
        
    }

    /**
     * 设置初始绑定
     * @param memberInfo 用户信息
     * @param isTourists 是否游客
     */
    public SetInfo(memberInfo: GameDto.MemberInfoDto, isTourists: boolean): void{
        this.memberInfo = memberInfo;
        this.isTourists = isTourists;

        if(memberInfo && !isTourists) {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            //显示头像
            this.ui.info.visible = true;
            //隐藏关注按钮
            this.ui.attention.visible = false;
            if(memberInfo.HeadImageUrl){
                this.ui.headPic.skin = memberInfo.HeadImageUrl.replace("http","https");
            }
            this.ui.nickname.text = memberInfo.Nickname;
            this.ui.agent.text = language.GetLanguage("Account") + memberInfo.Account;
            this.ui.score.text = Utils.Money.Format(memberInfo.Score);
        }else {
            this.ui.info.visible = false;
            this.ui.attention.visible = true;
            if (memberInfo && memberInfo.Score) {
                this.ui.score.text = Utils.Money.Format(memberInfo.Score);
            } else {
                this.ui.score.text = Utils.Money.Format(0);
            }
        }
    }

    public ChangeMoney(money: number): void{
        this.money = money;
        this.moneyEffect.start(money);
    }

    public onRuleHandler(): void{

        let data: Dto.BroadcastDto = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.ShowRule;

        let event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    }

    public onGRHandler(): void{

        let data: Dto.BroadcastDto = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.BetHistory;

        let event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    }

    public onAttention(): void{
        Laya.Browser.window.location.href = GameConfig.GetWeChatUrl(Utils.Url.GetQuery("parentid"), true);
    }

    public OnBalanceHander(): void{

        let data: Dto.BroadcastDto = new Dto.BroadcastDto();
        data.Value = '';
        data.Type = Enum.ListenUIEnum.ChangeMoney;

        let event = new CustomEvent("GameUI", { detail: data });
        document.dispatchEvent(event);
    }

    
}
