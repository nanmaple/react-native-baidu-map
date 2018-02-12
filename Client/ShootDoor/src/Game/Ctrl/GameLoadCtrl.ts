namespace ScenePanel {
    export class GameLoadCtrl extends Laya.Sprite {
        private onGameLoadSuccess: Laya.Handler;   //加载进度回调
        private gameLoadScenes: ScenePanel.GameLoadScenes;
        private isLoginSuccess: boolean = false;
        private isLoadSuccess: boolean = false;
        constructor(onGameLoadSuccess: Laya.Handler) {
            super();
            this.onGameLoadSuccess = onGameLoadSuccess;
            //从会员服务中获取用户信息
            let memberServer = new ServiceManager.MemberManager(GameConfig.GameID);
            //获取Socket Token
            let authorizationInfo = memberServer.GetSocketInfo();
            if (!authorizationInfo.SocketToken || !authorizationInfo.Token) {
                let parentId: string = Utils.Url.GetQuery("parentid");
                let dto: BaseDto.LoginDto = new BaseDto.LoginDto();
                dto.DeviceType = GameConfig.DeviceType;
                dto.DeviceId = GameConfig.DeviceId;
                let successHandler = Laya.Handler.create(this, this.LoginSuccess, null, false);
                let errorHandler = Laya.Handler.create(this, this.LoginError, null, false);
                memberServer.LoginByTourists(dto, authorizationInfo.Token, successHandler, errorHandler);
            } else {
                this.isLoginSuccess = true;
            }
            let url: string = Laya.Browser.window.location.href;
            memberServer.GetJsSignature(url, Laya.Handler.create(this, this.GetWeChatSuccess, null, false));
            //加载游戏开资源
            this.onLoaded();
        }

        /**
         * 获取微信配置信息成功
         */
        private GetWeChatSuccess(dto: BaseDto.WeChatSignatureDto): void {
            let wechat: Utils.WeChat = new Utils.WeChat();
            wechat.Init(dto);
        }


        /**
         * 登录成功
         */
        private LoginSuccess(): void {
            this.isLoginSuccess = true;
            if (this.isLoadSuccess) {
                this.onGameLoadSuccess.run();
            }
        }

        /**
         * 登录失败
         */
        private LoginError(error: string): void {
            this.gameLoadScenes.LoadError(error);
            this.isLoginSuccess = true;
            if (this.isLoadSuccess) {
                this.onGameLoadSuccess.run();
            }
        }
        /**
         * 开始加载游戏资源
         */
        private onLoaded(): void {
            this.gameLoadScenes = new ScenePanel.GameLoadScenes();
            Laya.stage.addChild(this.gameLoadScenes);

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