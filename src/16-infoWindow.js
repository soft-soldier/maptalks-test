/**
 * Created by 86185 in 2020/8/3 on 21:26
 */
let layer = map.getLayer(MapLayerConst.MAP_INFO_WINDOW_LAYER).addTo(map);

let marker = new maptalks.Marker(map.getCenter()).addTo(layer);

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