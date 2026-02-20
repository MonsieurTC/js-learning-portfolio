// JS Learning Portfolio - Jour 1 : Variables & Types

// Exemple fourni
let nom = "Richard";
const age = 46;
var pays = "France";

console.log("Exemple :", nom, age, pays);

// Mini-exercice 1 : 3 variables différentes de chaque type
// Type string
let nom2 = "Alice";
let prenom2 = "Bob";
let ville = "Toulouse";

// Type number
const annee = 2026;
const mois = 2;
const jour = 20;

// type boolean
var actif = true;
var retraité = false;

// type null (objet spécial pour indiquer l'absence de valeur)
var absent = null;

// Mini-exercice 2 : tester typeof (typeof est un opérateur qui retourne une chaîne de caractères indiquant le type de la variable)
console.log(typeof nom2);      // string
console.log(typeof annee);     // number
console.log(typeof actif);     // boolean
console.log(typeof absent);    // object (null est un objet en JS)

// Mini-exercice 3 : conversion
let strNumber = "123";
//Number est une fonction constructeur qui convertit une chaîne de caractères en nombre, si possible. Si la conversion échoue, elle retourne NaN (Not a Number).
let convNumber = Number(strNumber);
// Boolean est une fonction constructeur qui convertit une valeur en booléen. Les valeurs suivantes sont considérées comme fausses : false, 0, -0, 0n, "", null, undefined et NaN. Toutes les autres valeurs sont considérées comme vraies.
let convBool = Boolean(convNumber);

console.log("Conversion :", strNumber, "→", convNumber, "→", convBool);