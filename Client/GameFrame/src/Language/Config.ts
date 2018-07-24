/**
 * 多语言配置文件
 * 根据实际需要的语言项，添加或者删除语言项
 */
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

    /**
     * 游戏ID独立语言
     * 如果游戏ID为0，则通用游戏语言
     * 如果游戏ID>0,则为独有语言
     */
    export const GameID = GameConfig.GameID;
}