/**
 * Created by 86185 in 2020/8/5 on 21:49
 */
let layer = map.getLayer(MapLayerConst.MAP_LINE_LAYER).addTo(map);

let line = new maptalks.LineString(
    [map.getCenter().sub(0.01, 0), map.getCenter()],
    {
        arrowStyle: "classic", // we only have one arrow style now
        arrowPlacement: "vertex-last", //vertex-first, vertex-last, vertex-firstlast, point
        symbol: {
            "textName": "line",
            "textPlacement": "line",
            "textSize": 20,
            "textDy": -20,
            "textFill": "#fff",
            // linear gradient
            "lineColor": {
                "type": "linear",
                "colorStops": [
                    [0.00, "red"],
                    [1 / 4, "orange"],
                    [2 / 4, "green"],
                    [3 / 4, "aqua"],
                    [1.00, "white"]
                ]
            },
            "lineWidth": 10
        }
    }
).addTo(layer);

let line1 = new maptalks.LineString(
    [map.getCenter().sub(0.015, 0.005), map.getCenter().sub(0, 0.005)],
    {
        arrowStyle: "classic", // we only have one arrow style now
        arrowPlacement: "vertex-first", //vertex-first, vertex-last, vertex-firstlast, point
        symbol: {
            // radial gradient
            "lineColor": {
                "type": "radial",
                "colorStops": [
                    [0.00, "red"],
                    [1 / 3, "orange"],
                    [2 / 3, "green"],
                    [1.00, "white"]
                ]
            },
            "lineWidth": 10
        }
    }
).addTo(layer);