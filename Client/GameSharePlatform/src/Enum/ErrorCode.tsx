export enum ErrorCodeExtends {
    /**
     * 分数错误
     */
    AmountError = 10000,
    /**
     * 密码格式错误
     */
    PasswordFormatError,
    /**
     * 账号已存在，无法修改
     */
    AccountExist,
    /**
     * 昵称格式错误
     */
    NicknameFormatError,
    /**
     * 手机号码格式错误
     */
    PhoneNumberFormatError
}