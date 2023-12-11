// Sélectionnez toutes les images
var images = document.querySelectorAll('.zoomable-image');

// Fonction pour ajouter l'effet de zoom
function addZoomEffect(image) {
    image.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2)';
        this.style.transition = 'transform 0.5s ease';
    });

    image.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Appliquez la fonction à chaque image
images.forEach(addZoomEffect);
