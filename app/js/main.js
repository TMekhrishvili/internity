const selects = document.querySelectorAll('.select');
const positions = document.querySelectorAll('.position-item');
const choosenPosition = document.querySelector('#choosen-position');
const other = document.querySelector('#other');
const othP = document.querySelector("#other-position");
const otherPosition = document.querySelector('#other-position-container');

const regions = document.querySelectorAll('.region-item');
const choosenRegion = document.querySelector('#choosen-region');

// toggle dropdown
selects.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains("region-container")) {
            const list = document.querySelector('#region-list');
            if (!element.classList.contains("open-select")) {
                element.classList.remove('close-region-dropdown');
                element.classList.add('open-select');
                list.classList.add('fd');
                element.classList.add('show-region-dropdown');
            } else {
                element.classList.remove('open-select');
                list.classList.remove('fd');
                element.classList.remove('show-region-dropdown');
                element.classList.add('close-region-dropdown');
            }
        }
        if (element.classList.contains("position-container")) {
            const list = document.querySelector('#position-list');
            if (!element.classList.contains("open-select")) {
                element.classList.remove('close-position-dropdown');
                element.classList.add('open-select');
                list.classList.add('fd');
                element.classList.add('show-position-dropdown');
            } else {
                element.classList.remove('open-select');
                list.classList.remove('fd');
                element.classList.remove('show-position-dropdown');
                element.classList.add('close-position-dropdown');
            }
        }
    });
});

// choose position
positions.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.textContent;
        choosenPosition.innerText = value;
        choosenPosition.classList.add("choosen");
        otherPosition.classList.add("hide");
    });
});

other.addEventListener("click", () => {
    choosenPosition.classList.remove("choosen");
    choosenPosition.innerText = other.textContent;
    otherPosition.classList.remove("hide");
    const el = document.querySelector('#other-position');
    el.focus();
});

// choose region
regions.forEach(element => {
    element.addEventListener('click', () => {
        const value = element.textContent;
        choosenRegion.innerText = value;
        choosenRegion.classList.add("choosen");
    });
});


// toggle checkbox checked
const checkbox = document.querySelectorAll(".checkbox");
checkbox.forEach(element => {
    element.addEventListener("click", () => {
        if (element.classList.contains('checked')) {
            element.classList.remove('checked');
        } else {
            element.classList.add('checked');
        }
    });
});


// toggle showing password
const eyes = document.querySelectorAll(".eye");

eyes.forEach(element => {
    element.addEventListener("click", () => {
        let previousSibling = element.previousElementSibling.previousElementSibling;
        const src = element.getAttribute('src');
        if (src.includes('opened')) {
            previousSibling.setAttribute("type", "text");
            element.setAttribute("src", "./app/assets/images/closed-eye.svg");
        } else {
            previousSibling.setAttribute("type", "password");
            element.setAttribute("src", "./app/assets/images/opened-eye.svg");
        }
    });
});
