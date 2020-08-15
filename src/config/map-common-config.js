/**
 * Created by 86185 in 2020/5/23 on 18:19
 */
window.$config = {
    center: [-0.131049, 51.498568],
    zoom: 14,
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

        new maptalks.VectorLayer(MapLayerConst.MAP_MARKER_WAVE_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_LINE_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_POLYGON_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_OD_LINE_CURVES_MARKER_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_ISECTS_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_RIGHT_MENU_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_INFO_WINDOW_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_MASK_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_PARTICLE_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_IMAGE_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_TOOL_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_DRAGGABLE_LAYER),

        new maptalks.VectorLayer(MapLayerConst.MAP_EDITABLED_LAYER)
    ]
});
