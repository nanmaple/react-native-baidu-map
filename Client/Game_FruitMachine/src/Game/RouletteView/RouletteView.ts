namespace Enum{
    export enum RouletteView{
        /**设置结果 */
        SetResult = 10000,
        /**开始滚动 */
        StartRoll,
        /**初始化 */
        Init,
    }
}
/**轮盘类面板*/
class RouletteView extends BaseRouletteView implements IView{  
    constructor(eventKey:string){
        super(eventKey);
    }

    /** 刷新UI*/
    public Refresh():void{
    }

    /**
     * 设置结果
     */
    public Set(data:any,type?:Enum.RouletteView):void{
        switch(type){
        case Enum.RouletteView.SetResult:
            this.SetResult(data);
            break;
        case Enum.RouletteView.StartRoll:
            this.StartRoll();
            break;
        case Enum.RouletteView.Init:
            this.Init();
            break;
       }
    }

    /** 游戏初始化*/
    private Init():void{
        Laya.timer.clear(this,this.LoopCallBack);
        this.start = 1;
        this.index = 0;
        this.end = null;
        this.firstRoll = true;
        this.rollStatus = Enum.RollStatus.SpeedUp;
        this.currentSpeed = defaultSpeed;
        this.currentFrame = 0;

        let length = this.box.numChildren;
        for(let i= 0;i<length;i++){
            (this.box.getChildAt(i).getChildByName('halo') as Laya.Animation).visible = false;
        }
        (this.box.getChildAt(0).getChildByName('halo') as Laya.Animation).visible = true;
        (this.box.getChildAt(0).getChildByName('halo') as Laya.Animation).alpha = 1;
        Laya.SoundManager.stopAllSound();
    }

    /**
     * 设置游戏结果
     * @param result 结果类型
     */
    private SetResult(result:Enum.ResultPosEnum):void{
        let res = gameResult[result];
        if(!res) return;
        if(typeof res == 'number'){
            this.end = res;
        }else{
            let index = Math.floor(Math.random()*res.length);
            this.end = res[index];
        }
        this.DeceleratePoint();
    }

    /**
     * 开始滚动
     */
    private StartRoll():void{
        this.num = 0;
        Laya.timer.frameLoop(1,this,this.LoopCallBack)
    }

    /** 
     * 定时器回调函数
    */
    private LoopCallBack():void{
        this.currentFrame++;
        //每次到达间隔帧动画移动
        if(this.currentFrame%this.currentSpeed == 0){
            this.AuraMove();

            if(this.end != null && this.num >= this.accelerateEnd + this.slowDistance){
                this.RollEnd();
            }
            this.currentFrame = 0;
        }
    }

    /**
     * 滚动结束
     */
    private RollEnd():void{
        Laya.timer.clear(this,this.LoopCallBack);
        this.start = this.end;
        this.end = null;
        this.firstRoll = true;
        this.rollStatus = Enum.RollStatus.SpeedUp;
        this.currentSpeed = defaultSpeed;
        //发送事件
        let data: Dto.EventNotificationDto = new Dto.EventNotificationDto();
        data.Value = '';
        data.Type = Enum.ListenViewEnum.GameEnd;
        let event = new CustomEvent(this.ListenEventKey, { detail: data });
        document.dispatchEvent(event);
    }

    /** 
     * 光环移动
     */
    private AuraMove():void{
        if(this.firstRoll){
            Laya.SoundManager.playSound(SoundConfig.SounRes.RollEaseIn);
            this.firstRoll = false;
        }
        //加速
        this.SpeedUp();

        //显示和隐藏位置修改
        let hide = this.rollStatus != Enum.RollStatus.SpeedDwon ? this.index-(this.halos-1) : this.index;
        hide = this.Convert(hide);

        /**减速 */
        this.SpeedDown();

        //显示、隐藏、透明度操作
        this.ChangAlpha(hide);

        //记录数据修改 
        this.index++;
        this.num++;
    }

    /**
     * 透明度修改操作
     * @param hide 隐藏位置
     */
    private ChangAlpha(hide:number):void{
        if(this.index == (this.iconNum-1)) this.index = -1;
        (this.box.getChildAt(this.index+1).getChildByName('halo') as Laya.Animation).visible = true;
        (this.box.getChildAt(this.index+1).getChildByName('halo') as Laya.Animation).alpha = 1;
        for(let i = 1;i<this.halos;i++){
             (this.box.getChildAt(this.Convert(this.index-i)).getChildByName('halo') as Laya.Animation).alpha = 1-0.2*i;
        }
        (this.box.getChildAt(hide).getChildByName('halo') as Laya.Animation).visible = false;
    }

    /**加速运动 */
    private SpeedUp():void{
        if(this.rollStatus == Enum.RollStatus.SpeedUp){
            this.currentSpeed -= 2;
            if(this.currentSpeed < 1){
                this.currentSpeed = 1;
                this.rollStatus = Enum.RollStatus.SpeeUniform;
                Laya.SoundManager.stopSound(SoundConfig.SounRes.RollEaseIn);
                Laya.SoundManager.playSound(SoundConfig.SounRes.RollLinear,0);
            }
        }
    }

    /**
     * 减速运动
     */
    private SpeedDown():void{
        //未返回结果禁止减速
        if(this.end == null) return;
        //减速
        if(this.rollStatus == Enum.RollStatus.SpeedDwon){
            let speed = Math.floor(20/this.slowDistance);
            this.currentSpeed += speed;
            return;
        }

        //开始减速运动
        if(this.rollStatus == Enum.RollStatus.SpeeUniform && this.num >= this.accelerateEnd){
            this.rollStatus = Enum.RollStatus.SpeedDwon;
            Laya.SoundManager.stopSound(SoundConfig.SounRes.RollLinear);
            Laya.SoundManager.playSound(SoundConfig.SounRes.RollEaseOut);
            for(let i = 0;i<this.halos;i++){
             (this.box.getChildAt(this.Convert(this.index-i)).getChildByName('halo') as Laya.Animation).visible = false;
            }
        }
    }


    /**
     * 减速点位置
    */
    private DeceleratePoint():void{
        let distance = (this.start-this.end);
        let dic;
        if(distance > 0 ){
            distance = distance > this.iconNum/2 ? distance-this.iconNum : distance;
            //额外移动距离
            if(distance<0 && Math.abs(distance)>this.slowDistance){
                dic = Math.abs(distance) - this.slowDistance;
            }else{
                dic =this.iconNum-(this.slowDistance+distance);
            }
        }else{
            distance = Math.abs(distance);
            dic = (distance-this.slowDistance); 
            dic = dic > 0 ? dic : this.iconNum+dic;
        } 

        if(this.num/this.iconNum < 4){
            this.accelerateEnd = this.iconNum*4+dic;
        }else{
            this.accelerateEnd = this.iconNum*Math.ceil(this.num/this.iconNum)+dic;
        }
    }

    /**
     * 轮盘位置转换 解决到最后一个跳转第一个
     * @param value 
     */
    private Convert(value:number):number{
        if(value < 0){
            value = this.iconNum + value;
            return value;
        }else if(value > this.iconNum){
            value = value - this.iconNum;
            return value;
        }else{
            return value;
        }
    }

    
}