import Http from '../../Utils/Http';

import { AuthorizationDto } from '../../Dto/AuthorizationDto';
import { ResponseDto } from '../../Dto/ResponseDto';
import { ErrorCode } from '../../Enum/ErrorCode';

import Authorization from "../../Cache/Authorization/Authorization";
import LanguageManager from "../LanguageManager/LanguageManager";

export default abstract class WebApiBaseCtrl {
    //token存储
    protected header: any = {
        Authorization: ""
    };
    //http
    protected http: Http;

    constructor() {
        this.http = new Http();
        //从会员服务中获取用户信息
        //获取Socket Token
        let authorizationDto: AuthorizationDto = Authorization.instance.GetAuthorization();
        if (authorizationDto && authorizationDto.Token) {
            this.header.Authorization = authorizationDto.Token;
        }
    }

    /**
     * 设置token
     */
    public SetToken(token?: string): void {
        if (token) {
            this.header.Authorization = token;
            return
        }
    }

    /**
     * 清除token
     */
    public ClearToken(): void {
        this.header.Authorization = "";
    }

    /**
     * Post方法
     * @param Url 地址
     * @param dto 参数
     */
    public Post(Url: string, dto: any): any {
        return new Promise((resolve, reject) => {
            this.http.Post(Url, dto, this.header, (respoense: ResponseDto) => {
                if (respoense.Result == ErrorCode.Success) {
                    resolve(respoense.Data);
                } else {
                    let languageManager: LanguageManager = new LanguageManager();
                    reject(languageManager.GetErrorMsg(respoense.Result));
                }
            }, (error: string | ErrorCode) => {
                if (typeof error !== "object") {
                    reject(error.toString());
                } else {
                    let languageManager: LanguageManager = new LanguageManager();
                    reject(languageManager.GetErrorMsg(error));
                }
            })
        })
    }

    /**
     * Get方法
     * @param Url 地址
     * @param dto 参数
     */
    public Get(Url: string, dto: any): any {
        return new Promise((resolve, reject) => {
            this.http.Get(Url, dto, this.header, (respoense: ResponseDto) => {
                if (respoense.Result == ErrorCode.Success) {
                    resolve(respoense.Data);
                } else {
                    let languageManager: LanguageManager = new LanguageManager();
                    reject(languageManager.GetErrorMsg(respoense.Result));
                }
            }, (error: string | ErrorCode) => {
                if (typeof error !== "object") {
                    reject(error.toString());
                } else {
                    let languageManager: LanguageManager = new LanguageManager();
                    reject(languageManager.GetErrorMsg(error));
                }
            })
        })
    }
}