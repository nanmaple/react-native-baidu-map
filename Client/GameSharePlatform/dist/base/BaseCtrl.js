"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemberManager_1 = require("./Service/MemberManager/MemberManager");
const LanguageManager_1 = require("./Service/LanguageManager/LanguageManager");
const WebApiManager_1 = require("./Service/WebApiManager/WebApiManager");
/**
* 基础类
*/
class BaseCtrl {
    constructor() {
        /**
         * 是否登录
         */
        this.loginStatus = false;
        /**
         * 是否关闭
         */
        this.closeStatus = false;
        //绑定webApi服务
        this.webApi = WebApiManager_1.default.GetInstance();
        //绑定多语言服务
        this.languageManager = new LanguageManager_1.default();
        //从会员服务中获取用户信息
        this.memberManager = new MemberManager_1.default();
        //获取Socket Token
        this.authorizationInfo = this.memberManager.GetAuthorizationDtoByLocal();
        if (this.authorizationInfo && this.authorizationInfo.Token) {
            this.loginStatus = true;
            this.closeStatus = this.authorizationInfo.IsClose;
        }
        //获取会员信息
        this.memberInfo = this.memberManager.GetMemberInfoByLocal();
    }
}
exports.default = BaseCtrl;
//# sourceMappingURL=BaseCtrl.js.map