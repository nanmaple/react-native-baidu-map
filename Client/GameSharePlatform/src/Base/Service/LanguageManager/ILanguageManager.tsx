import Language from "../../Cache/Language/Language";
import { LanguageType } from '../../Enum/LanguageType';
export default interface ILanguageManager {

    /**
     * 获取当前语言
     */
    GetLanguage(): LanguageType;

    /**
     * 
     * @param language 设置语言
     */
    SetLanguage(language: LanguageType): boolean;
}