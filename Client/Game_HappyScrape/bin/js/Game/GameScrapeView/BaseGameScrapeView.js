/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameScrapeView = (function () {
    function BaseGameScrapeView() {
        /**
         * 是否正在刮
         */
        this.isScrape = false;
        /**
         * 游戏二结果自定义对象（判断3个以上即中奖）
         */
        this.game2Count = {};
        /**
         * 中奖金额
         */
        this.bonus = 0;
        /**
         * 鼠标是否按下
         */
        this.isMouseDown = false;
    }
    /**
     * 重置屏幕
     */
    BaseGameScrapeView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameScrapeViewUI();
        this.ui.zOrder = 2;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.masks.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
        this.ui.masks.on(Laya.Event.MOUSE_MOVE, this, this.ScrapeMaskView, [this.ui.masks]);
        this.ui.masks.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.Init();
    };
    /**
     * 初始化
     */
    BaseGameScrapeView.prototype.Init = function () {
        for (var index = 0; index < this.ui.oddsInfo.numChildren; index++) {
            var odds = this.ui.oddsInfo.getChildAt(index);
            odds.level.text = LanguageUtils.Language.Get("Level" + (index + 1).toString());
        }
        this.ui.ruleOneTit.text = LanguageUtils.Language.Get("RuleOneTitle");
        this.ui.ruleOneCon.text = LanguageUtils.Language.Get("RuleOneContent");
        this.ui.ruleTwoTit.text = LanguageUtils.Language.Get("RuleTwoTitle");
        this.ui.ruleTwoCon.text = LanguageUtils.Language.Get("RuleTwoContent");
        this.DisabledScrape(true);
    };
    /**
     * 是否禁用面板
     * @param disabled
     */
    BaseGameScrapeView.prototype.DisabledScrape = function (disabled) {
        this.ui.disabled = disabled;
        this.ui.gray = false;
    };
    /**
     * 刮去遮罩涂层
     * @param mask
     */
    BaseGameScrapeView.prototype.ScrapeMaskView = function (mask) {
        var _this = this;
        if (!this.isMouseDown)
            return;
        if (!this.isScrape) {
            this.isScrape = true;
            Utils.BackgroundMusic.PlaySounds("sound/scratch.mp3", Laya.Handler.create(this, function () {
                _this.isScrape = false;
            }, null, false));
        }
        // 绘制一个圆形区域，利用叠加模式，抠除上面遮罩区域
        this.circle = Laya.Pool.getItemByClass("circle", Laya.Sprite);
        this.circle.graphics.drawCircle(0, 0, 40, "#fff");
        this.circle.pos(Laya.stage.mouseX - mask.x, Laya.stage.mouseY - mask.y);
        // 设置叠加模式
        this.circle.blendMode = "destination-out";
        this.ui.coating.addChild(this.circle);
    };
    /**
     * 鼠标按下
     */
    BaseGameScrapeView.prototype.OnMouseDown = function () {
        this.isMouseDown = true;
    };
    /**
     * 鼠标移开
     */
    BaseGameScrapeView.prototype.OnMouseUp = function () {
        this.isMouseDown = false;
        this.isScrape = false;
        Utils.BackgroundMusic.StopSound("sound/scratch.mp3");
    };
    /**
     * 重置遮罩涂层
     * @param isShow 遮罩层是否显示
     */
    BaseGameScrapeView.prototype.ReSetMaskView = function (isShow) {
        this.ui.masks.visible = isShow;
        this.ui.bonus.visible = !isShow;
        this.ui.coating.removeChildren();
    };
    return BaseGameScrapeView;
}());
//# sourceMappingURL=BaseGameScrapeView.js.map