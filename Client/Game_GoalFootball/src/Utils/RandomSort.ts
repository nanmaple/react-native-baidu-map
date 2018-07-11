namespace Utils{
    export class RandomSort{
         /**
         * 随机排序
         */
        static GetRandData(data:any):any{
            let randData:any = data;
            let t;
            let num  = randData.length;
            for (let i:number = 0;i < num; i++){
                let rand = Math.floor(Math.random() * (num--));
                t = randData[rand];
                randData[rand] = randData[i];
                randData[i] = t;
            }
            return randData;    
        }
    }
}