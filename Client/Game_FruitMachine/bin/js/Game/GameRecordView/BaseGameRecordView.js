/**
 * BaseView主要用于写固定的UI渲染方法和不同功能的UI处理方法,动画
 * 命名规则：BasexxxView
 */
var BaseGameRecordView = /** @class */ (function () {
    function BaseGameRecordView() {
        /**
         * 是否显示
         */
        this.isShow = false;
        /**
         * 暂无更多数据
         */
        this.noMoreData = false;
        /**
         * 是否初始化
         */
        this.isInit = false;
        this.isActiveData = false; //初始化数据
        this.scrollValue = 0; //列表滚动位置
        this.dataArr = [];
        this.isLoading = false;
    }
    /**
     * 重置屏幕
     */
    BaseGameRecordView.prototype.ResetScreen = function () {
        Laya.stage.removeChild(this.ui);
        this.ui = new ui.GameRecordViewUI();
        this.ui.title.skin = LanguageUtils.Language.Get('RecordTitle');
        this.ui.num_tit.text = LanguageUtils.Language.Get('Number');
        this.ui.reward_tit.text = LanguageUtils.Language.Get('Reward');
        this.ui.time_tit.text = LanguageUtils.Language.Get('Time');
        this.ui.isLoading.text = LanguageUtils.Language.Get('RecordLoading');
        this.ui.noRecord.text = LanguageUtils.Language.Get('NoteRecord');
        this.ui.zOrder = 5;
        this.ui.cacheAs = "bitmap";
        Laya.stage.addChild(this.ui);
        this.ui.visible = this.isShow;
        this.ui.close.on(Laya.Event.CLICK, this, this.Hide);
        this.ui.panelList.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        this.Init();
    };
    /**
     * 初始化
     */
    BaseGameRecordView.prototype.Init = function () {
        this.ui.recordList.visible = false;
        this.ui.noRecord.visible = false;
        this.ui.isLoading.visible = false;
        this.noMoreData = false;
        this.isInit = true;
    };
    /**
     * 鼠标移开
     */
    BaseGameRecordView.prototype.OnMouseUp = function () {
        var value = this.ui.recordList.scrollBar.value;
        if (this.isLoading) {
            return;
        }
        if (value <= -30) {
            this.isLoading = true;
            this.PullDownRefresh(true);
        }
        else if ((value - this.dataArr.length * (this.listBoxH + 5) + this.recordListH) >= 30 && !this.noMoreData) {
            this.isLoading = true;
            this.PullUpMore();
        }
    };
    /**
     * 设置列表数据
     * @param data
     */
    BaseGameRecordView.prototype.SetListArray = function (data) {
        this.ui.recordList.dataSource = data;
        if (!data || data.length == 0) {
            this.ui.noRecord.visible = true;
            this.ui.recordList.visible = false;
        }
        else {
            this.ui.noRecord.visible = false;
            this.ui.recordList.visible = true;
        }
        this.ShowLoading(false);
    };
    /**
     * 下拉刷新
     * @param isInit
     */
    BaseGameRecordView.prototype.PullDownRefresh = function (isInit) {
        this.dataArr = [];
        this.SetListArray(this.dataArr);
        if (isInit) {
            this.Init();
        }
        this.ShowLoading(true);
        this.EventNotification(Enum.ListenViewEnum.GetRecord, true);
    };
    ;
    /**
     * 上拉加载更多
     */
    BaseGameRecordView.prototype.PullUpMore = function () {
        this.isInit = false;
        this.EventNotification(Enum.ListenViewEnum.GetRecord, false);
    };
    ;
    /**
     * 是否显示正在加载中
     * @param isLoading
     */
    BaseGameRecordView.prototype.ShowLoading = function (isLoading) {
        this.ui.isLoading.visible = isLoading;
    };
    /**
     * 隐藏面板
     */
    BaseGameRecordView.prototype.Hide = function () {
        var _this = this;
        Laya.SoundManager.playSound(SoundConfig.SounRes.Button);
        Effect.AlertEffect.Hide(this.ui.prompt, Laya.Handler.create(this, function () {
            _this.isShow = false;
            _this.ui.visible = _this.isShow;
        }, null, false));
        this.dataArr = [];
        this.SetListArray(this.dataArr);
    };
    return BaseGameRecordView;
}());
//# sourceMappingURL=BaseGameRecordView.js.map