/**
 * 工具类：Http网络请求类
 * 封装Get,Post方法
 */
var Utils;
(function (Utils) {
    /**
     * Http类，
     */
    var Http = (function () {
        function Http() {
            this.headers = [
                "Accept", "application/json",
                'Content-Type', "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin', "*",
            ];
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
        Http.prototype.Request = function (method, url, params, headers, successBack, failBack, processBack) {
            if (headers === void 0) { headers = this.headers; }
            var xhr = new Laya.HttpRequest();
            xhr.http.timeout = 10000; //设置超时时间；
            xhr.once(Laya.Event.COMPLETE, this, successBack);
            xhr.once(Laya.Event.ERROR, this, failBack);
            xhr.on(Laya.Event.PROGRESS, this, processBack);
            xhr.send(url, params, method, "json", headers);
        };
        /**
         * Post方法
         * @param url 地址
         * @param params 参数
         * @param header header键值队数组
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        Http.prototype.Post = function (url, params, header, successBack, failBack, processBack) {
            if (params === void 0) { params = {}; }
            if (header === void 0) { header = null; }
            //header处理
            header = this.ObjectToArray(header, this.headers);
            //参数转换,对象转"a=xxx&b=xxx"
            var paramsStr = "";
            var keyArray = new Array();
            if (params) {
                for (var i in params) {
                    keyArray.push(i + "=" + params[i]);
                }
                paramsStr = keyArray.join("&");
            }
            this.Request("post", url, paramsStr, header, function (response) {
                successBack && successBack(response);
            }, function (error) {
                failBack && failBack(error);
            }, function (data) {
                processBack && processBack(data);
            });
        };
        /**
         * Get方法
         * @param url 地址
         * @param params 参数
         * @param header header键值队数组
         * @param successBack 成功回调
         * @param failBack 失败回调
         * @param processBack 进度回调
         */
        Http.prototype.Get = function (url, params, header, successBack, failBack, processBack) {
            if (params === void 0) { params = {}; }
            if (header === void 0) { header = null; }
            //header处理
            header = this.ObjectToArray(header, this.headers);
            var keyArray = new Array();
            var paramsStr;
            //参数转换,对象转"?a=xxx&b=xxx",并拼接到地址后面
            if (params) {
                for (var i in params) {
                    keyArray.push(i + "=" + params[i]);
                }
                paramsStr = keyArray.join("&");
                url = url + "?" + paramsStr;
                params = "";
            }
            this.Request("get", url, params, header, function (response) {
                successBack && successBack(response);
            }, function (error) {
                failBack && failBack(error);
            }, function (data) {
                processBack && processBack(data);
            });
        };
        /**
         * 设置权限token
         * @param authorization token值 , 清除时传null
         */
        Http.prototype.SetAuthorization = function (authorization) {
            if (authorization === void 0) { authorization = ""; }
            this.SetKeyValue("Authorization", authorization, this.headers);
        };
        /**
         * 设置Header,
         * 添加 {"Accept":"application/json"}
         * 删除 {"Accept":null}
         * @param headers header的键值对
         */
        Http.prototype.SetHeader = function (headers) {
            this.headers = this.ObjectToArray(headers, this.headers);
        };
        /**
         * 获取新的键值对数组
         * @param obj 新的键值对对象
         * @param oldArray 原有键值对数组
         */
        Http.prototype.ObjectToArray = function (obj, oldArray) {
            if (!obj) {
                return oldArray;
            }
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    oldArray = this.SetKeyValue(key, obj[key], oldArray);
                }
            }
            return oldArray;
        };
        /**
         * 往header数组中设置键值。存在修改或者删除，不存在添加
         * @param key 键
         * @param value 值
         */
        Http.prototype.SetKeyValue = function (key, value, oldArray) {
            var index = oldArray.indexOf(key);
            if (index == -1) {
                if (value) {
                    oldArray.push(key, value);
                }
            }
            else {
                if (value !== null) {
                    oldArray.splice(index + 1, 1, value);
                }
                else {
                    oldArray.splice(index, 2);
                }
            }
            return oldArray;
        };
        return Http;
    }());
    Utils.Http = Http;
})(Utils || (Utils = {}));
