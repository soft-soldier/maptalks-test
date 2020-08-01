/**
 * Created by 86185 in 2020/8/1 on 10:35
 */
let data = heatAddressPoints.map(function (p) {
    return [p[1], p[0]];
});
new maptalks.HeatLayer(MapLayerConst.MAP_HEAT_LAYER, data, {
    // "max": 10,
    // "radius": 80,
    // "blur": 30,
    // "gradient": {0.4: "blue", 0.65: "lime", 1: "red"},
    "heatValueScale": 0.7,
    "forceRenderOnRotating": true,
    "forceRenderOnMoving": true
}).addTo(map)