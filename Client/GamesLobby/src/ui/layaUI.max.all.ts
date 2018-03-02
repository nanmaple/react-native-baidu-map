
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AccountListUI extends View {
		public accountList:Laya.List;
		public login:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"List","props":{"y":0,"x":0,"width":1334,"visible":false,"var":"accountList","spaceY":8,"repeatY":6,"height":750},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1334,"renderType":"render","height":72},"child":[{"type":"Label","props":{"y":0,"x":0,"width":1334,"valign":"middle","padding":"0,10,0,10","name":"item","mouseEnabled":true,"height":72,"fontSize":36,"color":"#338fff","borderColor":"#ddd","align":"left"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1334,"name":"agentBox","height":72},"child":[{"type":"Label","props":{"x":120,"width":220,"valign":"middle","text":"label","overflow":"hidden","name":"agent","height":72,"fontSize":32,"color":"#333","align":"left"}},{"type":"Label","props":{"x":20,"width":100,"valign":"middle","text":"代理：","overflow":"hidden","height":72,"fontSize":32,"color":"#008000","align":"left"}},{"type":"Label","props":{"y":0,"width":80,"valign":"middle","text":">","right":0,"overflow":"hidden","height":72,"fontSize":50,"font":"SimSun","color":"#ddd","align":"center"}}]}]}]}]},{"type":"Label","props":{"visible":true,"var":"login","text":"登录中...","fontSize":36,"color":"#008000","centerY":0,"centerX":0,"cacheAs":"bitmap","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
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

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1222},"child":[{"type":"List","props":{"y":0,"x":0,"width":750,"visible":false,"var":"accountList","spaceY":8,"repeatY":6,"height":1222},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"renderType":"render","height":72},"child":[{"type":"Label","props":{"y":0,"x":0,"width":750,"valign":"middle","padding":"0,10,0,10","name":"item","mouseEnabled":true,"height":72,"fontSize":36,"color":"#338fff","borderColor":"#ddd","align":"left"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":750,"name":"agentBox","height":72},"child":[{"type":"Label","props":{"x":120,"width":220,"valign":"middle","text":"label","overflow":"hidden","name":"agent","height":72,"fontSize":32,"color":"#333","align":"left"}},{"type":"Label","props":{"x":20,"width":100,"valign":"middle","text":"代理：","overflow":"hidden","height":72,"fontSize":32,"color":"#008000","align":"left"}},{"type":"Label","props":{"y":0,"width":80,"valign":"middle","text":">","right":0,"overflow":"hidden","height":72,"fontSize":50,"font":"SimSun","color":"#ddd","align":"center"}}]}]}]}]},{"type":"Label","props":{"visible":true,"var":"login","text":"登录中...","fontSize":36,"color":"#008000","centerY":0,"centerX":0,"cacheAs":"bitmap","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AccountList_VerUI.uiView);
        }
    }
}
