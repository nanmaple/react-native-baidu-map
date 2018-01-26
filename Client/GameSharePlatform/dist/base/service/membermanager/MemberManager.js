"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginInfoDto_1 = require("../../Dto/LoginInfoDto");
const AuthorizationDto_1 = require("../../Dto/AuthorizationDto");
const Authorization_1 = require("../../Cache/Authorization/Authorization");
const MemberInfo_1 = require("../../Cache/MemberInfo/MemberInfo");
const ApiConfig = require("./Config");
const LanguageManager_1 = require("../LanguageManager/LanguageManager");
const WebApiManager_1 = require("../WebApiManager/WebApiManager");
class MemberManager {
    constructor() {
        //获取webapi单例
        this.webApi = WebApiManager_1.default.GetInstance();
        this.languageManager = new LanguageManager_1.default();
    }
    /**
     * 登录
     * @param code 微信授权登录，从地址栏中获取得到
     * @param handler 登录回调事件
     */
    Login(dto, handler) {
        this.handler = handler;
        //从缓存中获取Code，包括Code，Token,GameToken
        let authorizationDto = Authorization_1.default.instance.GetAuthorization();
        //1.存在存储的Code，传入Code存在且不等于存储的Code，直接使用Code登录
        //2.没有存储的Code，传入Code存在，直接使用Code登录
        if ((authorizationDto != null && dto.Code && dto.Code != authorizationDto.Code) || (authorizationDto == null && dto.Code)) {
            //通过Code登录
            let loginByCodeDto = new LoginInfoDto_1.LoginByCodeDto();
            loginByCodeDto.Code = dto.Code;
            loginByCodeDto.ParentID = dto.ParentID;
            loginByCodeDto.DeviceType = dto.DeviceType;
            loginByCodeDto.DeviceId = dto.DeviceId;
            //调用单例api的Post方法，
            this.webApi.Post(ApiConfig.Login, loginByCodeDto).then((data) => {
                console.log("Login成功回调");
                this.LoginSuccess(data, dto.Code);
            }, (error) => {
                console.log("Login失败回调");
                this.LoginError(error);
            });
        }
        else if (authorizationDto != null && authorizationDto.Token) {
            //token直接做登录验证
            //设置token到单例webapi
            this.webApi.SetToken(authorizationDto.Token);
            //调用单例api的Post方法
            this.webApi.Post(ApiConfig.LoginCheck, null).then((data) => {
                console.log("LoginCheck成功回调");
                this.LoginSuccess(data, dto.Code);
            }, (error) => {
                console.log("LoginCheck失败回调");
                this.LoginError(error);
            });
        }
        else {
            let result = new LoginInfoDto_1.LoginResultDto();
            result.Result = LoginInfoDto_1.ResultEnum.NO;
            this.handler(result);
        }
    }
    /**
    * 通过会员id和临时token登录
    * @param memberID 会员id
    * @param handler 登录回调事件
    */
    LoginByID(dto, handler) {
        this.handler = handler;
        //从缓存中获取Code，包括Code，Token,GameToken
        let authorizationDto = Authorization_1.default.instance.GetAuthorization();
        if (authorizationDto != null && authorizationDto.Token) {
            let loginByIdDto = new LoginInfoDto_1.LoginByIdDto();
            loginByIdDto.MemberID = dto.MemberID;
            loginByIdDto.DeviceType = dto.DeviceType;
            loginByIdDto.DeviceId = dto.DeviceId;
            //设置token到单例webapi
            this.webApi.SetToken(authorizationDto.Token);
            //请求调Net的api，
            this.webApi.Post(ApiConfig.LoginById, loginByIdDto).then((data) => {
                console.log("LoginCheck成功回调");
                this.LoginSuccess(data, dto.Code);
            }, (error) => {
                console.log("LoginCheck失败回调");
                this.LoginError(error);
            });
        }
        else {
            let result = new LoginInfoDto_1.LoginResultDto();
            result.Result = LoginInfoDto_1.ResultEnum.NO;
            this.handler(result);
        }
    }
    /**
     * 登录成功回调
     * @param response 会员信息
     */
    LoginSuccess(response, code) {
        //返回结果是登录成功
        let dto = new AuthorizationDto_1.AuthorizationDto();
        dto.Code = code;
        if (!response.Accounts) {
            //微信只有一个账号
            dto.Token = response.SessionToken;
            dto.SocketToken = response.SocketToken;
            dto.IsMulti = false;
            //微信只有一个账号
            dto.IsClose = response.Closed;
            //写入到WebApi
            this.webApi.SetToken(dto.Token);
            //写入缓存中
            Authorization_1.default.instance.SetAuthorization(dto);
            let result = new LoginInfoDto_1.LoginResultDto();
            result.Result = LoginInfoDto_1.ResultEnum.LOGIN;
            this.handler(result);
        }
        else {
            //微信有多个账号
            dto.IsMulti = true;
            dto.Token = response.TempToken;
            dto.SocketToken = null;
            dto.Accounts = response.Accounts;
            //写入缓存中
            Authorization_1.default.instance.SetAuthorization(dto);
            let result = new LoginInfoDto_1.LoginResultDto();
            result.Result = LoginInfoDto_1.ResultEnum.MULTI;
            result.Data = dto.Accounts;
            this.handler(result);
        }
    }
    /**
     * 登录错误
     * @param error
     */
    LoginError(error) {
        console.log("LoginError", error);
        let result = new LoginInfoDto_1.LoginResultDto();
        result.Result = LoginInfoDto_1.ResultEnum.ERROR;
        result.Data = this.languageManager.GetErrorMsg(error);
        this.handler(result);
    }
    /**
     * 获取会员信息
     */
    GetMemberInfo(handler) {
        //请求调Net的api，
        this.webApi.Post(ApiConfig.GetMemberInfo, null).then((response) => {
            console.log("GetMemberInfo成功回调");
            //写入缓存中
            MemberInfo_1.default.instance.SetMemberInfo(response);
            handler(response);
        }, (error) => {
            console.log("GetMemberInfo失败回调");
            this.LoginError(error.toString());
        });
    }
    ;
    /**
     * 获取会员信息
     */
    GetAuthorizationDtoByLocal() {
        //从缓存中获取Code，包括Code，Token,GameToken等
        let authorizationDto = Authorization_1.default.instance.GetAuthorization();
        if (authorizationDto == null) {
            authorizationDto = new AuthorizationDto_1.AuthorizationDto();
        }
        return authorizationDto;
    }
    ;
    /**
     * 获取会员信息
     */
    GetMemberInfoByLocal() {
        //从缓存中获取会员信息
        let memberInfoDto = MemberInfo_1.default.instance.GetMemberInfo();
        return memberInfoDto;
    }
    ;
    /**
     * 登出
     */
    Logout() {
        //清除缓存中的信息
        Authorization_1.default.instance.ClearAuthorization();
        MemberInfo_1.default.instance.ClearMemberInfo();
        return true;
    }
}
exports.default = MemberManager;
//# sourceMappingURL=MemberManager.js.map