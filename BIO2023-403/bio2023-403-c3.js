document.addEventListener("DOMContentLoaded", function () {
    const botones = document.querySelectorAll(".valor-btn");
    const imagenMapa = document.getElementById("mapa-valor");

    if (botones.length > 0 && imagenMapa) {
      // Función para activar un botón y actualizar la imagen
      const activarBoton = (boton) => {
        botones.forEach(b => b.classList.remove("activo"));
        boton.classList.add("activo");
        const imagen = boton.getAttribute("data-imagen");
        imagenMapa.src = "https://reporte.humboldt.org.co/assets/img/2023/4/403/" + imagen;
      };

      // Activar el primero al cargar
      activarBoton(botones[0]);

      // Escuchar clics
      botones.forEach(btn => {
        btn.addEventListener("click", () => {
          activarBoton(btn);
        });
      });
    }
  });
 
