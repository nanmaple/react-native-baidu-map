
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AlertViewUI extends View {
		public prompt:Laya.Image;
		public cancel:Laya.Label;
		public sure:Laya.Label;
		public txt:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334},"child":[{"type":"Image","props":{"y":667,"x":375,"width":567,"var":"prompt","skin":"ui/alert.png","height":328,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":771,"x":344,"wordWrap":true,"width":100,"var":"cancel","valign":"top","text":"取消","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":771,"wordWrap":true,"width":100,"var":"sure","valign":"top","text":"确定","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":-110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":100,"wordWrap":true,"width":500,"var":"txt","valign":"top","overflow":"scroll","height":150,"fontSize":32,"font":"Arial","color":"#000000","centerX":0,"align":"left"}},{"type":"Image","props":{"y":20,"x":479,"var":"close","skin":"ui/close.png"}}]}]}]};
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

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":118,"height":134},"child":[{"type":"Button","props":{"width":118,"var":"chip","stateNum":1,"skin":"ui/chip/btn_noselect.png","labelStrokeColor":"#b04400","labelStroke":3,"labelSize":40,"labelFont":"Arial","labelColors":"#fbfffb","labelBold":true,"label":"0","height":134,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
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
		public defender:Laya.Box;
		public football:Laya.Animation;
		public player:Laya.Animation;
		public propBox:Laya.Box;
		public goalkeeper:Laya.Animation;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Box","props":{"y":310,"x":135,"width":480,"var":"goal","height":190}},{"type":"Box","props":{"y":555,"x":135,"width":480,"var":"defender","height":225,"centerY":0,"centerX":0}},{"type":"Animation","props":{"y":930,"x":375,"var":"football","source":"FootballAni.ani"}},{"type":"Animation","props":{"y":690,"x":50,"var":"player","source":"PlayerAni.ani"}},{"type":"Box","props":{"var":"propBox","top":260}},{"type":"Animation","props":{"y":430,"x":375,"var":"goalkeeper","source":"GoalkeeperAni.ani"}}]};
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
		public btn_left:Laya.Image;
		public btn_right:Laya.Image;
		public chipPanel:Laya.Panel;
		public chipBox:Laya.Box;
		public btn_max:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":350,"bottom":0},"child":[{"type":"Button","props":{"x":520,"var":"btn_shoor","stateNum":1,"skin":"ui/chip/btn_shoor.png","bottom":170}},{"type":"Image","props":{"y":130,"x":170,"width":300,"skin":"ui/chip/total_bg.png","sizeGrid":"15,30,15,22","height":50},"child":[{"type":"Label","props":{"x":0,"width":100,"var":"total","valign":"middle","text":"总投:","overflow":"scroll","height":50,"fontSize":30,"color":"#ffffff","centerY":0,"align":"center"}},{"type":"Label","props":{"x":100,"width":200,"var":"money","valign":"middle","text":"0","height":50,"fontSize":30,"color":"#ffffff","centerY":0,"align":"left"}}]},{"type":"Image","props":{"width":750,"var":"chipBg","left":0,"height":150,"bottom":0},"child":[{"type":"Image","props":{"var":"btn_left","skin":"ui/chip/btn_left.png","left":10,"centerY":0}},{"type":"Image","props":{"var":"btn_right","skin":"ui/chip/btn_right.png","right":150,"centerY":0}},{"type":"Panel","props":{"x":55,"width":512,"var":"chipPanel","height":134,"centerY":0},"child":[{"type":"Box","props":{"x":0,"width":0,"var":"chipBox","height":134,"centerY":0}}]},{"type":"Button","props":{"var":"btn_max","stateNum":1,"skin":"ui/chip/btn_max.png","right":20,"labelSize":40,"labelFont":"SimSun","labelColors":"#333","labelBold":true,"label":"最大","centerY":0}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameChipsViewUI.uiView);

        }

    }
}

