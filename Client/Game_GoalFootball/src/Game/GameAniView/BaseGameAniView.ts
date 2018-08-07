abstract class BaseGameAniView {
    protected ui: ui.GameAniViewUI;
    protected listenEventKey: string = "";
    protected counts:number = 0;
    /**
     * 曲线初始坐标
     */
    protected initPos:any = {};  
    /**
     * 曲线结束坐标
     */
    protected endPos: any = {};  
    /**
     * 曲线中点坐标
     */
    protected centPos: any = {};  
    /**
     * 鼠标与曲线X轴的相对偏移量
     */
    protected relativeX:number = 0;   
    /**
     * 鼠标与曲线Y轴的相对偏移量
     */
    protected relativeY:number = 0;   
    /**
     * 是否进球
     */
    protected isGoal:boolean = false;  
    /**
     * 是否成功防守（防守球员）
     */
    protected isDefense:boolean = false;  
    /**
     * 守门员防守动画类型
     */
    protected guardAniType: Enum.GuardAniTypeEnum = null;  
    /**
     * 足球最后落点坐标
     */
    protected footballEndPos:any = {};   
    /**
     * 防守球员数组
     */
    protected defenderArr:any = [];    
    /**
     * 道具Box数组
     */
    protected propBoxArr:Array<ui.PropBtnViewUI> = [];  
    /**
     * 道具默认动画数组
     */
    protected propAutoAniArr:Array<any> = ["bomb_wait","beer_wait","bikini_wait"]; 
    /**
     * 是否已初始化道具
     */
    protected isInitProp:boolean = false;
    /**
     * 是否按下鼠标
     */
    protected isMouseDown:boolean = false;
    /**
     * 道具使用音效
     */
    protected propSoundArr:Array<string> = ["sound/bomb.mp3","sound/bottles.mp3","sound/bra.mp3"];
    constructor() {

    }
    /**
     * 重置屏幕
     */
    public ResetScreen() {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameAniViewUI();
        this.ui.zOrder = 2;
        Laya.stage.addChild(this.ui);
        this.ui.on(Laya.Event.MOUSE_MOVE, this, this.OnMouseMove);
        this.ui.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
        this.ui.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.Init();
    }
    /**
     * 游戏初始化
     */
    private Init():void{
        this.initPos = {X:Laya.stage.width / 2, Y:885};
        this.endPos = {X:this.ui.goal.x, Y:this.ui.goal.y};
        this.centPos = {X:this.endPos.X, Y:(this.initPos.Y + this.endPos.Y) / 2};
        Effect.CurvesEffect.CreateLine(this.initPos, this.centPos, this.endPos);
        this.ui.goalkeeper.loadAnimation("GoalkeeperAni.ani",Laya.Handler.create(this,()=>{
            this.ui.goalkeeper.play(0,true,"guard_wait");
        },null,false));
        this.DefenderRandomPos();
        this.InitProp();
    }
    /**
     * 是否禁用动画面板
     * @param disabled 
     */
    protected DisabledAniView(disabled: boolean):void{
        this.ui.disabled = disabled;
        this.ui.gray = false;
    }
    /**
     * 初始化道具
     */
    public InitProp():void{
        for (let index = 0; index < 3; index++) {
            let propBox:ui.PropBtnViewUI = new ui.PropBtnViewUI(); 
            propBox.on(Laya.Event.CLICK, this, this.TakeProp, [index]);
            propBox.prop.loadAnimation("PropAni.ani",Laya.Handler.create(this,()=>{
                propBox.prop.play(0,true,this.propAutoAniArr[index]);
            },null,false));
            propBox.money.text = "0";
            propBox.y = (propBox.height + 10) * index;
            this.ui.propBox.addChild(propBox);
            this.propBoxArr.push(propBox);
        }
    }
    /**
     * 使用道具
     * @param index 
     */
    private TakeProp(index:number):void{
        Utils.BackgroundMusic.PlaySounds(this.propSoundArr[index]);
        this.propBoxArr[index].disabled = true;
        this.propBoxArr[index].gray = false;
        this.propBoxArr[index].select.visible = true;
        this.propBoxArr[index].prop.stop();
        let endPos = this.defenderArr[index].localToGlobal(new Laya.Point(0,0));
        Effect.PropChooseEffect.ChooseProp(index, endPos, Laya.Handler.create(this,this.ClearDefender,null,false));
        this.EventNotification(Enum.ListenViewEnum.ChooseProp, index);
    }
    /**
     * 重置道具
     */
    private ResetProp():void{
        for (var index = 0; index < 3; index++) {
            this.propBoxArr[index].disabled = false;
            this.propBoxArr[index].select.visible = false;
            this.propBoxArr[index].prop.play(0,true); 
        }
    }
    /**
     * 鼠标按下
     */
    private OnMouseDown():void{
        this.relativeX = Laya.stage.mouseX - this.endPos.X;
        this.relativeY = Laya.stage.mouseY - this.endPos.Y;
        this.isMouseDown = true;
    }
    /**
     * 鼠标移开
     */
    private OnMouseUp():void{
        this.isMouseDown = false;
    }
    /**
     * 鼠标移动
     */
    private OnMouseMove():void{
        if(!this.isMouseDown) return;
        let endX:number = Laya.stage.mouseX - this.relativeX;
        let endY:number = Laya.stage.mouseY - this.relativeY;
        if(endX < this.ui.goal.x){
            this.endPos.X = this.ui.goal.x;
        }
        else if(endX > this.ui.goal.x && endX < this.ui.goal.x + this.ui.goal.width){
            this.endPos.X = endX;
        }
        else{
            this.endPos.X = this.ui.goal.x + this.ui.goal.width;
        }
        if(endY < this.ui.goal.y){
            this.endPos.Y = this.ui.goal.y;
        }
        else if(endY > this.ui.goal.y && endY < this.ui.goal.y + this.ui.goal.height){
            this.endPos.Y = endY;
        }
        else{
            this.endPos.Y = this.ui.goal.y + this.ui.goal.height;
        }
        this.centPos = {X:this.endPos.X, Y:(this.initPos.Y + this.endPos.Y) / 2};
        Effect.CurvesEffect.CreateLine(this.initPos, this.centPos, this.endPos);
    }

    /**
     * 生成防守者随机位置
     */
    private DefenderRandomPos():void{
        this.defenderArr = [];
        this.ui.defender.removeChildren();
        let randData:any = [0,1,2,3,4];
        let randPos:Array<any> = Utils.RandomSort.GetRandData(randData);
        for(let i:number = 0;i < 3;i++){
            let defender:Laya.Animation = new Laya.Animation();
            defender.loadAnimation("DefenderAni.ani",Laya.Handler.create(this,()=>{
                defender.play(0,true,"defender" + i + "_wait");
            },null,false));  
            this.ui.defender.addChild(defender); 
            defender.name = "defender" + i;
            defender.size(85,225);
            defender.x = (defender.width + 10) * randPos[i] + 10;
            this.defenderArr.push(defender);
        }
    }
    /**
     * 是否防守成功
     */
    protected IsSucDefense():any{
        for(let i:number = 0;i < this.ui.defender.numChildren;i++){
            let defender:Laya.Animation = this.ui.defender.getChildAt(i) as Laya.Animation;
            let range:number = this.endPos.X - this.ui.defender.x - defender.x;
            if(range > 25 && range < 50){
                this.isDefense = true;
                break;
            }
        }
    }
    /**
     * 防守球员开始顶球
     */
    protected DefenderStartJump():void{
        for(let i:number = 0;i < this.ui.defender.numChildren;i++){
            let defender:Laya.Animation = this.ui.defender.getChildAt(i) as Laya.Animation;
            defender.play(0,false,"defender" + i + "_jump");
        }
    }
    /**
     * 道具消除防守球员
     */
    private ClearDefender(index:number):void{
        this.ui.defender.removeChildByName("defender" + index);
    }
    /**
     * 重置
     */
    private Reset():void{
        this.DefenderRandomPos();
        Effect.CurvesEffect.Show();
        this.ui.goalkeeper.scaleX = 1;
        this.ui.goalkeeper.play(0,true,"guard_wait");
        this.ui.football.gotoAndStop(0);
        this.ui.player.gotoAndStop(0);
        this.ui.football.pos(Laya.stage.width / 2, 930);
        this.footballEndPos = {};
        this.counts = 0;
        this.isDefense = false;
        this.isGoal = false;
        this.DisabledAniView(false);
        this.ResetProp();
        this.GameAniResult();
    }
    
    /**
     * 足球开始曲线运动，自己做条件判断停止frameLoop
     */        
    protected StartCurvesMove(arg:number, sprite:Laya.Sprite, initPos:any, centPos:any, endPos:any, hander:Laya.Handler) {
        var t = arg * this.counts;
        var point = Utils.Bezier.GetBezier(t, initPos.X, initPos.Y, centPos.X, centPos.Y, endPos.X, endPos.Y);
        sprite.x = point.x
        sprite.y = point.y;
        this.counts += 10;
        if(!this.isGoal && this.isDefense && sprite.y <= this.ui.defender.y){
            Laya.timer.clear(this,this.StartCurvesMove);
            hander.run();
        }else if(sprite.x == endPos.X && sprite.y == endPos.Y){
            Laya.timer.clear(this,this.StartCurvesMove);
            hander.run();    
        }
    }

    /**
     * 足球结束曲线运动
     */
    protected EndCurvesMove():void{
        let easeAni = this.isGoal ? Laya.Ease.bounceOut : Laya.Ease.quadOut;
        Laya.Tween.to(this.ui.football, {x:this.footballEndPos.X, y:this.footballEndPos.Y}, 1000, easeAni, Laya.Handler.create(this, ()=>{
            this.Reset();
        }, null, false));
    }
    /**
     * 获取足球结束点坐标
     * 
     */
    protected GetFootballEndPos():void{
        if(this.isGoal){
            let type:string = Enum.GuardAniTypeEnum[Math.floor(2 + Math.random() * 4)];
            this.guardAniType = Enum.GuardAniTypeEnum[type];
            this.footballEndPos = { X:this.endPos.X, Y:this.ui.goal.y + this.ui.goal.height };
        }
        else if(!this.isGoal && this.isDefense){
            this.guardAniType = Enum.GuardAniTypeEnum.Default;
            if(this.endPos.X <= Laya.stage.width / 2){
                this.footballEndPos = { X:-Laya.stage.width / 2, Y:this.ui.goal.y + this.ui.goal.height + Math.random() * 350 };
            }else{
                this.footballEndPos = { X:Laya.stage.width * 3 / 2, Y:this.ui.goal.y + this.ui.goal.height + Math.random() * 350 };
            } 
        }
        else{
            if(this.endPos.X < this.ui.goal.x + (this.ui.goal.width - this.ui.goalkeeper.width) / 2 && this.endPos.Y <= this.ui.goal.y + this.ui.goal.height / 2){
                this.guardAniType = Enum.GuardAniTypeEnum.GuardLt;
                this.footballEndPos = { X:-Laya.stage.width / 2, Y:this.ui.goal.y + Math.random() * this.ui.goal.height / 2 };
            }
            else if(this.endPos.X < this.ui.goal.x + (this.ui.goal.width - this.ui.goalkeeper.width) / 2 && this.endPos.Y  > this.ui.goal.y + this.ui.goal.height / 2){
                this.guardAniType = Enum.GuardAniTypeEnum.GuardLb;
                this.footballEndPos = { X:-Laya.stage.width / 2, Y:this.ui.goal.y + (1 + Math.random()) * this.ui.goal.height / 2 };
            }
            else if(this.endPos.X > this.ui.goal.x + (this.ui.goal.width + this.ui.goalkeeper.width) / 2 && this.endPos.Y  <= this.ui.goal.y + this.ui.goal.height / 2){
                this.guardAniType = Enum.GuardAniTypeEnum.GuardRt;
                this.footballEndPos = { X:Laya.stage.width * 3 / 2, Y:this.ui.goal.y + Math.random() * this.ui.goal.height / 2 };
            }
            else if(this.endPos.X > this.ui.goal.x + (this.ui.goal.width + this.ui.goalkeeper.width) / 2 && this.endPos.Y  > this.ui.goal.y + this.ui.goal.height / 2){
                this.guardAniType = Enum.GuardAniTypeEnum.GuardRb;
                this.footballEndPos = { X:Laya.stage.width * 3 / 2, Y:this.ui.goal.y + (1 + Math.random()) * this.ui.goal.height / 2 };
            }
            else{
                this.guardAniType = Enum.GuardAniTypeEnum.GuardTop;
                this.footballEndPos = { X:Laya.stage.width / 2 + (Math.random() - 1/2) * this.ui.goalkeeper.width, Y:-Laya.stage.width / 2 };
            }
        }
    }

    /**
     * 设置守门员动画
     * @param guardAniType 
     */
    protected SetGuardAnimation(guardAniType:any):void{
        switch (guardAniType) {
            case Enum.GuardAniTypeEnum.Default:
                break;
            case Enum.GuardAniTypeEnum.GuardLt:
                this.ui.goalkeeper.scaleX = -1;
                this.ui.goalkeeper.play(0,false,"guard_rt");
                break;
            case Enum.GuardAniTypeEnum.GuardLb:
                this.ui.goalkeeper.scaleX = -1;
                this.ui.goalkeeper.play(0,false,"guard_rb");
                break;
            case Enum.GuardAniTypeEnum.GuardRt:
                this.ui.goalkeeper.play(0,false,"guard_rt");
                break;
            case Enum.GuardAniTypeEnum.GuardRb:
                this.ui.goalkeeper.play(0,false,"guard_rb");
                break;
            case Enum.GuardAniTypeEnum.GuardTop:
                this.ui.goalkeeper.play(0,false,"guard_top");
                break;  
            default:
                break;
        }
    }
    /**
     * 游戏动画结束
     */
    private GameAniResult():void{
        this.EventNotification(Enum.ListenViewEnum.GameResult);
    };
    /**
     * 事件广播
     * @param type 类型
     * @param value 值
     */
    abstract EventNotification(type:any, value?:any): void;
}
