namespace GameDto {
    /**
     * 授权登录信息Dto
     */
    export class MemberInfoDto {
        /**
         * 账号
         */
        public Account: string;
        /**
         * 会员ID
         */
        public MemberId: number;
        /**
         * 昵称
         */
        public Nickname: string = "";
        /**
         * 分数
         */
        public Score: number = null;
        /**
         * 头像
         */
        public HeadImageUrl: string = "";
    }
}