"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebApiBaseCtrl_1 = require("./WebApiBaseCtrl");
/**
 * WebApi层
 * 单例 使用WebApi.instance
 */
class WebApiManager extends WebApiBaseCtrl_1.default {
    constructor() {
        super();
    }
    /**
     * 获取单例
     */
    static GetInstance() {
        if (!WebApiManager.instance) {
            WebApiManager.instance = new WebApiManager();
        }
        return this.instance;
    }
}
exports.default = WebApiManager;
//# sourceMappingURL=WebApiManager.js.map