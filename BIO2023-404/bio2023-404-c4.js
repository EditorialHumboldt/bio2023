document.addEventListener(`DOMContentLoaded`, function () {
    Highcharts.chart(`grafica-individuos`, {
        chart: {
            type: `column`,
            inverted: true, // Esto invierte las barras: van de derecha a izquierda
            backgroundColor: `transparent`,
            style: {
              
            }
        },
        title: {
            text: null
        },
        xAxis: {
            categories: [
                `<div class="nncompleto"><span style="background:#98618D;" class="numero">1</span> <span class="infott"> Acacías</span></div>`,
                `<div class="nncompleto"><span style="background:#8BBFCF;" class="numero">2</span>   <span class="infott">Arauca</span></div>`,
                `<div class="nncompleto"><span style="background:#BECE57;" class="numero">3</span>   <span class="infott">Cumaribo</span></div>`,
                `<div class="nncompleto"><span style="background:#EEC97F;" class="numero">4</span>  <span class="infott">Granada</span></div>`,
                `<div class="nncompleto"><span style="background:#658043;" class="numero">5</span>   <span class="infott">Inírida</span></div>`,
                `<div class="nncompleto"><span style="background:#BECF62;" class="numero">6</span>   <span class="infott">Puerto Carreño</span></div>`,
                `<div class="nncompleto"><span style="background:#D28B21;" class="numero">7</span>   <span class="infott">Puerto Gaitán</span></div>`,
                `<div class="nncompleto"><span style="background:#156B84;" class="numero">8</span>   <span class="infott">Villavicencio</span></div>`
            ],
            reversed: true,
            lineWidth: 0, // ???? Elimina la línea del eje X
            labels: {
                useHTML: true,
                style: {
                     
                    padding: `0 `,
                    zIndex: `0 `
                   }
            }
        },
        yAxis: {
            visible: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointPadding: 0.3,
                groupPadding: 0,
                borderWidth: 0,
                 
                dataLabels: {
                    enabled: true,
                    useHTML: true,
                    align: `left`,
                    inside: false,
                    
                    formatter: function () {
                        const valores = [
                            28379800,
                            291714200,
                            15201100,
                            96188850,
                            305426300,
                            438112330,
                            164940170,
                            457549740
                        ];

                        const valor = valores[this.point.index];

                        return `
                            <div  style="text-align: right; font-weight: bold;z-index:-10; ">
                                ${Highcharts.numberFormat(this.y, 0, `,`, ` `)}<br>
                                <span style="font-size: 11px; color: #555;z-index:-10;">
                                    $${Highcharts.numberFormat(valor, 0, `,`, `.`)}
                                </span>
                            </div>
                        `;
                    }
                }
            }
        },
        tooltip: {
            useHTML: true,
            useHTML: true, // Esto es opcional si quieres usar HTML en el tooltip
            background : ` rgb(144, 144, 144)`, // también puedes usar colores como `#ffffff`
             zIndex:`999999999`,
            style: {
                color: `#000000`,
                fontSize: `14px`,
                backgroundColor: `#ffffff`, // Para compatibilidad cuando usas useHTML
                
               
            }
          },
        series: [{
            name: `Número de individuos`,
            data: [
                { y: 46332, color: `#93648D` , },
                { y: 1140972, color: `#A2D3E0` },
                { y: 842278, color: `#B6C934` },
                { y: 441251, color: `#eec97f` },
                { y: 733711, color: `#586735` },
                { y: 1242166, color: `#C3D866` },
                { y: 1162497, color: `#DC9634` },
                { y: 3863377, color: `#0B4E5C` }
            ]
        }]
    });
});