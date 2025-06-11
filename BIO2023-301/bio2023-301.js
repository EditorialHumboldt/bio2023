//https://reporte.humboldt.org.co/assets/datasets/2023/2/204/bio2023-301-charts.json
document.addEventListener("DOMContentLoaded", function () {
    fetch("bio2023-301-charts.json")
        .then(response => response.json())
        .then(data => {

            //Grafico 1
            const chartData = data.chart_1;
            
            Highcharts.chart('bio2023-301-chart-1', {
                chart: {
                    type: 'bar'
                },
                title: {
                    text: null
                },
                xAxis: {
                    categories: chartData.map(d => d.hectareas),
                    title: {
                        text: 'Hectáreas'
                    }
                },
                yAxis: {
                    title: {
                        text: 'Número de Reservas'
                    }
                },
                series: [{
                    name: 'Reservas',
                    data: chartData.map(d => d.reservas),
                    showInLegend: false,
                    color: '#E37541'
                }],
                tooltip: {
                    formatter: function () {
                        console.log('barritas',this);
                        return `<b>Tamaño (ha):</b> ${this.category}<br><b>Reservas:</b> ${this.y}`;
                    }
                },
                plotOptions: {
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                legend: {
                    enabled: false
                }
            });
            //Grafico 2
            const chartData2 = data.chart_2;

            // Crear la tabla
            const tableContainer = document.getElementById("bio2023-301-table");
            let tableHTML = "<table ><thead><tr><th>Reserva</th><th>Extensión (ha)</th></tr></thead><tbody>";
            chartData2.forEach((d, index) => {
                tableHTML += `<tr id='row-${index}'><td>${d.nombre}</td><td>${d.ha}</td></tr>`;
            });
            tableHTML += "</tbody></table>";
            tableContainer.innerHTML = tableHTML;

            
            const chart = Highcharts.chart('bio2023-301-chart-2', {
                chart: {
                    type: 'packedbubble',
                    height: '100%'
                },
                title: {
                    text: null
                },
                tooltip: {
                    useHTML: true,
                    pointFormat: '<b>{point.name}</b><br>Extensión: {point.value} ha'
                },
                plotOptions: {
                    packedbubble: {
                        minSize: '10%',
                        maxSize: '185%',
                        layoutAlgorithm: {
                            gravitationalConstant: 0.02,
                            splitSeries: false,
                            seriesInteraction: true,
                            dragBetweenSeries: true,
                            parentNodeLimit: true
                        },
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}',
                            style: {
                                color: 'black',
                                textOutline: 'none',
                                fontWeight: 'bold'
                            },
                            filter: {
                                property: 'value',
                                operator: '>',
                                value: 500
                            }
                        },
                        point: {
                            events: {
                                mouseOver: function () {
                                    document.getElementById(`row-${this.index}`).style.backgroundColor = "#F6CDBA";
                                },
                                mouseOut: function () {
                                    document.getElementById(`row-${this.index}`).style.backgroundColor = "";
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: 'Reservas',
                    data: chartData2.map((d, index) => ({ name: d.nombre, value: d.ha, index: index })),
                    color: '#E37541',
                    showInLegend: false,

                }]
            });
            
            // Sincronización con la tabla
            document.querySelectorAll("tbody tr").forEach((row, index) => {
                row.addEventListener("mouseover", function () {
                    chart.series[0].data[index].setState("hover");
                });
                row.addEventListener("mouseout", function () {
                    chart.series[0].data[index].setState();
                });
            });
            
        })
        .catch(error => console.error("Error cargando los datos:", error));
});
