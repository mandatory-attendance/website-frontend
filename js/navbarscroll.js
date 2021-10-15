var navbar; 
var offset; 

// Add the offset class to the navbar when the user reaches its scroll position. Remove "sticky" when the user leave the scroll position
function myscroll() {
  if (window.pageYOffset >= offset) { // If user moves from the top of page relocates the navbar
    navbar.classList.add("offset")
  } else {
    navbar.classList.remove("offset"); 
  }
}

//when the user scrolls down the page function is executed 
window.onscroll = function() {myscroll()};

window.onload = function() {
  navbar = document.getElementById("page-header"); //gets the navbar
  offset = navbar.offsetTop; //gets the offset position of the navbar
  myscroll();
}; 