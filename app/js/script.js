const body = document.querySelector('body');
const hamburger = document.querySelector('#hamburger');
const btnClose = document.querySelector("#close");
const fade = document.querySelectorAll('.fade');
const mobileMenuItem = document.querySelectorAll('.header-mobile-menu-item');
const overley = document.querySelector(".overley");
hamburger.addEventListener("click", function () {
    console.log("clicked");
    body.classList.add('noscroll');
    fade.forEach(function (element) {
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    });
});

const closeHamburger = () => {
    console.log("close");
    body.classList.remove('noscroll');
    fade.forEach(element => {
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
}

// close hamburger menu on click on menu item or close button
mobileMenuItem.forEach(element => {
    element.addEventListener("click", closeHamburger);
});
overley.addEventListener("click", closeHamburger);
btnClose.addEventListener("click", closeHamburger);


