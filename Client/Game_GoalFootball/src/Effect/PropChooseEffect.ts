namespace Effect{
    /**
     * 道具特效
     */
    export class PropChooseEffect{
        /**
         * 默认动画
         */
        static autoAniArr:any = ["bomb_wait","beer_wait","bikini_wait"];
        /**
         * 播放动画
         */
        static playAniArr:any = ["blast","dizzy","confuse"];
        /**
         * 道具使用音效
         */
        static propSoundArr:Array<string> = ["sound/explode.mp3","sound/pound.mp3","sound/seduce.mp3"];
        /**
         * 选择道具
         * @param index 
         * @param endPos 
         * @param hander 
         */
        static ChooseProp(index:number, endPos:any, hander:Laya.Handler):void{
            let prop:Laya.Animation = new Laya.Animation();
            prop.zOrder = 2;
            prop.loadAnimation("PropAni.ani");
            Laya.stage.addChild(prop);
            prop.autoAnimation = this.autoAniArr[index];
            Utils.BackgroundMusic.PlaySounds(this.propSoundArr[index]);
            Laya.Tween.to(prop, {x:endPos.x, y:endPos.y, rotation: 360}, 1000, Laya.Ease.quadInOut, Laya.Handler.create(this,()=>{
                prop.play(0, false, this.playAniArr[index]);
                prop.on(Laya.Event.COMPLETE,this,()=>{
                    Laya.stage.removeChild(prop);
                    hander.runWith(index);
                })
            },null,false))
        }
    }
}