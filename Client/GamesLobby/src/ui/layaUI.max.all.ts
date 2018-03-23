
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AccountListUI extends View {
		public accountList:Laya.List;
		public login:Laya.Label;
		public title:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"List","props":{"y":70,"x":0,"width":1334,"visible":false,"var":"accountList","spaceY":5,"repeatY":6,"height":680},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1334,"renderType":"render","name":"list","height":70},"child":[{"type":"Label","props":{"y":0,"x":20,"width":200,"valign":"middle","text":"Recommender:","overflow":"hidden","name":"label","height":70,"fontSize":26,"font":"Arial","color":"#008000","bold":true,"align":"left"}},{"type":"Label","props":{"y":0,"x":220,"width":300,"valign":"middle","text":"label","overflow":"hidden","name":"agent","height":70,"fontSize":26,"font":"Arial","color":"#333","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"width":1334,"valign":"middle","padding":"0,10,0,10","name":"item","mouseEnabled":true,"height":70,"fontSize":36,"borderColor":"#eee","align":"left"}},{"type":"Image","props":{"y":22,"x":1299,"width":15,"skin":"go.png","right":20,"height":26}}]}]},{"type":"Label","props":{"visible":true,"var":"login","text":"登录中...","fontSize":30,"color":"#008000","centerY":0,"centerX":0,"cacheAs":"bitmap","bold":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":0,"x":0,"width":1334,"visible":false,"var":"title","valign":"middle","text":"请选择推荐人","padding":"0,10,0,10","mouseEnabled":true,"height":70,"fontSize":26,"font":"Arial","color":"#008000","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AccountListUI.uiView);

        }

    }
}

module ui {
    export class AccountList_VerUI extends View {
		public accountList:Laya.List;
		public login:Laya.Label;
		public title:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1222},"child":[{"type":"List","props":{"y":70,"x":0,"width":750,"visible":false,"var":"accountList","spaceY":5,"repeatY":6,"height":1152},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"renderType":"render","name":"list","height":70},"child":[{"type":"Label","props":{"y":0,"x":0,"width":750,"valign":"middle","padding":"0,10,0,10","name":"item","mouseEnabled":true,"height":70,"fontSize":36,"borderColor":"#eee","align":"left"}},{"type":"Label","props":{"y":0,"x":120,"width":300,"valign":"middle","text":"label","overflow":"hidden","name":"agent","height":70,"fontSize":26,"font":"Arial","color":"#333","align":"left"}},{"type":"Label","props":{"y":0,"x":20,"width":100,"valign":"middle","text":"推荐人:","overflow":"hidden","name":"label","height":70,"fontSize":26,"font":"Arial","color":"#008000","bold":true,"align":"left"}},{"type":"Image","props":{"y":22,"x":715,"width":15,"skin":"go.png","right":20,"height":26}}]}]},{"type":"Label","props":{"visible":true,"var":"login","text":"登录中...","fontSize":30,"color":"#008000","centerY":0,"centerX":0,"cacheAs":"bitmap","bold":false,"anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":0,"x":0,"width":750,"visible":false,"var":"title","valign":"middle","text":"请选择推荐人","padding":"0,10,0,10","mouseEnabled":true,"height":70,"fontSize":26,"font":"Arial","color":"#008000","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AccountList_VerUI.uiView);

        }

    }
}
