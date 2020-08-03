/**
 * Created by 86185 in 2020/8/3 on 20:58
 */
let layer = map.getLayer(MapLayerConst.MAP_RIGHT_MENU_LAYER).addTo(map);

let geometry = new maptalks.Marker([117.3745188667, 23.8839]).addTo(layer);

let options = {
    "custom": true,
    "items": `
        <ul class="custom_menu">
            <li onclick="clickItem(this);">Locate</li>
            <li onclick="clickItem(this);">Mark</li>
            <li onclick="clickItem(this);">Identify</li>
            <li onclick="clickItem(this);">About</li>
        </ul>
    `
};

function clickItem(context) {
    console.log(context);
}

geometry.setMenu(options)/*.openMenu()*/;
