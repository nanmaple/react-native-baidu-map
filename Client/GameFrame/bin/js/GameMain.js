/// <reference path="./GameFrame/GameManager/index.ts"/>
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
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.socketUrl = null;
        // this.InitSocket();
        // this.StartSocket(this.socketUrl);
        _this.GameView = new GameView();
        Laya.timer.once(2000, _this, function () {
            _this.GameView.onLoginSucess = true;
            _this.GameView.CheckLoad();
        });
        return _this;
    }
    GameMain.prototype.GameMain = function () {
    };
    /**
    * 侦听Socket连接事件
    */
    GameMain.prototype.OnNoNetwork = function () {
    };
    ;
    /**
     * 侦听Socket连接事件
     */
    GameMain.prototype.OnConnectHandler = function () {
    };
    ;
    /**
     * 侦听Socket关闭事件
     */
    GameMain.prototype.OnCloseHandler = function (message) {
    };
    ;
    /**
     * 侦听会员状态关闭事件
     */
    GameMain.prototype.OnMemberCloseHandler = function () {
    };
    ;
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    GameMain.prototype.OnErrorHandler = function (message) {
    };
    ;
    /**
     * 侦听Socket重新连接事件
     */
    GameMain.prototype.OnWillReconnectHandler = function () {
    };
    ;
    /**
     * 侦听游戏命令
     * @param data
     */
    GameMain.prototype.OnMessageHandler = function (data) {
    };
    ;
    /**
     * 侦听登出事件
     */
    GameMain.prototype.OnLogoutHandler = function () {
    };
    ;
    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    GameMain.prototype.OnAckHandler = function (data) {
    };
    ;
    /**
     * 系统推送（预留）
     * @param data
     */
    GameMain.prototype.OnSystemPushHandler = function (data) {
    };
    ;
    /**
     * 发送消息回调
     * @param dto
     */
    GameMain.prototype.SendHandelr = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Send(dto.Data, msgID);
    };
    return GameMain;
}(GameManager));
//# sourceMappingURL=GameMain.js.map