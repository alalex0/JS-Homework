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

createTable(articles);

function createTable(arr) {
    for (let key in arr){
        console.log(arr[key]);
    let allTables = document.getElementsByTagName("table");
    let table = allTables[0];
    console.log(table);
    table.setAttribute("border", "1");
    let th = document.createElement('th');
    let tr = document.createElement('tr');
    
    let thead = document.getElementByTagName('thead');
   // thead.setAttribute("border", '1');
   console.log(thead);
    th.document.createTextNode("Elem 3");
    thead.appendChild(tr);
    tr.appendChild(th);

    let caption = table.createCaption();
    caption.innerText = 'Таблица';
    
    
   // li3.appendChild(document.createTextNode("Elem 3"));
   // ul.appendChild(li1);



    let row = table.insertRow(0);
      
      

    let cell2 = row.insertCell(0);
    let cell3 = row.insertCell(1);
    let cell4 = row.insertCell(2);
    let cell5 = row.insertCell(3);
    
    
    cell2.innerText = arr[key]['id'];
    cell3.innerText = arr[key]['title'];
    cell4.innerText = arr[key]['description'];
    cell5.innerText = arr[key]['author'];
  
    }
}
