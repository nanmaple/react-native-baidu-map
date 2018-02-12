
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BetPanelUI extends View {
		public BetBox:Laya.Image;
		public MsgPanel:Laya.Label;
		public Chips:Laya.Image;
		public minBetLabel:Laya.Label;
		public maxBetLabel:Laya.Label;
		public CancleBetBtn:Laya.Image;
		public ConfirmBetBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"height":750},"child":[{"type":"Image","props":{"width":1335,"var":"BetBox","skin":"ui/bg_bet.png","height":252,"centerX":0,"bottom":0},"child":[{"type":"Box","props":{"y":22,"x":627,"width":133,"visible":true,"name":"IN","height":130},"child":[{"type":"Label","props":{"y":20,"x":36,"width":60,"valign":"middle","text":"射进","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":36,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":66,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":22,"x":281,"width":346,"name":"OUT","height":65},"child":[{"type":"Label","props":{"y":12,"x":95,"width":60,"valign":"middle","text":"射偏","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":12,"x":175,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":120,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":22,"x":761,"width":346,"name":"HIT","height":65},"child":[{"type":"Label","props":{"y":12,"x":95,"width":60,"valign":"middle","text":"撞柱","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":12,"x":175,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":120,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":156,"x":556,"width":132,"name":"BIG","height":95},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"大:","height":40,"fontSize":24,"color":"#ffbf66","centerX":0,"align":"center"}},{"type":"Label","props":{"y":50,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#ffbf66","centerX":0,"align":"center"}},{"type":"Button","props":{"y":47,"x":66,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":156,"x":692,"width":132,"name":"SMALL","height":95},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"小:","height":40,"fontSize":24,"color":"#66fcff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":50,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#66fcff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":47,"x":66,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":156,"x":832,"width":132,"name":"ODD","height":95},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"单:","height":40,"fontSize":24,"color":"#ffbf66","centerX":0,"align":"center"}},{"type":"Label","props":{"y":50,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#ffbf66","centerX":0,"align":"center"}},{"type":"Button","props":{"y":47,"x":66,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":156,"x":968,"width":148,"name":"EVEN","height":95},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"双:","height":40,"fontSize":24,"color":"#66fcff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":50,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#66fcff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":47,"x":74,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":157,"x":268,"width":148,"name":"RED","height":95},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"红:","height":40,"fontSize":24,"color":"#ffbf66","centerX":0,"align":"center"}},{"type":"Label","props":{"y":50,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#ffbf66","centerX":0,"align":"center"}},{"type":"Button","props":{"y":47,"x":74,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":156,"x":420,"width":132,"name":"BLACK","height":95},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"黑:","height":40,"fontSize":24,"color":"#66fcff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":50,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#66fcff","centerX":0,"align":"center"}},{"type":"Button","props":{"y":47,"x":66,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":90,"x":279,"width":173,"name":"LOUT","height":65},"child":[{"type":"Label","props":{"y":12,"x":25,"width":60,"valign":"middle","text":"左","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":12,"x":80,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":50,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":90,"x":453,"width":173,"name":"ROUT","height":65},"child":[{"type":"Label","props":{"y":12,"x":25,"width":60,"valign":"middle","text":"右","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":12,"x":80,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":50,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":90,"x":764,"width":173,"name":"LHIT","height":65},"child":[{"type":"Label","props":{"y":12,"x":25,"width":60,"valign":"middle","text":"左","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":12,"x":80,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":50,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":90,"x":938,"width":173,"name":"RHIT","height":65},"child":[{"type":"Label","props":{"y":12,"x":25,"width":60,"valign":"middle","text":"右","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":12,"x":80,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":32,"x":50,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Label","props":{"width":1334,"visible":false,"var":"MsgPanel","text":"恭喜你猜中了","strokeColor":"#d00400","stroke":5,"fontSize":60,"color":"#fbff70","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"width":152,"var":"Chips","top":100,"skin":"ui/bg_chips.png","right":22},"child":[{"type":"Button","props":{"y":60,"x":75,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"5","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":148,"x":75,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"10","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":233,"x":75,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"20","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":317,"x":75,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"50","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":403,"x":75,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"100","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":455,"x":24,"var":"minBetLabel","text":"最小:xxxx","fontSize":24,"color":"#0012ff"}},{"type":"Label","props":{"y":490,"x":24,"var":"maxBetLabel","text":"最大:xxxx","fontSize":24,"color":"#0012ff"}}]},{"type":"Image","props":{"width":156,"var":"CancleBetBtn","skin":"ui/cancel.png","left":46,"height":78,"bottom":26,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"ConfirmBetBtn","skin":"ui/confirm.png","right":20,"bottom":26,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BetPanelUI.uiView);
        }
    }
}

module ui {
    export class BetPanel_VerUI extends View {
		public Chips:Laya.Image;
		public minBetLabel:Laya.Label;
		public maxBetLabel:Laya.Label;
		public BetBox:Laya.Image;
		public MsgPanel:Laya.Label;
		public ConfirmBetBtn:Laya.Image;
		public CancleBetBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"var":"Chips","skin":"ui/vertical/bg_chips_v.png","height":125,"centerX":0,"bottom":655,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":66,"x":211,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"5","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":66,"x":318,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"10","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":66,"x":431,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"20","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":66,"x":537,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"50","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":66,"x":636,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"100","anchorY":0.5,"anchorX":0.5}},{"type":"Label","props":{"y":33,"x":25,"var":"minBetLabel","text":"最小:xxxx","fontSize":24,"color":"#ff001e"}},{"type":"Label","props":{"y":68,"x":25,"var":"maxBetLabel","text":"最大:xxxx","fontSize":24,"color":"#ff001e"}}]},{"type":"Image","props":{"width":750,"var":"BetBox","skin":"ui/vertical/bg_bet_v.png","height":642,"centerX":0,"bottom":0},"child":[{"type":"Box","props":{"y":8,"x":281,"width":470,"visible":true,"name":"IN","height":100},"child":[{"type":"Label","props":{"y":30,"x":156,"width":60,"valign":"middle","text":"射进","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":30,"x":247,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":50,"x":182,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":109,"x":441,"width":155,"name":"OUT","height":105},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"射偏","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":47,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":30,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":214,"x":441,"width":155,"name":"HIT","height":105},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"撞柱","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":47,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":30,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":464,"x":281,"width":235,"name":"BIG","height":70},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"大:","height":40,"fontSize":24,"color":"#ffbf66","align":"center"}},{"type":"Label","props":{"y":20,"x":125,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#ffbf66","align":"center"}},{"type":"Button","props":{"y":35,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":464,"x":517,"width":235,"name":"SMALL","height":70},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"小:","height":40,"fontSize":24,"color":"#66fcff","align":"center"}},{"type":"Label","props":{"y":20,"x":125,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#66fcff","align":"center"}},{"type":"Button","props":{"y":35,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":320,"x":281,"width":235,"name":"ODD","height":70},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"单:","height":40,"fontSize":24,"color":"#ffbf66","align":"center"}},{"type":"Label","props":{"y":20,"x":125,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#ffbf66","align":"center"}},{"type":"Button","props":{"y":35,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":320,"x":517,"width":235,"name":"EVEN","height":70},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"双:","height":40,"fontSize":24,"color":"#66fcff","align":"center"}},{"type":"Label","props":{"y":20,"x":125,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#66fcff","align":"center"}},{"type":"Button","props":{"y":35,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":391,"x":281,"width":235,"name":"RED","height":70},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"红:","height":40,"fontSize":24,"color":"#ffbf66","align":"center"}},{"type":"Label","props":{"y":20,"x":125,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#ffbf66","align":"center"}},{"type":"Button","props":{"y":35,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":391,"x":517,"width":235,"name":"BLACK","height":70},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"黑:","height":40,"fontSize":24,"color":"#66fcff","align":"center"}},{"type":"Label","props":{"y":20,"x":125,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#66fcff","align":"center"}},{"type":"Button","props":{"y":35,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":109,"x":281,"width":155,"name":"LOUT","height":105},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"左","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":37,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":30,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":109,"x":593,"width":155,"name":"ROUT","height":105},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"右","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":37,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":30,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":214,"x":281,"width":155,"name":"LHIT","height":105},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"左","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":37,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":30,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":214,"x":593,"width":155,"name":"RHIT","height":105},"child":[{"type":"Label","props":{"y":15,"x":47,"width":60,"valign":"middle","text":"右","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":37,"width":80,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":30,"x":77,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Label","props":{"width":750,"visible":false,"var":"MsgPanel","text":"恭喜你猜中了","strokeColor":"#d00400","stroke":5,"fontSize":60,"color":"#fbff70","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"width":156,"var":"ConfirmBetBtn","skin":"ui/confirm.png","height":78,"centerX":267,"bottom":12,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":1283,"width":156,"var":"CancleBetBtn","skin":"ui/cancel.png","height":78,"centerX":14,"bottom":12,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BetPanel_VerUI.uiView);
        }
    }
}

module ui {
    export class CardPanelUI extends View {
		public ani2:Laya.FrameAnimation;
		public goal:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"height":750},"compId":1,"child":[{"type":"Image","props":{"width":735,"var":"goal","skin":"ui/bg_door.png","height":325,"centerX":20,"bottom":265},"child":[{"type":"Image","props":{"y":187,"x":44,"width":180,"skin":"ui/poker/pkbg.png","name":"poker0","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":187,"x":700,"width":180,"skin":"ui/poker/pkbg.png","name":"poker1","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":187,"x":368,"width":180,"skin":"ui/poker/pkbg.png","name":"poker2","height":250,"anchorY":0.5,"anchorX":0.5},"compId":6}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":6,"key":"name","index":0},{"value":"pokerBg","tweenMethod":"linearNone","tween":false,"target":6,"key":"name","index":20}]}},{"target":29,"keyframes":{"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":29,"key":"name","index":0},{"value":"pokerBg","tweenMethod":"linearNone","tween":false,"target":29,"key":"name","index":20}]}},{"target":32,"keyframes":{"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":32,"key":"name","index":0},{"value":"pokerBg","tweenMethod":"linearNone","tween":false,"target":32,"key":"name","index":20}]}},{"target":1,"keyframes":{"var":[{"value":"door","tweenMethod":"linearNone","tween":false,"target":1,"key":"var","index":0},{"value":"","tweenMethod":"linearNone","tween":false,"target":1,"key":"var","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.CardPanelUI.uiView);
        }
    }
}

module ui {
    export class CardPanel_VerUI extends View {
		public goal:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"width":561,"var":"goal","skin":"ui/vertical/bg_door_v.png","height":342,"centerX":0,"bottom":795},"child":[{"type":"Image","props":{"y":187,"x":20,"width":180,"skin":"ui/poker/pkbg.png","name":"poker0","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":187,"x":541,"width":180,"skin":"ui/poker/pkbg.png","name":"poker1","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":187,"x":280,"width":180,"skin":"ui/poker/pkbg.png","name":"poker2","height":250,"anchorY":0.5,"anchorX":0.5}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.CardPanel_VerUI.uiView);
        }
    }
}

module ui {
    export class FootballUI extends View {
		public football:Laya.Animation;
		public shootInfo:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Animation","props":{"y":715,"x":667,"width":60,"var":"football","source":"FootballAni.ani","pivotY":30,"pivotX":30,"height":60}},{"type":"Label","props":{"wordWrap":true,"width":400,"var":"shootInfo","valign":"middle","text":"射中啦!","strokeColor":"#d00400","stroke":5,"pivotY":50,"pivotX":200,"overflow":"hidden","height":100,"fontSize":50,"font":"Helvetica","color":"#fbff70","centerY":0,"centerX":0,"bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.FootballUI.uiView);
        }
    }
}

module ui {
    export class Football_VerUI extends View {
		public football:Laya.Animation;
		public shootInfo:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Animation","props":{"y":790,"x":363,"width":60,"var":"football","source":"FootballAni.ani","pivotY":30,"pivotX":30,"height":60}},{"type":"Label","props":{"y":385,"wordWrap":true,"width":400,"var":"shootInfo","valign":"middle","text":"射中啦!","strokeColor":"#d00400","stroke":5,"pivotY":50,"pivotX":200,"overflow":"hidden","height":100,"fontSize":50,"font":"Helvetica","color":"#fbff70","centerX":0,"bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Football_VerUI.uiView);
        }
    }
}

module ui {
    export class GameBgUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/bg.png","height":750}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameBgUI.uiView);
        }
    }
}

module ui {
    export class GameBg_VerUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/vertical/bg_v.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameBg_VerUI.uiView);
        }
    }
}

