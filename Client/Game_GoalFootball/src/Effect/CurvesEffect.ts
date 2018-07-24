namespace Effect{
    /**
     * 曲线特效
     */
    export class CurvesEffect{
        static line:Laya.Sprite;
        /**
         * 创建曲线
         * @param initPos 初始坐标 
         * @param centPos 中点坐标
         * @param endPos 结束坐标
         */
        static CreateLine(initPos:any, centPos:any, endPos:any):void{
            if(this.line){
                this.line.removeSelf();
            }
            this.line = new Laya.Sprite();
            this.line.zOrder = 2;
            this.line.graphics.drawCurves(0, 0, [
            initPos.X - 50,initPos.Y,
            centPos.X - 20,centPos.Y,
            endPos.X - 10,endPos.Y + 30,
            endPos.X - 30,endPos.Y + 30,
            endPos.X - 30,endPos.Y + 30,
            endPos.X,endPos.Y,
            endPos.X,endPos.Y,
            endPos.X + 30,endPos.Y + 30,
            endPos.X + 30,endPos.Y + 30,
            endPos.X + 10,endPos.Y + 30,
            endPos.X + 10,endPos.Y + 30,
            centPos.X + 20,centPos.Y,
            initPos.X + 50,initPos.Y,
            initPos.X,initPos.Y - 25,
            initPos.X - 50,initPos.Y,
            ],"#faff89",5);
            Laya.stage.addChild(this.line);
        }
        /**
         * 显示曲线
         */
        static Show():void{
            if(this.line){
                this.line.visible = true;
            }
        }
        /**
         * 隐藏曲线
         */
        static Hide():void{
            if(this.line){
                this.line.visible = false;
            }
        }
    }
}