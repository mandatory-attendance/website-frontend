<!-- Website Footer -->
<footer>
		<div class="footer-section about">
			<h1>Lunar Hotel & Casino</h1>

			<p>
				Lunar Hotel & Casino is a revolutionary resort located on the Kepler Crater on The Moon. 
				Our luxury suites and our 24/7 casino, restaurants and bars are guaranteed to impress.
			</p>

			<section class="contact">

				<div>Ph: 1-800-586-27</div>
				<p><a href=mailto:info@lunarhotel&casino.com>info@lunarhotel&casino.com</a></p>
				<p><a onclick="openForm()">Subscribe to Mailing List</a></p>

				<div class="formPopup" id="popupForm">

					<form action="/action_page.php" class="formContainer">
					  <h2>Enter your Details</h2>
					  <label for="email">
						<strong>E-mail</strong>
					  </label>
					  <input type="text" id="email" placeholder="Your Email" name="email" required>
					  <label for="name">
						<strong>Name</strong>
					  </label>
					  <input type="text" id="psw" placeholder="Your Name" required>
					  <button type="submit" class="btn">Submit</button>
					  <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
					</form>
				</div>
			</section>
		</div>

		<div class="footer-section links">
			<h2>Quick Links</h2>
			<ul>
				<li><a href="booking.html">Reservations</a></li>
				<li><a href="facilities.html">Facilities</a></li>
				<li><a href="gallery.html">Gallery</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="about.html#references">References</a></li>
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

    <style>
        /* Footer */
        footer {
            background: #181717;
            color: white;
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
            color: white;
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