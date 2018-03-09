


window.WGVLiveManager = {
    Data: {
        HomeName: "主队",
        AwayName: "客队",
        LeagueName: "联赛",
        MatchDate: "",
        LivePhase: -1,
        LiveTime: 0,//分
        HomeRedCard: null,
        AwayRedCard: null,
        HomeYellowCard: null,
        AwayYellowCard: null,
        HomeCorner: null,
        AwayCorner: null,
        HomePent: null,
        AwayPent: null,
        HomeScore: null,
        AwayScore: null,
        HomeColor: "#ff0000",
        AwayColor: "#0000ff"
    },
    Init: function (ele, leagueName, homeName, awayName, matchDate, phase, livetime, homescore, awayscore, homeCard, awayCard) {
        if (!jQuery) {
            console.error("need jQuery js lib");
            return;
        }
        var e = jQuery(ele);
        if (e.length < 1) {
            console.error("need specific a dom element");
        }
        //e.append(' <div class="anim_area"> <div class="field"> <div class="fieldmark"></div> </div> <div class="attackfield"></div> <div class="ballpos"> <div class="soccer"> <div class="soccerimg"></div> <div class="soccerarrow"></div> <div class="soccermsg"> <div class="title"></div> <div class="content"></div> </div> </div> <div class="outball"></div> </div> <div class="info"> <div class="infopanel"> <div class="icon"></div> <div class="text"> <div class="title"></div> <div class="content"></div> </div> </div> </div> <div class="freekick"> <div class="freekickline"> <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"> <polygon points="105,36 78,67 300,20" style="fill: rgba(220, 220, 220, 0.6); stroke: #eee; stroke-width: 1" /> <line x1="92" y1="50.5" x2="300" y2="20" style="stroke:#eee;stroke-width:1" /> </svg> </div> </div> <div class="stat"> <div class="statpanel"> <div class="header"> <div class="league"></div> <div class="time"></div> </div> <div class="teams"> <div class="homearea"> <div class="teamicon homebgcolor"></div> <div class="teamname homecolor homename"></div> </div> <div class="vsarea"> <div class="livetime"></div> <div class="vs">VS</div> </div> <div class="awayarea"> <div class="teamicon awaybgcolor"></div> <div class="teamname awaycolor awayname"></div> </div> </div> <div class="techstat"> <table class="techstat_table"> <thead> <tr class="headrow"> <th class=" name"></th> <th class="techdatatitle yellowcard"><i></i></th> <th class="techdatatitle redcard"><i></i></th> <th class="techdatatitle corner"><i></i></th> <th class="techdatatitle pent"><i></i></th> <th class="techdatatitle goal"><i></i></th> </tr> </thead> <tbody> <tr class="homerow homearea"> <td class="name"><i class="steamicon homebgcolor"></i><span class="homename homecolor">主队</span></td> <td class="techdata yellowcard"></td> <td class="techdata redcard"></td> <td class="techdata corner"></td> <td class="techdata pent"></td> <td class="techdata score"></td> </tr> <tr class="awayrow awayarea"> <td class="name"><i class="steamicon awaybgcolor"></i><span class="awayname awaycolor">客队</span></td> <td class="techdata yellowcard"></td> <td class="techdata redcard"></td> <td class="techdata corner"></td> <td class="techdata pent"></td> <td class="techdata score"></td> </tr> </tbody> </table> </div> </div> </div> <div class="scoreboard"> <div class="teamnames"> <div class="homename homecolor">主队</div> <div class="homecard"><i></i></div> <div class="awaycard"><i></i></div> <div class="awayname awaycolor">客队</div> </div> <div class="livetime"> <div class="minutes"></div> <div class="semo">:</div> <div class="seconds"></div> </div> <div class="teamscore"> <div class="homescore"></div> <div class="vsscore">VS</div> <div class="awayscore"></div> </div> </div> </div>');
        e.addClass("vliveins");
        WGVLiveManager.Data.LeagueName = leagueName;
        WGVLiveManager.Data.HomeName = homeName;
        WGVLiveManager.Data.AwayName = awayName;
        WGVLiveManager.Data.MatchDate = matchDate;
        WGVLiveManager.Data.LivePhase = phase || -1;
        WGVLiveManager.Data.LiveTime = livetime || 0;
        WGVLiveManager.Data.HomeScore = homescore;
        WGVLiveManager.Data.AwayScore = awayscore;
        WGVLiveManager.Data.HomeRedCard = homeCard;
        WGVLiveManager.Data.AwayRedCard = awayCard;
        RefreshScoreBoard();
        RefreshTechPanel();
    }
};







