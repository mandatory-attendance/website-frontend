<!doctype html>
<html lang="en">

<head>
        <?php include 'support/head.php';?>
        <title>Translation</title>
        <link rel="stylesheet" href="./../css/style.css">
</head>

<body id="translation">
    <?php include './support/disclaimer.php';?>
    <?php include '..//php/support/interactionheader.php';?>
    <style>#translateheader {font-weight: bold;}</style>
    
    <div class="translation-heading">
        <h1>Translation</h1>
    </div>

    <div class="translation-body">
        <div class="translation-body-english">
            <h1>English</h1>
            <input list="engWords" placeholder="Enter word in English" id="english-word" />
            <datalist id="engWords">
            </datalist>
        </div>

        <div class="translation-body-button">
            <button id="translate">
                <img src="../images/translate.png" alt="translate word">
            </button>
        </div>

        <div class="translation-body-indigenous">
            <h1>Kala Lagaw Ya</h1>
            <input list="indiWords" placeholder="Enter word in Kala Lagaw Ya" id="indigenous-word" />
            <datalist id="indiWords"></datalist>
        </div>
    </div>
    
    <div class="translation-info">
        <div class="translation-info-picture">
            <img id="picture">
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="../js/translation.js"></script>
</body>
</html>