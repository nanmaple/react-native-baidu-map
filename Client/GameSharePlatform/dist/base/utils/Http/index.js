"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 工具类：Http网络请求类
 * 封装Get,Post方法
 */
// import fetch from './fetch';
const config = require("./Config");
const ErrorCode_1 = require("../../Enum/ErrorCode");
class FetchData {
    constructor() {
        this.mode = "cors";
    }
}
/**
 * Http类，
 */
class Http {
    constructor() {
        this.headers = {
            "Accept": "application/json",
            'Content-Type': "application/x-www-form-urlencoded",
            'Access-Control-Allow-Origin': "*",
        };
    }
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
    Request(url, fecthData, successBack, failBack, processBack) {
        this._fetch(fetch(url, fecthData)).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                return response;
            }
            else {
                failBack && failBack(response);
            }
            ;
        }, e => {
            failBack && failBack(e);
        }).then((response) => {
            if (response) {
                return response.json();
            }
        }).then((responseJSON) => {
            successBack && successBack(responseJSON);
        }).catch(e => {
            failBack && failBack(e);
        });
    }
    /**
     * // 超时版的fetch
     * @param fetch 正常fetch
     * @param timeout 超时时间
     */
    _fetch(fetch, timeout = config.TIMEOUT) {
        return Promise.race([
            fetch,
            new Promise(function (resolve, reject) {
                setTimeout(() => reject(ErrorCode_1.ErrorCode.TimeOut), timeout);
            })
        ]);
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
    Post(url, params = null, header = null, successBack, failBack, processBack) {
        //header处理
        header = Object.assign({}, this.headers, header);
        let paramsArray = [];
        if (params) {
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
        }
        let fecthData = new FetchData();
        fecthData.method = "POST";
        fecthData.headers = header;
        fecthData.body = paramsArray.join('&');
        this.Request(url, fecthData, (response) => {
            successBack && successBack(response);
        }, (error) => {
            failBack && failBack(error);
        }, (data) => {
            processBack && processBack(data);
        });
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
    Get(url, params = {}, header = null, successBack, failBack, processBack) {
        //header处理
        header = Object.assign({}, this.headers, header);
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&');
            }
            else {
                url += '&' + paramsArray.join('&');
            }
        }
        let fecthData = new FetchData();
        fecthData.method = "GET";
        fecthData.headers = header;
        this.Request(url, fecthData, (response) => {
            successBack && successBack(response);
        }, (error) => {
            failBack && failBack(error);
        }, (data) => {
            processBack && processBack(data);
        });
    }
    /**
     * 设置权限token
     * @param authorization token值 , 清除时传null
     */
    SetAuthorization(authorization = "") {
        this.headers = Object.assign({}, this.headers, { "Authorization": authorization });
    }
    /**
     * 设置Header,
     * 添加 {"Accept":"application/json"}
     * 删除 {"Accept":null}
     * @param headers header的键值对
     */
    SetHeader(headers) {
        this.headers = Object.assign({}, this.headers, headers);
    }
}
exports.default = Http;
//# sourceMappingURL=index.js.map