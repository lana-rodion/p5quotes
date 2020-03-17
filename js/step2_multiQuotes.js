// Version step2 2020/03/16
/*
Step 2 - Two types of quotes generators
    0. Choose between 2 types of quotes generators (2 sets of sentences)
    1. If the type is selected, select the number of quotes (between 1 and 5) in select list
    2. Once the quotes are generated, offer to generate new citations or stop the program
    3. Display question of choice between "stop" and "continue" the program
    4. The button "Quitter le générateur" to stop the program and reset choices
    5. Alert if the format of choice  is not valid
    6. Insert random quotes in <div> of index.html and display them in browser screen
    =================================================================================
    TO DO:
    * Improve layout of generator
    * Improve finalProposition()
    * Delete previous quotes when we change the them
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
const end = ".\n";
let phrase = "";

class Quote {
	constructor(part1, part2, part3) {
		this.part1 = part1;
		this.part2 = part2;
		this.part3 = part3;
	}
	// Method composition() defines the structure of random quote
	composition() {
		return( getCapitalizeFirstLetter(randomArray(this.part1)) + space + randomArray(this.part2) + space + randomArray(this.part3) + end);
	}
}

let phrase1 = new Quote(data1.part1, data1.part2, data1.part3);
let phrase2 = new Quote(data2.part1, data2.part2, data2.part3);
let theme1 = document.getElementById("Leaders");
let theme2 = document.getElementById("Temps");

// Capitalize the first letter of the first word
function getCapitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create the array with random integer inside to select random pieces of data
function randomArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

// Create the phrase with 3 random quotes from data1 or data2
function generatorRandomQuote() {
	//let theme1 = document.getElementById("Leaders");
	if(theme1.checked === true){
		phrase = phrase1.composition();
		console.log("Citation 'Leaders' : " + phrase);
	} else {
		phrase = phrase2.composition();
		console.log("Citation 'Temps' : " + phrase);
	}
}

let btnGenerator = document.getElementById("btnGenerator");

// Display the propositions of choice on the end of program
function finalProposition() {
	let proposition = Number(prompt("Que voulez-vous faire ?\n\n0 : Je veux bien continuer.\n\n1 : Je m'arrête là."));
	if (proposition === 0) {
		btnGenerator.disabled = false;
		btnGenerator.style.display = "block";
		return console.log("Faites votre choix !");
	} else if (proposition === 1) {
		btnGenerator.disabled = true;
		alert("Merci. Le générateur s'arrête là.\n\nVeuillez rafraîchir la page si vous aviez changer d'avis.\n\nÀ bientôt !");
		return console.log("Merci. Le générateur s'arrête là. À bientôt !");
	} else if (isNaN(proposition) || proposition !== 0 || proposition !== 1) {
		btnGenerator.disabled = true;
		btnGenerator.style.display = "none";
		alert("Le choix saisi est incorrect.\nVeuillez rafraîchir la page pour continuer.");
		return console.log("Le choix saisi est incorrect.\nVeuillez rafraîchir la page pour continuer.");
	} else {
		return console.log("Nombre incorrect.");
	}
}

function resetGenerator() {
	btnGenerator.disabled = true;
	finalProposition();
}

// Generate the number selected of random quotes and display quotes in html page
function multiGenerator() {
	let num = document.getElementById("listSelect").value;
	if ((num >= 1) && (num <= 5)) {
		for (let i = 0; i < num; i++) {
			generatorRandomQuote();
			if(theme1.checked === true){
				document.getElementById("quotesBox").innerHTML += (i+1) + "<span>. Citation&nbsp;</span>" + theme1.value + "&nbsp;: " + phrase + "</br>";
			} else {
				document.getElementById("quotesBox").innerHTML += (i+1) + "<span>. Citation&nbsp;</span>" + theme2.value + "&nbsp;: " + phrase + "</br>";
			}
		}
	}
}

document.addEventListener("DOMContentLoaded", function (e) {
	multiGenerator();
});