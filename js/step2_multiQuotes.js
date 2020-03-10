// Version step2 2020/03/10
/*
Step 2 - Two types of quotes generators
    0. Choose between 2 types of quotes generators (2 sets of sentences)
    1. If the type is selected, select the number of quotes (between 1 and 5) in select list
    2. Once the quotes are generated, offer to generate new citations or stop the program
    3. The button "Quitter le générateur" to stop the program
    =====================================================
    4. TO DO:
    * Give users 2 possibilities:  or stop it
      * continue the generation of quotes
      * stop the generation of quotes and exit
*/

"use strict";

//variables data1 and data2 are JavaScript Objects with 3 properties part1, part2, part3 inside
// data1 called if the type1 is selected
const data1 = {
	part1: [
		"un leader amène",
		"c’est difficile de diriger",
		"diriger est l’art de faire faire",
		"lorsqu’on regarde en avant vers",
		"un bon leader est une personne",
		"je commence chaque journée",
		"diriger est élever la vision"
	],
	part2: [
		"les gens",
		"une charge de cavalerie",
		"à quelqu’un d’autre quelque chose",
		"le siècle prochain, les leaders seront ceux",
		"qui prend un peu plus que sa part du blâme",
		"en me disant à moi-même",
		"d’une personne plus haut"
	],
	part3: [
		"où ils veulent aller",
		"si vous pensez que vous semblez bizarre sur un cheval",
		"que vous voulez accompli, parce qu’il veut le faire",
		"qui donnent des pouvoirs aux autres",
		"et un peu moins que sa part d’honneur",
		"quelle influence positive je suis dans ce monde",
		"construire une personnalité au-delà des limites"
	]
};

//variable data2 is called if the type2 is selected
const data2 = {
	part1: [
		"il faut prendre le temps comme il vient,",
		"qui veut triompher d'un obstacle",
		"qu’une vie est heureuse",
		"de toutes les sciences que l’homme peut et doit savoir,",
		"l’homme qui a le plus vécu",
		"il y a si loin de la manière dont on vit de celle dont on devrait vivre,",
		"perdre la vie est perdre le seul bien"
	],
	part2: [
		"les hommes pour ce qu'ils sont,",
		"doit s'armer de la force du lion",
		"quand elle commence par",
		"la principale, c’est la science de vivre",
		"n’est pas celui qui a compté le plus d’années,",
		"que celui qui tient pour réel et pour vrai ce qui devrait l’être sans doute,",
		"que l'on ne pourra regretter d'avoir perdu"
	],
	part3: [
		"et l'argent pour ce qu'il vaut",
		"et de la prudence du serpent",
		"l’amour et finit par l’ambition",
		"de manière à faire le moins de mal et le plus de bien possible",
		"mais celui qui a le plus senti la vie",
		"mais qui malheureusement ne l’est pas, court à une ruine inévitable",
		"puisque l'on ne sera plus là pour s'en rendre compte"
	]
};

const space = " ";
const end = ".";
let phrase = "";

// Create the array with random integer inside to select random pieces of data
function randomArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Capitalize the first letter of the first word
function getCapitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create the phrase with 3 random quotes from data1 or data2
function generatorRandomQuote() {
	let theme1 = document.getElementById("Leaders").checked;
	//let theme2 = document.getElementById("Temps").checked;
	if(theme1 === true){
		phrase = getCapitalizeFirstLetter(randomArray(data1.part1)) + space + randomArray(data1.part2) + space + randomArray(data1.part3) + end;
		console.log("Citation 'Leaders' : " + phrase);
	} else {
		phrase = getCapitalizeFirstLetter(randomArray(data2.part1)) + space + randomArray(data2.part2) + space + randomArray(data2.part3) + end;
		console.log("Citation 'Temps' : " + phrase);
	}
}

function multiGenerator() {
	let num = document.getElementById("listSelect").value;
	for (let i = 0; i < num; i++) {
		generatorRandomQuote();
	}
}

function exitGenerator() {
	alert("Merci. Le générateur s'arrête là.\nRafraîchissez la page pour continuer.");
	document.getElementById("listSelect").options.length = 0;
}

document.addEventListener("DOMContentLoaded", function (e) {
	multiGenerator();
});