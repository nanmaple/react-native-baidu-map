namespace ScenePanel{
    export class RulePanel extends ui.RulePanelUI{
        constructor(){
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap"; 
            this.visible = false;
             if (GameConfig.RatioType) {
                this.prompt.scale(GameConfig.HeightWidth, 1);
            } else {
                this.prompt.scale(1, GameConfig.WidthHeight);
            }
            this.close.on(Laya.Event.CLICK,this,this.CloseRule);
        }
        /**
         * 显示游戏规则
         */
        public ShowRule():void{
            this.visible = true;
        }
        /**
         * 关闭游戏规则
         */
        private CloseRule():void{
            this.visible = false;
            this.ClearTextureRes();
        }
        /**
         * 销毁投注面板资源，释放内存
         */
        private ClearTextureRes():void{
            Laya.loader.clearTextureRes("ui/mask.png");
            Laya.loader.clearTextureRes("ui/bg_record.png");
            Laya.loader.clearTextureRes("ui/recordLine.png");
        }
    }
}