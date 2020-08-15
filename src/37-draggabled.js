/**
 * Created by 86185 in 2020/8/15 on 11:16
 */
let center = map.getCenter();

let marker = new maptalks.Marker(
    center.add(-0.018, 0.007).toArray(),
    {
        "draggable": true,
        "symbol": {}
    }
);
let polyline = new maptalks.LineString([
    center.add(-0.018, 0.005).toArray(),
    center.add(0.006, 0.005).toArray()
], {
    "draggable": true,
    "symbol": {
        "lineColor": "#1bbc9b",
        "lineWidth": 5
    }
});
let polygon = new maptalks.Polygon([
    center.add(-0.018, 0.004).toArray(),
    center.add(0.006, 0.004).toArray(),
    center.add(0.006, -0.001).toArray(),
    center.add(-0.018, -0.001).toArray(),
    center.add(-0.018, 0.004).toArray()
], {
    "draggable": true,
    "symbol": {
        "lineColor": "#34495e",
        "lineWidth": 2,
        "polygonFill": "rgb(135,196,240)",
        "polygonOpacity": 0.6
    }
});

let geometries = [marker, polyline, polygon];

let layer = new maptalks.VectorLayer("vector").addGeometry(geometries).addTo(map);
