/**
 * 事件通知Dto
 * -->一版不修改<--
 */
namespace Dto {
    /**
     * 事件通知数据
     */
    export class EventNotificationDto {
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