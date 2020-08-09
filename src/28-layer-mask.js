/**
 * Created by 86185 in 2020/8/9 on 11:20
 */
let layer = map.getLayer(MapLayerConst.MAP_MASK_LAYER).addGeometry(map).addTo(map);

map.on("mousemove", function (e) {
    if (!layer.getMask()) {
        layer.setMask(new maptalks.Marker(e.coordinate, {
            "symbol": {
                "markerType": "ellipse",
                "markerWidth": 250,
                "markerHeight": 250,
            }
        }));
    } else {
        layer.getMask().setCoordinates(e.coordinate);
    }
});

// 随机生成100个marker
let extent = map.getExtent(),
    min = extent.getMin(),
    w = extent.getWidth(),
    h = extent.getHeight(),
    markers = [];
for (let i = 0; i < 100; i++) {
    markers.push(new maptalks.Marker([min.x + Math.random() * w, min.y + Math.random() * h]));
}

layer.addGeometry(markers);