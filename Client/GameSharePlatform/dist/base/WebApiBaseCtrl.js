"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http_1 = require("./Utils/Http");
const Authorization_1 = require("./Cache/Authorization/Authorization");
const ErrorCode_1 = require("./Enum/ErrorCode");
class WebApiBaseCtrl {
    constructor() {
        //token存储
        this.header = {
            Authorization: ""
        };
        this.http = new Http_1.default();
        //从会员服务中获取用户信息
        //获取Socket Token
        let authorizationDto = Authorization_1.default.instance.GetAuthorization();
        if (authorizationDto && authorizationDto.Token) {
            this.header.Authorization = authorizationDto.Token;
        }
    }
    /**
     * 设置token
     */
    SetToken(token) {
        if (token) {
            this.header.Authorization = token;
            return;
        }
    }
    /**
     * 清除token
     */
    ClearToken() {
        this.header.Authorization = "";
    }
    /**
     * Post方法
     * @param Url 地址
     * @param dto 参数
     */
    Post(Url, dto) {
        return new Promise((resolve, reject) => {
            this.http.Post(Url, dto, this.header, (respoense) => {
                if (respoense.Result == ErrorCode_1.ErrorCode.Success) {
                    resolve(respoense.Data);
                }
                else {
                    reject(respoense.Result);
                }
            }, (error) => {
                if (typeof error !== "string") {
                }
                reject(error);
            });
        });
    }
    /**
     * Get方法
     * @param Url 地址
     * @param dto 参数
     */
    Get(Url, dto) {
        return new Promise((resolve, reject) => {
            this.http.Get(Url, dto, this.header, (respoense) => {
                if (respoense.Result == ErrorCode_1.ErrorCode.Success) {
                    resolve(respoense.Data);
                }
                else {
                    reject(respoense.Result);
                }
            }, (error) => {
                if (typeof error !== "string") {
                }
                reject(error);
            });
        });
    }
}
exports.default = WebApiBaseCtrl;
//# sourceMappingURL=WebApiBaseCtrl.js.map