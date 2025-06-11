fetch('https://reporte.humboldt.org.co/assets/datasets/2023/4/402/bio2023-402-charts.json')
  .then(response => response.json())
  .then(data => {
    Highcharts.chart('chart-container-1', {
      chart: { type: 'column' },
      title: { text: '' },
      xAxis: {
        categories: data.chart_1.categories,
        title: { text: 'País de origen' }
      },
      yAxis: {
        min: 0,
        title: { text: 'Días de aviturismo' }
      },
      series: [{
        name: 'Días',
        data: data.chart_1.data,
        color: '#3366cc'
      }]
    });

    Highcharts.chart('chart-container-2', {
      chart: { type: 'line' },
      title: { text: '' },
      xAxis: {
        categories: data.chart_2.categories,
        title: { text: 'Año' }
      },
      yAxis: {
        title: { text: 'Proporción de crecimiento' }
      },
      series: [{
        name: 'Crecimiento',
        data: data.chart_2.data,
        color: '#e74c3c'
      }]
    });
  });
