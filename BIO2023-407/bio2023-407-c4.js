document.addEventListener("DOMContentLoaded", function () {
  // Primera gráfica: Áreas protegidas
  Highcharts.chart("container1", {
    chart: { type: "column" },
    title: { text: "Áreas protegidas" },
    xAxis: {
      categories: ["Biorregión", "SIRAP Orinoquia"],
    },
    yAxis: {
      title: { text: "Porcentaje" },
      max: 30,
      labels: { format: "{value} %" }
    },
    legend: {
      layout: "horizontal",
      align: "center"
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          format: "{y:.1f} %"
        }
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: " %"
    },
    series: [
      {
        name: "Conectividad",
        data: [3.1, 5.1],
        stack: "stack1",
        color: "#16676d",
        dashStyle: "ShortDot"
      },
      {
        name: "Representatividad",
        data: [2.6, 5.3],
        stack: "stack1",
        color: "#f3bd2d"
      }
    ]
  });

  // Segunda gráfica: Áreas protegidas + Resguardos indígenas
  Highcharts.chart("container2", {
    chart: { type: "column" },
    title: { text: "Áreas protegidas + Resguardos indígenas" },
    xAxis: {
      categories: ["Biorregión", "SIRAP Orinoquia"]
    },
    yAxis: {
      title: { text: "Porcentaje" },
      max: 30,
      labels: { format: "{value} %" }
    },
    legend: {
      layout: "horizontal",
      align: "center"
    },
    plotOptions: {
      column: {
        stacking: "normal",
        dataLabels: {
          enabled: true,
          format: "{y:.1f} %"
        }
      }
    },
    tooltip: {
      shared: true,
      valueSuffix: " %"
    },
    series: [
      {
        name: "Conectividad",
        data: [23.38, 18.8],
        stack: "stack1",
        color: "#16676d",
        dashStyle: "ShortDot"
      },
      {
        name: "Representatividad",
        data: [5.02, 8.9],
        stack: "stack1",
        color: "#f3bd2d"
      }
    ]
  });
});
