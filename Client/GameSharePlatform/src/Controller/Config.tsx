import { WebApiBaseUrl } from '../GameConfig';

/**
 * 获取所有子级会员分数
 */
export const GetChildScoreListApi = `${WebApiBaseUrl}/Member/GetChildScoreList`;
/**
 * 查看自己的分数变化记录
 */
export const GetScoreLogsApi = `${WebApiBaseUrl}/Member/GetScoreLogs`;
/**
 * 游戏平台获取会员基本信息
 */
export const GetMemberInfoApi = `${WebApiBaseUrl}/Member/GetMemberInfo`;
/**
 * 设置游戏账号
 */
export const SetAccountApi = `${WebApiBaseUrl}/Member/SetAccount`;
/**
 * 修改当前登录会员的昵称
 */
export const ModifyNicknameApi = `${WebApiBaseUrl}/Member/ModifyNickname`;
/**
 * 设置密码
 */
export const ResetPasswordApi = `${WebApiBaseUrl}/Member/ResetPassword`;

/**
 * 修改自己对子级会员的备注
 */
export const SetRemarkApi = `${WebApiBaseUrl}/Member/SetRemark`;
/**
 * 修改子级会员的会员状态(关闭、正常等)
 */
export const UpdateCloseStatusApi = `${WebApiBaseUrl}/Member/UpdateCloseStatus`;
/**
 * 进分
 */
export const TransferInApi = `${WebApiBaseUrl}/Member/TransferIn`;
/**
 * 出分
 */
export const TransferOutApi = `${WebApiBaseUrl}/Member/TransferOut`;
/**
 * 设置子会员密码
 */
export const SetChildPasswordApi = `${WebApiBaseUrl}/Member/SetChildPassword`;

/**
 * 查询转账记录
 */
export const GetTransferLogApi = `${WebApiBaseUrl}/Member/GetTransferLog`;
/**
 * 重置手机号码
 */
export const ResetPhoneNumberApi = `${WebApiBaseUrl}/Member/ResetPhoneNumber`;
