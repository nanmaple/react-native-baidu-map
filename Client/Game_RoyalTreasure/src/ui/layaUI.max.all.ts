
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
    export class FootPanelUI extends View {
		public betNum:Laya.Label;
		public addBtn:Laya.Button;
		public decreaseBtn:Laya.Button;
		public maxBtn:Laya.Button;
		public autoDigBtn:Laya.Button;
		public autoDigTimes:Laya.Image;
		public times_100:Laya.Image;
		public times_50:Laya.Image;
		public times_20:Laya.Image;
		public times_10:Laya.Image;
		public stopDigBtn:Laya.Button;
		public surplusWord:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":273},"child":[{"type":"Image","props":{"y":80,"x":-22,"width":793,"skin":"ui/footer.png"}},{"type":"Image","props":{"y":176,"x":290,"width":170,"skin":"ui/betNumBg.png","height":65},"child":[{"type":"Label","props":{"y":12,"x":10,"width":150,"var":"betNum","text":"100","height":41,"fontSize":34,"color":"#ffffff","align":"center"}}]},{"type":"Button","props":{"y":166,"x":480,"width":65,"var":"addBtn","stateNum":1,"skin":"ui/addBtn1.png","height":85}},{"type":"Button","props":{"y":166,"x":205,"width":65,"var":"decreaseBtn","stateNum":1,"skin":"ui/decreaseBtn1.png","height":85}},{"type":"Button","props":{"y":166,"x":4,"width":157,"var":"maxBtn","stateNum":1,"skin":"ui/maxBtn1.png","height":85},"child":[{"type":"Label","props":{"y":13,"x":0,"width":158,"text":"最大","height":58,"fontSize":40,"font":"Microsoft YaHei","color":"#703e3e","bold":true,"align":"center"}}]},{"type":"Button","props":{"y":209.5,"x":651.5,"width":179,"var":"autoDigBtn","stateNum":1,"skin":"ui/btn_autoDig.png","height":85,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":24,"x":27,"width":125,"skin":"ui/autoDigWord.png","height":36}}]},{"type":"Image","props":{"y":4,"x":583,"visible":false,"var":"autoDigTimes","skin":"ui/timesBg.png","scaleY":0.57,"scaleX":0.57},"child":[{"type":"Image","props":{"y":9,"x":11,"var":"times_100","skin":"ui/timesNumBg.png"},"child":[{"type":"Text","props":{"y":3,"x":63,"width":91,"text":"100","height":54,"fontSize":38,"font":"Microsoft YaHei","color":"#e8e4e4","align":"center"}}]},{"type":"Image","props":{"y":77,"x":11,"var":"times_50","skin":"ui/timesNumBg.png"},"child":[{"type":"Text","props":{"y":3,"x":63,"width":91,"text":"50","height":54,"fontSize":38,"font":"Microsoft YaHei","color":"#e8e4e4","align":"center"}}]},{"type":"Image","props":{"y":144,"x":11,"var":"times_20","skin":"ui/timesNumBg.png"},"child":[{"type":"Text","props":{"y":3,"x":63,"width":91,"text":"20","height":54,"fontSize":38,"font":"Microsoft YaHei","color":"#e8e4e4","align":"center"}}]},{"type":"Image","props":{"y":212,"x":11,"var":"times_10","skin":"ui/timesNumBg.png"},"child":[{"type":"Text","props":{"y":3,"x":63,"width":91,"text":"10","height":54,"fontSize":38,"font":"Microsoft YaHei","color":"#e8e4e4","align":"center"}}]}]},{"type":"Button","props":{"y":210,"x":652,"width":179,"visible":false,"var":"stopDigBtn","stateNum":1,"skin":"ui/btn_stopDig.png","height":85,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":9,"x":38,"width":102,"skin":"ui/wordStopDig.png","height":39}},{"type":"Label","props":{"y":52,"x":50,"width":78,"var":"surplusWord","text":"还剩余9次","height":20,"fontSize":16,"color":"#e5dcdc","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(ui.FootPanelUI.uiView);

        }

    }
}