//进攻 team: home/away level: 1/2/3
var attackintraval;
function Attack(team, x, y) {
    clearInterval(attackintraval);
    var isHome = team == "home" || team == true;
    $(".attackfield").addClass("showattack");
    $(".attackfield > .attackmsgtxt").html(GetTeamName(isHome) + " 进攻");
    attackintraval = setTimeout(function () {
        HideAttack();
    }, 4000);
    var pos = posTrans(x, y).X;
    if (isHome) {
        $(".attackfield").removeClass("away").addClass("home");
        $(".attackfield > .attackshadow").css("width", (pos - 60) + "px");
    } else {
        $(".attackfield").removeClass("home").addClass("away");
        $(".attackfield > .attackshadow").css("width", (670 - pos) + "px");
    }

    BallPos(x, y);
}
function HideAttack() {
    $(".attackfield").removeClass("showattack");
}

//球位置 x:0-1 y:0-1/ title>消息标题/ content>消息内容/ team>true=home false=away other=none hideOutball 隐藏当前界外球标识
var animinterval;
function BallPos(x, y, title, content, team, hideOutball, keepGoalKick, keepOntarget, keepKickOff, keepFreekick, noanima) {
    clearInterval(animinterval);
    $(".soccer").removeClass("noanima");
    //if (hideOutball) {
    //    HideOutball();
    //}
    //if (!keepGoalKick) {
    //    HideGoalKick();
    //}
    //if (!keepOntarget) {
    //    HideTarget();
    //}
    //if (!keepKickOff) {
    //    HideKickOff();
    //}
    //if (!keepFreekick) {
    //    HideFreekick();
    //}

    var newpos = posTrans(x, y);
    if (!noanima) {
        //正常移动动画
        $(".soccer").addClass("moving");
        animinterval = setTimeout(function () {
            $(".soccer").removeClass("moving");
        }, 500);
    } else {
        //无动画
        $(".soccer").addClass("noanima");
    }

    $(".soccer").attr("style", "left:" + newpos.X + "px;" + "top:" + newpos.Y + "px");
    //if (title || content) {
    //    $(".soccermsg .title").html(title || " ");
    //    $(".soccermsg .content").html(content || " ");
    //    $(".soccer").addClass("showmsg");
    //} else {
    //    $(".soccer").removeClass("showmsg");
    //}
    //球所属队伍
    //if (team === true || team == "home") {
    //    $(".soccer").removeClass("away").addClass("home");
    //} else if (team === false || team == "away") {
    //    $(".soccer").removeClass("home").addClass("away");
    //} else {
    //    $(".soccer").removeClass("away").removeClass("home");
    //}
    $(".ballpos").addClass("showsoccer");
    RefreshTeamColor();
}

function HideSoccer() {
    $(".ballpos").removeClass("showsoccer");
}
function HideOutball() {
    $(".ballpos").removeClass("showoutball");
}

//边线球
function OutLineBall(x, y, x2, y2, team, livetime) {
    var isHome = team == "home" || team === true;
    var isCorner = (x + y == 0 || x + y == 1 || x + y == 2);
    ShowInfo(null, isCorner ? "角球" : "边线球", GetTeamName(isHome), 2000, livetime);
    BallPos(x, y, 0, 0, team, true, 0, 0, 0, 0, true);
    setTimeout(function () {
        BallPos(x2, y2, 0, 0, team, true, 0, 0, 0, 0);
    }, 500);

}


////界外球 角球 x y>坐标比例 / team>发球方home=true/away=false
//function OutBall(x, y, team) {
//    var isHome = team == "home" || team === true;
//    if (y == 0 || y == 1) {
//        var ontop = y == 0;
//        var pos = posTrans(x, y);
//        $(".outball").attr("style", "left:" + pos.X + "px;top:" + pos.Y + "px");

