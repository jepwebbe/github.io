const butUp= document.querySelector(".basket-add"); 
const butDown = document.querySelector(".basket-subtract");
let butResult = document.querySelectorAll(".basket-result");

butUp.addEventListener("click", addToCounter);
butDown.addEventListener("click", subtractFromCounter);

// adds to localStorage.clickcount
function addToCounter() {
  if (typeof Storage !== "undefined") { 
    if (localStorage.clickcount) { 
      localStorage.clickcount = Number(localStorage.clickcount) + 1; 
    } else {  
      localStorage.clickcount = 1;
    }
  }
  console.log(localStorage.clickcount);
  showCounter();
}

// subtracts from localStorage.clickcount:
function subtractFromCounter() {
  if (localStorage.clickcount > 0) {
    localStorage.clickcount = Number(localStorage.clickcount) - 1;
    showCounter();
  }
}

// funktionen der sætter 'localStorage.clickcount' til tallet 0 (eller i dette tilfælde: "tømmer kurven"):
/* function resetCounter() {
  localStorage.clickcount = 0;
  showCounter();
} */

// funktionen der viser værdien af 'localStorage.clickcount':
 function showCounter() {
    document.querySelector(".basket-result").textContent =
      localStorage.clickcount;
  } 

// for at vise indholdet i kurven og opdaterer knappers disabled-status når siden loader:
showCounter();