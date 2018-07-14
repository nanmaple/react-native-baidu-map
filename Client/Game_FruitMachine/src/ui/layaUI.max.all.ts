
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
    export class BetBarViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"top":1128,"height":200},"child":[{"type":"Box","props":{"y":54,"x":637,"right":20,"width":93,"height":123},"child":[{"type":"Button","props":{"x":0,"skin":"ui/bet_apple.png","name":"betBtutton","y":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":65,"x":549,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_orange.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":71,"x":461,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_papaya.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":76,"x":373,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_bell.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":76,"x":284,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_watermelon.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":71,"x":196,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_star.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":65,"x":108,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_seven.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Box","props":{"y":54,"x":20,"width":93,"height":123},"child":[{"type":"Button","props":{"skin":"ui/bet_bar.png","name":"betBtutton","y":0,"x":0,"width":93,"stateNum":1,"height":83}},{"type":"Image","props":{"y":83,"x":11,"width":70,"skin":"ui/bet_numBox.png","height":40},"child":[{"type":"Text","props":{"name":"betNumber","y":10,"x":35,"width":70,"valign":"middle","text":"0","pivotX":35,"fontSize":20,"color":"#e8110d","bold":true,"align":"center"}}]}]},{"type":"Image","props":{"y":0,"x":20,"width":710,"skin":"ui/bet_oddsBar.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.BetBarViewUI.uiView);

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
    export class ChipViewUI extends View {
		public btnleft:Laya.Button;
		public leftLable:Laya.Label;
		public btnright:Laya.Button;
		public rightLable:Laya.Label;
		public reduce:Laya.Button;
		public currChip:Laya.Label;
		public improve:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"top":958,"height":190},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/chip_bg.png"},"child":[{"type":"Button","props":{"y":47,"x":110,"width":147,"var":"btnleft","stateNum":1,"skin":"ui/chip_btn1000.png","height":68},"child":[{"type":"Label","props":{"y":21,"x":49,"width":82,"var":"leftLable","height":25,"fontSize":25,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":47,"x":276,"width":147,"var":"btnright","stateNum":1,"skin":"ui/chip_btn10000.png","height":68},"child":[{"type":"Label","props":{"y":21,"x":49,"width":82,"var":"rightLable","height":25,"fontSize":25,"color":"#ffffff","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":45,"x":452,"width":198,"height":71},"child":[{"type":"Button","props":{"y":20,"x":0,"width":30,"var":"reduce","stateNum":1,"skin":"ui/chip_btnReduce.png","height":30}},{"type":"Label","props":{"y":25,"x":30,"width":138,"var":"currChip","valign":"middle","text":"100","fontSize":20,"color":"#6b11cc","bold":true,"align":"center"}},{"type":"Button","props":{"y":20,"x":168,"width":30,"var":"improve","stateNum":1,"skin":"ui/chip_btnAdd.png","right":0,"height":30}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ChipViewUI.uiView);

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
    export class HeadViewUI extends View {
		public balanceBox:Laya.Button;
		public balance:Laya.Label;
		public gain:Laya.Label;
		public goHome:Laya.Button;
		public btnSound:Laya.Button;
		public btnRule:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":180},"child":[{"type":"Button","props":{"y":114,"x":365,"var":"balanceBox","stateNum":1,"skin":"ui/head_balance.png","right":50,"bottom":0},"child":[{"type":"Label","props":{"y":18,"x":14,"width":321,"var":"balance","valign":"middle","text":"0","height":30,"fontSize":30,"color":"#fff","bold":true,"align":"center"}}]},{"type":"Image","props":{"skin":"ui/head_gain.png","left":50,"bottom":0},"child":[{"type":"Label","props":{"y":19,"x":15,"width":265,"var":"gain","valign":"middle","text":"0","height":30,"fontSize":30,"color":"#fff","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":29,"x":202,"skin":"ui/head_logo.png"}},{"type":"Button","props":{"y":16,"x":116,"var":"goHome","stateNum":1,"skin":"ui/head_home.png"}},{"type":"Button","props":{"y":38,"x":571,"var":"btnSound","stateNum":1,"skin":"ui/head_sound.png"}},{"type":"Button","props":{"y":33,"x":652,"var":"btnRule","stateNum":1,"skin":"ui/head_rule.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HeadViewUI.uiView);

        }

    }
}

module ui {
    export class InternalViewUI extends View {
		public random:Laya.Label;
		public curBet:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":400,"top":250,"left":175,"height":400},"child":[{"type":"Image","props":{"y":165,"x":165,"skin":"ui/mid_random.png"},"child":[{"type":"Label","props":{"y":19,"x":10,"width":48,"var":"random","valign":"middle","text":"00","height":30,"fontSize":30,"color":"#0aea0a","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":295,"x":22,"width":356,"skin":"ui/mid_bet.png","height":46},"child":[{"type":"Label","props":{"y":13,"x":128,"width":100,"var":"curBet","valign":"middle","text":"0","height":20,"fontSize":20,"color":"#fff","bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.InternalViewUI.uiView);

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
    export class OperateViewUI extends View {
		public reduceChip:Laya.Button;
		public addChip:Laya.Button;
		public clearOrSmall:Laya.Button;
		public addAllOrBig:Laya.Button;
		public startOrGather:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":750,"top":878,"height":100},"child":[{"type":"Button","props":{"y":0,"x":50,"var":"reduceChip","stateNum":1,"skin":"ui/btn_reduce.png","disabled":true}},{"type":"Button","props":{"y":0,"x":160,"var":"addChip","stateNum":1,"skin":"ui/btn_add.png","disabled":true}},{"type":"Button","props":{"y":0,"x":270,"var":"clearOrSmall","stateNum":1,"skin":"ui/btn_clear.png"}},{"type":"Button","props":{"y":0,"x":375,"var":"addAllOrBig","stateNum":1,"skin":"ui/btn_addAll.png"}},{"type":"Button","props":{"y":0,"var":"startOrGather","stateNum":1,"skin":"ui/btn_start.png","right":50}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.OperateViewUI.uiView);

        }

    }
}

module ui {
    export class RandomNumViewUI extends View {
		public number:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":48,"top":500,"left":351,"height":27},"child":[{"type":"Label","props":{"width":48,"var":"number","valign":"middle","text":"01","height":27,"fontSize":20,"color":"#0aea0a","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RandomNumViewUI.uiView);

        }

    }
}

module ui {
    export class RouletteViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"top":100,"height":822},"child":[{"type":"Image","props":{"skin":"ui/content.png"},"child":[{"type":"Image","props":{"y":81,"x":42,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"skin":"ui/icon_orange.png","y":18,"x":23}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":81,"x":137,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":22,"x":17,"skin":"ui/icon_bell.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":81,"x":232,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":22,"x":25,"skin":"ui/icon_bar50.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":81,"x":328,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":22,"x":23,"skin":"ui/icon_bar120.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":81,"x":423,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":21,"x":25,"skin":"ui/icon_bar25.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":81,"x":518,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":24,"skin":"ui/icon_apple.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":81,"x":613,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":27,"x":16,"skin":"ui/icon_papaya.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":177,"x":613,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":18,"skin":"ui/icon_watermelon.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":273,"x":613,"width":95,"height":95,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":26,"skin":"ui/icon_sWatermelon.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":368,"x":613,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":14,"x":14,"skin":"ui/icon_blueLuck.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":464,"x":613,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":24,"skin":"ui/icon_apple.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":560,"x":613,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":12,"x":28,"skin":"ui/icon_sOrange.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":613,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"skin":"ui/icon_orange.png","y":18,"x":23}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":518,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":22,"x":17,"skin":"ui/icon_bell.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":423,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":25,"skin":"ui/icon_s77.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":328,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":24,"x":18,"skin":"ui/icon_seven.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":232,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":24,"skin":"ui/icon_apple.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":137,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":20,"x":22,"skin":"ui/icon_sPapaya.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":656,"x":42,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":27,"x":16,"skin":"ui/icon_papaya.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":560,"x":42,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":26,"x":17,"skin":"ui/icon_star.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":464,"x":42,"width":95,"height":95,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":21,"x":24,"skin":"ui/icon_sStar.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":368,"x":42,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":16,"x":15,"skin":"ui/icon_redLuck.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":273,"x":42,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":24,"skin":"ui/icon_apple.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]},{"type":"Image","props":{"y":177,"x":42,"skin":"ui/icon_bg.png"},"child":[{"type":"Image","props":{"y":19,"x":23,"skin":"ui/icon_sBell.png"}},{"type":"Animation","props":{"width":95,"visible":false,"source":"Halo.ani","name":"animated","height":95}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RouletteViewUI.uiView);

        }

    }
}

module ui {
    export class RuleViewUI extends View {
		public ruleBox:Laya.Box;
		public btnClose:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"visible":false,"height":1334},"child":[{"type":"Image","props":{"width":750,"skin":"ui/maskBg.png","height":1334}},{"type":"Box","props":{"y":666,"x":375,"width":714,"var":"ruleBox","height":1163,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"ui/rule_bg.png"}},{"type":"Button","props":{"y":48,"x":614,"width":84,"var":"btnClose","stateNum":1,"skin":"ui/btn_close.png","height":84}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RuleViewUI.uiView);

        }

    }
}
