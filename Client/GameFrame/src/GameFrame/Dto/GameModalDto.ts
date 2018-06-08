/// <reference path="../Enum/GameModalEnum.ts" />
namespace GameDto {
    /**
     * 消息Dto
     */
    export class GameModalDto {
        /**
         * 消息ID
         */
        public Type: GameEnum.GameModalEnum;

        /**
         * 数据内容
         */
        public Data: any;
    }
}