"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCtrl_1 = require("../Base/BaseCtrl");
const Base_1 = require("../Base");
const ErrorCode_1 = require("../Enum/ErrorCode");
const Config_1 = require("./Config");
const Verification_1 = require("../Utils/Verification");
const Url_1 = require("../Utils/Url");
class UserCtrl extends BaseCtrl_1.default {
    constructor() {
        super();
        /**
         * 登录Dto信息
         */
        this.dto = new Base_1.LoginDto();
        /**
         * 获取会员信息
         */
        this.GetMemberInfoByLocal = () => {
            if (!this.loginStatus) {
                return null;
            }
            return this.memberInfo;
        };
        /**
         * 是否登录
         */
        this.IsLogin = () => {
            return this.loginStatus;
        };
        /**
         * 是否登录
         */
        this.IsClose = () => {
            return this.closeStatus;
        };
    }
    /**
     * 登录
     */
    Login(LoginCallBack) {
        //获取地址栏中code
        this.dto.Code = Url_1.GetQuery("code");
        //获取地址栏中state参数，即父级（推荐人）ID
        this.dto.ParentID = Url_1.GetQuery("parentID");
        this.parentID = this.dto.ParentID;
        //调用会员管理的登录方法
        this.memberManager.Login(this.dto, LoginCallBack);
    }
    ;
    /**
     * 多账号时，通过会员id登录
     */
    LoginByID(memberId, handler) {
        this.dto.MemberID = memberId;
        this.memberManager.LoginByID(this.dto, handler);
    }
    /**
     * 登出
     */
    Logout() {
        this.loginStatus = false;
        this.memberManager.Logout();
    }
    ;
    /**
     * 获取会员信息
     */
    GetMemberInfo(handler) {
        this.memberManager.GetMemberInfo(handler);
    }
    /**
     * 设置账号
     * @param account 账号
     * @param handler 回调
     */
    SetAccount(account, handler) {
        if (this.memberInfo && this.memberInfo.Account) {
            handler(null, [account], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.AccountExist));
        }
        let dto = {
            Account: account
        };
        this.webApi.Post(Config_1.SetAccountApi, dto).then((data) => {
            handler(null, [account]);
        }, (error) => {
            console.log("SetRemark error", error);
            handler(null, [account], error);
        });
    }
    /**
     * 设置子会员密码
     * @param password 密码
     * @param handler 回调
     */
    ResetPassword(password, handler) {
        //出分值必须大于0
        if (!Verification_1.default.Password(password)) {
            handler(null, [password], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.PasswordFormatError));
            return;
        }
        let dto = {
            Password: password
        };
        this.webApi.Post(Config_1.ResetPasswordApi, dto).then((data) => {
            handler(null, [password]);
        }, (error) => {
            console.log("SetRemark error", error);
            handler(null, [password], this.languageManager.GetErrorMsg(error));
        });
    }
    /**
     * 设置昵称
     * @param nickname 账号
     * @param handler 回调
     */
    ModifyNickname(nickname, handler) {
        if (!nickname) {
            handler(null, [nickname], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.NicknameFormatError));
        }
        let dto = {
            Nickname: nickname
        };
        this.webApi.Post(Config_1.SetAccountApi, dto).then((data) => {
            handler(null, [nickname]);
        }, (error) => {
            console.log("SetRemark error", error);
            handler(null, [nickname], error);
        });
    }
    /**
     * 设置手机号码
     * @param phoneNumber 密码
     * @param handler 回调
     */
    ResetPhoneNumber(phoneNumber, handler) {
        //验证手机号码
        if (!Verification_1.default.PhoneNumber(phoneNumber)) {
            handler(null, [phoneNumber], this.languageManager.GetErrorMsg(ErrorCode_1.ErrorCodeExtends.PhoneNumberFormatError));
            return;
        }
        let dto = {
            PhoneNumber: phoneNumber
        };
        this.webApi.Post(Config_1.ResetPhoneNumberApi, dto).then((data) => {
            handler(null, [phoneNumber]);
        }, (error) => {
            console.log("SetRemark error", error);
            handler(null, [phoneNumber], error);
        });
    }
}
exports.default = UserCtrl;
//# sourceMappingURL=UserCtrl.js.map