module ui {
    export class GameLoadUI extends View {
		public progressLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Label","props":{"var":"progressLabel","text":"0%","fontSize":32,"color":"#0f85aa","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoadUI.uiView);
        }
    }
}

module ui {
    export class GameLoad_VerUI extends View {
		public progressLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Label","props":{"var":"progressLabel","text":"0%","fontSize":32,"color":"#0f85aa","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoad_VerUI.uiView);
        }
    }
}

module ui {
    export class Game_VerUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/vertical/bg_v.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Game_VerUI.uiView);
        }
    }
}

module ui {
    export class HeadPanelUI extends View {
		public headBg:Laya.Image;
		public btnGR:Laya.Button;
		public btnRule:Laya.Button;
		public money:Laya.Image;
		public score:Laya.Label;
		public info:Laya.Image;
		public nickname:Laya.Label;
		public headPic:Laya.Image;
		public attention:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1334,"height":100},"child":[{"type":"Image","props":{"width":1334,"var":"headBg","top":0,"skin":"ui/bg_header.png","centerX":0},"child":[{"type":"Button","props":{"y":4,"x":932,"width":124,"var":"btnGR","stateNum":1,"skin":"ui/gr.png","height":72}},{"type":"Button","props":{"y":4,"x":1130,"width":124,"var":"btnRule","stateNum":1,"skin":"ui/rule.png","height":72}},{"type":"Image","props":{"y":5,"x":510,"width":313,"var":"money","skin":"ui/bg_money.png","height":73},"child":[{"type":"Label","props":{"y":15,"x":77,"width":214,"var":"score","text":"0","overflow":"hidden","height":32,"fontSize":32,"color":"#333333","align":"center"}}]},{"type":"Image","props":{"y":4,"x":76,"width":260,"var":"info","skin":"ui/bg_info.png","height":76},"child":[{"type":"Label","props":{"y":18,"x":82,"width":160,"var":"nickname","text":"xxxxxx","overflow":"hidden","height":32,"fontSize":32,"color":"#333333","align":"left"}},{"type":"Image","props":{"y":8,"x":8,"width":56,"var":"headPic","skin":"ui/userImg.png","height":56}}]},{"type":"Image","props":{"y":4,"x":130,"width":124,"visible":false,"var":"attention","skin":"ui/attention.png","height":72}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HeadPanelUI.uiView);
        }
    }
}

module ui {
    export class HeadPanel_VerUI extends View {
		public headBg:Laya.Image;
		public money:Laya.Image;
		public score:Laya.Label;
		public info:Laya.Image;
		public nickname:Laya.Label;
		public headPic:Laya.Image;
		public attention:Laya.Image;
		public btnGR:Laya.Image;
		public btnRule:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":200},"child":[{"type":"Image","props":{"y":0,"var":"headBg","skin":"ui/vertical/bg_header_v.png","centerX":0},"child":[{"type":"Image","props":{"y":6,"x":390,"width":313,"var":"money","skin":"ui/bg_money.png","height":73},"child":[{"type":"Label","props":{"y":15,"x":77,"width":214,"var":"score","text":"0","overflow":"hidden","height":32,"fontSize":32,"color":"#333333","align":"center"}}]},{"type":"Image","props":{"y":3,"x":50,"width":260,"var":"info","skin":"ui/bg_info.png","height":76},"child":[{"type":"Label","props":{"y":18,"x":82,"width":160,"var":"nickname","text":"xxxxxx","overflow":"hidden","height":32,"fontSize":32,"color":"#333333","align":"left"}},{"type":"Image","props":{"y":8,"x":8,"width":56,"var":"headPic","skin":"ui/userImg.png","height":56}}]},{"type":"Image","props":{"y":5,"x":106,"width":124,"visible":false,"var":"attention","skin":"ui/attention.png","height":72}}]},{"type":"Image","props":{"var":"btnGR","top":110,"skin":"ui/vertical/gr_v.png","right":120}},{"type":"Image","props":{"var":"btnRule","top":110,"skin":"ui/vertical/rule_v.png","right":30}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HeadPanel_VerUI.uiView);
        }
    }
}

