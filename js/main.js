const product = document.querySelector(".link-project");
const myDropdown = document.querySelector(".dropdown");
const link = document.querySelectorAll(".drop-link");

product.addEventListener("click", () => {
  myDropdown.classList.toggle("active");
  link.forEach((dropItem) => {
    dropItem.classList.remove("active");
  });
});
