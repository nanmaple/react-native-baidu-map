namespace Utils {
    export enum StorageType {
        LOCALSTORAGE = 0,
        COOKIE = 1,
        SESSION = 2
    }
    /**
     * 数据存储
     */
    export class Storage {
        constructor() {
        }

        /**
         * 存储
         * @param key  键名
         * @param value 键值
         * @param day 过期时间(天数)
         */
        public Set(key: string, value: any, type: StorageType = StorageType.LOCALSTORAGE, day: number = 7) {
            switch (type) {
                case StorageType.LOCALSTORAGE:
                    this.SetLocalStorage(key, value, day);
                    break;
                case StorageType.COOKIE:
                    if (Laya.Browser.window.navigator.cookieEnabled) {
                        this.SetCookie(key, value, day);
                    } else {
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
        public Get(key: string, type: StorageType = StorageType.LOCALSTORAGE) {
            switch (type) {
                case StorageType.LOCALSTORAGE:
                    return this.GetLocalStorage(key);
                case StorageType.COOKIE:
                    if (Laya.Browser.window.navigator.cookieEnabled) {
                        return this.GetCookie(key);
                    } else {
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
        public Del(key: string, type: StorageType = StorageType.LOCALSTORAGE) {
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
        public Clear(type: StorageType = StorageType.LOCALSTORAGE) {
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
        public SetCookie(key: string, value: any, day: number = 7) {
            let cookie: any = Laya.Browser.window.document.cookie;
            let date: Date = new Date();
            date.setTime(date.getTime() + day * 24 * 3600 * 1000);
            cookie = key + "=" + Laya.Browser.window.escape(value) + ";expires=" + date.toUTCString() + ";path=/";
        }
        /**
         * 读取cookie
         * @param key 键名
         */
        public GetCookie(key: string) {
            let cookie: any = Laya.Browser.window.document.cookie;
            var arr, reg = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
            if (arr = cookie.match(reg)) {
                return Laya.Browser.window.unescape(arr[2]);
            }
            else {
                return null;
            }
        }

        /**
         * 删除cookie
         * @param key 键名
         */
        public DelCookie(key: string) {
            let value: any = this.GetCookie(key);
            if (value != null) {
                this.SetCookie(key, '', -1);
            }
        }

        /**
         * 删除所有cookies
         */
        public ClearCookie() {

        }
        /**
         * 设置Localstorage
         * @param key 键名
         * @param value 键值
         */
        public SetLocalStorage(key: string, value: any, day: number = null) {
            let date: Date = new Date();
            let data: any = {
                expires: date.getTime() + day * 24 * 3600 * 1000,
                value: value
            }
            Laya.LocalStorage.setItem(key, JSON.stringify(data));
        }
        /**
         * 读取LocalStorage
         * @param key 
         */
        public GetLocalStorage(key: string) {
            let data: any = Laya.LocalStorage.getItem(key);
            try {
                let dataObj: any = JSON.parse(data);
                if (dataObj.expires) {
                    let timestamp = new Date().getTime();
                    if (dataObj.expires > timestamp) {
                        return dataObj.value;
                    } else {
                        this.RemoveLocalStorage(key);
                        return null;
                    }
                } else {
                    return dataObj.value;
                }
            } catch (e) {
                return data;
            }
        }

        /**
         * 删除LocalStorage
         * @param key 
         */
        public RemoveLocalStorage(key: string) {
            let data = Laya.LocalStorage.getItem(key);
            if (data != null) {
                Laya.LocalStorage.removeItem(key);
            }
        }

        /**
         * 清除LocalStorage
         */
        public ClearLocalStorage() {
            Laya.LocalStorage.clear();
        }

        /**
         * 设置Sessionstorage
         * @param key 
         * @param value 
         */
        public SetSessionStorage(key: string, value: any, day: number = null) {
            let date: Date = new Date();
            let data: any = {
                expires: date.getTime() + day * 24 * 3600 * 1000,
                value: value
            }
            Laya.Browser.window.sessionStorage.setItem(key, JSON.stringify(data));
        }

        /**
         * 读取Sessionstorage
         * @param key 
         */
        public GetSessionStorage(key: string) {
            let data: any = Laya.Browser.window.sessionStorage.getItem(key);
            try {
                let dataObj: any = JSON.parse(data);
                if (dataObj.expires) {
                    let timestamp = new Date().getTime();
                    if (dataObj.expires > timestamp) {
                        return dataObj.value;
                    } else {
                        this.RemoveLocalStorage(key);
                        return null;
                    }
                } else {
                    return dataObj.value;
                }
            } catch (e) {
                return data;
            }
        }
        /**
         * 删除Sessionstorage
         * @param key 
         */
        public RemoveSessionStorage(key: string) {
            Laya.Browser.window.sessionStorage.removeItem(key);
        }
        /**
         * 清除Sessionstorage
         */
        public ClearSessionStorage() {
            Laya.Browser.window.sessionStorage.clear();
        }
    }
}