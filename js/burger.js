<<<<<<< HEAD
const burger = document.querySelector("#burger .burger");
const burgerMenu = document.querySelector("#burger .g-navbar");
burger.addEventListener("click", mobileMenu);
function mobileMenu() {
    if (burgerMenu.style.display !== "flex") {
        burgerMenu.style.display = "flex";
        burger.lastChild.style.display = "block";
        burger.firstChild.style.display = "none";

    } else {
        burgerMenu.style.display = "none";
        burger.lastChild.style.display = "none";
        burger.firstChild.style.display = "block";
    }
=======
const burger = document.querySelector("#burger .burger");
const burgerMenu = document.querySelector("#burger .g-navbar");
burger.addEventListener("click", mobileMenu);
function mobileMenu() {
    if (burgerMenu.style.display !== "flex") {
        burgerMenu.style.display = "flex";
        burger.lastChild.style.display = "block";
        burger.firstChild.style.display = "none";

    } else {
        burgerMenu.style.display = "none";
        burger.lastChild.style.display = "none";
        burger.firstChild.style.display = "block";
    }
>>>>>>> 8dbbb38e22a6547b5ad8139c16fbc09b536f8157
}