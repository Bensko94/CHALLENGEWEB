document.addEventListener('DOMContentLoaded', function () {
    var localisationDropdown = document.getElementById('localisation-dropdown');
    var dropdown = localisationDropdown.querySelector('.dropdown');
  
    // Cacher le menu déroulant au départ
    dropdown.style.display = 'none';
  
    // Ajouter un écouteur de clic au bouton "Localisation"
    localisationDropdown.addEventListener('click', function (event) {
      event.stopPropagation(); 
      // Inverser la visibilité du menu déroulant lors du clic
      if (dropdown.style.display === 'none' || dropdown.style.display === '') {
        dropdown.style.display = 'block';
      } else {
        dropdown.style.display = 'none';
      }
    });
  
    // Cacher le menu déroulant si on clique en dehors de celui-ci
    document.addEventListener('click', function (event) {
      if (!localisationDropdown.contains(event.target)) {
        dropdown.style.display = 'none';
      }
    });
  
    // Arrêter la propagation du clic à l'intérieur du menu déroulant
    dropdown.addEventListener('click', function (event) {
      event.stopPropagation();
    });
  });
  