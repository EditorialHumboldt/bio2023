const info = {
    "socios-clave": `
      <strong>Directos:</strong>
      <ul>
        <li>Productores</li>
        <li>Asociaciones de productores</li>
        <li>Posibles clientes</li>
        <li>Fondos de inversión privada</li>
      </ul>
      <strong>Otros indirectos:</strong>
      <ul>
        <li>Finagro</li>
        <li>Sena</li>
        <li>Uniminuto</li>
        <li>Agrosavia</li>
      </ul>
    `,
    "actividades-clave": `
      <ul>
        <li>Estandarizar procesos para garantizar calidad unificada</li>
        <li>Unificar procesos en cultivo y poscosecha</li>
        <li>Capacitación y asistencia técnica a productores</li>
      </ul>
    `,
    "recursos-clave": `
      <ul>
        <li>Cultivos</li>
        <li>Clones mejorados</li>
        <li>Planta de procesamiento</li>
        <li>Personal humano capacitado</li>
        <li>Marca región</li>
        <li>Página web para comunicación</li>
      </ul>
    `,
    "propuestas-valor": `
      <ul>
        <li>Productos derivados del marañón</li>
        <li>Crear valor a través de denominaciones de origen y características diferenciadoras del marañón en Vichada</li>
        <li>Marañón como producto saludable, de alta calidad, que aportan al desarrollo de una región</li>
      </ul>
    `,
    "relaciones-clientes": `
      <p><strong>Segmento 1:</strong></p>
      <ul>
        <li>Relación personalizada con retroalimentación de producto y entendimiento de necesidades</li>
      </ul>
      <p><strong>Segmento 2:</strong></p>
      <ul>
        <li>Relación automatizada con el consumidor final del producto</li>
      </ul>
    `,
    "distribucion": `
      <p><strong>Segmento 1:</strong></p>
      <ul>
        <li>Canal directo de venta a restaurantes</li>
      </ul>
      <p><strong>Segmento 2:</strong></p>
      <ul>
        <li>Tiendas, supermercados y tiendas de artesanías en Puerto Carreño</li>
      </ul>
    `,
    "segmentos-clientes": `
      <p><strong>Segmento 1:</strong></p>
      <ul>
        <li>Restaurantes, colegios y hoteles</li>
      </ul>
      <p><strong>Segmento 2:</strong></p>
      <ul>
        <li>Mercado local, Puerto Carreño y turistas</li>
      </ul>
    `,
    "estructura-costos": `
      <p><strong>Actualmente:</strong></p>
      <ul>
        <li>Producir 1kg de almendra cuesta entre $20.000 y $25.000 pesos</li>
      </ul>
      <p><strong>Con tecnificación:</strong></p>
      <ul>
        <li>Producir 1kg de almendra cuesta entre $15.000 y $18.000 pesos</li>
      </ul>
    `,
    "fuentes-ingresos": `
      <p><strong>Actualmente (inicio de proyecto):</strong></p>
      <ul>
        <li>1kg de almendra se vende por entre $25.000 y $28.000 pesos</li>
      </ul>
      <p><strong>Área de mejora:</strong></p>
      <ul>
        <li>En algunos segmentos el kilogramo de almendra se puede llegar a vender por entre $32.000 y $38.000 pesos</li>
      </ul>
    `
  };
const icons = {
    "socios-clave": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-socios-clave.png",
    "actividades-clave": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-actividades-clave.png",
    "recursos-clave": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-recursos-clave.png",
    "propuestas-valor": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-propuestas-valor.png",
    "relaciones-clientes": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-relaciones-cliente.png",
    "distribucion": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-distribucion.png",
    "segmentos-clientes": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-segmento-cliente.png",
    "estructura-costos": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-estructura-costos.png",
    "fuentes-ingresos": "https://reporte.humboldt.org.co/assets/img/2023/3/304/bio2023-304-icono-fuentes-ingreso.png"
  };
document.querySelectorAll(".block").forEach(block => {
    block.addEventListener("click", () => {
      const key = block.dataset.key;
      document.getElementById("modal-title").textContent = block.textContent.trim();
      document.getElementById("modal-content").innerHTML = info[key] || "<p>Información no disponible.</p>";
      document.getElementById("modal-icon").src = icons[key] || "";
      document.getElementById("modal").style.display = "flex";
    });
  });

  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }

  document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") closeModal();
  });
