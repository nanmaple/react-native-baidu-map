namespace ScenePanel {
    export abstract class NoteRecordPanelBaseUI {
        public ui: ui.NoteRecordUI | ui.NoteRecord_VerUI;
        protected uiData: NoteRecordPanelUIData;
        protected dataArr: Array<any> = [];  //投注详情数据
        protected betResultData: any;   //投注结果数据
        protected goDetailW: number;   //进入详情列表滚动宽度
        /**
         * 构造函数
         * @param isHor 是否横版
         */
        constructor(isHor?: boolean) {
            if (isHor) {
                this.ui = new ui.NoteRecordUI();
            } else {
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

            this.uiData = NoteRecordPanelUIData.GetInstance();
            this.ui.visible = this.uiData.isShow;
            if (this.uiData.isShow) {
                this.SetScrollBarSkin();
                this.SetListDetailShow();
                this.SetListScrollValue();
                this.SetListArray(this.uiData.listData);
                this.SetMouseHander(this.uiData.mouseHandler);
                this.SetRenderHander(this.uiData.renderHandler);
            }
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            this.ui.title_time.text = language.GetLanguage("Time");
            this.ui.title_round.text = language.GetLanguage("Round");
            this.ui.title_result.text = language.GetLanguage("WinLose");
            this.ui.betDetails.text = language.GetLanguage("BetDetails");
            this.ui.noBetData.text = language.GetLanguage("NoBetRecord");
            this.ui.isLoading.text = language.GetLanguage("IsLoading");
            let lang:number = language.GetLanguageType();
            if(lang == LanguageUtils.LanguageType.CH){
                this.ui.title.skin = "ui/betrecord.png";
            }else{
                this.ui.title.skin = "ui/betrecord_EN.png";
            }
        }

        /**
         * 获取UI
         */
        public GetUI(): ui.NoteRecordUI | ui.NoteRecord_VerUI {
            return this.ui;
        }

        /**
         * 鼠标按下时
         */
        public OnMouseDown(): void {
            this.uiData.onMouseDownHander.runWith(this.ui.mouseY);  
        }
        /**
         * 鼠标移开时
         */
        public OnMouseUp(): void {
            this.uiData.onMouseUpHander.runWith(this.ui.mouseY);
            this.uiData.listScrollValue = this.ui._recordList.scrollBar.value;
        }
        /**
         * 鼠标按下回调
         * @param hander 
         */
        public OnMouseDownHander(hander:Laya.Handler):void{
            this.uiData.onMouseDownHander = hander;
        }
        /**
         * 鼠标移开回调
         * @param hander 
         */
        public OnMouseUpHander(hander:Laya.Handler):void{
            this.uiData.onMouseUpHander = hander;
        }

        /**
         * 初始化控制
         */
        public ShowInit(): void {
            this.ui.recordBox.x = 0;
            this.ui.noBetData.visible = false;
            this.ui._recordList.visible = false;
            this.ui.visible = true;
            
            this.uiData.isShow = true;
        }

        public ShowLoading(isLoading: boolean = false): void {
            this.ui.isLoading.visible = isLoading;
        }

        /**
         * 关闭投注记录hander
         * @param closeRecordHander 
         */
        public CloseRecordHander(closeRecordHander: Laya.Handler): void {
            this.uiData.closeRecordHander = closeRecordHander;
        }

        /**
         * 隐藏投注记录
         */
        private CloseNoteRecord(): void {
            this.uiData.isShow = false;
            this.ui.visible = this.uiData.isShow;
            this.uiData.isDetailShow = false;
            this.dataArr = [];
            this.ui.betDetailList.dataSource = this.dataArr;
            this.uiData.closeRecordHander.run();
        }
        /**
         * 跳转至记录详情页面
         * @param data 投注详情数据
         */
        public GoNoteRecordDetail(data: any): void {
            this.uiData.listDetailData = data;
            this.uiData.isDetailShow = true;
            Laya.Tween.to(this.ui.recordBox, { x: -this.goDetailW }, 500, Laya.Ease.quadOut);
            //投注结果显示
            this.ui.betResult.text = this.BetResult(this.uiData.listDetailData.total.text);
            this.ui.roundId.text = this.uiData.listDetailData.roundId.text;
            //投注结果数据
            this.betResultData = this.uiData.listDetailData.gameData[this.uiData.listDetailData.gameData.length - 1];
            this.GetBetResultPokerData(this.betResultData);
            let dataArr: any = [];
            for (let i: number = 0; i < this.uiData.listDetailData.gameData.length - 1; i++) {
                dataArr.push(this.uiData.listDetailData.gameData[i]);
            }
            this.GetBetRecordDetail(dataArr);
        }
        /**
         * 获得扑克牌结果数据
         * @param data 
         */
        private GetBetResultPokerData(data: any) {
            // console.log(data);
            let pokerData: any = JSON.parse(data.Data);
            if(pokerData.Cards){
                this.ui.poker1.skin = this.GetPokerUrl(pokerData.Cards.FirstCard);
                this.ui.poker2.skin = this.GetPokerUrl(pokerData.Cards.SecondCard);
                this.ui.poker3.skin = this.GetPokerUrl(pokerData.Cards.ThirdCard);
            }
        }
        /**
         * 获取投注详情数据
         * @param data 投注详情数据
         */
        private GetBetRecordDetail(data: Array<any>): void {
            //添加list数据
            let index: number = data.length;
            for (let i: number = 0; i < index; i++) {
                let dto: any = {
                    betNum: { text: i + 1 },
                    detail: JSON.parse(data[i].Data),
                }
                this.dataArr.push(dto);
            }
            //实现list滚动
            this.ui.betDetailList.vScrollBarSkin = "";
            //将this.arr数据赋值到列表数据源。
            this.ui.betDetailList.dataSource = this.dataArr;
            //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
            this.ui.betDetailList.renderHandler = new Laya.Handler(this, this.onRender);
        }
        /**
         *渲染List 
         * @param cell
         * @param index
         * 
         */
        private onRender(cell: Laya.Box, index: number): void {
            //如果索引不再可索引范围，则终止该函数
            if (index > this.dataArr.length) return;
            //获取当前渲染条目的数据
            let data: any = this.dataArr[index];
            //根据子节点的名字，获取子节点对象。   
            let betNum: Laya.Label = cell.getChildByName("betNum") as Laya.Label;
            let betTypeList: Laya.List = cell.getChildByName("betTypeList") as Laya.List;
            betNum.text = data.betNum.text;
            betTypeList.hScrollBarSkin = "";
            betTypeList.dataSource = data.detail;
            //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
            betTypeList.renderHandler = new Laya.Handler(this, (cell: Laya.Box, index: number) => {
                //如果索引不再可索引范围，则终止该函数
                if (index > data.detail.length) return;
                let betPos: Laya.Label = cell.getChildByName("betPos") as Laya.Label;
                let betOdds: Laya.Label = cell.getChildByName("betOdds") as Laya.Label;
                let betAmount: Laya.Label = cell.getChildByName("betAmount") as Laya.Label;
                betPos.text = Utils.BetPos.transform(data.detail[index].BetPos);
                betOdds.text = data.detail[index].Odds;
                betAmount.text = data.detail[index].Amount;
            });
        }
        /**
         * 返回至投注记录列表
         */
        private BackNoteRecordList(): void {
            this.uiData.isDetailShow = false;
            this.dataArr = [];
            this.ui.betDetailList.dataSource = this.dataArr;
            Laya.Tween.to(this.ui.recordBox, { x: 0 }, 500, Laya.Ease.quadOut);
        }
        /**
         * 投注结果
         * @param total 投注收益
         */
        private BetResult(total: number): string {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if (total > 0) {
                return language.GetLanguage("Win") + " + " + total;
            }
            else {
                return language.GetLanguage("Lose") + " - " + -total;
            }
        }
        /**
         * 获得扑克牌地址
         * @param type 牌类型
         */
        private GetPokerUrl(type: number): string {
            return `ui/poker/${type}.png`
        }

        /**
         * 设置列表垂直滚动条
         */
        public SetScrollBarSkin(): void {
            this.ui._recordList.vScrollBarSkin = "";
        }

        /**
         * 设置列表数据
         * @param data 
         */
        public SetListArray(data: Array<any>): void {
            this.uiData.listData = data;
            this.ui._recordList.dataSource = this.uiData.listData;
            if (!data || data.length == 0) {
                this.ui.noBetData.visible = true;
                this.ui._recordList.visible = false;
            } else {
                this.ui.noBetData.visible = false;
                this.ui._recordList.visible = true;
            }
        }

        /**
         * 设置列表单元格渲染处理回调
         * @param hander 
         */
        public SetRenderHander(hander: Laya.Handler): void {
            this.uiData.renderHandler = hander;
            this.ui._recordList.renderHandler = this.uiData.renderHandler;
        }
        /**
         * 设置列表鼠标事件处理回调
         * @param hander 
         */
        public SetMouseHander(hander: Laya.Handler): void {
            this.uiData.mouseHandler = hander;
            this.ui._recordList.mouseHandler = this.uiData.mouseHandler;
        }
        /**
         * 获取列表高度
         */
        public GetListHeight(): number {
            return this.ui._recordList.height;
        }
        /**
         * 获取列表滚动距离
         */
        public GetListScrollValue(): number {
            this.uiData.listScrollValue = this.ui._recordList.scrollBar.value;
            return this.uiData.listScrollValue;
        }
        /**
         * 设置列表滚动距离
         */
        public SetListScrollValue(): void {
            this.ui._recordList.scrollBar.value = this.uiData.listScrollValue;
        }
        /**
         * 设置列表详情是否显示
         */
        public SetListDetailShow():void{
            if(this.uiData.isDetailShow){
                this.ui.recordBox.x = -this.goDetailW;  
                this.GoNoteRecordDetail(this.uiData.listDetailData);
            }
            else{
                this.ui.recordBox.x = 0;
            }
        }
    }
}