import IMemberInfo from "./IMemberInfo";
import { MemberInfoDto } from '../../Dto/MemberInfoDto';
import { Storage, StorageType } from '../../Utils/Storage';
import { AuthorizationDto } from '../../Dto/AuthorizationDto';

export default class MemberInfo implements IMemberInfo {
    static readonly instance = new MemberInfo();
    private memberInfo: MemberInfoDto = null;
    private cacheType = StorageType.LOCALSTORAGE;

    /**
     * 获取用户缓存的key
     */
    private GetMemberInfoKey(): string {
        return `MemberInfo-cache`;
    }
    /**
     * 获取会员授权信息
     */
    public GetMemberInfo(): MemberInfoDto {
        if (this.memberInfo) {
            return this.memberInfo;
        }

        let storage: Storage = new Storage();
        let key: string = this.GetMemberInfoKey();
        this.memberInfo = <MemberInfoDto>storage.Get(key, this.cacheType);
        return this.memberInfo;
    }

    /**
     * 设置授权信息
     * @param dto 
     */
    public SetMemberInfo(dto: MemberInfoDto): boolean {
        if (!this.memberInfo) {
            this.memberInfo = new MemberInfoDto();
        }
        this.memberInfo.Account = dto.Account !== undefined ? dto.Account : this.memberInfo.Account;
        this.memberInfo.HeadImageUrl = dto.HeadImageUrl !== undefined ? dto.HeadImageUrl : this.memberInfo.HeadImageUrl;
        this.memberInfo.Nickname = dto.Nickname !== undefined ? dto.Nickname : this.memberInfo.Nickname;
        this.memberInfo.Score = dto.Score !== undefined ? dto.Score : this.memberInfo.Score;
        this.memberInfo.MemberId = dto.MemberId !== undefined ? dto.MemberId : this.memberInfo.MemberId;
        let storage: Storage = new Storage();
        let key: string = this.GetMemberInfoKey();
        storage.Set(key, this.memberInfo, this.cacheType);
        return true;
    }

    /**
     * 清除用户数据
     */
    public ClearMemberInfo(): void {
        this.memberInfo = null;
        let key: string = this.GetMemberInfoKey();
        let storage: Storage = new Storage();
        storage.Set(key, null, this.cacheType);
    }

}