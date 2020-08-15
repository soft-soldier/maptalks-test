/**
 * Created by 86185 in 2020/8/15 on 15:59
 */
let polygon = new maptalks.Polygon([
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.107049, 51.493568],
        [-0.131049, 51.493568],
        [-0.131049, 51.498568]
    ]
], {
    visible: false,
    symbol: {
        "lineColor": "#34495e",
        "lineWidth": 2,
        "polygonFill": "rgb(135,196,240)",
        "polygonOpacity": 0.6
    }
});

map.getLayer(MapLayerConst.MAP_POLYGON_ANIMATION_LAYER).addGeometry(polygon).addTo(map);

replay();

function replay() {
    polygon.hide();
    //polygon"s animateShow
    polygon.animateShow({
        duration: 1500,
        easing: "out"
    }, function (frame) {
        if (frame.state.playState === "finished") {
            console.log("finished");
        }
    });
}