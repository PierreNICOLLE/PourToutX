//BOUTONS//

//Bouton Second degré
var lienseconddegre = document.getElementById('seconddegre');
if (lienseconddegre) {
    lienseconddegre.addEventListener('click', ()=>{
        window.location.href = "Chapitres/seconddegre.html";
    });
}

//Bouton Cercle trigo
var liencercletrigo = document.getElementById('cercletrigo');
if (liencercletrigo) {
    liencercletrigo.addEventListener('click', ()=>{
        window.location.href = "Chapitres/cercletrigo.html";
    });
}

//Bouton Suites (généralités)
var liengeneralitessuites = document.getElementById('generalitessuites');
if (liengeneralitessuites) {
    liengeneralitessuites.addEventListener('click', ()=>{
        window.location.href = "Chapitres/generalitessuites.html";
    });
}

//Bouton Dérivation
var lienderivation = document.getElementById('derivation');
if (lienderivation) {
    lienderivation.addEventListener('click', ()=>{
        window.location.href = "Chapitres/derivation.html";
    });
}

//Bouton Probas conditionnelles
var lienprobascond = document.getElementById('probascond');
if (lienprobascond) {
    lienprobascond.addEventListener('click', ()=>{
        window.location.href = "Chapitres/probascond.html";
    });
}

//Bouton Cosinus Sinus
var liencossin_nbreel = document.getElementById('cossin_nbreel');
if (liencossin_nbreel) {
    liencossin_nbreel.addEventListener('click', ()=>{
        window.location.href = "Chapitres/cossin_nbreel.html";
    });
}

//Suites arithmétiques
var liensuitesarithmetiques = document.getElementById('suitesarithmetiques');
if (liensuitesarithmetiques) {
    liensuitesarithmetiques.addEventListener('click', ()=>{
        window.location.href = "Chapitres/suitesarithmetiques.html";
    });
}

//Applications dérivation
var lienapplicationsderivation = document.getElementById('applicationsderivation');
if (lienapplicationsderivation) {
    lienapplicationsderivation.addEventListener('click', ()=>{
        window.location.href = "Chapitres/applicationsderivation.html";
    });
}

//Bouton Produit scalaire
var lienproduitscalaire = document.getElementById('produitscalaire');
if (lienproduitscalaire) {
    lienproduitscalaire.addEventListener('click', ()=>{
        window.location.href = "Chapitres/produitscalaire.html";
    });
}

//Bouton Suites géométriques
var liensuitesgeometriques = document.getElementById('suitesgeometriques');
if (liensuitesgeometriques) {
    liensuitesgeometriques.addEventListener('click', ()=>{
        window.location.href = "Chapitres/suitesgéométriques.html";
    });
}

//Bouton Variables aléatoires
var lienvariablesaleatoires = document.getElementById('variablesaleatoires');
if (lienvariablesaleatoires) {
    lienvariablesaleatoires.addEventListener('click', ()=>{
        window.location.href = "Chapitres/variablesaleatoires.html";
    });
}

//Bouton Fontion exponentielle
var lienfonctionexponentielle = document.getElementById('fonctionexponentielle');
if (lienfonctionexponentielle) {
    lienfonctionexponentielle.addEventListener('click', ()=>{
        window.location.href = "Chapitres/FonctionExponentielle.html";
    });
}

//Animation des "chapitres"
document.querySelectorAll(".carte").forEach(carte => {
    carte.addEventListener("mouseenter", () => {
        carte.style.transform = "translateY(-10px)";
        carte.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
    });

    carte.addEventListener("mouseleave", () => {
        carte.style.transform = "translateY(0)";
        carte.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    });
});

//Animation des titres :
document.querySelectorAll("h2, h3").forEach(titre => {
    titre.addEventListener("mouseenter", () => {
        titre.style.color = "#1abc9c";
        titre.style.transform = "scale(1.05)";
    });

    titre.addEventListener("mouseleave", () => {
        titre.style.color = "";
        titre.style.transform = "scale(1)";
    });
});

//Animation des boutons :
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.1)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});