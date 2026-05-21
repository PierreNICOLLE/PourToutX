<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" charset="UTF-8">
        <title>Pour Tout X - Révisions</title>
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>

    <header>
        <div class="flex-container">
            <img src="assets/img/pourtoutxlogo.png" alt="logo" class="flex-image">
            <h1 class="flex-text">Laisser un avis</h1>
        </div>
    </header>

        <nav>
            <a href="./accueil.html">Accueil</a>
            <a href="./chapitres.html">Chapitres</a>
            <a href="./avis.php">Avis</a>
        </nav>

        <main>
            <h2>Merci pour votre avis !</h2>

            <?php
            if(isset($_POST['nom'])){

                echo "Nom : " . $_POST['nom'] . "<br>";
                echo "Prénom : " . $_POST['prenom'] . "<br>";
                echo "Note : " . $_POST['note'] . "<br>";
                echo "Commentaire : " . $_POST['commentaire'] . "<br>";
            }
            ?>

            <br>
            <a href="avis.php">Retour</a>
        </main>

        <footer>
        <p>2026 - Site de révision Maths 1ère</p>
        </footer>

        <script src="./scriptmenu.js"></script>
    </body>
</html>