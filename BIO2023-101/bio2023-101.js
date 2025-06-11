document.addEventListener("DOMContentLoaded", function () {
  function drawBubbleChart(chartId, chartData) {
    const container = document.getElementById(chartId);
    if (!container) return; // Si no existe el div, no hace nada

    const tooltipLabel = chartId === "chart_1" ? "Observaciones" : "Especies";
    const width = 700,
      height = 700;
    const minCircleSize = 8;

    //
    

    // Paleta de colores
    const categoryColors = {
      Animales: "#F4A200",
      Vertebrados: "#F4A200",
      Invertebrados: "#e9473d",
      Plantas: "#98C21F",
      Gimnospermas: "#98C21F",
      Líquenes: "#872C88",
      Hongos: "#6dc4c4",
      Chromista: "#DA8AC3",
      Protozoos: "#9277B3",
      Virus: "#2C5CA8",
      Bacterias: "#e9473d",
      default: "none",
    };

    container.innerHTML = ""; // Limpiar contenido previo
    const svg = d3
      .select(`#${chartId}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("style", "max-width: 100%; height: auto;");

    const tooltip = d3
      .select(`#${chartId}`)
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.8)")
      .style("color", "white")
      .style("padding", "8px")
      .style("border-radius", "5px")
      .style("display", "none");

    const root = d3
      .hierarchy(chartData)
      .sum((d) => d.value || 1)
      .sort((a, b) => b.value - a.value);

    d3.pack().size([width, height]).padding(40)(root);

    function getNodeColor(d) {
      if (categoryColors[d.data.name]) {
        return categoryColors[d.data.name]; // Usa color predefinido si existe
      }
      if (d.parent) {
        return getNodeColor(d.parent); // Hereda color del padre
      }
      return categoryColors["default"];
    }

    const g = svg.append("g");

    const nodes = g
      .selectAll("circle")
      .data(root.descendants())
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", 0)
      .style("fill", (d) => getNodeColor(d))
      .on("mouseover", function (event, d) {
        d3.select(this).style("stroke-width", "4px").style("stroke", "white");

        tooltip
          .style("display", "block")
          .html(
            `<strong>${d.data.name}</strong><br>${tooltipLabel}: ${
              d.data.value || 0
            }`
          )
          .style("left", `${event.offsetX + 10}px`)
          .style("top", `${event.offsetY - 10}px`);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.offsetX + 10}px`)
          .style("top", `${event.offsetY - 10}px`);
      })
      .on("mouseout", function () {
        d3.select(this).style("stroke-width", "1px");
        tooltip.style("display", "none");
      });

    nodes
      .transition()
      .duration(1000)
      .attr("r", (d) => Math.max(minCircleSize, d.r));

    const fontScale = d3
      .scaleLinear()
      .domain([minCircleSize, width / 3])
      .range([12, 20]);

    const labels = g
      .selectAll("text")
      .data(root.descendants())
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y - d.r - 15)
      .text((d) => (d.depth > 0 ? d.data.name : ""))
      .style("font-size", (d) => `${fontScale(d.r)}px`)
      .style("opacity", 0);

    labels
      .transition()
      .delay(500)
      .duration(500)
      .style("opacity", (d) => (d.r > 15 ? 1 : 0));
  }
  function drawChart3(chartId, chartData) {
    const container = document.getElementById(chartId);
    if (!container) return;
    const width = 500,
      height = 400;
    const margin = { top: 50, right: 30, bottom: 50, left: 100 };

    container.innerHTML = "";

    const svg = d3
      .select(`#${chartId}`)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const tooltip = d3
      .select(`#${chartId}`)
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.8)")
      .style("color", "white")
      .style("padding", "8px")
      .style("border-radius", "5px")
      .style("width", "200px")
      .style("display", "none");

    const categories = chartData.categories.reverse();
    const groups = chartData.groups;

    const colorScale = {
      Animales: "#51b9d1",
      Plantas: "#a2c119",
      Hongos: "#f4a288",
      "Total Orinoquia": "#df84b5",
      "Total Nacional": "#5ebca4",
    };

    const categoryLabels = {
      CR: { text: "En peligro crítico", color: "#b71c1c", short: 'CR' }, // Rojo oscuro
      EN: { text: "En peligro", color: "#e67e22", short: 'EN' }, // Naranja
      VU: { text: "Vulnerable", color: "#f1c40f", short: 'VU' }, // Amarillo
      "Total Nacional": { text: "Total Nacional", color: null }, // Verde
      "Total Orinoquia": { text: "Total Orinoquia", color: null }, // Morado
      
  };

    const xScale = d3
      .scalePoint()
      .domain(groups)
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scalePoint()
      .domain(categories)
      .range([0, height])
      .padding(0.5);

    const sizeScale = d3
      .scaleSqrt()
      .domain([1, d3.max(chartData.data, (d) => d.value)])
      .range([5, 75]);

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));
    
    //svg.append("g").call(d3.axisLeft(yScale));
    const yAxis = svg.append("g").call(d3.axisLeft(yScale).tickFormat(d => ""));
    svg.selectAll(".custom-y-label")
    .data(categories)
    .enter()
    .append("g")
    .attr("class", "custom-y-label")
    .attr("transform", d => `translate(-50, ${yScale(d)})`) // Posición del texto
    .each(function(d) {
        const group = d3.select(this);
        const labelInfo = categoryLabels[d];

        if (labelInfo.color) {
            group.append("circle")
                .attr("cx", 0)
                .attr("cy", 0)
                .attr("r", 15) // Tamaño del círculo
                .style("fill", labelInfo.color);

            group.append("text")
                .attr("x", 0)
                .attr("y", 5)
                .attr("text-anchor", "middle")
                .style("fill", "white")
                .style("font-size", "12px")
                .style("font-weight", "bold")
                .text(labelInfo.short);
        } else {
            group.append("text")
                .attr("x", 12)
                .attr("y", 5)
                .attr("text-anchor", "end")
                .style("fill", "black")
                .style("font-size", "12px")
                .style("font-weight", "bold")
                .text(d);
        }
    });


    /**/

    const bubbles = svg
      .selectAll(".bubble")
      .data(chartData.data)
      .enter()
      .filter(
        (d) =>
          !(
            d.category === "Total Nacional" &&
            (d.group === "Total Orinoquia" || d.group === "Total Nacional")
          )
      )
      .append("circle")
      .attr("class", "bubble")
      .attr("cx", (d) => xScale(d.group))
      .attr("cy", (d) => yScale(d.category))
      .attr("r", 0)
      .style("fill", (d) => colorScale[d.group])
      .style("opacity", 0.8)
      .on("mouseover", function (event, d) {
        d3.select(this).style("stroke", "white").style("stroke-width", 2);

        const description = `${d.group} - ${categoryLabels[d.category].text}: <strong>${d.value}</strong>`;

        tooltip
          .style("display", "block")
          .html(`${description}`)
          .style("left", `${event.offsetX + 10}px`)
          .style("top", `${event.offsetY - 10}px`);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.offsetX + 10}px`)
          .style("top", `${event.offsetY - 10}px`);
      })
      .on("mouseout", function () {
        d3.select(this).style("stroke", "none");
        tooltip.style("display", "none");
      });

    bubbles
      .transition()
      .duration(1000)
      .attr("r", (d) => sizeScale(d.value));

    svg
      .selectAll(".label")
      .data(chartData.data)
      .enter()
      .filter(
        (d) =>
          !(
            d.category === "Total Nacional" &&
            (d.group === "Total Orinoquia" || d.group === "Total Nacional")
          )
      )
      .append("text")
      .attr("x", (d) => xScale(d.group))
      .attr("y", (d) => yScale(d.category))
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .style("fill", "black")
      .style("font-size", (d) => (sizeScale(d.value) > 15 ? "12px" : "9px"))
      .style("font-weight", "bold")
      .text((d) => d.value);
  }
  function drawChart4(chartId, chartData) {
    const width = 400,
      height = 400,
      radius = Math.min(width, height) / 2;

    const colorScale = d3
      .scaleOrdinal()
      .domain(chartData.data.map((d) => d.category))
      .range([
        "#E15759",
        "#4E79A7",
        "#76B7B2",
        "#F28E2B",
        "#59A14F",
        "#EDC948",
        "#B07AA1",
      ]);

    const svg = d3
      .select(`#${chartId}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height + 50) // Espacio extra para la leyenda
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d.value);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.6) // Grosor del donut
      .outerRadius(radius * 0.9);

    const data_ready = pie(chartData.data);

    const tooltip = d3
      .select(`#${chartId}`)
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("background", "rgba(0,0,0,0.8)")
      .style("color", "white")
      .style("padding", "8px")
      .style("border-radius", "5px")
      .style("display", "none")
      .style("width", "200px")
      .style("word-wrap", "break-word");

    // Animación de entrada
    const path = svg
      .selectAll("path")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("fill", (d) => colorScale(d.data.category))
      .attr("d", arc)
      .each(function (d) {
        this._current = d;
      }) // Guarda estado inicial
      .style("opacity", 0.9)
      .on("mouseover", function (event, d) {
        d3.select(this).style("opacity", 1);
        tooltip
          .style("display", "block")
          .html(
            `<strong>${d.data.category}:</strong> ${
              d.data.value
            } socios (${Math.round((d.data.value / chartData.total) * 100)}%)`
          )
          .style("left", `${event.offsetX + 10}px`)
          .style("top", `${event.offsetY - 10}px`);
      })
      .on("mousemove", function (event) {
        tooltip
          .style("left", `${event.offsetX + 10}px`)
          .style("top", `${event.offsetY - 10}px`);
      })
      .on("mouseout", function () {
        d3.select(this).style("opacity", 0.9);
        tooltip.style("display", "none");
      });

    path
      .transition()
      .duration(1000)
      .attrTween("d", function (d) {
        const i = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t) {
          return arc(i(t));
        };
      });

    // Agregar texto en el centro del donut
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "-10px")
      .style("font-size", "18px")
      .style("font-weight", "bold")
      .text("Total");

    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "15px")
      .style("font-size", "24px")
      .style("font-weight", "bold")
      .text(chartData.total);

    // Agregar etiquetas de porcentaje
    const textArc = d3
      .arc()
      .innerRadius(radius * 1.02)
      .outerRadius(radius * 1.02);

    svg
      .selectAll("text.label")
      .data(data_ready)
      .enter()
      .append("text")
      .attr("transform", (d) => `translate(${textArc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("dy", "5px")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .style("fill", "#000")
      .text((d) => `${Math.round((d.data.value / chartData.total) * 100)}%`);

    // Crear la leyenda
    const legend = d3
      .select(`#${chartId}`)
      .append("div")
      .attr("class", "legend")
      .style("display", "flex")
      .style("flex-wrap", "wrap")
      .style("justify-content", "center")
      .style("margin-top", "10px");

    chartData.data.forEach((d) => {
      const legendItem = legend
        .append("div")
        .style("display", "flex")
        .style("align-items", "center")
        .style("margin", "5px 10px");

      legendItem
        .append("div")
        .style("width", "12px")
        .style("height", "12px")
        .style("background-color", colorScale(d.category))
        .style("margin-right", "5px");

      legendItem.append("span").style("font-size", "12px").text(d.category);
    });
  }

  // Para prueba local bio2023-101-charts.json
  // Producción https://reporte.humboldt.org.co/assets/datasets/2023/1/101/bio2023-101-charts.json
  d3.json(
    "https://reporte.humboldt.org.co/assets/datasets/2023/1/101/bio2023-101-charts.json"
  ).then((data) => {
    drawBubbleChart("chart_1", data.chart_1);
    drawBubbleChart("chart_2", data.chart_2);
    drawChart3("chart_3", data.chart_3);
    drawChart4("chart_4", data.chart_4);
  });
  
/*
  let chartsLoaded = {
    chart_1: false,
    chart_2: false,
    chart_3: false,
    chart_4: false,
  };

  // Esperar a que fullPage.js esté listo
  if (typeof fullpage_api !== "undefined") {
    fullpage_api.on("afterLoad", function (section) {
        console.log(section.index);
      let chartId = `chart_${section.index + 1}`;
      if (!chartsLoaded[chartId]) {
        loadChart(chartId);
        chartsLoaded[chartId] = true; // Asegura que solo se cargue una vez
      }
    });
  } else {
    console.warn("fullPage.js no está inicializado todavía.");
  }
  


  function loadChart(chartId) {
    d3.json("https://reporte.humboldt.org.co/assets/datasets/2023/1/101/bio2023-101-charts.json").then((data) => {
      if (chartId === "chart_1") drawBubbleChart("chart_1", data.chart_1);
      if (chartId === "chart_2") drawBubbleChart("chart_2", data.chart_2);
      if (chartId === "chart_3") drawChart3("chart_3", data.chart_3);
      if (chartId === "chart_4") drawChart4("chart_4", data.chart_4);
    });
  }*/
});
