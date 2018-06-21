/*
* name;
*/
namespace GameDto {
    export class CheckLoginDto{
        /**
         * 结果类型
         */
        public Type: GameEnum.CheckLoginEnum;

        /**
         * 数据内容
         */
        public Data: any;
    }
}