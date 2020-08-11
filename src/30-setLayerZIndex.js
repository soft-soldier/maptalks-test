/**
 * Created by 86185 in 2020/8/11 on 21:20
 */
let rect3 = new maptalks.Rectangle(
    map.getCenter().sub(0.025, 0.0035),
    3000,
    1000,
    {
        "symbol": [
            {
                "lineColor": "#34495e",
                "lineWidth": 3,
                "polygonFill": "#1bbc9b",
                "polygonOpacity": 1
            },
            {
                "textName": "3",
                "textWeight": "bold",
                "textSize": 30,
                "textFill": "#fff"
            }
        ]
    }
);

let rect2 = rect3.copy().translate([0.006, 0.006]).updateSymbol([{"polygonFill": "rgb(216,115,149)"}, {"textName": "2"}]);

let rect1 = rect2.copy().translate([0.006, 0.006]).updateSymbol([{"polygonFill": "rgb(135,196,240)"}, {"textName": "1"}]);


// sort to 3,2,1
function sort1() {
    rect3.bringToFront();
    rect1.bringToBack();
}

//sort to 1,2,3
function sort2() {
    rect1.setZIndex(3);
    rect2.setZIndex(2);
    rect3.setZIndex(1);
}

map.getLayer(MapLayerConst.MAP_POLYGON_LAYER).addGeometry(rect3, rect2, rect1);