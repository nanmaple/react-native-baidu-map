namespace Utils {
    export interface IBackgroundMusic {
        PlayMisic(url: string): void;
        StopMisic(): void;
        PlaySounds(url: string): void;

    }
    //背景音乐
    export class BackgroundMusic{
        /**
         * 是否禁音
         */
        static muted:boolean = false;
        /**
         * 播放背景音乐
         * @param url 
         */
        static PlayMusic(url: string): void {
            if(this.muted) return;
            Laya.SoundManager.playMusic(url);   //默认循环播放
        };
        /**
         * 停止播放背景音乐
         */
        static StopMusic(): void {
            Laya.SoundManager.stopMusic();
        };
        /**
         * 禁音(背景音乐和所有音效)
         * @param muted 是否禁音
         */
        static MuteMusic(muted:boolean):void{
            this.muted = muted;
            Laya.SoundManager.muted = this.muted;
        }
        /**
         * 播放音效
         * @param url 
         */
        static PlaySounds(url: string): void {
            if(this.muted) return;
            Laya.SoundManager.playSound(url);   //默认播放一次
        };
    }
}