/**
 * Created by 86185 in 2020/8/1 on 12:32
 */
function getGeoCoord(name) {
    let city = name.split("_").pop();
    let coord;
    coord = geoCoord[city];
    return coord;
}

let lines = srcMigrationData.allLine.map(function (line) {
    return {
        "coordinates": [
            map.getCenter().toArray(),
            getGeoCoord(line.end)
        ]
    };
});

// destination markers
let destinations = lines.map(function (ln) {
    return new maptalks.Marker(ln["coordinates"][1], {
        "symbol": {
            "markerType": "ellipse",
            "markerFill": "rgba(135, 196, 240, 0.4)",
            "markerLineWidth": 0,
            "markerWidth": 4,
            "markerHeight": 4
        }
    })
})

map.getLayer(MapLayerConst.MAP_OD_LINE_CURVES_MARKER_LAYER).addGeometry(destinations).addTo(map);

//curves
let lineLayer = new maptalks.ODLineLayer(MapLayerConst.MAP_OD_LINE_BASE_LAYER, lines, {
    "animation": false,
    "curveness": 0.5,
    "random": true,
    "symbol": {
        "lineWidth": 2
    }
}).addTo(map);
