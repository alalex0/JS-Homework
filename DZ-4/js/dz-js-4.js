(function () {
	"use strict";
/*
1. Написать функцию 
поиска в строке указанной подстроки и замены ее на новую.
Строку, ее подстроку для замены и новую 
подстроку вводит пользователь. 
*/


function searchString(str, str1, str2) {
		if(str.includes(str1)){
		let strreplase = str.replace(str1, str2);
		console.log(strreplase);
		return strreplase;
	}	
		console.log("Совпадений нет");
		return false;
}
//вызов функции
console.log(searchString(prompt("Введите строку"), prompt("Введите подстроку для поиска"), prompt("Введите строку для замены подстроки")));


/*
2. Вводится строка, содержащая буквы, целые неотрицательные
 числа и иные символы.
   Написать функцию, которая реализует следующий функционал:
    требуется все числа, которые встречаются в строке, 
    поместить в отдельный целочисленный массив.
   Например, если дана строка "дом 48, корпус 9, парадная 7, 
   этаж 4", то в массиве должны оказаться числа 48, 9, 7 и 4
*/



function searchNamber(str) {
	let arr = str.split(" "); 
	let arrnew = [];
		for (let i = 0; i < arr.length; i++) {
				if (!isNaN(parseInt(arr[i]))) {
				arrnew.push(arr[i]);
				}
			}
			console.log(arrnew);
			return arrnew;
		}
//вызов функции
//searchNamber(prompt("Введите строку содержащую буквы и целые числа (дом 48)"));


/*
3. Допустим, пользователь вводит названия городов через пробел.
   Вы их присваиваете переменной.
   Переставьте названия так, чтобы они были упорядочены по 
   алфавиту.
 */

function searchABC(str) {
	let arr = str.split(" "); 
	let arrnew = [];
		console.log(arr.sort());
	}
//вызов функции
//searchABC(prompt("Введите название города через пробел"));









}());