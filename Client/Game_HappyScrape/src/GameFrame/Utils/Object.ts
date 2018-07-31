namespace Utils {
    export class ObjectEx {
        static assign(...objs: any[]) {
            var length = objs.length;
            let obj = objs[0];
            if(!obj){
                return {};
            }
            for (var index = 1; index < length; index++) {
                var item = objs[index];
                if(!item){
                    continue;
                }
                for (var key in item) {
                    if (item.hasOwnProperty(key)) {
                        obj[key] = item[key];
                    }
                }
            }
            return obj;
        }
    }
}