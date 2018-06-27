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
}