
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AccountListUI extends View {
		public accountList:Laya.List;
		public login:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"List","props":{"y":151,"x":331,"width":672,"visible":false,"var":"accountList","repeatY":6,"height":433},"child":[{"type":"Box","props":{"y":0,"x":0,"width":672,"renderType":"render","height":72},"child":[{"type":"Label","props":{"y":0,"x":1,"width":670,"valign":"middle","padding":"0,10,0,10","name":"item","mouseEnabled":true,"height":72,"fontSize":36,"color":"#338fff","borderColor":"#fff45c","align":"left"},"child":[{"type":"Box","props":{"y":0,"x":10,"width":320,"name":"accountBox","height":72},"child":[{"type":"Label","props":{"y":0,"x":100,"width":220,"valign":"middle","text":"label","overflow":"hidden","name":"account","height":72,"fontSize":32,"color":"#338fff","align":"left"}},{"type":"Label","props":{"y":0,"x":0,"width":100,"valign":"middle","text":"账号：","overflow":"hidden","height":72,"fontSize":32,"color":"#338fff","align":"left"}}]},{"type":"Box","props":{"y":0,"x":340,"name":"agentBox"},"child":[{"type":"Label","props":{"x":100,"width":220,"valign":"middle","text":"label","overflow":"hidden","name":"agent","height":72,"fontSize":32,"color":"#338fff","align":"left"}},{"type":"Label","props":{"width":100,"valign":"middle","text":"代理：","overflow":"hidden","height":72,"fontSize":32,"color":"#338fff","align":"left"}}]}]}]}]},{"type":"Label","props":{"y":375,"x":667,"visible":true,"var":"login","text":"登录中...","fontSize":36,"color":"#338fff","cacheAs":"bitmap","bold":true,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AccountListUI.uiView);

        }

    }
}
