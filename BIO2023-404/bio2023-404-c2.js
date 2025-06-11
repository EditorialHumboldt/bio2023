const opcionesDonut = (titulo, datos) => ({
  chart: {
    type: "pie",
    backgroundColor: "transparent"
  },
  title: {
    text: titulo,
    align: "center",
    verticalAlign: "middle",
    x: -70,
    y: 0, // Ajusta según se necesite
    style: {
      fontSize: "18px",
      fontWeight: "bold"
    }
  },
  accessibility: {
    enabled: false
  },
  legend: {
    align: "right",
    verticalAlign: "middle",
    layout: "vertical",
    itemStyle: {
      fontWeight: "normal",
      fontSize: "13px"
    }
  },
  plotOptions: {
    pie: {
      innerSize: "60%",
      dataLabels: {
        enabled: false
      },
      showInLegend: true
    }
  },
  tooltip: {
    pointFormat: "<b>{point.y}%</b>"
  },
  series: [{
    name: titulo,
    data: datos
  }]
});

// Datos para los Grupos
const datosGrupos = [
  { name: "Tetras", y: 50.6, color: "#8064a2" },
  { name: "Cuchas", y: 11.7, color: "#c0504d" },
  { name: "Corredoras", y: 9.7, color: "#5f7530" },
  { name: "Otocinclos", y: 9.2, color: "#4bacc6" },
  { name: "Estrigatas", y: 4.6, color: "#4d3b62" },
  { name: "Escalares", y: 2.4, color: "#f79646" },
  { name: "Cíclidos", y: 2.2, color: "#6610f2" },
  { name: "Sáuaras", y: 1.9, color: "#2c4d75" },
  { name: "Monedas y gatos", y: 1.8, color: "#9bbb59" },
  { name: "Otras", y: 5.9, color: "#276a7c" }
];

// Datos para las Especies
const datosEspecies = [
  { name: "Paracheirodon axelrodi", y: 50.2, color: "#8064a2" },
  { name: "Paracheirodon innesi", y: 13.9, color: "#c0504d" },
  { name: "Otocinclus vittatus", y: 9.9, color: "#5f7530" },
  { name: "Corydoras habrosus", y: 5.6, color: "#4bacc6" },
  { name: "Thoracocharax stellatus", y: 5.2, color: "#4d3b62" },
  { name: "Hyphessobrycon saizi", y: 4.0, color: "#f79646" },
  { name: "Pterophyllum altum", y: 3.8, color: "#6610f2" },
  { name: "Axelrodia riesei", y: 3.7, color: "#2c4d75" },
  { name: "Panaqolus maccus", y: 3.6, color: "#9bbb59" }
];

// Renderiza las gráficas
Highcharts.chart("graficaGrupos", opcionesDonut("Grupos", datosGrupos));
Highcharts.chart("graficaEspecies", opcionesDonut("Especies", datosEspecies));

// ----------------------------------------------------------------------------pop--------------------------

document.getElementById("btnInfo").addEventListener("click", function () {
  document.getElementById("popup").classList.remove("oculto");
});

document.querySelector(".popup .cerrar").addEventListener("click", function () {
  document.getElementById("popup").classList.add("oculto");
});

// Cerrar si se da clic fuera del contenido
document.getElementById("popup").addEventListener("click", function (e) {
  if (e.target.id === "popup") {
    document.getElementById("popup").classList.add("oculto");
  }
});