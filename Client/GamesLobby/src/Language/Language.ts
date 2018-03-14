/// <reference path="../Utils/Storage.ts"/>
/// <reference path="./Config.ts"/>
namespace LanguageUtils {
    export class Language {
        private CurrentLangue: LanguageType = null;
        private cacheType = GameConfig.CacheType !== undefined ? GameConfig.CacheType : Utils.StorageType.LOCALSTORAGE;
        /**
         * 设置语言
         * @param lang 语言类型
         * @param gameID 游戏ID，默认所有游戏通用语言，设置后为具体某种游戏的语言
         */
        public SetLanguage(lang: LanguageType, gameID: number = 0): boolean {
            let storage: Utils.Storage = new Utils.Storage();
            let key: string = this.GetLanguageKey(gameID);
            storage.Set(key, lang, this.cacheType);
            this.CurrentLangue = lang;
            return true
        }

        /**
         * 根据多语言键值，获取对应
         * @param key 
         * @param gameID 
         */
        public GetLanguage(key: string, gameID: number = 0): string {
            if (this.CurrentLangue === null) {
                let storage: Utils.Storage = new Utils.Storage();
                let key: string = this.GetLanguageKey(gameID);
                let lang: LanguageType = storage.Get(key,this.cacheType) as LanguageType;
                if (!lang) {
                    this.CurrentLangue = DefaultLanguage;
                } else {
                    this.CurrentLangue = lang;
                }
            }

            return LanguageUtils[LanguageType[this.CurrentLangue]][key];
        }

        /**
         * 获取游戏语言key，传入gameID,
         * @param gameID 
         */
        private GetLanguageKey(gameID: number = 0): string {
            return `Language-Cache-Key`;
        }
    }
}