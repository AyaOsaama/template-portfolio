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
// -----2
myName.className='Name Section'
console.log(myName.className);
// ---------3
button.classList.add("active");  
// Remove a class 
button.classList.remove("disabled");  
// Toggle a class (add if missing, remove if present) 
// button.classList.toggle("visible");  
// Check for a class 
console.log(button.classList.contains("active"));


// -----------4
button.addEventListener('click',()=>{
    
    button.classList.toggle("visible");  
    console.log(button.className);
})
// challange dark mode light mode
// Select the button
let themeButton = document.getElementById('themeToggle');
let body = document.querySelector('body');
let nav = document.querySelector('nav');

// Add click event
themeButton.addEventListener('click', () => {

    // Toggle dark mode class
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {

        themeButton.textContent = '☀️ Light Mode';

        body.style.backgroundColor = "black";
        body.style.color = "white";

        nav.style.backgroundColor = "black";
        nav.style.color = "white";

        themeButton.style.backgroundColor = "white";
        themeButton.style.color = "black";

    } else {

        themeButton.textContent = '🌙 Dark Mode';

        body.style.backgroundColor = "white";
        body.style.color = "black";

        nav.style.backgroundColor = "white";
        nav.style.color = "black";

        themeButton.style.backgroundColor = "black";
        themeButton.style.color = "white";
    }

    
});


button.addEventListener("click", (event) => {

    console.log(event);

});