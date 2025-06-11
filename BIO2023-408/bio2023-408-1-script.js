document.addEventListener('DOMContentLoaded', function() {
    
        /* Diccionario rápido para los nombres que mostraremos en los tooltips  */
        const tipoNombre = { T1: 'Tipo 1', T2: 'Tipo 2', T3: 'Tipo 3' };

        /* --- Configuración del diagrama ------------------------------------- */
        Highcharts.chart('vennChart', {
            chart: { type: 'venn', backgroundColor: 'transparent' },
            plotOptions: {
                venn: {
                    opacity: 0.9,
                    borderColor: '#ffffff',
                    borderWidth: 2 
                }
            },
            tooltip: {
                useHTML: true,
                borderRadius: 6,
                padding: 10,
                formatter() {
                    /* Si el punto representa UN solo conjunto ---------------------- */
                    if (this.point.sets.length === 1) {
                        return `<b>${this.point.name}</b><br>${this.point.desc}`;
                    }
                    /* Si el punto representa intersecciones ------------------------ */
                    const tipos = this.point.sets.map(s => tipoNombre[s]).join(' y ');
                    return `<b>Intersección</b><br>Intersección entre conflictos ${tipos}.`;
                }
            },

            title: { text: '' },
            credits: { enabled: false },

            series: [{
                /* Colores en el mismo orden que los puntos con UN solo conjunto   */
                colors: ['#EFC735', '#e54848', '#00b4c6', '#DE8F21', '#90AA16', '#9C53AE', '#832920'],

                data: [
                    /* Conjuntos individuales -------------------------------------- */
                    { sets: ['T1'], name: 'Tipo 1 (T1)', value: 3, desc: 'Conflictos derivados del uso y apropiación del territorio ancestral indígena para desarrollar actividades productivas' },
                    { sets: ['T2'], name: 'Tipo 2 (T2)', value: 3, desc: 'Conflictos asociados a la gestión y conservación de áreas protegidas' },
                    { sets: ['T3'], name: 'Tipo 3 (T3)', value: 3, desc: 'Conflictos derivados de la actividad petrolera' },

                    /* Intersecciones de dos conjuntos ----------------------------- */
                    { sets: ['T1', 'T2'], value: 1 },
                    { sets: ['T1', 'T3'], value: 1 },
                    { sets: ['T2', 'T3'], value: 1 },

                    /* Intersección triple ----------------------------------------- */
                    { sets: ['T1', 'T2', 'T3'], value: 1 }
                ]
            }]
        });
    
});