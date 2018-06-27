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
var FootballHV = /** @class */ (function (_super) {
    __extends(FootballHV, _super);
    function FootballHV() {
        return _super.call(this) || this;
    }
    FootballHV.prototype.Refresh = function () {
    };
    FootballHV.prototype.Set = function (data) {
        //定义三张牌
        var First = Utils.Poker.GetNumber(data.FirstCard);
        var Second = Utils.Poker.GetNumber(data.SecondCard);
        var Third = Utils.Poker.GetNumber(data.ThirdCard);
        //射进
        if ((Third > First && Third < Second) || (Third < First && Third > Second)) {
            this.ShootIn();
        }
        //射偏（左边）
        if ((Third < First && Third < Second && (First < Second || First == Second)) || (Third > First && Third > Second && First > Second)) {
            this.ShootLeft();
        }
        //射偏（右边）
        if ((Third > First && Third > Second && (First < Second || First == Second)) || (Third < First && Third < Second && First > Second)) {
            this.ShootRight();
        }
        //射到门柱左边
        if (Third == First && Third == Second) {
            this.ShootGoalPost(2);
        }
        //射到门柱左边
        if (Third == First) {
            this.ShootGoalPost(0);
        }
        //射到门柱右边
        if (Third == Second) {
            this.ShootGoalPost(1);
        }
    };
    return FootballHV;
}(FootballBaseUI));
//# sourceMappingURL=FootballUIHV.js.map