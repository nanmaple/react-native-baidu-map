import {LanguageType} from '../../Enum/LanguageType';
export default interface ILanguage {
    /**
     * 获取语言
     */
    GetLanguage(): LanguageType,
    /**
     * 设置语言
     * @param language 
     */
    SetLanguage(language: LanguageType): boolean
};
