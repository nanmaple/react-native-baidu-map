
abstract class RoundBaseUI {
    protected ui: ui.RoundHUI | ui.RoundVUI;
    protected round:string;
    protected state:Enum.GameStatus = Enum.GameStatus.DEFAULT;
  
    constructor(){

    }

    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    public ResetScreen(isVer?: boolean) {
        Laya.stage.removeChild(this.ui);

        if (isVer) {
            this.ui = new ui.RoundVUI();

        } else {
            this.ui = new ui.RoundHUI();
        }
        //基础样式
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        let language: LanguageUtils.Language = new LanguageUtils.Language();
        this.ui.roundLabel.text = language.GetLanguage("Issue");
        this.SetGameRound(this.round);
        this.SetGameState(this.state);

        Laya.stage.addChild(this.ui);
    }

    /**
     * 设置游戏期号
     * @param round 期号
     */
    abstract SetGameRound(round:string):void;

    /**
     * 设置游戏状态
     * @param state 游戏状态 
     */
    abstract SetGameState(state:Enum.GameStatus):void;

}