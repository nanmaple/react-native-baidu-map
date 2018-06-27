namespace Dto{
    /**
     * 广播数据
     */
    export class BroadcastDto{
        /**
         * 类型
         */
        Type: Enum.ListenViewEnum;
        /**
         * 值
         */
        Value: any = null;
    }
}