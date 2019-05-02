/*2. Задания по fieldset (папка lesson7, файл form-events.html).
    1. "Выбор цвета": в зависимости от выбранной радиокнопки 
    окрашивать fieldset в тот или иной цвет.
    2. "Выбор языка программирования": выводить в консоль
     значения отмеченных чекбоксов. 
    Пользователь отмечает какой-то чекбокс, его значение 
    выводится в консоль, 
    пользователь отмечает еще один в консоль выводятся значения 
    обоих и тд. Аналогично при отмене выбора.
    3. "Отметьте, если указать другую информацию": когда пользователь
     ставит галочку на данном чекбоксе, поле ниже
    становистя доступным для редактирования, снимает галочку - поле
     блокируется.

*/
let form = document.forms.lesson;

let color = form.elements.color;
for (let i = 0; i < color.length; i++) {
    color[i].addEventListener('click',showColor);
}
function showColor(){
    form.elements.cheсkbox_fieldset.style.background = this.value;
}
//активация поля
let elem = form.elements.disabledOnOff;
console.log(elem);
elem.addEventListener('click', activat);

function activat() {
    console.log(this.checked);
    form.elements.disabled.disabled = !this.checked;
}
let lang = form.elements.lang;
console.log(lang);
for (let i = 0; i < lang.length; i++) {
    lang[i].addEventListener("click", showLang);
}
function showLang() {
    console.log(this.value);
}