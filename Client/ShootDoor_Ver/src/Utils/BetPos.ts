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
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.ROUT){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.LHIT){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetPosType.RHIT){
                result = language.GetLanguage(Enum.BetPosType[type].toLowerCase());
            }
            if(type == Enum.BetMorePosType.Spade_1){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_2){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_3){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_4){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_5){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_6){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_7){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_8){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_9){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_10){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_11){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_12){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Spade_13){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_1){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_2){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_3){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_4){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_5){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_6){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_7){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_8){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_9){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_10){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_11){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_12){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Heart_13){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_1){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_2){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_3){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_4){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_5){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_6){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_7){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_8){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_9){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_10){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_11){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_12){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Club_13){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_1){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_2){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_3){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_4){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_5){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_6){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_7){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_8){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_9){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_10){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_11){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_12){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            if(type == Enum.BetMorePosType.Block_13){
                result = language.GetLanguage(Enum.BetMorePosType[type]);
            }
            return result;
        }
    }
}