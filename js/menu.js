// Fonction pour basculer le menu hamburger
function toggleHamburger() {
    var menu = document.getElementById('navigation-menu');
    menu.classList.toggle('active');

    var content = document.querySelector('.main-content');
    if (content) {
        content.classList.toggle('active');
    }
}

// Assurez-vous que le code s'exécute après le chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.hamburger').addEventListener('click', toggleHamburger);
});
