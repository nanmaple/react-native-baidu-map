var Enum;
(function (Enum) {
    var ErrorCode;
    (function (ErrorCode) {
        // 共有错误码
        /// <summary>
        /// 系统错误
        /// </summary>
        ErrorCode[ErrorCode["SystemError"] = 0] = "SystemError";
        /// <summary>
        /// 操作成功
        /// </summary>
        ErrorCode[ErrorCode["Success"] = 1] = "Success";
        /// <summary>
        /// 参数无效
        /// </summary>
        ErrorCode[ErrorCode["InvalidArgument"] = 2] = "InvalidArgument";
        // 登录错误码
        /// <summary>
        /// 会员已存在(注册新账号时)
        /// </summary>
        ErrorCode[ErrorCode["MemberExist"] = 1001] = "MemberExist";
        /// <summary>
        /// 会员不存在
        /// </summary>
        ErrorCode[ErrorCode["MemberNotExist"] = 1002] = "MemberNotExist";
        /// <summary>
        /// 会员被冻结
        /// </summary>
        ErrorCode[ErrorCode["MemberClosed"] = 1003] = "MemberClosed";
        //Token错误
        /// <summary>
        /// Token为空
        /// </summary>
        ErrorCode[ErrorCode["NullToken"] = 2001] = "NullToken";
        /// <summary>
        /// 服务器时间差错误
        /// </summary>
        ErrorCode[ErrorCode["OverTime"] = 2002] = "OverTime";
        /// <summary>
        /// token失效
        /// </summary>
        ErrorCode[ErrorCode["TokenInvalid"] = 2003] = "TokenInvalid";
        /// <summary>
        /// Token解密失败
        /// </summary>
        ErrorCode[ErrorCode["TokenDecodeError"] = 2004] = "TokenDecodeError";
        /// <summary>
        /// Signature签名错误
        /// </summary>
        ErrorCode[ErrorCode["SignatureError"] = 2005] = "SignatureError";
        /// <summary>
        /// Playload参数错误
        /// </summary>
        ErrorCode[ErrorCode["PlayloadError"] = 2006] = "PlayloadError";
        /// <summary>
        /// 帐号无效
        /// </summary>
        ErrorCode[ErrorCode["AccountInvalid"] = 2007] = "AccountInvalid";
        /// <summary>
        /// 拒绝游客
        /// </summary>
        ErrorCode[ErrorCode["RefuseTourist"] = 2008] = "RefuseTourist";
        /// <summary>
        /// 解析的payload会员ID无效
        /// </summary>
        ErrorCode[ErrorCode["MemberIdInvalid"] = 2009] = "MemberIdInvalid";
        // 会员信息操作
        /// <summary>
        /// 账号已存在
        /// </summary>
        ErrorCode[ErrorCode["AccountExist"] = 3001] = "AccountExist";
        /// <summary>
        /// 已设置过账号(只能设置一次)
        /// </summary>
        ErrorCode[ErrorCode["AccountHasBeenSetup"] = 3002] = "AccountHasBeenSetup";
        /// <summary>
        /// 已是代理
        /// </summary>
        ErrorCode[ErrorCode["AlreadyAgent"] = 3003] = "AlreadyAgent";
        /// <summary>
        /// 邮箱已存在
        /// </summary>
        ErrorCode[ErrorCode["EmailExist"] = 3004] = "EmailExist";
        /// <summary>
        /// 密码错误(重置密码功能)
        /// </summary>
        ErrorCode[ErrorCode["ErrorPassword"] = 3005] = "ErrorPassword";
        /// <summary>
        /// 父级不能是自己
        /// </summary>
        ErrorCode[ErrorCode["ParentCanNotBeSelf"] = 3006] = "ParentCanNotBeSelf";
        /// <summary>
        /// 手机号已存在(设置手机号)
        /// </summary>
        ErrorCode[ErrorCode["PhoneNumberExist"] = 3007] = "PhoneNumberExist";
        /// <summary>
        /// 邮箱与之前的相同(重置邮箱时)
        /// </summary>
        ErrorCode[ErrorCode["SameEmail"] = 3008] = "SameEmail";
        /// <summary>
        /// 密码与之前设置的相同(重置密码时)
        /// </summary>
        ErrorCode[ErrorCode["SamePassword"] = 3009] = "SamePassword";
        /// <summary>
        /// 手机号与之前设置的相同(重新设置手机号时)
        /// </summary>
        ErrorCode[ErrorCode["SamePhoneNumber"] = 3010] = "SamePhoneNumber";
        /// <summary>
        /// 邮箱格式错误
        /// </summary>
        ErrorCode[ErrorCode["WrongEmail"] = 3011] = "WrongEmail";
        /// <summary>
        /// 手机号格式错误
        /// </summary>
        ErrorCode[ErrorCode["WrongPhoneNumber"] = 3012] = "WrongPhoneNumber";
        /// <summary>
        /// 父子级关系不存在
        /// </summary>
        ErrorCode[ErrorCode["AgencyRelationshipNotExist"] = 3013] = "AgencyRelationshipNotExist";
        // 进取分错误
        /// <summary>
        /// 修改会员分数失败
        /// </summary>
        ErrorCode[ErrorCode["ModifyMemberScoreFailed"] = 3001] = "ModifyMemberScoreFailed";
        /// <summary>
        /// 修改会员的父级会员分数失败
        /// </summary>
        ErrorCode[ErrorCode["ModifyParentScoreFailed"] = 3002] = "ModifyParentScoreFailed";
    })(ErrorCode = Enum.ErrorCode || (Enum.ErrorCode = {}));
})(Enum || (Enum = {}));
