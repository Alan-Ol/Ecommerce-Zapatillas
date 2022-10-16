
// active menus
let search = document.querySelector ('.search-box')

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}



//navbar

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

// remove menu and seacrch icon 
window.onscroll = () =>{
    navbar.classList.remove('active');
    search.classList.remove('active');

}

//header animation

let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('active', window.scrollY > 0);
})

