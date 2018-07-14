/**@todo:测试模块 */
namespace SoundConfig{
    export const SounRes = {
        /**游戏背景音乐*/
        GameBg : 'sound/gameBg.mp3',
        /**按钮音效 */
        Button: 'sound/button.mp3',
        /**投注音效 */
        Bet: 'sound/bet.mp3'
    }
}

class SoundManage{
    /**静音 */
    static muted:boolean = false;

    constructor(){

    }

    /**
     * 播放游戏音效
     * @param url
     */
    static PlaySound(url:string):void{
        if(this.muted) return;
        Laya.SoundManager.playSound(url);
    }

    /**
     * 播放游戏背景音乐
     * @param url
     */
    static PlayMusic(url:string):void{
        if(this.muted) return;
        Laya.SoundManager.playMusic(url);
    }

    /**
     * 游戏静音
     * @param value 是否静音
     */
    static SetMute(value:boolean):void{
        Laya.SoundManager.muted = value;
        this.muted = value;
    }
}