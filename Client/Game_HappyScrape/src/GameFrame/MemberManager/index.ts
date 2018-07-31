/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />

namespace MemberManager {
    /**
     * 会员信息管理
     */
    export class Member implements IMemberManager {
        private WebApi: Network.WebApi = Network.WebApi.GetInstance();
        private loginService: any = null;
        private successHandler: Laya.Handler = null;
        private failHanlder: Laya.Handler = null;
        constructor() {
            //获取Socket Token
            this.loginService = new Laya.Browser.window.LoginService(Network.Http, Utils.Storage, this.GetMemberInfoSuccess, null, this.GetMemberInfoError);
        }

        /**
         * 登录检测
         * @param successHandler 成功回调
         * @param failHanlder 失败回调
         */
        public CheckLogin(successHandler: Laya.Handler, failHandler: Laya.Handler): void {
            this.successHandler = successHandler;
            this.failHanlder = failHandler;
            let authorizationInfo = this.GetAuthorization();
            if (!authorizationInfo || !authorizationInfo.Token) {
                !GameConfig.IsDebug && this.GoGameLobby();
            } else {
                //获取会员信息
                this.loginService.GetMemberInfo(true);
            }
        }

        /**
         * 获取用户信息成功
         * @param data 
         */
        private GetMemberInfoSuccess = (data: any): void => {
            this.successHandler.runWith({ Type: BaseEnum.CheckLoginEnum.MemberInfo, Data: data });
            let authorizationInfo = this.GetAuthorization();
            this.GetSocketToken(authorizationInfo.Token);
        }

        /**
         * 获取用户信息失败
         * @param data 
         */
        private GetMemberInfoError = (data: any): void => {
            this.failHanlder.runWith({ Type: BaseEnum.CheckLoginEnum.MemberInfoError, Data: data });
        }

        /**
         * 通过授权token获取socket Token
         * @param token 
         */
        private GetSocketToken(token: string): void {
            this.WebApi.SetToken(token);
            let obj = {
                GameID: GameConfig.GameID
            }
            this.WebApi.Post(ApiConfig.LoginGame, obj, {}, (response: any) => {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    this.successHandler.runWith({ Type: BaseEnum.CheckLoginEnum.SocketToken, Data: response.Data });
                } else if (response.Result == BaseEnum.ErrorCode.IPLimited) {
                    Laya.Browser.window.location.href = "";
                } else {
                    console.log("获取游戏SocketToken失败", response);
                    this.failHanlder.runWith({ Type: BaseEnum.CheckLoginEnum.SocketToken, Data: '' });
                }
            }, (error: any) => {
                console.log("获取游戏SocketToken失败", error);
                this.failHanlder.runWith({ Type: BaseEnum.CheckLoginEnum.SocketToken, Data: '' });
            });
        }

        /**
         * 跳转至游戏大厅
         */
        private GoGameLobby(): void {
            let parentID = Utils.GetQuery("parentid");
            Laya.Browser.window.location.replace(GameConfig.GetHallUrl(parentID));
        }

        /**
         * 登出
         */
        public Logout(): boolean {
            //清除缓存中的信息
            // this.loginService
            return true;
        }

        /**
         * 获取会员信息
         */
        public GetMemberInfo(): BaseDto.MemberInfoDto {
            //从缓存中获取会员信息
            let memberInfoDto: BaseDto.MemberInfoDto = <BaseDto.MemberInfoDto>this.loginService.GetMemberInfoByLocal();
            return memberInfoDto;
        };

        /**
         * 获取会员信息
         */
        public GetMemberScore(handler: Laya.Handler): void {
            //从缓存中获取会员信息
            this.loginService.GetMemberScore((memberInfoDto: BaseDto.MemberInfoDto) => {
                handler.runWith(memberInfoDto);
            });
        };


        /**
         * 获取授权信息
         */
        public GetAuthorization(): BaseDto.AuthorizationDto {
            //从缓存中获取授权信息
            let authorizationDto: BaseDto.AuthorizationDto = <BaseDto.AuthorizationDto>this.loginService.GetAuthorizationDtoByLocal();
            return authorizationDto;
        };


        public Log(): void {

        }
    }
}