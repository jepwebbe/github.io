// Burgervariabler
const menu = document.querySelector(".navbar");
const burger = document.querySelector("#burger");
const burgerMenu = document.querySelector(".navbar");
// Pilevariabler til galleri
const pilVidere = document.querySelector("#next");
const pilTilbage = document.querySelector("#prev");
// Skiftbld-variabler
const leGalleri = document.querySelectorAll(".galPic img");
let mainPic = document.querySelector(".mainPic");
// Eventlistener der lukker menuen, når der bliver klikket
burgerMenu.addEventListener("click", mobilMenuLuk);

// Burgerfunktion
burger.addEventListener("click", mobilMenu);
// Funktion der skifter display til flex, hvis den ikke er flex samt ændrer burger til kryds - samt omvendt




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
// Funktion der gemmer burgermenuen igen på mobile, når der bliver klikket (i navbaren jf eventlisteneren, der trigger mobilMenuLuk)
function mobilMenuLuk(){
    if (screen.width < 800) {
        mobilMenu();
}
}

///////////////// Galleri
// eventlistener der lytter efter et billede
pilVidere.addEventListener("click", skiftBld);
pilTilbage.addEventListener("click", skiftBld);
// Laver et array fra leGalleri (der tager alle img i #gallery)
const leArray = Array.from(leGalleri);
//en variabel til det nuværende billede i galleriet
let nuBld = 0;

/* funktion der skifter billedet op, hvis der bliver klikket på et id med next,
og hvis det nuværende billede er laver end sidste billede (ellers går den til 0),
og hvis det, der bliver klikket på ikke har #next id, så gør den det omvendte */
function skiftBld() {
    if (this.getAttribute("id") === "next") {
        if (nuBld < leArray.length - 1) {
            nuBld++;
            console.log(nuBld);
        } else {
            nuBld = 0;
            console.log(nuBld);
        }
    } 
    if (this.getAttribute("id") === "prev") {
        if (nuBld > 0) {
            nuBld--;
            console.log(nuBld);

        } else {
            nuBld = leArray.length - 1;
            console.log(nuBld);
        }
    }
    // Laver en variable, der er nuværende billedets src og erstatter den hovedbilledets source
    let nyBld = leArray[nuBld].getAttribute("src");
    mainPic.setAttribute("src", nyBld);
}