/* 
Step 1 - Random quotes

    Citations are generated randomly one by one each time the JavaScript program is called
    Each quote is the combination of at least 3 pieces of sentences
    Developer prepares sentence pieces
    The syntax of the sentence must be correct (no exclamation point in the middle of a sentence)
    The program can simply display the result in the JavaScript console

*/

'use strict';

document.addEventListener('DOMContentLoaded', function (e) {
	
	console.log("Les phrases aléatoires et un peu absurdes :");

	//variable data avec des objets json "cle" : [array]
	let data = {
		partsOfQuotes: {
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
		}
	};
	
	console.log(data);

	let start = data.partsOfQuotes.quotesStart[Math.floor(Math.random() * data.partsOfQuotes.quotesStart.length)];
	let center = data.partsOfQuotes.quotesCenter[Math.floor(Math.random() * data.partsOfQuotes.quotesCenter.length)];
	let finish = data.partsOfQuotes.quotesFinish[Math.floor(Math.random() * data.partsOfQuotes.quotesFinish.length)];
	
	let phrase = start + " " + center +  " " +  finish +  ".";
	console.log(phrase);

});
