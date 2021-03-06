/// <reference path="WebApiBase.ts" />
namespace Network {
    /**
     * WebApi层
     * 单例 使用WebApi.instance
     */
    export class WebApi extends WebApiBase {
        //单例
        private static instance: WebApi;
        constructor() {
            super();
        }

        /**
         * 单例
         */
        public static GetInstance(): WebApi {
            if (!this.instance) {
                this.instance = new WebApi();
                this.instance.InitToken();
            }
            return this.instance;
        }

        public Log():void{
            
        }
        
    }
}