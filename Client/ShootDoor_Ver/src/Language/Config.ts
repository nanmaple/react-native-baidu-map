
namespace LanguageUtils {
    export enum LanguageType {
        CH = 0,
        EN = 1
    }
    /**
     * 默认语言
     */
    export const DefaultLanguage = LanguageType.CH;

    /**
     * 游戏ID独立语言
     * 如果游戏ID为0，则通用游戏语言
     * 如果游戏ID>0,则为独有语言
     */
    export const GameID = GameConfig.GameID;
}