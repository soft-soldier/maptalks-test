/**
 * Created by 86185 in 2020/5/23 on 18:19
 */
window.$config = {
    center: [117.3745188667, 23.8839],
    zoom: 12,
    minZoom: 1,
    maxZoom: 19,
    baseLayerOptions: {
        urlTemplate: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
        // urlTemplate: 'https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
        subdomains: ["a", "b", "c", "d"],
    },
    theme: {
        default: "grayscale(100%)",
        deepBlue: "sepia(100%) invert(90%)",
        dark: "invert(100%) sepia(100%) grayscale(5%) saturate(3) hue-rotate(155deg) brightness(0.9)"
    }
}
let map = new maptalks.Map(MapLayerConst.MAP_LAYER, {

    center: window.$config.center,

    zoom: window.$config.zoom,

    minZoom: window.$config.minZoom,

    maxZoom: window.$config.maxZoom,

    baseLayer: new maptalks.TileLayer(MapLayerConst.MAP_BASE_LAYER, Object.assign({

        cssFilter: window.$config.theme.dark

    }, window.$config.baseLayerOptions)),

    layers: [

        new maptalks.VectorLayer(MapLayerConst.MAP_MARKER_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_LINE_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_OD_LINE_CURVES_MARKER_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_ISECTS_LAYER)
    ]
});
