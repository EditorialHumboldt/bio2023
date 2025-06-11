document.addEventListener("DOMContentLoaded", () => {
  // Paleta (recorre colores desde el chart del mock-up)
  const colors = [
    "#59B4AF", // Autoridades ambientales
    "#25A9D3", // Comunidades campesinas
    "#0E5A64", // Autoridades locales
    "#203064", // Comunidades indígenas
    "#CFA5C9", // Comunidades locales
    "#6C5597", // Entidades de control
    "#EF6FA2", // Gob. municipales y deptos.
    "#D14C57", // Gremios y empresas
    "#EC8B70", // Organizaciones soc. y amb.
    "#F4A65F", // Población migrante
    "#F4CF46", // Sociedad civil
    "#8ABF4F", // Actores armados
  ];

  Highcharts.chart("dona-actores", {
    chart: { type: "pie", spacingLeft: 20, backgroundColor: "transparent" },
    title: null,
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      itemMarginBottom: 8,
      symbolRadius: 4,
      symbolHeight: 14,
      symbolWidth: 18,
    },

    accessibility: {
      point: { valueSuffix: " participaciones" },
    },

    tooltip: {
      pointFormat:
        "<b>{point.y}</b> participaciones<br>(" +
        "{point.percentage:.1f}% del total)",
    },

    plotOptions: {
      pie: {
        innerSize: "60%", // grosor de la dona
        colors,
        borderColor: null,
        dataLabels: { enabled: false },
        cursor: "pointer",
        showInLegend: true
      },
    },

    series: [
      {
        name: "Participaciones",
        colorByPoint: true,
        data: [
          { name: "Comunidades campesinas", y: 19 },
          { name: "Gremios y empresas", y: 17 },
          { name: "Autoridades ambientales", y: 13 },
          { name: "Comunidades indígenas", y: 13 },
          { name: "Sociedad civil", y: 5 },
          { name: "Organizaciones sociales y ambientales y ONG", y: 5 },
          { name: "Actores armados", y: 4 },
          { name: "Comunidades locales", y: 4 },
          { name: "Entidades de control", y: 3 },
          { name: "Autoridades locales", y: 1 },
          { name: "Gobiernos municipales y departamentales", y: 1 },
          { name: "Población migrante", y: 1 },
        ],
      },
    ],
  });
});