//        if (isHome) {
//            $(".outball").removeClass("away").addClass("home");
//        } else {
//            $(".outball").removeClass("home").addClass("away");
//        }
//        if (y == 0) {
//            $(".outball").removeClass("bottom").addClass("top");
//        } else {
//            $(".outball").removeClass("top").addClass("bottom");
//        }
//        //角球
//        var isCorner = false;
//        if (x + y == 0 || x + y == 1 || x + y == 2) {
//            $(".outball").addClass("corner");
//            isCorner = true;
//        } else {
//            $(".outball").removeClass("corner");
//        }
//        if (x == 0) {
//            //左边
//            $(".outball").removeClass("rightcorner").addClass("leftcorner");
//        }
//        if (x == 1) {
//            //右边
//            $(".outball").removeClass("leftcorner").addClass("rightcorner");
//        }

//        //显示
//        $(".ballpos").addClass("showoutball");
//        BallPos(x, y, isCorner ? "角球" : "界外球", GetTeamName(isHome), isHome);
//    } else {
//        console.error("界外球或角球坐标需在边线上:", x, y);
//    }
//}


//球门球
//function GoalKick(team) {
//    var isHome = team == "home" || team == true;
//    if (isHome) {
//        $(".outball").removeClass("away").addClass("home");
//    } else {
//        $(".outball").removeClass("home").addClass("away");
//    }
//    $(".outball").attr("style", "");
//    BallPos(isHome ? 0.05 : 0.95, 0.5, "球门球", GetTeamName(isHome), isHome, true, true);
//    $(".ballpos").addClass("showgoalkick");
//}
//function HideGoalKick() {
//    $(".ballpos").removeClass("showgoalkick");
//}



//红卡
function Card(isRed, isHome) {
    ShowInfo(isRed ? "redcard" : "yellowcard", isRed ? "得红牌" : "得黄牌", GetTeamName(isHome), 2000);
    AddMark(isHome, isRed ? "redcard" : "yellowcard", WGVLiveManager.Data.LiveTime);
}


////点球
//function Pent(team) {
//    var isHome = team == "home" || team == true;
//    BallPos(isHome ? 0.87 : 0.13, 0.5, "点球", GetTeamName(isHome) + "得点球", isHome, true, false);
//}

//射正射偏 onTarget>true:射正 false:射偏
var targetinterval;
//function Target2(team, onTarger, isPent) {
//    clearInterval(targetinterval);
//    var isHome = team == "home" || team == true;
//    HideSoccer();
//    HideOutball();
//    HideKickOff();
//    HideGoalKick();
//    HideFreekick();
//    $(".field").addClass("gateview");
//    $(".info").addClass("gateview");
//    $(".field > .fieldmark").attr("class", "fieldmark " + (onTarger ? "ontgt" : "offtgt"));
//    ShowInfo(onTarger ? "ontgt" : "offtgt", (isPent ? "点球" : "") + (onTarger ? "射正" : "射偏"), GetTeamName(isHome), 5000, true);
//    targetinterval = setTimeout(function () {
//        HideGoal();
//    }, 5000);
//}
//function HideTarget() {
//    $(".field").removeClass("gateview");
//    $(".info").removeClass("gateview");
//}

//进球
function Goal(team) {
    AddMark(team, "goal", WGVLiveManager.Data.LiveTime);
    clearInterval(targetinterval);
    var isHome = team == "home" || team == true;
    HideSoccer();
    //HideOutball();
    //HideKickOff();
    //HideGoalKick();
    //HideFreekick();

    if (isHome) {
        $(".vliveins .ballpos").removeClass("awaygoal").addClass("homegoal");
    } else {
        $(".vliveins .ballpos").removeClass("homegoal").addClass("awaygoal");
    }
    //$(".info").addClass("gateview");

    ShowInfo("goal", "进球", GetTeamName(isHome), 5000);
    targetinterval = setTimeout(function () {
        HideGoal();
    }, 5000);
}

