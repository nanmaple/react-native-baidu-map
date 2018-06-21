
    class LoadingHV extends LoadingBaseUI implements IUI{
        constructor() {
            super();
        }
        /**
         * 显示Connect Server
         */
        public ShowLoading(txt: string): void {
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            if (!this.ui) {
                return;
            }
            this.loadingShow = true;
            this.loadingTxt = language.GetLanguage(txt);
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
        public Set(data:GameDto.GameModalDto):void{
            switch (data.Type) {
                case GameEnum.GameModalEnum.Close:
                    this.HideLoading();
                    break;
                case GameEnum.GameModalEnum.Open:
                    this.ShowLoading(LanguageUtils.Type.ConnectService)
                    break;
                case GameEnum.GameModalEnum.Msg:
                    this.ShowLoading(data.Data);
                    break;
                case GameEnum.GameModalEnum.LoginOut:
                    this.ShowLoading(LanguageUtils.Type.AccountLoginOut)
                    break;
                case GameEnum.GameModalEnum.MemClose:
                    this.ShowLoading(LanguageUtils.Type.MemberClosed)
                    break;
                default:
                    break;
            }
        }

        public Refresh():void{

        }
      
    }
