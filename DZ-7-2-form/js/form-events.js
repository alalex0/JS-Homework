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
let colorRadio = form.elements.color;
form.elements.checkbox_fieldset.style.background = colorRadio.value;

let col = document.getElementById('checkbox_fieldset');
col.addEventListener('click', showEventObj);

function showEventObj(event){
    //console.log(event);
    let form = document.forms.lesson;
    let colorRadio;
   // console.log(colorRadio.value);
    let color1 = document.getElementById('color1');
    let color2 = document.getElementById('color2');
   
    if(color1.checked){ 
        colorRadio = form.elements.color1
        form.elements.checkbox_fieldset.style.background = colorRadio.value;
       // console.log(colorRadio.value);
    }

    if(color2.checked){ 
        colorRadio = form.elements.color2;
        form.elements.checkbox_fieldset.style.background = colorRadio.value;
        //console.log(colorRadio.value);
    }
    event.preventDefault();
}
/*
// доступ к форме по значению атрибута name
let form = document.forms.lesson;
console.log(form);

// получение элементов формы по значению атрибута name
let login = form.elements.login;
console.log(login);

// получение и установка значений
console.log(login.value);
login.value = "qwe";


let colorRadio = form.elements.color;
console.log(colorRadio);
let checkedValue = colorRadio.value;
console.log(checkedValue);
checkedValue = 'red'; 
console.log(colorRadio);

for (let i = 0; i < colorRadio.length; i++){
    if (colorRadio[i].checked) {
        form.elements.checkbox_fieldset.style.background =
            colorRadio[i].value;
    }
}

function getCheckedCheckBoxes(name) {
    let checkBoxes = document.getElementsByName(name);
    // массив для выбранных чекбоксов
    let checkBoxChecked = [];

    for (let i = 0; i < checkBoxes.length; i++){
        if (checkBoxes[i].checked) {
            checkBoxChecked.push(checkBoxes[i].value);
            console.log("значение чекбокса:", checkBoxes[i].value);
        }
    }
    return checkBoxChecked;
}
let langArr = getCheckedCheckBoxes('lang[]');
console.log(langArr);

let checkBox1 = form.elements['lang[]'];
console.log(checkBox1);

// выпадающий список
let countries = form.elements.countries;
console.log(countries);
console.log(countries.length);
for (let i = 0; i < countries.length; i++){
    // console.log(countries[i]);
    if (countries[i].selected) {
        console.log("selected country", countries[i].value);
    }
}

form.addEventListener('submit', takeForm);

function takeForm(event) {
    event.preventDefault();// отмена события по умолчанию
    console.log(this); // form
    let formData = new FormData(this);
    console.log(formData);
    console.log(formData.getAll("lang[]"));
    console.log(formData.get("login"));
}

let info = {
    login: {
        error: "Введите валидный логин",
        success: "Логин введен правильно"
    },
    pwd: {
        error: "Введите валидный пароль",
        success: "Пароль введен правильно"
    }
};


let validateFields = {
   login: form.elements.login,
   pwd: form.elements.pwd
};

let rules = {
    login: 3,
    pwd: 6
};

let formValidator = {
    init: function (info, fields, rules) {
        this.info = info;
        this.fields = fields;
        this.rules = rules;
    },
    addListeners: function () {
        for (let key in this.fields) {
            this.fields[key]
                .addEventListener('blur', this.showResult.bind(this));
        }
    },
    showResult: function () {

    }
};

// blur
// focus

login.addEventListener('focus', focusOnElem);
function focusOnElem() {
    console.log("focus on", this);
    console.log("focus on", login);
}

login.addEventListener('blur', focusOut);
function focusOut() {
    console.log("login value =", this.value);
}

*/