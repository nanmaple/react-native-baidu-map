export const LoginRoute: string = "/";
export const HomeRoute: string = "/Home";
export const ManagerRoute: string = "/manager";
export const MemberRoute: string = "/manager/member";
export const GameRecordRoute: string = "/manager/gamerecord";
export const ReportRoute: string = "/manager/report";
export const ScoreRecordRoute: string = "/manager/scoreRecord";
export const MemberDetailRoute: string = "/memberdetail/:memberId";

export function  GetMemberDetailRoute(memberId:number): string{
    return `/memberdetail/${memberId}`
}