namespace Enum{
    export enum BetBarView{
        /**设置投注个数 */
        SET_BET = 10000,
        /**全部加1 */
        ADD_ALL,
        /**清除全部 */
        CLEAR_ALL,
        /**改变游戏状态 */
        CHANG_GAME_STATUS,
    }
}
class BetBarView extends BaseBetBarView implements IView{
    /**游戏状态 */
    private gameStatus:Enum.GameStatus = Enum.GameStatus.DEFAULT;
    
    constructor(eventKey: string) {
        super();
        this.ListenEventKey = eventKey;
    }

    /** 
     * 刷新UI
    */
    public Refresh():void{

    }

    /**
     * 设置结果
     * @param position 
     */
    public Set(data:any,type:any):void{   
        switch(type){
            case Enum.BetBarView.SET_BET:
                this.SetBet(data);
                break;
            case Enum.BetBarView.ADD_ALL:
                this.AddAll();
                break;
            case Enum.BetBarView.CLEAR_ALL:
                this.ClearAll();
                break;
            case Enum.BetBarView.CHANG_GAME_STATUS:
                this.gameStatus = data;
                break;
        }
    }

    private SetBet(data:OnceBet.BetPosAmountDto):void{
        let number:Laya.Text = this.ui.getChildAt(data.Pos).getChildAt(1).getChildByName('betNumber') as Laya.Text;
        number.text = data.Amount+''; 
    }

    /**
     * 全部+1
     */
    private AddAll():void{
        for(let i = 0;i<this.lenght;i++){
            this.OnBetClick(i);
        }
    }

    /** 
     * 清除所有
    */
    private ClearAll():void{
        for(let i = 0;i<this.lenght;i++){
            let number:Laya.Text = this.ui.getChildAt(i).getChildAt(1).getChildByName('betNumber') as Laya.Text;
            number.text = '0';       
        }
    }

    

    /**
     * 点击事件触发函数
     * @param position 投注位置
     */
    public OnBetClick(position:number):void{
        if(this.gameStatus != Enum.GameStatus.DEFAULT) return;
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = position;
        data.Type = Enum.ListenViewEnum.BetPos;

        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}