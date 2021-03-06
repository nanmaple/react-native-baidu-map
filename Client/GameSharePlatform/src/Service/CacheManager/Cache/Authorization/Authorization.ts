import IAuthorization from './IAuthorization';
import { Storage, StorageType } from '../../../../Utils/Storage';
import { AuthorizationDto } from '../../../../Dto/AuthorizationDto';

export default class Authorization implements IAuthorization {
    static readonly instance = new Authorization();
    private authorization: AuthorizationDto = null;
    private cacheType = StorageType.LOCALSTORAGE;
    constructor() {
    }

    /**
     * 获取用户缓存的key
     */
    private GetAuthorizationKey(gameId?: number): string {
        if (gameId) {
            return `Authorization-${gameId}-CacheKey`;
        }
        return `Authorization-CacheKey`;
    }

    /**
     * 获取会员授权信息
     */
    public GetAuthorization(): AuthorizationDto {
        if (this.authorization) {
            return this.authorization;
        }

        let storage: Storage = new Storage();
        let key: string = this.GetAuthorizationKey();
        this.authorization = <AuthorizationDto>storage.Get(key, this.cacheType);
        return this.authorization;
    }

    /**
     * 设置授权信息
     * @param dto 
     */
    public SetAuthorization(dto: AuthorizationDto, gameId?: number): boolean {
        if (!this.authorization) {
            this.authorization = new AuthorizationDto();
        }
        this.authorization.Code = dto.Code ? dto.Code : this.authorization.Code;
        this.authorization.Token = dto.Token !== undefined ? dto.Token : this.authorization.Token;
        this.authorization.IsMulti = dto.IsMulti !== undefined ? dto.IsMulti : this.authorization.IsMulti;
        this.authorization.IsTourists = dto.IsTourists !== undefined ? dto.IsTourists : this.authorization.IsTourists;
        this.authorization.Accounts = dto.Accounts !== undefined ? dto.Accounts : this.authorization.Accounts;
        this.authorization.ParentID = dto.ParentID !== undefined ? dto.ParentID : this.authorization.ParentID;
        this.authorization.IsClose = dto.IsClose !== undefined ? dto.IsClose : this.authorization.IsClose;
        let storage: Storage = new Storage();
        let key: string = this.GetAuthorizationKey(gameId);
        storage.Set(key, this.authorization, this.cacheType);
        return true;
    }

    /**
     * 清除用户数据
     */
    public ClearAuthorization(): void {
        this.authorization = null;
        let key: string = this.GetAuthorizationKey();
        let storage: Storage = new Storage();
        storage.Set(key, null, this.cacheType);
    }
}