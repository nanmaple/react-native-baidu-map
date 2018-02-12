namespace BaseDto {
    /**
     * 授权登录信息Dto
     */
    export class AuthorizationDto {
        /**
         * Token
         */
        public Token: string = "";
        /**
         * 游戏token
         */
        public SocketToken: string = "";
        /**
         * 微信Code
         */
        public Code: string = null;
        /**
         * 账号是否关闭
         */
        public IsClose: boolean = true;
        /**
         * 是否多账号
         */
        public IsMulti: boolean = false;
        /**
         * 多账号信息
         */
        public Accounts: Array<string>;
        /**
         * 是否是游客
         */
        public IsTourists: boolean = true;
    }
}