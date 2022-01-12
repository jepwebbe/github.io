<<<<<<< HEAD:sites/film_site/scripts/js.js
// Variabler til readmore
const ekstra = document.querySelectorAll(".extratxt");
const knap = document.querySelectorAll(".read");


//Variabler til Lightbox
let currentImg;
const lightDiv = document.querySelector("#lightbox");
const lightImg = document.querySelector("#lightbox img");
const lightWrap = document.querySelector("#lightboxWrap")
const lightClose = document.querySelector("#closeMe");
const lightGallery = document.querySelectorAll(".gallery img")
const lightArray = Array.from(lightGallery);
const arrows = document.querySelectorAll("#lightbox i");
let captions = document.querySelector("#lightbox p")
// Burgervariabler
const menu = document.querySelector(".internal");
const burger = document.querySelector("#burger");
burger.addEventListener("click", mobilMenu);

if (screen.width > 798) {
//Lightbox 
for (let i = 0; i < lightGallery.length; i++) {
    lightGallery[i].addEventListener("click", leShow);
}
lightClose.addEventListener("click", leHide)
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", rollImg);
}
// Funktion der ændrer src i det store billede i Lightboxen - samt bld-teksten efter arrayet i toppen
function leShow() {
    lightDiv.style.display = "grid";
    lightWrap.style.display = "block";
    lightImg.style.display = "block";
    lightClose.style.display = "block";

    currentImg = lightArray.indexOf(this);

    captions.textContent = this.getAttribute("alt");
    let newImg = this.getAttribute("src");
    lightDiv.querySelector("img").setAttribute("src", newImg);
}
function leHide() {
    lightDiv.style.display = "none";
    lightWrap.style.display = "none";
    lightClose.style.display = "none";


} 

// Skift billede med pileknapper
function rollImg() {
    if (this.getAttribute("id") === "next") {
        if (currentImg < lightGallery.length-1) {
            currentImg++;
            console.log(currentImg);
        } else {
            currentImg = 0;
        }
    } else {
        if (currentImg > 0) {
            currentImg--;     console.log(currentImg);
        } else {
            currentImg = lightGallery.length-1;
        }
    }
    captions.textContent = lightGallery[currentImg].getAttribute("alt");
    let newImg = lightGallery[currentImg].getAttribute("src");
    lightImg.setAttribute("src", newImg);
}
}

// Burgerfunktion
function mobilMenu() {
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
        burger.firstChild.classList.remove("fa-bars");
        burger.firstChild.classList.add("fa-times");
        console.log(mobilMenu);

    } else {
        menu.style.display = "none";
        burger.firstChild.classList.add("fa-bars");
        burger.firstChild.classList.remove("fa-times");
    }
}

//Read more på cast-siden
if (screen.width < 450) {
    //Forløkke der skjuler Nodelistens ekstratekst med dislay-property "none"

    for (let i = 0; i < ekstra.length; i++) {
        ekstra[i].style.display = "none";
    }

    //Forløkke der kalder funktionen vis på read more knapperne 
    for (let i = 0; i < knap.length; i++) {
        knap[i].addEventListener("click", showHide);
    }

    function showHide() {
        let txt = this.previousElementSibling;
        if (txt.style.display === "block") {
            txt.style.display = "none";
            this.textContent = "Read more...";
        } else {
            txt.style.display = "block";
            this.textContent = "Read less...";
        }
    }
}
=======
// Variabler til readmore
const ekstra = document.querySelectorAll(".extratxt");
const knap = document.querySelectorAll(".read");


//Variabler til Lightbox
let currentImg;
const lightDiv = document.querySelector("#lightbox");
const lightImg = document.querySelector("#lightbox img");
const lightWrap = document.querySelector("#lightboxWrap")
const lightClose = document.querySelector("#closeMe");
const lightGallery = document.querySelectorAll(".gallery img")
const lightArray = Array.from(lightGallery);
const arrows = document.querySelectorAll("#lightbox i");
let captions = document.querySelector("#lightbox p")
// Burgervariabler
const menu = document.querySelector(".internal");
const burger = document.querySelector("#burger");
burger.addEventListener("click", mobilMenu);

if (screen.width > 798) {
//Lightbox 
for (let i = 0; i < lightGallery.length; i++) {
    lightGallery[i].addEventListener("click", leShow);
}
lightClose.addEventListener("click", leHide)
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", rollImg);
}
// Funktion der ændrer src i det store billede i Lightboxen - samt bld-teksten efter arrayet i toppen
function leShow() {
    lightDiv.style.display = "grid";
    lightWrap.style.display = "block";
    lightImg.style.display = "block";
    lightClose.style.display = "block";

    currentImg = lightArray.indexOf(this);

    captions.textContent = this.getAttribute("alt");
    let newImg = this.getAttribute("src");
    lightDiv.querySelector("img").setAttribute("src", newImg);
}
function leHide() {
    lightDiv.style.display = "none";
    lightWrap.style.display = "none";
    lightClose.style.display = "none";


} 

// Skift billede med pileknapper
function rollImg() {
    if (this.getAttribute("id") === "next") {
        if (currentImg < lightGallery.length-1) {
            currentImg++;
            console.log(currentImg);
        } else {
            currentImg = 0;
        }
    } else {
        if (currentImg > 0) {
            currentImg--;     console.log(currentImg);
        } else {
            currentImg = lightGallery.length-1;
        }
    }
    captions.textContent = lightGallery[currentImg].getAttribute("alt");
    let newImg = lightGallery[currentImg].getAttribute("src");
    lightImg.setAttribute("src", newImg);
}
}

// Burgerfunktion
function mobilMenu() {
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
        burger.firstChild.classList.remove("fa-bars");
        burger.firstChild.classList.add("fa-times");
        console.log(mobilMenu);

    } else {
        menu.style.display = "none";
        burger.firstChild.classList.add("fa-bars");
        burger.firstChild.classList.remove("fa-times");
    }
}

//Read more på cast-siden
if (screen.width < 450) {
    //Forløkke der skjuler Nodelistens ekstratekst med dislay-property "none"

    for (let i = 0; i < ekstra.length; i++) {
        ekstra[i].style.display = "none";
    }

    //Forløkke der kalder funktionen vis på read more knapperne 
    for (let i = 0; i < knap.length; i++) {
        knap[i].addEventListener("click", showHide);
    }

    function showHide() {
        let txt = this.previousElementSibling;
        if (txt.style.display === "block") {
            txt.style.display = "none";
            this.textContent = "Read more...";
        } else {
            txt.style.display = "block";
            this.textContent = "Read less...";
        }
    }
}
>>>>>>> 8dbbb38e22a6547b5ad8139c16fbc09b536f8157:filmsite/scripts/js.js
