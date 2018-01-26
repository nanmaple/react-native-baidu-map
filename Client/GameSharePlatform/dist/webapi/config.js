"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameConfig_1 = require("../GameConfig");
/**
 * 获取所有子级会员分数
 */
exports.GetChildScoreListApi = GameConfig_1.WebApiBaseUrl + "/Member/GetChildScoreList";
/**
 * 查看自己的分数变化记录
 */
exports.GetScoreLogsApi = GameConfig_1.WebApiBaseUrl + "/Member/GetScoreLogs";
/**
 * 游戏平台获取会员基本信息
 */
exports.GetMemberInfoApi = GameConfig_1.WebApiBaseUrl + "/Member/GetMemberInfo";
/**
 * 设置游戏账号
 */
exports.SetAccountApi = GameConfig_1.WebApiBaseUrl + "/Member/SetAccount";
/**
 * 游戏平台获取会员基本信息
 */
exports.SetRemarkApi = GameConfig_1.WebApiBaseUrl + "/Member/SetRemark";
//# sourceMappingURL=Config.js.map