/**
 * Created by 86185 in 2020/8/5 on 21:33
 */
let layer = map.getLayer(MapLayerConst.MAP_MARKER_LAYER).addTo(map);

let marker0 = new maptalks.Marker([117.3745188667, 23.8839], {
    symbol: {
        "markerType": "ellipse",
        "markerFill": {
            "type": "linear",
            "places": [0, 0, 1, 1],
            "colorStops": [
                [0.00, "#fff"],
                [0.50, "#fff27e"],
                [1, "#f87e4b"]
            ]
        },
        "markerLineWidth": 0,
        "markerWidth": 100,
        "markerHeight": 100
    }
}).addTo(layer);

let marker1 = new maptalks.Marker([117.3945188667, 23.8839], {
    symbol: {
        "markerType": "ellipse",
        "markerFill": {
            "type": "radial",
            "colorStops": [
                [0.00, "rgba(216,115,149,0)"],
                [0.50, "rgba(216,115,149,1)"],
                [1.00, "rgba(216,115,149,1)"]
            ]
        },
        "markerLineWidth": 0,
        "markerWidth": 100,
        "markerHeight": 100
    }
}).addTo(layer);