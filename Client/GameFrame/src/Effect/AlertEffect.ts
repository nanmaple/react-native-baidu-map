namespace Effect{
    /**
     * 弹出框特效
     */
    export class AlertEffect{
        /**
         * 显示
         * @param sprite 
         * @param hander 
         */
        static Show(sprite:any, hander?:Laya.Handler):void{
            Laya.Tween.to(sprite, { scaleX: 1, scaleY: 1 }, 300, Laya.Ease.backOut, hander);
        }
        /**
         * 隐藏
         * @param sprite 
         * @param hander 
         */
        static Hide(sprite:any, hander?:Laya.Handler):void{
            Laya.Tween.to(sprite, { scaleX: 0, scaleY: 0 }, 300, Laya.Ease.backIn, hander);
        }
    }
}