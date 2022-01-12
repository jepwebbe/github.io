const mainImg = document.querySelector("#gallery-thumbnails #gallery__mainImg");
const thumbs = document.querySelectorAll("#gallery-thumbnails .thumbs");
const arrows2 = document.querySelectorAll("#gallery-thumbnails #gallery__main i");
let thumbsArray = Array.from(thumbs);
let count2 = 1;

for (let i = 0; i < arrows2.length; i++) {
    arrows2[i].addEventListener("click", rollImg2);
}
for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener("click", changeImg2);
}
function changeImg2(e) {
  if (e.target.getAttribute("src") != null) {
    removeid2();
    mainImg.setAttribute("src", e.target.getAttribute("src"));
    e.target.setAttribute("id", "active");
    count2 = thumbsArray.indexOf(this) + 1;
    console.log(this)
  }
}
function removeid2() {
  let imgborder = document.querySelector("#active");
  imgborder.removeAttribute("id");
}
// Rolls through the images
function rollImg2() {
  if (this.getAttribute("id") === "next2") {
    if (count2 < thumbsArray.length) {
      count2++;
    } else {
      count2 = 1;
    }
  }
  if (this.getAttribute("id") === "prev2") {
    if (count2 > 1) {
      count2--;
    } else {
      count2 = thumbsArray.length;
    }
  }
  console.log(count2);
  let newSrc2 =
    "https://jepwebbe.github.io/codepen/images/gallery/image" + count2 + ".jpg";
  mainImg.setAttribute("src", newSrc2);
  removeid2();
  thumbsArray[count2-1].setAttribute("id", "active");
}
