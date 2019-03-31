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


















	}());