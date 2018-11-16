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

// Get the modal
var modal = document.getElementById('modal');

function myFunction(){
  modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}