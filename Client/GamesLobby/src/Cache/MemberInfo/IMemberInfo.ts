/// <reference path="../../Dto/MemberInfoDto.ts"/>
namespace CacheData {
    export interface IMemberInfo {
        /**
         * 获取会员授权信息
         */
        GetMemberInfo(gameID: number):BaseDto.MemberInfoDto;
        /**
         * 设置授权信息
         * @param dto 
         */
        SetMemberInfo(gameID: number,dto: BaseDto.MemberInfoDto): boolean;
        /**
         * 清空缓存数据
         * @param gameID 游戏ID
         */
        ClearMemberInfo(gameID: number): boolean;
    };
}
