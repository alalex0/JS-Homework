//создаем объекты класса Cat
//создаем кота
let murzik = new Cat('Мурзик', 6, 5, 15);
let grand = new Cat('Гранд', 4, 6, 17);
let cat = new Cat('Бездомный', 5, 7, 17);

grand.fight(cat);
murzik.fight(cat);

//передача массива
let cataary = [murzik, grand];
//cat.fight(cataary);
