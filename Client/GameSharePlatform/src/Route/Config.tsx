export const HomeRoute: string = "/";
export const ManagerRoute: string = "/manager";
export const MemberRoute: string = "/manager/member";
export const GameRecordRoute: string = "/manager/gamerecord";
export const ReportRoute: string = "/manager/report";
export const ScoreRecordRoute: string = "/manager/scoreRecord";
export const MemberDetailRoute: string = "/memberdetail/:memberId";
export const GameRecordDetailRoute: string = "/gameRecorddetail/:gameId";
export const ReportGameResutlRoute: string = "/report/gameResult/:memberId";
export const ReportGameRecordRoute: string = "/report/gameRecord/:gameId";

export function GetDetailRoute(routers: string, param: any): string {
    return `${routers}${param}`
}