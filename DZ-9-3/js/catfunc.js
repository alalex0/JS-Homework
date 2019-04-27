/*
Создать класс Cat. 
   У кота должно быть имя - name, 
   возраст - age, 
   вес - weight, 
   сила - strength.
   
   Реализовать метод  fight(anotherCat):
   реализовать механизм драки котов в зависимости от их веса,
   возраста и силы. Зависимость придумать самостоятельно.
   Метод должен определять, выиграли ли мы бой или нет, т.е. 
   возвращать true, если выиграли и false - если нет.
*/
class Cat {
	constructor(name, age, weight, strenght) {
		this._name = name;
		this._age = age;
		this._weight = weight;
		this._strenght = strenght;
	}
	fight(enemyCat){
		//передаем второко кота
		//Механизм драки котов
		//в зависимости от их веса, возраста и силы
			function win() {
				return true;
			};
			function lost(){
				return false;
			};
		console.log(enemyCat._name, 'напал на', this._name);
		
		if(this._age > enemyCat._age && this._weight > enemyCat._weight){
			//console.log(this._name, 'выйграл Домашний кот');
			console.log(win());
			return;
		}else if(this._strenght > enemyCat._strenght){
			//console.log(this._name, "выйграл Домашний кот");
			console.log(win());
			return;
		}
			//console.log(Math.max(this._strenght, enemyCat._strenght), "сила enter");
			this._strenght = Math.random() * (enemyCat._strenght + 2 - this._strenght) + this._strenght - 1;
			console.log(this._strenght, "сила", this._name);
			console.log(enemyCat._strenght, "сила", enemyCat._name);
			if(this._strenght > enemyCat._strenght){
				//console.log(this._name, "выйграл Домашний кот");
				console.log(win());
				return;
			}
			//console.log(enemyCat._name, "выйграл");
			console.log(lost());
			
				
	}
	get name() {
		return this._name;
	}
	get weight() {
		return this._weight;
	}
	get age() {
		return this._age;
	}
	get strenght() {
		return this._strenght;
	}
}