module ui {
    export class GameHeadViewUI extends View {
		public voice:Laya.Image;
		public head_bg:Laya.Image;
		public home:Laya.Image;
		public balance:Laya.Label;
		public title:Laya.Image;
		public record:Laya.Image;
		public rule:Laya.Image;
		public recharge:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":5,"left":0,"height":200},"child":[{"type":"Image","props":{"var":"voice","skin":"ui/header/voice_open.png","left":120,"bottom":0}},{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"head_bg","skin":"ui/header/head_bg.png","height":75},"child":[{"type":"Image","props":{"width":55,"var":"home","skin":"ui/header/home_bg.png","left":30,"height":55,"centerY":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":55,"skin":"ui/header/home.png","height":55}}]},{"type":"Image","props":{"x":556,"skin":"ui/header/balance.png","centerY":0},"child":[{"type":"Label","props":{"y":0,"x":50,"width":125,"var":"balance","valign":"middle","text":"0","height":40,"fontSize":30,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":-5,"var":"title","skin":"ui/header/head_tit.png","centerX":0}}]},{"type":"Image","props":{"var":"record","skin":"ui/header/record.png","right":20,"bottom":0}},{"type":"Image","props":{"var":"rule","skin":"ui/header/rule.png","left":20,"bottom":0}},{"type":"Image","props":{"var":"recharge","skin":"ui/header/recharge.png","right":120,"bottom":0}}]};
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
    export class GameResAlertViewUI extends View {
		public prompt:Laya.Image;
		public result:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334}},{"type":"Image","props":{"var":"prompt","skin":"ui/successTip.png","centerY":0,"centerX":0}},{"type":"Label","props":{"y":710,"width":750,"var":"result","valign":"middle","text":"0","strokeColor":"#734b26","stroke":5,"height":100,"fontSize":40,"font":"Arial","color":"#ffcc00","centerX":0,"bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameResAlertViewUI.uiView);

        }

    }
}

module ui {
    export class GameRuleViewUI extends View {
		public prompt:Laya.Image;
		public close:Laya.Image;
		public title:Laya.Image;
		public previous:Laya.Image;
		public next:Laya.Image;
		public rulePanel:Laya.Panel;
		public ruleBox:Laya.Box;
		public ruleImg_1:Laya.Image;
		public ruleImg_2:Laya.Image;
		public ruleImg_3:Laya.Image;
		public ruleImg_4:Laya.Image;
		public rule_1:Laya.Label;
		public rule_2:Laya.Label;
		public rule_3:Laya.Label;
		public rule_4:Laya.Label;
		public ruleTotal:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334}},{"type":"Image","props":{"width":560,"var":"prompt","skin":"ui/rule/rule_bg.png","height":800,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"width":60,"var":"close","top":-25,"skin":"ui/rule/btn_close.png","right":-25,"height":60,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":-5,"width":205,"var":"title","skin":"ui/rule/rule_title.png","height":55,"centerX":0}},{"type":"Image","props":{"width":15,"var":"previous","skin":"ui/rule/btn_select.png","height":15,"centerX":-15,"bottom":15}},{"type":"Image","props":{"width":15,"var":"next","skin":"ui/rule/btn_noselect.png","height":15,"centerX":15,"bottom":15}},{"type":"Panel","props":{"y":70,"x":0,"width":560,"var":"rulePanel","height":690},"child":[{"type":"Box","props":{"x":0,"width":1120,"var":"ruleBox","height":690},"child":[{"type":"Box","props":{"y":0,"x":0,"width":560,"height":690},"child":[{"type":"Image","props":{"y":70,"width":400,"var":"ruleImg_1","skin":"ui/rule/ruleImg_1.png","height":105,"centerX":0}},{"type":"Image","props":{"y":260,"width":305,"var":"ruleImg_2","skin":"ui/rule/ruleImg_2.png","height":75,"centerX":0}},{"type":"Image","props":{"y":420,"width":215,"var":"ruleImg_3","skin":"ui/rule/ruleImg_3.png","height":125,"centerX":0}},{"type":"Image","props":{"y":615,"width":112,"var":"ruleImg_4","skin":"ui/rule/ruleImg_4.png","height":70,"centerX":0}},{"type":"Image","props":{"y":0,"width":500,"skin":"ui/chip/total_bg.png","sizeGrid":"13,34,18,34","height":70,"centerX":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":500,"var":"rule_1","valign":"middle","padding":"10,10,10,10","overflow":"scroll","leading":5,"height":70,"fontSize":20,"color":"#ffffff","align":"left"}}]},{"type":"Image","props":{"y":180,"width":500,"skin":"ui/chip/total_bg.png","sizeGrid":"13,34,18,34","height":70,"centerX":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":500,"var":"rule_2","valign":"middle","padding":"10,10,10,10","overflow":"scroll","leading":5,"height":70,"fontSize":20,"color":"#ffffff","align":"left"}}]},{"type":"Image","props":{"y":342,"width":500,"skin":"ui/chip/total_bg.png","sizeGrid":"13,34,18,34","height":70,"centerX":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":500,"var":"rule_3","valign":"middle","padding":"10,10,10,10","overflow":"scroll","leading":5,"height":70,"fontSize":20,"color":"#ffffff","align":"left"}}]},{"type":"Image","props":{"y":555,"width":500,"skin":"ui/chip/total_bg.png","sizeGrid":"13,34,18,34","height":50,"centerX":0},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":500,"var":"rule_4","valign":"middle","padding":"10,10,10,10","overflow":"scroll","leading":5,"height":50,"fontSize":20,"color":"#ffffff","align":"left"}}]}]},{"type":"Box","props":{"y":0,"x":560,"width":560,"height":690},"child":[{"type":"Image","props":{"y":0,"width":500,"skin":"ui/chip/total_bg.png","sizeGrid":"13,34,18,34","height":690,"centerX":0},"child":[{"type":"Label","props":{"wordWrap":true,"width":480,"var":"ruleTotal","valign":"middle","padding":"10,10,10,10","overflow":"scroll","leading":5,"height":670,"fontSize":20,"color":"#fff","centerY":0,"centerX":0,"align":"left"}}]}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameRuleViewUI.uiView);

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

        public static  uiView:any ={"type":"View","props":{"width":120,"height":110},"child":[{"type":"Animation","props":{"y":0,"x":20,"var":"prop","source":"PropAni.ani"}},{"type":"Image","props":{"y":130,"width":120,"skin":"ui/prop/coin_bg.png","name":"iconBg","height":27,"centerX":0,"bottom":0}},{"type":"Image","props":{"y":130,"x":10,"visible":false,"var":"select","skin":"ui/prop/select.png","left":40,"bottom":30}},{"type":"Label","props":{"y":130,"x":10,"var":"money","valign":"middle","text":"0","fontSize":20,"color":"#ffffff","centerX":0,"bottom":5,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PropBtnViewUI.uiView);

        }

    }
}
