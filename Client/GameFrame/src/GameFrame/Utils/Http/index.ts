/// <reference path="IHttp.ts"/>
/**
 * 工具类：Http网络请求类
 * 封装Get,Post方法
 */
namespace Utils {
    /**
     * Http类，
     */
    export class Http implements Utils.IHttp {
        private headers = [
            "Accept", "application/json",
            'Content-Type', "application/x-www-form-urlencoded",
            'Access-Control-Allow-Origin', "*",
        ];

        /**
         * 请求方法
         * @param method 方法类型
         * @param url 地址
         * @param params 参数
         * @param header header
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        private Request(method: string, url: string, params: string, headers: Array<string> = this.headers, successBack: Function, failBack: Function, processBack: Function): void {
            var xhr: Laya.HttpRequest = new Laya.HttpRequest();
            xhr.http.timeout = 10000;//设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, successBack);
            xhr.once(Laya.Event.ERROR, this, failBack);
            xhr.on(Laya.Event.PROGRESS, this, processBack);
            xhr.send(url, params, method, "json", headers);
        }

        /**
         * Post方法
         * @param url 地址
         * @param params 参数
         * @param header header键值队数组
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        public Post(url: string, params: any = {}, header: any = null, successBack: Function, failBack: Function, processBack?: Function) {
            //header处理
            header = this.ObjectToArray(header, this.headers);
            //参数转换,对象转"a=xxx&b=xxx"
            let paramsStr:string="";
            let keyArray: Array<string> = new Array();
            if (params) {
                for (let i in params) {
                    keyArray.push(`${i}=${params[i]}`)
                }
                paramsStr = keyArray.join("&");
            }
            this.Request("post", url, paramsStr, header, (response: any) => {
                successBack && successBack(response);
            }, (error: Error) => {
                failBack && failBack(error);
            }, (data) => {
                processBack && processBack(data);
            })
        }

        /**
         * Get方法
         * @param url 地址
         * @param params 参数
         * @param header header键值队数组
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        public Get(url: string, params: any = {}, header: any = null, successBack: Function, failBack: Function, processBack?: Function) {
            //header处理
            header = this.ObjectToArray(header, this.headers);
            let keyArray: Array<string> = new Array();
            let paramsStr: string;
            //参数转换,对象转"?a=xxx&b=xxx",并拼接到地址后面
            if (params) {
                for (let i in params) {
                    keyArray.push(`${i}=${params[i]}`)
                }
                paramsStr = keyArray.join("&");
                url = `${url}?${paramsStr}`;
                params = "";
            }
            this.Request("get", url, params, header, (response: any) => {
                successBack && successBack(response);
            }, (error: Error) => {
                failBack && failBack(error);
            }, (data) => {
                processBack && processBack(data);
            })
        }

        /**
         * 设置权限token
         * @param authorization token值 , 清除时传null
         */
        public SetAuthorization(authorization: string = "") {
            this.SetKeyValue("Authorization", authorization, this.headers);
        }

        /**
         * 设置Header,
         * 添加 {"Accept":"application/json"}
         * 删除 {"Accept":null}
         * @param headers header的键值对
         */
        public SetHeader(headers: any) {
            this.headers = this.ObjectToArray(headers, this.headers);
        }

        /**
         * 获取新的键值对数组
         * @param obj 新的键值对对象
         * @param oldArray 原有键值对数组
         */
        private ObjectToArray(obj: any, oldArray: Array<string>): Array<string> {
            if (!obj) {
                return oldArray;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    oldArray = this.SetKeyValue(key, obj[key], oldArray);
                }
            }
            return oldArray;
        }

        /**
         * 往header数组中设置键值。存在修改或者删除，不存在添加
         * @param key 键
         * @param value 值 
         */
        private SetKeyValue(key: string, value: string, oldArray: Array<string>): Array<string> {
            let index = oldArray.indexOf(key);
            if (index == -1) {
                if (value) {
                    oldArray.push(key, value);
                }
            } else {
                if (value !== null) {
                    oldArray.splice(index + 1, 1, value);
                } else {
                    oldArray.splice(index, 2);
                }
            }
            return oldArray;
        }

    }
}
