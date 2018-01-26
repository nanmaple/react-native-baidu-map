
import { LoginDto } from '../../Dto/LoginInfoDto';

export default interface IMemberManager {
    /**
     * 登录检查
     */
    Login(dto: LoginDto, handler: Function): void;

    /**
     * 获取会员信息
     */
    GetMemberInfo(handler: Function): void;
}