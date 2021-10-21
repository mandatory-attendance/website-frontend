<!DOCTYPE HTML>
<html>
    <head>
        <?php include 'support/head.php';?>
        <title>Puzzle</title>
        <link rel="stylesheet" href="./../css/style.css">
    </head>

    <body id = "puzzle">
        <?php include 'support/disclaimer.php';?>
        <?php include 'support/interactionheader.php';?>
        
        <!-- <header id = "puzzleHeader">
            Puzzle Mode
        </header> -->


        <a id="puzzle-exit" href="../index.php">&times;</a>
        <!--<div id = "HowToPlay"><button>How to Play</button></div>-->

        <section id = "finishMessage">
            <div id = "topMessage">
                CONGRATULATIONS!!!
            </div>
            <div id = "botMessage">
                You have completed the puzzle mode.<br>
                Press <a href = "../index.php"><span id = "puzzleHere">Here</span></a> to return to Homepage.
                <!-- <a href = "../index.php">
                <img id = "puzzleBackToHome" src = "../images/home.png"><br>
                Home
                </a> -->
            </div>
        </section>
        
        <section id = "puzzleQuestion">
            
            <div id = "questionPict">
                
            </div>
        </section>

        <div id = 'tryAgain'>
            Try Again
        </div>

        <section id = "puzzleAnswer">
            <div id = "answerTarget">   
            </div>
            
            <div id ="answerSource">
            </div>
        </section>

        <nav id = "nextPuzzle">
            <button class = "nextButton">Next</button>
        </nav>
        
        <!-- <nav class="HowToPlayButton">
            <a id="HowToPlayBlock"><button>How To Play</button></a>
        </nav>
        
    
        <div class="DisclaimerContent" class = "modal1">
            <span class="exit">&times;</span>
            <h2>How To Play</h2>
            <p>This is how to play. </p>
        </div> -->

        
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <!-- <script src="./../js/modal.js"></script> -->
        <script src="./../js/puzzle.js"></script>
        
        
    </body>

</html>