/**
 * Created by 86185 in 2020/8/6 on 21:03
 */
let getSymbol = () => {
    return [
        {
            lineColor: "#34495e",
            lineWidth: 3
        },
        {
            markerType: "ellipse",
            markerWidth: 8,
            markerHeight: 8,
            markerFill: "#f00",
            markerPlacement: "vertex"
        }
    ];
}

let layer = map.getLayer(MapLayerConst.MAP_LINE_LAYER).addTo(map);

let center = map.getCenter();

new maptalks.Polygon([
    center.add(-0.0302, 0.0081),
    center.add(-0.0369, 0.0069),
    center.add(-0.0469, 0.0032),
    center.add(-0.0414, -0.003),
    center.add(-0.0378, -0.008),
    center.add(-0.0320, -0.009)
], {
    smoothness: 0.5,
    "symbol": getSymbol()
}).addTo(layer);

new maptalks.LineString([
    center.add(-0.0202, 0.0081),
    center.add(-0.0269, 0.0069),
    center.add(-0.0369, 0.0032),
    center.add(-0.0314, -0.003),
    center.add(-0.0278, -0.008),
    center.add(-0.0220, -0.009)
], {
    smoothness: 0.5,
    "symbol": getSymbol()
}).translate(0.04, 0).addTo(layer);