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



	}());