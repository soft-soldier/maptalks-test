/**
 * Created by 86185 in 2020/8/1 on 16:16
 */
let player = new maptalks.RoutePlayer(route,map );
let unitTime = player.getUnitTime();
player.on("playing", function (param) {
    if (player.getCurrentProperties(0) !== undefined && player.getCurrentProperties(0) !== null) {
        $("#info").text(
            "current info: " + player.getCurrentProperties(0).info
        );
    }
});

player.play();

function play() {
    player.play();
}

function pause() {
    player.pause();
}

function finish() {
    player.finish();
}

function cancel() {
    player.cancel();
}

function speed(t) {
    player.setUnitTime(unitTime * t);
}