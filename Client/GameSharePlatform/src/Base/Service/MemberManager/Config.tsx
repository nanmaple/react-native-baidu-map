import { WebApiBaseUrl } from '../../../GameConfig';
/**
 * 登录
 */
export const Login = WebApiBaseUrl + "/Member/Login";
/**
 * 登录检测
 */
export const LoginCheck = WebApiBaseUrl + "/Member/LoginByToken";
/**
 * 通过id和临时token登录
 */
export const LoginById = WebApiBaseUrl + "/Member/SelectMember";
/**
 * 获取会员信息
 */
export const GetMemberInfo = WebApiBaseUrl + "/Member/GetUserProfile";