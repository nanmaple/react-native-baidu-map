
    class LoadingHV extends LoadingBaseUI implements IUI{
        constructor() {
            super();
        }
        /**
         * 显示Connect Server
         */
        public ShowLoading(txt: string): void {
            if (!this.ui) {
                return;
            }
            this.loadingShow = true;
            this.loadingTxt = txt;
            this.ui.visible = this.loadingShow;
            this.ui.txt.text = this.loadingTxt;
        }

        /**
         * 隐藏Connect Server
         */
        public HideLoading(): void {
            if (!this.ui) {
                return;
            }
            this.loadingShow = false;
            this.ui.visible = this.loadingShow;
        }

        /**
         * Loading加载处理
         * @param data 
         */
        public LoadingHandle(data:GameDto.GameModalDto):void{
            switch (data.Type) {
                case GameEnum.GameModalEnum.Close:
                    this.HideLoading();
                    break;
                case GameEnum.GameModalEnum.Open:
                    this.ShowLoading("Connect Service")
                    break;
                case GameEnum.GameModalEnum.Msg:
                    this.ShowLoading(data.Data);
                    break;
                case GameEnum.GameModalEnum.LoginOut:
                    this.ShowLoading("你的账户已在其他地方登陆")
                    break;
                case GameEnum.GameModalEnum.MemClose:
                    this.ShowLoading("账户已关闭")
                    break;
                default:
                    break;
            }
        }

        public Refresh():void{

        }
        /**
         * 设置文本显示内容
         * @param data 
         */
        public Set(data:any):void{
            if (!this.ui) {
                return;
            }
            this.loadingTxt = data;
            this.ui.txt.text = this.loadingTxt;
        }
    }
