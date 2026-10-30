const produits = [
    {id: 1,nom: "clavier",catalogie: "Accessoire", prix: -120, stock: 0},
    {id: 2,nom: "sourie",catalogie: "Accessoire", prix: 80, stock: 8},
    {id: 3,nom: "ecran",catalogie: "Informatique", prix: -900, stock: 0},
    {id: 4,nom: "casque",catalogie: "Accessoire", prix: 0, stock: 34}   
];

const produitsInvalides = produits.filter(produit =>
    !Number.isFinite(produit.prix) ||
    produit.prix < 0 ||
    !Number.isFinite(produit.stock) ||
    produit.stock < 0
);

if (produitsInvalides.length === 0) {
    console.log("Toutes les données sont valides.");
} else {
    console.log("Certains produits contiennent des données invalides :");
    console.log(produitsInvalides);
}
const produitsDisponibles = produits.filter(produit => produit.stock > 0);
console.log(produitsDisponibles);
console.log("Nombre de produits disponibles : " + produitsDisponibles.length);
const valeurtotale = produits.reduce((somme,produit) => somme + produit.prix * produit.stock, 0
);
console.log(valeurtotale);
if (produitsDisponibles.length > 0) {
    let produitMinimal = produitsDisponibles[0];

    for (let i = 1; i < produitsDisponibles.length; i++) {
        if (produitsDisponibles[i].prix < produitMinimal.prix) {
            produitMinimal = produitsDisponibles[i];
        }
    }
    console.log("Produit le moins cher : " + produitMinimal.nom);
    console.log("Prix : " + produitMinimal.prix + " MAD");

} else {
    console.log("Aucun produit n'est disponible.");
}
const resume = produits.map(produit =>
    produit.nom + " - " + produit.prix + " MAD - " + produit.stock + " unités"
);
//console.log(resume);

function estValide(produit) {
    return Number.isFinite(produit.prix) &&
           produit.prix >= 0 &&
           Number.isFinite(produit.stock) &&
           produit.stock >= 0;
}
const produitsValides = produits.filter(estValide);

console.log("Produits valides :", produitsValides);

