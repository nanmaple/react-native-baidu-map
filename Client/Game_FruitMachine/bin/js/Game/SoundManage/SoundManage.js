/**@todo:测试模块 */
var SoundConfig;
(function (SoundConfig) {
    SoundConfig.SounRes = {
        /**游戏背景音乐*/
        GameBg: 'sound/gameBg.mp3',
        /**按钮音效 */
        Button: 'sound/button.mp3',
        /**投注音效 */
        Bet: 'sound/bet.mp3'
    };
})(SoundConfig || (SoundConfig = {}));
var SoundManage = /** @class */ (function () {
    function SoundManage() {
    }
    /**
     * 播放游戏音效
     * @param url
     */
    SoundManage.PlaySound = function (url) {
        if (this.muted)
            return;
        Laya.SoundManager.playSound(url);
    };
    /**
     * 播放游戏背景音乐
     * @param url
     */
    SoundManage.PlayMusic = function (url) {
        if (this.muted)
            return;
        Laya.SoundManager.playMusic(url);
    };
    /**
     * 游戏静音
     * @param value 是否静音
     */
    SoundManage.SetMute = function (value) {
        Laya.SoundManager.muted = value;
        this.muted = value;
    };
    /**静音 */
    SoundManage.muted = false;
    return SoundManage;
}());
//# sourceMappingURL=SoundManage.js.map