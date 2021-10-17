<!DOCTYPE HTML>
<html>
    <head>
        <?php include './php/support/head.php';?>
        <title>Homepage</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    

    <body id="banner">
        <?php include './php/support/homepage/disclaimer.php';?>
        <?php include './testnisha/test-fullsize.php';?>
        
        <script src="./js/slideshow.js"></script>
        <div class="slideshow-container">

            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="./images/map.jpg">
                <div class="slideshow-item-text">
                    <h5>okay </h5>
                    <p>hedsjhuhfdhjhhdhfuhdfuhdfuhduhduhudsfhbdhbdhbd</p>
                </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="./images/people.webp">
                <div class="slideshow-item-text">
                    <h5>okay </h5>
                    <p>hedsjhuhfdhjhhdhfuhdfuhdfuhduhduhudsfhbdhbdhbd</p>
                </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="./images/knowledge.png">
                <div class="slideshow-item-text">
                    <h5>okay </h5>
                    <p>hedsjhuhfdhjhhdhfuhdfuhdfuhduhduhudsfhbdhbdhbd</p>
                </div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>

        </div>

        <br>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span> 
            <span class="dot" onclick="currentSlide(2)"></span> 
            <span class="dot" onclick="currentSlide(3)"></span> 
        </div>

        <script>
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
</script>
    </body>
</html>

                

