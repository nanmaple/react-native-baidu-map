var Utils;
(function (Utils) {
    //背景音乐
    var BackgroundMusic = (function () {
        function BackgroundMusic() {
        }
        /**
         * 播放背景音乐
         * @param url
         */
        BackgroundMusic.PlayMusic = function (url) {
            if (this.muted)
                return;
            Laya.SoundManager.playMusic(url); //默认循环播放
        };
        ;
        /**
         * 停止播放背景音乐
         */
        BackgroundMusic.StopMusic = function () {
            Laya.SoundManager.stopMusic();
        };
        ;
        /**
         * 停止播放音效
         */
        BackgroundMusic.StopSound = function (url) {
            Laya.SoundManager.stopSound(url);
        };
        ;
        /**
         * 禁音(背景音乐和所有音效)
         * @param muted 是否禁音
         */
        BackgroundMusic.MuteMusic = function (muted) {
            this.muted = muted;
            Laya.SoundManager.muted = this.muted;
        };
        /**
         * 播放音效
         * @param url
         */
        BackgroundMusic.PlaySounds = function (url, hander) {
            if (this.muted)
                return;
            Laya.SoundManager.playSound(url, 1, hander); //默认播放一次
        };
        ;
        return BackgroundMusic;
    }());
    /**
     * 是否禁音
     */
    BackgroundMusic.muted = false;
    Utils.BackgroundMusic = BackgroundMusic;
})(Utils || (Utils = {}));
//# sourceMappingURL=BackgroundMusic.js.map