
    class GameBgHV extends GameBgBaseUI implements IUI{
        private broadcast:Dto.BroadcastDto = new Dto.BroadcastDto();
        constructor() {
            super();
   
        }
        public Log():void{}
        public Set(data: any):void{}
        public Refresh():void{}
        /**
         * 广播
         */
        private Broadcast():void{
            this.broadcast.Type = Enum.ListenUIEnum.OnGameBgClick;
            let event = new CustomEvent("GameUI",{detail:this.broadcast});
            document.dispatchEvent(event);
            
        }
        public Close():void{
            this.Broadcast();
        }
    }