module ui {
    export class HistoryRecordUI extends View {
		public history:Laya.Image;
		public pokerPos0:Laya.Image;
		public pokerPos1:Laya.Image;
		public pokerPos2:Laya.Image;
		public listPanel:Laya.Panel;
		public _list:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":212,"top":100,"left":20,"height":538},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"history","skin":"ui/bg_histrory.png"},"child":[{"type":"Image","props":{"y":65,"x":37,"width":60,"visible":false,"var":"pokerPos0","skin":"ui/poker/pkbg.png","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":65,"x":171,"width":60,"visible":false,"var":"pokerPos1","skin":"ui/poker/pkbg.png","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":65,"x":103,"width":60,"visible":false,"var":"pokerPos2","skin":"ui/poker/pkbg.png","height":80,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":15,"x":0,"width":210,"var":"listPanel","height":500},"child":[{"type":"List","props":{"y":0,"x":0,"width":210,"var":"_list","spaceY":0,"repeatY":5,"height":500},"child":[{"type":"Box","props":{"y":0,"x":0,"width":210,"renderType":"render","name":"historyRecord","height":100},"child":[{"type":"Image","props":{"y":10,"x":7,"width":60,"skin":"ui/poker/pkbg.png","name":"poker0","height":80}},{"type":"Image","props":{"y":10,"x":74,"width":60,"skin":"ui/poker/pkbg.png","name":"poker2","height":80}},{"type":"Image","props":{"y":10,"x":141,"width":60,"skin":"ui/poker/pkbg.png","name":"poker1","height":80}}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HistoryRecordUI.uiView);
        }
    }
}

module ui {
    export class HistoryRecord_VerUI extends View {
		public history:Laya.Image;
		public pokerPos0:Laya.Image;
		public pokerPos1:Laya.Image;
		public pokerPos2:Laya.Image;
		public listPanel:Laya.Panel;
		public _list:Laya.List;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":280,"left":0,"height":635},"child":[{"type":"Image","props":{"var":"history","top":0,"right":0,"left":0,"bottom":0},"child":[{"type":"Image","props":{"y":63,"x":53,"width":70,"visible":false,"var":"pokerPos0","skin":"ui/poker/pkbg.png","height":90,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":63,"x":227,"width":70,"visible":false,"var":"pokerPos1","skin":"ui/poker/pkbg.png","height":90,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":63,"x":140,"width":70,"visible":false,"var":"pokerPos2","skin":"ui/poker/pkbg.png","height":90,"anchorY":0.5,"anchorX":0.5}},{"type":"Panel","props":{"y":0,"x":0,"width":280,"var":"listPanel","height":635},"child":[{"type":"List","props":{"y":0,"x":0,"width":280,"var":"_list","spaceY":0,"repeatY":5,"height":635},"child":[{"type":"Box","props":{"y":0,"x":0,"width":280,"renderType":"render","name":"historyRecord","height":127},"child":[{"type":"Image","props":{"y":18,"x":18,"width":70,"skin":"ui/poker/pkbg.png","name":"poker0","height":90}},{"type":"Image","props":{"y":18,"x":105,"width":70,"skin":"ui/poker/pkbg.png","name":"poker2","height":90}},{"type":"Image","props":{"y":18,"x":192,"width":70,"skin":"ui/poker/pkbg.png","name":"poker1","height":90}}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HistoryRecord_VerUI.uiView);
        }
    }
}

module ui {
    export class LoadingUI extends View {
		public loading:Laya.FrameAnimation;
		public loadingAni:Laya.Animation;
		public connectServer:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/mask.png"}},{"type":"Animation","props":{"y":393,"x":685,"width":36,"visible":false,"var":"loadingAni","source":"Loading.ani","pivotY":36,"pivotX":36,"height":36},"compId":2},{"type":"Label","props":{"width":242.798828125,"visible":false,"var":"connectServer","text":"connecting server...","strokeColor":"#d00400","stroke":5,"height":28,"fontSize":28,"color":"#fbff70","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}],"animations":[{"nodes":[{"target":2,"keyframes":{"autoPlay":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"autoPlay","index":0}]}}],"name":"loading","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingUI.uiView);
        }
    }
}

