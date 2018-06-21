/// <reference path="../../GameFrame/GameViewManager/Scale.ts"/>
var CardBaseUI = /** @class */ (function () {
    function CardBaseUI() {
        this.pokerNum = 3;
        this.cardList = [];
        this.pokerEffect = new PokerEffect();
        this.pokerPosV = [{ x: 95, y: 398 }, { x: 376, y: 398 }, { x: 657, y: 398 }];
        this.pokerEndPosV = [{ x: 53, y: 762 }, { x: 140, y: 762 }, { x: 227, y: 762 }];
        this.pokerScaleV = { scaleX: 70 / 180, scaleY: 90 / 250 };
        this.pokerPosH = [{ x: 364, y: 347 }, { x: 688, y: 347 }, { x: 1020, y: 347 }];
        this.pokerEndPosH = [{ x: 57, y: 165 }, { x: 123, y: 165 }, { x: 191, y: 165 }];
        this.pokerScaleH = { scaleX: 60 / 180, scaleY: 80 / 250 };
        for (var i = 0; i < this.pokerNum; i++) {
            var dto = new Dto.CardDto();
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
    CardBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.cardList[0].Poker);
        Laya.stage.removeChild(this.cardList[1].Poker);
        Laya.stage.removeChild(this.cardList[2].Poker);
        var pokerPos = isVer ? this.pokerPosV : this.pokerPosH;
        var pokerEndPos = isVer ? this.pokerEndPosV : this.pokerEndPosH;
        var pokerScale = isVer ? this.pokerScaleV : this.pokerScaleH;
        for (var i = 0; i < this.pokerNum; i++) {
            this.cardList[i].BaseScale.x = pokerPos[i].x;
            this.cardList[i].BaseScale.y = pokerPos[i].y;
            this.cardList[i].Scale.x = pokerEndPos[i].x;
            this.cardList[i].Scale.y = pokerEndPos[i].y;
            this.cardList[i].Scale.scaleX = pokerScale.scaleX;
            this.cardList[i].Scale.scaleY = pokerScale.scaleY;
            Laya.stage.addChild(this.cardList[i].Poker);
            if (this.cardList[i].Status !== Dto.PokerStatus.Hide) {
                this.pokerEffect.Show(this.cardList[i]);
            }
        }
    };
    /**
     * 日志
     * @param msg 日志内容
     * @param key 日志key值
     */
    CardBaseUI.prototype.Log = function (msg, key) {
        if (msg === void 0) { msg = ""; }
        if (key === void 0) { key = "log"; }
        if (GameConfig.OpenLog) {
            console.log(Date.now().toString(), key + ":", msg);
        }
    };
    return CardBaseUI;
}());
//# sourceMappingURL=CardBaseUI.js.map