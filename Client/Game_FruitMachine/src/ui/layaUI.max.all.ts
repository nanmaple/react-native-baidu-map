
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

        public static  uiView:any ={"type":"View","props":{"y":0,"width":750,"height":160,"bottom":10},"child":[{"type":"Box","props":{"y":44,"x":653,"right":10},"child":[{"type":"Button","props":{"skin":"ui/bet_apple.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":561},"child":[{"type":"Button","props":{"skin":"ui/bet_orange.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":469},"child":[{"type":"Button","props":{"skin":"ui/bet_papaya.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":377},"child":[{"type":"Button","props":{"skin":"ui/bet_bell.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":286},"child":[{"type":"Button","props":{"skin":"ui/bet_watermelon.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":194},"child":[{"type":"Button","props":{"skin":"ui/bet_star.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":102},"child":[{"type":"Button","props":{"skin":"ui/bet_seven.png","stateNum":1,"name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Box","props":{"y":44,"x":10},"child":[{"type":"Button","props":{"stateNum":1,"skin":"ui/bet_bar.png","name":"betBtutton"}},{"type":"Image","props":{"y":78,"x":0,"skin":"ui/bet_numBox.png"},"child":[{"type":"Label","props":{"y":6,"x":14,"width":61,"valign":"middle","text":"0","name":"betNumber","height":20,"fontSize":20,"color":"#fff","align":"center"}}]}]},{"type":"Image","props":{"y":0,"x":10,"skin":"ui/bet_oddsBar.png","cacheAs":"bitmap"},"child":[{"type":"Label","props":{"y":6,"x":667,"text":"5","color":"#0ee400","width":40,"fontSize":20,"bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":575,"text":"10","color":"#dc3e00","width":40,"fontSize":20,"bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":483,"text":"15","width":40,"fontSize":20,"color":"#999","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":391,"width":40,"text":"20","fontSize":20,"color":"#999","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":299,"color":"#dc3e00","width":40,"text":"20","fontSize":20,"bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":207,"text":"30","width":40,"fontSize":20,"color":"#999","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":115,"text":"40","width":40,"fontSize":20,"color":"#999","bold":true,"align":"center"}},{"type":"Label","props":{"y":6,"x":23,"text":"120","color":"#dc3e00","width":40,"fontSize":20,"bold":true,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BetBarViewUI.uiView);

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
		public btnPay:Laya.Button;
		public btnRecord:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":400},"child":[{"type":"Button","props":{"y":37,"var":"balanceBox","stateNum":1,"skin":"ui/head_balance.png","right":15},"child":[{"type":"Label","props":{"y":5,"x":51,"width":124,"var":"balance","valign":"middle","text":"0","height":30,"fontSize":30,"color":"#4f7781","bold":false,"align":"center"}}]},{"type":"Image","props":{"skin":"ui/head_gain.png","left":242,"bottom":37},"child":[{"type":"Label","props":{"y":8,"x":43,"width":180,"var":"gain","valign":"middle","text":"0","height":30,"fontSize":30,"color":"#fff","bold":false,"align":"center"}},{"type":"Image","props":{"y":3,"x":0,"skin":"ui/head_gainLogo.png"}}]},{"type":"Image","props":{"y":15,"x":203,"skin":"ui/head_logo.png"}},{"type":"Button","props":{"y":15,"x":0,"var":"goHome","stateNum":1,"skin":"ui/head_home_1.png"},"child":[{"type":"Image","props":{"y":10,"x":16,"skin":"ui/head_home_2.png"},"child":[{"type":"Image","props":{"y":2,"x":2,"skin":"ui/head_home_3.png"}}]}]},{"type":"Button","props":{"y":115,"x":110,"var":"btnSound","stateNum":1,"skin":"ui/head_sound.png"}},{"type":"Button","props":{"y":115,"x":15,"var":"btnRule","stateNum":1,"skin":"ui/head_rule.png"}},{"type":"Button","props":{"y":115,"var":"btnPay","stateNum":1,"skin":"ui/head_pay.png","right":110}},{"type":"Button","props":{"y":115,"var":"btnRecord","stateNum":1,"skin":"ui/head_record.png","right":15}}]};
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
		public currentbet:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":400,"top":580,"left":175,"height":130},"child":[{"type":"Image","props":{"y":0,"x":167,"skin":"ui/mid_random.png"},"child":[{"type":"Label","props":{"y":15,"x":9,"width":48,"var":"random","valign":"middle","text":"0","height":30,"fontSize":30,"color":"#10ff9e","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":70,"x":22,"width":356,"skin":"ui/mid_bet.png"},"child":[{"type":"Label","props":{"y":16,"x":165,"width":120,"var":"curBet","valign":"middle","text":"0","height":25,"fontSize":25,"color":"#fff","align":"center"}},{"type":"Label","props":{"y":12,"x":20,"var":"currentbet","text":"当前投币：","fontSize":25,"font":"Microsoft YaHei","color":"#fff800","bold":true}}]}]};
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
		public start:Laya.Button;
		public small:Laya.Button;
		public big:Laya.Button;
		public clear:Laya.Button;
		public addAll:Laya.Button;
		public decrease:Laya.Button;
		public currChip:Laya.Label;
		public increase:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":750,"height":240,"bottom":185},"child":[{"type":"Button","props":{"y":0,"x":35,"var":"reduceChip","stateNum":1,"skin":"ui/btn_reduce.png"}},{"type":"Button","props":{"y":0,"x":155,"var":"addChip","stateNum":1,"skin":"ui/btn_add.png"}},{"type":"Button","props":{"y":0,"var":"start","stateNum":1,"skin":"ui/btn_start.png","right":23,"labelSize":40,"labelPadding":"0","labelFont":"SimHei","labelColors":"yellow","labelAlign":"center","label":"开始"}},{"type":"Button","props":{"y":0,"x":305,"var":"small","stateNum":1,"skin":"ui/btn_guess.png","labelSize":40,"labelPadding":"0","labelFont":"SimHei","labelColors":"#000","label":"1-7"}},{"type":"Button","props":{"y":0,"x":432,"var":"big","stateNum":1,"skin":"ui/btn_guess.png","labelSize":40,"labelPadding":"0","labelFont":"SimHei","labelColors":"#000","label":"8-14"}},{"type":"Image","props":{"y":128,"x":10,"skin":"ui/chip_bg.png"},"child":[{"type":"Button","props":{"y":9,"x":380,"var":"clear","stateNum":1,"skin":"ui/btn_addAll.png","labelSize":40,"labelPadding":"0","labelFont":"SimHei","labelColors":"#000","labelAlign":"center","label":"清除"}},{"type":"Button","props":{"y":9,"x":536,"var":"addAll","stateNum":1,"skin":"ui/btn_addAll.png","labelSize":30,"labelPadding":"0","labelFont":"SimHei","labelColors":"#000","labelAlign":"center","label":"全部+1"}},{"type":"Image","props":{"y":15,"x":83,"skin":"ui/chip_numBg.png"},"child":[{"type":"Button","props":{"y":7,"x":-20,"var":"decrease","stateNum":1,"skin":"ui/chip_btnAdd.png","scaleX":-1}},{"type":"Label","props":{"y":23,"x":17,"width":138,"var":"currChip","valign":"middle","height":30,"fontSize":30,"color":"#fff800","bold":false,"align":"center"}},{"type":"Button","props":{"y":7,"x":193,"var":"increase","stateNum":1,"skin":"ui/chip_btnAdd.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.OperateViewUI.uiView);

        }

    }
}

module ui {
    export class RouletteViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":856,"bottom":310},"child":[{"type":"Image","props":{"y":0,"x":8,"skin":"ui/content.png"},"child":[{"type":"Box","props":{"y":90,"x":93,"width":104,"height":104},"child":[{"type":"Image","props":{"y":-1,"x":1,"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":22,"x":27,"skin":"ui/icon_orange.png"}}]},{"type":"Box","props":{"y":39,"x":159,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":26,"x":21,"skin":"ui/icon_bell.png"}}]},{"type":"Box","props":{"y":8,"x":235,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":25,"x":31,"skin":"ui/icon_bar50.png"}}]},{"type":"Box","props":{"y":-3,"x":316,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":25,"x":31,"skin":"ui/icon_bar120.png"}}]},{"type":"Box","props":{"y":8,"x":398,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":25,"x":31,"skin":"ui/icon_bar20.png"}}]},{"type":"Box","props":{"y":39,"x":473,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":23,"x":29,"skin":"ui/icon_apple.png"}}]},{"type":"Box","props":{"y":89,"x":539,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":27,"x":20,"skin":"ui/icon_papaya.png"}}]},{"type":"Box","props":{"y":155,"x":588,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":24,"x":22,"skin":"ui/icon_watermelon.png"}}]},{"type":"Box","props":{"y":230,"x":620,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":23,"x":31,"skin":"ui/icon_sWatermelon.png"}}]},{"type":"Box","props":{"y":312,"x":631,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":15,"x":18,"skin":"ui/icon_blueLuck.png"}}]},{"type":"Box","props":{"y":393,"x":620,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":23,"x":29,"skin":"ui/icon_apple.png"}}]},{"type":"Box","props":{"y":469,"x":588,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":18,"x":33,"skin":"ui/icon_sOrange.png"}}]},{"type":"Box","props":{"y":534,"x":538,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":22,"x":27,"skin":"ui/icon_orange.png"}}]},{"type":"Box","props":{"y":584,"x":473,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":26,"x":21,"skin":"ui/icon_bell.png"}}]},{"type":"Box","props":{"y":616,"x":397,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":23,"x":29,"skin":"ui/icon_sSeven.png"}}]},{"type":"Box","props":{"y":626,"x":315,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":29,"x":22,"skin":"ui/icon_seven.png"}}]},{"type":"Box","props":{"y":616,"x":234,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":23,"x":29,"skin":"ui/icon_apple.png"}}]},{"type":"Box","props":{"y":584,"x":158,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":24,"x":26,"skin":"ui/icon_sPapaya.png"}}]},{"type":"Box","props":{"y":534,"x":93,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":27,"x":20,"skin":"ui/icon_papaya.png"}}]},{"type":"Box","props":{"y":469,"x":43,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":30,"x":22,"skin":"ui/icon_star.png"}}]},{"type":"Box","props":{"y":393,"x":12,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":25,"x":28,"skin":"ui/icon_sStar.png"}}]},{"type":"Box","props":{"y":311,"x":1,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":16,"x":19,"skin":"ui/icon_redLuck.png"}}]},{"type":"Box","props":{"y":230,"x":12,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":23,"x":29,"skin":"ui/icon_apple.png"}}]},{"type":"Box","props":{"y":154,"x":43,"width":104,"height":104},"child":[{"type":"Image","props":{"visible":false,"skin":"ui/Halo.png","name":"halo"}},{"type":"Image","props":{"y":22,"x":27,"skin":"ui/icon_sBell.png"}}]}]}]};
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
