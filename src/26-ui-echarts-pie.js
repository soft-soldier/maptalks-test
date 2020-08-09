/**
 * Created by 86185 in 2020/8/9 on 10:24
 */
let chartDom = document.createElement("div");
chartDom.style.cssText = "width:650px; height:300px;";
createChart(chartDom);

let echartsUI = new maptalks.ui.UIMarker(map.getCenter(), {
    "draggable": true,
    "content": chartDom
}).addTo(map).show();

// ECharts"s chart creation
function createChart(dom) {
    let myChart = echarts.init(dom);
    let option = {
        title: {
            x: "center"
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            x: "center",
            y: "bottom",
            data: ["rose1", "rose2", "rose3", "rose4", "rose5", "rose6", "rose7", "rose8"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: false, readOnly: false},
                magicType: {
                    show: true,
                    type: ["pie", "funnel"]
                },
                restore: {show: false},
                saveAsImage: {show: false}
            }
        },
        calculable: true,
        series: [
            {
                name: "Area mode",
                type: "pie",
                radius: [30, 110],
                center: ["50%", "50%"],
                roseType: "area",
                data: [
                    {value: 10, name: "rose1"},
                    {value: 5, name: "rose2"},
                    {value: 15, name: "rose3"},
                    {value: 25, name: "rose4"},
                    {value: 20, name: "rose5"},
                    {value: 35, name: "rose6"},
                    {value: 30, name: "rose7"},
                    {value: 40, name: "rose8"}
                ]
            }
        ]
    };
    myChart.setOption(option);
}