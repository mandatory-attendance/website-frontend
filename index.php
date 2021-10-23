<!DOCTYPE HTML>
<html>
    <head>
        <?php include 'php/support/head.php';?>
        <title>KLY Homepage</title>
        <link rel="stylesheet" href="css/style.css">
    </head>
    
    <body id="homepage">

        <!-- Website Disclaimer -->
        <?php include 'php/support/homepage/disclaimer.php';?>

        <!-- Website Navbar -->
        <?php include 'php/support/homepage/navbar.php';?>
        
        <!-- Website Slideshow -->
        <div class="slideshow-container">
        <img class="ruler" src="./images/ruler.png">
        <img  class="pencil"src="./images/pencil.png">

            <div class="mySlides fade">
                <div class="numbertext">1 / 4</div>
                <img class= "flag" src="./images/flag.jpeg">
                <div class="slideshow-item-text">
                    <h5>Torres Strait Islands Flag</h5>
                    <p>The green at the top and bottom of the flag represent the land 
                        and the blue represents the sea. The black lines represent the 
                        Torres Strait Islander people. The centre of the flag shows a 
                        white dhari (dancer’s headdress) which represents Torres 
                        Strait Islander culture.</p>
                </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">2 / 4</div>
                <img class= "map" src="./images/map.jpg">
                <div class="slideshow-item-text">
                  <h5>Kala Lagaw Ya Language</h5>
                    <p>Traditional language owned by Western and Central islands of the Torres Strait.</p>
                </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">3 / 4</div>
                <img class= "people"src="./images/people.webp">
                <div class="slideshow-item-text">
                    <h5>Torres Strait Island Peoples</h5>
                    <p>These unique outfits are traditionally used for dance and performing arts. Each island 
                        has a unique set of songs, dances and ways to illustrate their island’s stories.</p>
                </div>
            </div>

            <div class="mySlides fade">
                <div class="numbertext">4 / 4</div>
                <img class= "people"src="./images/teach.png">
                <div class="slideshow-item-text">
                    <h5>Preserving Indigenous languages</h5>
                    <p>Indigenous languages, such as Kala Lagaw Ya, are becoming extinct at a faster rate 
                        than anywhere else in the world.</p>
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
            <span class="dot" onclick="currentSlide(4)"></span> 
        </div>

        <script src="js/slideshow.js"></script>
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
                    <li><a href="php/references.php">References</a></li>
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
    </body>
</html>



                

