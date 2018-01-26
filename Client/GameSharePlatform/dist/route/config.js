"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRoute = "/";
exports.HomeRoute = "/Home";
exports.ManagerRoute = "/manager";
exports.MemberRoute = "/manager/member";
exports.GameRecordRoute = "/manager/gamerecord";
exports.ReportRoute = "/manager/report";
exports.ScoreRecordRoute = "/manager/scoreRecord";
exports.MemberDetailRoute = "/memberdetail/:memberId";
function GetMemberDetailRoute(memberId) {
    return `/memberdetail/${memberId}`;
}
exports.GetMemberDetailRoute = GetMemberDetailRoute;
//# sourceMappingURL=Config.js.map