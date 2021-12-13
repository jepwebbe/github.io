// sets the number of the current photo
let index = 1;

// finds the current photo per id
const bigImg = document.querySelector("#product-more__gallery");

// sets the left arrow per id
const leftArrow = document.querySelector("#prev");

// sets the right arrow per id
const rightArrow = document.querySelector("#next");

// sets the variable of the dots
const sliderDots = document.querySelectorAll("#product #product-more .dots .dot");

// Sets eventlisteners listening for a click and the arrows
leftArrow.addEventListener("click", changeImg);
rightArrow.addEventListener("click", changeImg);

/* this function determines whether it's next or prev arrow has been clicked, 
and iy changes the index number accordingly.
It then replaces the number of the index in the filename of the id that shows the current photo, 
thus changing the source file of  said id and thus also the image*/ 
function changeImg() {
    if (this.getAttribute("id") === "next") {
        if (index < 3) {
            index++;
        } else {
            index = 1;
        }
    } 
    if (this.getAttribute("id") === "prev") {
        if (index > 1) {
            index--;
        } else {
            index = 3;
        }
    }
    let newSrc = "images/products/succulent/plante" + index + ".png";
    bigImg.setAttribute("src", newSrc);
/*     document.querySelector("#activedot").removeAttribute("id");
    sliderDots[index].setAttribute("id", "activedot"); */
}

/*     
} */
