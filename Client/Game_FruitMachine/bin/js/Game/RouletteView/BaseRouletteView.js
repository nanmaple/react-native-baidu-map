/**最大最小缓速距离 */
var slow = { max: 10, min: 7 };
var defaultSpeed = 21;
var gameResult = { 0: [6, 11, 17, 23], 1: [1, 13], 2: 12, 3: [7, 19], 4: 18, 5: [2, 14], 6: 24, 7: 8, 8: 9, 9: 20, 10: 21, 11: 16, 12: 15, 13: 4, 14: 3, 15: 5, 16: [10, 22] };
/**轮盘面板基类 */
var BaseRouletteView = /** @class */ (function () {
    function BaseRouletteView(eventKey) {
        /**一共移动次数 */
        this.num = 0;
        /**轮盘图标数 */
        this.iconNum = 24;
        /**加速状态 */
        this.accelerateStart = true;
        /**开始位置 从1开始 */
        this.start = 1;
        /**结束位置 */
        this.end = 7;
        /**当前所在位置 从0开始 */
        this.index = 0;
        /**当前帧 */
        this.currentFrame = 0;
        /**当前速度 */
        this.currentSpeed = 21;
        /**缓速距离 */
        this.slowDistance = 7;
        /**结束加速位置 */
        this.accelerateEnd = 0;
        this.ListenEventKey = eventKey;
    }
    /**
     * 重置屏幕
     */
    BaseRouletteView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.RouletteViewUI();
        this.box = this.ui.getChildAt(0);
        this.box.getChildAt(0).getChildByName('animated').visible = true;
        this.box.getChildAt(0).getChildByName('animated').play();
        this.ui.zOrder = 1;
        // this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
    };
    return BaseRouletteView;
}());
//# sourceMappingURL=BaseRouletteView.js.map