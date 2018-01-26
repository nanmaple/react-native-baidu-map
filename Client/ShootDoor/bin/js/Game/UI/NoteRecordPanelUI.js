var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScenePanel;
(function (ScenePanel) {
    var NoteRecordPanel = (function (_super) {
        __extends(NoteRecordPanel, _super);
        function NoteRecordPanel() {
            var _this = _super.call(this) || this;
            _this.dataArr = []; //投注详情数据
            //将提示UI类缓存为静态图像
            _this.cacheAs = "bitmap";
            if (GameConfig.RatioType) {
                _this.prompt.scale(GameConfig.HeightWidth, 1);
            }
            else {
                _this.prompt.scale(1, GameConfig.WidthHeight);
            }
            _this.visible = false;
            _this._recordList.visible = false;
            _this.isLoading.visible = false;
            _this.close.on(Laya.Event.CLICK, _this, _this.CloseNoteRecord);
            _this.back.on(Laya.Event.CLICK, _this, _this.BackNoteRecordList);
            _this.recordHome.on(Laya.Event.MOUSE_DOWN, _this, _this.OnMouseDown);
            _this.recordHome.on(Laya.Event.MOUSE_UP, _this, _this.OnMouseUp);
            return _this;
        }
        /**
         * 鼠标按下时
         */
        NoteRecordPanel.prototype.OnMouseDown = function () {
            this.event("OnMouseDown");
        };
        /**
         * 鼠标移开时
         */
        NoteRecordPanel.prototype.OnMouseUp = function () {
            this.event("OnMouseUp");
        };
        /**
         * 显示投注记录
         * @param show 投注记录列表是否显示
         */
        NoteRecordPanel.prototype.ShowNoteRecord = function (show) {
            if (show === void 0) { show = false; }
            //重置
            this.recordBox.x = 0;
            this.visible = true;
            if (show) {
                this._recordList.visible = true;
                this.isLoading.visible = false;
            }
            else {
                this._recordList.visible = false;
                this.isLoading.visible = true;
            }
        };
        /**
         * 关闭投注记录hander
         * @param closeRecordHander
         */
        NoteRecordPanel.prototype.CloseRecordHander = function (closeRecordHander) {
            this.closeRecordHander = closeRecordHander;
        };
        /**
         * 隐藏投注记录
         */
        NoteRecordPanel.prototype.CloseNoteRecord = function () {
            this.visible = false;
            this.closeRecordHander.run();
        };
        /**
         * 跳转至记录详情页面
         * @param data 投注详情数据
         */
        NoteRecordPanel.prototype.GoNoteRecordDetail = function (data) {
            Laya.Tween.to(this.recordBox, { x: -930 }, 500, Laya.Ease.quadOut);
            //投注结果显示
            this.betResult.text = this.BetResult(data.total);
            //投注结果数据
            this.betResultData = data.gameData[data.gameData.length - 1];
            this.GetBetResultPokerData(this.betResultData);
            var dataArr = [];
            for (var i = 0; i < data.gameData.length - 1; i++) {
                dataArr.push(data.gameData[i]);
            }
            this.GetBetRecordDetail(dataArr);
        };
        /**
         * 获得扑克牌结果数据
         * @param data
         */
        NoteRecordPanel.prototype.GetBetResultPokerData = function (data) {
            var pokerData = JSON.parse(data.Data);
            this.poker1.skin = this.GetPokerUrl(pokerData.Cards.FirstCard);
            this.poker2.skin = this.GetPokerUrl(pokerData.Cards.SecondCard);
            this.poker3.skin = this.GetPokerUrl(pokerData.Cards.ThirdCard);
        };
        /**
         * 获取投注详情数据
         * @param data 投注详情数据
         */
        NoteRecordPanel.prototype.GetBetRecordDetail = function (data) {
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
            this.betDetailList.vScrollBarSkin = "";
            //将this.arr数据赋值到列表数据源。
            this.betDetailList.dataSource = this.dataArr;
            //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
            this.betDetailList.renderHandler = new Laya.Handler(this, this.onRender);
        };
        /**
         *渲染List
         * @param cell
         * @param index
         *
         */
        NoteRecordPanel.prototype.onRender = function (cell, index) {
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
        NoteRecordPanel.prototype.BackNoteRecordList = function () {
            this.dataArr = [];
            this.betDetailList.dataSource = this.dataArr;
            Laya.Tween.to(this.recordBox, { x: 0 }, 500, Laya.Ease.quadOut);
        };
        /**
         * 投注结果
         * @param total 投注收益
         */
        NoteRecordPanel.prototype.BetResult = function (total) {
            if (total > 0) {
                return "赢" + " + " + total;
            }
            else {
                return "输" + " - " + -total;
            }
        };
        /**
         * 获得扑克牌地址
         * @param type 牌类型
         */
        NoteRecordPanel.prototype.GetPokerUrl = function (type) {
            return "ui/poker/" + type + ".png";
        };
        return NoteRecordPanel;
    }(ui.NoteRecordUI));
    ScenePanel.NoteRecordPanel = NoteRecordPanel;
})(ScenePanel || (ScenePanel = {}));
