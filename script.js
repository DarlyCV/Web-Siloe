// Test: verificar que el script se está ejecutando
        console.log('✓ Script cargado correctamente');

        document.addEventListener('DOMContentLoaded', function() {
            console.log('✓ DOM Cargado');
            
            // Obtener referencias a los elementos del DOM
            const btnVoluntarios = document.getElementById('btn-voluntarios');
            const btnClow = document.getElementById('btn-clow');
            const btnAliados = document.getElementById('btn-aliados');
            const btnNosotros = document.getElementById('btn-nosotros');
            const seccionVoluntariado = document.getElementById('seccion-voluntariado');
            const seccionClow = document.getElementById('seccion-clow');
            const seccionAliados = document.getElementById('seccion-aliados');
            const seccionNosotros = document.getElementById('seccion-nosotros');

            console.log('✓ Elementos obtenidos:', { 
                btnVoluntarios: !!btnVoluntarios,
                btnClow: !!btnClow,
                btnAliados: !!btnAliados,
                btnNosotros: !!btnNosotros,
                seccionVoluntariado: !!seccionVoluntariado,
                seccionClow: !!seccionClow,
                seccionAliados: !!seccionAliados,
                seccionNosotros: !!seccionNosotros
            });

            // Función para mostrar una sección
            function mostrarSeccion(nombre) {
                console.log('Mostrando sección:', nombre);
                
                // Ocultar todas
                seccionVoluntariado.classList.remove('seccion-activa');
                seccionVoluntariado.classList.add('seccion-inactiva');
                seccionClow.classList.remove('seccion-activa');
                seccionClow.classList.add('seccion-inactiva');
                seccionAliados.classList.remove('seccion-activa');
                seccionAliados.classList.add('seccion-inactiva');
                seccionNosotros.classList.remove('seccion-activa');
                seccionNosotros.classList.add('seccion-inactiva');
                
                btnVoluntarios.classList.remove('nav-btn-active');
                btnClow.classList.remove('nav-btn-active');
                btnAliados.classList.remove('nav-btn-active');
                btnNosotros.classList.remove('nav-btn-active');
                
                // Mostrar la seleccionada
                if (nombre === 'voluntarios') {
                    seccionVoluntariado.classList.remove('seccion-inactiva');
                    seccionVoluntariado.classList.add('seccion-activa');
                    btnVoluntarios.classList.add('nav-btn-active');
                } else if (nombre === 'clow') {
                    seccionClow.classList.remove('seccion-inactiva');
                    seccionClow.classList.add('seccion-activa');
                    btnClow.classList.add('nav-btn-active');
                } else if (nombre === 'aliados') {
                    seccionAliados.classList.remove('seccion-inactiva');
                    seccionAliados.classList.add('seccion-activa');
                    btnAliados.classList.add('nav-btn-active');
                } else if (nombre === 'nosotros') {
                    seccionNosotros.classList.remove('seccion-inactiva');
                    seccionNosotros.classList.add('seccion-activa');
                    btnNosotros.classList.add('nav-btn-active');
                }
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }

            // Agregar eventos a botones
            if (btnVoluntarios) {
                btnVoluntarios.addEventListener('click', function(e) {
                    e.preventDefault();
                    mostrarSeccion('voluntarios');
                });
            }

            if (btnClow) {
                btnClow.addEventListener('click', function(e) {
                    e.preventDefault();
                    mostrarSeccion('clow');
                });
            }

            if (btnAliados) {
                btnAliados.addEventListener('click', function(e) {
                    e.preventDefault();
                    mostrarSeccion('aliados');
                });
            }

            if (btnNosotros) {
                btnNosotros.addEventListener('click', function(e) {
                    e.preventDefault();
                    mostrarSeccion('nosotros');
                });
            }

            console.log('✓ Eventos de botones agregados');

            /* ============================================
               EFECTO FLIP 3D EN GALERÍA DE IMÁGENES
               ============================================
               Permite hacer clic en las imágenes para ver las historias */
            
            // Seleccionar todas las tarjetas flip
            const flipCards = document.querySelectorAll('.galeria-flip-card');
            let currentFlipped = null; // Variable para guardar la tarjeta actualmente volteada

            // Agregar event listener de clic a cada tarjeta
            flipCards.forEach(card => {
                card.addEventListener('click', function() {
                    // Si hay una tarjeta ya volteada y es diferente a esta
                    if (currentFlipped && currentFlipped !== this) {
                        // Voltear la anterior hacia atrás
                        currentFlipped.classList.remove('flipped');
                    }
                    
                    // Alternar la clase 'flipped' en la tarjeta actual
                    this.classList.toggle('flipped');
                    
                    // Actualizar la referencia a la tarjeta volteada
                    if (this.classList.contains('flipped')) {
                        currentFlipped = this;
                    } else {
                        currentFlipped = null;
                    }
                });
            });
        });
