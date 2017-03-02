// plik scripts.js

var names1 = ['Aga', 'Kasia', 'Małgosia', 'Ala'];
var names2 = ['Janek', 'Paweł', 'Andrzej', 'Krzyś'];
var allNames = names1.concat(names2);

console.log(allNames);

var newName = 'Mariusz';
if (allNames.indexOf(newName) === -1) {
	console.log(allNames.push('Mariusz'))
} 