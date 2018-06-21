/**
 * 工具类：Http网络请求类
 * 封装Get,Post方法
 */
namespace Utils {
    /**
     * Http类接口
     */
   export interface IHttp {
        /**
         * Post方法
         * @param url 请求地址
         * @param params 参数
         * @param header header头信息
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        Post(url: string, params: any, header: any, successBack: Function, failBack: Function, processBack: Function),

        /**
         * Get方法
         * @param url 请求地址
         * @param params 参数
         * @param header header头信息
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        Get(url: string, params: any, header: any, successBack: Function, failBack: Function, processBack: Function),

        /**
         * 设置授权信息
         * @param authorization 授权token
         */
        SetAuthorization(authorization: string),

        /**
         * 设置header信息
         * @param headers header请求头
         */
        SetHeader(headers: any)
    }
}