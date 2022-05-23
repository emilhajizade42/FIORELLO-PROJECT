let nav_close_icon = document.querySelector(".fa-xmark");
let nav_hamburger_icon = document.querySelector(".nav_hamburger_icon");
let nav_mobil = document.querySelector("#mobil_nav");
nav_hamburger_icon.addEventListener("click",function (e) {
    nav_mobil.style.display = "block";
})
nav_close_icon.addEventListener("click",function (e) {
    nav_mobil.style.display = "none";
})