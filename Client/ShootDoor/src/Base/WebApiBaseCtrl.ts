/// <reference path="./Utils/Http.ts" />
abstract class WebApiBaseCtrl {
    //token存储
    protected header: any = {
        Authorization: ""
    };
    //http
    protected http: Utils.Http;

    protected gameID: number;

    constructor(gameID) {
        this.http = new Utils.Http();
        this.gameID = gameID;
    }

    /**
     * 设置token
     */
    public SetToken(token?: string) {
        if (token) {
            this.header.Authorization = token;
            return
        }
        //从会员服务中获取用户信息
        let memberServer = new ServiceManager.MemberManager(this.gameID);
        //获取Socket Token
        let authorizationInfo: BaseDto.AuthorizationDto = memberServer.GetSocketInfo();
        this.header.Authorization = authorizationInfo.Token;
    }
}