var x;
var slideNumber = 1;
SlideShow(slideNumber);

function nextSlide(n) {
  SlideShow(slideNumber += n);
}

function slide(n) {
  SlideShow(slideNumber = n);
}

function SlideShow(n) {
  var slideImages = document.getElementsByClassName("slideImages");
  var imagePosition = document.getElementsByClassName("imagePosition");
  if (n > slideImages.length) {slideNumber = 1}    
  if (n < 1) {slideNumber = slideImages.length}
  for (x = 0; x < slideImages.length; x++) {
    slideImages[x].style.display = "none";  
  }
  for (x = 0; x < imagePosition.length; x++) {
    imagePosition[x].className = imagePosition[x].className.replace(" active", "");
  }
  slideImages[slideNumber-1].style.display = "block";  
  doimagePositionts[slideNumber-1].className += " active";
}
