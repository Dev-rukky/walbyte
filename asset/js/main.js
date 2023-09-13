const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav__menus");
const all = document.querySelector('.all-btn');
const individual = document.querySelector('.individuals-btn');
const company = document.querySelector('.organizations-btn');
const individualFaq = document.querySelector('.accordion-individual');
const companyFaq = document.querySelector('.accordion-company');
const buttons = document.querySelectorAll('.accordion-button');
const contents = document.querySelectorAll('.accordion-content');
const icons = document.querySelectorAll('.icon');

const passwordInput = document.getElementById("password");
const passwordToggle = document.getElementById("password-toggle");

// passwordToggle.addEventListener("click", () => {
//   if (passwordInput.type === "password") {
//     passwordInput.type = "text";
//   } else {
//     passwordInput.type = "password";
//   }
// });


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("nav-open");
});



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



individual.addEventListener('click', () => {
  individualFaq.style.display = 'block';
  companyFaq.style.display = 'none';

  individual.classList.add('individuals-btn-active');
  company.classList.remove('organizations-btn-active');
  all.classList.add('all-btn-unactive');
});

company.addEventListener('click', () => {
  individualFaq.style.display = 'none';
  companyFaq.style.display = 'block';

  individual.classList.remove('individuals-btn-active');
  company.classList.add('organizations-btn-active');
  all.classList.add('all-btn-unactive');
});

all.addEventListener('click', () => {
  individualFaq.style.display = 'block';
  companyFaq.style.display = 'block';

  individual.classList.remove('individuals-btn-active');
  company.classList.remove('organizations-btn-active');
  all.classList.add('all-btn');
  all.classList.remove('all-btn-unactive');
});





const expertExpandElements = document.getElementsByClassName("carousel__item");

for (const element of expertExpandElements) {
  element.addEventListener("click", () => {
    element.classList.toggle("carousel__contents-expand");
  });
}


const form = document.getElementById('news-form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

};
