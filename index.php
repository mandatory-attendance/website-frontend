<!DOCTYPE HTML>
<html>
    <head>
        <?php include 'php/support/head.php';?>
        <title>KLY Homepage</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    

    <body id="homepage">
        <?php include './php/support/homepage/disclaimer.php';?>
        <?php include './testnisha/test-fullsize.php';?>
        
        
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


    <!-- Website Footer -->
<footer>
		<div class="footer-section about">
			<h1>Kala Lagaw Ya</h1>

			<p>
            KLY is a web-based application that aims to assist students in learning 
            the basics of the traditional Western and Central island languages
            of the Torres Strait Islands. 
			
			</p>

			<section class="contact"> 
				<div>Phone: 0467784589</div>
				<p><a href=mailto:info@learnkly.com>info@learnkly.com</a></p>
			</section>
		</div>

		<div class="footer-section links">
			<h2>Quick Links</h2>
			<ul>
      <a href="./php/about.php">
				<li><a href="php/about.php">About</a></li>
				<li><a href="php/flashcard.php">Flashcard</a></li>
				<li><a href="php/translation.php">Translate</a></li>
				<li><a href="php/puzzle.php">Puzzle</a></li>
				<li><a href="php/quiz.php">Quiz</a></li>
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

    <script src="js/slideshow.js"></script>
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


                

