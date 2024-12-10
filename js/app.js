/*
const section = document.querySelector('section');
const vipArticle = document.querySelector('.vip');
const article = document.querySelector('article');
const allArticles = document.querySelectorAll('article');

console.log(`Section`, section);
console.log(`VIP article`, vipArticle);
console.log(`Article`, article);
console.log(`All articles`, allArticles);
*/

/*section.style.backgroundColor = "#bbda";

for(const article of allArticles){
    article.addEventListener('click',()=>{
        article.style.backgroundColor = 'aqua';
    })
}*/

/*
for(const article of document.querySelectorAll('article')){
    article.addEventListener('click',()=>{
        article.style.backgroundColor = 'aqua';
        article.style.textTransform = 'uppercase';
        article.textContent = "Kitas naujienos tekstas";
        article.innerHTML = "<strong>Tekstas</strong> kitas tekstas"
    })
}
*/

/* elementu pasirinkimui naudojame:
document.querySelector('.antraste');
document.querySelectorAll(); //masyvas
*/

/*atlikus ivyki (click), t.y. paspaudus pasirinkta
elementa-mygtuka, bus atliekama funkcija - pakeiciamas
kiekvienos pastraipos tekstas i tai, ka vartotojas
ivede input lauke*/

document.querySelector('.input button').addEventListener('click',()=>{
    for(const text of document.querySelectorAll('article p')){
        text.textContent = document.querySelector('input').value;
    }
})

document.querySelector('.calculate button').addEventListener('click',()=>{
    const numberOne = document.querySelector('.numberOne').value;
    const numberTwo = document.querySelector('.numberTwo').value;
    document.querySelector('.calculate p').textContent = parseFloat(numberOne) + parseFloat(numberTwo);
})

//parseFloat - pakeicia kintamojo tipa i float

document.querySelector('.taskList button').addEventListener('click',()=>{
    const task = document.querySelector('.taskList input').value;
    //1. Sukurti li elementa
    const li = document.createElement('li');
    //2. Li elementui priskirti ivesta turini
    li.textContent = task;
    //3. Li elementa ideti i ul
    document.querySelector('ul').appendChild(li);
})


