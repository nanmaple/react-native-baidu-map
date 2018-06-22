/*
* name;
*/
var NoteRecordBaseUI = /** @class */ (function () {
    function NoteRecordBaseUI() {
        /**
         * 显示/隐藏
         */
        this.isShow = false;
        /**
         * 是否正在加载数据
         */
        this.isLoading = false;
        /**
         * 详情显示/隐藏
         */
        this.detailShow = false;
        /**
         * 投注记录数据
        */
        this.listArray = [];
        /**
         * 投注详情列表数据
         */
        this.detailListArray = [];
        /**
         * 滚动条距离
         */
        this.scrollValue = 0;
        /**
         * 加载数据dtor
        */
        this.recordPageDto = new Dto.BetRecordPageDto();
    }
    /**
     * 切换横竖屏
     * @param isHor 是否为横屏
     */
    NoteRecordBaseUI.prototype.ResetScreen = function (isVer) {
        Laya.stage.removeChild(this.ui);
        if (isVer) {
            this.ui = new ui.NoteRecordVUI();
        }
        else {
            this.ui = new ui.NoteRecordHUI();
        }
        //基础样式
        this.ui.zOrder = 7;
        this.ui.cacheAs = "bitmap";
        this.ui._recordList.visible = false;
        this.ui.noBetData.visible = false;
        this.ui.isLoading.visible = this.isLoading;
        this.ui.visible = this.isShow;
        var language = new LanguageUtils.Language();
        this.ui.title_time.text = language.GetLanguage("Time");
        this.ui.title_round.text = language.GetLanguage("Round");
        this.ui.title_result.text = language.GetLanguage("WinLose");
        this.ui.betDetails.text = language.GetLanguage("BetDetails");
        this.ui.noBetData.text = language.GetLanguage("NoBetRecord");
        this.ui.isLoading.text = language.GetLanguage("IsLoading");
        var lang = language.GetLanguageType();
        if (lang == LanguageUtils.LanguageType.CH) {
            this.ui.title.skin = "ui/betrecord.png";
        }
        else {
            this.ui.title.skin = "ui/betrecord_EN.png";
        }
        this.recordWidth = this.ui.recordHome.width;
        this.listH = this.ui._recordList.height;
        if (this.isShow) {
            this.Init();
        }
        //事件绑定
        this.ui.close.on(Laya.Event.CLICK, this, this.CloseNoteRecord);
        this.ui.back.on(Laya.Event.CLICK, this, this.BackNoteRecordList);
        this.ui._recordList.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
        this.ui._recordList.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
        Laya.stage.addChild(this.ui);
    };
    return NoteRecordBaseUI;
}());
//# sourceMappingURL=NoteRecordBaseUI.js.map