
function getPresents() {
    return {
        car: "Машина",
        notpriz: "Нет подарка",
        book: "Книга",
        pen: "Карандаш",
        pensel: "Ручка"
    }
}
  function getPresentRandom () {
    let arr =  ['car', 'notpriz', 'book', 'notpriz', 'pen', 'notpriz', 'pensel'];
    let random = Math.floor(Math.random()*arr.length);
    return arr[random];
  }
 

let presentContainer =
    document.getElementById("present_container");

presentContainer.addEventListener("click", showPresent);

function showPresent(event) {
        let clickElem = event.target;       
        let countPresent = count();
        let present = clickElem.dataset.present;
    if(countPresent >= 3 || !(present === 'notpriz')){     
        this.removeEventListener("click", showPresent);

        let p1 = document.createElement("span");
        let h4 = document.getElementById("h4");
        let parenth4 = h4.parentNode;
        let priz = getPresents();
        p1.appendChild(document.createTextNode("Ваш подарок выбран: " + priz[present]));
        parenth4.insertBefore(p1, h4);
        p1.setAttribute("id", "priz");

    }    
    if (present) {       
        let sp1 = document.createElement("h4");
        sp1.setAttribute("id", "h4");
        let sp1_content = document.createTextNode("У Вас 3 попытки для выбора подарка: " + countPresent);
        sp1.appendChild(sp1_content);
        let sp2 = document.getElementById("h4");
        let parent = sp2.parentNode;
        parent.replaceChild(sp1, sp2);
        let presents = getPresents();       
        clickElem.innerText = presents[present];
        clickElem.classList.add("present");
    }

}

function getBox(n) {

    for (let i = 0; i < n*n - 1; i++) {
        let p1 = document.createElement("p");
        let p2 = document.getElementById("present");
        let parentp2 = p2.parentNode;
        let present = getPresentRandom();
        p1.setAttribute("data-present", present);
        p1.appendChild(document.createTextNode("Подарок"));
        parentp2.insertBefore(p1, p2);
    }
}
getBox(3);

function makeCounter() {
    let currentCount = 1;
    return function() {
     return currentCount++;
    };
}
let count = makeCounter();


window.addEventListener("scroll", fixedMenu);

let fixedBlock = document.getElementById("fixed");
let fixedBlockOffset = fixedBlock.offsetTop;
console.log(fixedBlockOffset);

function fixedMenu() {
    console.log(window.pageYOffset);
    if (window.pageYOffset > fixedBlockOffset) {
        fixedBlock.classList.add("fixed");
    } else {
        fixedBlock.classList.remove("fixed");
    }
}

