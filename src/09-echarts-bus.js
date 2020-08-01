/**
 * Created by 86185 in 2020/8/1 on 14:28
 */
let hStep = 300 / (e3Lines.length - 1);

let busLines = [].concat.apply([], e3Lines.map(function (busLine, idx) {
    let prevPt;
    let points = [];
    for (let i = 0; i < busLine.length; i += 2) {
        let pt = [busLine[i], busLine[i + 1]];
        if (i > 0) {
            pt = [
                prevPt[0] + pt[0],
                prevPt[1] + pt[1]
            ];
        }
        prevPt = pt;
        points.push([pt[0] / 1e4, pt[1] / 1e4]);
    }
    return {
        "coords": points,
        "lineStyle": {
            "normal": {
                "color": echarts.color.modifyHSL("#5A94DF", Math.round(hStep * idx))
            }
        }
    };
}));

let ecOption = {
    "series": [{
        "type": "lines",
        "polyline": true,
        "data": busLines,
        "lineStyle": {
            "normal": {
                "width": 0
            }
        },
        "effect": {
            "constantSpeed": 20,
            "show": true,
            "trailLength": 0.5,
            "symbolSize": 1.5
        },
        "zlevel": 1
    }]
};

let e3Layer = new maptalks.E3Layer(MapLayerConst.MAP_E3_LAYER, ecOption, {
    hideOnZooming: true,
    hideOnRotating: true,
    hideOnMoving: true
}).addTo(map);