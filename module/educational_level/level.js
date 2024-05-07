function redirectToThemed(level) {
    const themedContentURL = `themed_${level}.html`;

    fetch(themedContentURL)
        .then(response => response.text())
        .then(html => {
            // Insertar el contenido temático debajo de la sección de categoría
            const themedContentArea = document.querySelector('.category');
            themedContentArea.insertAdjacentHTML('afterend', html);
        })
        .catch(error => console.error('Error al cargar el contenido temático:', error));
}

document.getElementById('preescolar-box').addEventListener('click', function() {
    window.location.href = '/module/educational_themed/themed.html';
  });



function redirectToPage(url) {
    window.location.href = url;
}
