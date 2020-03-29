// Version step1.1 2020/03/02 
// Release step1.2 2020/03/21
/* 
Step 1.2 - Random quotes

    Citations are generated randomly one by one each time the JavaScript program is called
    Each quote is the combination of at least 3 pieces of sentences
    Developer prepares sentence pieces
    The syntax of the sentence must be correct (no exclamation point in the middle of a sentence)
    The program can simply display the result in the JavaScript console
    =====================================================
    In JavaScript that is designed to be executed in the browser, it's considered a best practice to avoid using methods on console.
    Calls using console should be stripped before being pushed to production.
*/

"use strict";

//variable data is object with 3 properties : [values in array]
const data = {
    quotesStart: [
        "un leader amène",
        "c’est difficile de diriger",
        "diriger est l’art de faire faire",
        "lorsqu’on regarde en avant vers",
        "un bon leader est une personne",
        "je commence chaque journée",
        "diriger est élever la vision"
    ],
    quotesCenter: [
        "les gens",
        "une charge de cavalerie",
        "à quelqu’un d’autre quelque chose",
        "le siècle prochain, les leaders seront ceux",
        "qui prend un peu plus que sa part du blâme",
        "en me disant à moi-même",
        "d’une personne plus haut"
    ],
    quotesFinish: [
        "où ils veulent aller",
        "si vous pensez que vous semblez bizarre sur un cheval",
        "que vous voulez accompli, parce qu’il veut le faire",
        "qui donnent des pouvoirs aux autres",
        "et un peu moins que sa part d’honneur",
        "quelle influence positive je suis dans ce monde",
        "construire une personnalité au-delà des limites"
    ]
};

function getCapitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create quote text from data
function generatorRandomQuote() {
    // return random text from data
    let start = data.quotesStart[Math.floor(Math.random() * data.quotesStart.length)];
    let center = data.quotesCenter[Math.floor(Math.random() * data.quotesCenter.length)];
    let finish = data.quotesFinish[Math.floor(Math.random() * data.quotesFinish.length)];

    let phrase = getCapitalizeFirstLetter(start) + " " + center + " " + finish + ".";
    console.log(phrase);
}

document.addEventListener("DOMContentLoaded", function (e) {
    // call function when page is loaded
    generatorRandomQuote();

});
