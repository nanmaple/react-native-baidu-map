
namespace LanguageUtils {
    export enum LanguageType {
        CH = 0,
        EN = 1
    }

    let lang = Laya.Browser.window.navigator.language || Laya.Browser.window.navigator["userLanguage"];//常规浏览器语言和IE浏览器  
    lang = lang.substr(0, 2);//截取lang前2位字符 
    let defaultLanguage = LanguageType.CH
    if (lang == 'zh') {
        defaultLanguage = LanguageType.CH;
    } else {
        defaultLanguage = LanguageType.EN;
    }
    /**
     * 默认语言
     */
    export const DefaultLanguage = defaultLanguage;
}