/**
 * Created by 86185 in 2020/8/15 on 11:27
 */
let center = map.getCenter();

let point = new maptalks.Marker(
    [-0.113049, 51.508568],
    {
        visible: true,
        editable: true,
        cursor: "pointer",
        shadowBlur: 0,
        shadowColor: "black",
        draggable: false,
        dragShadow: false, // display a shadow during dragging
        drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
        symbol: {
            "markerType": "ellipse",
            "markerWidth": 40,
            "markerHeight": 40,
            "markerFill": "rgb(216,115,149)",
            "markerLineColo": "#fff"
        }
    }
);
let line = new maptalks.LineString([
    [-0.131049, 51.488568],
    [-0.107049, 51.488568]
], {
    arrowStyle: null, // arrow-style : now we only have classic
    arrowPlacement: "vertex-last", // arrow"s placement: vertex-first, vertex-last, vertex-firstlast, point
    visible: true,
    editable: true,
    cursor: null,
    shadowBlur: 0,
    shadowColor: "black",
    draggable: false,
    dragShadow: false, // display a shadow during dragging
    drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
    symbol: {
        "lineColor": "#1bbc9b",
        "lineWidth": 3
    }
});
let polygon = new maptalks.Polygon([
    [
        [-0.131049, 51.498568],
        [-0.107049, 51.498568],
        [-0.107049, 51.493568],
        [-0.131049, 51.493568],
        [-0.131049, 51.498568]
    ]
], {
    visible: true,
    editable: true,
    cursor: "pointer",
    shadowBlur: 0,
    shadowColor: "black",
    draggable: false,
    dragShadow: false, // display a shadow during dragging
    drawOnAxis: null,  // force dragging stick on a axis, can be: x, y
    symbol: {
        "lineColor": "#34495e",
        "lineWidth": 2,
        "polygonFill": "rgb(135,196,240)",
        "polygonOpacity": 0.6
    }
});
let rectangle = new maptalks.Rectangle(center.add(-0.018, 0.012), 800, 700, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#34495e",
        polygonOpacity: 0.4
    }
});
let circle = new maptalks.Circle(center.add(0.002, 0.008), 500, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "#1bbc9b",
        polygonOpacity: 0.4
    }
});
let ellipse = new maptalks.Ellipse(center.add(0.003, -0.005), 1000, 600, {
    symbol: {
        lineColor: "#34495e",
        lineWidth: 2,
        polygonFill: "rgb(216,115,149)",
        polygonOpacity: 0.4
    }
});
let textbox = new maptalks.TextBox(
    "This is a textbox, with very long content", // content
    [-0.113049, 51.498568],  // coordinate
    200,                 // width
    90,                  // height
    {
        "draggable": true,
        "textStyle": {
            "wrap": true,          // auto wrap text
            "padding": [12, 8],    // padding of textbox
            "verticalAlignment": "top",
            "horizontalAlignment": "right",
            "symbol": {
                "textFaceName": "monospace",
                "textFill": "#34495e",
                "textHaloFill": "#fff",
                "textHaloRadius": 4,
                "textSize": 18,
                "textWeight": "bold"
            }
        },
        "boxSymbol": {
            // box"s symbol
            "markerType": "square",
            "markerFill": "rgb(135,196,240)",
            "markerFillOpacity": 0.9,
            "markerLineColor": "#34495e",
            "markerLineWidth": 1
        }
    }
);
let label = new maptalks.Label("label with box", [-0.117, 51.496], {
    "textSymbol": {
        "textFaceName": "sans-serif",
        "textFill": "#fff",
        "textSize": 18
    },
    "boxStyle": {
        "padding": [12, 8],
        "symbol": {
            "markerType": "square",
            "markerFillOpacity": 0.9,
            "markerLineColor": "#34495e",
            "markerFill": "#34495e",
            "markerLineWidth": 1
        }
    }
})

map.getLayer(MapLayerConst.MAP_EDITABLED_LAYER)
    .addGeometry([point, line, polygon, rectangle, circle, ellipse, textbox, label])
    .addTo(map);

function startEdit() {
    point.startEdit();
    line.startEdit();
    polygon.startEdit();
    rectangle.startEdit();
    circle.startEdit();
    ellipse.startEdit();
    textbox.startEdit();
    label.startEditText();
}

function endEdit() {
    point.endEdit();
    line.endEdit();
    polygon.endEdit();
    rectangle.endEdit();
    circle.endEdit();
    ellipse.endEdit();
    textbox.endEdit();
    label.endEditText();
}