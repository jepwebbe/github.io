// Finde hovedmenuerne
const mainMenus = document.querySelectorAll(".g-navbar .g-nav-head");
console.log(mainMenus);

// Lægger eventlistener på hovedmenuer
for(let i = 0; i <mainMenus.length; i++){
    mainMenus[i].addEventListener("mouseenter", showHide);
    mainMenus[i].addEventListener("mouseleave", showHide);
    console.log(mainMenus);


    function showHide(){
        // finde undermenu som tilhører aktuelle menupunkt
        let subMenu = this.querySelector("ul");
        // så skal vi vise/skjule den aktuelle subMenu
        if(subMenu.style.display !== "block"){
            subMenu.style.display = "block";
        }else{
            subMenu.style.display ="none";
        }
    }
}