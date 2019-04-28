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


let genTable = {
    init: function(data) {
        this.table =document.createElement('table');
        this.table.setAttribute('border', '1'); 
        this.data = data;
        console.log(this);
    },
    genCaption: function() {
        let captonRow = this.table.insertRow();
        for(key in this.data[0]){
            let cell = captonRow.insertCell();
            cell.innerText = key;
            console.log(key);
            cell.classList.add('caption-cell');

        }
    },
    genContent: function() {
        for (let i = 0; i < this.data.length; i++) {
            let row = this.table.insertRow();
            for(let key in this.data[i]){
                let cell = row.insertCell();
                cell.innerText = this.data[i][key];
                cell.classList.add('content-cell');
            }
        }
    },
   
    getTable: function(data) {
        
        this.init(data);
        this.genCaption();
        this.genContent();
         
        return this.table;
    }
    

};

clikTable();

function sortEle() {
     let newart = new Object();
    console.log(this);
    let title1 = event.target.innerHTML;
    console.log(title1);
    function sortTitle() {

        articles.sort(function (a, b){
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
    };
        sortTitle();
        let table = document.querySelector('table');
        table.remove();
        clikTable();
}  

function clikTable() {
     let conteinerTable = document.getElementById('table');
    conteinerTable.appendChild(genTable.getTable(articles));

    let titleElem = document.querySelectorAll("tr > td");
    for (let i = 0; i < titleElem.length; i++) {
        titleElem[i].addEventListener('click',sortEle);
   
    }

}