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

    // ******************* Typing text ***********************

   
    const textElement = document.querySelector('.text');
    const texts = ["Développeuse front-end !", "Développeuse back-end !"];
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


});
