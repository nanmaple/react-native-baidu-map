namespace BaseDto {
    /**
     * 消息Dto
     */
    export class MessageDto {
        /**
         * 消息ID
         */
        public MSGID: string;

        /**
         * 命令枚举
         */
        public Command: BaseEnum.MainCommand

        /**
         * 数据内容
         */
        public Data: any;
    }

    //游戏命令dto
    export class GameMessageDto {
        /**
         * 游戏命令枚举
         */
        public Command: BaseEnum.GameCommand;
        /**
         * 游戏命令内容
         */
        public Data: any
    }
}