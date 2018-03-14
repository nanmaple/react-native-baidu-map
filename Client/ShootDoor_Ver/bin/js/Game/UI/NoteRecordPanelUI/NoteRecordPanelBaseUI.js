var ScenePanel;
(function (ScenePanel) {
    var NoteRecordPanelBaseUI = /** @class */ (function () {
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        function NoteRecordPanelBaseUI(isHor) {
            this.dataArr = []; //投注详情数据
            if (isHor) {
                this.ui = new ui.NoteRecordUI();
            }
            else {
                this.ui = new ui.NoteRecord_VerUI();
            }
            //将提示UI类缓存为静态图像
            this.ui.zOrder = 8;
            //将提示UI类缓存为静态图像
            this.ui.cacheAs = "bitmap";
            this.ui._recordList.visible = false;
            this.ui.noBetData.visible = false;
            this.ui.isLoading.visible = false;
            this.ui.close.on(Laya.Event.CLICK, this, this.CloseNoteRecord);
            this.ui.back.on(Laya.Event.CLICK, this, this.BackNoteRecordList);
            this.ui.recordHome.on(Laya.Event.MOUSE_DOWN, this, this.OnMouseDown);
            this.ui.recordHome.on(Laya.Event.MOUSE_UP, this, this.OnMouseUp);
            this.goDetailW = this.ui.recordHome.width;
            this.uiData = ScenePanel.NoteRecordPanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            if (this.uiData.isShow) {
                this.SetScrollBarSkin();
                this.SetListDetailShow();
                this.SetListScrollValue();
                this.SetListArray(this.uiData.listData);
                this.SetMouseHander(this.uiData.mouseHandler);
                this.SetRenderHander(this.uiData.renderHandler);
            }
            var language = new LanguageUtils.Language();
            this.ui.title_time.text = language.GetLanguage("Time");
            this.ui.title_round.text = language.GetLanguage("Round");
            this.ui.title_result.text = language.GetLanguage("WinLose");
            this.ui.betDetails.text = language.GetLanguage("BetDetails");
            this.ui.noBetData.text = language.GetLanguage("NoBetRecord");
            this.ui.isLoading.text = language.GetLanguage("IsLoading");
            var lang = Laya.Browser.window.navigator.language || Laya.Browser.window.navigator["userLanguage"]; //常规浏览器语言和IE浏览器  
            lang = lang.substr(0, 2); //截取lang前2位字符 
            if (lang == 'zh') {
                this.ui.title.skin = "ui/betrecord.png";
            }
            else {
                this.ui.title.skin = "ui/betrecord_EN.png";
            }
        }
        /**
         * 获取UI
         */
        NoteRecordPanelBaseUI.prototype.GetUI = function () {
            return this.ui;
        };
        /**
         * 鼠标按下时
         */
        NoteRecordPanelBaseUI.prototype.OnMouseDown = function () {
            this.uiData.onMouseDownHander.runWith(this.ui.mouseY);
        };
        /**
         * 鼠标移开时
         */
        NoteRecordPanelBaseUI.prototype.OnMouseUp = function () {
            this.uiData.onMouseUpHander.runWith(this.ui.mouseY);
            this.uiData.listScrollValue = this.ui._recordList.scrollBar.value;
        };
        /**
         * 鼠标按下回调
         * @param hander
         */
        NoteRecordPanelBaseUI.prototype.OnMouseDownHander = function (hander) {
            this.uiData.onMouseDownHander = hander;
        };
        /**
         * 鼠标移开回调
         * @param hander
         */
        NoteRecordPanelBaseUI.prototype.OnMouseUpHander = function (hander) {
            this.uiData.onMouseUpHander = hander;
        };
        /**
         * 初始化控制
         */
        NoteRecordPanelBaseUI.prototype.ShowInit = function () {
            this.ui.recordBox.x = 0;
            this.ui.noBetData.visible = false;
            this.ui._recordList.visible = false;
            this.ui.visible = true;
            this.uiData.isShow = true;
        };
        NoteRecordPanelBaseUI.prototype.ShowLoading = function (isLoading) {
            if (isLoading === void 0) { isLoading = false; }
            this.ui.isLoading.visible = isLoading;
        };
        /**
         * 关闭投注记录hander
         * @param closeRecordHander
         */
        NoteRecordPanelBaseUI.prototype.CloseRecordHander = function (closeRecordHander) {
            this.uiData.closeRecordHander = closeRecordHander;
        };
        /**
         * 隐藏投注记录
         */
        NoteRecordPanelBaseUI.prototype.CloseNoteRecord = function () {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
            this.uiData.isDetailShow = false;
            this.dataArr = [];
            this.ui.betDetailList.dataSource = this.dataArr;
            this.uiData.closeRecordHander.run();
        };
        /**
         * 跳转至记录详情页面
         * @param data 投注详情数据
         */
        NoteRecordPanelBaseUI.prototype.GoNoteRecordDetail = function (data) {
            this.uiData.listDetailData = data;
            this.uiData.isDetailShow = true;
            Laya.Tween.to(this.ui.recordBox, { x: -this.goDetailW }, 500, Laya.Ease.quadOut);
            //投注结果显示
            this.ui.betResult.text = this.BetResult(this.uiData.listDetailData.total.text);
            this.ui.roundId.text = this.uiData.listDetailData.roundId.text;
            //投注结果数据
            this.betResultData = this.uiData.listDetailData.gameData[this.uiData.listDetailData.gameData.length - 1];
            this.GetBetResultPokerData(this.betResultData);
            var dataArr = [];
            for (var i = 0; i < this.uiData.listDetailData.gameData.length - 1; i++) {
                dataArr.push(this.uiData.listDetailData.gameData[i]);
            }
            this.GetBetRecordDetail(dataArr);
        };
        /**
         * 获得扑克牌结果数据
         * @param data
         */
        NoteRecordPanelBaseUI.prototype.GetBetResultPokerData = function (data) {
            var pokerData = JSON.parse(data.Data);
            this.ui.poker1.skin = this.GetPokerUrl(pokerData.Cards.FirstCard);
            this.ui.poker2.skin = this.GetPokerUrl(pokerData.Cards.SecondCard);
            this.ui.poker3.skin = this.GetPokerUrl(pokerData.Cards.ThirdCard);
        };
        /**
         * 获取投注详情数据
         * @param data 投注详情数据
         */
        NoteRecordPanelBaseUI.prototype.GetBetRecordDetail = function (data) {
            //添加list数据
            var index = data.length;
            for (var i = 0; i < index; i++) {
                var dto = {
                    betNum: { text: i + 1 },
                    detail: JSON.parse(data[i].Data),
                };
                this.dataArr.push(dto);
            }
            //实现list滚动
            this.ui.betDetailList.vScrollBarSkin = "";
            //将this.arr数据赋值到列表数据源。
            this.ui.betDetailList.dataSource = this.dataArr;
            //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
            this.ui.betDetailList.renderHandler = new Laya.Handler(this, this.onRender);
        };
        /**
         *渲染List
         * @param cell
         * @param index
         *
         */
        NoteRecordPanelBaseUI.prototype.onRender = function (cell, index) {
            //如果索引不再可索引范围，则终止该函数
            if (index > this.dataArr.length)
                return;
            //获取当前渲染条目的数据
            var data = this.dataArr[index];
            //根据子节点的名字，获取子节点对象。   
            var betNum = cell.getChildByName("betNum");
            var betTypeList = cell.getChildByName("betTypeList");
            betNum.text = data.betNum.text;
            betTypeList.hScrollBarSkin = "";
            betTypeList.dataSource = data.detail;
            //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
            betTypeList.renderHandler = new Laya.Handler(this, function (cell, index) {
                //如果索引不再可索引范围，则终止该函数
                if (index > data.detail.length)
                    return;
                var betPos = cell.getChildByName("betPos");
                var betOdds = cell.getChildByName("betOdds");
                var betAmount = cell.getChildByName("betAmount");
                betPos.text = Utils.BetPos.transform(data.detail[index].BetPos);
                betOdds.text = data.detail[index].Odds;
                betAmount.text = data.detail[index].Amount;
            });
        };
        /**
         * 返回至投注记录列表
         */
        NoteRecordPanelBaseUI.prototype.BackNoteRecordList = function () {
            this.uiData.isDetailShow = false;
            this.dataArr = [];
            this.ui.betDetailList.dataSource = this.dataArr;
            Laya.Tween.to(this.ui.recordBox, { x: 0 }, 500, Laya.Ease.quadOut);
        };
        /**
         * 投注结果
         * @param total 投注收益
         */
        NoteRecordPanelBaseUI.prototype.BetResult = function (total) {
            var language = new LanguageUtils.Language();
            if (total > 0) {
                return language.GetLanguage("Win") + " + " + total;
            }
            else {
                return language.GetLanguage("Lose") + " - " + -total;
            }
        };
        /**
         * 获得扑克牌地址
         * @param type 牌类型
         */
        NoteRecordPanelBaseUI.prototype.GetPokerUrl = function (type) {
            return "ui/poker/" + type + ".png";
        };
        /**
         * 设置列表垂直滚动条
         */
        NoteRecordPanelBaseUI.prototype.SetScrollBarSkin = function () {
            this.ui._recordList.vScrollBarSkin = "";
        };
        /**
         * 设置列表数据
         * @param data
         */
        NoteRecordPanelBaseUI.prototype.SetListArray = function (data) {
            this.uiData.listData = data;
            this.ui._recordList.dataSource = this.uiData.listData;
            if (!data || data.length == 0) {
                this.ui.noBetData.visible = true;
                this.ui._recordList.visible = false;
            }
            else {
                this.ui.noBetData.visible = false;
                this.ui._recordList.visible = true;
            }
        };
        /**
         * 设置列表单元格渲染处理回调
         * @param hander
         */
        NoteRecordPanelBaseUI.prototype.SetRenderHander = function (hander) {
            this.uiData.renderHandler = hander;
            this.ui._recordList.renderHandler = this.uiData.renderHandler;
        };
        /**
         * 设置列表鼠标事件处理回调
         * @param hander
         */
        NoteRecordPanelBaseUI.prototype.SetMouseHander = function (hander) {
            this.uiData.mouseHandler = hander;
            this.ui._recordList.mouseHandler = this.uiData.mouseHandler;
        };
        /**
         * 获取列表高度
         */
        NoteRecordPanelBaseUI.prototype.GetListHeight = function () {
            return this.ui._recordList.height;
        };
        /**
         * 获取列表滚动距离
         */
        NoteRecordPanelBaseUI.prototype.GetListScrollValue = function () {
            this.uiData.listScrollValue = this.ui._recordList.scrollBar.value;
            return this.uiData.listScrollValue;
        };
        /**
         * 设置列表滚动距离
         */
        NoteRecordPanelBaseUI.prototype.SetListScrollValue = function () {
            // let len:number = Math.round(this.uiData.listScrollValue / 100);
            // this.ui._recordList.scrollTo(len);
            this.ui._recordList.scrollBar.value = this.uiData.listScrollValue;
        };
        /**
         * 设置列表详情是否显示
         */
        NoteRecordPanelBaseUI.prototype.SetListDetailShow = function () {
            if (this.uiData.isDetailShow) {
                this.ui.recordBox.x = -this.goDetailW;
                this.GoNoteRecordDetail(this.uiData.listDetailData);
            }
            else {
                this.ui.recordBox.x = 0;
            }
        };
        return NoteRecordPanelBaseUI;
    }());
    ScenePanel.NoteRecordPanelBaseUI = NoteRecordPanelBaseUI;
})(ScenePanel || (ScenePanel = {}));
