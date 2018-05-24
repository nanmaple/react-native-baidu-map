/// <reference path="../../Utils/Http/index.ts" />
abstract class WebApiBase {
    //token存储
    protected header: any = {
        Authorization: ""
    };
    //http
    protected http: Utils.Http;

    constructor() {
    }

    /**
     * 初始化http
     */
    protected InitHttp() {
        this.http = new Utils.Http();
    }

    /**
     * 初始化充缓存中获取token
     */
    public InitToken() {
        //从会员服务中获取token
        let memberManager = new MemberManager.Member();
        let authorizationDto = memberManager.GetAuthorization();
        if (authorizationDto) {
            this.header.Authorization = authorizationDto.Token;
        }
    }

    /**
     * 设置token
     * @param token token值 
     */
    public SetToken(token: string): void {
        this.header.Authorization = token;
    }
}