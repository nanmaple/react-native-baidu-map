/// <reference path='ISocketManager.ts'/>
/// <reference path='EventEnum.ts'/>
/**
 * Socket管理类
 */
namespace Network.Socket {
    /**
     * Socket类
     */
    export class SocketManager extends Laya.EventDispatcher implements ISocketManager {
        //socket对象
        private socket: Utils.ISocket;
        constructor() {
            super();
            this.socket = new Utils.Socket();
            let params: Utils.SocketParam = new Utils.SocketParam();
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
            //设置网络状态
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
            //关闭连接
            this.socket.Close();
        }

        /**
         * 发送消息
         * @param gameData 游戏命令组装的数据
         * @param msgID 消息ID
         */
        public Send(gameData: any = null, msgID: string): void {
            //组装消息dto
            let msgDto: GameDto.MessageDto = new GameDto.MessageDto();
            msgDto.MSGID = msgID;
            msgDto.Command = GameEnum.MainCommand.MSG_GAME;
            msgDto.Data = gameData
            let msg: string = JSON.stringify(msgDto);
            //发送
            this.socket.Send(msg);
        }

        /**
        * 连接回调
        */
        private OnConnect(): void {
            //广播上层-连接成功
            this.event(Network.Socket.SocketEvent.OnConnect);
        }

        /**
         * 关闭链接
         */
        private OnClosed(message: string): void {
            //广播上层-关闭连接
            this.event(Network.Socket.SocketEvent.OnClose,message);
        }

        /**
         * 错误
         */
        private OnError(message: string): void {
            //广播上层-错误
            this.event(Network.Socket.SocketEvent.OnError, message);
        }

        /**
         * 正在重连
         */
        private OnWillReconnect(): void {
            //广播上层-重连
            this.event(Network.Socket.SocketEvent.OnWillReconnect);
        }

        /**
         * 接收消息
         */
        private OnMessage(message: string): void {
            if (!message) return;
            let messageDto: GameDto.MessageDto;
            try {
                messageDto = JSON.parse(message) as GameDto.MessageDto;
            }
            catch (error) {
                return;
            }

            switch (messageDto.Command) {
                case GameEnum.MainCommand.MSG_ACK:
                    //广播上层-ACK
                    this.event(Network.Socket.SocketEvent.OnAck, messageDto.Data);
                    break;
                case GameEnum.MainCommand.MSG_GAME:
                    //广播上层-游戏命令
                    this.event(Network.Socket.SocketEvent.OnGame, messageDto.Data);
                    break;
                case GameEnum.MainCommand.MSG_ERROR:
                    //广播上层-错误
                    this.event(Network.Socket.SocketEvent.OnError, messageDto.Data);
                    break;
                case GameEnum.MainCommand.MSG_KICKOUT:
                    //登出，断开连接
                    this.socket.Close();
                    //广播上层-登出
                    this.event(Network.Socket.SocketEvent.OnLogout);
                    break;
                case GameEnum.MainCommand.MSG_SYSTEM_PUSH:
                    //系统推送消息
                    this.event(Network.Socket.SocketEvent.OnSystemPush, messageDto.Data);
                    break;
                case GameEnum.MainCommand.MSG_MEMBERCLOSED:
                    //断开连接
                    this.socket.Close();
                    //广播上层-会员状态已经关闭
                    this.event(Network.Socket.SocketEvent.OnMemberClose);
                    break;
                default:
                    break;
            }
        }

    }
}