// Exercice Sapin

//Etape 1: Un triangle d’étoiles

/*
function afficherPointeSapin(n) {}
afficherPointeSapin(4);
*/

//Etape 1.1: Une ligne d'étoiles
function afficherEtoiles(n) {
    console.log("*".repeat(n));
}
afficherEtoiles(2);
afficherEtoiles(5);

// Etape 1.2: Carré d’étoiles
function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        afficherEtoiles(largeur);
    }
}
afficherRectangle(5, 5);

//Etape 1.3 Triangle d’étoiles
function afficherTriangleDroite(n) {
    for (let i = 0; i < n; i++) {
        //console.log("*".repeat(i));
        console.log("*".repeat(i) + "\\");
    }
}
afficherTriangleDroite(5);

// Etape 1.4 Second moitié et espaces
function afficherTriangleGauche(n) {
    for (let i = 0; i < n; i++) {
        //console.log(" ".repeat(n - i - 1) + "*".repeat(i));
        console.log(" ".repeat(n - i - 1) + "/" + "*".repeat(i));
    }
}
afficherTriangleGauche(5);

// Etape 1.5 Assemblage et décorations
function afficherPointeSapin(n) {
    console.log(" ".repeat(n) + "+");
    for (let i = 0; i < n; i++) {
        //console.log(" ".repeat(n - i - 1) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
        let TriangleGauche = " ".repeat(n - i - 1) + "/" + "*".repeat(i);
        let TraingleDroite = "*".repeat(i) + "\\";
        console.log(TriangleGauche + "|" + TraingleDroite);
    }
}
afficherPointeSapin(4);

// Etape 2 : Sapin à étages

// Etape 2.1: Afficher une étage
/*
function afficherEtage(hauteur, pointe_offset) {
    let mesure = hauteur + pointe_offset;
    for (let i = pointe_offset; i < mesure; i++) {
        let TriangleGauche = " ".repeat(" " + mesure - i - 1) + "/" + "*".repeat(i);
        let TraingleDroite = "*".repeat(i) + "\\";
        console.log(TriangleGauche + "|" + TraingleDroite);
    }
}

afficherEtage(3, 0);
afficherEtage(3, 1);
afficherEtage(3, 2);*/

//Etape 2.2: Aligner les étages

function afficherEtage1(hauteur, pointe_offset, espacement) {
    let mesure = hauteur + pointe_offset;
    for (let i = pointe_offset; i < mesure; i++) {
        let gauche = " ".repeat(espacement + mesure - i - 1) + "/" + "*".repeat(i);
        let droite = "*".repeat(i) + "\\";
        console.log(gauche + "|" + droite);
    }
}

afficherEtage1(3, 0, 3);
afficherEtage1(3, 1, 2);
afficherEtage1(3, 2, 1);
afficherEtage1(3, 3, 0);

//Etape 2.3: Factorisation

// Fonction AfficheEtage sans le +
function afficherEtage1(hauteur, pointe_offset, espacement) {
    let mesure = hauteur + pointe_offset;
    for (let i = pointe_offset; i < mesure; i++) {
        let gauche = " ".repeat(espacement + mesure - i - 1) + "/" + "*".repeat(i);
        let droite = "*".repeat(i) + "\\";
        console.log(gauche + "|" + droite);
    }
}

// Fonction AfficheEtage avec le +
function afficherEtage2(hauteur, pointe_offset) {
    console.log(" ".repeat(hauteur + pointe_offset + 2) + "+");

    afficherEtage1(3, 0, 3);
    afficherEtage1(3, 1, 2);
    afficherEtage1(3, 2, 1);
    afficherEtage1(3, 3, 0);
    /*
    // Afficher le tronc
    let tronc = " ".repeat(hauteur + 1) + "###";
    for (let i = 0; i < 3; i++) {
        console.log(tronc);
    }
     */
}
/*
afficherEtage2(3, 0, 3);
afficherEtage2(3, 1, 2);
afficherEtage2(3, 2, 1);
afficherEtage2(3, 3, 0);
*/
function afficherSapin(etages, hauteur_etage) {
    for (let etage = 0; etage < etages; etage++) {
        let pointe_offset = etage === 0 ? 0 : 1;
        let espacement = etages - etage - 1;
        afficherEtage2(hauteur_etage, pointe_offset, espacement);
    }
    // Afficher le tronc
    let tronc = " ".repeat(etages + 1) + "###";
    for (let i = 0; i < 3; i++) {
        console.log(tronc);
    }
}
afficherSapin(3, 3);

// Etape 3: Etape 3: Sapin de salon
