document.addEventListener("DOMContentLoaded", function () {

  // Gráfico Bosque
  Highcharts.chart("bosque2", {
    chart: {
      type: "column",
      backgroundColor: "transparent"
    },
    title: { text: null },
    xAxis: {
      categories: ["Bosque"],
      labels: { style: { fontWeight: "bold" } },
      lineWidth: 0,
      tickLength: 0
    },
    yAxis: { visible: false },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: { shared: true },
    plotOptions: {
      column: {
        grouping: true,
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color: "#000"
          }
        }
      }
    },
    accessibility: {
    enabled: false
  },
    series: [
      { name: "Calidad de hábitat (0–1)", data: [0.86], color: "#b4322e" },
      { name: "Almacenamiento de carbono (Ton/ha)", data: [3.77], color: "#104f57" },
      { name: "Mitigación del calor (°C)", data: [2.25], color: "#9acd8b" }
    ]
  });

  // Gráfico Humedal
  Highcharts.chart("humedal2", {
    chart: {
      type: "column",
      backgroundColor: "transparent"
    },
    title: { text: null },
    xAxis: {
      categories: ["Humedal"],
      labels: { style: { fontWeight: "bold" } },
      lineWidth: 0,
      tickLength: 0
    },
    yAxis: { visible: false },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: { shared: true },
    plotOptions: {
      column: {
        grouping: true,
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color: "#000"
          }
        }
      }
    },
    accessibility: {
    enabled: false
  },
    series: [
      { name: "Calidad de hábitat (0–1)", data: [0.84], color: "#b4322e" },
      { name: "Almacenamiento de carbono (Ton/ha)", data: [2.66], color: "#104f57" },
      { name: "Mitigación del calor (°C)", data: [1.31], color: "#9acd8b" }
    ]
  });

  // Gráfico Mosaico
  Highcharts.chart("mosaico2", {
    chart: {
      type: "column",
      backgroundColor: "transparent"
    },
    title: { text: null },
    xAxis: {
      categories: ["Mosaico rural con manejo ambiental"],
      labels: { style: { fontWeight: "bold" } },
      lineWidth: 0,
      tickLength: 0
    },
    yAxis: { visible: false },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: { shared: true },
    plotOptions: {
      column: {
        grouping: true,
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color: "#000"
          }
        }
      }
    },
    accessibility: {
    enabled: false
  },
    series: [
      { name: "Calidad de hábitat (0–1)", data: [0.74], color: "#b4322e" },
      { name: "Almacenamiento de carbono (Ton/ha)", data: [3.46], color: "#104f57" },
      { name: "Mitigación del calor (°C)", data: [1.81], color: "#9acd8b" }
    ]
  });

  // Gráfico Verde Urbano
  Highcharts.chart("verde2", {
    chart: {
      type: "column",
      backgroundColor: "transparent"
    },
    title: { text: null },
    xAxis: {
      categories: ["Verde urbano"],
      labels: { style: { fontWeight: "bold" } },
      lineWidth: 0,
      tickLength: 0
    },
    yAxis: { visible: false },
    legend: { enabled: false },
    credits: { enabled: false },
    tooltip: { shared: true },
    plotOptions: {
      column: {
        grouping: true,
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            fontWeight: "bold",
            color: "#000"
          }
        }
      }
    },
    accessibility: {
    enabled: false
  },
    series: [
      { name: "Calidad de hábitat (0–1)", data: [0.55], color: "#b4322e" },
      { name: "Almacenamiento de carbono (Ton/ha)", data: [2.06], color: "#104f57" },
      { name: "Mitigación del calor (°C)", data: [0.78], color: "#9acd8b" }
    ]
  });

});
