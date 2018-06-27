abstract class CardBaseUI {
    protected pokerNum: number = 3;
    protected cardList: Array<Dto.CardDto> = [];
    protected pokerEffect: PokerEffect = new PokerEffect();

    protected pokerPosV: Array<any> = [{ x: 95, y: 398 }, { x: 376, y: 398 }, { x: 657, y: 398 }];
    protected pokerEndPosV: Array<any> = [{ x: 53, y: 762 }, { x: 140, y: 762 }, { x: 227, y: 762 }];
    protected pokerScaleV: any = { scaleX: 70 / 180, scaleY: 90 / 250 }

    protected pokerPosH: Array<any> = [{ x: 364, y: 347 }, { x: 688, y: 347 }, { x: 1020, y: 347 }];
    protected pokerEndPosH: Array<any> = [{ x: 57, y: 165 }, { x: 123, y: 165 }, { x: 191, y: 165 }];
    protected pokerScaleH: any = { scaleX: 60 / 180, scaleY: 80 / 250 }
    constructor() {
        for (var i = 0; i < this.pokerNum; i++) {
            let dto = new Dto.CardDto();
            dto.Poker = new ui.PokerHVUI();
            dto.Poker.visible = false;
            dto.Poker.zOrder = 5;
            this.cardList.push(dto);
            Laya.stage.addChild(this.cardList[i].Poker);
        }
    }

    /**
     * 切换横竖屏
     * @param isVer 是否为竖屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.cardList[0].Poker);
        Laya.stage.removeChild(this.cardList[1].Poker);
        Laya.stage.removeChild(this.cardList[2].Poker);
        this.pokerEffect.ClearPoker(this.cardList[0].Poker);
        this.pokerEffect.ClearPoker(this.cardList[1].Poker);
        this.pokerEffect.ClearPoker(this.cardList[2].Poker);
        let pokerPos = isVer ? this.pokerPosV : this.pokerPosH;
        let pokerEndPos = isVer ? this.pokerEndPosV : this.pokerEndPosH;
        let pokerScale = isVer ? this.pokerScaleV : this.pokerScaleH;
        for (var i = 0; i < this.pokerNum; i++) {
            this.cardList[i].BaseScale.x = pokerPos[i].x;
            this.cardList[i].BaseScale.y = pokerPos[i].y;
            this.cardList[i].Scale.x = pokerEndPos[i].x;
            this.cardList[i].Scale.y = pokerEndPos[i].y;
            this.cardList[i].Scale.scaleX = pokerScale.scaleX;
            this.cardList[i].Scale.scaleY = pokerScale.scaleY;
            Laya.stage.addChild(this.cardList[i].Poker);
            this.pokerEffect.Show(this.cardList[i]);
        }
    }

    /**
     * 日志
     * @param msg 日志内容 
     * @param key 日志key值
     */
    protected Log(msg: any = "", key: string = "log"): void {
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    }

}
