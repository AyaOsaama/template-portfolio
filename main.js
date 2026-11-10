let myName = document.getElementById('myName')
console.log(myName);
let cardProject = document.getElementsByClassName('project-card')
console.log(cardProject);
let artical= document.querySelector('.project-container article')
console.log(artical);
let articalAll= document.querySelectorAll('.project-container article')
console.log(articalAll);



articalAll.forEach((articile)=>console.log(articile.querySelector('p')))

let a = document.getElementsByTagName('a')
console.log(a);
myName.textContent='Aya Osama'
myName.innerHTML='<p>Aya Osama</p>'

// --------------------
let button= document.querySelector('.button')
button.style.backgroundColor = "pink"; 
button.style.color = "white"; 
button.style.padding = "10px 20px"; 
button.style.borderRadius = "5px"; 
