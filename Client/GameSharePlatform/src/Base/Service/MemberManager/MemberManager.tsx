import { LoginDto, LoginResultDto, LoginMultiAccountDto, LoginSuccessDto, ResultEnum, LoginByCodeDto, LoginByIdDto } from '../../Dto/LoginInfoDto';
import { AuthorizationDto } from '../../Dto/AuthorizationDto';
import { MemberInfoDto } from '../../Dto/MemberInfoDto';
import IMemberManager from './IMemberManager';
import Authorization from "../../Cache/Authorization/Authorization";
import MemberInfo from '../../Cache/MemberInfo/MemberInfo';
import * as ApiConfig from './Config';
import { ErrorCode } from '../../Enum/ErrorCode';
import LanguageManager from "../LanguageManager/LanguageManager";
import WebApiManager from "../WebApiManager/WebApiManager";

export default class MemberManager implements IMemberManager {
    private handler: Function;
    private webApi: WebApiManager;
    private languageManager: LanguageManager;
    constructor() {
        //获取webapi单例
        this.webApi = WebApiManager.GetInstance();
        this.languageManager = new LanguageManager();
    }


    /**
     * 登录
     * @param code 微信授权登录，从地址栏中获取得到
     * @param handler 登录回调事件
     */
    public Login(dto: LoginDto, handler: Function): void {
        this.handler = handler;
        //从缓存中获取Code，包括Code，Token,GameToken
        let authorizationDto: AuthorizationDto = Authorization.instance.GetAuthorization();
        //1.存在存储的Code，传入Code存在且不等于存储的Code，直接使用Code登录
        //2.没有存储的Code，传入Code存在，直接使用Code登录
        if ((authorizationDto != null && dto.Code && dto.Code != authorizationDto.Code) || (authorizationDto == null && dto.Code)) {
            //通过Code登录
            let loginByCodeDto: LoginByCodeDto = new LoginByCodeDto();
            loginByCodeDto.Code = dto.Code;
            loginByCodeDto.ParentID = dto.ParentID;
            loginByCodeDto.DeviceType = dto.DeviceType;
            loginByCodeDto.DeviceId = dto.DeviceId;
            //调用单例api的Post方法，
            this.webApi.Post(ApiConfig.Login, loginByCodeDto).then((data: any) => {
                console.log("Login成功回调");
                this.LoginSuccess(data, dto.Code);
            }, (error: any) => {
                console.log("Login失败回调");
                this.LoginError(error);
            });
        } else if (authorizationDto != null && authorizationDto.Token) {
            //token直接做登录验证
            //设置token到单例webapi
            this.webApi.SetToken(authorizationDto.Token);
            //调用单例api的Post方法
            this.webApi.Post(ApiConfig.LoginCheck, null).then((data: any) => {
                console.log("LoginCheck成功回调");
                this.LoginSuccess(data, dto.Code);
            }, (error: any) => {
                console.log("LoginCheck失败回调");
                this.LoginError(error);
            });
        } else {
            let result: LoginResultDto = new LoginResultDto();
            result.Result = ResultEnum.NO;
            this.handler(result);
        }
    }

    /**
    * 通过会员id和临时token登录
    * @param memberID 会员id
    * @param handler 登录回调事件
    */
    public LoginByID(dto: LoginDto, handler: Function): void {
        this.handler = handler;
        //从缓存中获取Code，包括Code，Token,GameToken
        let authorizationDto: AuthorizationDto = Authorization.instance.GetAuthorization();
        if (authorizationDto != null && authorizationDto.Token) {
            let loginByIdDto: LoginByIdDto = new LoginByIdDto();
            loginByIdDto.MemberID = dto.MemberID;
            loginByIdDto.DeviceType = dto.DeviceType;
            loginByIdDto.DeviceId = dto.DeviceId;
            //设置token到单例webapi
            this.webApi.SetToken(authorizationDto.Token);
            //请求调Net的api，
            this.webApi.Post(ApiConfig.LoginById, loginByIdDto).then((data: any) => {
                console.log("LoginCheck成功回调");
                this.LoginSuccess(data, dto.Code);
            }, (error: any) => {
                console.log("LoginCheck失败回调");
                this.LoginError(error);
            });
        } else {
            let result: LoginResultDto = new LoginResultDto();
            result.Result = ResultEnum.NO;
            this.handler(result);
        }
    }

    /**
     * 登录成功回调
     * @param response 会员信息
     */
    private LoginSuccess(response: LoginSuccessDto | LoginMultiAccountDto, code: string) {
        //返回结果是登录成功
        let dto: AuthorizationDto = new AuthorizationDto();
        dto.Code = code;
        if (!(response as LoginMultiAccountDto).Accounts) {
            //微信只有一个账号
            dto.Token = (response as LoginSuccessDto).SessionToken;
            dto.SocketToken = (response as LoginSuccessDto).SocketToken;
            dto.IsMulti = false;
            //微信只有一个账号
            dto.IsClose = (response as LoginSuccessDto).Closed;
            //写入到WebApi
            this.webApi.SetToken(dto.Token);
            //写入缓存中
            Authorization.instance.SetAuthorization(dto);

            let result: LoginResultDto = new LoginResultDto();
            result.Result = ResultEnum.LOGIN;
            this.handler(result);
        } else {
            //微信有多个账号
            dto.IsMulti = true;
            dto.Token = (response as LoginMultiAccountDto).TempToken;
            dto.SocketToken = null;
            dto.Accounts = (response as LoginMultiAccountDto).Accounts;
            //写入缓存中
            Authorization.instance.SetAuthorization(dto);

            let result: LoginResultDto = new LoginResultDto();
            result.Result = ResultEnum.MULTI;
            result.Data = dto.Accounts;
            this.handler(result);
        }
    }

    /**
     * 登录错误
     * @param error 
     */
    private LoginError(error: ErrorCode | string) {
        console.log("LoginError", error);
        let result: LoginResultDto = new LoginResultDto();
        result.Result = ResultEnum.ERROR;
        result.Data = this.languageManager.GetErrorMsg(error);
        this.handler(result);
    }

    /**
     * 获取会员信息
     */
    public GetMemberInfo(handler: Function): void {
        //请求调Net的api，
        this.webApi.Post(ApiConfig.GetMemberInfo, null).then((response: any) => {
            console.log("GetMemberInfo成功回调");
            //写入缓存中
            MemberInfo.instance.SetMemberInfo(response);
            handler(response);
        }, (error: any) => {
            console.log("GetMemberInfo失败回调");
            this.LoginError(error.toString());
        });
    };

    /**
     * 获取会员信息
     */
    public GetAuthorizationDtoByLocal(): AuthorizationDto {
        //从缓存中获取Code，包括Code，Token,GameToken等
        let authorizationDto: AuthorizationDto = Authorization.instance.GetAuthorization();
        if (authorizationDto == null) {
            authorizationDto = new AuthorizationDto();
        }
        return authorizationDto;
    };


    /**
     * 获取会员信息
     */
    public GetMemberInfoByLocal(): MemberInfoDto {
        //从缓存中获取会员信息
        let memberInfoDto: MemberInfoDto = MemberInfo.instance.GetMemberInfo();
        return memberInfoDto;
    };

    /**
     * 登出
     */
    public Logout(): boolean {
        //清除缓存中的信息
        Authorization.instance.ClearAuthorization();
        MemberInfo.instance.ClearMemberInfo();
        return true;
    }
}