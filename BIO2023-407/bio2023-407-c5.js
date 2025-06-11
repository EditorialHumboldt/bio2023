document.addEventListener(`DOMContentLoaded`, function () {

    Highcharts.chart(`grafica1`, {
        chart: {
          type: `pie`,
          backgroundColor: `#f0f0f0` 

        },
        title: {
          text: `<span class="ttbigcir">193</span><br><span class="txt">Áreas en total</span>`,
          align: `center`,
          verticalAlign: `middle`,
          y: 10,
          x: 0,
          style: {
            fontSize: `18px`
          }
        },
        tooltip: {
          pointFormat: `<b>{point.y}</b> áreas ({point.percentage:.1f}%)`
        },
        plotOptions: {
          pie: {
            innerSize: `70%`,
            dataLabels: {
              enabled: false,
              format: `{point.y}<br>{point.percentage:.1f} %`,
              distance: 30,
              style: {
                fontSize: `13px`
              }
             },
             showInLegend: true 
             
          }
        },
        series: [{
          name: `Áreas`,
          data: [
            { name: `Locales`, y: 181, color: `#0F5B5D` },
            { name: `Regionales`, y: 9, color: `#2A3F3E` },
            { name: `Nacionales`, y: 3, color: `#F5BC00` }
          ]
        }]
      });

      Highcharts.chart(`grafica2`, {
        chart: {
          type: `pie`,
          backgroundColor: `#f0f0f0` 
        },
        title: {
          text: `<span class="ttbigcir2">1 228 163 ha</span><br><span class="txt">En total</span>`,
          align: `center`,
          verticalAlign: `middle`,
          y: 10,
          x: 0,
          style: {
            fontSize: `18px`
          }
        },
        tooltip: {
          pointFormat: `<b>{point.y} ha</b> ({point.percentage:.1f}%)`
        },
        plotOptions: {
            pie: {
              innerSize: `70%`,
              dataLabels: {
                enabled: false,
                format: `{point.y}<br>{point.percentage:.1f} %`,
                distance: 30,
                style: {
                  fontSize: `13px`
                }
               },
               showInLegend: true 
               
            }
          },
        series: [{
          name: `Superficie`,
          data: [
            { name: `Locales (ha)`, y: 198387, color: `#0F5B5D` },
            { name: `Regionales (ha)`, y: 72316, color: `#2A3F3E` },
            { name: `Nacionales (ha)`, y: 957460, color: `#F5BC00` }
          ]
        }]
      });

      Highcharts.chart(`grafica3`, {
        chart: {
          type: `pie`,
          backgroundColor: `#f0f0f0` 
        },
        title: {
          text: `<span class="ttbigcir">235</span><br><span class="txt">Áreas en total</span>`,
          align: `center`,
          verticalAlign: `middle`,
          y: 10,
          x: 0,
          style: {
            fontSize: `18px`
          }
        },
        tooltip: {
          pointFormat: `<b>{point.y}</b> áreas ({point.percentage:.1f}%)`
        },
        plotOptions: {
            pie: {
              innerSize: `70%`,
              dataLabels: {
                enabled: false,
                format: `{point.y}<br>{point.percentage:.1f} %`,
                distance: 30,
                style: {
                  fontSize: `13px`
                }
               },
               showInLegend: true 
               
            }
          },
        series: [{
          name: `Áreas`,
          data: [
            { name: `Locales`, y: 203, color: `#0F5B5D` },
            { name: `Regionales`, y: 18, color: `#2A3F3E` },
            { name: `Nacionales`, y: 14, color: `#F5BC00` }
          ]
        }]
      });

      Highcharts.chart(`grafica4`, {
        chart: {
          type: `pie`,
          backgroundColor: `#f0f0f0` 
        },
        title: {
          text: `<span class="ttbigcir2">2 767 349 ha</span><br><span class="txt">En total</span>`,
          align: `center`,
          verticalAlign: `middle`,
          y: 10,
          x: 0,
          style: {
            fontSize: `18px`
          }
        },
        tooltip: {
          pointFormat: `<b>{point.y} ha</b> ({point.percentage:.1f}%)`
        },
        plotOptions: {
            pie: {
              innerSize: `70%`,
              dataLabels: {
                enabled: false,
                format: `{point.y}<br>{point.percentage:.1f} %`,
                distance: 30,
                style: {
                  fontSize: `13px`
                }
               },
               showInLegend: true 
               
            }
          },
        series: [{
          name: `Superficie`,
          data: [
            { name: `Locales (ha)`, y: 199977, color: `#0F5B5D` },
            { name: `Regionales (ha)`, y: 95872, color: `#2A3F3E` },
            { name: `Nacionales (ha)`, y: 2472500, color: `#F5BC00` }
          ]
        }]
      });
 
  }); 