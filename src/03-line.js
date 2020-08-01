/**
 * Created by 86185 in 2020/5/24 on 14:48
 */
let line = new maptalks.LineString([
    [105.08852356963802, 36.04231948670001],
    [105.08852356963802, 36.04831948670001]
], {
    symbol: {
        "lineColor": "#f00",
        "lineWidth": 3
    }
});

map.getLayer(MapLayerConst.MAP_LINE_LAYER).addGeometry(line).addTo(map);
