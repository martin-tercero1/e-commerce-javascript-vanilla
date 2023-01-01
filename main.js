const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const hamburguerMenu = document.querySelector('.menu-icon');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.my-order');

navbarEmail.addEventListener('click', toggleDesktopMenu);
hamburguerMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu() {
    if (!shoppingCart.classList.contains('inactive')) {
        shoppingCart.classList.add("inactive");
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    if (!shoppingCart.classList.contains("inactive")) {
      shoppingCart.classList.toggle("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
    if (!desktopMenu.classList.contains('inactive')) {
        desktopMenu.classList.add("inactive");
    } else if (!mobileMenu.classList.contains('inactive')) {
        mobileMenu.classList.add("inactive");
    }
    shoppingCart.classList.toggle('inactive');
}