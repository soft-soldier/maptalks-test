/**
 * Created by 86185 in 2020/8/9 on 10:24
 */
let chartDom = document.createElement("div");
chartDom.style.cssText = "width:1300px; height:800px;";
createChart(chartDom);

let echartsUI = new maptalks.ui.UIMarker(map.getCenter(), {
    "draggable": true,
    "content": chartDom
}).addTo(map).show();

// ECharts"s chart creation
function createChart(dom) {
    let myChart = echarts.init(dom);
    let option = {
        title: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        series: [
            {
                type: "graph",
                layout: "none",
                // progressiveThreshold: 700,
                data: npmdepgraph.nodes.map(function (node) {
                    return {
                        x: node.x,
                        y: node.y,
                        id: node.id,
                        name: node.label,
                        symbolSize: node.size,
                        itemStyle: {
                            color: node.color
                        }
                    };
                }),
                edges: npmdepgraph.edges.map(function (edge) {
                    return {
                        source: edge.sourceID,
                        target: edge.targetID
                    };
                }),
                emphasis: {
                    label: {
                        position: "right",
                        show: true
                    }
                },
                roam: true,
                focusNodeAdjacency: true,
                lineStyle: {
                    width: 0.5,
                    curveness: 0.3,
                    opacity: 0.7
                }
            }
        ]
    };
    myChart.setOption(option, true);
}