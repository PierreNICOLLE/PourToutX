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
            <p>Le site vous plaît ? N'hésitez pas à nous donner un avis !</p>

            <form action="traitement.php" method="post">

            Nom :<br>
            <input type="text" name="nom" required><br><br>

            Prénom :<br>
            <input type="text" name="prenom" required><br><br>

            Note (sur 10) :<br>
            <input type="number" name="note" min="0" max="10" step="1" required><br><br>

            Commentaire :<br>
            <textarea name="commentaire"></textarea><br><br>

            <input type="submit" value="Envoyer">

        </form>

        </main>

        <footer>
        <p>2026 - Site de révision Maths 1ère</p>
        </footer>

        <script src="./scriptmenu.js"></script>
    </body>
</html>