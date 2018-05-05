namespace ScenePanel {
    export abstract class FootBallPanelBaseUI {
        protected ui: ui.FootballUI | ui.Football_VerUI;
        protected isActive:boolean;    //射球初始化状态
        protected shootEndY:number;   //射球结束Y坐标
        protected shootEndX:number;   //射球结束X坐标
        protected footballR:number;  //足球半径
        protected goalW:number;  //球门宽度
        protected goalH:number;  //球门高度
        protected goalCenterX:number;  //球门水平居中偏移位置
        protected goalBottom:number;   //球门距离底部的距离
        protected shootSound:string;   //射球的声音
        protected shootResSound:string;   //射球结束后的声音
        protected isHor:boolean;   //是否是横屏
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.FootballUI();
            } else {
                this.ui = new ui.Football_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 3;
            this.footballR = this.ui.football.pivotX;   
            this.shootSound = "sound/kickball.mp3";
            this.isHor = isHor;
            this.ShootReset();
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.FootballUI | ui.Football_VerUI {
            return this.ui;
        }
        /**
         * 重置
         */
        private ShootReset():void{
            this.ui.football.visible = false;
            this.ui.shootInfo.visible = false;
            if(this.isHor){
                this.ui.football.pos(Laya.stage.width / 2,1000);
            }else{
                this.ui.football.pos(Laya.stage.width / 2,Laya.stage.height + this.footballR);
            }
            this.ui.shootInfo.text = null;
            this.isActive = false;
            this.shootResSound = "";
        }
        /**
         * 射进
         */
        public ShootIn(): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if(this.isActive){
                return;
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.ui.football.visible = true;
                this.ui.football.play(0,false,"shootOutPost");
                this.shootEndY = Laya.stage.height - this.goalBottom - 5;
                this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
                this.ui.shootInfo.text = language.GetLanguage("ShootIn");
                this.shootResSound = "sound/shootsuccess.mp3";
                Laya.Tween.to(this.ui.football,{y:this.shootEndY,x:this.shootEndX},3000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 左边射偏
         */
        public ShootLeft(): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if(this.isActive){
                return;
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.ui.football.visible = true;
                this.ui.football.play(0,false,"shootOutPost");
                this.shootEndY = Laya.stage.height - this.goalBottom - 5;
                this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX - this.footballR / 2;
                this.ui.shootInfo.text = language.GetLanguage("ShootLeft");
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.ui.football,{y:this.shootEndY,x:this.shootEndX},3000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 右边射偏
         */
        public ShootRight():void{
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if(this.isActive){
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.isActive = true;
                this.ui.football.visible = true;       
                this.ui.football.play(0,false,"shootOutPost");
                this.shootEndY = Laya.stage.height - this.goalBottom - 5;
                this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR * 3 / 2;
                this.ui.shootInfo.text = language.GetLanguage("ShootRight");
                this.shootResSound = "sound/shootfail.wav";
                Laya.Tween.to(this.ui.football,{y:this.shootEndY,x:this.shootEndX},3000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootInfoShow));
            }
        }
        /**
         * 射到门柱
         * @param position 射到门柱位置
         */
        public ShootGoalPost(position:number):void{
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if(this.isActive){
                return;
            }
            else{
                Utils.BackgroundMusic.PlaySounds(this.shootSound);
                this.ui.football.play(0,false,"shootOnPost");
                this.isActive = true;
                this.ui.football.visible = true;
                this.shootEndY = Laya.stage.height - this.goalBottom - this.goalH / 3;
                if(position == 0){
                    this.ui.shootInfo.text = language.GetLanguage("ShootLeftGoalPost");
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX +this.footballR / 2;
                }
                if(position == 1){
                    this.ui.shootInfo.text = language.GetLanguage("ShootRightGoalPost");
                    this.shootEndX = (Laya.stage.width + this.goalW) / 2 + this.goalCenterX + this.footballR / 2;
                }
                if(position == 2){
                    this.ui.shootInfo.text = language.GetLanguage("ShootGoalPost");
                    this.shootEndX = (Laya.stage.width - this.goalW) / 2 + this.goalCenterX +this.footballR / 2;
                }
                this.shootResSound = "sound/hitdoor.mp3";
                Laya.Tween.to(this.ui.football,{y:this.shootEndY,x:this.shootEndX},1500,Laya.Ease.backOut,Laya.Handler.create(this,this.OnPostBounce));
            }
        }
        /**
         * 射到门柱反弹
         */
        private OnPostBounce():void{
            this.shootEndY = Laya.stage.height - this.goalBottom + this.goalH / 4;
            this.shootEndX = Laya.stage.width / 2 + this.goalCenterX;
            Laya.Tween.to(this.ui.football,{y:this.shootEndY,x:this.shootEndX},1500,Laya.Ease.quadOut,Laya.Handler.create(this,this.ShootInfoShow));
        }
        /**
         *显示射球后进球状态
         */
        private ShootInfoShow():void{
            Utils.BackgroundMusic.PlaySounds(this.shootResSound);
            this.ui.shootInfo.visible = true;
            this.ui.football.stop();
            Laya.Tween.to(this.ui.shootInfo,{},2000,Laya.Ease.backOut,Laya.Handler.create(this,this.ShootReset));
        }
        /**
         * 清除足球所有缓动
         */
        public ClearTween():void{
            Laya.Tween.clearAll(this.ui.football);
        }
    }
}