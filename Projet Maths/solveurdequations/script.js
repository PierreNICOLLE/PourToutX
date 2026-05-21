function generateTrinome(){ 
    var a = Math.round(Math.random() * 20) - 10;
    var b = Math.round(Math.random() * 20) - 10;
    var c = Math.round(Math.random() * 20) - 10;

    while (a === 0) {
        a = Math.round(Math.random() * 20) - 10;
    }

    divEquation = document.getElementById("equation");
    trinome = a + "x² + " + b + "x + " + c;
    divEquation.innerHTML = trinome;

    return [a,b,c];
    
}

abc = generateTrinome();

resultat = document.getElementById("result");

function correction(a,b,c){
    correctDelta = b**2 - 4*a*c;
    if (correctDelta < 0){
        resultat.innerHTML += "<br>Il n'y a pas de solution réelle.";
    }
    else if (correctDelta == 0){
        x = -b/(2*a);
        resultat.innerHTML += "<br>Il y a une solution réelle : x = " + x;
    }
    else{
        x1 = (-b - Math.sqrt(correctDelta))/(2*a);
        x2 = (-b + Math.sqrt(correctDelta))/(2*a);
        resultat.innerHTML += "<br>Il y a deux solutions réelles : x1 = " + x1 + " et x2 = " + x2;
    }   
}

afficherX = document.getElementById("afficherX");
afficherX.addEventListener("click", () => {
    resultat.innerHTML = "";
    correction(abc[0],abc[1],abc[2]);
})
correctionDelta = document.getElementById("correct");
correctionDelta.addEventListener("click", () => {
    correctDelta = abc[1]**2 - 4*abc[0]*abc[2];
    resultat.innerHTML = "";
    resultat.innerHTML += "<br>Le discriminant Δ est égal à : " + correctDelta;
})

generer = document.getElementById("generate");
generer.addEventListener("click", () => {
    abc = generateTrinome();
    divEquation.innerHTML = trinome;
    resultat.innerHTML = "";

})