namespace Utils {
    export interface IBackgroundMusic {
        PlayMisic(url: string): void;
        StopMisic(): void;
        PlaySounds(url: string): void;

    }
    //背景音乐
    export class BackgroundMusic{
        /**
         * 播放背景音乐
         * @param url 
         */
        static PlayMusic(url: string): void {
            Laya.SoundManager.playMusic(url);   //默认循环播放
        };
        /**
         * 停止播放背景音乐
         */
        static StopMusic(): void {
            Laya.SoundManager.stopMusic();
        };
        /**
         * 播放音效
         * @param url 
         */
        static PlaySounds(url: string): void {
            Laya.SoundManager.playSound(url);   //默认播放一次
        };
    }
}