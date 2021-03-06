namespace Utils{
    //分割时间
    export class Time{
         /**
         * 投注时间分割
         * @param time 时间
         * @param type 类型（0：年月 、1：时间）
         */
        static transform(time:string | Date,type:number):string{
            let getTime:string;
            let Time:string;
            Time =  typeof time == "string" ? time : time.toString();
            var regEx = new RegExp("\\-", "gi");
			Time = Time.replace(regEx, "/");
            let betTime:Date = new Date(Time);
            if(type == 0){
                let year:any = betTime.getFullYear();
                let month:any = betTime.getMonth()+1;
                let day:any = betTime.getDate();
                getTime = year + "/" + month + "/" + day;
            }
            if(type == 1){
                let hour:any = betTime.getHours();
                let minute:any = betTime.getMinutes();
                let second:any = betTime.getSeconds();
                hour = hour < 10 ? "0" + hour : hour;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;
                getTime = hour + ":" + minute + ":" + second;
            }
            return getTime;
        }
        
    }
}