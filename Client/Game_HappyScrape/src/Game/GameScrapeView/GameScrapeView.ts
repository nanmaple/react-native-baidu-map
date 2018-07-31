namespace Enum{
    export enum GameScrapeView{
        /**
         * 游戏结束
         */
        GameResult,
    }
}
 /**
 * View类
 * 功能：基础的View组件内部的逻辑，控制数据渲染逻辑和处理点击等事件，调用对应Base类功能方法和动画，事件通知上层或者ViewGameLogic
 * 
 */
class GameScrapeView extends BaseGameScrapeView implements IView {
    private listenEventKey: string = ""
    constructor(eventKey: string) {
        super();
        this.listenEventKey = eventKey;
    }
    /**
     * 类型：公有方法
     * 刷新方法，根据将组件内部的数据，处理逻辑后，将数据渲染到界面
     * 一般用于，当数据改变后，渲染需要延迟进行的情况
     */
    public Refresh(): void {

    }

    /**
     * 接收上层View或者GameViewLogic的数据,根据数据，进行不同的渲染
     * @param data 
     */
    public Set(data: any, type?: any): void {
        switch (type) {
            case Enum.GameCommand.MsgGameInit:
                this.GameInit(data); 
                break;
            case Enum.GameCommand.MsgGameSettleResult:
                this.GameSettleResult(data);
                break;
            case Enum.GameScrapeView.GameResult:
                this.GameResult();
                break;
            default:
                break;
        }
    }
    /**
     * 游戏初始化
     * @param data 
     */
    private GameInit(data:Dto.GameInitDto):void{
        for (var index = 0; index < this.ui.oddsInfo.numChildren; index++) {
            let odds:ui.OddsInfoViewUI = this.ui.oddsInfo.getChildAt(index) as ui.OddsInfoViewUI;
            odds.odd.text = "x" + data.Game1OddsInfo[index];
        }
    }
    /**
     * 投注结果
     * @param data 
     */
    private GameSettleResult(data:Dto.GameResultDto):void{
        if(data.Status == Enum.BetErrorCode.Success){
            this.GameStart(data);
        }
    }
    /**
     * 游戏开始
     */
    private GameStart(data:Dto.GameResultDto):void{
        this.game2Count = {};
        this.bonus = data.WinAmount;
        this.ReSetMaskView(true);
        this.DisabledScrape(false);
        for (let index = 0; index < this.ui.scrape_game1.numChildren; index++) {
            let layer:Laya.Box = this.ui.scrape_game1.getChildAt(index) as Laya.Box;
            for (let i = 0; i < layer.numChildren; i++) {
                let majBox:ui.MahjongViewUI = layer.getChildAt(i) as ui.MahjongViewUI;
                majBox.mahjong.skin = this.GetMahjongSkin(data.Game1Icons[index][i]);
                majBox.select.visible = false;
            }
        }
        for (let index = 0; index < this.ui.result_game1.numChildren; index++) {
            let mahjong:Laya.Image = this.ui.result_game1.getChildAt(index) as Laya.Image;
            mahjong.skin = this.GetMahjongSkin(data.Game1RewardIcons[index]);
        }
        for (let index = 0; index < this.ui.result_game2.numChildren; index++) {
            let resBox:ui.Game2ResViewUI = this.ui.result_game2.getChildAt(index) as ui.Game2ResViewUI;
            resBox.amount.text = "x" + data.Game2Icons[index];
            resBox.select.visible = false;
            if(this.game2Count[resBox.amount.text]){
                this.game2Count[resBox.amount.text]++;
            }else{
                this.game2Count[resBox.amount.text] = 1;
            }
        }
    }
    /**
     * 兑奖匹配中奖麻将(勾选)
     * @param data 
     */
    private MatchingResult():void{
        //匹配游戏一
        for (let index = 0; index < this.ui.scrape_game1.numChildren; index++) {
            let layer:Laya.Box = this.ui.scrape_game1.getChildAt(index) as Laya.Box;
            for (let i = 0; i < layer.numChildren; i++) {
                let majBox:ui.MahjongViewUI = layer.getChildAt(i) as ui.MahjongViewUI;
                for (let j = 0; j < this.ui.result_game1.numChildren; j++) {
                    let mahjong:Laya.Image = this.ui.result_game1.getChildAt(j) as Laya.Image;
                    if(majBox.mahjong.skin == mahjong.skin){
                        majBox.select.visible = true;
                    }
                }
            }
        }
        //匹配游戏二
        for(let key in this.game2Count){
            if(this.game2Count[key] >= 3){
                for (var index = 0; index < this.ui.result_game2.numChildren; index++) {
                    let resBox:ui.Game2ResViewUI = this.ui.result_game2.getChildAt(index) as ui.Game2ResViewUI;
                    if(resBox.amount.text == key){
                        resBox.select.visible = true;
                    }
                }
            }
        }
    }
    /**
     * 设置麻将的皮肤地址
     * @param index
     */
    private GetMahjongSkin(index:number):any{
        return "ui/mahjong/" + index + ".png";
    }
    /**
     * 游戏结束（完成兑奖）
     */
    private GameResult():void{
        this.DisabledScrape(true);
        this.ReSetMaskView(false);
        this.MatchingResult();
        this.SetAmount();
    }
    /**
     * 设置中奖金额
     */
    private SetAmount():void{
        this.ui.amount.text = this.bonus.toString();
        if(this.bonus <= 0){
            Utils.BackgroundMusic.PlaySounds("sound/lose.mp3");
        }else{
            Utils.BackgroundMusic.PlaySounds("sound/low.mp3");
        }
    }
    /**
     * 类型：私有方法
     * 通过事件，向上通知
     * 事件key值，通过构造函数时注入
     */
    public EventNotification(type:any, value?:any): void {
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = value;
        data.Type = type;
        let event = new CustomEvent(this.listenEventKey, { detail: data });
        document.dispatchEvent(event);
    }
}
