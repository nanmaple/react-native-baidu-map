/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
namespace MemberManager {
    export interface IMemberManager {
        /**
         * 登录检测
         * @param successHandler 成功回调
         * @param failHanlder 失败回调
         */
        CheckLogin(successHandler: Laya.Handler, failHandler: Laya.Handler): void
        /**
         * 登出
         */
        Logout(): boolean,

        /**
         * 获取会员信息
         */
        GetMemberInfo(): BaseDto.MemberInfoDto;

        /**
         * 获取授权信息
         */ 
        GetAuthorization(): BaseDto.AuthorizationDto
    }
}