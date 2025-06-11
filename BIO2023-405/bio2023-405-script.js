document.addEventListener('DOMContentLoaded', function() {
    const tooltipData = {
        'zona-a': `<strong>A. Corredor Cocuy – Cinaruco</strong>
                 <ul>
                    <li>Nuevas áreas y efectividad de manejo</li>
                    <li>Monitoreo de especies</li>
                    <li>Acuerdos de conservación y de restauración</li>
                    <li>Ordenamiento</li>
                    <li>Manejo de corredores especies amenazadas (jaguar y tapir)</li>
                 </ul>`,
        'zona-b': `<strong>B. Corredor Bita – Tuparro</strong>
                 <ul>
                    <li>Fortalecimiento de instancias de gobernanza</li>
                    <li>Monitoreo de especies</li>
                    <li>Acuerdos de conservación</li>
                    <li>Conectividad</li>
                    <li>Articulación instrumentos de planificación</li>
                    <li>Manejo de corredores de especies amenazadas (jaguar y tapir)</li>
                 </ul>`,
        'zona-c': `<strong>C. Río Orinoco – Sitio Ramsar EFI</strong>
                 <ul>
                    <li>Monitoreo de delfines de río y otras especies</li>
                    <li>Implementación sitio Ramsar</li>
                    <li>Medios de vida sostenibles</li>
                    <li>Fortalecimiento de organizaciones indígenas</li>
                    <li>Fortalecimiento de instancias de gobernanza</li>
                 </ul>`,
        'zona-d': `<strong>D. Corredor Río Pauto</strong>
                 <ul>
                    <li>Nuevas áreas protegidas (RNSC)</li>
                    <li>Efectividad de manejo</li>
                    <li>Acuerdos de conservación y de restauración</li>
                 </ul>`,
        'zona-e': `<strong>E. Cumaribo y Manacacías</strong>
                 <ul><li>Nuevas áreas protegidas</li></ul>`,
        'zona-f': `<strong>F. Corredor PNN Chingaza – PNN Sumapaz (AMEM)</strong>
                 <ul>
                    <li>Efectividad de manejo</li>
                    <li>Monitoreo oso andino</li>
                    <li>Reducción frontera agrícola</li>
                    <li>Restauración</li>
                    <li>Trabajo con campesinos: medios de vida sostenibles, resolución de conflictos de uso, derechos de tenencia y contribuciones a la paz ambiental</li>
                 </ul>`,
        'zona-g': `<strong>G. Corredor de Jaguar</strong>
                 <ul>
                    <li>Monitoreo comunitario de BD</li>
                    <li>Medios de vida sostenibles, turismo de naturaleza</li>
                 </ul>`
    };
    
    const tooltip = document.getElementById('tooltip');
    const zonas = document.querySelectorAll('#zonas .zonaInteractiva');
    
    zonas.forEach(z => {
        z.addEventListener('mouseenter', e => {
            z.classList.add('zona-hover');
            tooltip.innerHTML = tooltipData[z.id] || '';
            tooltip.style.opacity = '1';
        });
        z.addEventListener('mousemove', e => {
            const offset = 20;
            const mapaRect = document.getElementById('mapa405').getBoundingClientRect();
            const posX = e.clientX - mapaRect.left + offset;
            const posY = e.clientY - mapaRect.top + offset;
            tooltip.style.left = posX + 'px';
            tooltip.style.top = posY + 'px';
        });
        z.addEventListener('mouseleave', () => {
            z.classList.remove('zona-hover');
            tooltip.style.opacity = '0';
        });
    });
});
