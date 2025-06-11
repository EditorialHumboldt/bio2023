document.addEventListener("DOMContentLoaded", function() {
    function crearGrafico(id, titulo, datos) {
        Highcharts.chart(id, {
          chart: {
            type: `column`,
            backgroundColor: `transparent`
          },
          title: { text: null },
          xAxis: {
            categories: [titulo],
            labels: { style: { fontWeight: `bold` } },
            lineWidth: 0,
            tickLength: 0
          },
          yAxis: {
            visible: true,
            labels: { enabled: false },
            title: { text: null },
            gridLineWidth: 0
          },
          legend: { enabled: false },
          credits: { enabled: false },
          tooltip: { shared: true },
          plotOptions: {
            column: {
              grouping: true,
              pointPadding: 0.2,
              borderWidth: 0
            }
          },
          series: [
            { name: `Calidad de hábitat (0-1)`, data: [datos[0]], color: `#b4322e` },
            { name: `Almacenamiento de carbono (Ton/ha)`, data: [datos[1]], color: `#104f57` },
            { name: `Mitigación del calor (°C)`, data: [datos[2]], color: `#9acd8b` }
          ]
        });
      }
      
      // Crear cada gráfico
      crearGrafico(`bosque`, `Bosque`, [0.86, 3.77, 2.25]);
      crearGrafico(`humedal`, `Humedal`, [0.84, 2.66, 1.31]);
      crearGrafico(`mosaico`, `Mosaico rural con manejo ambiental`, [0.74, 3.46, 1.81]);
      crearGrafico(`verde`, `Verde urbano`, [0.55, 2.06, 0.78]);
});
