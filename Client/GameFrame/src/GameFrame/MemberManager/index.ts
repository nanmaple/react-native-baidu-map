/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />

namespace MemberManager {
    /**
     * 会员信息管理
     */
    export class Member implements IMemberManager {
        private WebApi: Network.Http.WebApi = Network.Http.WebApi.GetInstance();
        private loginService: any = null;
        private successHandler: Laya.Handler = null;
        private failHanlder: Laya.Handler = null;
        constructor() {
            //获取Socket Token
            this.loginService = new Laya.Browser.window.LoginService(Utils.Http, Utils.Storage, this.GetMemberInfoSuccess, null, this.GetMemberInfoError);
        }

        public CheckLogin(successHandler: Laya.Handler, failHanlder: Laya.Handler) {
            this.successHandler = successHandler;
            this.failHanlder = failHanlder;
            let authorizationInfo = this.GetAuthorization();
            if (!authorizationInfo || !authorizationInfo.Token) {
                // !GameConfig.IsDebug && this.GoGameLobby();
            } else {
                //获取会员信息
                this.loginService.GetMemberInfo(true);

                this.GetSocketToken(authorizationInfo.Token);
            }
        }

        /**
         * 获取用户信息成功
         * @param data 
         */
        private GetMemberInfoSuccess = (data: any) => {
            this.successHandler.runWith({ Type: GameEnum.CheckLoginEnum.MemberInfo, Data: data });
            //微信js签名配置
            let memberId = this.GetMemberInfo().MemberId.toString();
            let wechat = new Laya.Browser.window.Wechat(Utils.Http, null, GameConfig.GetWeChatShareDto(memberId));
            wechat.GetJsSignature();
        }

        /**
         * 获取用户信息失败
         * @param data 
         */
        private GetMemberInfoError = (data: any) => {
            this.failHanlder.runWith({ Type: GameEnum.CheckLoginEnum.MemberInfo, Data: data });
        }

        /**
         * 通过授权token获取socket Token
         * @param token 
         */
        public GetSocketToken(token: string) {
            this.WebApi.SetToken(token);
            let obj = {
                GameID: GameConfig.GameID
            }
            this.WebApi.Post(Net.ApiConfig.LoginGame,obj,{}, (response: any) => {
                if (response.Result == GameEnum.ErrorCode.Success) {
                    this.successHandler.runWith({ Type: GameEnum.CheckLoginEnum.SocketToken, Data: response.Data });
                } else if (response.Result == GameEnum.ErrorCode.IPLimited) {
                    Laya.Browser.window.location.href = "";
                } else {
                    console.log("获取游戏SocketToken失败", response);
                    this.failHanlder.runWith({ Type: GameEnum.CheckLoginEnum.SocketToken, Data: '' });
                }
            }, (error: any) => {
                console.log("获取游戏SocketToken失败", error);
                this.failHanlder.runWith({ Type: GameEnum.CheckLoginEnum.SocketToken, Data: '' });
            });
        }

        /**
         * 跳转至游戏大厅
         */
        private GoGameLobby(): void {
            let parentID = Utils.Url.GetQuery("parentid");
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
        public GetMemberInfo(): GameDto.MemberInfoDto {
            //从缓存中获取会员信息
            let memberInfoDto: GameDto.MemberInfoDto = <GameDto.MemberInfoDto>this.loginService.GetMemberInfoByLocal();
            return memberInfoDto;
        };


        /**
         * 获取授权信息
         */
        public GetAuthorization(): GameDto.AuthorizationDto {
            //从缓存中获取授权信息
            let authorizationDto: GameDto.AuthorizationDto = <GameDto.AuthorizationDto>this.loginService.GetAuthorizationDtoByLocal();
            return authorizationDto;
        };


        public Log(): void {

        }
    }
}