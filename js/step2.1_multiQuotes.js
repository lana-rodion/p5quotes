// Version step2.1 2020/03/02 
/* 
Step 2 - Two types of configurable quotes generators

    Choose the number of citations generated (from 1 to 5)
    Choose between 2 types of citation generators (to have 2 sets of sentences)
    Once the citations are generated, offer to generate new citations or stop the program

*/

"use strict";

//variable data1 is object with 3 properties : [values in array]
const data1 = {
	p1: [
		"un leader amène",
		"c’est difficile de diriger",
		"diriger est l’art de faire faire",
		"lorsqu’on regarde en avant vers",
		"un bon leader est une personne",
		"je commence chaque journée",
		"diriger est élever la vision"
	],
	p2: [
		"les gens",
		"une charge de cavalerie",
		"à quelqu’un d’autre quelque chose",
		"le siècle prochain, les leaders seront ceux",
		"qui prend un peu plus que sa part du blâme",
		"en me disant à moi-même",
		"d’une personne plus haut"
	],
	p3: [
		"où ils veulent aller",
		"si vous pensez que vous semblez bizarre sur un cheval",
		"que vous voulez accompli, parce qu’il veut le faire",
		"qui donnent des pouvoirs aux autres",
		"et un peu moins que sa part d’honneur",
		"quelle influence positive je suis dans ce monde",
		"construire une personnalité au-delà des limites"
	]
};

//variable data2 is objet with 3 properties : [values in array]
const data2 = {
	q1: [
		"il faut prendre le temps comme il vient,",
		"qui veut triompher d'un obstacle",
		"qu’une vie est heureuse",
		"de toutes les sciences que l’homme peut et doit savoir,",
		"l’homme qui a le plus vécu ",
		"il y a si loin de la manière dont on vit de celle dont on devrait vivre,",
		"perdre la vie est perdre le seul bien"
	],
	q2: [
		"les hommes pour ce qu'ils sont,",
		"doit s'armer de la force du lion",
		"quand elle commence par",
		"la principale, c’est la science de vivre",
		"n’est pas celui qui a compté le plus d’années,",
		"que celui qui tient pour réel et pour vrai ce qui devrait l’être sans doute,",
		"que l'on ne pourra regretter d'avoir perdu"
	],
	q3: [
		"et l'argent pour ce qu'il vaut",
		"et de la prudence du serpent",
		"l’amour et finit par l’ambition",
		"de manière à faire le moins de mal et le plus de bien possible",
		"mais celui qui a le plus senti la vie",
		"mais qui malheureusement ne l’est pas, court à une ruine inévitable",
		"puisque l'on ne sera plus là pour s'en rendre compte"
	]
};

function getCapitalizeFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

/*function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}*/

// Create quote text from data
function generatorRandomQuote() {
	const space = " ";
	const end = ".";
	// data1 random elements
	let part1 = data1.p1[Math.floor(Math.random() * data1.p1.length)];
	let part2 = data1.p2[Math.floor(Math.random() * data1.p2.length)];
	let part3 = data1.p3[Math.floor(Math.random() * data1.p3.length)];
	let phrase1 = getCapitalizeFirstLetter(part1) + space + part2 + space + part3 + end;

	// data2 random elements
	let q1 = data2.q1[Math.floor(Math.random() * data2.q1.length)];
	let q2 = data2.q2[Math.floor(Math.random() * data2.q2.length)];
	let q3 = data2.q3[Math.floor(Math.random() * data2.q3.length)];
	// return random text from data
	let phrase2 = getCapitalizeFirstLetter(q1) + space + q2 + space + q3 + end;
	console.log(phrase1);
}

function multiGenerator() {
	let num1 = document.getElementById("listSelect1").value;
	let num2 = document.getElementById("listSelect2").value;
	//let type1 = document.getElementById("type1");
	//let type2 = document.getElementById("type2");

	if (num1 !== 0) {
		for (let i = 0; i < num1; i++) {
			generatorRandomQuote();
		}
	} else {
		for (let i = 0; i < num2; i++) {
			generatorRandomQuote();
		}
	}
}

/*function displayPhrase () {
	let type1 = document.getElementById("listSelect1");
	let type2 = document.getElementById("listSelect2");
	if (type1 === true) {
		console.log(generatorRandomQuote(phrase1));
	} else if (type2 === true){
		console.log(generatorRandomQuote(phrase2));
	}
}*/

function exitGenerator() {
	alert("Merci. Le générateur s'arrête là.\nRafraîchissez la page pour continuer.");
	document.getElementById("listSelect1").options.length = 0;
	document.getElementById("listSelect2").options.length = 0;
}

document.addEventListener("DOMContentLoaded", function (e) {

});