module ui {
    export class Loading_VerUI extends View {
		public loadingAni:Laya.Animation;
		public connectServer:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":-2,"x":0,"width":750,"skin":"ui/mask.png","height":1334}},{"type":"Animation","props":{"y":685,"x":393,"width":36,"visible":false,"var":"loadingAni","source":"Loading.ani","pivotY":36,"pivotX":36,"height":36}},{"type":"Label","props":{"width":242.798828125,"visible":false,"var":"connectServer","text":"connecting server...","strokeColor":"#d00400","stroke":5,"height":28,"fontSize":28,"color":"#fbff70","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Loading_VerUI.uiView);
        }
    }
}

module ui {
    export class NoteRecordUI extends View {
		public prompt:Laya.Image;
		public close:Laya.Image;
		public title:Laya.Image;
		public recordBox:Laya.Box;
		public recordHome:Laya.Box;
		public _recordList:Laya.List;
		public noBetData:Laya.Label;
		public isLoading:Laya.Label;
		public recordDetail:Laya.Box;
		public back:Laya.Image;
		public roundId:Laya.Label;
		public betResult:Laya.Label;
		public poker1:Laya.Image;
		public poker3:Laya.Image;
		public poker2:Laya.Image;
		public betDetailList:Laya.List;
		public betTypeList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750}},{"type":"Image","props":{"var":"prompt","skin":"ui/bg_record.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":15,"x":960,"var":"close","skin":"ui/close.png"}},{"type":"Image","props":{"y":10,"x":426,"var":"title","skin":"ui/betrecord.png"}},{"type":"Panel","props":{"y":65,"x":13,"width":1000,"height":510},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"recordBox"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1000,"var":"recordHome","height":510},"child":[{"type":"List","props":{"y":60,"x":0,"width":1000,"var":"_recordList","spaceY":0,"repeatY":5,"height":450},"child":[{"type":"Box","props":{"y":0,"x":0,"width":1000,"renderType":"render","name":"listBox","height":100},"child":[{"type":"Label","props":{"y":20,"x":800,"wordWrap":true,"width":150,"valign":"middle","text":"100","overflow":"scroll","name":"total","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":30,"x":168,"wordWrap":true,"width":120,"valign":"middle","text":"14:36:25","overflow":"scroll","name":"betTime","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":30,"x":14,"wordWrap":true,"width":150,"valign":"middle","text":" 2018/1/12","overflow":"scroll","name":"betDate","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":10,"x":295,"wordWrap":true,"width":558,"valign":"middle","text":"31243214234234","overflow":"scroll","name":"roundId","height":80,"fontSize":28,"font":"Arial","color":"#000000","align":"center"}},{"type":"Image","props":{"y":100,"x":0,"width":1000,"skin":"ui/recordLine.png","height":1}},{"type":"Image","props":{"y":34,"x":950,"skin":"ui/go.png"}}]}]},{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"y":0,"x":21,"wordWrap":true,"width":222,"valign":"middle","text":"时间","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":295,"wordWrap":true,"width":558,"valign":"middle","text":"局号","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":800,"wordWrap":true,"width":150,"valign":"middle","text":"输赢","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Image","props":{"y":60,"x":0,"width":1000,"skin":"ui/recordLine.png","height":1}}]},{"type":"Label","props":{"y":225,"x":400,"wordWrap":true,"width":200,"var":"noBetData","valign":"middle","text":"暂无投注记录","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":225,"x":400,"wordWrap":true,"width":200,"var":"isLoading","valign":"middle","text":"加载中...","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}}]},{"type":"Box","props":{"y":0,"x":1000,"width":1000,"var":"recordDetail","height":510},"child":[{"type":"Image","props":{"y":0,"x":20,"width":57,"var":"back","skin":"ui/back.png","height":50}},{"type":"Box","props":{"y":60,"x":0,"width":1000,"height":100},"child":[{"type":"Label","props":{"y":20,"x":40,"wordWrap":true,"width":300,"var":"roundId","valign":"middle","text":"544656","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":20,"x":700,"wordWrap":true,"width":200,"var":"betResult","valign":"middle","text":"赢","overflow":"hidden","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":100,"x":0,"width":1000,"skin":"ui/recordLine.png","height":1}},{"type":"Box","props":{"y":10,"x":370,"width":215,"height":80},"child":[{"type":"Image","props":{"width":60,"var":"poker1","skin":"ui/poker/1.png","height":80}},{"type":"Image","props":{"y":0,"x":75,"width":60,"var":"poker3","skin":"ui/poker/1.png","height":80}},{"type":"Image","props":{"y":-1,"x":150,"width":60,"var":"poker2","skin":"ui/poker/1.png","height":80}}]}]},{"type":"List","props":{"y":220,"x":0,"width":1000,"var":"betDetailList","spaceY":0,"repeatY":3,"height":290},"child":[{"type":"Box","props":{"width":1000,"renderType":"render","name":"listBox","height":100},"child":[{"type":"Image","props":{"y":100,"x":0,"width":1000,"skin":"ui/recordLine.png","height":1}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"valign":"middle","text":"1","overflow":"hidden","name":"betNum","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"List","props":{"y":0,"x":80,"width":920,"var":"betTypeList","spaceX":0,"repeatX":5,"name":"betTypeList","height":100},"child":[{"type":"Box","props":{"width":300,"renderType":"render","height":100},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":100,"valign":"middle","text":"左撞柱","overflow":"hidden","name":"betPos","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":100,"wordWrap":true,"width":100,"valign":"middle","text":"1.85","overflow":"hidden","name":"betOdds","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":200,"wordWrap":true,"width":100,"valign":"middle","text":"5","overflow":"hidden","name":"betAmount","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":25,"x":110,"wordWrap":true,"width":1,"valign":"middle","rotation":15,"overflow":"hidden","name":"line","height":50,"fontSize":30,"font":"Arial","color":"#000000","bgColor":"#000000","align":"center"}},{"type":"Label","props":{"y":25,"x":210,"wordWrap":true,"width":1,"valign":"middle","rotation":15,"overflow":"hidden","name":"line","height":50,"fontSize":30,"font":"Arial","color":"#000000","bgColor":"#000000","align":"center"}}]}]}]}]},{"type":"Box","props":{"y":160,"x":0,"width":1000,"height":60},"child":[{"type":"Label","props":{"y":10,"x":40,"wordWrap":true,"width":236,"valign":"middle","text":"投注详情如下：","overflow":"scroll","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":60,"x":0,"width":1000,"skin":"ui/recordLine.png","height":1}}]}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.NoteRecordUI.uiView);
        }
    }
}

module ui {
    export class NoteRecord_VerUI extends View {
		public prompt:Laya.Image;
		public close:Laya.Image;
		public title:Laya.Image;
		public recordBox:Laya.Box;
		public recordHome:Laya.Box;
		public _recordList:Laya.List;
		public noBetData:Laya.Label;
		public isLoading:Laya.Label;
		public recordDetail:Laya.Box;
		public back:Laya.Image;
		public roundId:Laya.Label;
		public betResult:Laya.Label;
		public poker1:Laya.Image;
		public poker3:Laya.Image;
		public poker2:Laya.Image;
		public betDetailList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/mask.png","height":1334}},{"type":"Image","props":{"width":718,"var":"prompt","skin":"ui/vertical/bg_record_v.png","height":849,"centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":15,"x":650,"var":"close","skin":"ui/close.png"}},{"type":"Image","props":{"y":10,"x":272,"var":"title","skin":"ui/betrecord.png"}},{"type":"Panel","props":{"y":65,"x":9,"width":700,"height":770},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"recordBox"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":700,"var":"recordHome","height":770},"child":[{"type":"List","props":{"y":60,"x":0,"width":700,"var":"_recordList","spaceY":0,"repeatY":10,"height":710},"child":[{"type":"Box","props":{"y":0,"x":0,"width":700,"renderType":"render","name":"listBox","height":100},"child":[{"type":"Label","props":{"y":22,"x":510,"wordWrap":true,"width":150,"valign":"middle","text":"0","overflow":"scroll","name":"total","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":11,"x":15,"wordWrap":true,"width":150,"valign":"middle","text":"14:36:25","overflow":"scroll","name":"betTime","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":48,"x":15,"wordWrap":true,"width":150,"valign":"middle","text":" 2018/1/12","overflow":"scroll","name":"betDate","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":10,"x":175,"wordWrap":true,"width":340,"valign":"middle","text":"31243214234234","overflow":"scroll","name":"roundId","height":80,"fontSize":28,"font":"Arial","color":"#000000","align":"center"}},{"type":"Image","props":{"y":100,"x":0,"width":700,"skin":"ui/recordLine.png","height":1}},{"type":"Image","props":{"y":34,"x":660,"skin":"ui/go.png"}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":700},"child":[{"type":"Label","props":{"y":0,"x":8,"wordWrap":true,"width":163,"valign":"middle","text":"时间","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":175,"wordWrap":true,"width":340,"valign":"middle","text":"局号","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":510,"wordWrap":true,"width":150,"valign":"middle","text":"输赢","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Image","props":{"y":60,"x":0,"width":700,"skin":"ui/recordLine.png","height":1}}]},{"type":"Label","props":{"y":355,"x":250,"wordWrap":true,"width":200,"var":"noBetData","valign":"middle","text":"暂无投注记录","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":355,"x":250,"wordWrap":true,"width":200,"var":"isLoading","valign":"middle","text":"加载中...","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}}]},{"type":"Box","props":{"y":0,"x":700,"width":700,"var":"recordDetail","height":770},"child":[{"type":"Image","props":{"y":0,"x":20,"width":57,"var":"back","skin":"ui/back.png","height":50}},{"type":"Box","props":{"y":60,"x":0,"width":700,"height":100},"child":[{"type":"Label","props":{"y":20,"x":40,"wordWrap":true,"width":280,"var":"roundId","valign":"middle","text":"544656","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":22,"x":530,"wordWrap":true,"width":152,"var":"betResult","valign":"middle","text":"赢","overflow":"hidden","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":100,"x":0,"width":700,"skin":"ui/recordLine.png","height":1}},{"type":"Box","props":{"y":10,"x":280,"width":215,"height":80},"child":[{"type":"Image","props":{"width":60,"var":"poker1","skin":"ui/poker/1.png","height":80}},{"type":"Image","props":{"y":0,"x":75,"width":60,"var":"poker3","skin":"ui/poker/1.png","height":80}},{"type":"Image","props":{"y":-1,"x":150,"width":60,"var":"poker2","skin":"ui/poker/1.png","height":80}}]}]},{"type":"List","props":{"y":220,"x":0,"width":700,"var":"betDetailList","spaceY":0,"repeatY":5,"height":550},"child":[{"type":"Box","props":{"width":700,"renderType":"render","name":"listBox","height":100},"child":[{"type":"Image","props":{"y":100,"x":0,"width":700,"skin":"ui/recordLine.png","height":1}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"valign":"middle","text":"1","overflow":"hidden","name":"betNum","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"List","props":{"y":0,"x":80,"width":620,"spaceX":0,"repeatX":3,"name":"betTypeList","height":100},"child":[{"type":"Box","props":{"width":300,"renderType":"render","height":100},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":100,"valign":"middle","text":"左撞柱","overflow":"hidden","name":"betPos","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":100,"wordWrap":true,"width":100,"valign":"middle","text":"1.85","overflow":"hidden","name":"betOdds","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":200,"wordWrap":true,"width":100,"valign":"middle","text":"5","overflow":"hidden","name":"betAmount","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":25,"x":110,"wordWrap":true,"width":1,"valign":"middle","rotation":15,"overflow":"hidden","name":"line","height":50,"fontSize":30,"font":"Arial","color":"#000000","bgColor":"#000000","align":"center"}},{"type":"Label","props":{"y":25,"x":210,"wordWrap":true,"width":1,"valign":"middle","rotation":15,"overflow":"hidden","name":"line","height":50,"fontSize":30,"font":"Arial","color":"#000000","bgColor":"#000000","align":"center"}}]}]}]}]},{"type":"Box","props":{"y":160,"x":0,"width":700,"height":60},"child":[{"type":"Label","props":{"y":10,"x":40,"wordWrap":true,"width":236,"valign":"middle","text":"投注详情如下：","overflow":"scroll","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":60,"x":0,"width":700,"skin":"ui/recordLine.png","height":1}}]}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.NoteRecord_VerUI.uiView);
        }
    }
}

