/**
 * Created by 86185 in 2020/8/1 on 15:50
 */
new maptalks.control.Toolbar({
    "vertical" : false,
    "position" : "top-left",
    "items"     : [
        {
            item: "CSV",
            click : function () {
                maptalks.Formats.csv("./formats/a.csv", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("csv");
                    let layer = new maptalks.VectorLayer("csv", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "GeoJSON",
            click : function () {
                maptalks.Formats.geojson("./formats/a.geojson", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("geojson");
                    let layer = new maptalks.VectorLayer("geojson", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "GPX",
            click : function () {
                maptalks.Formats.gpx("./formats/a.gpx", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("gpx");
                    let layer = new maptalks.VectorLayer("gpx", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "KML",
            click : function () {
                maptalks.Formats.kml("./formats/a.kml", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("kml");
                    let layer = new maptalks.VectorLayer("kml", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "Polyline",
            click : function () {
                maptalks.Formats.polyline("./formats/a.polyline", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("polyline");
                    let layer = new maptalks.VectorLayer("polyline", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "TopoJSON",
            click : function () {
                maptalks.Formats.topojson("./formats/a.topojson", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("topojson");
                    let layer = new maptalks.VectorLayer("topojson", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "WKT",
            click : function () {
                maptalks.Formats.wkt("./formats/a.wkt", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("wkt");
                    let layer = new maptalks.VectorLayer("wkt", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        },
        {
            item: "osm",
            click : function () {
                maptalks.Formats.osm("./formats/osm.osm", function (err, geojson) {
                    if (err) {
                        throw err;
                    }
                    map.removeLayer("osm");
                    let layer = new maptalks.VectorLayer("osm", geojson).addTo(map);
                    map.fitExtent(layer.getExtent());
                });
            }
        }
    ]
}).addTo(map);


function info(info) {
    document.getElementById("console").value = "<pre>" + info + "</pre>";
}