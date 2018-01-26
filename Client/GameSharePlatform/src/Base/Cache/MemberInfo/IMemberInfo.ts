import { MemberInfoDto } from '../../Dto/MemberInfoDto';
export default interface IMemberInfo {
    /**
     * 获取会员授权信息
     */
    GetMemberInfo(): MemberInfoDto,
    /**
     * 设置授权信息
     * @param dto 
     */
    SetMemberInfo(dto: MemberInfoDto): boolean
};
