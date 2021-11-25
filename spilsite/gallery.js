/////// CLICKABLE THUMBNAILS ////////////

// En variabel til det store billede
const bigImg = document.querySelector(".big-image");

// En variabel til den div de små fotos ligger i
const thumbs = document.querySelectorAll(".thumbs");
console.log(thumbs);
/* Lyttefunktion med to argumenter
thumbs.addEventListener("click", skiftFoto);*/

/* Array*/
let myArray = Array.from(thumbs);
for(let i=0; i < thumbs.length; i++){
    thumbs[i].addEventListener("click", skiftFoto)
}

// Funktion der skifter billedet
function skiftFoto(e) {
    console.log("hej do")
    if (e.target.getAttribute("src")!=null) {
        removeid();
        bigImg.setAttribute("src", e.target.getAttribute("src"));
        e.target.setAttribute("id", "active");
        index = myArray.indexOf(this)+1;
        console.log(index)
    }
}

////////////// PILEKNAPPER ////////////////////

// Det aktuelle foto nummer
let index = 2;

// Erklærer variabel til venstrepil
const leftArrow = document.querySelector("#prev");

// Erklærer variabel til højrepil
const rightArrow = document.querySelector("#next");

// Kæder variabel sammen med eventlistener, der lytter efter klik og aktiverer nævnte nedenstående funktion
leftArrow.addEventListener("click", showPrev);
rightArrow.addEventListener("click", showNext);

// Funktionen showNext, der ændrer index og eksekverer funktionen change
function showNext() {
    if (index < 5) {
    index++; //index+=1; index = index+1;
    }else{
        index = 1;
    }
    change();
}


// Funktionen shovPrev gør samme som ovenstående, bare med substraktion
function showPrev() {
    if (index > 1) {
    index--;
    }else{
        index = 5;
    }
    change();
}

// Funktionen change, der ændrer kilden ved at lægge ovenstående funktions index til filnavnet
function change() {
    let newSrc = "images/desktop/Gallery/psychonauts_wp" + index + "_1041x707.jpg";
    bigImg.setAttribute("src", newSrc); 
    removeid();
    myArray[index-1].setAttribute("id", "active");
} 

// Update borders
function removeid(){
    let imgborder = document.querySelector("#active");
    imgborder.removeAttribute("id");
}




// funktion der skifter billede med piletaster (højre/venstre).
// bruger en "anonymous function" og event objektet (her som 'e').
// se KeyCodes her: http://keycode.info/

 

document.onkeydown = function (e) {
    if (e.key === 'ArrowLeft') {
        showPrev();
    } else if (e.key === 'ArrowRight') {
        showNext();
    }
};

