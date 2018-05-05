namespace ScenePanel {
    export class GameLoadCtrl extends Laya.Sprite {
        private onGameLoadSuccess: Laya.Handler;   //加载进度回调
        private gameLoadScenes: ScenePanel.GameLoadScenes | ScenePanel.GameLoadScenes_Ver;
        private isLoginSuccess: boolean = false;
        private isLoadSuccess: boolean = false;
        private eventDispatcher: laya.events.EventDispatcher = new laya.events.EventDispatcher();
        private memberServer: ServiceManager.MemberManager;
        private loginService: any = null;

        constructor(onGameLoadSuccess: Laya.Handler) {
            super();
            this.onGameLoadSuccess = onGameLoadSuccess;
            document.addEventListener("screenMode", () => {
                if (GameConfig.ScreenMode) {
                    this.gameLoadScenes = new ScenePanel.GameLoadScenes();
                } else {
                    this.gameLoadScenes = new ScenePanel.GameLoadScenes_Ver();
                }
                Laya.stage.addChild(this.gameLoadScenes.GetUI());
            })
            this.memberServer = new ServiceManager.MemberManager(GameConfig.GameID);

            //获取Socket Token
            this.loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, (data)=>{
               this.GetMemberInfoSuccess(data);
            }, null, ()=>{ this.GetMemberInfoError() });
            let authorizationInfo = this.loginService.GetAuthorizationDtoByLocal(); 
       
            if (!authorizationInfo.Token) {
                this.GoGameLobby();
            } else {
                this.LoginSuccess(authorizationInfo.Token);
                //获取会员信息
                this.loginService.GetMemberInfo(true);    
            }      
            //加载游戏开资源
            this.onLoaded();
        }
        /**
         * 获取会员信息成功
         */
        private GetMemberInfoSuccess(Data:any):void{
            let memberInfo = Data.MemberInfo;
            let memberId = memberInfo.MemberId;
            //微信js签名配置
            let wechat = new Laya.Browser.window.Wechat(Utils.Http, ()=>{}, GameConfig.GetWeChatShareDto(memberId,false));
            wechat.GetJsSignature();
        }
        /**
         * 获取会员信息失败
         */
        private GetMemberInfoError():void{
            // this.GoGameLobby();
        }
        /**
         * 跳转至游戏大厅
         */
        private GoGameLobby(): void{
            let parentID = Utils.Url.GetQuery("parentid");
            Laya.Browser.window.location.replace(`http://${GameConfig.Domain}?gameid=${GameConfig.GameID}&parentid=${parentID}`);
        }

        /**
         * 登录成功
         */
        private LoginSuccess(token: string): void {
            let successHandler = Laya.Handler.create(this, () => {
                this.isLoginSuccess = true;
                if (this.isLoadSuccess) {
                    document.removeEventListener("screenMode", () => {
                        console.log("screenMode");
                    })
                    this.onGameLoadSuccess.run();
                }
            }, null, false);
            let errorHandler = Laya.Handler.create(this, this.LoginError, null, false);
            this.memberServer.GetSocketToken(token, successHandler, errorHandler);
        }

        /**
         * 登录失败
         */
        private LoginError(): void {
            //抛出错误提示
            // this.gameLoadScenes.LoadError(error);
            // this.GoGameLobby();
            this.isLoginSuccess = false;
        }

        /**
         * 开始加载游戏资源
         */
        private onLoaded(): void {
            if (GameConfig.ScreenMode) {
                this.gameLoadScenes = new ScenePanel.GameLoadScenes();
            } else {
                this.gameLoadScenes = new ScenePanel.GameLoadScenes_Ver();
            }
            Laya.stage.addChild(this.gameLoadScenes.GetUI());
            // Laya.URL.basePath = "http://m.17guess.cn/1/";
            // Laya.URL.rootPath = "http://m.17guess.cn/1/";
            //加载游戏资源内容
            var dataArr: Array<any> = ScenePanel.LoadResourcesConfig;
            Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.onProgress, null, false));
        }

        /**
         * 加载游戏资源的进度回调
         * @param progress 进度
         */
        private onProgress(progress: number): void {
            this.gameLoadScenes.LoadProgress(progress);
        }

        /**
         * 游戏资源加载完成
         */
        private onLoadResource(): void {
            this.isLoadSuccess = true;
            if (this.isLoginSuccess) {
                this.onGameLoadSuccess.run();
            }
        }
    }
}