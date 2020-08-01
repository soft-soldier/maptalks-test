/**
 * Created by 86185 in 2020/8/1 on 11:14
 */
let markers = [];

// data from markercluster.points.5w.js
for (let i = 0; i < clusterAddressPoints1.length; i++) {
    let ca1 = clusterAddressPoints1[i];
    markers.push(new maptalks.Marker([ca1[1], ca1[0]]).on("mousedown", onClick));
}

let clusterLayer = new maptalks.ClusterLayer(MapLayerConst.MAP_CLUSTER_LAYER, markers, {
    "noClusterWithOneMarker": false,
    "maxClusterZoom": 18,
    //"count" is an internal letiable: marker count in the cluster.
    "symbol": {
        "markerType": "ellipse",
        "markerFill": {
            property: "count",
            type: "interval",
            stops: [[0, "rgb(135, 196, 240)"], [9, "#1bbc9b"], [99, "rgb(216, 115, 149)"]]
        },
        "markerFillOpacity": 0.7,
        "markerLineOpacity": 1,
        "markerLineWidth": 3,
        "markerLineColor": "#fff",
        "markerWidth": {property: "count", type: "interval", stops: [[0, 40], [9, 60], [99, 80]]},
        "markerHeight": {property: "count", type: "interval", stops: [[0, 40], [9, 60], [99, 80]]}
    },
    "drawClusterText": true,
    "geometryEvents": true,
    "single": true
});

map.addLayer(clusterLayer);

map.on("click", function (e) {
    console.log(clusterLayer.identify(e.coordinate));
});

function onClick(e) {
    console.log(e.target);
}