function HideGoal() {
    $(".vliveins .ballpos").removeClass("homegoal").removeClass("awaygoal");
}

//换人
function Substitution(team) {
    AddMark(team, "exchange", WGVLiveManager.Data.LiveTime);
    var isHome = team == "home" || team == true;
    ShowInfo("exchange", "更换球员", GetTeamName(isHome), 2000);
}
//开球
function KickOff(team) {
    var isHome = team == "home" || team == true;
    $(".kickoff .banner").html(GetTeamName(isHome) + " 开球");
    $(".kickoff").show();
    setTimeout(function () {
        HideKickOff();
    }, 2000);

}
function HideKickOff() {
    $(".kickoff").hide();
}
//半场
function HalfTime() {
    ShowInfo("", "半场结束");
}
//下半场开始
function SecondHalf() {
    ShowInfo("", "下半场开始", "", 1000);
}
//全场结束
function FullTime() {
    ShowInfo("", "全场结束", "", 5000);
}
//受伤
function Injury(team) {
    var isHome = team == "home" || team == true;
    ShowInfo("injury", "球员受伤", GetTeamName(isHome), 5000);
}
//伤停补时
function InjTime(time) {
    $(".info .extminute").html(time == null ? "??" : padleft(time + "", 2, '0'));
    ShowInfo("exten", "伤停补时", "+" + (time || "?") + "分钟", 5000);
}
//越位
function Offside(team) {
    var isHome = team == "home" || team == true;
    ShowInfo("offside", "越位", GetTeamName(isHome), 5000);
}
//信息
//icon > redcard yellowcard yellowcard2 safe danger kickoff goal goalcancel hurt exchange injury exten
//time > 显示时长 自动关闭消息 0为无限长 手动关闭
var infointerval;
function ShowInfo(icon, title, content, time, livetime) {
    clearInterval(infointerval);
    if (time && time > 0) {
        infointerval = setTimeout(function () {
            HideInfo();
        }, time);
    }
    $(".infopanel>.icon").attr("class", "icon " + (icon || "noicon"));
    //$(".infopanel").attr("class", "infopanel " + (icon || "noicon"));
    $(".infopanel .title").html(title || " ");
    $(".infopanel .content").html(content || " ");
    $(".infopanel .time").html((livetime || WGVLiveManager.Data.LiveTime) + "'");
    $(".info").addClass("showinfo");

}
function HideInfo() {
    $(".info").removeClass("showinfo");
    $(".info .icon").attr("class", "icon");
}


function SetScore(home, away) {
    if (home != WGVLiveManager.Data.HomeScore) {
        WGVLiveManager.Data.HomeScore = home;
        $(".scoreboard .teamscore .homescore").addClass("flipover");
        $(".scoreboard .teamscore .homescore").html(home);
    }
    if (away != WGVLiveManager.Data.AwayScore) {
        WGVLiveManager.Data.AwayScore = away;
        $(".scoreboard .teamscore .awayscore").addClass("flipover");
        $(".scoreboard .teamscore .awayscore").html(away);
    }
    setTimeout(function () {
        $(".flipover").removeClass("flipover");
    }, 1000);
}

//任意球
function FreeKick(x, y, team) {
    var isHome = team == "home" || team == true;
    //left-top 103.5,36 left-bot 77.2,64
    //right-top 435.7 36 right-bot 461.5 64
    //left-cent 90,50.5 right-cent 449,50.5
    var abs = posTrans(x, y);
    var left = "105,36 78,67 ";
    var right = "438,36 463,64 ";
    var rightp = { X: 449, Y: 50.5 };
    var leftp = { X: 92, Y: 50.5 };
    $(".freekickline polygon").attr("points", isHome ? (right + abs.X + "," + abs.Y) : (left + abs.X + "," + abs.Y));
    $(".freekickline line").attr("x1", isHome ? rightp.X : leftp.X).attr("y1", isHome ? rightp.Y : leftp.Y).attr("x2", abs.X).attr("y2", abs.Y);
    $(".freekick").addClass("showfreekick");
    BallPos(x, y, "任意球", GetTeamName(isHome), isHome, true, false, false, false, true);

}

