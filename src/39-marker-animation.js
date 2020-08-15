/**
 * Created by 86185 in 2020/8/15 on 15:32
 */
let center = map.getCenter();
let bars = getBars();

function getBars() {
    let bar1 = new maptalks.Marker(
        center.add(-0.012, -0.002),
        {
            "symbol": {
                "markerType": "bar",
                "markerWidth": 48,
                "markerHeight": 33,
                "markerFill": "rgb(135,196,240)",
                "markerLineWidth": 2,
                "markerLineColor": "#fff"
            }
        }
    );

    let bar2 = new maptalks.Marker(
        center.add(-0.004, -0.002),
        {
            "symbol": {
                "markerType": "bar",
                "markerWidth": 48,
                "markerHeight": 47,
                "markerFill": "rgb(216,115,149)",
                "markerLineWidth": 2,
                "markerLineColor": "#fff"
            }
        }
    );

    let bar3 = new maptalks.Marker(
        center.add(0.004, -0.002),
        {
            "symbol": {
                "markerType": "bar",
                "markerWidth": 48,
                "markerHeight": 79,
                "markerFill": "#1bbc9b",
                "markerLineWidth": 2,
                "markerLineColor": "#fff"
            }
        }
    );

    return [bar1, bar2, bar3];
}

map.getLayer(MapLayerConst.MAP_MARKER_ANIMATION_LAYER).addGeometry(bars);

replay();

function replay() {
    reset();
    animate();
}

function animate() {
    bars[0].animate(
        {
            "symbol": {
                "markerHeight": 82
            }
        },
        {
            "duration": 1000
        }
    );

    bars[1].animate(
        {
            "symbol": {
                "markerHeight": 197
            }
        },
        {
            "duration": 1000
        }
    );

    bars[2].animate(
        {
            "symbol": {
                "markerHeight": 154
            }
        },
        {
            "duration": 1000
        }
    );
}

function reset() {
    bars[0].updateSymbol({
        "markerHeight": 33
    });
    bars[1].updateSymbol({
        "markerHeight": 47
    });
    bars[2].updateSymbol({
        "markerHeight": 79
    });
}