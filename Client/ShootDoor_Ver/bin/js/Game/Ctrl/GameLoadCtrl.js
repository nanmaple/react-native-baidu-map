var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScenePanel;
(function (ScenePanel) {
    var GameLoadCtrl = /** @class */ (function (_super) {
        __extends(GameLoadCtrl, _super);
        function GameLoadCtrl(onGameLoadSuccess) {
            var _this = _super.call(this) || this;
            _this.isLoginSuccess = false;
            _this.isLoadSuccess = false;
            _this.eventDispatcher = new laya.events.EventDispatcher();
            _this.loginService = null;
            _this.onGameLoadSuccess = onGameLoadSuccess;
            document.addEventListener("screenMode", function () {
                if (GameConfig.ScreenMode) {
                    _this.gameLoadScenes = new ScenePanel.GameLoadScenes();
                }
                else {
                    _this.gameLoadScenes = new ScenePanel.GameLoadScenes_Ver();
                }
                Laya.stage.addChild(_this.gameLoadScenes.GetUI());
            });
            _this.memberServer = new ServiceManager.MemberManager(GameConfig.GameID);
            //获取Socket Token
            _this.loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, function (data) {
                _this.GetMemberInfoSuccess(data);
            }, null, function () { _this.GetMemberInfoError(); });
            var authorizationInfo = _this.loginService.GetAuthorizationDtoByLocal();
            if (!authorizationInfo.Token) {
                _this.GoGameLobby();
            }
            else {
                _this.LoginSuccess(authorizationInfo.Token);
                //获取会员信息
                _this.loginService.GetMemberInfo(true);
            }
            //加载游戏开资源
            _this.onLoaded();
            return _this;
        }
        /**
         * 获取会员信息成功
         */
        GameLoadCtrl.prototype.GetMemberInfoSuccess = function (Data) {
            var memberInfo = Data.MemberInfo;
            var memberId = memberInfo.MemberId;
            //微信js签名配置
            var wechat = new Laya.Browser.window.Wechat(Utils.Http, function () { }, GameConfig.GetWeChatShareDto(memberId, false));
            wechat.GetJsSignature();
        };
        /**
         * 获取会员信息失败
         */
        GameLoadCtrl.prototype.GetMemberInfoError = function () {
            // this.GoGameLobby();
        };
        /**
         * 跳转至游戏大厅
         */
        GameLoadCtrl.prototype.GoGameLobby = function () {
            var parentID = Utils.Url.GetQuery("parentid");
            Laya.Browser.window.location.replace("http://" + GameConfig.Domain + "?gameid=" + GameConfig.GameID + "&parentid=" + parentID);
        };
        /**
         * 登录成功
         */
        GameLoadCtrl.prototype.LoginSuccess = function (token) {
            var _this = this;
            var successHandler = Laya.Handler.create(this, function () {
                _this.isLoginSuccess = true;
                if (_this.isLoadSuccess) {
                    document.removeEventListener("screenMode", function () {
                        console.log("screenMode");
                    });
                    _this.onGameLoadSuccess.run();
                }
            }, null, false);
            var errorHandler = Laya.Handler.create(this, this.LoginError, null, false);
            this.memberServer.GetSocketToken(token, successHandler, errorHandler);
        };
        /**
         * 登录失败
         */
        GameLoadCtrl.prototype.LoginError = function (error) {
            //抛出错误提示
            // this.gameLoadScenes.LoadError(error);
            // this.GoGameLobby();
            this.isLoginSuccess = false;
            if (error == BaseEnum.ErrorCode.MemberClosed) {
                alert("账号已关闭!");
            }
        };
        /**
         * 开始加载游戏资源
         */
        GameLoadCtrl.prototype.onLoaded = function () {
            if (GameConfig.ScreenMode) {
                this.gameLoadScenes = new ScenePanel.GameLoadScenes();
            }
            else {
                this.gameLoadScenes = new ScenePanel.GameLoadScenes_Ver();
            }
            Laya.stage.addChild(this.gameLoadScenes.GetUI());
            // Laya.URL.basePath = "http://m.17guess.cn/1/";
            // Laya.URL.rootPath = "http://m.17guess.cn/1/";
            //设置版本控制类型为使用文件名映射的方式
            Laya.ResourceVersion.type = Laya.ResourceVersion.FILENAME_VERSION;
            // //加载版本信息文件
            // Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, ()=>{
            //加载游戏资源内容
            var dataArr = ScenePanel.LoadResourcesConfig;
            Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.onProgress, null, false));
            // },null,false));  
        };
        /**
         * 加载游戏资源的进度回调
         * @param progress 进度
         */
        GameLoadCtrl.prototype.onProgress = function (progress) {
            this.gameLoadScenes.LoadProgress(progress);
        };
        /**
         * 游戏资源加载完成
         */
        GameLoadCtrl.prototype.onLoadResource = function () {
            this.isLoadSuccess = true;
            if (this.isLoginSuccess) {
                this.onGameLoadSuccess.run();
            }
        };
        return GameLoadCtrl;
    }(Laya.Sprite));
    ScenePanel.GameLoadCtrl = GameLoadCtrl;
})(ScenePanel || (ScenePanel = {}));
