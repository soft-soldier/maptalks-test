/**
 * Created by 86185 in 2020/8/15 on 15:48
 */
let line = new maptalks.LineString([
    [-0.131049, 51.498568],
    [-0.107049, 51.498568],
    [-0.107049, 51.491568]
], {
    visible: false,
    arrowStyle: "classic",
    arrowPlacement: "vertex-last",
    symbol: {
        "lineColor": "#1bbc9b",
        "lineWidth": 6
    }
});

map.getLayer(MapLayerConst.MAP_LINE_ANIMATION_LAYER).addGeometry(line).addTo(map);

replay();

function replay() {
    line.hide();
    //line"s animateShow
    line.animateShow({
        duration: 1500,
        easing: "out"
    }, function (frame) {
        if (frame.state.playState === "finished") {
            console.log("finished");
        }
    });
}