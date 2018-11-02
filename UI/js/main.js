let dotMenu = document.getElementById("dot-menu");

/* display side navigation by increasing the width*/
dotMenu.onclick = function(){
    let verMenu = document.getElementById("ul-list");
    verMenu.style.width = "25%";
    document.getElementById("main-page-contents").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    let verMenu = document.getElementById("ul-list");
    verMenu.style.width = "0";
    document.getElementById("main-page-contents").style.marginLeft = "0";
}

