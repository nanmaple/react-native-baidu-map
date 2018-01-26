"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http_1 = require("../../Utils/Http");
const ErrorCode_1 = require("../../Enum/ErrorCode");
const Authorization_1 = require("../../Cache/Authorization/Authorization");
const LanguageManager_1 = require("../LanguageManager/LanguageManager");
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
                    let languageManager = new LanguageManager_1.default();
                    reject(languageManager.GetErrorMsg(respoense.Result));
                }
            }, (error) => {
                if (typeof error !== "object") {
                    reject(error.toString());
                }
                else {
                    let languageManager = new LanguageManager_1.default();
                    reject(languageManager.GetErrorMsg(error));
                }
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
                    let languageManager = new LanguageManager_1.default();
                    reject(languageManager.GetErrorMsg(respoense.Result));
                }
            }, (error) => {
                if (typeof error !== "object") {
                    reject(error.toString());
                }
                else {
                    let languageManager = new LanguageManager_1.default();
                    reject(languageManager.GetErrorMsg(error));
                }
            });
        });
    }
}
exports.default = WebApiBaseCtrl;
//# sourceMappingURL=WebApiBaseCtrl.js.map