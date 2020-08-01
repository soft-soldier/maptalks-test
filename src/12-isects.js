/**
 * Created by 86185 in 2020/8/1 on 15:41
 */
let layer = map.getLayer(MapLayerConst.MAP_ISECTS_LAYER);

//find intersections of polygon
let polygon = new maptalks.Polygon([
    [-10, 0],
    [10, 0],
    [10, 10],
    [1, 10],
    [1, -1],
    [-1, -1],
    [-1, 10],
    [-10, 1]
]).addTo(layer);

let sects = polygon.isects();

//sects[0] is the ring index of the polygon
//sects[1] is the intersections of the ring
sects[0][1].forEach(function (c) {
    new maptalks.Marker(c, {
        "symbol": {
            "markerType": "ellipse",
            "markerFill": "#f00",
            "markerWidth": 10,
            "markerHeight": 10
        }
    }).addTo(layer);
});

//find intersections of MultiPolygon
let multiPolygon = new maptalks.MultiPolygon([
    [
        [0, 20],
        [20, 20],
        [20, 30],
        [11, 30],
        [11, 11],
        [9, 11],
        [9, 30],
        [0, 21]
    ],
    [
        [-20, 20],
        [0, 20],
        [0, 30],
        [-9, 30],
        [-9, 11],
        [-11, 11],
        [-11, 30],
        [-20, 21]
    ]
], {
    symbol: {
        "polygonFill": "#00f"
    }
}).addTo(layer);

let mSects = multiPolygon.isects();
mSects.forEach(function (ms) {
    //ms[0] is the index of the child polygon
    //ms[1] is child polygon"s intersections
    //ms[1][0][0] is child polygon"s ring index
    //ms[1][0][1] is child polygon"s ring"s intersections
    ms[1][0][1].forEach(function (c) {
        new maptalks.Marker(c, {
            "symbol": {
                "markerType": "ellipse",
                "markerFill": "#f00",
                "markerWidth": 10,
                "markerHeight": 10
            }
        }).addTo(layer);
    });
});