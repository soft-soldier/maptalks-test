/**
 * Created by 86185 in 2020/8/11 on 21:03
 */
let layer = map.getLayer(MapLayerConst.MAP_POLYGON_LAYER);

// 画图层
for (let i = 0; i < 3; i++) {
    new maptalks.Polygon([
        [-0.123049 + 0.02 * i, 51.503568],
        [-0.136049 + 0.02 * i, 51.503568],
        [-0.136049 + 0.02 * i, 51.488568],
        [-0.123049 + 0.02 * i, 51.488568]
    ], {
        "properties": {
            "count": (i + 1) * 100
        },
        "symbol": [
            {
                "polygonFill": "#747474",
                "polygonOpacity": 0.5,
                "lineColor": "#000",
                "lineWidth": 2
            },
            {
                "textName": "{count}",
                "textSize": 40,
                "textFill": "#fff"
            }
        ]
    }).addTo(layer);
}

function filter() {
    layer.filter([">=", "count", 200])
        .forEach(function (feature) {
            feature.updateSymbol([
                {
                    "polygonFill": "rgb(216,115,149)"
                }
            ]);
        });
}