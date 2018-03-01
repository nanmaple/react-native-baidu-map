/// <reference path='ISocketManager.ts'/>
/// <reference path='EventEnum.ts'/>
/**
 * Socket管理类
 */
namespace ServiceManager {
    /**
     * Socket类
     */
    export class SocketManager extends Laya.EventDispatcher implements ISocketManager {
        //socket对象
        private socket: Utils.Socket.IWebSocket;
        constructor() {
            super();
            this.socket = new Utils.Socket.WebSocket();
            let params: Utils.Socket.WebSocketParam = new Utils.Socket.WebSocketParam();
            params.OnConnect = Laya.Handler.create(this, this.OnConnect, null, false);
            params.OnError = Laya.Handler.create(this, this.OnError, null, false);
            params.OnClosed = Laya.Handler.create(this, this.OnClosed, null, false);
            params.OnMessage = Laya.Handler.create(this, this.OnMessage, null, false);
            params.OnWillReconnect = Laya.Handler.create(this, this.OnWillReconnect, null, false);
            this.socket.Init(params);
        }
        /**
         * 连接
         * @param token 
         */
        public SetNetwork(status: boolean) {
            //启动连接
            this.socket.SetNetwork(status);
        }

        /**
         * 连接
         * @param token 
         */
        public Connect(url: string): void {
            //启动连接
            this.socket.Connect(url);
        }

        /**
         * 关闭
         */
        public Close(): void {
            //启动连接
            this.socket.Close();
        }

        /**
         * 发送消息
         * @param command 命令枚举
         * @param data 数据
         */
        public Send(data: any = null, msgID: string = Utils.Guid.Create()): string {
            //组装游戏命令Dto
            let gameDto: BaseDto.GameMessageDto = new BaseDto.GameMessageDto();
            gameDto.Command = BaseEnum.GameCommand.MSG_GAME_BET;
            gameDto.Data = data;
            //组装消息dto
            let msgDto: BaseDto.MessageDto = new BaseDto.MessageDto();
            msgDto.MSGID = msgID;
            msgDto.Command = BaseEnum.MainCommand.MSG_GAME;
            msgDto.Data = gameDto
            let msg: string = JSON.stringify(msgDto);
            //发送
            this.socket.Send(msg);
            return msgDto.MSGID;
        }

        /**
        * 连接回调
        */
        private OnConnect(): void {
            //广播上层-连接成功
            this.event(ServiceManager.SocketEvent.OnConnect);
        }

        /**
         * 关闭链接
         */
        private OnClosed(): void {
            //广播上层-关闭连接
            this.event(ServiceManager.SocketEvent.OnClose);
        }

        /**
         * 错误
         */
        private OnError(message: string): void {
            //广播上层-错误
            this.event(ServiceManager.SocketEvent.OnError, message);
        }

        /**
         * 正在重连
         */
        private OnWillReconnect(): void {
            //广播上层-重连
            this.event(ServiceManager.SocketEvent.OnWillReconnect);
        }

        /**
         * 接收消息
         */
        private OnMessage(message: string): void {
            if (!message) return;
            let messageDto: BaseDto.MessageDto;
            try {
                messageDto = JSON.parse(message) as BaseDto.MessageDto;
            }
            catch (error) {
                return;
            }

            switch (messageDto.Command) {
                case BaseEnum.MainCommand.MSG_ACK:
                    //广播上层-ACK
                    this.event(ServiceManager.SocketEvent.OnAck, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MSG_GAME:
                    //广播上层-游戏命令
                    this.event(ServiceManager.SocketEvent.OnGame, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MSG_ERROR:
                    //广播上层-错误
                    this.event(ServiceManager.SocketEvent.OnError, messageDto.Data);
                    break;
                case BaseEnum.MainCommand.MSG_KICKOUT:
                    //登出，断开连接
                    this.socket.Close();
                    //广播上层-登出
                    this.event(ServiceManager.SocketEvent.OnLogout);
                    break;
                case BaseEnum.MainCommand.MSG_SYSTEM_PUSH:
                    //系统推送消息
                    this.event(ServiceManager.SocketEvent.OnSystemPush, messageDto.Data);
                    break;
                default:
                    break;
            }
        }

    }
}