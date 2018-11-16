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

// modal code gotten from w3dchools website

// Get the update modal
var modalUpdate = document.getElementById('modalUp');

function myFunction(){
  modalUpdate.style.display = "block";
}

// get the details modal
var modalDet = document.getElementById('modalDeta');

function myFunction2(){
 modalDet.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
var clseBtn1 = document.getElementById('upModal');
var clseBtn2 = document.getElementById("detModal");

clseBtn1.onclick = function(){
    modalUpdate.style.display = "none";
}

clseBtn2.onclick = function(){
    modalDet.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}