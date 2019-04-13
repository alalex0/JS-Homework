

let goods = {
        piano: {
            title: "Пианино",
            price: 3000,
            count: 25,
            img: "fon2.jpg"
        },
        guitar: {
            title: "Гитара",
            price: 1200,
            count: 40,
            img: "fon.jpg"
        },
        drum: {
            title: "Барабаны",
            price: 2700,
            count: 12,
            img: "fon6.jpg"
        },
        flute: {
            title: "Флейта",
            price: 900,
            count: 50,
            img: "fuel.jpg"
        },
        harp: {
            title: "Арфа",
            price: 3400,
            count: 5,
            img: "fon4.jpg"
        }
    };

function creatHTM(obj){
for (key in obj) {
    console.log(obj[key].title);
    let title = document.createElement("h2");
    title.innerText = obj[key].title;
   // console.log(obj[key].price);
    let price = document.createElement("p");
    price.innerText = obj[key].price;
    price.classList.add('p');
    title.classList.add('h2');
    
    console.log(obj[key].img);
    let img = document.createElement("img");
    img.setAttribute("src", 'image/' + obj[key].img);
    img.classList.add("img");
    let div = document.createElement('div');
    div.appendChild(title);
    div.appendChild(img);
    div.appendChild(price);
    let goodsDiv = document.getElementById("goods");
    goodsDiv.appendChild(div);
    //  добавить класс
    //ul.classList.add("class-name");
}

}
creatHTM(goods);
/*
    let goods = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");

    body.appendChild(div1);*/