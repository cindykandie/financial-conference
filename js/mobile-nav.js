const hamBurger = document.querySelector('nav.mobile-nav div');
const menu = document.querySelector('.desktop-nav');

function toggleNav(){
    hamBurger.classList.toggle('active');
    menu.classList.toggle('active');
}
hamBurger.addEventListener('click', toggleNav);