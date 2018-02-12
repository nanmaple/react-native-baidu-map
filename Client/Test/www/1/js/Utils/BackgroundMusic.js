var Utils;
(function (Utils) {
    //背景音乐
    var BackgroundMusic = /** @class */ (function () {
        function BackgroundMusic() {
        }
        /**
         * 播放背景音乐
         * @param url
         */
        BackgroundMusic.PlayMisic = function (url) {
            Laya.SoundManager.playMusic(url); //默认循环播放
        };
        ;
        /**
         * 停止播放背景音乐
         */
        BackgroundMusic.StopMisic = function () {
            Laya.SoundManager.stopMusic();
        };
        ;
        /**
         * 播放音效
         * @param url
         */
        BackgroundMusic.PlaySounds = function (url) {
            Laya.SoundManager.playSound(url); //默认播放一次
        };
        ;
        return BackgroundMusic;
    }());
    Utils.BackgroundMusic = BackgroundMusic;
})(Utils || (Utils = {}));
