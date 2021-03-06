export const LoginRoute: string = "/login";
export const HomeRoute: string = "/";
export const ManagerRoute: string = "/manager";
export const MemberRoute: string = "/manager/member";
export const MemberDetailRoute: string = "/memberdetail/:memberId";
export const GameRecordDetailRoute: string = "/gameRecorddetail/:gameId";
export const ReportGameResutlRoute: string = "/report/gameResult/:memberId";
export const ReportGameRecordRoute: string = "/report/gameRecord/:gameId";

export const MeRoute: string = "/manager/me";
export const GameRecordRoute: string = "/manager/me/gamerecord";
export const ReportRoute: string = "/manager/me/report";
export const AllReportRoute: string = "/manager/me/allreport";
export const ScoreRecordRoute: string = "/manager/me/scoreRecord";
export const SettingRoute: string = "/manager/me/setting";
export const ParentMsgRoute: string = "/manager/me/parent";

export const LimiteRoute: string = "/limite";



export function GetDetailRoute(routers: string, param: any): string {
    return `${routers}${param}`
}