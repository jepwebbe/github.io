// Finde hovedmenuerne
const mainMenus = document.querySelectorAll(".g-navbar .g-nav-head");
const subMenus = document.querySelectorAll(".g-navbar .g-nav-head .g-nav-subhead");

// Lægger eventlistener på hovedmenuer
for(let i = 0; i <mainMenus.length; i++){
    mainMenus[i].addEventListener("mouseover", showHide);
    mainMenus[i].addEventListener("mouseout", showHide);
    subMenus[i].addEventListener("mouseover", showHide);
    subMenus[i].addEventListener("mouseout", showHide);    
    console.log(mainMenus);


    function showHide(){
        // finde undermenu som tilhører aktuelle menupunkt
        let subMenu = this.querySelector(".drop");
        // så skal vi vise/skjule den aktuelle subMenu
        if(subMenu.style.display !== "block"){
            subMenu.style.display = "block";
        }else{
            subMenu.style.display ="none";
        }
    }
}