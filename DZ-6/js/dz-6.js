let articles = [
    {
        id: 1,
        title: "JS",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 2,
        title: "PHP",
        description: "Описание",
        author: "Mike"
    },
    {
        id: 3,
        title: "HTML",
        description: "Описание",
        author: "Alex"
    },
    {
        id: 4,
        title: "Базы Данных",
        description: "Описание",
        author: "Peter"
    }
];
    articles.reverse();
    //console.log(articles);
   // console.log(Object.keys(articles));
    let arrnew = [];
for (let i = 0; i < articles.length; i++) {

    arrnew = Object.keys(articles[i]);
   // console.log(Object.keys(articles[0]));
       
}
//console.log(arrnew);
createTable(articles);

function createTable(arr) {
    
            let table = document.getElementById("table");

            let row = table.insertRow(0);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);

            
            cell1.innerText = arrnew[0];
            cell2.innerText = arrnew[1];
            cell3.innerText = arrnew[2];
            cell4.innerText = arrnew[3]; 
            
   
   for (let i = 0; i < arr.length; i++) {         
            table.setAttribute("border", "1");
     
            let caption = table.createCaption();
                caption.innerText = 'Таблица';
       
             row = table.insertRow(1);
           

            let cell5 = row.insertCell(0);
            let cell6 = row.insertCell(1);
            let cell7 = row.insertCell(2);
            let cell8 = row.insertCell(3);
           
            
            cell5.innerText = arr[i]['id'];
            cell6.innerText = arr[i]['title'];
            cell7.innerText = arr[i]['description'];
            cell8.innerText = arr[i]['author'];
    
  
     }  
            
}
let titleElem = document.querySelectorAll("tr > td");
for (let i = 0; i < titleElem.length; i++) {
    titleElem[i].addEventListener('click',sortEle);
   // let title = this.innerHTML;
}
function sortEle() {
    console.log(this);
    let title1 = this.innerHTML;
    console.log(title1);
    function sortTitle(books) {

        books.sort(function (a, b){
            console.log(a[title1]);
            console.log(b[title1]);
        if(a[title1] > b[title1]){
            return 1;
        }
        if(a[title1] < b[title1]){
            return -1;
        }
            return 0;
        });
        console.log(books);
        return books;
    };
    console.log(sortTitle(articles));
}

/*
let arrtitle = [];
let titleElem = document.querySelectorAll("tr > td");
for (let i = 0; i < titleElem.length; i++) {
    titleElem[i].addEventListener('click',sortEle);
   // let title = this.innerHTML;
}
//console.log(titleElem[0].innerHTML);
console.log(arrtitle);
function sortElem() {
}
//console.log(title);
function sortEle(articles) {
   // console.log(this.innerHTML);
   let title = this.innerHTML;
//    console.log('его соседний элемнт справа', this.nextElementSibling);
        articles.sort(function (a, b){
            console.log(a.title);
            console.log(b.title);
        if(a.this.innerHTML > b.title){
            return 1;
        }
        if(a.title < b.title){
            return -1;
        }
            return 0;
        });
       // console.log(books);
        return articles;
           
}

console.log(sortEle(articles));
*/