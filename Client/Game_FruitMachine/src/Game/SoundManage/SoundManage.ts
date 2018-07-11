class SoundManage{
    /**静音 */
    static muted:boolean = false;
    // private musicMuted:boolean = false;
    // private soundMuted:boolean = false;
    /**音量 0-1 */
    // private musicVolume:number = 1;
    // private soundVolume:number = 1;

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
        // Laya.SoundManager.musicMuted = value;
        // this.musicMuted = value;
        // Laya.SoundManager.soundMuted = value;
        // this.soundMuted = value;
    }

    /**
     * 修改音量
     * @param value 0-1
     */
    // static SetVolume(value:number):void{
    //     Laya.SoundManager.musicVolume = value;
    //     this.musicVolume = value
    //     Laya.SoundManager.soundVolume = value;
    //     this.soundVolume = value
    // }
}