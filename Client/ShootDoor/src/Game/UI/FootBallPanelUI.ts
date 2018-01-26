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
        constructor(cardPanel:ScenePanel.CardPanel){
            super();
            this.footballR = 20;  
            this.goalW = cardPanel.goal.width;   //735
            this.goalH = cardPanel.goal.height;   //325
            this.goalCenterX = cardPanel.goal.centerX;  //20
            this.goalBottom = cardPanel.goal.bottom;  //249
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
            this.football.pos(Laya.stage.width / 2,800);
            this.shootInfo.text = null;
            this.isActive = false;
            this.football.play(0,false);
        }
        /**
         * 射进
         */
        public ShootIn(): void {
            if(this.isActive){
                return;
            }
            else{
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - this.footballR;
                this.shootEndX = Laya.stage.width / 2;
                this.shootInfo.text = "球进了！";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},2000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
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
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - this.footballR;
                this.shootEndX = ((Laya.stage.width - this.goalW) / 2 + this.goalCenterX) * 2 / 3;
                this.shootInfo.text = "左边射偏了！";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},2000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 右边射偏
         */
        public ShootRight():void{
            if(this.isActive){
                return;
            }
            else{
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - this.footballR;
                this.shootEndX = (Laya.stage.width * 2 + this.goalCenterX * 2 + this.goalW) / 3;
                this.shootInfo.text = "右边射偏了！";
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},2000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 射到门柱
         */
        public ShootGoalPost():void{
            if(this.isActive){
                return;
            }
            else{
                this.isActive = true;
                this.football.visible = true;
                this.shootEndY = Laya.stage.height / 2;
                this.shootEndX = Math.random() < 0.5? ((Laya.stage.width - this.goalW) / 2 + this.goalCenterX):((Laya.stage.width - this.goalW) / 2 + this.goalCenterX + this.goalW);
                Laya.Tween.to(this.football,{y:this.shootEndY,x:this.shootEndX},1500,Laya.Ease.backOut,Laya.Handler.create(this,this.OnPostBounce));
            }
        }
        /**
         * 射到门柱反弹
         */
        private OnPostBounce():void{
            this.shootInfo.text = "撞柱了！";
            Laya.Tween.to(this.football,{y:Laya.stage.height * 3/4,x:Laya.stage.width / 2},1500,Laya.Ease.quadOut,Laya.Handler.create(this,this.ShootInfoShow));
        }
        /**
         *显示射球后进球状态
         */
        private ShootInfoShow():void{
            this.shootInfo.visible = true;
            this.football.stop();
            Laya.Tween.to(this.shootInfo,{},2000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootReset));
        }
    }
}