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


});
