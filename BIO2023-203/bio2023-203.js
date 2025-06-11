fetch('https://reporte.humboldt.org.co/assets/datasets/2023/2/203/bio2023-203-charts.json')
    .then(response => response.json())
    .then(data => {
        Highcharts.chart('bio2023-203-chart-1', {
            chart: {
                type: 'bar'  // Barras horizontales
            },
            title: {
                text: null
            },
            xAxis: {
                categories: data.years.reverse(), // Se invierte para mantener la estructura horizontal
                title: {
                    text: 'Año'
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Área sembrada (ha)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' hectareas'
            },
            plotOptions: {
                bar: {
                    stacking: 'normal' // Barras apiladas
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            },
            series: [
                {
                    name: 'Guaviare y otros departamentos',
                    data: data.guaviare,
                    color: '#005F86' // Azul oscuro
                },
                {
                    name: 'Cundinamarca',
                    data: data.cundinamarca,
                    color: '#009688' // Verde azulado
                },
                {
                    name: 'Arauca',
                    data: data.arauca,
                    color: '#E87722' // Naranja
                },
                {
                    name: 'Meta',
                    data: data.meta,
                    color: '#FFC107' // Amarillo
                },
                {
                    name: 'Casanare',
                    data: data.casanare,
                    color: '#6D9F39' // Verde
                }
            ]
        });
    });
