window.addEventListener('DOMContentLoaded', () => {
    actualizarBotonDescarga();

    const carrousel = document.getElementById('carrousel-fasesluna');
    carrousel.addEventListener('slid.bs.carousel', actualizarBotonDescarga);

});

// Función para actualizar el botón con la imagen visible
function actualizarBotonDescarga() {
    const activeItem = document.querySelector('#carrousel-fasesluna .carousel-item.active');
    const img = activeItem.querySelector('img');
    const titulo = activeItem.getAttribute('data-titulo') || 'imagen';
    const src = img.getAttribute('src');
    const nombreArchivo = src.split('/').pop();

    const botonDescarga = document.getElementById('descargar-imagen');
    botonDescarga.setAttribute('href', src);
    botonDescarga.setAttribute('download', nombreArchivo);
    botonDescarga.textContent = `Descargar ${titulo}`;
}