//Modal Popup for Form Submition Confirmation 

//Gets modal, Disclaimer button and Exit span
var modal = document.getElementById("HowToPlay");
var DisclaimerBlock = document.getElementById("DisclaimerBlock")
var span = document.getElementsByClassName("exit")[0];
//Opens modal when user clicks on Disclaimer button.
DisclaimerBlock.onclick = function() {
    modal.style.display = "block";
}
//Closes modal when close button is clicked.
span.onclick = function() {
    modal.style.display = "none"
}