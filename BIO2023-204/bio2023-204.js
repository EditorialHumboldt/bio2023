//https://reporte.humboldt.org.co/assets/datasets/2023/2/204/bio2023-204-charts.json
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://reporte.humboldt.org.co/assets/datasets/2023/2/204/bio2023-204-charts.json")
    .then((response) => response.json())
    .then((data) => {
      // Gráfico 1
      const chartData = data.chart_1;
      const width = 300,
        height = 600;

      const svg = d3
        .select("#bio2023-204-chart-1")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      const scaleSize = d3
        .scaleSqrt()
        .domain([2, d3.max(chartData, (d) => d.percentage)])
        .range([1, 100]);

      const yScale = d3
        .scalePoint()
        .domain(chartData.map((d) => d.category))
        .range([50, height - 150])
        .padding(1);

      svg
        .selectAll(".line")
        .data(chartData)
        .enter()
        .append("line")
        .attr("class", "line")
        .attr("x1", 50)
        .attr("x2", width - 50)
        .attr("y1", (d) => yScale(d.category))
        .attr("y2", (d) => yScale(d.category));

      const bubbles = svg
        .selectAll("circle")
        .data(chartData)
        .enter()
        .append("circle")
        .attr("cx", width / 2)
        .attr("cy", (d) => yScale(d.category))
        .attr("r", 0)
        .attr("fill", (d) => d.color)
        .attr("opacity", 0.8)
        .transition()
        .duration(1000)
        .attr("r", (d) => scaleSize(d.percentage));

      svg
        .selectAll(".label")
        .data(chartData)
        .enter()
        .append("text")
        .attr("class", "label")

        .attr("x", 0)
        .attr("y", (d) => yScale(d.category) - 10)
        .style("fill", "black")
        .style("font-weight", "bold")
        .text((d) => `${d.percentage}%`);

      svg
        .selectAll(".category-label")
        .data(chartData)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", 0)
        .attr("y", (d) => yScale(d.category) + 15)
        .style("fill", "black")
        .text((d) => d.category);

      svg
        .selectAll(".km-label")
        .data(chartData)
        .enter()
        .append("text")
        .attr("class", "label")
        .attr("x", width)
        .attr("y", (d) => yScale(d.category))
        .attr("dy", "0.3em")
        .style("fill", "black")
        .style("text-anchor", "end")
        .text((d) => d.km);

      svg
        .append("text")
        .attr("x", 0)
        .attr("y", 20)
        .style("font-weight", "bold")
        .text("Probabilidad");

      svg
        .append("text")
        .attr("x", width) //width - 100
        .attr("y", 20)
        .style("font-weight", "bold")
        .style("text-anchor", "end")
        .text("Kilómetros");

      // Gráfico 2
      const sunburstData = data.chart_2;

      const width2 = 700,
        height2 = 700;
      const radius = Math.min(width2, height2) / 2;

      const svg2 = d3
        .select("#bio2023-204-chart-2")
        .append("svg")
        .attr("width", width2)
        .attr("height", height2)
        .append("g")
        .attr("transform", `translate(${width2 / 2},${height2 / 2})`);

      const partition = d3.partition().size([2 * Math.PI, radius]);

      const root = d3
      .hierarchy(sunburstData)
      .sum((d) => Math.max(d.percentage, 1)); 

      partition(root);

      const arc = d3
        .arc()
        .startAngle((d) => d.x0)
        .endAngle((d) => d.x1)
        .innerRadius((d) => d.y0)
        .outerRadius((d) => d.y1);

      const tooltip = d3
        .select("#bio2023-204-chart-2")
        .append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.75)")
        .style("color", "#fff")
        .style("padding", "5px 10px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("width", "auto")
        .style("pointer-events", "none");

      const chart2Container = document.querySelector("#bio2023-204-chart-2");
      

      svg2
        .selectAll("path")
        .data(root.descendants().slice(1))
        .enter()
        .append("path")
        .attr("d", arc)
        .style("opacity", 0.8)
        .style("fill", (d) => d.data.color)
        .style("stroke", "#fff")

        .on("mouseover", function (event, d) {
          console.log("d", d);
          tooltip
            .style("visibility", "visible")

            .text(`${d.data.name}: ${d.data.percentage}%`);

          d3.select(this).style("opacity", 0.6);
        })
        .on("mousemove", function (event) {
          const chart2ContainerRect = chart2Container.getBoundingClientRect();

          tooltip

            .style("top", event.clientY - chart2ContainerRect.top + "px")
            .style("left", event.clientX - chart2ContainerRect.left + "px");
        })
        .on("mouseout", function () {
          tooltip.style("visibility", "hidden");
          d3.select(this).style("opacity", 0.8);
        });

      svg2
        .selectAll(".category-icon")
        .data(root.descendants().filter((d) => d.depth === 1))
        .enter()
        .append("image")
        .attr("xlink:href", (d) => d.data.icon)
        .attr("width", 40)
        .attr("height", 40)
        .attr("x", (d) => arc.centroid(d)[0] - 20)
        .attr("y", (d) => arc.centroid(d)[1] - 20)
        .style("pointer-events", "none");

      // Gráfico 3 y 4
      const barChartDataNT = data.chart_3;
      const barChartDataVU = data.chart_4;

      const tooltipBars = d3
        .select("#bio2023-204-bars")
        .append("div")
        .style("position", "absolute")
        .style("background", "rgba(0,0,0,0.75)")
        .style("color", "#fff")
        .style("padding", "5px 10px")
        .style("border-radius", "5px")
        .style("visibility", "hidden")
        .style("width", "auto")
        .style("pointer-events", "none");

      const chartBarsContainer = document.querySelector("#bio2023-204-bars");
      
      

      function createBarChart(chartData, chartId, color) {
        const width = 500,
          height = chartData.length * 50;

        const svg = d3
          .select(chartId)
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        const xScale = d3
          .scaleLinear()
          .domain([0, 60])
          .range([0, width - 180]);

        const yScale = d3
          .scaleBand()
          .domain(chartData.map((d) => d.nombre))
          .range([0, height])
          .padding(0.2);

        svg
          .selectAll("rect")
          .data(chartData)
          .enter()
          .append("rect")
          .attr("x", 190)
          .attr("y", (d) => yScale(d.nombre))
          .attr("width", (d) => xScale(d.registros))
          .attr("height", yScale.bandwidth())
          .attr("fill", color)
          //
          .on("mouseover", function (event, d) {
            tooltipBars
              .style("visibility", "visible")
              .html(
                `<strong>${d.nombre_comun}</strong><br><em>${d.nombre}</em><br>Clase: ${d.clase}<br>Registros: ${d.registros}`
              );
            d3.select(this).style("opacity", 0.7);
          })
          .on("mousemove", function (event) {
            
            const chartBarsContainerRect = chartBarsContainer.getBoundingClientRect();

            tooltipBars

              //
              .style("top", event.clientY - chartBarsContainerRect.top + "px")
              .style(
                "left",
                event.clientX - chartBarsContainerRect.left + "px"
              );
          })
          
          .on("mouseout", function () {
            tooltipBars.style("visibility", "hidden");
            d3.select(this).style("opacity", 1);
          });

        svg
          .selectAll(".text-registros")
          .data(chartData)
          .enter()
          .append("text")
          .attr("class", "text-registros")
          .attr("x", (d) => 195 + xScale(d.registros))
          .attr("y", (d) => yScale(d.nombre) + yScale.bandwidth() / 2)
          .attr("dy", "0.35em")
          .style("fill", "black")
          .style("font-weight", "bold")
          .text((d) => d.registros);

        svg
          .selectAll(".icon")
          .data(chartData)
          .enter()
          .append("image")
          .attr("xlink:href", (d) => d.icon)
          .attr("width", 30)
          .attr("height", 30)
          .attr("x", 150)
          .attr("y", (d) => yScale(d.nombre) + yScale.bandwidth() / 4);

        svg
          .selectAll(".text-nombres")
          .data(chartData)
          .enter()
          .append("text")
          .attr("class", "text-nombres")
          .attr("x", 0)
          .attr("y", (d) => yScale(d.nombre) + yScale.bandwidth() / 3)
          .attr("dy", "0.35em")
          .style("fill", "black")
          .style("font-size", "12px")
          .append("tspan")
          .style("font-weight", "bold")
          .text((d) => d.nombre_comun)
          .append("tspan")
          .attr("x", 0)
          .attr("dy", "1.2em")
          .style("font-style", "italic")
          .text((d) => d.nombre);
      }
      createBarChart(barChartDataNT, "#bio2023-204-chart-3", "#9ACD32"); // Verde para NT
      createBarChart(barChartDataVU, "#bio2023-204-chart-4", "#FFD700"); // Dorado para VU
    })
    .catch((error) => console.error("Error cargando los datos:", error));
});
