WGVLiveManager.Init($("div.anim_area"), "联赛1326", "主队125", "客队655", "2017/12/25 12:30:00", 1, 0, 0, 0, 0, 0);

//================test==========
function demo() {
    //VLiveManager.Init("联赛xxxx", "主队xxxx", "客队xxxx", "2099/99/99 55:55:00", 1, 26, 1, 6);
    window.demointerval = setInterval(function () {

        Attack(R(0, 1) == 0 ? "home" : "away", Math.random(), 0.5);
        //R(0, 10) <= 6 ? BallPos(R(0, 10) / 10, R(0, 10) / 10, "球", "在这儿", R(0, 1) == 0 ? "home" : "away", true) : OutLineBall(R(0, 10) / 10, 0, R(0, 10) / 10, R(0, 1), R(0, 1) == 0 ? true : false);
    }, 2000);
}

function stopDemo() {
    clearInterval(window.demointerval);
}

function TestFree(parameters) {
    var pos = [];
    for (var i = 0; i < 11; i++) {
        for (var j = 0; j < 11; j++) {
            pos.push({
                X: i * 0.1,
                Y: j * 0.1
            });
        }
    }
    var ii = 0;
    setInterval(function () {
        if (i > pos.length - 1) {
            return;
        }
        FreeKick(pos[ii]);
        i++;
    }, 500);
}

$(function () {
    var width = $(document.body).width();
    var ratio = width / 745;
    var scale = "scale(" + ratio + ")";
    $("#area").css({
        "transform-origin": "0 0",
        "-webkit-transform": scale,
        "-moz-transform": scale,
        "-ms-transform": scale,
        "-o-transform": scale,
        "transform": scale,
    })
})