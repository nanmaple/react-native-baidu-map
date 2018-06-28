class CeShi{
    private setM:number = 0;
    private getM:number = 0;
    private A:number = 0;
    private B:number = 0;
    private C:number = 0;
    private D:number = 0;
    private E:number = 0;
    private num:number = 10000000;
    constructor(){
        this.NoProp();
        this.OneProp();
        this.TwoProp();
        this.ThreeProp();
    }
    /**
     * 输出
     */
    private Result():void{
        let object:any = {
            A:{
                num: this.A,
                probability: this.A / this.num
            },
            B:{
                num: this.B,
                probability: this.B / this.num
            },
            C:{
                num: this.C,
                probability: this.C / this.num
            },
            D:{
                num: this.D,
                probability: this.D / this.num
            },
            E:{
                num: this.E,
                probability: this.E / this.num
            },
        }
        console.log(object);
        console.log("投注:" + this.setM, "获得:" + this.getM, "返奖率:" + (this.getM / this.setM));
    }

    private init(){
        this.A=0;
        this.B=0;
        this.C=0;
        this.D=0;
        this.E=0;
        this.setM=0;
        this.getM=0;
    }
    /**
     * 无道具
     */
    private NoProp():void{
        this.init();
        for(let i = 0;i < this.num;i++){
            let random = Math.ceil( Math.random() * 103);
            if(random > 0 && random <= 50){
                this.setM += 100;
                this.getM += 0;
                this.A ++;
            }
            else if(random > 50 && random <= 90){
                this.setM += 100;
                this.getM += 150;
                this.B ++;
            }
            else if(random > 90 && random <= 100){
                this.setM += 100;
                this.getM += 200;
                this.C ++;
            }
            else if(random > 100 && random <= 102){
                this.setM += 100;
                this.getM += 500;
                this.D ++;
            }
            else if(random > 102 && random <= 103){
                this.setM += 100;
                this.getM += 1000;
                this.E ++;
            }    
        }
        this.Result();
    }
    /**
     * 一个道具
     */
    private OneProp():void{
        this.init();
        for(let i = 0;i < this.num;i++){
            let random = Math.ceil( Math.random() * 103);
            if(random > 0 && random <= 45){
                this.setM += 120;
                this.getM += 0;
                this.A ++;
            }
            else if(random > 45 && random <= 87){
                this.setM += 120;
                this.getM += 150;
                this.B ++;
            }
            else if(random > 87 && random <= 98){
                this.setM += 120;
                this.getM += 200;
                this.C ++;
            }
            else if(random > 98 && random <= 101){
                this.setM += 120;
                this.getM += 500;
                this.D ++;
            }
            else if(random > 101 && random <= 103){
                this.setM += 120;
                this.getM += 1000;
                this.E ++;
            }    
        }
        this.Result();
    }
    /**
     * 两个道具
     */
    private TwoProp():void{
        this.init();
        for(let i = 0;i < this.num;i++){
            let random = Math.ceil( Math.random() * 106);
            if(random > 0 && random <= 45){
                this.setM += 140;
                this.getM += 0;
                this.A ++;
            }
            else if(random > 45 && random <= 85){
                this.setM += 140;
                this.getM += 150;
                this.B ++;
            }
            else if(random > 85 && random <= 97){
                this.setM += 140;
                this.getM += 200;
                this.C ++;
            }
            else if(random > 97 && random <= 103){
                this.setM += 140;
                this.getM += 500;
                this.D ++;
            }
            else if(random > 103 && random <= 106){
                this.setM += 140;
                this.getM += 1000;
                this.E ++;
            }    
        }
        this.Result();
    }
    /**
     * 三个道具
     */
    private ThreeProp():void{
        this.init();
        for(let i = 0;i < this.num;i++){
            let random = Math.ceil( Math.random() * 103);
            if(random > 0 && random <= 40){
                this.setM += 160;
                this.getM += 0;
                this.A ++;
            }
            else if(random > 40 && random <= 80){
                this.setM += 160;
                this.getM += 150;
                this.B ++;
            }
            else if(random > 80 && random <= 90){
                this.setM += 160;
                this.getM += 200;
                this.C ++;
            }
            else if(random > 90 && random <= 100){
                this.setM += 160;
                this.getM += 500;
                this.D ++;
            }
            else if(random > 100 && random <= 103){
                this.setM += 160;
                this.getM += 1000;
                this.E ++;
            }    
        }
        this.Result();
    }
}