module ui {
    export class PromptUI extends View {
		public prompt:Laya.Image;
		public promptTxt:Laya.Label;
		public sureBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750},"child":[{"type":"Image","props":{"y":209,"x":375,"width":584,"var":"prompt","skin":"ui/bg_alert.png","sizeGrid":"15,15,11,13","height":332,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":106,"x":50,"wordWrap":true,"width":484,"var":"promptTxt","valign":"top","overflow":"scroll","height":120,"fontSize":32,"font":"Arial","color":"#000000","align":"left"}},{"type":"Box","props":{"y":240,"x":244,"var":"sureBox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":94,"skin":"ui/ok.png","name":"sureBtn","height":54}}]},{"type":"Image","props":{"y":27,"x":232,"width":120,"skin":"ui/title.png","height":36}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PromptUI.uiView);
        }
    }
}

module ui {
    export class Prompt_VerUI extends View {
		public prompt:Laya.Image;
		public promptTxt:Laya.Label;
		public sureBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/mask.png","height":1334},"child":[{"type":"Image","props":{"y":209,"x":375,"width":584,"var":"prompt","skin":"ui/bg_alert.png","sizeGrid":"15,15,11,13","height":332,"centerY":0,"centerX":0},"child":[{"type":"Label","props":{"y":106,"x":50,"wordWrap":true,"width":484,"var":"promptTxt","valign":"top","overflow":"scroll","height":120,"fontSize":32,"font":"Arial","color":"#000000","align":"left"}},{"type":"Box","props":{"y":240,"x":244,"var":"sureBox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":94,"skin":"ui/ok.png","name":"sureBtn","height":54}}]},{"type":"Image","props":{"y":27,"x":232,"width":120,"skin":"ui/title.png","height":36}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Prompt_VerUI.uiView);
        }
    }
}

