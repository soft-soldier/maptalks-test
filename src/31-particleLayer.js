/**
 * Created by 86185 in 2020/8/11 on 21:26
 */
let particleLayer = map.getLayer(MapLayerConst.MAP_PARTICLE_LAYER);
let markerLayer = map.getLayer(MapLayerConst.MAP_MARKER_LAYER);

// An animated particle circle
let particles = new maptalks.ParticleLayer(particleLayer, {
    "forceRenderOnMoving": true
});

let center = map.getCenter();

// circle"s radius in meters
let radius = 1000;

particles.getParticles = function (t) {

    let point = map.coordinateToContainerPoint(center);

    // particle"s angle at current time
    let angle = (t / 16 % 360) * Math.PI / 180;

    // convert distance in meter to pixel length
    let pxLen = map.distanceToPixel(radius, radius);
    let r = pxLen.width;

    // caculate pixel offset from circle"s center
    let x = r * Math.cos(angle),
        y = r * Math.sin(angle);

    return [
        {
            point: point.add(x, y),
            r: 4,
            color: "rgb(239,8,8)"
        }
    ];
};

map.addLayer(particles);

// 圆心
new maptalks.Marker(center, {
    symbol: {
        markerType: "cross",
        markerWidth: 10,
        markerHeight: 10,
        markerLineWidth: 2
    }
}).addTo(markerLayer);

// 圆轨道
new maptalks.Circle(center, radius, {
    symbol: {
        lineColor: "transparent",
        lineWidth: 6,
        lineOpacity: 0.2,
        polygonOpacity: 0
    }
}).addTo(markerLayer);