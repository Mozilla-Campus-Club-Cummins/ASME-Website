let menus = document.querySelector(".navbar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");

menus_btn.addEventListener("click", function () {
  menus.classList.add("active2");
});

close_btn.addEventListener("click", function () {
  menus.classList.remove("active2");
});
