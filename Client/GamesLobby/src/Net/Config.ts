/// <reference path="../GameConfig.ts" />
namespace Net.ApiConfig {
    /**
     * 登录
     */
    export const Login = GameConfig.WebApiBaseUrl + "/Member/Login";
    /**
     * 登录检测
     */
    export const LoginCheck = GameConfig.WebApiBaseUrl + "/Member/LoginByToken";
    /**
     * 通过id和临时token登录
     */
    export const LoginById = GameConfig.WebApiBaseUrl + "/Member/SelectMember";
    /**
     * 获取会员信息
     */
    export const GetMemberInfo = GameConfig.WebApiBaseUrl + "/Member/GetUserProfile";
}