module ui {
    export class RoundPanelUI extends View {
		public round:Laya.Image;
		public gameState:Laya.Label;
		public gameRound:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"height":750},"child":[{"type":"Image","props":{"var":"round","top":98,"skin":"ui/bg_round.png","centerX":20},"child":[{"type":"Label","props":{"y":18,"x":28,"width":103,"text":"期号:","height":43,"fontSize":30,"color":"#000000"}},{"type":"Label","props":{"y":18,"x":544,"width":168,"var":"gameState","text":"等待开始","height":40,"fontSize":30,"color":"#000000","align":"right"}},{"type":"Label","props":{"y":20,"x":106,"width":448,"var":"gameRound","height":26,"fontSize":26,"color":"#010101"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoundPanelUI.uiView);
        }
    }
}

module ui {
    export class RoundPanel_VerUI extends View {
		public round:Laya.Image;
		public gameState:Laya.Label;
		public gameRound:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":525,"top":110,"left":20,"height":65},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"round","skin":"ui/vertical/bg_round_v.png"},"child":[{"type":"Label","props":{"y":16,"x":15,"width":77,"valign":"middle","text":"期号:","height":30,"fontSize":30,"color":"#000000","align":"left"}},{"type":"Label","props":{"y":16,"x":390,"width":122,"var":"gameState","text":"等待开始","height":30,"fontSize":30,"color":"#000000","align":"right"}},{"type":"Label","props":{"y":18,"x":96,"width":285,"var":"gameRound","height":26,"fontSize":26,"color":"#010101"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoundPanel_VerUI.uiView);
        }
    }
}

module ui {
    export class RulePanelUI extends View {
		public prompt:Laya.Image;
		public gameRule:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750},"child":[{"type":"Image","props":{"var":"prompt","skin":"ui/bg_record.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":10,"x":426,"skin":"ui/ruleTitle.png"}},{"type":"Label","props":{"y":90,"x":65,"wordWrap":true,"width":896,"var":"gameRule","valign":"top","text":"游戏规则","overflow":"scroll","height":458,"fontSize":32,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":15,"x":960,"var":"close","skin":"ui/close.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RulePanelUI.uiView);
        }
    }
}

module ui {
    export class RulePanel_VerUI extends View {
		public prompt:Laya.Image;
		public gameRule:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/mask.png","height":1334},"child":[{"type":"Image","props":{"var":"prompt","skin":"ui/vertical/bg_record_v.png","centerY":0,"centerX":0},"child":[{"type":"Image","props":{"y":10,"x":272,"skin":"ui/ruleTitle.png"}},{"type":"Label","props":{"y":85,"x":31,"wordWrap":true,"width":655,"var":"gameRule","valign":"top","text":"游戏规则","overflow":"scroll","height":722,"fontSize":32,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":15,"x":650,"var":"close","skin":"ui/close.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RulePanel_VerUI.uiView);
        }
    }
}

