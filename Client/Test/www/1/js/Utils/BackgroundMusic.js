var Utils;
(function (Utils) {
    var BackgroundMisic = /** @class */ (function () {
        function BackgroundMisic() {
        }
        BackgroundMisic.prototype.PlayMisic = function (url) {
            Laya.SoundManager.playMusic(url); //默认循环播放
        };
        ;
        BackgroundMisic.prototype.StopMisic = function () {
            Laya.SoundManager.stopMusic();
        };
        ;
        BackgroundMisic.prototype.PlaySounds = function (url) {
            Laya.SoundManager.playSound(url); //默认播放一次
        };
        ;
        return BackgroundMisic;
    }());
    Utils.BackgroundMisic = BackgroundMisic;
})(Utils || (Utils = {}));
