//HAMBURGER MENU
const hamBurger = document.querySelector('nav.mobile-nav div');
const wholeNav = document.querySelector('.mobile-nav');
const menu = document.querySelector('.desktop-nav');

function toggleNav(){
    hamBurger.classList.toggle('active');
    menu.classList.toggle('active');
}
wholeNav.addEventListener('click', toggleNav);

//More Speakers On Mobile
const moreBtn = document.querySelector('.more-button');