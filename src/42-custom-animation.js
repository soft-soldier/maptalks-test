/**
 * Created by 86185 in 2020/8/15 on 16:04
 */
let layer = map.getLayer(MapLayerConst.MAP_CUSTOM_ANIMATION_LAYER).addTo(map);

let marker = new maptalks.Marker([-0.113049, 51.498568], {
    "symbol": {
        "markerType": "ellipse",
        "markerWidth": 50,
        "markerHeight": 50,
        "markerFill": "rgb(216,115,149)",
        "markerFillOpacity": 0.8,
        "markerLineColor": "#fff",
        "markerLineWidth": 3
    }
}).addTo(layer);

let targetStyles = {
    "symbol": {
        "markerWidth": 200,
        "markerHeight": 200
    }
};

// animate by maptalks.animation.Animation
let player = maptalks.animation.Animation.animate(
    targetStyles,
    {
        duration: 1000,
        easing: "out"
    },
    // callback of each frame
    function step(frame) {
        if (frame.state.playState === "running") {
            marker.updateSymbol(frame.styles.symbol);
        }
    }
);

setTimeout(function () {
    player.play();
}, 600);
