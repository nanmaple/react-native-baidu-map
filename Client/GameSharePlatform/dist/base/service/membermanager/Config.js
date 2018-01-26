"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameConfig_1 = require("../../../GameConfig");
/**
 * 登录
 */
exports.Login = GameConfig_1.WebApiBaseUrl + "/Member/Login";
/**
 * 登录检测
 */
exports.LoginCheck = GameConfig_1.WebApiBaseUrl + "/Member/LoginByToken";
/**
 * 通过id和临时token登录
 */
exports.LoginById = GameConfig_1.WebApiBaseUrl + "/Member/SelectMember";
/**
 * 获取会员信息
 */
exports.GetMemberInfo = GameConfig_1.WebApiBaseUrl + "/Member/GetUserProfile";
//# sourceMappingURL=Config.js.map