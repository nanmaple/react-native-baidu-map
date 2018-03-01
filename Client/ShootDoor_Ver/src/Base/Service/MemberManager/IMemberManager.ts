/// <reference path="../../Dto/AuthorizationDto.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
namespace ServiceManager {
    export interface IMemberManager {
        /**
         * 登出
         */
        Logout(): boolean,

        /**
         * 获取游戏Socket
         */
        GetSocketInfo(): BaseDto.AuthorizationDto

        /**
         * 获取会员信息
         */
        GetMemberInfo(): BaseDto.MemberInfoDto;
        
        GetSocketToken(token: string, successHandler: Laya.Handler,errorhandler: Laya.Handler): void
    }
}