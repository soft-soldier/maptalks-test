/**
 * Created by 86185 in 2020/8/15 on 10:48
 */
let layer = map.getLayer(MapLayerConst.MAP_TOOL_LAYER).addGeometry(map).addTo(map);

let drawTool = new maptalks.DrawTool({
    mode: "LineString",
    "symbol": {
        "lineColor": "#1bbc9b",
        "lineWidth": 2,
        "polygonFill": "#f00",
        "polygonOpacity": 0.3
    },
    "vertexSymbol": {
        "markerType": "ellipse",
        "markerFill": "#eee608",
        "markerLineColor": "#1bbc9b",
        "markerLineWidth": 3,
        "markerWidth": 10,
        "markerHeight": 10
    },
}).addTo(map).disable();

drawTool.on("drawend", function (param) {
    console.log(param.geometry);
    layer.addGeometry(param.geometry);
});

let items = ["LineString", "Polygon", "Circle", "Ellipse", "Rectangle", "FreeHandLineString", "FreeHandPolygon"].map(function (value) {
    return {
        item: value,
        click: function () {
            drawTool.setMode(value).enable();
        }
    };
});

let toolbar = new maptalks.control.Toolbar({
    items: [
        {
            item: "Shape",
            children: items
        },
        // {
        //     item: "Disable",
        //     click: function () {
        //         drawTool.disable();
        //     }
        // },
        {
            item: "Clear",
            click: function () {
                layer.clear();
            }
        }
    ]
}).addTo(map);