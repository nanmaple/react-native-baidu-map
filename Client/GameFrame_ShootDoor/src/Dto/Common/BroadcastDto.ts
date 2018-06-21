namespace Dto{
    /**
     * 广播数据
     */
    export class BroadcastDto{
        /**
         * 类型
         */
        Type: Enum.ListenUIEnum;
        /**
         * 值
         */
        Value: any = null;
    }
}