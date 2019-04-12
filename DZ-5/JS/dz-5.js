(function () {
    'use strict';


/*
let animal = {
    ru:["кот","собака","тигр"],
    en:["cat","dog","tiger"]

};
console.log(animal.ru[0]);

*/




let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5
        }
    };
/*
    let a = "price";
    console.log(goods.harp[a])
console.log(Object.keys(goods));
console.log(Object.getOwnPropertyNames(goods));
*/
/*
1. Написать функцию со следующими аргументами: 
объект, from (значение от), to (значение до).
Функция должна вернуть объект с товарами, цены 
которых лежат в диапазоне от значения from до значения to.
Пример вызова функции getGoods(goods, 2000, 3000); 
в данном случае функция должна вернуть все товары, 
у которых цена в диапазоне от 2000 до 3000. Для проверки
 функции используйте объект goods из файла с урока. 
*/

function getGoods(obj, from, to){
    let resobj = {}; 
    for (let key in obj){
        console.log("key", key);
        console.log(obj[key]);
        console.log(obj[key]["price"]);
        if(obj[key]["price"] >= from && obj[key]["price"] <= to){
            resobj[key] = obj[key];
        }

    }
    //console.log(resobj);
    return resobj;
}
console.log(getGoods(goods, 2000, 3000));
/*

function getGoods(goods, from, to) {
    let arrKey = [];
    let objSortPrice = {};
    arrKey = Object.keys(goods);
    for (let i = 0; i < arrKey.length; i++) {
     if (goods[arrKey[i]]['price'] >= from && goods[arrKey[i]]['price'] <= to) {
        objSortPrice[arrKey[i]] = goods[arrKey[i]];
        //console.log(arrSortPrice);
        }         
    }
    return objSortPrice;
}
console.log(getGoods(goods, 2000, 3000));
*/
/*
2. Написать функцию addToCart(obj, title, countToCart) {} ,
 где  obj - объект, title - название товара, 
count - количество товара, которое нужно добавить в корзину.
Функция ищет товар с указанным названием, если количество 
позволяет, 
то уменьшает количество товара на countToCart, если не
 позволяет, 
то выводит информацию об этом в консоль и завершает работу. 
 Для проверки функции используйте объект goods из файла с урока.
*/   
function addToCart(obj, title, countToCart) {
    let arrKey = [];
    let count;
    let countnal;
    arrKey = Object.keys(obj);
    for (let i = 0; i < arrKey.length; i++) {
                let card = obj[arrKey[i]]['title'];
            if(card === title) {
                countnal = obj[arrKey[i]]['count'];
                count = countnal - countToCart;
                if(count < 0){
                console.log("Не достаточно товара, " + "Всего товара: ", countnal);
                return count;
                }
            }
    }
    return count;
}
console.log(addToCart(goods, "Флейта", 51));

/*
3. Напишите функцию, которая отсортирует массив объектов books
по значению свойства title. Объект в файле с занятия.
*/

 let books = [
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'}
    ];
   
function sortTitle(books) {

        books.sort(function (a, b){
            console.log(a.title);
            console.log(b.title);
        if(a.title > b.title){
            return 1;
        }
        if(a.title < b.title){
            return -1;
        }
            return 0;
        });
        console.log(books);
        return books;
}
console.log(sortTitle(books));

/*function sortBooks(arr) {
arr.sort(function (a, b) {

});
}
*/

/*
4. Создаa.йте объект с днями недели. Ключами в нем должны 
служить номера дней от начала недели (понедельник - первый
 и т.д.). 
Выведите на экран текущий день недели.
*/

let day = {
        1: {
            Monday: "понедельник"
        },
        2: {
            Tuesday: "вторник"
        },
        3: {
            Wednesday: "среда"
        },
        4: {
            Thursday: "четверг"
        },
        5: {
            Friday: "пятница"
        },
        6: {
            Saturday: "суббота"
        },
        7: {
            Sunday: "воскресенье"
        }
    };


console.log(Object.keys(day));
console.log(day[6]['Saturday']);








    
}());