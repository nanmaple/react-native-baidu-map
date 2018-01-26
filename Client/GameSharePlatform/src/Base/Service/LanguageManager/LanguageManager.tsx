import Language from "../../Cache/Language/Language";
import { LanguageType } from '../../Enum/LanguageType';
import ILanguageManager from './ILanguageManager';
import { ErrorCode } from '../../Enum/ErrorCode';
import { ErrorCodeExtends } from '../../Extends';
import CH from './CH';
import EN from './EN';

export default class LanguageManager implements ILanguageManager {
    constructor() {
    }

    /**
     * 获取当前语言
     */
    public GetLanguage(): LanguageType {
        return Language.instance.GetLanguage();
    }


    /**
     * 
     * @param language 设置语言
     */
    public SetLanguage(language: LanguageType): boolean {
        return Language.instance.SetLanguage(language);
    }

    /**
     * 解析错误码
     * @param errorCode 错误码
     */
    public GetErrorMsg(errorCode: ErrorCode | string | ErrorCodeExtends): string {
        if (!ErrorCode.hasOwnProperty(errorCode) || typeof errorCode === "string") {
            return errorCode.toString();
        }
        let language: LanguageType = Language.instance.GetLanguage();
        switch (language) {
            case LanguageType.CH:
                return CH[ErrorCode[errorCode]];
            default:
                return errorCode.toString();
        }
    }
}