module ui {
    export class TimeUI extends View {
		public timeClock:Laya.Image;
		public time:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":0,"width":114,"height":133,"centerX":20,"bottom":330},"child":[{"type":"Image","props":{"y":67,"x":57,"width":114,"var":"timeClock","skin":"ui/bg_time.png","height":133,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":58,"x":30,"width":60,"var":"time","height":40},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":32,"skin":"ui/clip_number.png","name":"item0","height":40,"clipX":10}},{"type":"Clip","props":{"y":0,"x":30,"width":32,"skin":"ui/clip_number.png","sizeGrid":"0,0,0,0","name":"item1","index":0,"height":40,"clipX":10}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TimeUI.uiView);
        }
    }
}

module ui {
    export class Time_VerUI extends View {
		public timeClock:Laya.Image;
		public time:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":114,"height":133,"centerX":0,"bottom":880},"child":[{"type":"Image","props":{"y":66,"x":57,"width":114,"var":"timeClock","skin":"ui/bg_time.png","height":133,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Box","props":{"y":58,"x":30,"width":60,"var":"time","height":40},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":32,"skin":"ui/clip_number.png","name":"item0","height":40,"clipX":10}},{"type":"Clip","props":{"y":0,"x":30,"width":32,"skin":"ui/clip_number.png","sizeGrid":"0,0,0,0","name":"item1","index":0,"height":40,"clipX":10}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Time_VerUI.uiView);
        }
    }
}

