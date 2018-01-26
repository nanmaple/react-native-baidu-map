
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class BetPanelUI extends View {
		public BetBox:Laya.Image;
		public MsgPanel:Laya.Label;
		public Chips:Laya.Image;
		public CancleBetBtn:Laya.Image;
		public ConfirmBetBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"height":750},"child":[{"type":"Image","props":{"width":1335,"var":"BetBox","skin":"ui/bg_bet.png","height":252,"centerX":0,"bottom":0},"child":[{"type":"Box","props":{"y":28,"x":556,"width":272,"visible":true,"name":"IN","height":116},"child":[{"type":"Label","props":{"y":20,"x":100,"width":60,"valign":"middle","text":"射进：","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":110,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":60,"x":56,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":28,"x":284,"width":272,"name":"OUT","height":116},"child":[{"type":"Label","props":{"y":20,"x":100,"width":60,"valign":"middle","text":"射偏:","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":100,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":60,"x":56,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":28,"x":832,"width":272,"name":"HIT","height":116},"child":[{"type":"Label","props":{"y":20,"x":100,"width":60,"valign":"middle","text":"撞解:","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Label","props":{"y":60,"x":100,"width":60,"valign":"middle","text":"---","height":40,"fontSize":28,"color":"#faf114","align":"center"}},{"type":"Button","props":{"y":60,"x":56,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":148,"x":556,"width":132,"name":"BIG","height":104},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"大:","height":40,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Button","props":{"y":52,"x":68,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":148,"x":692,"width":132,"name":"SMALL","height":104},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"小:","height":40,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Button","props":{"y":52,"x":68,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":148,"x":832,"width":132,"name":"ODD","height":104},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"单:","height":40,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Button","props":{"y":52,"x":68,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":148,"x":968,"width":148,"name":"EVEN","height":104},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"双:","height":40,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Button","props":{"y":26,"x":76,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","centerY":0,"anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":148,"x":268,"width":148,"name":"RED","height":104},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"红:","height":40,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Button","props":{"y":52,"x":76,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":148,"x":420,"width":132,"name":"BLACK","height":104},"child":[{"type":"Label","props":{"y":10,"width":60,"valign":"middle","text":"黑:","height":40,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Label","props":{"y":60,"width":60,"valign":"middle","text":"---","height":30,"fontSize":24,"color":"#faf114","centerX":0,"align":"center"}},{"type":"Button","props":{"x":68,"width":72,"visible":false,"stateNum":1,"skin":"ui/btn_chip.png","labelSize":20,"label":"0","height":74,"centerY":-1,"anchorY":0.5,"anchorX":0.5}}]}]},{"type":"Label","props":{"width":1334,"visible":false,"var":"MsgPanel","text":"恭喜你猜中了","strokeColor":"#0c44f3","stroke":5,"fontSize":60,"color":"#e81915","centerY":0,"centerX":0,"bold":true,"anchorY":0.5,"anchorX":0.5,"align":"center"}},{"type":"Image","props":{"var":"Chips","top":100,"skin":"ui/bg_chips.png","right":22,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Button","props":{"y":160,"x":76,"stateNum":1,"skin":"ui/chip_s.png","scaleY":1.1,"scaleX":1.1,"labelSize":20,"labelColors":"#f00","label":"5","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":244,"x":76,"stateNum":1,"skin":"ui/btn_chip.png","scaleY":0.9,"scaleX":0.9,"labelSize":20,"labelColors":"#f00","label":"10","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":325,"x":76,"stateNum":1,"skin":"ui/btn_chip.png","scaleY":0.9,"scaleX":0.9,"labelSize":20,"labelColors":"#f00","label":"20","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":405,"x":76,"stateNum":1,"skin":"ui/btn_chip.png","scaleY":0.9,"scaleX":0.9,"labelSize":20,"labelColors":"#f00","label":"50","anchorY":0.5,"anchorX":0.5}},{"type":"Button","props":{"y":485,"x":76,"stateNum":1,"skin":"ui/btn_chip.png","scaleY":0.9,"scaleX":0.9,"labelSize":20,"labelColors":"#f00","label":"100","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"width":156,"var":"CancleBetBtn","skin":"ui/cancel.png","left":46,"height":78,"bottom":26,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"var":"ConfirmBetBtn","skin":"ui/confirm.png","right":20,"bottom":26,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BetPanelUI.uiView);
        }
    }
}

module ui {
    export class CardPanelUI extends View {
		public ani2:Laya.FrameAnimation;
		public goal:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"height":750},"compId":1,"child":[{"type":"Image","props":{"width":735,"var":"goal","skin":"ui/bg_door.png","height":325,"centerX":20,"bottom":249},"child":[{"type":"Image","props":{"y":204,"x":44,"width":180,"skin":"ui/poker/pkbg.png","name":"poker0","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":204,"x":700,"width":180,"skin":"ui/poker/pkbg.png","name":"poker1","height":250,"anchorY":0.5,"anchorX":0.5}},{"type":"Image","props":{"y":204,"x":368,"width":180,"skin":"ui/poker/pkbg.png","name":"poker2","height":250,"anchorY":0.5,"anchorX":0.5},"compId":6}]}],"animations":[{"nodes":[{"target":6,"keyframes":{"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":6,"key":"name","index":0},{"value":"pokerBg","tweenMethod":"linearNone","tween":false,"target":6,"key":"name","index":20}]}},{"target":29,"keyframes":{"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":29,"key":"name","index":0},{"value":"pokerBg","tweenMethod":"linearNone","tween":false,"target":29,"key":"name","index":20}]}},{"target":32,"keyframes":{"name":[{"value":"","tweenMethod":"linearNone","tween":false,"target":32,"key":"name","index":0},{"value":"pokerBg","tweenMethod":"linearNone","tween":false,"target":32,"key":"name","index":20}]}},{"target":1,"keyframes":{"var":[{"value":"door","tweenMethod":"linearNone","tween":false,"target":1,"key":"var","index":0},{"value":"","tweenMethod":"linearNone","tween":false,"target":1,"key":"var","index":20}]}}],"name":"ani2","id":2,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.CardPanelUI.uiView);
        }
    }
}

module ui {
    export class FootballUI extends View {
		public football:Laya.Animation;
		public shootInfo:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Animation","props":{"y":708,"x":667,"width":80,"var":"football","source":"FootballAni.ani","pivotY":40,"pivotX":40,"height":80}},{"type":"Label","props":{"y":375,"x":667,"wordWrap":true,"width":400,"var":"shootInfo","valign":"middle","text":"射中啦!","strokeColor":"#79cf1b","stroke":2,"pivotY":50,"pivotX":200,"overflow":"hidden","height":100,"fontSize":50,"font":"Helvetica","color":"#117a1e","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.FootballUI.uiView);
        }
    }
}

module ui {
    export class GameUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/bg.png","height":750}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameUI.uiView);
        }
    }
}

module ui {
    export class GameLoadUI extends View {
		public progressLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Label","props":{"y":374,"x":666,"width":80,"var":"progressLabel","text":"0%","height":40,"fontSize":32,"color":"#0f85aa","anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoadUI.uiView);
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

        public static  uiView:any ={"type":"View","props":{"y":0,"width":1334,"height":100},"child":[{"type":"Image","props":{"width":1334,"var":"headBg","top":0,"skin":"ui/bg_header.png","centerX":0},"child":[{"type":"Button","props":{"y":4,"x":932,"width":124,"var":"btnGR","stateNum":1,"skin":"ui/gr.png","height":72}},{"type":"Button","props":{"y":4,"x":1130,"width":124,"var":"btnRule","stateNum":1,"skin":"ui/rule.png","height":72}},{"type":"Image","props":{"y":8,"x":556,"width":248,"var":"money","skin":"ui/bg_money.png","height":72},"child":[{"type":"Label","props":{"y":14,"x":70,"width":108,"var":"score","text":"0","overflow":"hidden","height":32,"fontSize":32,"color":"#333333","align":"center"}}]},{"type":"Image","props":{"y":4,"x":76,"width":260,"var":"info","skin":"ui/bg_info.png","height":76},"child":[{"type":"Label","props":{"y":18,"x":82,"width":160,"var":"nickname","text":"xxxxxx","overflow":"hidden","height":32,"fontSize":32,"color":"#333333","align":"left"}},{"type":"Image","props":{"y":8,"x":8,"width":56,"var":"headPic","skin":"ui/userImg.png","height":56}}]},{"type":"Image","props":{"y":4,"x":130,"width":124,"visible":false,"var":"attention","skin":"ui/attention.png","height":72}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HeadPanelUI.uiView);
        }
    }
}

module ui {
    export class HistoryRecordUI extends View {
		public history:Laya.Image;
		public _list:Laya.List;
		public minBetLabel:Laya.Label;
		public maxBetLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":212,"height":538},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"history","skin":"ui/bg_histrory.png"},"child":[{"type":"List","props":{"y":8,"x":0,"width":220,"var":"_list","spaceY":5,"repeatY":5,"height":433},"child":[{"type":"Box","props":{"y":0,"x":1,"renderType":"render","name":"historyRecord"},"child":[{"type":"Image","props":{"y":8,"x":11,"width":56,"skin":"ui/poker/1.png","name":"poker0","height":72}},{"type":"Image","props":{"y":8,"x":78,"width":56,"skin":"ui/poker/1.png","name":"poker2","height":72}},{"type":"Image","props":{"y":8,"x":145,"width":56,"skin":"ui/poker/1.png","name":"poker1","height":72}}]}]},{"type":"Label","props":{"y":446,"x":30,"var":"minBetLabel","text":"最小额度:xxxx","fontSize":24,"color":"#0012ff"}},{"type":"Label","props":{"y":484,"x":30,"var":"maxBetLabel","text":"最大额度:xxxx","fontSize":24,"color":"#0012ff"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HistoryRecordUI.uiView);
        }
    }
}

module ui {
    export class LoadingUI extends View {
		public loading:Laya.FrameAnimation;
		public loadingAni:Laya.Animation;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Animation","props":{"y":375,"x":667,"var":"loadingAni","source":"Loading.ani","pivotY":18,"pivotX":18},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"autoPlay":[{"value":false,"tweenMethod":"linearNone","tween":false,"target":2,"key":"autoPlay","index":0}]}}],"name":"loading","id":1,"frameRate":24,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingUI.uiView);
        }
    }
}

module ui {
    export class NoteRecordUI extends View {
		public prompt:Laya.Image;
		public title:Laya.Image;
		public close:Laya.Image;
		public recordBox:Laya.Box;
		public recordHome:Laya.Box;
		public _recordList:Laya.List;
		public isLoading:Laya.Label;
		public recordDetail:Laya.Box;
		public back:Laya.Image;
		public betResult:Laya.Label;
		public poker1:Laya.Image;
		public poker3:Laya.Image;
		public poker2:Laya.Image;
		public betDetailList:Laya.List;
		public betTypeList:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750},"child":[{"type":"Image","props":{"y":86,"x":189,"width":956,"var":"prompt","skin":"ui/bg_record.png","height":578},"child":[{"type":"Image","props":{"y":28,"x":391,"var":"title","skin":"ui/betrecord.png"}},{"type":"Image","props":{"y":32,"x":869,"var":"close","skin":"ui/close.png"}},{"type":"Panel","props":{"y":115,"x":13,"width":930,"height":450},"child":[{"type":"Box","props":{"y":0,"x":0,"var":"recordBox"},"child":[{"type":"Box","props":{"y":0,"x":0,"width":930,"var":"recordHome","height":450},"child":[{"type":"List","props":{"y":60,"x":0,"width":930,"var":"_recordList","spaceY":0,"repeatY":4,"height":390},"child":[{"type":"Box","props":{"width":930,"renderType":"render","name":"listBox","height":100},"child":[{"type":"Label","props":{"y":20,"x":830,"wordWrap":true,"width":60,"valign":"middle","text":"赢","overflow":"scroll","name":"betResult","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":10,"x":50,"wordWrap":true,"width":150,"valign":"middle","text":"14:36 ","overflow":"scroll","name":"betTime","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":50,"x":50,"wordWrap":true,"width":150,"valign":"middle","text":" 2018/1/12","overflow":"scroll","name":"betDate","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":10,"x":205,"wordWrap":true,"width":600,"valign":"middle","text":"31243214234234","overflow":"scroll","name":"bureauNum","height":80,"fontSize":28,"font":"Arial","color":"#000000","align":"center"}},{"type":"Image","props":{"y":100,"x":0,"width":930,"skin":"ui/recordLine.png","height":1}}]}]},{"type":"Box","props":{"y":0,"x":0},"child":[{"type":"Label","props":{"y":0,"x":60,"wordWrap":true,"width":100,"valign":"middle","text":"时间","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":0,"x":205,"wordWrap":true,"width":600,"valign":"middle","text":"局号","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":783,"wordWrap":true,"width":150,"valign":"middle","text":"输赢","overflow":"scroll","height":60,"fontSize":36,"font":"Arial","color":"#000000","align":"center"}},{"type":"Image","props":{"y":60,"x":0,"width":930,"skin":"ui/recordLine.png","height":1}}]},{"type":"Label","props":{"y":195,"x":365,"wordWrap":true,"width":200,"var":"isLoading","valign":"middle","text":"加载中...","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}}]},{"type":"Box","props":{"y":0,"x":930,"width":930,"var":"recordDetail","height":450},"child":[{"type":"Image","props":{"y":0,"x":20,"width":57,"var":"back","skin":"ui/back.png","height":50}},{"type":"Box","props":{"y":60,"x":0,"width":930,"height":100},"child":[{"type":"Label","props":{"y":20,"x":40,"wordWrap":true,"width":132,"valign":"middle","text":"结果：","overflow":"scroll","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Label","props":{"y":20,"x":500,"wordWrap":true,"width":228,"var":"betResult","valign":"middle","text":"赢","overflow":"hidden","height":60,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":100,"x":0,"width":930,"skin":"ui/recordLine.png","height":1}},{"type":"Box","props":{"y":10,"x":204,"width":215,"height":80},"child":[{"type":"Image","props":{"width":60,"var":"poker1","skin":"ui/poker/1.png","height":80}},{"type":"Image","props":{"y":0,"x":75,"width":60,"var":"poker3","skin":"ui/poker/1.png","height":80}},{"type":"Image","props":{"y":-1,"x":150,"width":60,"var":"poker2","skin":"ui/poker/1.png","height":80}}]}]},{"type":"List","props":{"y":220,"x":0,"width":930,"var":"betDetailList","spaceY":0,"repeatY":2,"height":230},"child":[{"type":"Box","props":{"width":930,"renderType":"render","name":"listBox","height":100},"child":[{"type":"Image","props":{"y":100,"x":0,"width":930,"skin":"ui/recordLine.png","height":1}},{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"valign":"middle","text":"1","overflow":"hidden","name":"betNum","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"List","props":{"y":0,"x":80,"width":850,"var":"betTypeList","spaceX":0,"repeatX":10,"name":"betTypeList","height":100},"child":[{"type":"Box","props":{"width":240,"renderType":"render","height":100},"child":[{"type":"Label","props":{"y":0,"x":0,"wordWrap":true,"width":80,"valign":"middle","text":"撞柱","overflow":"hidden","name":"betPos","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":80,"wordWrap":true,"width":80,"valign":"middle","text":"1.85","overflow":"hidden","name":"betOdds","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":0,"x":160,"wordWrap":true,"width":80,"valign":"middle","text":"5","overflow":"hidden","name":"betAmount","height":100,"fontSize":30,"font":"Arial","color":"#000000","align":"center"}},{"type":"Label","props":{"y":25,"x":90,"wordWrap":true,"width":1,"valign":"middle","rotation":15,"overflow":"hidden","name":"line","height":50,"fontSize":30,"font":"Arial","color":"#000000","bgColor":"#000000","align":"center"}},{"type":"Label","props":{"y":25,"x":170,"wordWrap":true,"width":1,"valign":"middle","rotation":15,"overflow":"hidden","name":"line","height":50,"fontSize":30,"font":"Arial","color":"#000000","bgColor":"#000000","align":"center"}}]}]}]}]},{"type":"Box","props":{"y":160,"x":0,"width":930,"height":60},"child":[{"type":"Label","props":{"y":10,"x":40,"wordWrap":true,"width":236,"valign":"middle","text":"投注详情如下：","overflow":"scroll","height":40,"fontSize":30,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":60,"x":0,"width":930,"skin":"ui/recordLine.png","height":1}}]}]}]}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.NoteRecordUI.uiView);
        }
    }
}

module ui {
    export class PromptUI extends View {
		public prompt:Laya.Image;
		public promptTxt:Laya.Label;
		public sureBox:Laya.Box;
		public rechargeBox:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750},"child":[{"type":"Image","props":{"y":208,"x":374,"width":584,"var":"prompt","skin":"ui/bg_alert.png","sizeGrid":"15,15,11,13","height":332},"child":[{"type":"Label","props":{"y":106,"x":50,"wordWrap":true,"width":484,"var":"promptTxt","valign":"top","text":"您的余额不足。","overflow":"scroll","height":120,"fontSize":32,"font":"Arial","color":"#000000","align":"left"}},{"type":"Box","props":{"y":240,"x":244,"var":"sureBox"},"child":[{"type":"Image","props":{"y":0,"x":0,"width":94,"skin":"ui/ok.png","name":"sureBtn","height":54}}]},{"type":"Box","props":{"y":240,"x":92,"width":400,"var":"rechargeBox","height":54},"child":[{"type":"Image","props":{"y":0,"x":0,"width":94,"skin":"ui/ok.png","name":"sureBtn","height":54}},{"type":"Image","props":{"y":0,"x":300,"width":94,"skin":"ui/charge.png","name":"rechargeBtn","height":54}}]},{"type":"Image","props":{"y":27,"x":232,"width":120,"skin":"ui/title.png","height":36}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PromptUI.uiView);
        }
    }
}

module ui {
    export class RoundPanelUI extends View {
		public round:Laya.Image;
		public gameState:Laya.Label;
		public gameRound:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":0,"x":0,"width":1334,"height":750},"child":[{"type":"Image","props":{"var":"round","top":98,"skin":"ui/bg_round.png","centerX":20},"child":[{"type":"Label","props":{"y":18,"x":28,"width":103,"text":"期号:","height":43,"fontSize":30,"color":"#08e500"}},{"type":"Label","props":{"y":18,"x":544,"width":168,"var":"gameState","text":"等待开始","height":40,"fontSize":30,"color":"#08e500","align":"right"}},{"type":"Label","props":{"y":20,"x":106,"width":448,"var":"gameRound","height":26,"fontSize":26,"color":"#08e500"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RoundPanelUI.uiView);
        }
    }
}

module ui {
    export class RulePanelUI extends View {
		public prompt:Laya.Image;
		public gameRule:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/mask.png"},"child":[{"type":"Image","props":{"y":86,"x":189,"var":"prompt","skin":"ui/bg_record.png"},"child":[{"type":"Image","props":{"y":28,"x":391,"skin":"ui/ruleTitle.png"}},{"type":"Label","props":{"y":147,"x":68,"wordWrap":true,"width":820,"var":"gameRule","valign":"top","text":"游戏规则","overflow":"scroll","height":385,"fontSize":32,"font":"Arial","color":"#000000","align":"left"}},{"type":"Image","props":{"y":32,"x":869,"var":"close","skin":"ui/close.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RulePanelUI.uiView);
        }
    }
}

module ui {
    export class TimeUI extends View {
		public time:Laya.Box;

        public static  uiView:any ={"type":"View","props":{"y":56,"x":47,"width":94,"height":112,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"skin":"ui/bg_time.png","scaleY":0.9,"scaleX":0.9,"centerY":0.5,"centerX":0.5},"child":[{"type":"Box","props":{"y":46,"x":18,"width":60,"var":"time","height":40},"child":[{"type":"Clip","props":{"y":0,"x":0,"width":32,"skin":"ui/clip_number.png","name":"item0","height":40,"clipX":10}},{"type":"Clip","props":{"y":0,"x":30,"width":32,"skin":"ui/clip_number.png","sizeGrid":"0,0,0,0","name":"item1","index":0,"height":40,"clipX":10}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TimeUI.uiView);
        }
    }
}

module ui {
    export class TipsPanelUI extends View {
		public closeBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"x":0,"width":1334,"visible":true,"renderType":"mask","height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/mask.png","height":750},"child":[{"type":"Image","props":{"y":110,"x":338,"var":"closeBtn","skin":"ui/tip.png","centerX":0},"child":[{"type":"Image","props":{"y":65,"x":544,"skin":"ui/tipclose.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TipsPanelUI.uiView);
        }
    }
}
