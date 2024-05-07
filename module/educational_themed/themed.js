document.addEventListener('DOMContentLoaded', function() {
    // Llama a la función para cargar el contenido temático cuando la página se carga completamente
    loadThemedContent();
});

function loadThemedContent() {
    // No es necesario leer nada de la URL, simplemente cargar el contenido temático
    const themedContentURL = '/module/educational_themed/themed.html'; // Ruta relativa al archivo themed.html

    fetch(themedContentURL)
        .then(response => response.text())
        .then(html => {
            // Inserta el contenido temático debajo de la sección de categoría
            const themedContentArea = document.querySelector('.blogs');
            themedContentArea.insertAdjacentHTML('afterend', html);
        })
        .catch(error => console.error('Error al cargar el contenido temático:', error));
}