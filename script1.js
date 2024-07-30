function randomDecoration() {
    const decorations = ["*", "o", "+"];
    return decorations[Math.floor(Math.random() * decorations.length)];
}

function afficherEtageDecor(hauteur, pointe_offset, espacement) {
    for (let i = pointe_offset; i < hauteur; i++) {
        let gauche = " ".repeat(espacement + hauteur - i - 1) + "/" + "*".repeat(i).replace(/\*/g, randomDecoration);
        let droite = "*".repeat(i).replace(/\*/g, randomDecoration) + "\\";
        console.log(gauche + "|" + droite);
    }
}

function afficherSapinDecor(etages, hauteur_etage) {
    console.log(" ".repeat(etages + hauteur_etage - 1) + "+");
    for (let etage = 0; etage < etages; etage++) {
        let pointe_offset = etage === 0 ? 0 : 1;
        let espacement = etages - etage - 1;
        afficherEtageDecor(hauteur_etage, pointe_offset, espacement);
    }
    // Afficher le tronc
    let tronc = " ".repeat(etages + hauteur_etage - 1) + "###";
    for (let i = 0; i < 3; i++) {
        console.log(tronc);
    }
}

afficherSapinDecor(3, 3);
