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
var Scene;
(function (Scene) {
    var GameLoadCtrl = /** @class */ (function (_super) {
        __extends(GameLoadCtrl, _super);
        function GameLoadCtrl(onGameLoadSuccess) {
            var _this = _super.call(this) || this;
            _this.onGameLoadSuccess = onGameLoadSuccess;
            //加载游戏开始界面资源
            var dataArr = [
                { url: "res/atlas/load.atlas", type: Laya.Loader.ATLAS },
                { url: "load/bg_load.png", type: Laya.Loader.IMAGE },
            ];
            Laya.loader.load(dataArr, Laya.Handler.create(_this, _this.onLoaded));
            return _this;
        }
        /**
         * 游戏开始界面资源加载成功，立即显示场景到界面
         */
        GameLoadCtrl.prototype.onLoaded = function () {
            this.gameLoadScenes = new Scene.GameLoadScenes();
            Laya.stage.addChild(this.gameLoadScenes);
            // this.doLogin();
            //加载游戏资源内容
            var dataArr = Scene.LoadResourcesConfig;
            Laya.loader.load(dataArr, Laya.Handler.create(this, this.onLoadResource), Laya.Handler.create(this, this.onProgress, null, false));
        };
        /**
         * 微信登录
         */
        GameLoadCtrl.prototype.doLogin = function () {
            //登录参数
            var dto = new Dto.LoginDto();
            //获取地址栏中code
            dto.Code = Utils.Url.GetQuery("code");
            //获取地址栏中state参数，即父级（推荐人）ID
            dto.ParentID = Utils.Url.GetQuery("state");
            //会员服务
            var memberServer = new MemberManager.Member();
            //登录
            memberServer.Login(dto);
        };
        /**
         * 加载游戏资源的进度回调
         * @param progress 进度
         */
        GameLoadCtrl.prototype.onProgress = function (progress) {
            console.log("进度：" + progress);
            this.gameLoadScenes.LoadProgress(progress);
        };
        /**
         * 游戏资源加载完成
         */
        GameLoadCtrl.prototype.onLoadResource = function () {
            console.log("进度：over");
            var startGame = Laya.Handler.create(this, this.onStartGame);
            this.gameLoadScenes.BindHandler(startGame);
        };
        /**
         * 点击开始游戏
         */
        GameLoadCtrl.prototype.onStartGame = function () {
            Laya.stage.removeChild(this.gameLoadScenes);
            this.onGameLoadSuccess.run();
        };
        return GameLoadCtrl;
    }(Laya.Sprite));
    Scene.GameLoadCtrl = GameLoadCtrl;
})(Scene || (Scene = {}));
//# sourceMappingURL=Ctrl.js.map