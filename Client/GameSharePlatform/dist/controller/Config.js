"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameConfig_1 = require("../GameConfig");
/**
 * 获取所有子级会员分数
 */
exports.GetChildScoreListApi = `${GameConfig_1.WebApiBaseUrl}/Member/GetChildScoreList`;
/**
 * 查看自己的分数变化记录
 */
exports.GetScoreLogsApi = `${GameConfig_1.WebApiBaseUrl}/Member/GetScoreLogs`;
/**
 * 游戏平台获取会员基本信息
 */
exports.GetMemberInfoApi = `${GameConfig_1.WebApiBaseUrl}/Member/GetMemberInfo`;
/**
 * 设置游戏账号
 */
exports.SetAccountApi = `${GameConfig_1.WebApiBaseUrl}/Member/SetAccount`;
/**
 * 修改当前登录会员的昵称
 */
exports.ModifyNicknameApi = `${GameConfig_1.WebApiBaseUrl}/Member/ModifyNickname`;
/**
 * 设置密码
 */
exports.ResetPasswordApi = `${GameConfig_1.WebApiBaseUrl}/Member/ResetPassword`;
/**
 * 修改自己对子级会员的备注
 */
exports.SetRemarkApi = `${GameConfig_1.WebApiBaseUrl}/Member/SetRemark`;
/**
 * 修改子级会员的会员状态(关闭、正常等)
 */
exports.UpdateCloseStatusApi = `${GameConfig_1.WebApiBaseUrl}/Member/UpdateCloseStatus`;
/**
 * 进分
 */
exports.TransferInApi = `${GameConfig_1.WebApiBaseUrl}/Member/TransferIn`;
/**
 * 出分
 */
exports.TransferOutApi = `${GameConfig_1.WebApiBaseUrl}/Member/TransferOut`;
/**
 * 设置子会员密码
 */
exports.SetChildPasswordApi = `${GameConfig_1.WebApiBaseUrl}/Member/SetChildPassword`;
/**
 * 查询转账记录
 */
exports.GetTransferLogApi = `${GameConfig_1.WebApiBaseUrl}/Member/GetTransferLog`;
/**
 * 重置手机号码
 */
exports.ResetPhoneNumberApi = `${GameConfig_1.WebApiBaseUrl}/Member/ResetPhoneNumber`;
//# sourceMappingURL=Config.js.map