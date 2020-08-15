/**
 * Created by 86185 in 2020/8/15 on 10:34
 */
let distanceTool = new maptalks.DistanceTool({

    "symbol": {
        "lineColor": "#c6a919",
        "lineWidth": 2
    },

    "vertexSymbol": {
        "markerType": "ellipse",
        "markerFill": "#1bbc9b",
        "markerLineColor": "#f00",
        "markerLineWidth": 3,
        "markerWidth": 10,
        "markerHeight": 10
    },

    "labelOptions": {
        "textSymbol": {
            "textFaceName": "monospace",
            "textFill": "#fff",
            "textLineSpacing": 1,
            "textHorizontalAlignment": "right",
            "textDx": 15,
            "markerLineColor": "#b4b3b3",
            "markerFill": "#000"
        },
        "boxStyle": {
            "padding": [6, 2],
            "symbol": {
                "markerType": "square",
                "markerFill": "#000",
                "markerFillOpacity": 0.9,
                "markerLineColor": "#b4b3b3"
            }
        }
    },

    "clearButtonSymbol": [
        {
            "markerType": "square",
            "markerFill": "#000",
            "markerLineColor": "#b4b3b3",
            "markerLineWidth": 2,
            "markerWidth": 15,
            "markerHeight": 15,
            "markerDx": 20
        }, {
            "markerType": "x",
            "markerWidth": 10,
            "markerHeight": 10,
            "markerLineColor": "#fff",
            "markerDx": 20
        }
    ],

    "language": "en-US"

}).addTo(map);