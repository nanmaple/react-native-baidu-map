namespace ScenePanel {
    export class GameLoadCtrl extends Laya.Sprite {
        private onGameLoadSuccess: Laya.Handler;   //加载进度回调
        private gameLoadScenes: ScenePanel.GameLoadScenes | ScenePanel.GameLoadScenes_Ver;
        private isLoginSuccess: boolean = false;
        private isLoadSuccess: boolean = false;
        private eventDispatcher: laya.events.EventDispatcher = new laya.events.EventDispatcher();
        private memberServer: ServiceManager.MemberManager;
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
            //从会员服务中获取用户信息
            this.memberServer = new ServiceManager.MemberManager(GameConfig.GameID);
            //获取Socket Token
            let authorizationInfo = this.memberServer.GetSocketInfo();
            if (!authorizationInfo.Token) {
                let parentID = Utils.Url.GetQuery("parentid");
                Laya.Browser.window.location.replace(`http://${GameConfig.Domain}?gameid=${GameConfig.GameID}&parentid=${parentID}`);
            } else {
                this.LoginSuccess(authorizationInfo.Token);
                Net.WebApi.GetInstance().GetAppID(Laya.Handler.create(this,()=>{
                    let url: string = Laya.Browser.window.location.href;
                    this.memberServer.GetJsSignature(url, Laya.Handler.create(this, this.GetWeChatSuccess, null, false));
                },null,false))
            }
            
            //加载游戏开资源
            this.onLoaded();
        }

        /**
         * 获取微信配置信息成功
         */
        private GetWeChatSuccess(dto: BaseDto.WeChatSignatureDto): void {
            let wechat: Utils.WeChat = new Utils.WeChat();
            wechat.Init(dto);
            console.log(dto);
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
        private LoginError(error: string): void {
            //抛出错误提示
            this.gameLoadScenes.LoadError(error);
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