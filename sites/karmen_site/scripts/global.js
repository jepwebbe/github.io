/**************** VARIABLES *********************
*************************************************/
// Burger
const burger = document.querySelector("#burger");
const burgerMenu = document.querySelector(".g-navbar");
const burgerFoot = document.querySelector("#g-foot-burger");
// Dropdown
const mainMenu = document.querySelector(".g-navbar .g-drop");
// Newsletter 

/**************** Drop down menu *****************
*************************************************/
// Adds an eventlistener listening to a hovering mouse to the main menu
if (screen.width > 520) {
    mainMenu.addEventListener("mouseover", showHide);
    mainMenu.addEventListener("mouseout", showHide);

    function showHide() {
        // finds the sub menu to the main menu
        let subMenu = this.querySelector(".g-down");
        // shows or hides the sub menu
        if (subMenu.style.display !== "block") {
            subMenu.style.display = "block";
        } else {
            subMenu.style.display = "none";
        }
    }
}

/**************** Burger menu *****************
*************************************************/
burger.addEventListener("click", mobileMenu);
burgerFoot.addEventListener("click", mobileMenu);
// Changes the mobile version of the g-navbar from display: none to flex if it is not and replaces burger with a cross
function mobileMenu() {
    if (burgerMenu.style.display !== "flex") {
        burgerMenu.style.display = "flex";
        burger.lastChild.style.display = "block";
        burger.firstChild.style.display = "none";
        burgerFoot.style.display = "none";

    } else {
        burgerMenu.style.display = "none";
        burger.lastChild.style.display = "none";
        burger.firstChild.style.display = "block";
        burgerFoot.style.display = "block";
    }
}


/**************** Newsletter form validation *****************
**************************************************************/
document.querySelector("#newsletter").addEventListener("submit", validateNewsletter);
const messageFieldNews = document.querySelector("#newsletter_error")
function validateNewsletter(evt) {
    let newsletter_error;
    if (this.email.value == "") {
        evt.preventDefault();
        newsletter_error = "Udfyld venligst din email-adresse";
        messageFieldNews.textContent = newsletter_error;
        this.email.focus();
        return false;
    }
    const atpos = this.email.value.indexOf("@");
    const dotpos = this.email.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= this.email.value.length) {
        evt.preventDefault();
        newsletter_error = "Din email-adresse skal være gyldig (f.eks navn@mail.com";
        messageFieldNews.textContent = newsletter_error;
        this.email.focus();
        return false;
    }
}