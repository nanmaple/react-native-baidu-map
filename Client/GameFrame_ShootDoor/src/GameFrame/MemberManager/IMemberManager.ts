/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
namespace MemberManager {
    export interface IMemberManager {
        /**
         * 登出
         */
        Logout(): boolean,

        /**
         * 获取会员信息
         */
        GetMemberInfo(): GameDto.MemberInfoDto;

        /**
         * 获取授权信息
         */
        GetAuthorization(): GameDto.AuthorizationDto
    }
}