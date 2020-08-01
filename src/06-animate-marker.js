/**
 * Created by 86185 in 2020/8/1 on 11:58
 */
function getGradient(colors) {
    return {
        type: 'radial',
        colorStops: [
            [0.70, 'rgba(' + colors.join() + ', 0.5)'],
            [0.30, 'rgba(' + colors.join() + ', 1)'],
            [0.20, 'rgba(' + colors.join() + ', 1)'],
            [0.00, 'rgba(' + colors.join() + ', 0)']
        ]
    };
}

// earthquakes data from animatemarker.js(usgs.gov)
let geometries = maptalks.GeoJSON.toGeometry(earthquakes);
let layer = new maptalks.AnimateMarkerLayer(MapLayerConst.MAP_ANIMATE_MARKER_LAYER, geometries, {
    'animation': 'scale,fade',
    'randomAnimation': true,
    'geometryEvents': false
}).setStyle([
    {
        filter: ['<=', 'mag', 2],
        symbol: {
            'markerType': 'ellipse',
            'markerLineWidth': 0,
            'markerFill': getGradient([135, 196, 240]),
            'markerFillOpacity': 0.8,
            'markerWidth': 5,
            'markerHeight': 5
        }
    },
    {
        filter: ['<=', 'mag', 5],
        symbol: {
            'markerType': 'ellipse',
            'markerLineWidth': 0,
            'markerFill': getGradient([255, 255, 0]),
            'markerFillOpacity': 0.8,
            'markerWidth': 12,
            'markerHeight': 12
        }
    },
    {
        filter: ['>', 'mag', 5],
        symbol: {
            'markerType': 'ellipse',
            'markerLineWidth': 0,
            'markerFill': getGradient([216, 115, 149]),
            'markerFillOpacity': 0.8,
            'markerWidth': 20,
            'markerHeight': 20
        }
    }
]).addTo(map);