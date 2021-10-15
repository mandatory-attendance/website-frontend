<!DOCTYPE html>
<html lang="en">
	<?php include'support/head.php';?>

    <body id="flash-body">

		<?php include'support/disclaimer.php';?>

		<?php include'support/sidenav.php';?>

		<header id = "flashcards-header">Flashcards</header>

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

		<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
		<script src="/js/flashcards.js"></script>
    </body>
</html>