document.addEventListener("DOMContentLoaded", function () {
    Highcharts.chart("graficaRecoleccion", {
        chart: {
            type: "column"
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                "Acacías", "Arauca", "Cumaribo", "Granada",
                "Inírida", "Puerto Carreño", "Puerto Gaitán", "Villavicencio"
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: "Cantidad recolectada"
                
            },
            stackLabels: {
                enabled: true
            }
        },
        legend: {
            reversed: false
        },
        plotOptions: {
            column: {
                stacking: "percent"
            }
        },
        legend: {
            reversed: true
        },
        series: [
            {
                name: "Nasa",
                data: [2314, 960752, 837469, 25384, 40628, 320176, 778805, 391450]
            },
            {
                name: "Copo",
                data: [1840, 0, 0, 0, 0, 0, 0, 44550]
            },
            {
                name: "Chinchorro",
                data: [282, 180220, 4750, 341264, 614343, 825558, 383692, 2594627]
            },
            {
                name: "Atarraya",
                data: [260, 0, 0, 0, 0, 9873, 0, 246910]
            },
            {
                name: "Manual",
                data: [23327, 0, 0, 74521, 78740, 91383, 0, 585840]
            },
            {
                name: "Anzuelo",
                data: [0, 0, 59, 82, 0, 5049, 0, 0]
            }
        ]
    });
});
 
