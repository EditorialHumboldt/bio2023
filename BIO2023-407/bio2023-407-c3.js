document.addEventListener("DOMContentLoaded", function() {
    function setupMap(mapId) {
        const filterContainer = document.getElementById(`${mapId}-filters`);
        const contentContainer = document.getElementById(`${mapId}-content`);

        if (!filterContainer || !contentContainer) {
            console.error(`No se encontraron los contenedores para ${mapId}`);
            return;
        }

        // Buscar todos los checkboxes dentro del contenedor de filtros
        filterContainer.querySelectorAll(`input[type="checkbox"]`).forEach(checkbox => {
            const layerId = checkbox.id;
            const img = document.getElementById(`img-${layerId}`);

            if (!img) {
                console.warn(`No se encontró la imagen para ${layerId}`);
                return;
            }

            // Evento para mostrar/ocultar la imagen
            checkbox.addEventListener("change", function() {
                img.style.opacity = this.checked ? "1" : "0";
            });
        });
    }

    // Configurar todos los mapas en la página
    document.querySelectorAll("[id^=bio2023-layerMap]").forEach(mapElement => {
        setupMap(mapElement.id.replace("-filters", "").replace("-content", ""));
    });
});


