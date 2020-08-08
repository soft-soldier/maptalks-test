/**
 * Created by 86185 in 2020/8/8 on 10:14
 */
let layer = map.getLayer(MapLayerConst.MAP_MARKER_WAVE_LAYER).addTo(map);

//composite symbol, the latter is on the top
let marker = new maptalks.Marker(
    map.getCenter(),
    {
        "symbol": [
            {
                "markerType": "ellipse",
                "markerFill": "#f00",
                "markerFillOpacity": 0.9,
                "markerWidth": 20,
                "markerHeight": 20,
                "markerLineWidth": 0
            },
            {
                "markerType": "ellipse",
                "markerFill": "#ff851b",
                "markerFillOpacity": 0.7,
                "markerWidth": 55,
                "markerHeight": 55,
                "markerLineWidth": 0
            },
            {
                "markerType": "ellipse",
                "markerFill": "#16e82a",
                "markerFillOpacity": 0.5,
                "markerWidth": 91,
                "markerHeight": 91,
                "markerLineWidth": 0
            },
            {
                "markerType": "ellipse",
                "markerFill": "#123edc",
                "markerFillOpacity": 0.3,
                "markerWidth": 130,
                "markerHeight": 130,
                "markerLineWidth": 0
            },
            {
                "markerType": "ellipse",
                "markerFill": "#8c14cd",
                "markerFillOpacity": 0.2,
                "markerWidth": 172,
                "markerHeight": 172,
                "markerLineWidth": 0
            }
        ]
    }
).addTo(layer);