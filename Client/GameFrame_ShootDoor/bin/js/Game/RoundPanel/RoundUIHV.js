var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BetStatus = {
    0: "WaitStart",
    1: "Betting",
    2: "EndBet",
    3: "Settling",
    4: "HaveSettled"
};
var RoundUIHV = /** @class */ (function (_super) {
    __extends(RoundUIHV, _super);
    function RoundUIHV() {
        return _super.call(this) || this;
    }
    RoundUIHV.prototype.SetGameRound = function (round) {
        this.ui.gameRound.text = round;
    };
    RoundUIHV.prototype.SetGameState = function (state) {
        var language = new LanguageUtils.Language();
        this.ui.gameState.text = language.GetLanguage(BetStatus[state]);
    };
    return RoundUIHV;
}(RoundBaseUI));
//# sourceMappingURL=RoundUIHV.js.map