const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav__menus");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-open");
});
