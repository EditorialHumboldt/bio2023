document.addEventListener("DOMContentLoaded", function () {
    fetch("https://reporte.humboldt.org.co/assets/datasets/2023/2/201/bio2023-201-charts.json")
        .then(response => response.json())
        .then(data => {
            const chartData = data.chart_2;

            Highcharts.chart("bio2023-201-chart_2", {
                chart: {
                    type: "area",
                    backgroundColor: "transparent"
                },
                title: {
                    text: ""
                },
                legend: {
                    enabled: false // Oculta la leyenda inferior
                },
                xAxis: {
                    categories: chartData.categories,
                    tickmarkPlacement: "on",
                    gridLineWidth: 0
                },
                yAxis: {
                    title: {
                        text: "Valor promedio"
                    },
                    gridLineWidth: 1
                },
                tooltip: {
                    formatter: function () {
                        return `<strong>Valor promedio de huella humana en ${this.x}:</strong> ${this.y}%`;
                    }
                },
                plotOptions: {
                    area: {
                        fillColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 }, // Degradado de izquierda a derecha
                            stops: [
                                [0, "#49b8ac"],
                                [0.3, "#fd0"],
                                [0.7, "#fcc00c"],
                                [1, "#ea7b5e"]
                            ]
                        },
                        marker: {
                            enabled: true,
                            fillColor: "black",
                            lineWidth: 2,
                            lineColor: "black"
                        },
                        lineWidth: 2,
                        color: "black",
                        events: {
                            click: function (event) {
                                alert(`Valor promedio de huella humana en ${event.point.category}: ${event.point.y}%`);
                            }
                        }
                    }
                },
                series: [{
                    name: "Valor promedio",
                    data: chartData.values,
                    dataLabels: {
                        enabled: true,
                        format: "{y}",
                        style: {
                            color: "black",
                            fontWeight: "bold"
                        }
                    }
                }]
            });
        })
        .catch(error => console.error("Error cargando los datos:", error));
});
