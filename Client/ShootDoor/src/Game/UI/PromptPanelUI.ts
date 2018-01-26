namespace ScenePanel {
    export class PromptPanel extends ui.PromptUI {
        private rechargeBack:Laya.Handler; //点击充值回调
        constructor(){
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap";  
            this.centerX = 0;    //水平方向居中
            this.centerY = 0;    //垂直方向居中
            this.visible = false;
            //确认、取消按钮绑定点击事件
            this.sureBox.getChildByName("sureBtn").on(Laya.Event.CLICK,this,this.OnClickConfirm);
            this.rechargeBox.getChildByName("sureBtn").on(Laya.Event.CLICK,this,this.OnClickConfirm);
            this.rechargeBox.getChildByName("rechargeBtn").on(Laya.Event.CLICK,this,this.OnClickRecharge);
            if (GameConfig.RatioType) {
                this.prompt.scale(GameConfig.HeightWidth, 1);
            } else {
                this.prompt.scale(1, GameConfig.WidthHeight);
            }
        }
        /**
         * 弹出提示框
         * @param txt 显示内容
         * @param rechargeBtn “充值”按钮显隐，默认隐藏
         * @param rechargeBack 点击充值回调
         */
        public ShowMsg(txt:string,rechargeBtn:boolean = false,rechargeBack?:Laya.Handler):void{
            this.rechargeBack = rechargeBack; 
            this.visible = true;
            this.sureBox.visible = false;
            this.rechargeBox.visible = false;
            if(rechargeBtn){
                this.rechargeBox.visible = true;
            }
            else{
                this.sureBox.visible = true;
            } 
            this.promptTxt.text = txt;

        }
        /**
         * 点击确认
         */
        public OnClickConfirm():void{
            this.visible = false;
        }
        /**
         * 点击充值
         */
        public OnClickRecharge():void{
            if(this.rechargeBack){
                this.rechargeBack.run();
            }  
            this.visible = false;
        }
    }
}