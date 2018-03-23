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
                }else if(typeof(lang) != "number"){
                    if(lang == LanguageType[0]){
                        this.CurrentLangue = LanguageType.CH;
                    }else{
                        this.CurrentLangue = LanguageType.EN;
                    }
                }else{
                    this.CurrentLangue = lang;
                }
            }
            return LanguageUtils[LanguageType[this.CurrentLangue]][key];
        }
        /**
         * 获取游戏语言类型
         */
        public GetLanguageType(gameID: number = 0):number{
            let CurrentLangue:number;
            let storage: Utils.Storage = new Utils.Storage();
            let key: string = this.GetLanguageKey(gameID);
            let lang: LanguageType = storage.GetLocalStorage(key) as LanguageType;
            if (!lang) {
                CurrentLangue = DefaultLanguage;
            }else if(typeof(lang) != "number"){
                if(lang == LanguageType[0]){
                    CurrentLangue = LanguageType.CH;
                }else{
                    CurrentLangue = LanguageType.EN;
                }
            }else{
                CurrentLangue = lang;
            }
            return CurrentLangue;
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