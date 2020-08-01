/**
 * Created by 86185 in 2020/8/1 on 12:14
 */
// lines is the data from odline-migration.js
let lineLayer = new maptalks.ODLineLayer(MapLayerConst.MAP_OD_LINE_BASE_LAYER, lines, {
    "animation": false,
    "curveness": 0,
    "globalCompositeOperation": "lighter",
    "symbol": {
        "lineWidth": 2,
        "lineColor": "rgba(2, 166, 253, 0.03)",
    }
}).addTo(map);

// animated OD Lines
let layer = new maptalks.ODLineLayer(MapLayerConst.MAP_OD_LINE_ANIMATED_LAYER, lines, {
    "animationDuration": 30000,
    "animation": true,
    "curveness": 0,
    "random": true,
    "trail": 10,
    "symbol": {
        "lineColor": "#fff"
    }
}).addTo(map);