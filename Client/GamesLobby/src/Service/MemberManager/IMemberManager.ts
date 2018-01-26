namespace MemberManager {
    export interface IMember {
        /**
         * 登录检查
         */
        Login(dto: BaseDto.LoginDto, handler: Laya.Handler):void;

        /**
         * 获取会员信息
         */
        GetMemberInfo(gameID: number, handler: Laya.Handler);
    }
}