namespace WeChatModule {
    /**
     * appId
     */
    export let AppId: any = null;
    /**
     * 设置APPID
     * @param id 
     */
    export function SetAppID(id: any) {
        this.AppId = id;
    }

    /**
     * 获取微信地址方法
     * @param parentID 是否为授权地址
     * @param isAuthorize 是否为授权地址
     */
    export function GetWeChatUrl(parentID: string, isAuthorize: boolean = true) {
        let sharGameUrl = GameConfig.GetHallUrl(parentID);
        if (isAuthorize) {
            sharGameUrl = encodeURIComponent(sharGameUrl);
            return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.AppId}&redirect_uri=${sharGameUrl}&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect`;
        } else {
            return sharGameUrl;
        }
    }

    /**
     * 获取分享信息
     * @param parentID 父级ID 
     */
    export function GetWeChatShareDto(parentID: string) {
        let dto: any = GameConfig.WeChatShareMsg;
        dto.Link = GetWeChatUrl(parentID, false);
        return dto;
    }
}