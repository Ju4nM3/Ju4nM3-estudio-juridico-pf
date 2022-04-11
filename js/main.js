const menu_btn = document.querySelector(".header__nav-toggle");
const mobile_menu = document.querySelector(".header__navBar");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});
