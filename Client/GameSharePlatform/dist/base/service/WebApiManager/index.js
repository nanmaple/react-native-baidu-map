"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebApiBaseCtrl_1 = require("../WebApiBaseCtrl");
/**
 * WebApi层
 * 单例 使用WebApi.instance
 */
class WebApi extends WebApiBaseCtrl_1.default {
    constructor() {
        super();
    }
    static GetInstance() {
        if (!WebApi.instance) {
            WebApi.instance = new WebApi();
        }
        return this.instance;
    }
}
exports.default = WebApi;
//# sourceMappingURL=index.js.map