/**
 * Created by 86185 in 2020/8/8 on 10:28
 */
let marker = new maptalks.ui.UIMarker(map.getCenter(), {
    "draggable"     : true,
    "single"        : false,
    "content"       : "<div class='img-marker'></div>"
}).addTo(map).show();