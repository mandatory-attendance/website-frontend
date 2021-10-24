//Modal Popup for Form Submition Confirmation 

//Gets modal, Disclaimer button and Exit span
var modal = document.getElementById("Disclaimer");
var DisclaimerBlock = document.getElementById("DisclaimerBlock")
var span = document.getElementsByClassName("ContinueButton")[0];
//Opens modal when user clicks on Disclaimer button.
DisclaimerBlock.onclick = function() {
    modal.style.display = "block";
}
//Closes modal when close button is clicked.
span.onclick = function() {
    modal.style.display = "none"
}

function popup() {
    if (document.body.getAttribute("id") == "homepage") {
        modal.style.display = "block";
        
    }
}

window.addEventListener('load', (event) => {
    popup();
})