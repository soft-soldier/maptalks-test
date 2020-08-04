/**
 * Created by 86185 in 2020/8/4 on 21:27
 */
let center = map.getCenter();

let layer = map.getLayer(MapLayerConst.MAP_MARKER_LAYER).addTo(map);

let marker1 = new maptalks.Marker(
    center.sub(0.009, 0),
    {
        "symbol": {
            "markerFile": relative2path("1.png"),
            "markerWidth": 28,
            "markerHeight": 40,
            "markerDx": 0,
            "markerDy": 0,
            "markerOpacity": 1
        }
    }
).addTo(layer);

let marker2 = new maptalks.Marker(
    center.sub(0.006, 0),
    {
        "symbol": {
            "markerFile": relative2path("2.png"),
            "markerWidth": 28,
            "markerHeight": 40,
            "markerDx": 0,
            "markerDy": 0,
            "markerOpacity": 1
        }
    }
).addTo(layer);

let marker3 = new maptalks.Marker(
    center.sub(0.003, 0),
    {
        "symbol": {
            "markerFile": relative2path("3.png"),
            "markerWidth": 28,
            "markerHeight": 40,
            "markerDx": 0,
            "markerDy": 0,
            "markerOpacity": 1
        }
    }
).addTo(layer);

let marker4 = new maptalks.Marker(
    center,
    {
        "symbol": {
            "markerFile": relative2path("4.png"),
            "markerWidth": 28,
            "markerHeight": 40,
            "markerDx": 0,
            "markerDy": 0,
            "markerOpacity": 1
        }
    }
).addTo(layer);

let marker5 = new maptalks.Marker(
    center.add(0.003, 0),
    {
        "symbol": {
            "markerFile": relative2path("5.png"),
            "markerWidth": 28,
            "markerHeight": 40,
            "markerDx": 0,
            "markerDy": 0,
            "markerOpacity": 1
        }
    }
).addTo(layer);

let marker6 = new maptalks.Marker(
    center.add(0.006, 0),
    {
        "symbol": {
            "markerFile": relative2path("6.png"),
            "markerWidth": 28,
            "markerHeight": 40,
            "markerDx": 0,
            "markerDy": 0,
            "markerOpacity": 1
        }
    }
).addTo(layer);

let markerList = [marker1, marker2, marker3, marker4, marker5, marker6];

markerList.forEach(marker => {
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
})