/**
 * Created by 86185 in 2020/5/23 on 18:42
 */
let m1 = new maptalks.Marker([105.08852356963802, 36.04231948670001]);

let m2 = new maptalks.Marker([105.08852356963802, 36.04831948670001]);

let m3 = new maptalks.Marker([105.08052356963802, 36.04831948670001]);

let m4 = new maptalks.Marker([105.08052356963802, 36.04231948670001]);

map.getLayer(MapLayerConst.MAP_MARKER_LAYER).addGeometry(m1, m2, m3, m4).addTo(map);
