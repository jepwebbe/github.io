<<<<<<< HEAD
// sets the number of the current photo
let count = 1;

// finds the current photo per id
const bigImg = document.querySelector("#gallery-arrows #gallery__image");

// sets the left arrow
const arrows = document.querySelectorAll("#gallery i");

// Sets eventlisteners listening for a click and the arrows
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", rollImg);
}
// Sets eventlisteners listening for a click and the arrows


/* this function determines whether it's next or prev arrow has been clicked, 
and it changes the index number accordingly.
It then replaces the number of the index in the filename of the id that shows the current photo, 
thus changing the source file of said id and thus also the image*/ 
function rollImg() {
    if (this.getAttribute("id") === "next") {
        if (count < 9) {
            count++;
        } else {
            count = 1;
        }
    } 
    if (this.getAttribute("id") === "prev") {
        if (count > 1) {
            count--;
        } else {
            count = 9;
        }
    }
    let newSrc = "https://jepwebbe.github.io/codepen/images/gallery/image" + count + ".jpg";
    bigImg.setAttribute("src", newSrc);
=======
// sets the number of the current photo
let count = 1;

// finds the current photo per id
const bigImg = document.querySelector("#gallery-arrows #gallery__image");

// sets the left arrow
const arrows = document.querySelectorAll("#gallery i");

// Sets eventlisteners listening for a click and the arrows
for (let i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("click", rollImg);
}
// Sets eventlisteners listening for a click and the arrows


/* this function determines whether it's next or prev arrow has been clicked, 
and it changes the index number accordingly.
It then replaces the number of the index in the filename of the id that shows the current photo, 
thus changing the source file of said id and thus also the image*/ 
function rollImg() {
    if (this.getAttribute("id") === "next") {
        if (count < 9) {
            count++;
        } else {
            count = 1;
        }
    } 
    if (this.getAttribute("id") === "prev") {
        if (count > 1) {
            count--;
        } else {
            count = 9;
        }
    }
    let newSrc = "https://jepwebbe.github.io/codepen/images/gallery/image" + count + ".jpg";
    bigImg.setAttribute("src", newSrc);
>>>>>>> 8dbbb38e22a6547b5ad8139c16fbc09b536f8157
}