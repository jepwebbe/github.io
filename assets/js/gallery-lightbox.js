let currentImg;
const lightDiv = document.querySelector(".lightbox__image");
const lightImg = document.querySelector(".lightbox__image img");
const lightbox = document.querySelector(".lightbox");
const lightClose = document.querySelector(".closeMe");
const lightGallery = document.querySelectorAll(".lightbox__thumbs img");
const lightArray = Array.from(lightGallery);
const arrows3 = document.querySelectorAll(".lightbox__image i");
let captions = document.querySelector(".lightbox__image p");

//Lightbox
for (let i = 0; i < lightGallery.length; i++) {
  lightGallery[i].addEventListener("click", showLight);
}
lightClose.addEventListener("click", hideLight);
console.log();
for (let i = 0; i < arrows3.length; i++) {
  arrows3[i].addEventListener("click", rollImg3);
}
// Funktion der ændrer src i det store billede i Lightboxen - samt bld-teksten efter arrayet i toppen
function showLight() {
  lightDiv.style.display = "grid";
  lightbox.style.display = "block";
  lightImg.style.display = "block";
  lightClose.style.display = "block";
  currentImg = lightArray.indexOf(this);
  captions.textContent = this.getAttribute("alt");
  let newSrc3 = this.getAttribute("src");
  lightDiv.querySelector("img").setAttribute("src", newSrc3);
  console.log(showLight);
}
function hideLight() {
  lightDiv.style.display = "none";
  lightbox.style.display = "none";
  lightClose.style.display = "none";
}
function rollImg3() {
  if (this.classList.contains("next")) {
    if (currentImg < lightGallery.length - 1) {
      currentImg++;
    } else {
      currentImg = 0;
    }
  } else {
    if (currentImg > 0) {
      currentImg--;
    } else {
      currentImg = lightGallery.length - 1;
    }
  }
  captions.textContent = lightGallery[currentImg].getAttribute("alt");
  let newSrc3 = lightGallery[currentImg].getAttribute("src");
  lightImg.setAttribute("src", newSrc3);
}
