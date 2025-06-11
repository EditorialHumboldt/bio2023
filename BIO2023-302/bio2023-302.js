//https://reporte.humboldt.org.co/assets/datasets/2023/3/302/bio2023-302-charts.json
document.addEventListener("DOMContentLoaded", function () {
    
    fetch("bio2023-302-charts.json")
        .then(response => response.json())
        .then(data => {
            const chartData = data.chart_1;
            
            Highcharts.chart('bio2023-302-chart-3', {
                chart: {
                    type: 'treegraph',
                    height: '90%',
                },
                title: {
                    text: null
                },
                tooltip: {
                    useHTML: true,
                    formatter: function () {
                        
                        if (this.parent === '') {
                            return false; // No tooltip for first level nodes
                        }
                        return `<b>Nombre:</b> <em>${this.point.name}</em><br><b>Orden:</b> ${this.point.order}<br><b>Categoría de Amenaza:</b> ${this.point.categoria_amenaza}`;
                    }
                },
                plotOptions: {
                    treegraph: {
                        dataLabels: {
                            enabled: true,
                            //useHTML: true,
                            align: 'center',
                            verticalAlign: 'middle',
                            style: {
                                textOutline: 'none',
                                fontSize: '14px',
                                fontWeight: 'normal',
                                textAlign: 'center'
                            },
                            formatter: function () {
                                if (this.parent === '') {
                                    return `<b>${this.point.name}</b>`;
                                }
                                return `<i>${this.point.name}</i>`;
                            }
                        },
                        allowPointSelect: true,
                        cursor: 'pointer',
                        events: {
                            click: function (event) {
                                let point = event.point;
                                point.setVisible(!point.visible);
                            }
                        }
                    }
                },
                series: [{
                    type: 'treegraph',
                    data: chartData,
                    marker: {
                        //radius: 10,
                        symbol: 'rect',
                        width: '25%'
                    },
                    borderRadius: 10,
                }],
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    itemStyle: {
                        fontWeight: 'bold',
                        fontSize: '12px'
                    },
                    labelFormatter: function () {
                        console.log('Legend', this);
                        return this.name;
                    }
                }
            });
        })
        .catch(error => console.error("Error cargando los datos:", error));
});
