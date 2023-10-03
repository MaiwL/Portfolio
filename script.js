document.addEventListener("DOMContentLoaded", () => {

    //  Constante pour activer le menu 
    const navbarToggle = document.getElementById("navbarToggle");
    const navbarMenu = document.getElementById("navbarMenu");
    const closeButton = document.getElementById("closeButton");

    //  Activer et désactiver le menu
    navbarToggle.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
    });

    closeButton.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
    });

    // ******************* Day Night Mode ********************

    

    // ******************* Typing text ***********************

   
    const textElement = document.querySelector('.text');
    const texts = [" front-end !", " back-end !"];
    let textIndex = 0;

    function typeText(text, index) {
        const delay = 200;
        let charIndex = 0;

        function type() {
            if (charIndex < text.length) {
                textElement.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, delay);
            } else {
                setTimeout(() => eraseText(text, index), 500); // Délai avant effacement
            }
        }

        type();
    }

    function eraseText(text, index) {
        const delay = 50;
        let charIndex = text.length;

        function erase() {
            if (charIndex > 0) {
                textElement.textContent = text.substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, delay);
            } else {
                textIndex = (index + 1) % texts.length;
                setTimeout(() => typeText(texts[textIndex], textIndex), 500); // Délai avant le texte suivant
            }
        }

        erase();
    }

    typeText(texts[textIndex], textIndex);
     
// Changement de couleur au scroll
// Sélectionnez toutes les divs avec la classe "color-change-div"
const colorChangeDivs = document.querySelectorAll('.colorChange');

// Variables pour suivre la position de défilement précédente
let prevScrollTop = window.scrollY;
let currentScrollTop = prevScrollTop;

// Fonction pour changer la couleur en fonction de la direction du défilement
function changeColorOnScroll() {
  // Récupérez la position de défilement verticale actuelle
  currentScrollTop = window.scrollY;

  // Déterminez la direction du défilement
  const scrollDirection = currentScrollTop > prevScrollTop ? 'down' : 'up';

  // Définissez les couleurs en fonction de la direction du défilement
  const colorUp = '#9eb384'; // Couleur lorsque l'utilisateur fait défiler vers le haut
  const colorDown = '#cedebd'; // Couleur lorsque l'utilisateur fait défiler vers le bas

  // Parcourez toutes les divs avec la classe "color-change-div"
  colorChangeDivs.forEach((div) => {
    // Appliquez la couleur en fonction de la direction
    div.style.backgroundColor = scrollDirection === 'down' ? colorDown : colorUp;
  });

  // Mettez à jour la position de défilement précédente
  prevScrollTop = currentScrollTop;
}

// Écoutez l'événement de défilement pour déclencher la fonction de changement de couleur
window.addEventListener('scroll', changeColorOnScroll);


// Sélectionnez toutes les images de la face avant
const imagesFaceAvant = document.querySelectorAll('.card');

// Ajoutez un gestionnaire d'événements à chaque carte
imagesFaceAvant.forEach(card => {
    card.addEventListener('click', function() {
        retournerCarte(this);
    });
});

function retournerCarte(carte) {
    const faceAvant = carte.querySelector('.face-avant');
    const faceArriere = carte.querySelector('.face-arriere');
    faceAvant.style.transform = 'rotateY(180deg)';
    faceArriere.style.opacity = '0.6';
}


});
