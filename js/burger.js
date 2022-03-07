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
}