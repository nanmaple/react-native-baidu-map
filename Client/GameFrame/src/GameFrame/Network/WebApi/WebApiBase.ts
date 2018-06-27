/// <reference path="./Http.ts" />
abstract class WebApiBase {
    //token存储
    protected header: any = {
        Authorization: ""
    };
    //http
    protected http: Network.Http;

    constructor() {
        this.http = new Network.Http();
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

    /**
     * Post方法
     * @param url 地址
     * @param params 参数
     * @param successBack 成功回调
     * @param failBack 失败回调
     */
    public Post(url: string, params: any,header:any, successBack: Function, failBack: Function): void {
        this.http.Post(url, params,  Utils.ObjectEx.assign({},this.header,header), successBack, failBack);
    }

    /**
     * Get方法
     * @param url 地址
     * @param params 参数
     * @param successBack 成功回调
     * @param failBack 失败回调
     */
    public Get(url: string, params: any,header:any, successBack: Function, failBack: Function): void {
        this.http.Get(url, params, Utils.ObjectEx.assign({},this.header,header), successBack, failBack);
    }
}