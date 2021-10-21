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

        <section id = "finishMessage">
            <div id = "topMessage">
                CONGRATULATIONS!!!
            </div>
            <div id = "botMessage">
                You have completed the puzzle mode.<br>
                Press <a href = "../index.php"><span id = "puzzleHere">Here</span></a> to return to Homepage.

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

        
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="./../js/puzzle.js"></script>
        
        
    </body>

</html>