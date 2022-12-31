const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburguerMenu = document.querySelector('.menu-icon');

navbarEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    console.log('click');
    mobileMenu.classList.toggle('inactive');
}