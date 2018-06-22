
class FootballHV extends FootballBaseUI implements IUI {
    constructor() {
        super();
    }
    public Refresh():void{

    }
    public Set(data: any):void{
        //定义三张牌
        let First: number = Utils.Poker.GetNumber(data.FirstCard);
        let Second: number = Utils.Poker.GetNumber(data.SecondCard);
        let Third: number = Utils.Poker.GetNumber(data.ThirdCard);
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
    }
    
}
