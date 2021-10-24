<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include 'support/head.php';?>
        <title>Quiz</title>
        <link rel="stylesheet" href="../css/style.css">
    </head>

    <?php include 'support/disclaimer.php';?>
    <?php include 'support/interactionheader.php';?>
    <style>#quizheader {font-weight: bold; color: #648B7F}</style>

    <body id="quiz">
        <section id="quiz-start">
            <h1>Quiz Mode</h1>
            <h2>Test your knowledge of the words you've learned so far with the quiz!</h2>
            <button id="quiz-begin">Begin</button>
        </section>
        <div class="quiz-body">
            
            <div class="quiz-ques">
                <p id="question">Testing</p>
            </div>
            
            <div id=quiz-answers>
                <button id="a1">
                    <p id="option1"></p>
                </button>
                <button id="a2">
                    <p id="option2"></p>
                </button>
                <button id="a3">
                    <p id="option3"></p>
                </button>
            </div>

            <div id="button-flex">
                <button id="next-question">Next</button>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="./test.js"></script>
    </body>
</html>