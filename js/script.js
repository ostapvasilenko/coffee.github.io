
/* Mobile Menu */


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  //   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
}))



/* Swiper slider */

let swiper = new Swiper(".mySwiper", {
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



/* Scroll buttons */

let ButtonHero = document.getElementById("btn_hero");

ButtonHero.addEventListener("click", function () {
  var element = document.getElementById("menu");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


let ButtonWhyWe = document.getElementById("why-we_btn");

ButtonWhyWe.addEventListener("click", function () {
  var element = document.getElementById("header");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


let ButtonImage = document.getElementById("image_btn");

ButtonImage.addEventListener("click", function () {
  var element = document.getElementById("menu");
  element.scrollIntoView({ behavior: "smooth", block: "start" });
});


/* Registartion form modal */

const registrationBtn = document.querySelector('.header__btn');
const registrationFormWrapper = document.querySelector('.header__form-wrapper');

registrationBtn.addEventListener('click', () => {
  registrationFormWrapper.style.display = 'block';
});

registrationFormWrapper.addEventListener('click', (event) => {
  if (event.target === registrationFormWrapper) {
    registrationFormWrapper.style.display = 'none';
  }
});


/* Validation Registration Form */

function validateForm() {
  // Отримуємо значення полів форми
  let name = document.forms[0]["name"].value;
  let surname = document.forms[0]["surname"].value;
  let email = document.forms[0]["email"].value;
  let password = document.forms[0]["password"].value;

  // Перевіряємо, чи були заповнені всі поля форми
  if (name == "" || surname == "" || email == "" || password == "") {
    alert("Please fill in all the fields of the form!");
    return false;
  }
}



/* Modal Window Button Learn More */

let myButton = document.getElementById("discover__btn");
let myPopup = document.getElementById("discover__popup");
let closeButton = document.getElementById("discover__close_button");

// показуємо вікно з інформацією при натисканні на кнопку
myButton.addEventListener("click", function () {
  myPopup.style.display = "block";
});

// закриваємо вікно при натисканні на кнопку "Закрити вікно"
closeButton.addEventListener("click", function () {
  myPopup.style.display = "none";
});

myButton.addEventListener("click", function () {
  myPopup.classList.add("show");
});

// закриваємо вікно при натисканні на кнопку "Закрити вікно"
closeButton.addEventListener("click", function () {
  myPopup.classList.remove("show");
  myPopup.classList.add("hide");

  // зачекайте 0,5 секунди, поки анімація закінчиться, тоді приховайте вікно
  setTimeout(function () {
    myPopup.classList.remove("hide");
  }, 500);
});



/* Modal window for Menu*/

// Отримуємо всі кнопки "Order Now" та модальне вікно
const buyButtons = document.querySelectorAll(".buy-btn");
const modal = document.querySelector(".modal");
const orderButton = modal.querySelector(".order-btn");
const productName = modal.querySelector(".product-name");
const productDescription = modal.querySelector(".product-description");
const productPrice = modal.querySelector(".product-price");

// Додаємо обробник події для кожної кнопки "Order Now"
buyButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const product = button.getAttribute("data-product"); // Отримуємо ім'я товару з атрибута data-product
    const product1 = button.getAttribute("data-product1"); // Отримуємо ім'я товару з атрибута data-product
    const product2 = button.getAttribute("data-product2"); // Отримуємо ім'я товару з атрибута data-product
    productName.textContent = `Name: ${product}`;
    productDescription.textContent = `Description: ${product1}`; // Встановлюємо ім'я товару в модальне вікно
    productPrice.textContent = `Price: ${product2}`; // Встановлюємо ім'я товару в модальне вікно
    modal.classList.add("open"); // Відкриваємо модальне вікно
  });
});

// Додаємо обробник події для кнопки "Order!" у модальному вікні
orderButton.addEventListener("click", function () {
  // Тут можна додати код для обробки замовлення
  modal.classList.remove("open"); // Закриваємо модальне вікно
});


/* Message to the user about a successful purchase */
function showMessage() {
  alert("Congratulations! Accept your order! Wait for the call!");
}


/* Close Modal Window */

let modalClose = document.getElementById("modal");
let closeBtn = document.getElementsByClassName("close")[0];

closeBtn.onclick = function () {
  modalClose.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modalClose.style.display = "none";
  }
}

