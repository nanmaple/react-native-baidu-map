var Utils;
(function (Utils) {
    var StorageType;
    (function (StorageType) {
        StorageType[StorageType["LOCALSTORAGE"] = 0] = "LOCALSTORAGE";
        StorageType[StorageType["COOKIE"] = 1] = "COOKIE";
        StorageType[StorageType["SESSION"] = 2] = "SESSION";
    })(StorageType = Utils.StorageType || (Utils.StorageType = {}));
    /**
     * 数据存储
     */
    var Storage = (function () {
        function Storage() {
        }
        /**
         * 存储
         * @param key  键名
         * @param value 键值
         * @param type 类型
         * @param day 过期时间(天数)
         */
        Storage.prototype.Set = function (key, value, type, day) {
            if (type === void 0) { type = StorageType.LOCALSTORAGE; }
            if (day === void 0) { day = 7; }
            switch (type) {
                case StorageType.LOCALSTORAGE:
                    this.SetLocalStorage(key, value, day);
                    break;
                case StorageType.COOKIE:
                    if (Laya.Browser.window.navigator.cookieEnabled) {
                        this.SetCookie(key, value, day);
                    }
                    else {
                        this.SetLocalStorage(key, value, day);
                    }
                    break;
                case StorageType.SESSION:
                    this.SetSessionStorage(key, value, day);
                    break;
                default:
                    break;
            }
        };
        /**
         * 读取
         * @param key 键名
         * @param type 类型
         */
        Storage.prototype.Get = function (key, type) {
            if (type === void 0) { type = StorageType.LOCALSTORAGE; }
            switch (type) {
                case StorageType.LOCALSTORAGE:
                    return this.GetLocalStorage(key);
                case StorageType.COOKIE:
                    if (Laya.Browser.window.navigator.cookieEnabled) {
                        return this.GetCookie(key);
                    }
                    else {
                        return this.GetLocalStorage(key);
                    }
                case StorageType.SESSION:
                    return this.GetSessionStorage(key);
                default:
                    break;
            }
        };
        /**
         * 读取
         * @param key 键名
         * @param type 类型
         */
        Storage.prototype.Del = function (key, type) {
            if (type === void 0) { type = StorageType.LOCALSTORAGE; }
            switch (type) {
                case StorageType.LOCALSTORAGE:
                    return this.RemoveLocalStorage(key);
                case StorageType.COOKIE:
                    return this.DelCookie(key);
                case StorageType.SESSION:
                    return this.RemoveSessionStorage(key);
                default:
                    break;
            }
        };
        /**
         * 读取
         * @param type 类型
         */
        Storage.prototype.Clear = function (type) {
            if (type === void 0) { type = StorageType.LOCALSTORAGE; }
            switch (type) {
                case StorageType.LOCALSTORAGE:
                    return this.ClearLocalStorage();
                case StorageType.SESSION:
                    return this.ClearSessionStorage();
                default:
                    break;
            }
        };
        /**
         * 设置cookie
         * @param key  键名
         * @param value 键值
         * @param day 过期时间(天数)
         */
        Storage.prototype.SetCookie = function (key, value, day) {
            if (day === void 0) { day = 7; }
            var cookie = Laya.Browser.window.document.cookie;
            var date = new Date();
            cookie = key + "=" + Laya.Browser.window.escape(value) + ";expires=" + date.toUTCString() + ";path=/";
        };
        /**
         * 读取cookie
         * @param key 键名
         */
        Storage.prototype.GetCookie = function (key) {
            var cookie = Laya.Browser.window.document.cookie;
            var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
            if (arr = cookie.match(reg)) {
                return Laya.Browser.window.unescape(arr[2]);
            }
            else {
                return null;
            }
        };
        /**
         * 删除cookie
         * @param key 键名
         */
        Storage.prototype.DelCookie = function (key) {
            var value = this.GetCookie(key);
            if (value != null) {
                this.SetCookie(key, '', -1);
            }
        };
        /**
         * 删除所有cookies
         */
        Storage.prototype.ClearCookie = function () {
        };
        /**
         * 设置Localstorage
         * @param key 键名
         * @param value 键值
         */
        Storage.prototype.SetLocalStorage = function (key, value, day) {
            if (day === void 0) { day = null; }
            var date = new Date();
            var data = {
                expires: date.getTime() + day * 24 * 3600 * 1000,
                value: value
            };
            Laya.LocalStorage.setItem(key, JSON.stringify(data));
        };
        /**
         * 读取LocalStorage
         * @param key
         */
        Storage.prototype.GetLocalStorage = function (key) {
            var data = Laya.LocalStorage.getItem(key);
            try {
                var dataObj = JSON.parse(data);
                if (dataObj.expires) {
                    var timestamp = new Date().getTime();
                    if (dataObj.expires > timestamp) {
                        return dataObj.value;
                    }
                    else {
                        this.RemoveLocalStorage(key);
                        return null;
                    }
                }
                else {
                    return dataObj.value;
                }
            }
            catch (e) {
                return data;
            }
        };
        /**
         * 删除LocalStorage
         * @param key
         */
        Storage.prototype.RemoveLocalStorage = function (key) {
            var data = Laya.LocalStorage.getItem(key);
            if (data != null) {
                Laya.LocalStorage.removeItem(key);
            }
        };
        /**
         * 清除LocalStorage
         */
        Storage.prototype.ClearLocalStorage = function () {
            Laya.LocalStorage.clear();
        };
        /**
         * 设置Sessionstorage
         * @param key
         * @param value
         */
        Storage.prototype.SetSessionStorage = function (key, value, day) {
            if (day === void 0) { day = null; }
            var date = new Date();
            var data = {
                expires: date.getTime() + day * 24 * 3600 * 1000,
                value: value
            };
            Laya.Browser.window.sessionStorage.setItem(key, JSON.stringify(data));
        };
        /**
         * 读取Sessionstorage
         * @param key
         */
        Storage.prototype.GetSessionStorage = function (key) {
            var data = Laya.Browser.window.sessionStorage.getItem(key);
            try {
                var dataObj = JSON.parse(data);
                if (dataObj.expires) {
                    var timestamp = new Date().getTime();
                    if (dataObj.expires > timestamp) {
                        return dataObj.value;
                    }
                    else {
                        this.RemoveSessionStorage(key);
                        return null;
                    }
                }
                else {
                    return dataObj.value;
                }
            }
            catch (e) {
                return data;
            }
        };
        /**
         * 删除Sessionstorage
         * @param key
         */
        Storage.prototype.RemoveSessionStorage = function (key) {
            Laya.Browser.window.sessionStorage.removeItem(key);
        };
        /**
         * 清除Sessionstorage
         */
        Storage.prototype.ClearSessionStorage = function () {
            Laya.Browser.window.sessionStorage.clear();
        };
        return Storage;
    }());
    Utils.Storage = Storage;
})(Utils || (Utils = {}));
//# sourceMappingURL=Storage.js.map