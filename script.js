const navToggle = document.getElementById("nav-toggle")
const nav = document.getElementById("navLinks")

navToggle.addEventListener("click", () => {
    nav.classList.toggle('nav-open')
});       