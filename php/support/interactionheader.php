<div id="interactHeader">
    <div id="interactLogo">
        <a href="/index.php">
        <img src="./../images/KLY LOGO.png" alt="KLY LOGO">
        </a>
    </div>

    <div id="interactIcon">
        <figure>
            <a href="./php/about.php">
            <img src ="./../images/about.png"  alt="kathy">
            </a>
            <figcaption>ABOUT</figcaption>
        </figure>
        <figure>
            <a href="./php/flashcard.php">
            <img src ="./../images/flash.png"  alt="steve">
            </a>
            <figcaption>FLASHCARD</figcaption>
        </figure>
        <figure>
            <a href="./php/translation.php">
            <img src ="./../images/translate.png" alt="todd">
            </a>
            <figcaption>TRANSLATE</figcaption>
        </figure>
        <figure>
            <a href="./php/puzzle.php">
            <img src ="./../images/puzzle.png" alt="don">
            </a>
            <figcaption>PUZZLE</figcaption>
        </figure>
        <figure>
            <a href="./php/quiz.php">
            <img src ="./../images/quiz.png" alt="sean">
            </a>
            <figcaption>QUIZ</figcaption>
        </figure>
        </div>
    </div>
</div>

<style>
#interactHeader {
    z-index: 1;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 10vw;
    background-image: url('./../images/backgroundLogo.png');
    background-size: 150% 185%;
    background-repeat: no-repeat;
}

#interactLogo {
    display: flex;
    width: 10vw;
    height: 0.2vw;
    align-items: center;  
    margin: 4vw;  
}

#interactLogo a >img {
    width: 100%;
}

#interactLogo a >img:hover{
    filter: drop-shadow(7px 7px 7px rgb(0, 0, 0));
}

#interactIcon {
    width: 70vw;
    height: 85%;
    margin:10px auto;
    padding:5px;
    text-align:center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
 }

#interactIcon figure a > img{
    width: 2vw;
    height: 2vw;
}

#interactIcon figure a > img:hover{
    filter: drop-shadow(8px 8px 8px rgb(0, 0, 0));
}
</style>