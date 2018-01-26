/// <reference path="../../Cache/Authorization/Authorization.ts" />
/// <reference path="../../Dto/AuthorizationDto.ts"/>
/// <reference path="../../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />

namespace ServiceManager {
    export class MemberManager implements IMemberManager {
        private gameID: number;
        constructor(gameID: number) {
            this.gameID = gameID;
        }

        /**
         * 登录错误
         * @param error 
         */
        private LoginError(error: number | string) {
            console.log(error);
        }

        /**
         * 登出
         */
        public Logout(): boolean {
            //清除缓存中的信息
            BaseCache.Authorization.instance.SetAuthorization(this.gameID,null);
            return true;
        }

        /**
         * 获取游戏Socket信息
         */
        public GetSocketInfo(): BaseDto.AuthorizationDto {
            //从缓存中获取Code，包括Code，Token,GameToken等
            let authorizationDto: BaseDto.AuthorizationDto = BaseCache.Authorization.instance.GetAuthorization(this.gameID);
            if (authorizationDto == null) {
                authorizationDto = new BaseDto.AuthorizationDto();
                if (GameConfig.IsDebug) {
                    authorizationDto.IsClose = false;
                }
            }
            return authorizationDto;
        }


        /**
         * 获取会员信息
         */
        public GetMemberInfo(): BaseDto.MemberInfoDto {
            //从缓存中获取会员信息
            let memberInfoDto: BaseDto.MemberInfoDto = BaseCache.MemberInfo.instance.GetMemberInfo(GameConfig.GameID);
            return memberInfoDto;
        };
    }
}