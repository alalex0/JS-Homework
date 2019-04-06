(function(){
	"use strict";//современный стандарт JS

/*. Написать функцию сравнения двух массивов. 
Функция принимает на вход два массива, 
сравнивает их и возвращает true, если массивы
 равны и false, если не равны.
*/


let arr3 = [1, -2, 3];
let arr4 = [1, 2, 3];

function compareArr(arr1, arr2){
	//let check = true;
if (!Array.isArray(arr1, arr2)) {
	//check = false;
	console.log("Не массив");
	return false;
	}
if (arr1.length !== arr2.length) {
	//check = false;
	console.log("Массивы по длине не равны");
	return false;
	}	
	for (let i = 0; i < arr1.length; i++) {
		for (let j = i; j <= i ; j++) {
			if (arr1[i] !== arr2[j]) {
			//check = false;
			//break;
		console.log("Массивы не равны");
		//console.log('arr-1 i',arr1[i],'arr-2 j', arr2[j]);
		return false;	
		}
		//console.log('arr-1 i',arr1[i],'arr-2 j', arr2[j]);
		}
	}
	console.log("Массивы равны");
	return true;
}
//вызов функции проверки массива
console.log(compareArr(arr3, arr4));

/*
2. Дано натуральное число N. Вычислите сумму его цифр,
 использую рекурсию (строки, массивы и циклы использовать
  запрещено).
*/
let plus = 0;
function sumNatyral(num1) {
if (num1 != 0){
num1 = parseInt(num1);
plus += num1%10;
sumNatyral(num1 /= 10);
}else {
//console.log("Сумма цифр натурального числа", plus);
}
return plus;
}

console.log(sumNatyral(23515));


/*
3. Напишите функцию range, принимающую три аргумента,
 два обязательных: начало и конец диапазона, 
третий аргумент - необязательный (если он не задан,
 шаг равен единице) – шаг для построения массива.
Функция возвращает массив, который содержит все числа
 из него, включая начальное и конечное. 
Например, вызов функции range(1, 10, 2) должен будет
 вернуть [1, 3, 5, 7, 9].
*/


function rangeArr(num1, num2, num3) {
	if(!num1 || !num2){
	console.log("Введите начальное и конечное значение 1, 1");
	return false;
	}
	if(isNaN(num1) || isNaN(num2)){
	console.log("Введите число");
	return false;
	}
	if (!num3) {
		num3 = 1;
	}	
let i = parseInt(num2/num3);
console.log(i);
let arrRange = [];
let sum = num1;
for (let j = 1; j <= i; j++) {
	arrRange[j] = sum;
	sum = sum + num3;
	}
	//console.log(arrRange);
	return arrRange;
}
// вызов функции range
console.log(rangeArr(1, 10, 2));

/*
4. Напишите функцию,  которая в зависимости от 
переданного в нее целочисленного аргумента count, 
будет выводить слово «товар» в нужно форме 
(«12 товаров», но «22 товара» и тд).
*/
/*
function joinStr(count){
	
if(count === 12){
	let	str = "<<"+count + " товаров>>";
	return str;
	}
	let goods = count%10;
if (goods > 2 && goods <= 4) {
	let str = "<<"+count + " товара>>";
	return str;
	} else if (goods >= 5 && goods <= 9 || goods === 0) {
	let	str = "<<"+count + " товаров>>";
	return str;
	}else if (goods === 1) {
	let	str = "<<"+count + " товар>>";
	return str;
	}
}
*/
function joinStr(coun){
	let count = parseInt(coun);
	if(count === 12 || count === 11 || count === 13 || count === 14){
		let	str = "<<"+count + " товаров>>";
		return str;
		}
		//let goods = count%10;
	if (count%10 >= 2 && count%10 <= 4) {
		let str = "<<"+count + " товара>>";
		return str;
	}
	if (count%10 >= 5 && count%10 <= 9 || count%10 === 0) {
		let	str = "<<"+count + " товаров>>";
		return str;
	}
	if (count%10 === 1) {
		let	str = "<<"+count + " товар>>";
		return str;
	}
}
//вызов функции
let goods;
console.log(joinStr(prompt(goods)));














	}());