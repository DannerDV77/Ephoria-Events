// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener elementos del DOM
    const modal = document.getElementById('myModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementsByClassName('close')[0];

    // Mostrar el modal cuando se hace clic en el botón
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el modal cuando se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
