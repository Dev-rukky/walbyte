const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav__menus");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("nav-open");
});

const buttons = document.querySelectorAll('.accordion-button');
const contents = document.querySelectorAll('.accordion-content');
const icons = document.querySelectorAll('.icon');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    if (contents[index].style.display === 'block') {
      contents[index].style.display = 'none';
    } else {
      contents[index].style.display = 'block';
    }
  });
});


buttons.forEach((button, index) => {
  button.addEventListener('click', () => {

    button.classList.toggle('active');

    const content = contents[index];
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {

      contents.forEach((item) => {
        if (item !== content) {
          item.style.maxHeight = null;
        }
      });
      content.style.maxHeight = content.scrollHeight + 'px';
    }
    icons[index].classList.toggle('rotate');
  });
});


