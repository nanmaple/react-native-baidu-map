
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AlertViewUI extends View {
		public prompt:Laya.Image;
		public cancel:Laya.Label;
		public sure:Laya.Label;
		public txt:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334},"child":[{"type":"Image","props":{"y":667,"x":375,"width":567,"var":"prompt","skin":"ui/prompt.png","height":328,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":771,"x":344,"wordWrap":true,"width":100,"var":"cancel","valign":"top","text":"取消","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":771,"wordWrap":true,"width":100,"var":"sure","valign":"top","text":"确定","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":-110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":100,"wordWrap":true,"width":500,"var":"txt","valign":"top","overflow":"scroll","height":150,"fontSize":32,"font":"Arial","color":"#000000","centerX":0,"align":"left"}},{"type":"Image","props":{"y":20,"x":479,"var":"close","skin":"ui/close.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AlertViewUI.uiView);

        }

    }
}

module ui {
    export class ChipBtnViewUI extends View {
		public chip:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":106,"height":122},"child":[{"type":"Button","props":{"width":106,"var":"chip","stateNum":1,"skin":"ui/chip/btn_noselect.png","labelSize":30,"labelColors":"#fff","label":"0","height":122,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ChipBtnViewUI.uiView);

        }

    }
}

module ui {
    export class GameAniViewUI extends View {
		public goal:Laya.Box;
		public goalkeeper:Laya.Animation;
		public defender:Laya.Box;
		public football:Laya.Animation;
		public player:Laya.Animation;
		public propBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":310,"x":135,"width":480,"var":"goal","height":190}},{"type":"Animation","props":{"y":330,"x":320,"width":100,"var":"goalkeeper","source":"GoalkeeperAni.ani","height":200,"autoAnimation":"guard_wait"}},{"type":"Box","props":{"y":555,"x":135,"width":480,"var":"defender","height":225,"centerY":0,"centerX":0}},{"type":"Animation","props":{"y":925,"x":375,"var":"football","source":"FootballAni.ani"}},{"type":"Animation","props":{"y":690,"x":50,"var":"player","source":"PlayerAni.ani"}},{"type":"Box","props":{"var":"propBox","top":260}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameAniViewUI.uiView);

        }

    }
}

module ui {
    export class GameBgViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/bg.jpg"}},{"type":"Box","props":{"y":290,"x":115,"width":520,"height":230}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameBgViewUI.uiView);

        }

    }
}

module ui {
    export class GameChipsViewUI extends View {
		public btn_shoor:Laya.Button;
		public total:Laya.Label;
		public money:Laya.Label;
		public chipBg:Laya.Image;
		public btn_max:Laya.Image;
		public btn_left:Laya.Image;
		public btn_right:Laya.Image;
		public chipPanel:Laya.Panel;
		public chipBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":350,"bottom":0},"child":[{"type":"Button","props":{"y":30,"x":520,"var":"btn_shoor","stateNum":1,"skin":"ui/chip/btn_shoor.png"}},{"type":"Image","props":{"y":100,"x":20,"width":400,"skin":"ui/coin_bg.png","height":40},"child":[{"type":"Label","props":{"x":70,"width":100,"var":"total","valign":"middle","text":"总投:","fontSize":30,"color":"#ffffff","centerY":0,"align":"center"}},{"type":"Label","props":{"x":170,"width":200,"var":"money","text":"0","fontSize":30,"color":"#ffffff","centerY":0}}]},{"type":"Image","props":{"y":150,"x":0,"width":750,"var":"chipBg","skin":"ui/maskBg.png","left":0,"height":200,"bottom":0},"child":[{"type":"Image","props":{"var":"btn_max","skin":"ui/chip/btn_max.png","right":70,"centerY":0}},{"type":"Image","props":{"y":-10,"var":"btn_left","skin":"ui/chip/btn_left.png","left":10,"centerY":0}},{"type":"Image","props":{"var":"btn_right","skin":"ui/chip/btn_right.png","right":10,"centerY":0}},{"type":"Panel","props":{"x":70,"width":464,"var":"chipPanel","height":130,"centerY":0},"child":[{"type":"Box","props":{"x":0,"width":0,"var":"chipBox","height":122,"centerY":0}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameChipsViewUI.uiView);

        }

    }
}

module ui {
    export class GameHeadViewUI extends View {
		public balance:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":0,"left":0,"height":80},"child":[{"type":"Label","props":{"width":200,"var":"balance","text":"0","right":20,"fontSize":30,"color":"#ffffff","centerY":0,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameHeadViewUI.uiView);

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

module ui {
    export class PropBtnViewUI extends View {
		public prop:Laya.Animation;
		public select:Laya.Image;
		public money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":120,"height":110},"child":[{"type":"Animation","props":{"y":0,"x":20,"var":"prop","source":"PropAni.ani","autoAnimation":"bomb_wait"}},{"type":"Image","props":{"y":130,"width":120,"skin":"ui/coin_bg.png","name":"iconBg","height":27,"centerX":0,"bottom":0}},{"type":"Image","props":{"y":130,"x":10,"visible":false,"var":"select","skin":"ui/prop/select.png","left":40,"bottom":30}},{"type":"Label","props":{"y":130,"x":10,"var":"money","valign":"middle","text":"0","fontSize":20,"color":"#ffffff","centerX":0,"bottom":5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PropBtnViewUI.uiView);

        }

    }
}
