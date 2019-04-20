/*
2. Создать фигуры: Circle, Rectangle, Triangle, 
у которых будут координаты. Все фигуры должны
иметь методы, которые возвращают площадь и 
периметр (для окружности - длина окружности).
*/
let Coord = function (name, a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
  this.name = name;
};
Coord.prototype.resPerimetr = function() {
	if(this.name === 'Окружность'){
		let perimetr = 2 * 3.14 * this.a;
		console.log("Периметр " + this.name + '=' + parseInt(perimetr));
		return;
	}
	this.perimetr = this.a + this.b + this.c + this.d;
  console.log("Периметр " + this.name + '=' + this.perimetr);
};
Coord.prototype.resSquare = function() {
	if('Окружность' === this.name) {
		let square = 3.14 * Math.pow(this.a, 2);
		console.log("Площадь" + this.name + '=' + square);
		return;
	}
	if(this.name === "Треугольник") {
		//проверка на треугольник
		let hafp = this.perimetr/2;
		let square = Math.sqrt(hafp*(hafp - this.a)*(hafp - this.b)*(hafp - this.c));
		console.log("Площадь" + this.name + '=' + square);
		return;
	}
	if(this.name === "Прямоугольник") {
		//проверка на прямоугольник		
		let square = this.a*this.b;
		console.log("Площадь" + this.name + '=' + square);
		return;
	}
};

//вводим длины сторон (значения) Треугольника
let Triangle = new Coord('Треугольник', 3, 4, 5, 0);
// вызываем метод trianglePerimetr() 
//класса Triangle для вывода периметра
Triangle.resPerimetr(); 
Triangle.resSquare();

//Прямоугольник
let Rectangle = new Coord('Прямоугольник', 5, 8, 5, 8);
Rectangle.resPerimetr();
Rectangle.resSquare();

//Окружность
let Circle = new Coord('Окружность', 5);
Circle.resPerimetr();
Circle.resSquare();
