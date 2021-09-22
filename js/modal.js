//Modal Popup for Form Submition Confirmation 

//Gets modal, Disclaimer button and Exit span
var modal1 = document.getElementById("HowToPlay");
var HowToPlayBlock = document.getElementById("HowToPlayBlock")
var span = document.getElementsByClassName("exit")[0];
//Opens modal when user clicks on Disclaimer button.
HowToPlayBlock.onclick = function() {
    modal1.style.display = "block";
}
//Closes modal when close button is clicked.
span.onclick = function() {
    modal1.style.display = "none"
}