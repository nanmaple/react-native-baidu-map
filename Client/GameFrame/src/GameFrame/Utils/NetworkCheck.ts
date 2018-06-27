namespace Utils {
    export function NetworkCheck(callback: Function): void {
        //网络连接
        if (Laya.Browser.window.navigator.onLine == true) {
            callback(true);
        } else {
            callback(false);
        }
        window.addEventListener('online', function () {
            callback(true);
        });
        window.addEventListener('offline', function () {
            callback(false);
        });
    }
}