var marked = {};
function AddMark(team, mark, time) {
    var pos = TimePos(time);
    var posarea = parseInt(pos / 13);
    while (marked[posarea]) {
        pos += 13;
        posarea = parseInt(pos / 13);
    }
    marked[posarea] = true;
    var isHome = team == "home" || team == true;
    $(".meters ." + (isHome ? "homemeter" : "awaymeter")).append("<i title=\"" + time + "'\" style=\"left:" + (pos - 5) + "px\" class=\"" + mark + "\"></i>");
}

function TimePos(minutes) {
    if (minutes <= 0) {
        return 6;
    }
    if (minutes <= 45) {
        return minutes * 4 + 6;
    }
    if (minutes <= 90) {
        return minutes * 4 + 24;
    }
    if (minutes <= 100) {
        return 401 + (minutes - 90) * 4;
    }
    return 445;
}

function HideFreekick() {
    $(".freekick").removeClass("showfreekick");
}

//team>home=true away=false | tech>yellowcard redcard corner goal pent
function SetTechStatData(team, tech, data) {
    team = (team == true || team == "home") ? "home" : "away";
    $(".statpanel tr." + team + "row td." + tech).html(data);
    var name = team + tech;
    for (var key in WGVLiveManager.Data) {
        if (WGVLiveManager.Data.hasOwnProperty(key) && key.toLowerCase() == name) {
            WGVLiveManager.Data[key] = data;
            break;
        }
    }

}

//统计
function SwitchTechStatShow() {
    RefreshTechPanel();
    $(".stat").toggleClass("showstat");
}

function GetTeamName(isHome) {
    return isHome ? (WGVLiveManager.Data.HomeName || "[主队]") : (WGVLiveManager.Data.AwayName || "[客队]");
}


//刷新技术统计
function RefreshTechPanel() {
    $(".statpanel .header .league").html(WGVLiveManager.Data.LeagueName || "[联赛]");
    $(".statpanel .header .time").html(WGVLiveManager.Data.MatchDate || " ");
    $(".statpanel .homename").html(GetTeamName(true));
    $(".statpanel .awayname").html(GetTeamName(false));
    $(".statpanel .vsarea .livetime").html(GetLiveTimeStr());
    var teams = ["Home", "Away"];
    var techs = ["Corner", "YellowCard", "RedCard", "Score", "Pent"];
    for (var i in teams) {
        if (teams.hasOwnProperty(i)) {
            var team = teams[i];
            for (var j in techs) {
                if (techs.hasOwnProperty(j)) {
                    var tech = techs[j];
                    var data = WGVLiveManager.Data[team + tech];
                    data = data == null ? "0" : data;
                    var q = "." + team.toLowerCase() + "row .techdata." + tech.toLowerCase();
                    $(".statpanel " + q).html(data);
                }
            }
        }
    }
}

function SetMatchTime(minutes) {
    WGVLiveManager.Data.LiveTime = minutes;
    RefreshScoreBoard(0);
}

//刷新计分板
function RefreshScoreBoard(seconds) {
    $(".scoreboard .teamnames .homename").html(GetTeamName(true));
    $(".scoreboard .teamnames .awayname").html(GetTeamName(false));
    $(".scoreboard .livetime .minutes").html(padleft(WGVLiveManager.Data.LiveTime, 2, "0"));
    StartSecondsTimer(seconds);
    $(".scoreboard .teamscore .homescore").html(WGVLiveManager.Data.HomeScore || 0);
    $(".scoreboard .teamscore .awayscore").html(WGVLiveManager.Data.AwayScore || 0);
    //var homecards = "";
    //var awaycards = "";
    //for (var i = 0; i < WGVLiveManager.Data.HomeRedCard; i++) {
    //    homecards += '<i></i>';
    //}
    //for (i = 0; i < WGVLiveManager.Data.AwayRedCard; i++) {
    //    awaycards += '<i></i>';
    //}
    //$(".scoreboard .teamnames .homecard").html(homecards);
    //$(".scoreboard .teamnames .awaycard").html(awaycards);

}
var secondsInterval;
var currentSeconds = 0;
function StartSecondsTimer(startSeconds) {
    if (startSeconds == null && secondsInterval != null) {
        //正常计时中 返回
        return;
    }
    //没有计时或重新指定秒数计时
    clearInterval(secondsInterval);
    if (startSeconds != null) {
        $(".scoreboard .livetime .seconds").html(padleft(startSeconds, 2, "0"));
        currentSeconds = startSeconds;
    }
    secondsInterval = setInterval(function () {
        currentSeconds = currentSeconds + 1;
        if (currentSeconds >= 60) {
            //clearInterval(secondsInterval);
            WGVLiveManager.Data.LiveTime += 1;
            currentSeconds = 0;
            RefreshScoreBoard();
            //return;
        }
        $(".scoreboard .livetime .seconds").html(padleft(currentSeconds, 2, "0"));
    }, 1000);
}

