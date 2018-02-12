namespace Utils{
    //投注类型
    export class BetPos{
        /**
         * 投注类型结果转换
         */
        static transform(type:number):string{
            let language: LanguageUtils.Language = new LanguageUtils.Language();
            let result:string;
            if(type == Enum.BetPosType.IN){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.OUT){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.HIT){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.BIG){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.SMALL){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.ODD){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.EVEN){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.RED){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.BLACK){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.LOUT){
                result = language.GetLanguage("leftOut");
            }
            if(type == Enum.BetPosType.ROUT){
                result = language.GetLanguage("rightOut");
            }
            if(type == Enum.BetPosType.LHIT){
                result = language.GetLanguage("leftHit");
            }
            if(type == Enum.BetPosType.RHIT){
                result = language.GetLanguage("rightHit");
            }
            return result;
        }
    }
}