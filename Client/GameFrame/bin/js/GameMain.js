/// <reference path="GameFrame/GameManager/index.ts"/>
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
var GameMain = /** @class */ (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
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
    return GameMain;
}(GameManager));
//# sourceMappingURL=GameMain.js.map