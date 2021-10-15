<!DOCTYPE HTML>
<html>
    <head>
        <?php include './support/head.php';?>
        <title>Puzzle</title>
        <link rel="stylesheet" href="./../css/style.css">
    </head>

    <body id = "puzzleBody">
        <?php include './support/disclaimer.php';?>
        
        <header id = "puzzleHeader">
            Puzzle Mode
        </header>

        <?php include './support/sidenav.php';?>

        <a id="learning-exit" href="../index.html">&times;</a>
        <!--<div id = "HowToPlay"><button>How to Play</button></div>-->
        
        <section id = "puzzleQuestion">
            <figcaption id = "puzzleEnglishQuestion">
            </figcaption>
            <div id = "questionPict">
                <img id = "picture" src = "./../img/child.jpg">
            </div>
        </section>

        <section id = "puzzleAnswer">
            <div id = "answerTarget">   
            </div>
            
            <div id ="answerSource">
            </div>
        </section>
        
        <div id = 'tryAgain'>
            Try Again
        </div>

        <nav id = "nextPuzzle">
            <button class = "nextButton">Next</button>
        </nav>
        
        <nav class="HowToPlayButton">
            <a id="HowToPlayBlock"><button>How To Play</button></a>
        </nav>
        
    
        <div id="HowToPlay" class="modal1">
    
            <div class="DisclaimerContent">
                <span class="exit">&times;</span>
                <h2>How To Play</h2>
                <p>This is how to play. </p>
            </div>
    
        </div>

        
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="./../js/modal.js"></script>
        <script src="./../js/puzzle.js"></script>
        
        
    </body>

</html>