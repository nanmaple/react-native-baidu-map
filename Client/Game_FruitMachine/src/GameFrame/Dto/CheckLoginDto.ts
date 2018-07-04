/// <reference path="../Enum/CheckLoginEnum.ts" />

namespace BaseDto {
    /*
    * 检测登录返回数据Dto
    */
    export class CheckLoginDto {
        /**
         * 结果类型
         */
        public Type: BaseEnum.CheckLoginEnum;

        /**
         * 数据内容
         */
        public Data: any;
    }
}