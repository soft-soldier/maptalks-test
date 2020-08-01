/**
 * Created by 86185 in 2020/8/1 on 15:29
 */
let options = {
    "opacity": 0.3
}

let layer = new maptalks.WindyLayer(MapLayerConst.MAP_WINDY_LAYER, windyData, options).addTo(map);