module ui {
    export class TipsPanelUI extends View {
		public tipmsg:Laya.Image;
		public closeBtn:Laya.Image;
		public tipTxt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":1334,"visible":true,"renderType":"mask","height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750},"child":[{"type":"Image","props":{"width":726,"var":"tipmsg","skin":"ui/tip.png","height":442,"centerY":-76,"centerX":-76},"child":[{"type":"Image","props":{"width":40,"var":"closeBtn","top":91,"skin":"ui/tipclose.png","right":44}},{"type":"Label","props":{"y":200,"x":278,"wordWrap":true,"width":352,"var":"tipTxt","valign":"top","text":"由于您还没有登录，现在是试玩模式，想要体验更多游戏乐趣，请点击左上方          按钮，即可登录。","overflow":"scroll","height":188,"fontSize":35,"font":"SimHei","color":"#000000","bold":false,"align":"left"},"child":[{"type":"Label","props":{"y":105,"wordWrap":true,"width":140,"valign":"top","text":"‘关注’","right":70,"overflow":"scroll","height":40,"fontSize":35,"font":"SimHei","color":"#f90c08","bold":false,"align":"left"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TipsPanelUI.uiView);
        }
    }
}

module ui {
    export class TipsPanel_VerUI extends View {
		public tipmsg:Laya.Image;
		public closeBtn:Laya.Image;
		public tipTxt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/mask.png","height":1334},"child":[{"type":"Image","props":{"width":596,"var":"tipmsg","top":110,"skin":"ui/vertical/tip_v.png","height":586,"centerX":0},"child":[{"type":"Image","props":{"width":40,"var":"closeBtn","top":239,"skin":"ui/tipclose.png","right":44}},{"type":"Label","props":{"y":345,"x":150,"wordWrap":true,"width":352,"var":"tipTxt","valign":"top","text":"由于您还没有登录，现在是试玩模式，想要体验更多游戏乐趣，请点击左上方          按钮，即可登录。","overflow":"scroll","height":188,"fontSize":35,"font":"SimHei","color":"#000000","bold":false,"align":"left"},"child":[{"type":"Label","props":{"y":105,"wordWrap":true,"width":140,"valign":"top","text":"‘关注’","right":70,"overflow":"scroll","height":40,"fontSize":35,"font":"SimHei","color":"#f90c08","bold":false,"align":"left"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TipsPanel_VerUI.uiView);
        }
    }
}
