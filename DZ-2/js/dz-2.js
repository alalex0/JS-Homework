/*1. Дан массив целых чисел. Числа не отсортированы и могут повторяться. 
Необходимо найти в данном массиве такие два числа 
M и N, чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд
 Для решения достаточно найти хотя бы одну подходящую пару чисел M и N.
 Подумайте над оптимальным вариантом поиска.
   */

   let arr = [1, 4, 6, 7,0,2,5,3,4];
   console.log(arr);

 

 for (let i = 0; i < arr.length - 1; i++) {
  	let elemI = arr[i];
   	for (let j = 0; j < arr.length - 1;j++) {
   	let	sum = elemI + arr[j+1];
   // console.log("M = ", arr[i], "N = ", arr[j+1], "Cумма = ", sum);
    if (sum === 7) {   	
   	console.log("M = ", elemI, "N = ", arr[j+1], "Cумма = ", sum);
   }
   }	
   }	
   
/*2. Вывести через console.log все числа от 1 до 100,
 с двумя исключениями. 
Для чисел, нацело делящихся на 3, она должна выводить ‘Three’, 
а для чисел, делящихся на 5 (но не на 3) – ‘Five’. 
Измените код так, чтобы она выводила «ThreeFive» 
для всех чисел, которые делятся и на 3 и на 5.   
*/


for (let i = 1; i <= 100; i++) {

		//console.log(i);
	if(i%3 === 0){
		console.log("Three= ",i);
	}
		if (i%5 === 0 && i%3 !== 0) {
		console.log("Five= ",i);
	}
		if (i%5 === 0 && i%3 === 0) {
		console.log("ThreeFive= ",i);
	} else{
		console.log(i);
	}
	
	continue;
}

/*3. Даны три числа. Определите, можно ли из отрезков
 с такими длинами составить треугольник. 
Определите вид треугольника (прямоугольный, 
тупоугольный, остроугольный), если он существует. 
*/

// Находим гипотенузу - максимальное число
let arr2 = [20, 30, 10];
c = arr2[0];
for (let i = 0; i < arr2.length; i++) {
	if (c < arr2[i]) c = arr2[i];
		continue;
	}
console.log("c = ", c);
let b =arr2[0];
for (let i = 0; i < arr2.length; i++) {
		if (arr2[i] < b < c) b = arr2[i];			
	 	continue;
   }   
   	console.log("b = ", b);
  	let a = arr2[0];
   	for (let i = 0; i < arr2.length; i++) {   		
		if (arr2[i] < c && arr2[i] > b) a = arr2[i];
	 	continue;	 	
   }   
   console.log("a = ", a);

//Определяем вид треугольника
   if (c*c < a*a + b*b) {

   	console.log("Вид остроугольный");
   } else if (c*c === a*a + b*b) {
   	console.log("Вид прямоугольный");
   }else if (c*c > a*a + b*b) {
   	console.log("Вид остроугольный");
   }else{
	console.log("Не Определить");
   }