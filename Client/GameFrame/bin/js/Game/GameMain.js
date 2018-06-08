/// <reference path="../GameFrame/GameManager/index.ts"/>
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
        var _this = _super.call(this) || this;
        _this.socketUrl = null;
        return _this;
    }
    GameMain.prototype.GameMain = function () {
    };
    /**
    * 侦听Socket连接事件
    */
    GameMain.prototype.OnNoNetwork = function () {
        this.Log("", "OnNoNetwork");
    };
    ;
    /**
     * 侦听Socket连接事件
     */
    GameMain.prototype.OnConnectHandler = function () {
        this.Log("", "OnConnectHandler");
    };
    ;
    /**
     * 侦听Socket关闭事件
     */
    GameMain.prototype.OnCloseHandler = function (message) {
        this.Log("", "OnCloseHandler");
    };
    ;
    /**
     * 侦听会员状态关闭事件
     */
    GameMain.prototype.OnMemberCloseHandler = function () {
        this.Log("", "OnMemberCloseHandler");
    };
    ;
    /**
     * 侦听Socket错误事件
     * @param message 错误信息
     */
    GameMain.prototype.OnErrorHandler = function (message) {
        this.Log(message, "OnErrorHandler");
    };
    ;
    /**
     * 侦听Socket重新连接事件
     */
    GameMain.prototype.OnWillReconnectHandler = function () {
        this.Log("", "OnWillReconnectHandler");
    };
    ;
    /**
     * 侦听游戏命令
     * @param data
     */
    GameMain.prototype.OnMessageHandler = function (data) {
        this.Log(data, "OnMessageHandler");
        this.GameView.SetData(GameEnum.GameViewEnum.GameData, data);
    };
    ;
    /**
     * 侦听登出事件
     */
    GameMain.prototype.OnLogoutHandler = function () {
        this.Log("", "OnLogoutHandler");
    };
    ;
    /**
     * Ack回调
     * @param data ack信息，一般为之前发送信息的消息id
     */
    GameMain.prototype.OnAckHandler = function (data) {
        this.Log(data, "OnAckHandler");
    };
    ;
    /**
     * 系统推送（预留）
     * @param data
     */
    GameMain.prototype.OnSystemPushHandler = function (data) {
        this.Log(data, "OnSystemPushHandler");
    };
    ;
    /**
     * 发送消息回调
     * @param dto
     */
    GameMain.prototype.SendHandelr = function (dto) {
        var msgID = dto.MsgID ? dto.MsgID : Utils.Guid.Create();
        this.Log({ Data: dto.Data, msgID: msgID }, "OnSystemPushHandler");
        this.Send(dto.Data, msgID);
    };
    /********************* Socket *********************/
    /******************* 界面事件hander *****************/
    GameMain.prototype.Handler = function (Type, Data) {
        switch (Type) {
            case Enum.GameViewHandlerEnum.BetPos:
                break;
        }
    };
    return GameMain;
}(GameManager));
//# sourceMappingURL=GameMain.js.map