const hamburger = document.getElementById('hamburger');
const ul = document.querySelector('nav ul');


hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('show');
})