/// <reference path="../Dto/AuthorizationDto.ts"/>
/// <reference path="../Dto/MemberInfoDto.ts"/>
/// <reference path="IMemberManager.ts" />
var MemberManager;
(function (MemberManager) {
    /**
     * 会员信息管理
     */
    var Member = (function () {
        function Member() {
            var _this = this;
            this.WebApi = Network.WebApi.GetInstance();
            this.loginService = null;
            this.successHandler = null;
            this.failHanlder = null;
            /**
             * 获取用户信息成功
             * @param data
             */
            this.GetMemberInfoSuccess = function (data) {
                _this.successHandler.runWith({ Type: BaseEnum.CheckLoginEnum.MemberInfo, Data: data });
                var authorizationInfo = _this.GetAuthorization();
                _this.GetSocketToken(authorizationInfo.Token);
            };
            /**
             * 获取用户信息失败
             * @param data
             */
            this.GetMemberInfoError = function (data) {
                _this.failHanlder.runWith({ Type: BaseEnum.CheckLoginEnum.MemberInfoError, Data: data });
            };
            //获取Socket Token
            this.loginService = new Laya.Browser.window.LoginService(Network.Http, Utils.Storage, this.GetMemberInfoSuccess, null, this.GetMemberInfoError);
        }
        /**
         * 登录检测
         * @param successHandler 成功回调
         * @param failHanlder 失败回调
         */
        Member.prototype.CheckLogin = function (successHandler, failHandler) {
            this.successHandler = successHandler;
            this.failHanlder = failHandler;
            var authorizationInfo = this.GetAuthorization();
            if (!authorizationInfo || !authorizationInfo.Token) {
                !GameConfig.IsDebug && this.GoGameLobby();
            }
            else {
                //获取会员信息
                this.loginService.GetMemberInfo(true);
            }
        };
        /**
         * 通过授权token获取socket Token
         * @param token
         */
        Member.prototype.GetSocketToken = function (token) {
            var _this = this;
            this.WebApi.SetToken(token);
            var obj = {
                GameID: GameConfig.GameID
            };
            this.WebApi.Post(ApiConfig.LoginGame, obj, {}, function (response) {
                if (response.Result == BaseEnum.ErrorCode.Success) {
                    _this.successHandler.runWith({ Type: BaseEnum.CheckLoginEnum.SocketToken, Data: response.Data });
                }
                else if (response.Result == BaseEnum.ErrorCode.IPLimited) {
                    Laya.Browser.window.location.href = "";
                }
                else {
                    console.log("获取游戏SocketToken失败", response);
                    _this.failHanlder.runWith({ Type: BaseEnum.CheckLoginEnum.SocketToken, Data: '' });
                }
            }, function (error) {
                console.log("获取游戏SocketToken失败", error);
                _this.failHanlder.runWith({ Type: BaseEnum.CheckLoginEnum.SocketToken, Data: '' });
            });
        };
        /**
         * 跳转至游戏大厅
         */
        Member.prototype.GoGameLobby = function () {
            var parentID = Utils.GetQuery("parentid");
            Laya.Browser.window.location.replace(GameConfig.GetHallUrl(parentID));
        };
        /**
         * 登出
         */
        Member.prototype.Logout = function () {
            //清除缓存中的信息
            // this.loginService
            return true;
        };
        /**
         * 获取会员信息
         */
        Member.prototype.GetMemberInfo = function () {
            //从缓存中获取会员信息
            var memberInfoDto = this.loginService.GetMemberInfoByLocal();
            return memberInfoDto;
        };
        ;
        /**
         * 获取会员信息
         */
        Member.prototype.GetMemberScore = function (handler) {
            //从缓存中获取会员信息
            this.loginService.GetMemberScore(function (memberInfoDto) {
                handler.runWith(memberInfoDto);
            });
        };
        ;
        /**
         * 获取授权信息
         */
        Member.prototype.GetAuthorization = function () {
            //从缓存中获取授权信息
            var authorizationDto = this.loginService.GetAuthorizationDtoByLocal();
            return authorizationDto;
        };
        ;
        Member.prototype.Log = function () {
        };
        return Member;
    }());
    MemberManager.Member = Member;
})(MemberManager || (MemberManager = {}));
//# sourceMappingURL=index.js.map