module ui {
    export class GameBgViewUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/bg.jpg","height":1334}}]};
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

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334},"child":[{"type":"Image","props":{"y":667,"x":375,"width":558,"var":"prompt","skin":"ui/record.png","height":797,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":-25,"x":522,"var":"close","top":-25,"skin":"ui/btn_close.png","right":-25}},{"type":"Image","props":{"y":-5,"var":"title","skin":"ui/record_tit.png","centerX":0}},{"type":"Panel","props":{"y":69,"x":12,"width":500,"var":"panelList","height":680,"centerX":0},"child":[{"type":"Box","props":{"width":500,"height":60},"child":[{"type":"Label","props":{"y":0,"width":150,"var":"num_tit","valign":"middle","text":"序号","left":0,"height":60,"fontSize":30,"color":"#fecc05","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"x":150,"width":200,"var":"reward_tit","valign":"middle","text":"获得奖励","height":60,"fontSize":30,"color":"#fecc05","bold":true,"align":"center"}},{"type":"Label","props":{"y":0,"width":150,"var":"time_tit","valign":"middle","text":"时间","right":0,"height":60,"fontSize":30,"color":"#fecc05","bold":true,"align":"center"}}]},{"type":"List","props":{"y":60,"x":0,"width":500,"var":"recordList","spaceY":5,"repeatY":10,"height":620},"child":[{"type":"Box","props":{"width":500,"renderType":"render","height":55,"centerX":0},"child":[{"type":"Image","props":{"y":0,"x":0,"width":500,"skin":"ui/listBgTwo.png","sizeGrid":"20,20,20,20","name":"listBg","height":55}},{"type":"Label","props":{"y":0,"width":150,"valign":"middle","text":"1","name":"num","left":0,"height":55,"fontSize":25,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":0,"width":200,"valign":"middle","text":"100","name":"reward","height":55,"fontSize":25,"color":"#ffffff","centerX":0,"align":"center"}},{"type":"Label","props":{"y":5,"width":150,"valign":"middle","text":"2018-01-16","right":0,"name":"date","height":25,"fontSize":20,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":30,"width":150,"valign":"middle","text":"18:25:25","right":0,"name":"time","height":25,"fontSize":20,"color":"#ffffff","align":"center"}}]}]},{"type":"Label","props":{"width":500,"var":"noRecord","valign":"middle","text":"暂无数据","height":50,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}},{"type":"Label","props":{"width":500,"var":"isLoading","valign":"middle","text":"正在加载...","height":50,"fontSize":25,"color":"#ffffff","centerY":0,"centerX":0,"align":"center"}}]}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameRecordViewUI.uiView);

        }

    }
}

module ui {
    export class HeadPanelUI extends View {
		public ani1:Laya.FrameAnimation;
		public balance:Laya.Label;
		public homeBtn:Laya.Image;
		public ruleBtn:Laya.Image;
		public voiceBtn:Laya.Image;
		public rechargeBtn:Laya.Image;
		public recordBtn:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":260},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/header.png"}},{"type":"Image","props":{"y":9,"x":280,"width":189,"skin":"ui/balanceBg.png"},"child":[{"type":"Label","props":{"y":12,"x":35,"width":145,"var":"balance","text":"0","height":27,"fontSize":25,"color":"#ffffff","align":"center"}}]},{"type":"Image","props":{"y":5,"x":261,"skin":"ui/balanceMark.png"}},{"type":"Image","props":{"y":7,"x":60,"var":"homeBtn","skin":"ui/homeBtn1.png"}},{"type":"Image","props":{"y":89,"x":17,"var":"ruleBtn","skin":"ui/ruleBtn1.png"}},{"type":"Image","props":{"y":89,"x":111,"var":"voiceBtn","skin":"ui/voiceOnBtn.png"}},{"type":"Image","props":{"y":89,"x":562,"var":"rechargeBtn","skin":"ui/rechargeBtn1.png"}},{"type":"Image","props":{"y":89,"x":656,"var":"recordBtn","skin":"ui/recordBtn1.png"}},{"type":"Box","props":{"y":95,"x":243},"child":[{"type":"Image","props":{"x":6,"skin":"ui/semicircle.png"}},{"type":"Image","props":{"y":1,"x":22,"skin":"ui/lightOff.png"},"compId":8},{"type":"Image","props":{"y":55,"skin":"ui/leftGold.png"}},{"type":"Image","props":{"y":65,"x":134,"skin":"ui/rightGold.png"}},{"type":"Image","props":{"y":54,"x":137,"width":66,"skin":"ui/crown.png","pivotY":44,"pivotX":39,"height":54},"compId":11},{"type":"Image","props":{"y":132,"x":140,"width":93,"skin":"ui/blackDiamond.png","pivotY":81,"pivotX":77,"height":82},"compId":12},{"type":"Image","props":{"y":123,"x":143,"width":90,"skin":"ui/redDiamond.png","pivotY":85,"pivotX":15,"height":85},"compId":13}]}],"animations":[{"nodes":[{"target":12,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"rotation","index":0},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":12,"key":"rotation","index":7},{"value":10,"tweenMethod":"linearNone","tween":true,"target":12,"key":"rotation","index":20},{"value":0,"tweenMethod":"linearNone","tween":true,"target":12,"key":"rotation","index":27}]}},{"target":13,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"rotation","index":55},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":13,"key":"rotation","index":62},{"value":7,"tweenMethod":"linearNone","tween":true,"target":13,"key":"rotation","index":75},{"value":-7,"tweenMethod":"linearNone","tween":true,"target":13,"key":"rotation","index":88},{"value":0,"tweenMethod":"linearNone","tween":true,"target":13,"key":"rotation","index":95}]}},{"target":11,"keyframes":{"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":120},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":127},{"value":8,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":138},{"value":-8,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":149},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":156},{"value":0,"tweenMethod":"linearNone","tween":true,"target":11,"key":"rotation","index":220}]}},{"target":8,"keyframes":{"x":[{"value":21,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":0},{"value":21,"tweenMethod":"linearNone","tween":true,"target":8,"key":"x","index":20}],"skin":[{"value":"ui/lightOff.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":0},{"value":"ui/lightOn.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":20},{"value":"ui/lightOff.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":35},{"value":"ui/lightOn.png","tweenMethod":"linearNone","tween":false,"target":8,"key":"skin","index":50}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":0},{"value":0,"tweenMethod":"linearNone","tween":true,"target":8,"key":"rotation","index":20}]}}],"name":"ani1","id":1,"frameRate":60,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HeadPanelUI.uiView);

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
    export class MineEffectUI extends View {
		public mine:Laya.Image;
		public mineScore:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"y":61,"x":45,"width":90,"height":120,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Image","props":{"y":33,"x":16,"var":"mine","skin":"ui/testMine.png","scaleY":0.9,"scaleX":0.9}},{"type":"Label","props":{"y":10,"x":0,"width":90,"var":"mineScore","text":"100","height":30,"fontSize":24,"font":"SimSun","color":"#ee875f","bold":true,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.MineEffectUI.uiView);

        }

    }
}

