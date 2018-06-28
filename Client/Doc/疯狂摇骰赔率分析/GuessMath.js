
var betNum;
var resultType;
var sum;
var betSum=0;
var score=0;
var scoreSum=0;
var betTypeIndex;
var betType = ["little", "jaguar", "big"];
var odd = { "little": 1.9, "jaguar": 35, "big": 1.9 };
var betRe;  //随机投注类型
function main(){
    for(var i=0;i<1000000;i++){
        //随机骰子结果
        resultType=guessResult();
        //随机投注类型
        betTypeIndex=Math.floor(Math.random()*3);
        betRe=betType[betTypeIndex];
        //随机投注金额
        betNum=betNumRandom();
        //随机投注金额累加
        betSum+=betNum;
        if(resultType!=betRe)continue
        else{
            score=betNum*odd[resultType];
            //获得积分累加
            scoreSum+=score;
        }
    }
    var ratio=scoreSum/betSum;
    console.log("投注积分="+betSum);
    console.log("获得积分="+scoreSum);
    console.log("赔率="+ratio);
}
function guessResult() {
    var one, two, three;
    one = Math.floor(Math.random() * 6 + 1);
    two = Math.floor(Math.random() * 6 + 1);
    three = Math.floor(Math.random() * 6 + 1);
    //判断投注结果
    if (one== two && one == three) {
        return "jaguar";
    }
    if (one+two+three< 11) {
        return "little";
    }
    if (one+two+three>= 11) {
        return "big";
    }
}

function betNumRandom(){
    var betRandom=Math.floor(Math.random()*20+1)*100;
    return betRandom;
}

main();
