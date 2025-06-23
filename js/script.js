window.addEventListener('DOMContentLoaded', () => {
    const element = document.getElementById('controlarAltura');
    resizeObserver.observe(element);

});

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        // `entry.target` es el elemento observado
        // `entry.contentRect` contiene el nuevo tamaño
        const newHeight = entry.contentRect.height;
        console.log(`El elemento ${entry.target.id} ahora mide: ${newHeight}px`);
    }
});