namespace Utils {
    export interface IBackgroundMisic {
        PlayMisic(url: string): void;
        StopMisic(): void;
        PlaySounds(url: string): void;

    }


    export class BackgroundMisic implements IBackgroundMisic {
        constructor() {

        }

        PlayMisic(url: string): void {
            Laya.SoundManager.playMusic(url);   //默认循环播放
        };
        
        StopMisic(): void {
            Laya.SoundManager.stopMusic();
        };

        PlaySounds(url: string): void {
            Laya.SoundManager.playSound(url);   //默认播放一次
        };
    }
}