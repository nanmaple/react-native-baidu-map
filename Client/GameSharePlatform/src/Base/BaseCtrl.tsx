
import { AuthorizationDto } from './Dto/AuthorizationDto';
import { MemberInfoDto } from './Dto/MemberInfoDto';
import { LoginDto } from './Dto/LoginInfoDto';
import MemberManager from './Service/MemberManager/MemberManager';
import { LanguageType } from './Enum/LanguageType';
import LanguageManager from './Service/LanguageManager/LanguageManager';
import WebApiManager from "./Service/WebApiManager/WebApiManager";

/**
* 基础类
*/
export default abstract class BaseCtrl {
    /**
     * 会员服务
     */
    protected memberManager: MemberManager;
    /**
     * WebApi员服务
     */
    protected webApi: WebApiManager;
    /**
     * 多语言服务
     */
    protected languageManager: LanguageManager;

    /**
     * 授权信息
     */
    protected authorizationInfo: AuthorizationDto;
    /**
     * 用户信息
     */
    protected memberInfo: MemberInfoDto;

    /**
     * 父级ID
     */
    protected parentID: string;
    /**
     * 是否登录
     */
    protected loginStatus: boolean = false;

    /**
     * 是否关闭
     */
    protected closeStatus: boolean = false;
    
    /**
     * 当前语言
     */
    private language: LanguageType;

    constructor() {
        //绑定webApi服务
        this.webApi = WebApiManager.GetInstance();
        //绑定多语言服务
        this.languageManager = new LanguageManager();
        //从会员服务中获取用户信息
        this.memberManager = new MemberManager();
        //获取Socket Token
        this.authorizationInfo = this.memberManager.GetAuthorizationDtoByLocal();
        if (this.authorizationInfo && this.authorizationInfo.Token) {
            this.loginStatus = true;
            this.closeStatus = this.authorizationInfo.IsClose;
        }
        //获取会员信息
        this.memberInfo = this.memberManager.GetMemberInfoByLocal();
    }
}