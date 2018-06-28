namespace Utils{
    export class Version{
        /**
         * 横竖版切换
         * @param hander 回调（0：竖版 1：横版）
         */
        static HverticalSwitch(hander:Laya.Handler):void{
            let evt = "onorientationchange" in window ? "orientationchange" : "resize";
            //事件监听
            Laya.Browser.window.addEventListener(evt,()=>{
                //判断android或者ios
                if(window.orientation == 0 || window.orientation == 180) {
                    Laya.Browser.onAndriod ? hander.runWith(0) : hander.runWith(1);
                }
                else if(window.orientation == 90 || window.orientation == -90) {
                    Laya.Browser.onAndriod ? hander.runWith(1) : hander.runWith(0);
                }
            },false);
        }
    }
}