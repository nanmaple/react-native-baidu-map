/**@todo:测试模块 */
var SoundConfig;
(function (SoundConfig) {
    SoundConfig.SounRes = {
        /**游戏背景音乐*/
        GameBg: 'sound/bgm.mp3',
        /**按钮音效 */
        Button: 'sound/click.mp3',
        /**投注音效 */
        Bet: ['sound/bet_1.mp3', 'sound/bet_2.mp3', 'sound/bet_3.mp3', 'sound/bet_4.mp3', 'sound/bet_5.mp3', 'sound/bet_6.mp3', 'sound/bet_7.mp3', 'sound/bet_8.mp3'],
        /**滚动音效 */
        /**加速 */
        RollEaseIn: 'sound/start_1.mp3',
        /**匀速 */
        RollLinear: 'sound/start_2.mp3',
        /**减速 */
        RollEaseOut: 'sound/start_3.mp3',
        /**收分 */
        Gain: 'sound/gather.mp3',
        /**猜中位置音效 */
        WinPos: ['sound/result_1.mp3', 'sound/result_2.mp3', 'sound/result_3.mp3', 'sound/result_4.mp3', 'sound/result_5.mp3', 'sound/result_6.mp3', 'sound/result_7.mp3', 'sound/result_8.mp3'],
        /**猜中音效 */
        Win: 'sound/win.mp3',
        /**未猜中音效 */
        Loss: 'sound/loss.mp3',
        /**猜大小成功 */
        GuessWin: 'sound/gwin.mp3',
        /**猜大小失败 */
        GuessLoss: 'sound/gloss.mp3',
    };
})(SoundConfig || (SoundConfig = {}));
//# sourceMappingURL=SoundManage.js.map