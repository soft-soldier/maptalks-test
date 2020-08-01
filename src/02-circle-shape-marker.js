/**
 * Created by 86185 in 2020/5/24 on 14:24
 */
let circle = new maptalks.Circle([105.08852356963802, 36.04231948670001], 250, {
    symbol: {
        lineColor: "#fff",
        lineWidth: 2,
        polygonFill: "rgb(135,196,240)",
        polygonOpacity: 0.8
    }
});

map.getLayer(MapLayerConst.MAP_MARKER_LAYER).addGeometry(circle).addTo(map);

