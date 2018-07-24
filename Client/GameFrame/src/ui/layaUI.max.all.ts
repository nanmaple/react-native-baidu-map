
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AlertViewUI extends View {
		public prompt:Laya.Image;
		public cancel:Laya.Label;
		public sure:Laya.Label;
		public txt:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334},"child":[{"type":"Image","props":{"y":667,"x":375,"width":567,"var":"prompt","skin":"ui/alert.png","height":328,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":771,"x":344,"wordWrap":true,"width":100,"var":"cancel","valign":"top","text":"取消","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":771,"wordWrap":true,"width":100,"var":"sure","valign":"top","text":"确定","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":-110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":100,"wordWrap":true,"width":500,"var":"txt","valign":"top","overflow":"scroll","height":150,"fontSize":32,"font":"Arial","color":"#000000","centerX":0,"align":"left"}},{"type":"Image","props":{"var":"close","top":-25,"skin":"ui/close.png","right":-25}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AlertViewUI.uiView);

        }

    }
}

module ui {
    export class BetBtnUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":200,"height":70},"child":[{"type":"Label","props":{"width":60,"valign":"middle","text":"label","name":"betName","left":20,"height":40,"fontSize":28,"color":"#faf114","centerY":0,"align":"center"}},{"type":"Label","props":{"width":60,"valign":"middle","text":"---","right":20,"name":"betOdd","height":40,"fontSize":28,"color":"#f6e03b","centerY":0,"align":"center"}},{"type":"Button","props":{"y":-2,"stateNum":1,"skin":"ui/btn_chip.png","name":"betBtn","left":20,"label":"1","centerY":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BetBtnUI.uiView);

        }

    }
}

module ui {
    export class GameBgViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/bg.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameBgViewUI.uiView);

        }

    }
}

module ui {
    export class GameLoadViewUI extends View {
		public progressLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"width":750,"skin":"ui/maskBg.png","height":1334,"centerY":0,"centerX":0}},{"type":"Label","props":{"y":667,"x":375,"visible":true,"var":"progressLabel","text":"0%","fontSize":35,"color":"#ffffff","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoadViewUI.uiView);

        }

    }
}

module ui {
    export class GameRecordViewUI extends View {
		public prompt:Laya.Image;
		public close:Laya.Image;
		public title:Laya.Image;
		public panelList:Laya.Panel;
		public num_tit:Laya.Label;
		public reward_tit:Laya.Label;
		public time_tit:Laya.Label;
		public recordList:Laya.List;
		public noRecord:Laya.Label;
		public isLoading:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334},"child":[{"type":"Image","props":{"y":667,"x":375,"width":558,"var":"prompt","skin":"ui/record.png","height":797,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-25,"x":522,"var":"close","top":-25,"skin":"ui/close.png","right":-25}},{"type":"Image","props":{"y":-5,"var":"title","skin":"ui/record_tit.png","centerX":0}},{"type":"Panel","props":{"y":69,"x":12,"width":500,"var":"panelList","height":680,"centerX":0},"child":[{"type":"Box","props":{"width":500,"height":60},"child":[{"type":"Label","props":{"y":0,"width":150,"var":"num_tit","valign":"middle","text":"序号","left":0,"height":60,"fontSize":30,"color":"#fecc05","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":150,"width":200,"var":"reward_tit","valign":"middle","text":"获得奖励","height":60,"fontSize":30,"color":"#fecc05","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"width":150,"var":"time_tit","valign":"middle","text":"时间","right":0,"height":60,"fontSize":30,"color":"#fecc05","bold":true,"align":"center"}}]},{"type":"List","props":{"y":60,"x":0,"width":500,"var":"recordList","spaceY":5,"repeatY":10,"height":620},"child":[{"type":"Box","props":{"width":500,"renderType":"render","height":55,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/recordlist.png","sizeGrid":"20,20,20,20","name":"listBg","height":55}},{"type":"Label","props":{"y":0,"width":150,"valign":"middle","text":"1","name":"num","left":0,"height":55,"fontSize":25,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":0,"width":200,"valign":"middle","text":"100","name":"reward","height":55,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":5,"width":150,"valign":"middle","text":"2018-01-16","right":0,"name":"date","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":30,"width":150,"valign":"middle","text":"18:25:25","right":0,"name":"time","height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Label","props":{"width":500,"var":"noRecord","valign":"middle","text":"暂无数据","height":50,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}},{"type":"Label","props":{"width":500,"var":"isLoading","valign":"middle","text":"正在加载...","height":50,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameRecordViewUI.uiView);

        }

    }
}

module ui {
    export class LoadingViewUI extends View {
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334}},{"type":"Label","props":{"width":242.798828125,"visible":true,"var":"txt","strokeColor":"#d00400","stroke":5,"height":28,"fontSize":28,"color":"#fbff70","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingViewUI.uiView);

        }

    }
}
