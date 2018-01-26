import BaseCtrl from '../Base/BaseCtrl';

import { MemberInfoDto, LoginDto } from '../Base';
import { ErrorCodeExtends } from '../Enum/ErrorCode';
import { SetAccountApi, ResetPasswordApi, ModifyNicknameApi, ResetPhoneNumberApi } from './Config';
import Verification from '../Utils/Verification';
import { GetQuery } from '../Utils/Url';

export default class UserCtrl extends BaseCtrl {
    /**
     * 登录Dto信息
     */
    protected dto: LoginDto = new LoginDto();

    constructor() {
        super();
    }

    /**
     * 登录
     */
    public Login(LoginCallBack: Function): void {
        //获取地址栏中code
        this.dto.Code = GetQuery("code");
        //获取地址栏中state参数，即父级（推荐人）ID
        this.dto.ParentID = GetQuery("parentID");
        this.parentID = this.dto.ParentID;
        //调用会员管理的登录方法
        this.memberManager.Login(this.dto, LoginCallBack);
    };

    /**
     * 多账号时，通过会员id登录
     */
    public LoginByID(memberId: number, handler: Function): void {
        this.dto.MemberID = memberId;
        this.memberManager.LoginByID(this.dto, handler);
    }

    /**
     * 登出
     */
    public Logout(): void {
        this.loginStatus = false;
        this.memberManager.Logout();
    };

    /**
     * 获取会员信息
     */
    public GetMemberInfo(handler: Function): void {
        this.memberManager.GetMemberInfo(handler);
    }

    /**
     * 获取会员信息
     */
    public GetMemberInfoByLocal = (): MemberInfoDto => {
        if (!this.loginStatus) {
            return null;
        }
        return this.memberInfo;
    }

    /**
     * 是否登录
     */
    public IsLogin = (): boolean => {
        return this.loginStatus;
    }

    /**
     * 是否登录
     */
    public IsClose = (): boolean => {
        return this.closeStatus;
    }


    /**
     * 设置账号
     * @param account 账号
     * @param handler 回调
     */
    public SetAccount(account: string, handler: Function): void {
        if (this.memberInfo && this.memberInfo.Account) {
            handler(null, [account], this.languageManager.GetErrorMsg(ErrorCodeExtends.AccountExist));
        }
        let dto: any = {
            Account: account
        }
        this.webApi.Post(SetAccountApi, dto).then((data: any) => {
            handler(null, [account]);
        }, (error: string) => {
            console.log("SetRemark error", error);
            handler(null, [account], error);
        })
    }

    /**
     * 设置子会员密码
     * @param password 密码
     * @param handler 回调
     */
    public ResetPassword(password: string, handler: Function): void {
        //出分值必须大于0
        if (!Verification.Password(password)) {
            handler(null, [password], this.languageManager.GetErrorMsg(ErrorCodeExtends.PasswordFormatError));
            return;
        }
        let dto: any = {
            Password: password
        }
        this.webApi.Post(ResetPasswordApi, dto).then((data: any) => {
            handler(null, [password]);
        }, (error: string) => {
            console.log("SetRemark error", error);
            handler(null, [password], this.languageManager.GetErrorMsg(error));
        })
    }

    /**
     * 设置昵称
     * @param nickname 账号
     * @param handler 回调
     */
    public ModifyNickname(nickname: string, handler: Function): void {
        if (!nickname) {
            handler(null, [nickname], this.languageManager.GetErrorMsg(ErrorCodeExtends.NicknameFormatError));
        }
        let dto: any = {
            Nickname: nickname
        }
        this.webApi.Post(SetAccountApi, dto).then((data: any) => {
            handler(null, [nickname]);
        }, (error: string) => {
            console.log("SetRemark error", error);
            handler(null, [nickname], error);
        })
    }


    /**
     * 设置手机号码
     * @param phoneNumber 密码
     * @param handler 回调
     */
    public ResetPhoneNumber(phoneNumber: string, handler: Function): void {
        //验证手机号码
        if (!Verification.PhoneNumber(phoneNumber)) {
            handler(null, [phoneNumber], this.languageManager.GetErrorMsg(ErrorCodeExtends.PhoneNumberFormatError));
            return;
        }
        let dto: any = {
            PhoneNumber: phoneNumber
        }
        this.webApi.Post(ResetPhoneNumberApi, dto).then((data: any) => {
            handler(null, [phoneNumber]);
        }, (error: string) => {
            console.log("SetRemark error", error);
            handler(null, [phoneNumber], error);
        })
    }
}