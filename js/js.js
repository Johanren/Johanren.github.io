function changePage() {
    var images = document.querySelectorAll('.page img');
    var currentPage = document.querySelector('.page:first-child');
    var nextPage = currentPage.nextElementSibling || document.querySelector('.page:first-child');
    nextPage.querySelector('img').src = 'img/2.jfif'; // cambia la ruta de la nueva imagen

    // Reinicia la animación
    currentPage.style.transition = 'none';
    nextPage.style.transition = 'none';
    currentPage.offsetHeight; // Truco para forzar un repaint y reiniciar la animación
    nextPage.offsetHeight;

    // Establece la animación
    currentPage.style.transition = 'transform 1s ease';
    nextPage.style.transition = 'transform 1s ease';

    // Ejecuta la animación
    currentPage.style.transform = 'rotateY(-180deg)';
    nextPage.style.transform = 'rotateY(0deg)';
}
function toggleSize(image) {
    if (image.classList.contains('enlarged')) {
        image.style.transform = 'scale(1)';
        image.classList.remove('enlarged');
    } else {
        image.style.transform = 'scale(2)';
        image.classList.add('enlarged');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    lightGallery(document.getElementById('gallery'), {
        zoom: true,
        fullScreen: false,
        download: false,
        counter: false
    });

    var gallery = document.getElementById('gallery');
    var isZoomed = false;

    gallery.addEventListener('dblclick', function () {
        if (!isZoomed) {
            var images = gallery.getElementsByTagName('img');
            var currentIndex = lightGallery(gallery).getIndex();
            var nextPage = (currentIndex + 1) % images.length;

            lightGallery(gallery).goTo(nextPage);
        } else {
            var lg = lightGallery(gallery).data('lightGallery');
            lg.closeGallery();
        }
    });

    gallery.addEventListener('click', function () {
        isZoomed = !isZoomed;
    });
});

