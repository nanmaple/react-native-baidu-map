namespace Dto {
    //发送dto
    export class HandlerDto {
        /**
         * 数据ID
         */
        public MsgID: string
        /**
         * handler数据
         */
        public Data: any = [];
    }
}