
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class AlertHUI extends View {
		public prompt:Laya.Image;
		public txt:Laya.Label;
		public close:Laya.Image;
		public sure:Laya.Label;
		public cancel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/maskBg.png","height":750},"child":[{"type":"Image","props":{"y":375,"x":667,"width":584,"var":"prompt","skin":"ui/prompt.png","sizeGrid":"15,15,11,13","height":332,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":100,"wordWrap":true,"width":500,"var":"txt","valign":"top","overflow":"scroll","height":150,"fontSize":32,"font":"Arial","color":"#000000","centerX":0,"align":"left"}},{"type":"Image","props":{"var":"close","top":20,"skin":"ui/close.png","right":20}},{"type":"Label","props":{"wordWrap":true,"width":100,"var":"sure","valign":"top","text":"确定","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":-110,"bottom":20,"align":"center"}},{"type":"Label","props":{"wordWrap":true,"width":100,"var":"cancel","valign":"top","text":"取消","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":110,"bottom":20,"align":"center"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AlertHUI.uiView);

        }

    }
}

module ui {
    export class AlertVUI extends View {
		public prompt:Laya.Image;
		public cancel:Laya.Label;
		public sure:Laya.Label;
		public txt:Laya.Label;
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334},"child":[{"type":"Image","props":{"y":667,"x":375,"width":567,"var":"prompt","skin":"ui/prompt.png","height":328,"centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5},"child":[{"type":"Label","props":{"y":771,"x":344,"wordWrap":true,"width":100,"var":"cancel","valign":"top","text":"取消","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":771,"wordWrap":true,"width":100,"var":"sure","valign":"top","text":"确定","overflow":"scroll","height":40,"fontSize":32,"font":"Arial","color":"#000000","centerX":-110,"bottom":20,"align":"center"}},{"type":"Label","props":{"y":100,"wordWrap":true,"width":500,"var":"txt","valign":"top","overflow":"scroll","height":150,"fontSize":32,"font":"Arial","color":"#000000","centerX":0,"align":"left"}},{"type":"Image","props":{"y":20,"x":478,"var":"close","skin":"ui/close.png"}}]}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.AlertVUI.uiView);

        }

    }
}

module ui {
    export class BetBtnVUI extends View {
		public betName:Laya.Label;
		public betBtn:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":200,"height":70},"child":[{"type":"Label","props":{"width":60,"var":"betName","valign":"middle","text":"label","name":"betName","left":20,"height":40,"fontSize":28,"color":"#faf114","centerY":0,"align":"center"}},{"type":"Label","props":{"width":60,"valign":"middle","text":"---","right":20,"name":"betOdd","height":40,"fontSize":28,"color":"#f6e03b","centerY":0,"align":"center"}},{"type":"Button","props":{"y":-2,"var":"betBtn","stateNum":1,"skin":"ui/btn_chip.png","name":"betBtn","left":20,"label":"1","centerY":0}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.BetBtnVUI.uiView);

        }

    }
}

module ui {
    export class GameBgHUI extends View {
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/gameBg.png","height":750}},{"type":"Image","props":{"y":372,"x":471,"var":"close","skin":"ui/close.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameBgHUI.uiView);

        }

    }
}

module ui {
    export class GameBgVUI extends View {
		public close:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/gameBg_v.png"}},{"type":"Image","props":{"y":268,"x":86,"var":"close","skin":"ui/close.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameBgVUI.uiView);

        }

    }
}

module ui {
    export class GameLoadHUI extends View {
		public progressLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"width":1334,"skin":"ui/maskBg.png","height":750,"centerY":0,"centerX":0}},{"type":"Label","props":{"y":375,"x":667,"var":"progressLabel","text":"0%","fontSize":35,"color":"#fdfeff","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoadHUI.uiView);

        }

    }
}

module ui {
    export class GameLoadVUI extends View {
		public progressLabel:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"width":750,"skin":"ui/maskBg.png","height":1334,"centerY":0,"centerX":0}},{"type":"Label","props":{"y":667,"x":375,"visible":true,"var":"progressLabel","text":"0%","fontSize":35,"color":"#ffffff","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.GameLoadVUI.uiView);

        }

    }
}

module ui {
    export class LoadingHUI extends View {
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":1334,"height":750},"child":[{"type":"Image","props":{"y":0,"x":0,"width":1334,"skin":"ui/maskBg.png","height":750}},{"type":"Label","props":{"width":242.798828125,"visible":false,"var":"txt","text":"connecting server...","strokeColor":"#d00400","stroke":5,"height":28,"fontSize":28,"color":"#fbff70","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingHUI.uiView);

        }

    }
}

module ui {
    export class LoadingVUI extends View {
		public txt:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":750,"height":1334},"child":[{"type":"Image","props":{"y":0,"x":0,"width":750,"skin":"ui/maskBg.png","height":1334}},{"type":"Label","props":{"width":242.798828125,"visible":false,"var":"txt","text":"connecting server...","strokeColor":"#d00400","stroke":5,"height":28,"fontSize":28,"color":"#fbff70","centerY":0,"centerX":0,"anchorY":0.5,"anchorX":0.5}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.LoadingVUI.uiView);

        }

    }
}
