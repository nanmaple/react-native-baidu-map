/// <reference path="../Enum/GameModalEnum.ts" />
namespace BaseDto {
    /**
     * Modal弹出传递数据Dto
     */
    export class GameModalDto {
        /**
         * 消息ID
         */
        public Type: BaseEnum.GameModalEnum;

        /**
         * 数据内容
         */
        public Data: any;
    }
}