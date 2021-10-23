<!DOCTYPE html>
<html lang="en">
	<head>
        <?php include 'support/head.php';?>
        <title>Flashcard</title>
        <link rel="stylesheet" href="../css/style.css">
    </head>

    <body id="flashcards">

		<?php include'./support/disclaimer.php';?>
		<?php include '..//php/support/interactionheader.php';?>
		<style>#flashcardsheader {font-weight: bold; color: #648B7F;}</style>


		<!-- <header id = "flashcards-header">Flashcards</header> -->
		<img class="flashPencil" src="./../images/flash_pencil.png">
		<img class="flashRuler" src="./../images/flash_ruler.png">


		<section id="flash">
			<section class="scene scene--card">
				<section class="card">
				<section class="card__face card__face--front"><p class = "englishword"></p></section>
				<section class="card__face card__face--back"><p class = "kalaword"></p></section>
				</section>
			</section>
		</section>

		<button id="prev_button">Previous</button>

		<button id="next_button">Next</button>

		<section id="current-language"><p></p></section>

		<section id="word-num"><p></p></section>

		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="../js/flashcards.js"></script>
    </body>
</html>