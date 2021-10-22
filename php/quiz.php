<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include 'support/head.php';?>
        <title>Quiz</title>
        <link rel="stylesheet" href="../css/style.css">
    </head>

    <?php include 'support/disclaimer.php';?>
    <?php include 'support/interactionheader.php';?>
    <style>#quizheader {font-weight: bold;}</style>

    <body id="quiz">
        <!-- <section id="quiz-start">
            <h1>Quiz Mode</h1>
            <h2>Test your knowledge of the words you've learned so far with the quiz!</h2>
            <button id="quiz-begin">Begin</button>
        </section> -->
        <div id="question-flex">
            <section id="quiz-question">
                <p></p>
            </section>
        </div>

        <section id=quiz-answers>
            <section id="a1"><p></p></section>
            <section id="a2"><p></p></section>
            <section id="a3"><p></p></section>
        </section>

        <div id="button-flex">
            <button id="next-question">Next</button>
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="../js/quiz.js"></script>
    </body>
</html>