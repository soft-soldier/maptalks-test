/**
 * Created by 86185 in 2020/8/11 on 22:24
 */
let imageLayer = new maptalks.ImageLayer(map.getLayer(MapLayerConst.MAP_IMAGE_LAYER),
    [
        {
            url: relative2path("image1.png"),
            extent: [-0.11854216406254636, 51.50043810048564, -0.09081885168461667, 51.50994770979011],
            opacity: 1
        },
        {
            url: relative2path("image2.png"),
            extent: [-0.10343596289067136, 51.50797115663946, -0.07897421667485105, 51.51876102463089],
            opacity: 1
        }
    ]);

map.addLayer(imageLayer);