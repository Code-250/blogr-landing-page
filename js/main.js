const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#hamburger-icon");
const closeMenu = document.querySelector("#close-icon");
const mobileLinks = document.querySelector(".mobile");
const removeHeader = document.querySelector(".header-description");
const productLinks = document.querySelector("#product");
const companyLinks = document.querySelector("#company");
const connectLinks = document.querySelector("#connect");
const productItems = document.querySelector(".products-link");
const companyItems = document.querySelector(".company-link");
const connectItems = document.querySelector(".connect-link");
const productTitle = document.querySelector(".product-title");
const companyTitle = document.querySelector(".company-title");
const connectTitle = document.querySelector(".connect-title");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
  mobileLinks.classList.toggle("active");
  removeHeader.classList.toggle("active");
});

productLinks.addEventListener("click", () => {
  productItems.classList.toggle("active");
  companyItems.classList.remove("active");
  connectItems.classList.remove("active");
});

// productTitle.addEventListener("click", () => {
//   productItems.classList.remove("active");
//   mobileLinks.classList.toggle("active");
// });
companyLinks.addEventListener("click", () => {
  companyItems.classList.toggle("active");
  productItems.classList.remove("active");
  connectItems.classList.remove("active");
});

// companyTitle.addEventListener("click", () => {
//   companyItems.classList.remove("active");
//   mobileLinks.classList.toggle("active");
// });
connectLinks.addEventListener("click", () => {
  connectItems.classList.toggle("active");
  productItems.classList.remove("active");
  companyItems.classList.remove("active");
});

// connectTitle.addEventListener("click", () => {
//   connectItems.classList.remove("active");
//   mobileLinks.classList.toggle("active");
// });
