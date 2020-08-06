/**
 * Created by 86185 in 2020/8/6 on 20:43
 */
let layer = map.getLayer(MapLayerConst.MAP_LINE_LAYER).addTo(map);

let line = new maptalks.LineString(
    [
        [4.460010082031204, 50.41204897711654],
        [3.7129397695312036, 51.05869036408862],
        [3.2295413320312036, 51.20347195727524],
        [1.0872073476562036, 51.27225609350862],
        [-0.15424773046879636, 51.5053534272480]
    ],
    {
        symbol: {
            "lineColor": "#1bbc9b",
            "lineWidth": 3,
            "lineDasharray": [10, 10],
            "markerFile": relative2path("plane.png"),
            "markerPlacement": "vertex", //vertex, point, vertex-first, vertex-last, center
            "markerVerticalAlignment": "middle",
            "markerWidth": 30,
            "markerHeight": 30
        }
    }
).addTo(layer);