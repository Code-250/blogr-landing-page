const menuLink = document.querySelector(".icons");
const dropdownItem = document.querySelector(".drop-content");
const link = document.querySelector("#production");
const closeIcon = document.querySelector(".close-icon");
const hamburgerIcon = document.querySelector(".hamburger-menu");

menuLink.addEventListener("click", () => {
  dropdownItem.classList.toggle("active");
  closeIcon.classList.toggle("active");
  hamburgerIcon.classList.toggle("active");
  link.classList.remove("active");
});
