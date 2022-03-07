const extraText = document.querySelectorAll(".readmore__extratext");
const button = document.querySelectorAll(".readmore__button");

for (let i = 0; i < extraText.length; i++) {
        extraText[i].style.display = "none";
    }

    //Forløkke der kalder funktionen vis på read more knapperne 
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener("click", showText);
    }

    function showText() {
        let txt = this.previousElementSibling;
        if (txt.style.display === "block") {
            txt.style.display = "none";
            this.textContent = "Læs mere...";
        } else {
            txt.style.display = "block";
            this.textContent = "Læs mindre...";
        }
    }