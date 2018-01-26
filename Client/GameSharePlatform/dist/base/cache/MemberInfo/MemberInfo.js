"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MemberInfoDto_1 = require("../../Dto/MemberInfoDto");
const Storage_1 = require("../../Utils/Storage");
class MemberInfo {
    constructor() {
        this.memberInfo = null;
        this.cacheType = Storage_1.StorageType.LOCALSTORAGE;
    }
    /**
     * 获取用户缓存的key
     */
    GetMemberInfoKey() {
        return `MemberInfo-cache`;
    }
    /**
     * 获取会员授权信息
     */
    GetMemberInfo() {
        if (this.memberInfo) {
            return this.memberInfo;
        }
        let storage = new Storage_1.Storage();
        let key = this.GetMemberInfoKey();
        this.memberInfo = storage.Get(key, this.cacheType);
        return this.memberInfo;
    }
    /**
     * 设置授权信息
     * @param dto
     */
    SetMemberInfo(dto) {
        if (!this.memberInfo) {
            this.memberInfo = new MemberInfoDto_1.MemberInfoDto();
        }
        this.memberInfo.Account = dto.Account !== undefined ? dto.Account : this.memberInfo.Account;
        this.memberInfo.HeadImageUrl = dto.HeadImageUrl !== undefined ? dto.HeadImageUrl : this.memberInfo.HeadImageUrl;
        this.memberInfo.Nickname = dto.Nickname !== undefined ? dto.Nickname : this.memberInfo.Nickname;
        this.memberInfo.Score = dto.Score !== undefined ? dto.Score : this.memberInfo.Score;
        this.memberInfo.MemberId = dto.MemberId !== undefined ? dto.MemberId : this.memberInfo.MemberId;
        let storage = new Storage_1.Storage();
        let key = this.GetMemberInfoKey();
        storage.Set(key, this.memberInfo, this.cacheType);
        return true;
    }
    /**
     * 清除用户数据
     */
    ClearMemberInfo() {
        this.memberInfo = null;
        let key = this.GetMemberInfoKey();
        let storage = new Storage_1.Storage();
        storage.Set(key, null, this.cacheType);
    }
}
MemberInfo.instance = new MemberInfo();
exports.default = MemberInfo;
//# sourceMappingURL=MemberInfo.js.map