//team>home=true away=false color>#xxxxxx 六位十六进制颜色
function SetTeamColor(team, color) {
    if (color.length != 7 || color[0] != "#") {
        console.error("wrong color value:", color, ",expect #XXXXXX");
    }
    color = color.toUpperCase();
    var isHome = team == "home" || team == true;
    if (isHome) {
        WGVLiveManager.Data.HomeColor = color;
    } else {
        WGVLiveManager.Data.AwayColor = color;
    }
    if (isHome) {
        $(".anim_area > .ballpos > .soccer.home > .soccerarrow").css("border-top-color", color);
        $(".anim_area > .ballpos > .soccer.home > .soccerimg").css("background-color", color);
        $(".anim_area > .ballpos > .soccer.home > .soccermsg").css("background-color", color + "CC");
        $(".anim_area .homebgcolor").css("background-color", color);
        $(".anim_area .homecolor").css("color", color);
    } else {
        $(".anim_area > .ballpos > .soccer.away > .soccerarrow").css("border-top-color", color);
        $(".anim_area > .ballpos > .soccer.away > .soccerimg").css("background-color", color);
        $(".anim_area > .ballpos > .soccer.away > .soccermsg").css("background-color", color + "CC");
        $(".anim_area .awaybgcolor").css("background-color", color);
        $(".anim_area .awaycolor").css("color", color);
    }

}


function RefreshTeamColor() {
    var homeColor = WGVLiveManager.Data.HomeColor;
    var awayColor = WGVLiveManager.Data.AwayColor;


    //$(".anim_area > .ballpos > .soccer.home > .soccerarrow").css("border-top-color", homeColor);
    //$(".anim_area > .ballpos > .soccer.home > .soccerimg").css("background-color", homeColor);
    //$(".anim_area > .ballpos > .soccer.home > .soccermsg").css("background-color", homeColor);
    //$(".anim_area .homebgcolor").css("background-color", homeColor);
    //$(".anim_area .homecolor").css("color", homeColor);

    //$(".anim_area > .ballpos > .soccer.away > .soccerarrow").css("border-top-color", awayColor);
    //$(".anim_area > .ballpos > .soccer.away > .soccerimg").css("background-color", awayColor);
    //$(".anim_area > .ballpos > .soccer.away > .soccermsg").css("background-color", awayColor);
    //$(".anim_area .awaybgcolor").css("background-color", awayColor);
    //$(".anim_area .awaycolor").css("color", awayColor);


}


//===========helper========

function GetLiveTimeStr() {
    switch (+WGVLiveManager.Data.LivePhase) {
        case -1:
            return "即将开始";
        default:
            return WGVLiveManager.Data.LivePhase + "H " + WGVLiveManager.Data.LiveTime + "'";
    }
}

function R(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//位置变换 球场比例到界面坐标 x:0-1 y:0-1
function posTrans(x, y) {
    return {
        X: 94 * (1 - y) + (450 + 189 * y) * x + 52,
        Y: 127.5 * y + 14
    };
}

//填充字符串左边
function padleft(str, length, padstr) {
    str = "" + str;
    padstr = "" + padstr;
    if (str.length < length) {
        var rstr = "";
        for (var i = 0; i < length - str.length; i++) {
            rstr += padstr;
        }
        return rstr + str;
    } else {
        return str;
    }
}



