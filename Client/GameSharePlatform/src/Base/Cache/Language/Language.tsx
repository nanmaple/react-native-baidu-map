import ILanguage from './ILanguage';
import { LanguageType } from '../../Enum/LanguageType';
import { Storage, StorageType } from '../../Utils/Storage';
export default class Language implements ILanguage {
    static readonly instance = new Language();
    private language: LanguageType;
    private cacheType = StorageType.LOCALSTORAGE;

    constructor() {
        let key: string = this.GetLanguageKey();
        let storage: Storage = new Storage();
        this.language = storage.Get(key, this.cacheType) as LanguageType;
        if (this.language == null) {
            this.language = LanguageType.CH;
        }
    }


    /**
     * 获取用户缓存的key
     */
    private GetLanguageKey(): string {
        return `language-cache-key`;
    }
    /**
     * 获取语言
     */
    GetLanguage(): LanguageType {
        return this.language;
    };
    /**
     * 设置语言
     * @param language 
     */
    SetLanguage(language: LanguageType): boolean {
        this.language = language;
        let storage: Storage = new Storage();
        let key: string = this.GetLanguageKey();
        storage.Set(key, language, this.cacheType);
        return true;
    }

}