/*
* name;
*/
class RouletteView extends BaseRouletteView implements IView{

    
    constructor(eventKey:string){
        super(eventKey);

    }

    /** 
     * 刷新UI
    */
    public Refresh():void{

    }

    /**
     * 设置结果
     */
    public Set(data:any):void{
       this.StartRoll(data);
    }

    /**
     * 开始滚动
     * @param result 结果类型
     */
    private StartRoll(result:Enum.ResultPosEnum):void{
        this.num = 0;
        let res = gameResult[result];
        if(!res) return;
        if(typeof res ==  'number'){
            this.end = res;
        }else{
            let index = Math.floor(Math.random()*res.length);
            this.end = res[index];
        }
        this.slowDistance = Math.floor(Math.random()*(slow.max+1-slow.min))+slow.min;
        this.DeceleratePoint();
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

            if(this.num >= this.accelerateEnd + this.slowDistance){
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
        this.accelerateStart = true;
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
        //加速
        if(this.accelerateStart && this.currentSpeed > 1){
            this.currentSpeed -= 2;
        }

        //显示和隐藏位置修改
        let hide = this.accelerateStart ? this.index-2 : this.index;
        hide = this.Convert(hide);

        this.Deceleration();

        //显示、隐藏、透明度操作
        if(this.index == (this.iconNum-1)) this.index = -1;
        let index = (this.box.getChildAt(hide).getChildByName('animated') as Laya.Animation).index;
        (this.box.getChildAt(this.index+1).getChildByName('animated') as Laya.Animation).visible = true;
        (this.box.getChildAt(this.index+1).getChildByName('animated') as Laya.Animation).play(index);
        (this.box.getChildAt(hide).getChildByName('animated') as Laya.Animation).gotoAndStop(0);
        (this.box.getChildAt(hide).getChildByName('animated') as Laya.Animation).visible = false;

        //记录数据修改
        this.index++;
        this.num++;

    }

    /**
     * 减速运动
     */
    private Deceleration():void{
        //减速
        if(!this.accelerateStart){
            let speed = Math.floor(30/this.slowDistance);
            this.currentSpeed += speed;
            return;
        }

        //开始减速运动
        if(this.accelerateStart && this.num >= this.accelerateEnd){
            this.accelerateStart = false;
            (this.box.getChildAt(this.index).getChildByName('animated') as Laya.Animation).gotoAndStop(0);
            (this.box.getChildAt(this.Convert(this.index-1)).getChildByName('animated') as Laya.Animation).gotoAndStop(0);
            (this.box.getChildAt(this.index).getChildByName('animated') as Laya.Animation).visible = false;
            (this.box.getChildAt(this.Convert(this.index-1)).getChildByName('animated') as Laya.Animation).visible = false;
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
            this.accelerateEnd = this.iconNum*3+dic;
        }else{
            distance = Math.abs(distance);
            dic = (distance-this.slowDistance); 
            dic = dic > 0 ? dic : this.iconNum+dic;
            this.accelerateEnd = this.iconNum*3+dic;
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