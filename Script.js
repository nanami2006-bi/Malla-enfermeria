// --- Evento que se ejecuta cuando todo el HTML está cargado ---
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Definición de Datos de la Malla Curricular ---
    // Se definen todos los ramos con un ID único, nombre, semestre y sus requisitos.
    // El ID es crucial para la lógica, no debe tener espacios ni tildes.
    const ramosData = [
        // Semestre 1
        { id: 'fundamentos-enfermeria', nombre: 'Fundamentos de enfermería', semestre: 1, requisitos: [] },
        { id: 'quimica-general-organica', nombre: 'Quimica general y organica', semestre: 1, requisitos: [] },
        { id: 'anatomia-humana', nombre: 'Anatomia humana', semestre: 1, requisitos: [] },
        { id: 'biologia-celular-genetica', nombre: 'Biologia celular y genetica', semestre: 1, requisitos: [] },
        { id: 'psicologica', nombre: 'Psicológica', semestre: 1, requisitos: [] },
        { id: 'transversal', nombre: 'Transversal', semestre: 1, requisitos: [] },
        { id: 'matematica', nombre: 'Matematica', semestre: 1, requisitos: [] },
        // Semestre 2
        { id: 'cuidados-basicos-enfermeria', nombre: 'Cuidados basicos de enfermeria', semestre: 2, requisitos: ['fundamentos-enfermeria'] },
        { id: 'bioquimica', nombre: 'Bioquimica', semestre: 2, requisitos: ['quimica-general-organica'] },
        { id: 'embriologia-histologia', nombre: 'Embriologia e histologia', semestre: 2, requisitos: [] },
        { id: 'microbiologia-parasitologia', nombre: 'Microbiologia y parasitologia', semestre: 2, requisitos: [] },
        { id: 'coreano', nombre: 'Coreano', semestre: 2, requisitos: [] },
        { id: 'socio-antropologia', nombre: 'Socio antropología', semestre: 2, requisitos: [] },
        { id: 'psicologia-comunitaria', nombre: 'Psicologia Comunitaria', semestre: 2, requisitos: ['psicologica'] },
        // Semestre 3
        { id: 'procesos-cuidados-1', nombre: 'Procesos y cuidados de enfermería I', semestre: 3, requisitos: ['cuidados-basicos-enfermeria'] },
        { id: 'salud-publica', nombre: 'Salud publica', semestre: 3, requisitos: [] },
        { id: 'farmacologia', nombre: 'Farmacología', semestre: 3, requisitos: ['bioquimica'] },
        { id: 'fisiologia', nombre: 'Fisiología', semestre: 3, requisitos: ['embriologia-histologia'] },
        { id: 'bioestadistica', nombre: 'Bioestadística', semestre: 3, requisitos: ['matematica'] },
        { id: 'ingles-1', nombre: 'Ingles I', semestre: 3, requisitos: [] },
        { id: 'electivo', nombre: 'Electivo', semestre: 3, requisitos: [] },
        // Semestre 4
        { id: 'procesos-cuidados-2', nombre: 'Procesos y cuidados de enfermería 2', semestre: 4, requisitos: ['procesos-cuidados-1'] },
        { id: 'farmacologia-aplicada', nombre: 'Farmacologia aplicada en la enfermeria', semestre: 4, requisitos: ['farmacologia'] },
        { id: 'enfermeria-comunitaria-1', nombre: 'Enfermeria en salud familiar y Comunitaria I', semestre: 4, requisitos: ['socio-antropologia'] },
        { id: 'fisiopatologia', nombre: 'Fisiopatología', semestre: 4, requisitos: ['fisiologia'] },
        { id: 'gestion-salud', nombre: 'Gestion y administracion en salud', semestre: 4, requisitos: ['salud-publica'] },
        { id: 'ingles-2', nombre: 'Ingles 2', semestre: 4, requisitos: ['ingles-1'] },
        { id: 'curso-institucional', nombre: 'Curso institucional', semestre: 4, requisitos: [] },
        // Semestre 5
        { id: 'enfermeria-mujer', nombre: 'Enfermeria en Salud de la Mujer', semestre: 5, requisitos: ['procesos-cuidados-2'] },
        { id: 'enfermeria-comunitaria-2', nombre: 'Enfermería en Salud familiar y Comunitaria II', semestre: 5, requisitos: ['enfermeria-comunitaria-1'] },
        { id: 'enfermeria-medico-quirurgico-1', nombre: 'Enfermeria en medico Quirúrgico', semestre: 5, requisitos: ['farmacologia-aplicada'] },
        { id: 'enfermeria-gerontologia-1', nombre: 'Enfermeria en gerontología y geriatría', semestre: 5, requisitos: [] },
        { id: 'gestion-servicios-1', nombre: 'Gestión y administracion en servicio de enfermeria I', semestre: 5, requisitos: ['gestion-salud'] },
        { id: 'interdisciplinar-as', nombre: 'Interdisciplinar A+S', semestre: 5, requisitos: [] },
        // Semestre 6
        { id: 'gestion-servicios-2', nombre: 'Gestión y administracion en servicios de enfermeria 2', semestre: 6, requisitos: ['gestion-servicios-1'] },
        { id: 'enfermeria-comunitaria-3', nombre: 'Enfermería en Salud familiar y Comunitaria II', semestre: 6, requisitos: [] }, // ID ajustado para ser único
        { id: 'enfermeria-medico-quirurgico-2', nombre: 'Enfermeria en medico Quirúrgico', semestre: 6, requisitos: [] }, // ID ajustado
        { id: 'enfermeria-gerontologia-2', nombre: 'Enfermeria en gerontología y geriatría', semestre: 6, requisitos: [] }, // ID ajustado
        { id: 'metodologia-investigacion', nombre: 'Metodologia de la investigacion', semestre: 6, requisitos: [] },
        { id: 'interdisciplinar', nombre: 'Interdisciplinar', semestre: 6, requisitos: [] },
        // Semestre 7
        { id: 'enfermeria-pediatria-1', nombre: 'Enfermeria en pediatria', semestre: 7, requisitos: [] },
        { id: 'gestion-servicios-3', nombre: 'Gestión y administracion en servicios de enfermeria 3', semestre: 7, requisitos: ['gestion-servicios-2'] },
        { id: 'enfermeria-urgencia-1', nombre: 'Enfermeria en urgencia', semestre: 7, requisitos: [] },
        { id: 'enfermeria-salud-mental-1', nombre: 'Enfermeria en Salud Mental 1', semestre: 7, requisitos: [] },
        { id: 'investigacion-enfermeria-1', nombre: 'Investigacion en enfermeria I', semestre: 7, requisitos: [] },
        { id: 'electivo-disciplinar', nombre: 'Electivo disciplinar', semestre: 7, requisitos: [] },
        // Semestre 8
        { id: 'enfermeria-pediatria-2', nombre: 'Enfermeria en pediatria', semestre: 8, requisitos: [] }, // ID ajustado
        { id: 'gestion-servicios-4', nombre: 'Gestión y administracion en servicios de enfermeria 3', semestre: 8, requisitos: ['gestion-servicios-2'] }, // ID y requisito ajustado
        { id: 'enfermeria-urgencia-2', nombre: 'Enfermeria en urgencia', semestre: 8, requisitos: [] }, // ID ajustado
        { id: 'enfermeria-salud-mental-2', nombre: 'Enfermeria en Salud Mental 2', semestre: 8, requisitos: ['enfermeria-salud-mental-1'] },
        { id: 'investigacion-enfermeria-2', nombre: 'Investigacion en enfermeria 2', semestre: 8, requisitos: ['investigacion-enfermeria-1'] },
        { id: 'electivo-disciplinar-2', nombre: 'Electivo disciplinar 2', semestre: 8, requisitos: ['electivo-disciplinar'] },
        // Semestres 9 y 10 (Internados)
        { id: 'internado-1-sem9', nombre: 'Internado enfermeria I', semestre: 9, requisitos: ['semestre_8_aprobado'] },
        { id: 'internado-2-sem9', nombre: 'Internado enfermeria 2', semestre: 9, requisitos: ['semestre_8_aprobado'] },
        { id: 'internado-1-sem10', nombre: 'Internado enfermeria I', semestre: 10, requisitos: ['semestre_8_aprobado'] },
        { id: 'internado-2-sem10', nombre: 'Internado enfermeria 2', semestre: 10, requisitos: ['semestre_8_aprobado'] },
    ];

    // --- 2. Estado de la Aplicación ---
    // Carga los ramos aprobados desde localStorage. Si no hay nada, empieza con un array vacío.
    // Usamos un Set para búsquedas más rápidas (O(1) en lugar de O(n)).
    const aprobados = new Set(JSON.parse(localStorage.getItem('ramosAprobados')) || []);

    // --- 3. Referencias a Elementos del DOM ---
    const mallaContainer = document.getElementById('malla-curricular-container');
    const modal = document.getElementById('modal-requisitos');
    const cerrarModalBtn = document.querySelector('.cerrar-modal');
    const mensajeRequisitos = document.getElementById('mensaje-requisitos');
    
    // --- 4. Funciones Principales ---

    /**
     * Guarda el conjunto de ramos aprobados en el localStorage del navegador.
     */
    const guardarEstado = () => {
        localStorage.setItem('ramosAprobados', JSON.stringify(Array.from(aprobados)));
    };

    /**
     * Genera dinámicamente el HTML de la malla curricular a partir de los datos.
     */
    const renderizarMalla = () => {
        mallaContainer.innerHTML = ''; // Limpia el contenedor
        const maxSemestre = Math.max(...ramosData.map(r => r.semestre));

        for (let i = 1; i <= maxSemestre; i++) {
            // Crea una columna por cada semestre
            const semestreCol = document.createElement('div');
            semestreCol.className = 'semestre-columna';
            semestreCol.innerHTML = `<h2>Semestre ${i}</h2>`;
            
            // Filtra los ramos que pertenecen a este semestre
            const ramosDelSemestre = ramosData.filter(ramo => ramo.semestre === i);
            
            ramosDelSemestre.forEach(ramo => {
                const ramoEl = document.createElement('div');
                ramoEl.className = 'ramo';
                ramoEl.dataset.id = ramo.id; // Asigna el ID único al elemento
                ramoEl.textContent = ramo.nombre;
                semestreCol.appendChild(ramoEl);
            });

            mallaContainer.appendChild(semestreCol);
        }
    };
    
    /**
     * Revisa si un ramo tiene todos sus requisitos cumplidos.
     * @param {string} ramoId - El ID del ramo a verificar.
     * @returns {{cumple: boolean, faltantes: string[]}} - Objeto que indica si se cumplen y qué requisitos faltan.
     */
    const verificarRequisitos = (ramoId) => {
        const ramo = ramosData.find(r => r.id === ramoId);
        if (!ramo) return { cumple: false, faltantes: [] };
        
        const faltantes = [];

        // Caso especial para internados que requieren todo el 8vo semestre
        if (ramo.requisitos.includes('semestre_8_aprobado')) {
            const ramosSemestre8 = ramosData.filter(r => r.semestre === 8).map(r => r.id);
            const todosAprobados = ramosSemestre8.every(idRamo => aprobados.has(idRamo));
            if (!todosAprobados) {
                faltantes.push('Completar todos los ramos del 8vo semestre');
            }
        } else {
             // Caso normal de requisitos
            for (const requisitoId of ramo.requisitos) {
                if (!aprobados.has(requisitoId)) {
                    const reqRamo = ramosData.find(r => r.id === requisitoId);
                    faltantes.push(reqRamo ? reqRamo.nombre : requisitoId);
                }
            }
        }

        return { cumple: faltantes.length === 0, faltantes };
    };

    /**
     * Actualiza la apariencia de todos los ramos en la malla (aprobado, bloqueado, disponible).
     */
    const actualizarUI = () => {
        const todosLosRamosEl = document.querySelectorAll('.ramo');
        todosLosRamosEl.forEach(ramoEl => {
            const id = ramoEl.dataset.id;
            
            // Limpia clases de estado previas
            ramoEl.classList.remove('aprobado', 'bloqueado');

            if (aprobados.has(id)) {
                ramoEl.classList.add('aprobado');
            } else {
                const { cumple } = verificarRequisitos(id);
                if (!cumple) {
                    ramoEl.classList.add('bloqueado');
                }
            }
        });
    };

    /**
     * Maneja el evento de clic sobre un ramo.
     * @param {Event} e - El objeto del evento.
     */
    const manejarClickRamo = (e) => {
        if (!e.target.classList.contains('ramo')) return;

        const ramoEl = e.target;
        const id = ramoEl.dataset.id;

        // Si ya está aprobado, lo des-aprueba (toggle)
        if (aprobados.has(id)) {
            aprobados.delete(id);
        } else {
            // Si no está aprobado, verifica los requisitos
            const { cumple, faltantes } = verificarRequisitos(id);
            if (cumple) {
                aprobados.add(id);
            } else {
                // Si no cumple, muestra el modal con los ramos faltantes
                mensajeRequisitos.innerHTML = `Para tomar este ramo, primero debes aprobar: <br><strong>${faltantes.join(', ')}</strong>`;
                modal.classList.remove('modal-oculto');
                modal.classList.add('modal-visible');
                return; // Detiene la ejecución para no cambiar el estado
            }
        }
        
        guardarEstado();
        actualizarUI();
    };

    // --- 5. Inicialización y Event Listeners ---

    // Genera la malla y la muestra en la página
    renderizarMalla();
    
    // Pone los estilos iniciales a los ramos
    actualizarUI();

    // Listener para toda la malla (delegación de eventos)
    mallaContainer.addEventListener('click', manejarClickRamo);

    // Listeners para cerrar el modal
    cerrarModalBtn.addEventListener('click', () => {
        modal.classList.add('modal-oculto');
        modal.classList.remove('modal-visible');
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('modal-oculto');
            modal.classList.remove('modal-visible');
        }
    });
});

