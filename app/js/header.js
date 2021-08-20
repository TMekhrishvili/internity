const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const btnClose = document.querySelector("#close");
const fade = document.querySelectorAll('.fade');
const mobileMenuItem = document.querySelectorAll('.header-mobile-menu-item');
const overley = document.querySelector(".overley");
const menuItem = document.querySelectorAll(".header-menu-nav-item");

// hamburger menu functional
// open hamburger menu
hamburger.addEventListener("click", () => {
    body.classList.add('noscroll');
    fade.forEach(function (element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
});

// close hamburger menu
const closeHamburger = () => {
    body.classList.remove('noscroll');
    fade.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
}

// on close button
mobileMenuItem.forEach(element => {
    element.addEventListener("click", closeHamburger);
});

// on overley
overley.addEventListener("click", closeHamburger);

// on mobile menu item
btnClose.addEventListener("click", closeHamburger);

// menu item - active
menuItem.forEach(element => {
    element.addEventListener("click", () => {
        const active = document.querySelector(".active");
        active.classList.remove("active");
        element.classList.add("active");
    });
});
