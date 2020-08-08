/**
 * Created by 86185 in 2020/8/8 on 10:02
 */
let polygon = new maptalks.Polygon([
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.107049, 51.493568],
        [-0.131049, 51.493568],
        [-0.131049, 51.498568]
    ]
], {
    symbol: {
        "lineColor": "#34495e",
        "lineWidth": 2,
        "polygonFill": "rgb(135,196,240)",
        "polygonOpacity": 0.2,
        "markerType": "ellipse",
        "markerFill": "#1bbc9b",
        "markerLineColor": "#000",
        "markerWidth": 30,
        "markerHeight": 30,
        "markerPlacement": "point", // point, vertex, vertex-first, vertex-last, line
        "textName": "A",
        "textPlacement": "vertex",   // point, vertex, vertex-first, vertex-last, line
        "textFill": "#fff"
    }
});

map.getLayer(MapLayerConst.MAP_POLYGON_LAYER).addGeometry(polygon).addTo(map);