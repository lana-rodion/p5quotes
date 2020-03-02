// Version step2.0 2020/03/02 
/* 
Step 2 - Configurable Quotes

    Choose the number of citations generated (from 1 to 5)
    Choose between 2 types of citation generators (to have 2 sets of sentences)
    Once the citations are generated, offer to generate new citations or stop the program

*/

"use strict";

//variable data is objet with 3 properties : [values in array]
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
	var start = data.quotesStart[Math.floor(Math.random() * data.quotesStart.length)];
	var center = data.quotesCenter[Math.floor(Math.random() * data.quotesCenter.length)];
	var finish = data.quotesFinish[Math.floor(Math.random() * data.quotesFinish.length)];

	var phrase = getCapitalizeFirstLetter(start) + " " + center + " " + finish + ".";
	console.log(phrase);
}

function multiGenerator() {
    let num = document.getElementById('listSelect').value;
    if(num == 0) {
        console.log("Pour générer des citations, merci de choisir un nombre.");
		alert("Pour générer des citations, merci de choisir un nombre.");
    } else {
        for (let i = 0; i < num; i++) {
            generatorRandomQuote();
        }
    }
}

function exitGenerator() {
  	alert("Merci. Le générateur s'arrête là. \nRafraîchissez la page pour continuer.");
	document.getElementById('listSelect').options.length = 0;
}

document.addEventListener("DOMContentLoaded", function (e) {

});
