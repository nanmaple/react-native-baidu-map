"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const querystring_1 = require("querystring");
var StorageType;
(function (StorageType) {
    StorageType[StorageType["LOCALSTORAGE"] = 0] = "LOCALSTORAGE";
    StorageType[StorageType["COOKIE"] = 1] = "COOKIE";
    StorageType[StorageType["SESSION"] = 2] = "SESSION";
})(StorageType = exports.StorageType || (exports.StorageType = {}));
/**
 * 数据存储
 */
class Storage {
    constructor() {
    }
    /**
     * 存储
     * @param key  键名
     * @param value 键值
     * @param day 过期时间(天数)
     */
    Set(key, value, type = StorageType.LOCALSTORAGE, day = 7) {
        switch (type) {
            case StorageType.LOCALSTORAGE:
                this.SetLocalStorage(key, value, day);
                break;
            case StorageType.COOKIE:
                if (window.navigator.cookieEnabled) {
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
    }
    /**
     * 读取
     * @param key 键名
     */
    Get(key, type = StorageType.LOCALSTORAGE) {
        switch (type) {
            case StorageType.LOCALSTORAGE:
                return this.GetLocalStorage(key);
            case StorageType.COOKIE:
                if (window.navigator.cookieEnabled) {
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
    }
    /**
     * 读取
     * @param key 键名
     */
    Del(key, type = StorageType.LOCALSTORAGE) {
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
    }
    /**
     * 读取
     * @param key 键名
     */
    Clear(type = StorageType.LOCALSTORAGE) {
        switch (type) {
            case StorageType.LOCALSTORAGE:
                return this.ClearLocalStorage();
            case StorageType.SESSION:
                return this.ClearSessionStorage();
            default:
                break;
        }
    }
    /**
     * 设置cookie
     * @param key  键名
     * @param value 键值
     * @param day 过期时间(天数)
     */
    SetCookie(key, value, day = 7) {
        let cookie = window.document.cookie;
        let date = new Date();
        date.setTime(date.getTime() + day * 24 * 3600 * 1000);
        cookie = key + "=" + querystring_1.escape(value) + ";expires=" + date.toUTCString() + ";path=/";
    }
    /**
     * 读取cookie
     * @param key 键名
     */
    GetCookie(key) {
        let cookie = window.document.cookie;
        var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
        if (arr = cookie.match(reg)) {
            return querystring_1.unescape(arr[2]);
        }
        else {
            return null;
        }
    }
    /**
     * 删除cookie
     * @param key 键名
     */
    DelCookie(key) {
        let value = this.GetCookie(key);
        if (value != null) {
            this.SetCookie(key, '', -1);
        }
    }
    /**
     * 删除所有cookies
     */
    ClearCookie() {
    }
    /**
     * 设置Localstorage
     * @param key 键名
     * @param value 键值
     */
    SetLocalStorage(key, value, day = null) {
        let date = new Date();
        let data = {
            expires: date.getTime() + day * 24 * 3600 * 1000,
            value: value
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    /**
     * 读取LocalStorage
     * @param key
     */
    GetLocalStorage(key) {
        let data = localStorage.getItem(key);
        try {
            let dataObj = JSON.parse(data);
            if (dataObj.expires) {
                let timestamp = new Date().getTime();
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
    }
    /**
     * 删除LocalStorage
     * @param key
     */
    RemoveLocalStorage(key) {
        let data = localStorage.getItem(key);
        if (data != null) {
            localStorage.removeItem(key);
        }
    }
    /**
     * 清除LocalStorage
     */
    ClearLocalStorage() {
        localStorage.clear();
    }
    /**
     * 设置Sessionstorage
     * @param key
     * @param value
     */
    SetSessionStorage(key, value, day = null) {
        let date = new Date();
        let data = {
            expires: date.getTime() + day * 24 * 3600 * 1000,
            value: value
        };
        window.sessionStorage.setItem(key, JSON.stringify(data));
    }
    /**
     * 读取Sessionstorage
     * @param key
     */
    GetSessionStorage(key) {
        let data = window.sessionStorage.getItem(key);
        try {
            let dataObj = JSON.parse(data);
            if (dataObj.expires) {
                let timestamp = new Date().getTime();
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
    }
    /**
     * 删除Sessionstorage
     * @param key
     */
    RemoveSessionStorage(key) {
        window.sessionStorage.removeItem(key);
    }
    /**
     * 清除Sessionstorage
     */
    ClearSessionStorage() {
        window.sessionStorage.clear();
    }
}
exports.Storage = Storage;
//# sourceMappingURL=Storage.js.map