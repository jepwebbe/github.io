// Opretter de nødvendige variabler
const ekstra = document.querySelectorAll(".xtra-txt");
const knap = document.querySelectorAll(".knap");

//// If-condition til mobile ////
if(screen.width < 880) {

//Forløkke der skjuler Nodelistens elementer med dislay-property "none"

for(let i = 0; i < ekstra.length; i++){
    ekstra[i].style.display ="none";
}

//Forløkke der kalder funktionen vis på knapperne 
for(let i = 0; i < knap.length; i++){
    knap[i].addEventListener("click", showHide);
}

function showHide() {
    let txt = this.previousElementSibling;
    if (txt.style.display === "block") {
        txt.style.display = "none";
        this.textContent = "Read more..."
    } else {
        txt.style.display = "block";
        this.textContent = "Read less...";
    }
}
}