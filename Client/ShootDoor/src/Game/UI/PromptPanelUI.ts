namespace ScenePanel {
    export class PromptPanel extends ui.PromptUI {
        constructor(){
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap";  
            this.centerX = 0;    //水平方向居中
            this.centerY = 0;    //垂直方向居中
            this.visible = false;
            //确认、取消按钮绑定点击事件
            this.sureBox.getChildByName("sureBtn").on(Laya.Event.CLICK,this,this.OnClickConfirm);
            if (GameConfig.RatioType) {
                this.prompt.scale(GameConfig.HeightWidth, 1);
            } else {
                this.prompt.scale(1, GameConfig.WidthHeight);
            }
        }
        /**
         * 弹出提示框
         * @param txt 显示内容
         */
        public ShowMsg(txt:string):void{
            this.visible = true;
            this.promptTxt.text = txt;
        }
        /**
         * 点击确认
         */
        public OnClickConfirm():void{
            this.visible = false;
        }
    }
}