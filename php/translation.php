<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Translation</title>
    <link rel="stylesheet" href="../css/style.css">
</head>

<body>
    <?php include 'disclaimer.php';?>
    <?php include 'sidenav.php';?>
    
    <div class="translation-heading">
        <h1>Translation</h1>
    </div>

    <div class="translation-body">
        <div class="translation-body-english">
            <h1>English</h1>
            <textarea required placeholder="Enter word in English" id="english-word"></textarea>
                <!-- Value to be set -->
        </div>
        <div class="translation-body-button">
            <button id="translate">
                <img src="../images/flash.png" alt="translate word">
            </button>
        </div>
        <div class="translation-body-indigenous">
            <h1>Kala Lagaw Ya</h1>
            <textarea required placeholder="Enter word in Kala Lagaw Ya" id="indigenous-word"></textarea>
                <!-- Value to be set -->
        </div>
    </div>
    
    <div class="translation-info">
        <div class="translation-info-picture">

        </div>
        <div class="translation-info-summary">

        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="../js/translation.js"></script>
</body>
</html>