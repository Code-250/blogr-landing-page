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
const connectTitle = document.querySelector(".product-title");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
  mobileLinks.classList.toggle("active");
  removeHeader.classList.toggle("active");
});

productLinks.addEventListener("click", () => {
  mobileLinks.classList.remove("active");
  productItems.classList.toggle("active");

  console.log("this and you");
});

productTitle.addEventListener("click", () => {
  productItems.classList.remove("active");
  mobileLinks.classList.toggle("active");
});
companyLinks.addEventListener("click", () => {
  mobileLinks.classList.remove("active");
  companyItems.classList.toggle("active");

  console.log("this and you");
});

companyTitle.addEventListener("click", () => {
  companyItems.classList.remove("active");
  mobileLinks.classList.toggle("active");
});
connectLinks.addEventListener("click", () => {
  mobileLinks.classList.remove("active");
  connectItems.classList.toggle("active");

  console.log("this and you");
});

connectTitle.addEventListener("click", () => {
  connectItems.classList.remove("active");
  mobileLinks.classList.toggle("active");
});
