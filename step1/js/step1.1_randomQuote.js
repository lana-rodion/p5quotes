/* 
Step 1.1 - Random quotes

    Citations are generated randomly one by one each time the JavaScript program is called
    Each quote is the combination of at least 3 pieces of sentences
    Developer prepares sentence pieces
    The syntax of the sentence must be correct (no exclamation point in the middle of a sentence)
    The program can simply display the result in the JavaScript console

*/

'use strict';

var title = "Les phrases aléatoires et un peu absurdes : ";
console.log(title);

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

document.addEventListener('DOMContentLoaded', function (e) {
	// call function when page is opened
	generatorRandomQuote();

	/*function displayQuote() {
		var p = document.getElementById('randomQuoteZone');
		p.textContent = generatorRandomQuote();
	}*/

});
