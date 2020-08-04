/**
 * Created by 86185 in 2020/8/4 on 21:44
 */
let layer = map.getLayer(MapLayerConst.MAP_MARKER_LAYER).addTo(map);

let marker = new maptalks.Marker(
    map.getCenter(),
    {
        "symbol": [
            {
                "markerFile": relative2path("avatar.jpg"),
                "markerWidth": 29,
                "markerHeight": 29,
                "markerDy": -20
            },
            {
                "markerFile": relative2path("marker.png")
            }
        ]
    }
).addTo(layer);

marker.setInfoWindow({
    'custom': true,
    'content': `
        <div class="content">
            <div class="pop_time">Custom InfoWindow ${new Date().toLocaleTimeString()}</div>
            <div class="arrow"></div>
        </div>
    `
});

marker.on("mouseover", () => {
    marker.openInfoWindow();
})

marker.on("mouseout", () => {
    marker.closeInfoWindow();
})