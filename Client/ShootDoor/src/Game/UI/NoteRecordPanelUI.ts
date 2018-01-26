namespace ScenePanel{
    export class NoteRecordPanel extends ui.NoteRecordUI{
        private closeRecordHander:Laya.Handler;   //关闭投注记录回调
        private dataArr:Array<any> = [];  //投注详情数据
        private betResultData:any;   //投注结果数据
        constructor(){
            super();
            //将提示UI类缓存为静态图像
            this.cacheAs = "bitmap"; 
            if (GameConfig.RatioType) {
                this.prompt.scale(GameConfig.HeightWidth, 1);
            } else {
                this.prompt.scale(1, GameConfig.WidthHeight);
            }
            this.visible = false;
            this._recordList.visible = false;
            this.isLoading.visible = false;
            this.close.on(Laya.Event.CLICK,this,this.CloseNoteRecord);
            this.back.on(Laya.Event.CLICK,this,this.BackNoteRecordList);
            this.recordHome.on(Laya.Event.MOUSE_DOWN,this,this.OnMouseDown);
            this.recordHome.on(Laya.Event.MOUSE_UP,this,this.OnMouseUp);
        }
        /**
         * 鼠标按下时
         */
        private OnMouseDown():void{
            this.event("OnMouseDown");
        }
        /**
         * 鼠标移开时
         */
        private OnMouseUp():void{
            this.event("OnMouseUp");
        }
        /**
         * 显示投注记录
         * @param show 投注记录列表是否显示
         */
        public ShowNoteRecord(show:boolean = false):void{
            //重置
            this.recordBox.x = 0;
            this.visible = true;
            if(show){
                this._recordList.visible = true;
                this.isLoading.visible = false;
            }
            else{
                this._recordList.visible = false;
                this.isLoading.visible = true;
            }
        }
        /**
         * 关闭投注记录hander
         * @param closeRecordHander 
         */
        public CloseRecordHander(closeRecordHander:Laya.Handler):void{
            this.closeRecordHander = closeRecordHander;
        }
        /**
         * 隐藏投注记录
         */
        private CloseNoteRecord():void{  
            this.visible = false;
            this.closeRecordHander.run();
        }
        /**
         * 跳转至记录详情页面
         * @param data 投注详情数据
         */
        public GoNoteRecordDetail(data:any):void{
            Laya.Tween.to(this.recordBox,{x:-930},500,Laya.Ease.quadOut);
            //投注结果显示
            this.betResult.text = this.BetResult(data.total);
            //投注结果数据
            this.betResultData = data.gameData[data.gameData.length - 1];
            this.GetBetResultPokerData(this.betResultData);
            let dataArr:any = [];
            for(let i:number = 0;i < data.gameData.length - 1;i++){
                dataArr.push(data.gameData[i]);
            }
            this.GetBetRecordDetail(dataArr);
        }
        /**
         * 获得扑克牌结果数据
         * @param data 
         */
        private GetBetResultPokerData(data:any){
            let pokerData:any = JSON.parse(data.Data);
            this.poker1.skin = this.GetPokerUrl(pokerData.Cards.FirstCard);
            this.poker2.skin = this.GetPokerUrl(pokerData.Cards.SecondCard);
            this.poker3.skin = this.GetPokerUrl(pokerData.Cards.ThirdCard);
        }
        /**
         * 获取投注详情数据
         * @param data 投注详情数据
         */
        private GetBetRecordDetail(data: Array<any>): void {
            
            //添加list数据
            let index:number = data.length;
            for (let i: number = 0; i < index; i++) {
                let dto: any = {
                    betNum: { text: i+1 },
                    detail: JSON.parse(data[i].Data),
                }
                this.dataArr.push(dto);
            }      
            //实现list滚动
            this.betDetailList.vScrollBarSkin = ""; 
            //将this.arr数据赋值到列表数据源。
            this.betDetailList.dataSource = this.dataArr;
            //renderHandler:单元格渲染处理器(默认返回参数cell:Box,index:int)。
            this.betDetailList.renderHandler = new Laya.Handler(this, this.onRender);
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
            betTypeList.renderHandler = new Laya.Handler(this, (cell: Laya.Box, index: number)=>{
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
        private BackNoteRecordList():void{
            this.dataArr = [];
            this.betDetailList.dataSource = this.dataArr;
            Laya.Tween.to(this.recordBox,{x:0},500,Laya.Ease.quadOut);
        }
        /**
         * 投注结果
         * @param total 投注收益
         */
        private BetResult(total:number):string{
            if(total > 0){
                return "赢" + " + " + total;
            }
            else{
                return "输" + " - " + -total;
            }
        }
        /**
         * 获得扑克牌地址
         * @param type 牌类型
         */
        private GetPokerUrl(type: number): string {
            return `ui/poker/${type}.png`
        }
    }
}