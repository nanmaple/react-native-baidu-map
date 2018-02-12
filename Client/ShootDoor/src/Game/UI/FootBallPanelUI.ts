namespace ScenePanel {
    export class FootBallPanel extends ui.FootballUI {
        private isActive:boolean;    //射球初始化状态
        private shootEndY:number;   //射球结束Y坐标
        private shootEndX:number;   //射球结束X坐标
        private footballR:number;  //足球半径
        private goalW:number;  //球门宽度
        private goalH:number;  //球门高度
        private goalCenterX:number;  //球门水平居中偏移位置
        private goalBottom:number;   //球门距离底部的距离
        private shootSound:string;   //射球的声音
        private shootResSound:string;   //射球结束后的声音
        constructor(cardPanel:ScenePanel.CardPanel){
            super();
            this.footballR = this.football.pivotX;   
            this.goalW = cardPanel.goal.width;   
            this.goalH = cardPanel.goal.height;   
            this.goalCenterX = cardPanel.goal.centerX;  
            this.goalBottom = cardPanel.goal.bottom; 
            this.shootSound = "sound/kickball.mp3";
            this.shootInfo.pos(Laya.stage.width / 2,Laya.stage.height / 2);
            this.ShootReset();
            if (GameConfig.RatioType) {
                this.football.scale(GameConfig.HeightWidth, 1);
            } else {
                this.football.scale(1, GameConfig.WidthHeight);
            }
        }
        /**
         * 重置
         */
        private ShootReset():void{
            this.football.visible = false;
            this.shootInfo.visible = false;
            this.football.pos(Laya.stage.width / 2,1000);
            this.shootInfo.text = null;
            this.isActive = false;
            this.shootResSound = "";
            this.football.play(0,false,"shootOutPost");
        }
        /**
         * 射进
         */
        public ShootIn(): void {
            if(this.isActive){
                return;
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom;
                this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
                this.shootInfo.text = "球进啦！";
                this.shootResSound = "sound/shootsuccess.mp3";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},3000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 左边射偏
         */
        public ShootLeft(): void {
            if(this.isActive){
                return;
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX - this.footballR / 2;
                this.shootInfo.text = "左边射偏啦！";
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},3000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 右边射偏
         */
        public ShootRight():void{
            if(this.isActive){
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.football.visible = true;       
                this.shootEndY = Laya.stage.height - this.goalBottom;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.goalW + this.footballR * 3 / 2;
                this.shootInfo.text = "右边射偏啦！";
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},3000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 射到门柱
         * @param position 射到门柱位置
         */
        public ShootGoalPost(position:number):void{
            if(this.isActive){
                return;
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.football.play(0,false,"shootOnPost");
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                if(position == 0){
                    this.shootInfo.text = "左边撞柱啦！";
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX +this.footballR / 2;
                }
                if(position == 1){
                    this.shootInfo.text = "右边撞柱啦！";
                    this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                if(position == 2){
                    this.shootInfo.text = "撞柱啦！";
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX +this.footballR / 2;
                }
                this.shootResSound = "sound/hotdoor.mp3";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},1500,Laya.Ease.backOut,Laya.Handler.create(this,this.OnPostBounce));
            }
        }
        /**
         * 射到门柱反弹
         */
        private OnPostBounce():void{
            this.shootEndY = Laya.stage.height * 3 / 4;
            this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
            Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},1500,Laya.Ease.quadOut,Laya.Handler.create(this,this.ShootInfoShow));
        }
        /**
         *显示射球后进球状态
         */
        private ShootInfoShow():void{
            Utils.BackgroundMusic.PlaySounds(this.shootResSound);
            this.shootInfo.visible = true;
            this.football.stop();
            Laya.Tween.to(this.shootInfo,{},2000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootReset));
        }
    }
}