<!DOCTYPE HTML>
<html>
    <head>
        <?php include 'php/support/head.php';?>
        <title>KLY Homepage</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    

    <body id="homepage">
        <?php include 'php/support/homepage/disclaimer.php';?>
        <?php include 'testnisha/test-fullsize.php';?>
        
        
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
                    <p>Phone: 0467784589</p>
                    <p><a href=mailto:info@learnkly.com>info@learnkly.com</a></p>
                </section>
            </div>

            <div class="footer-section links">
                <h1>Quick Links</h1>
                <ul>
        <a href="./php/about.php">
                    <li><a href="php/about.php">About</a></li>
                    <li><a href="php/flashcard.php">Flashcard</a></li>
                    <li><a href="php/translation.php">Translate</a></li>
                    <li><a href="php/puzzle.php">Puzzle</a></li>
                    <li><a href="php/quiz.php">Quiz</a></li>
<<<<<<< Updated upstream
                    <li><a href="php/about.php#references">References</a></li>
=======
                    <li><a href="php/references.php">References</a></li>
>>>>>>> Stashed changes
                </ul>
            </div>

            <div class="footer-section contact-form">
                <h1>Contact Us</h1>
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



                

