<!DOCTYPE HTML>
<html>
    <head>
        <?php include 'support/head.php';?>
        <title>Homepage</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    

    <body id="homepage">
        <?php include './php/support/homepage/disclaimer.php';?>
        <?php include './testnisha/test-fullsize.php';?>
        
        <script src="js/slideshow.js"></script>
        <div class="slideshow-container">

        <img class="ruler" src="./images/ruler.png">
        <img  class="pencil"src="./images/pencil.png">


            <div class="mySlides fade">
                <div class="numbertext">1 / 3</div>
                <img src="./images/flag.jpeg">
                <div class="slideshow-item-text">
                    <h5>Torres Strait Map </h5>
                    <p></p>
                </div>
            </div>


            <div class="mySlides fade">
                <div class="numbertext">2 / 3</div>
                <img src="./images/map.jpg">
                <div class="slideshow-item-text">
                  <h5>Kala Lagaw Ya </h5>
                    <p>Traditional language owned by Western and Central islands of the Torres Strait.</p>
                </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 3</div>
                <img src="./images/people.webp">
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
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
</script>

<script>
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
</script>


    <!-- Website Footer -->
<footer>
		<div class="footer-section about">
			<h1>Kala Lagaw Ya</h1>

			<p>
      Kala Lagaw Ya is a school friendly application that aims to assist students to a basic introduction to the Western and Central island of Torres Strait traditional lanuage. 
			
			</p>

			<section class="contact"> 

				<div>Phone: 0467784589</div>
				<p><a href=mailto:info@lunarhotel&casino.com>info@learnmore.com</a></p>
				<p><a onclick="openForm()">Subscribe to Mailing List</a></p>

				<div class="formPopup" id="popupForm">

					<form action="/action_page.php" class="formContainer">
					  <h2>Enter your Details</h2>
					  <label for="email">
						<strong>E-mail</strong>
					  </label>
					  <input type="text" id="email" placeholder="Your Email" name="email" required>
					  <label for="name">
						<strong>Name</strong>
					  </label>
					  <input type="text" id="psw" placeholder="Your Name" required>
					  <button type="submit" class="btn">Submit</button>
					  <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
					</form>
				</div>
			</section>
		</div>

		<div class="footer-section links">
			<h2>Quick Links</h2>
			<ul>
      <a href="./php/about.php">
				<li><a href="booking.html">About</a></li>
				<li><a href="facilities.html">Flashcard</a></li>
				<li><a href="gallery.html">Translate</a></li>
				<li><a href="about.html">Puzzel</a></li>
				<li><a href="about.html#references">Quiz</a></li>
			</ul>
		</div>

		<div class="footer-section contact-form">
			<h2>Contact Us</h2>
			<br>
			<form action="index.html" method="post">
				<input type="email" name="email" class="contact-input" placeholder="Your email address" required>
				<textarea name="message" rows=7 class="contact-input" placeholder="Your Message" required></textarea>
				<button type="submit" class="button">Send</button>
			</form>
		</div>
	</footer>

    </body>
</html>


<style>
        /* Footer */
        footer {
            background: white;
            color: Black;
            height: 350px;
            position: relative;
            bottom: 0;
            display: flex;
        }

        @media only screen and (min-width: 800px) {
            footer {
                flex-direction: row;
            }
        }

        @media only screen and (max-width: 800px) {
            footer {
                flex-direction: column;
            }
        }

        footer .footer-section {
            flex: 1;
            padding: 25px;
        }

        footer a {
            color: #3d724d;
            transition-property: color;
            transition-duration: 0.1s;
            transition-timing-function: linear;
        }

        footer a:hover {
            color: grey;
        }

        footer .links ul li {
            list-style: none;
        }

        footer .links ul li a {
            display: block;
            margin-bottom: 10px;
            font-size: 1.2em;
            text-decoration: none;
            list-style: none;

        }

        .contact a {
            text-decoration: underline;
        }

        .loginPopup {
            position: relative;
            text-align: center;
            width: 100%;
        }

        .formPopup {
            display: none;
            position: fixed;
            left: 50%;
            top: 5%;
            transform: translate(-50%, 5%);
            border: 3px solid #999999;
            z-index: 9;
        }

        .formContainer {
            max-width: 300px;
            padding: 20px;
            background-color: #fff;
        }

        .formContainer input[type=text] {
            width: 100%;
            padding: 15px;
            margin: 5px 0 20px 0;
            border: none;
            background: #eee;
        }

        .formContainer input[type=text]:focus {
            background-color: #ddd;
            outline: none;
        }

        .formContainer .btn {
            padding: 12px 20px;
            border: none;
            background-color: #8ebf42;
            color: #fff;
            cursor: pointer;
            width: 100%;
            margin-bottom: 15px;
            opacity: 0.8;
        }

        .formContainer .cancel {
            background-color: #cc0000;
        }

        .formContainer .btn:hover,
        .openButton:hover {
            opacity: 1;
        }

        .contact-form form {
            display: flex;
            flex-direction: column;
        }

        .contact-form form button {
            width: 100px;
        }

        .contact-form .contact-input {
            font-size: 20;
        }

        .formPopup, .formPopup h2  {
            color: black;
        }
    </style>


                

