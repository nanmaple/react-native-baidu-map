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
            //从会员服务中获取用户信息
            _this.memberServer = new ServiceManager.MemberManager(GameConfig.GameID);
            //获取Socket Token
            var authorizationInfo = _this.memberServer.GetSocketInfo();
            if (!authorizationInfo.Token) {
                var parentId = Utils.Url.GetQuery("parentid");
                var dto = new BaseDto.LoginDto();
                dto.DeviceType = GameConfig.DeviceType;
                dto.DeviceId = GameConfig.DeviceId;
                var successHandler = Laya.Handler.create(_this, _this.LoginSuccess, null, false);
                var errorHandler = Laya.Handler.create(_this, _this.LoginError, null, false);
                _this.memberServer.LoginByTourists(dto, authorizationInfo.Token, successHandler, errorHandler);
            }
            else {
                _this.LoginSuccess(authorizationInfo.Token);
            }
            var url = Laya.Browser.window.location.href;
            _this.memberServer.GetJsSignature(url, Laya.Handler.create(_this, _this.GetWeChatSuccess, null, false));
            //加载游戏开资源
            _this.onLoaded();
            return _this;
        }
        /**
         * 获取微信配置信息成功
         */
        GameLoadCtrl.prototype.GetWeChatSuccess = function (dto) {
            var wechat = new Utils.WeChat();
            wechat.Init(dto);
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
            this.gameLoadScenes.LoadError(error);
            this.isLoginSuccess = false;
            console.log(error);
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
            //加载游戏资源内容
            var dataArr = ScenePanel.LoadResourcesConfig;
            Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.onProgress, null, false));
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
