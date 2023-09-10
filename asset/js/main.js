const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav__menus");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-open");
});


// const expertExpand = document.getElementsByClassName("carousel__contents");

// expertExpand.addEventListener("click", () => {
//     expertExpand.classList.toggle(".carousel__contents-expand");
// });

// Get all elements with the class "carousel__contents"
const expertExpandElements = document.getElementsByClassName("carousel__item");

// Add a click event listener to each element
for (const element of expertExpandElements) {
  element.addEventListener("click", () => {
    // Toggle the "carousel__contents-expand" class on the clicked element
    element.classList.toggle("carousel__contents-expand");
  });
}