module ui {
    export class RulePanelUI extends View {
		public closeBtn:Laya.Image;
		public ruleLogo:Laya.Image;
		public ruleWord:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/maskBg.png","skewY":90,"skewX":90}},{"type":"Image","props":{"y":272,"x":66,"skin":"ui/ruleBg.png"}},{"type":"Image","props":{"y":366,"x":568,"var":"closeBtn","skin":"ui/closeBtn.png"}},{"type":"Image","props":{"y":364,"x":291,"var":"ruleLogo","skin":"ui/ruleLogo.png"}},{"type":"Image","props":{"y":449,"x":159,"var":"ruleWord","skin":"ui/ruleWord.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.RulePanelUI.uiView);

        }

    }
}

module ui {
    export class ToyPanelUI extends View {
		public dig:Laya.FrameAnimation;
		public hammer:Laya.Image;
		public hammerSplit:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":280,"height":226},"compId":1,"child":[{"type":"Image","props":{"y":77,"x":15,"var":"hammer","skin":"ui/hammer.png"},"compId":2},{"type":"Image","props":{"y":78,"x":4,"width":154,"visible":false,"var":"hammerSplit","skin":"ui/hammerSplit.png","height":125}}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":134,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":137,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0},{"value":137,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":18},{"value":137,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":26}],"rotation":[{"value":0,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":166,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":18},{"value":-10,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":26}],"pivotY":[{"value":57,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotY","index":0}],"pivotX":[{"value":122,"tweenMethod":"linearNone","tween":true,"target":2,"key":"pivotX","index":0}]}},{"target":1,"keyframes":{"width":[{"value":280,"tweenMethod":"linearNone","tween":true,"target":1,"key":"width","index":0},{"value":280,"tweenMethod":"linearNone","tween":true,"target":1,"key":"width","index":26}],"height":[{"value":226,"tweenMethod":"linearNone","tween":true,"target":1,"key":"height","index":0},{"value":226,"tweenMethod":"linearNone","tween":true,"target":1,"key":"height","index":26}]}}],"name":"dig","id":1,"frameRate":60,"action":0}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ToyPanelUI.uiView);

        }

    }
}

module ui {
    export class TreasurePanelUI extends View {
		public mineImg:Laya.Image;
		public car:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":755},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"var":"mineImg","skin":"ui/Mine.png","height":755}},{"type":"Image","props":{"y":577,"x":41,"var":"car","skin":"ui/car.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.TreasurePanelUI.uiView);

        }

    }
}
